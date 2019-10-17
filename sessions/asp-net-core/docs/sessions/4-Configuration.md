# Configuration in ASP.NET Core

[Reference Doc](https://docs.microsoft.com/en-us/aspnet/core/fundamentals/configuration/?view=aspnetcore-3.0)

In this session, we'll be discussing the new .NET Core configuration system and implementing some configuration settings for the Host and Application.  

We will look at the Options Pattern and how to inject configuration using the Dependency Injection system.  We will also look at how to use the configuration system to bind settings to POCO objects.

We will finish the session with a discussion on security and how to keep secrets safe within the configuration system.

## Default Configuration

[Reference Doc](https://docs.microsoft.com/en-us/aspnet/core/fundamentals/host/generic-host?view=aspnetcore-3.0#default-builder-settings)

The out of the box templates utilize the `CreateDefaultBuilder` call to build the Host.  This call adds the `AddJSONFile` call that points to the appSettings.json file with reloadOnChange=True

Discuss the following

- Adding of CommandLine args to configuration object
- AppSettings.json and AppSettings.{Environment}.json
- Adding environment variables to configuration object

## Configuration Providers

- Azure Key Vault
- Azure App Configuration
- Command-line arguments
- Custom providers (installed or created)
- Directory files
- Environment variables
- In-memory .NET objects
- Settings files

## Options Pattern

[Reference Doc](https://docs.microsoft.com/en-us/aspnet/core/fundamentals/configuration/options?view=aspnetcore-3.0)



## Secret Manager
- Enable Secret Manager `dotnet user-secrets init`
- Add Secret `dotnet user-secrets set`
- JSON flattening
- Set multiple secretes: Bootstrap Secret Manager
- `CreateDefaultBuilder` calls `AddUserSecrets()` by default when Environment is Development. [Access Secrets](https://docs.microsoft.com/en-us/aspnet/core/security/app-secrets?view=aspnetcore-3.0&tabs=windows#access-a-secret)
- [Mapping to POCO](https://docs.microsoft.com/en-us/aspnet/core/security/app-secrets?view=aspnetcore-3.0&tabs=windows#map-secrets-to-a-poco)
- String replacement: Use SqlConnectionStringBuilder using secrets.