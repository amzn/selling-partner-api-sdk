## C# SDK for Selling Partner API
[![NuGet](https://img.shields.io/nuget/v/software.amzn.spapi?label=NuGet)](https://www.nuget.org/packages/software.amzn.spapi)

The Selling Partner API SDK for C# enables you to easily connect your C# application to Amazon's REST-based Selling Partner API.

* [Learn more about Selling Partner API](https://developer.amazonservices.com/)
* [Selling Partner API Documentation](https://developer-docs.amazon.com/sp-api/)


### Getting started

#### Credentials

Before you can use the SDK, you need to be registered as a Selling Partner API developer. If you haven't done that yet, please follow the instructions in the [SP-API Registration Overview](https://developer-docs.amazon.com/sp-api/docs/sp-api-registration-overview).
You also need to register your application to get valid credentials to call SP-API. If you haven't done that yet, please follow the instructions in [Registering your Application](https://developer-docs.amazon.com/sp-api/docs/registering-your-application).
If you are already registered successfully, you can find instructions on how to view your credentials in [Viewing your Application Information and Credentials](https://developer-docs.amazon.com/sp-api/docs/viewing-your-application-information-and-credentials).

#### Minimum requirements

To run the SDK you need dotnet 7.0 or higher.

#### Integrate the SDK

1. Find the latest version number [here](https://www.nuget.org/packages/software.amzn.spapi).
2. Add the dependency to your project 


##### NuGet

Add the following lines to the dependencies in your `yourProject.csproj` file:

```xml
   <ItemGroup>
    <Compile Include="Yourtest.cs" />
    <PackageReference Include="software.amzn.spapi" Version="1.1.2" />
  </ItemGroup>
```

### Use the SDK

In order to call one of the APIs included in the Selling Partner API, you need to:
1. Configure credentials (Note: Use your individual credentials for `clientId`, `clientSecret` and `refreshToken`)
2. Create an instance for a specific API
3. Call an operation

For an example, refer to the following sample code for connecting to Sellers API:
```csharp

using System;
using System.IO;
using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.Linq;
using System.Reflection;
using RestSharp;
using software.amzn.spapi;
using software.amzn.spapi.Client;
using software.amzn.spapi.Api;
using software.amzn.spapi.Model;
using Amazon.SellingPartnerAPIAA;
using software.amzn.spapi.Api.sellers.v1;
using software.amzn.spapi.Model.sellers.v1;
using System.Threading;

// Configure your LWA credentials
LWAAuthorizationCredentials lwaAuthorizationCredentials = new LWAAuthorizationCredentials
{
    ClientId = "yourClientId",
    ClientSecret = "YourClientSecret",
    RefreshToken = "YourRefreshToken",
    Endpoint = new Uri("https://api.amazon.com/auth/o2/token")
};

// Create an instance of the Sellers API
SellersApi sellersApi = new SellersApi.Builder()
    .SetLWAAuthorizationCredentials(lwaAuthorizationCredentials)
    .Build();

// Call operation
GetMarketplaceParticipationsResponse result = sellersApi.GetMarketplaceParticipations();
Console.WriteLine(result.ToJson());
```


### Giving Feedback

We need your help in making this SDK great. Please participate in the community and contribute to this effort by submitting issues, participating in discussion forums and submitting pull requests through the following channels:

Submit [issues](https://github.com/amzn/selling-partner-api-sdk/issues/new/choose) - this is the preferred channel to interact with our team
Articulate your feature request or upvote existing ones on our [Issues][sdk-issues] page

[sdk-issues]: https://github.com/amzn/selling-partner-api-sdk/issues






