## SP-API SDK Workflows

The following workflows are currently available:
* [Build Java SDK](https://github.com/amzn/selling-partner-api-sdk/blob/main/.github/workflows/build-java-sdk.yml)
* [Build PHP SDK](https://github.com/amzn/selling-partner-api-sdk/blob/main/.github/workflows/build-php-sdk.yml)
* [Run tests for Java SDK](https://github.com/amzn/selling-partner-api-sdk/blob/main/.github/workflows/test-java-sdk.yml)
* [Run tests for PHP SDK](https://github.com/amzn/selling-partner-api-sdk/blob/main/.github/workflows/test-php-sdk.yml)
* [Update mock backend resources](https://github.com/amzn/selling-partner-api-sdk/blob/main/.github/workflows/update-mock-backend-resources.yml)
* [Create Release](https://github.com/amzn/selling-partner-api-sdk/blob/main/.github/workflows/create-release.yml)

### Overview

Building and releasing the SDK is a multistep approach. Whenever one of the [clients](https://github.com/amzn/selling-partner-api-models/tree/main/clients) or [models](https://github.com/amzn/selling-partner-api-models/tree/main/models) from [Selling Partner API Models](https://github.com/amzn/selling-partner-api-models) changes, the build workflow is triggered in this repository. This automatically rebuilds the SDK for all programming languages and incorporates changes from upstream. When the SDK is built successfully and there are new changes, a PR will be automatically opened for review. For every PR that is created in this repository, multiple checks will get triggered automatically. These checks execute the test jobs for each programming languages to make sure that the changes don't break anything.

Whenever there is a meaningful set of changes to be released, the release workflow can be triggered manually. When triggering the workflow, a new version number must be specified. The workflow builds the SDK for each programming language, and publishes it to common package managers (e.g. Maven Central for Java). Additionally the latest commit on the main branch gets tagged with the specified version number and a new [release](https://github.com/amzn/selling-partner-api-sdk/releases) is created in Github.
