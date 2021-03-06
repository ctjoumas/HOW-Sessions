import { Component } from '@angular/core';
import { UpdateService } from './services/update.service';
import { MatSnackBar } from '@angular/material';
import { AdalService } from 'adal-angular4';

import { NotificationService } from './services/notification.service';
import { AppConfig } from './app.config';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [UpdateService]
})
export class AppComponent {
  title = 'My Tiny Library App!!!';
  constructor(notificationService: NotificationService, private snackBar: MatSnackBar,
    private adalService: AdalService, private authService: AuthService) {
    notificationService.showNotification.subscribe((notification) => {
      this.showSnackBar(notification.type, notification.message);
    });
    const adalConfig: adal.Config = {
        tenant: AppConfig.settings.aad.tenant,
        clientId: AppConfig.settings.aad.clientId,
        redirectUri: window.location.origin,
        navigateToLoginRequestUrl: true,
        postLogoutRedirectUri: window.location.origin,
        endpoints: AppConfig.settings.aad.endpoints
    };
    adalService.init(adalConfig);
    this.adalService.handleWindowCallback();
  }

  showSnackBar(type: string, message: string) {
    this.snackBar.open(`${type}: ${message}`, 'DISMISS', {
      duration: 10000
    });
  }

  isLoggedIn() {
    return this.authService.isUserAuthenticated;
  }

  userName() {
    return this.authService.userName;
  }

  signIn() {
    this.authService.login();
  }

  signOut() {
    this.authService.logout();
  }
}
