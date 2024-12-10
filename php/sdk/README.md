# OpenAPIClient-php

Use the Orders Selling Partner API to programmatically retrieve order information. With this API, you can develop fast, flexible, and custom applications to manage order synchronization, perform order research, and create demand-based decision support tools. 

_Note:_ For the JP, AU, and SG marketplaces, the Orders API supports orders from 2016 onward. For all other marketplaces, the Orders API supports orders for the last two years (orders older than this don't show up in the response).

For more information, please visit [https://sellercentral.amazon.com/gp/mws/contactus.html](https://sellercentral.amazon.com/gp/mws/contactus.html).

## Installation & Usage

### Requirements

PHP 7.4 and later.
Should also work with PHP 8.0.

### Composer

To install the bindings via [Composer](https://getcomposer.org/), add the following to `composer.json`:

```json
{
  "repositories": [
    {
      "type": "vcs",
      "url": "https://github.com/GIT_USER_ID/GIT_REPO_ID.git"
    }
  ],
  "require": {
    "GIT_USER_ID/GIT_REPO_ID": "*@dev"
  }
}
```

Then run `composer install`

### Manual Installation

Download the files and include `autoload.php`:

```php
<?php
require_once('/path/to/OpenAPIClient-php/vendor/autoload.php');
```

## Getting Started

Please follow the [installation procedure](#installation--usage) and then run the following:

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');




$apiInstance = new OpenAPI\Client\Api\OrdersApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$order_id = 'order_id_example'; // string | An Amazon-defined order identifier, in 3-7-7 format.
$payload = new \OpenAPI\Client\models\orders\ConfirmShipmentRequest(); // \OpenAPI\Client\models\orders\ConfirmShipmentRequest | Request body of `confirmShipment`.

try {
    $apiInstance->confirmShipment($order_id, $payload);
} catch (Exception $e) {
    echo 'Exception when calling OrdersApi->confirmShipment: ', $e->getMessage(), PHP_EOL;
}

```

## API Endpoints

All URIs are relative to *https://sellingpartnerapi-na.amazon.com*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*OrdersApi* | [**confirmShipment**](docs/Api/OrdersApi.md#confirmshipment) | **POST** /orders/v0/orders/{orderId}/shipmentConfirmation | confirmShipment
*OrdersApi* | [**getOrder**](docs/Api/OrdersApi.md#getorder) | **GET** /orders/v0/orders/{orderId} | getOrder
*OrdersApi* | [**getOrderAddress**](docs/Api/OrdersApi.md#getorderaddress) | **GET** /orders/v0/orders/{orderId}/address | getOrderAddress
*OrdersApi* | [**getOrderBuyerInfo**](docs/Api/OrdersApi.md#getorderbuyerinfo) | **GET** /orders/v0/orders/{orderId}/buyerInfo | getOrderBuyerInfo
*OrdersApi* | [**getOrderItems**](docs/Api/OrdersApi.md#getorderitems) | **GET** /orders/v0/orders/{orderId}/orderItems | getOrderItems
*OrdersApi* | [**getOrderItemsBuyerInfo**](docs/Api/OrdersApi.md#getorderitemsbuyerinfo) | **GET** /orders/v0/orders/{orderId}/orderItems/buyerInfo | getOrderItemsBuyerInfo
*OrdersApi* | [**getOrderRegulatedInfo**](docs/Api/OrdersApi.md#getorderregulatedinfo) | **GET** /orders/v0/orders/{orderId}/regulatedInfo | getOrderRegulatedInfo
*OrdersApi* | [**getOrders**](docs/Api/OrdersApi.md#getorders) | **GET** /orders/v0/orders | getOrders
*OrdersApi* | [**updateShipmentStatus**](docs/Api/OrdersApi.md#updateshipmentstatus) | **POST** /orders/v0/orders/{orderId}/shipment | updateShipmentStatus
*OrdersApi* | [**updateVerificationStatus**](docs/Api/OrdersApi.md#updateverificationstatus) | **PATCH** /orders/v0/orders/{orderId}/regulatedInfo | updateVerificationStatus

## Models

- [Address](docs/Model/Address.md)
- [AddressExtendedFields](docs/Model/AddressExtendedFields.md)
- [AmazonPrograms](docs/Model/AmazonPrograms.md)
- [AssociatedItem](docs/Model/AssociatedItem.md)
- [AssociationType](docs/Model/AssociationType.md)
- [AutomatedShippingSettings](docs/Model/AutomatedShippingSettings.md)
- [BusinessHours](docs/Model/BusinessHours.md)
- [BuyerCustomizedInfoDetail](docs/Model/BuyerCustomizedInfoDetail.md)
- [BuyerInfo](docs/Model/BuyerInfo.md)
- [BuyerRequestedCancel](docs/Model/BuyerRequestedCancel.md)
- [BuyerTaxInfo](docs/Model/BuyerTaxInfo.md)
- [BuyerTaxInformation](docs/Model/BuyerTaxInformation.md)
- [ConfirmShipmentErrorResponse](docs/Model/ConfirmShipmentErrorResponse.md)
- [ConfirmShipmentOrderItem](docs/Model/ConfirmShipmentOrderItem.md)
- [ConfirmShipmentRequest](docs/Model/ConfirmShipmentRequest.md)
- [ConstraintType](docs/Model/ConstraintType.md)
- [DeliveryPreferences](docs/Model/DeliveryPreferences.md)
- [EasyShipShipmentStatus](docs/Model/EasyShipShipmentStatus.md)
- [ElectronicInvoiceStatus](docs/Model/ElectronicInvoiceStatus.md)
- [Error](docs/Model/Error.md)
- [ExceptionDates](docs/Model/ExceptionDates.md)
- [FulfillmentInstruction](docs/Model/FulfillmentInstruction.md)
- [GetOrderAddressResponse](docs/Model/GetOrderAddressResponse.md)
- [GetOrderBuyerInfoResponse](docs/Model/GetOrderBuyerInfoResponse.md)
- [GetOrderItemsBuyerInfoResponse](docs/Model/GetOrderItemsBuyerInfoResponse.md)
- [GetOrderItemsResponse](docs/Model/GetOrderItemsResponse.md)
- [GetOrderRegulatedInfoResponse](docs/Model/GetOrderRegulatedInfoResponse.md)
- [GetOrderResponse](docs/Model/GetOrderResponse.md)
- [GetOrdersResponse](docs/Model/GetOrdersResponse.md)
- [ItemBuyerInfo](docs/Model/ItemBuyerInfo.md)
- [MarketplaceTaxInfo](docs/Model/MarketplaceTaxInfo.md)
- [Measurement](docs/Model/Measurement.md)
- [Money](docs/Model/Money.md)
- [OpenInterval](docs/Model/OpenInterval.md)
- [OpenTimeInterval](docs/Model/OpenTimeInterval.md)
- [Order](docs/Model/Order.md)
- [OrderAddress](docs/Model/OrderAddress.md)
- [OrderBuyerInfo](docs/Model/OrderBuyerInfo.md)
- [OrderItem](docs/Model/OrderItem.md)
- [OrderItemBuyerInfo](docs/Model/OrderItemBuyerInfo.md)
- [OrderItemsBuyerInfoList](docs/Model/OrderItemsBuyerInfoList.md)
- [OrderItemsInner](docs/Model/OrderItemsInner.md)
- [OrderItemsList](docs/Model/OrderItemsList.md)
- [OrderRegulatedInfo](docs/Model/OrderRegulatedInfo.md)
- [OrdersList](docs/Model/OrdersList.md)
- [OtherDeliveryAttributes](docs/Model/OtherDeliveryAttributes.md)
- [PackageDetail](docs/Model/PackageDetail.md)
- [PaymentExecutionDetailItem](docs/Model/PaymentExecutionDetailItem.md)
- [PointsGrantedDetail](docs/Model/PointsGrantedDetail.md)
- [PreferredDeliveryTime](docs/Model/PreferredDeliveryTime.md)
- [PrescriptionDetail](docs/Model/PrescriptionDetail.md)
- [ProductInfoDetail](docs/Model/ProductInfoDetail.md)
- [RegulatedInformation](docs/Model/RegulatedInformation.md)
- [RegulatedInformationField](docs/Model/RegulatedInformationField.md)
- [RegulatedOrderVerificationStatus](docs/Model/RegulatedOrderVerificationStatus.md)
- [RejectionReason](docs/Model/RejectionReason.md)
- [ShipmentStatus](docs/Model/ShipmentStatus.md)
- [ShippingConstraints](docs/Model/ShippingConstraints.md)
- [SubstitutionOption](docs/Model/SubstitutionOption.md)
- [SubstitutionPreferences](docs/Model/SubstitutionPreferences.md)
- [TaxClassification](docs/Model/TaxClassification.md)
- [TaxCollection](docs/Model/TaxCollection.md)
- [UpdateShipmentStatusErrorResponse](docs/Model/UpdateShipmentStatusErrorResponse.md)
- [UpdateShipmentStatusRequest](docs/Model/UpdateShipmentStatusRequest.md)
- [UpdateVerificationStatusErrorResponse](docs/Model/UpdateVerificationStatusErrorResponse.md)
- [UpdateVerificationStatusRequest](docs/Model/UpdateVerificationStatusRequest.md)
- [UpdateVerificationStatusRequestBody](docs/Model/UpdateVerificationStatusRequestBody.md)
- [ValidVerificationDetail](docs/Model/ValidVerificationDetail.md)
- [VerificationDetails](docs/Model/VerificationDetails.md)
- [VerificationStatus](docs/Model/VerificationStatus.md)

## Authorization
Endpoints do not require authorization.

## Tests

To run the tests, use:

```bash
composer install
vendor/bin/phpunit
```

## Author



## About this package

This PHP package is automatically generated by the [OpenAPI Generator](https://openapi-generator.tech) project:

- API version: `v0`
    - Generator version: `7.9.0`
- Build package: `org.openapitools.codegen.languages.PhpClientCodegen`
