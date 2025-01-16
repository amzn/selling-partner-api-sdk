# # PartneredLtlDataOutput

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**contact** | [**\OpenAPI\Client\Model\fulfillment\inbound\v0\Contact**](Contact.md) |  |
**box_count** | **int** | Contains an unsigned integer |
**seller_freight_class** | [**\OpenAPI\Client\Model\fulfillment\inbound\v0\SellerFreightClass**](SellerFreightClass.md) |  | [optional]
**freight_ready_date** | **\DateTime** | Type containing date in string format |
**pallet_list** | [**\OpenAPI\Client\Model\fulfillment\inbound\v0\Pallet[]**](Pallet.md) | A list of pallet information. |
**total_weight** | [**\OpenAPI\Client\Model\fulfillment\inbound\v0\Weight**](Weight.md) |  |
**seller_declared_value** | [**\OpenAPI\Client\Model\fulfillment\inbound\v0\Amount**](Amount.md) |  | [optional]
**amazon_calculated_value** | [**\OpenAPI\Client\Model\fulfillment\inbound\v0\Amount**](Amount.md) |  | [optional]
**preview_pickup_date** | **\DateTime** | Type containing date in string format |
**preview_delivery_date** | **\DateTime** | Type containing date in string format |
**preview_freight_class** | [**\OpenAPI\Client\Model\fulfillment\inbound\v0\SellerFreightClass**](SellerFreightClass.md) |  |
**amazon_reference_id** | **string** | A unique identifier created by Amazon that identifies this Amazon-partnered, Less Than Truckload/Full Truckload (LTL/FTL) shipment. |
**is_bill_of_lading_available** | **bool** | Indicates whether the bill of lading for the shipment is available. |
**partnered_estimate** | [**\OpenAPI\Client\Model\fulfillment\inbound\v0\PartneredEstimate**](PartneredEstimate.md) |  | [optional]
**carrier_name** | **string** | The carrier for the inbound shipment. |

[[Back to Model list]](../../README.md#models) [[Back to API list]](../../README.md#endpoints) [[Back to README]](../../README.md)
