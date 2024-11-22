# PartneredLtlDataOutput

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**contact** | [**Contact**](Contact.md) |  | 
**boxCount** | **Long** |  | 
**sellerFreightClass** | [**SellerFreightClass**](SellerFreightClass.md) |  |  [optional]
**freightReadyDate** | [**LocalDate**](LocalDate.md) |  | 
**palletList** | [**PalletList**](PalletList.md) |  | 
**totalWeight** | [**Weight**](Weight.md) |  | 
**sellerDeclaredValue** | [**Amount**](Amount.md) |  |  [optional]
**amazonCalculatedValue** | [**Amount**](Amount.md) |  |  [optional]
**previewPickupDate** | [**LocalDate**](LocalDate.md) |  | 
**previewDeliveryDate** | [**LocalDate**](LocalDate.md) |  | 
**previewFreightClass** | [**SellerFreightClass**](SellerFreightClass.md) |  | 
**amazonReferenceId** | **String** | A unique identifier created by Amazon that identifies this Amazon-partnered, Less Than Truckload/Full Truckload (LTL/FTL) shipment. | 
**isBillOfLadingAvailable** | **Boolean** | Indicates whether the bill of lading for the shipment is available. | 
**partneredEstimate** | [**PartneredEstimate**](PartneredEstimate.md) |  |  [optional]
**carrierName** | **String** | The carrier for the inbound shipment. | 
