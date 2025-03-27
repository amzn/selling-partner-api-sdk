# TheSellingPartnerApiForTransfers.PaymentMethodDetails

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**accountHolderName** | **String** | The name of the account holder who is registered for the payment method. | [optional] 
**paymentMethodId** | **String** | The payment method identifier. | [optional] 
**tail** | **String** | The last three or four digits of the payment method. | [optional] 
**expiryDate** | [**ExpiryDate**](ExpiryDate.md) |  | [optional] 
**countryCode** | **String** | The two-letter country code in ISO 3166-1 alpha-2 format. For payment methods in the &#x60;card&#x60; category, the code is for the country where the card was issued. For payment methods in the &#x60;bank account&#x60; category, the code is for the country where the account is located. | [optional] 
**paymentMethodType** | [**PaymentMethodType**](PaymentMethodType.md) |  | [optional] 
**assignmentType** | [**AssignmentType**](AssignmentType.md) |  | [optional] 


