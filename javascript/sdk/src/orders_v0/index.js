/**
 * Selling Partner API for Orders
 * Use the Orders Selling Partner API to programmatically retrieve order information. With this API, you can develop fast, flexible, and custom applications to manage order synchronization, perform order research, and create demand-based decision support tools.   _Note:_ For the JP, AU, and SG marketplaces, the Orders API supports orders from 2016 onward. For all other marketplaces, the Orders API supports orders for the last two years (orders older than this don't show up in the response).
 *
 * The version of the OpenAPI document: v0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import { ApiClient } from './ApiClient.js'
import { Address } from './model/Address.js'
import { AddressExtendedFields } from './model/AddressExtendedFields.js'
import { AmazonPrograms } from './model/AmazonPrograms.js'
import { AssociatedItem } from './model/AssociatedItem.js'
import { AssociationType } from './model/AssociationType.js'
import { AutomatedShippingSettings } from './model/AutomatedShippingSettings.js'
import { BusinessHours } from './model/BusinessHours.js'
import { BuyerCustomizedInfoDetail } from './model/BuyerCustomizedInfoDetail.js'
import { BuyerInfo } from './model/BuyerInfo.js'
import { BuyerRequestedCancel } from './model/BuyerRequestedCancel.js'
import { BuyerTaxInfo } from './model/BuyerTaxInfo.js'
import { BuyerTaxInformation } from './model/BuyerTaxInformation.js'
import { ConfirmShipmentErrorResponse } from './model/ConfirmShipmentErrorResponse.js'
import { ConfirmShipmentOrderItem } from './model/ConfirmShipmentOrderItem.js'
import { ConfirmShipmentRequest } from './model/ConfirmShipmentRequest.js'
import { ConstraintType } from './model/ConstraintType.js'
import { DeliveryPreferences } from './model/DeliveryPreferences.js'
import { EasyShipShipmentStatus } from './model/EasyShipShipmentStatus.js'
import { ElectronicInvoiceStatus } from './model/ElectronicInvoiceStatus.js'
import { Error } from './model/Error.js'
import { ExceptionDates } from './model/ExceptionDates.js'
import { FulfillmentInstruction } from './model/FulfillmentInstruction.js'
import { GetOrderAddressResponse } from './model/GetOrderAddressResponse.js'
import { GetOrderBuyerInfoResponse } from './model/GetOrderBuyerInfoResponse.js'
import { GetOrderItemsBuyerInfoResponse } from './model/GetOrderItemsBuyerInfoResponse.js'
import { GetOrderItemsResponse } from './model/GetOrderItemsResponse.js'
import { GetOrderRegulatedInfoResponse } from './model/GetOrderRegulatedInfoResponse.js'
import { GetOrderResponse } from './model/GetOrderResponse.js'
import { GetOrdersResponse } from './model/GetOrdersResponse.js'
import { ItemBuyerInfo } from './model/ItemBuyerInfo.js'
import { MarketplaceTaxInfo } from './model/MarketplaceTaxInfo.js'
import { Measurement } from './model/Measurement.js'
import { Money } from './model/Money.js'
import { OpenInterval } from './model/OpenInterval.js'
import { OpenTimeInterval } from './model/OpenTimeInterval.js'
import { Order } from './model/Order.js'
import { OrderAddress } from './model/OrderAddress.js'
import { OrderBuyerInfo } from './model/OrderBuyerInfo.js'
import { OrderItem } from './model/OrderItem.js'
import { OrderItemBuyerInfo } from './model/OrderItemBuyerInfo.js'
import { OrderItemsBuyerInfoList } from './model/OrderItemsBuyerInfoList.js'
import { OrderItemsInner } from './model/OrderItemsInner.js'
import { OrderItemsList } from './model/OrderItemsList.js'
import { OrderRegulatedInfo } from './model/OrderRegulatedInfo.js'
import { OrdersList } from './model/OrdersList.js'
import { OtherDeliveryAttributes } from './model/OtherDeliveryAttributes.js'
import { PackageDetail } from './model/PackageDetail.js'
import { PaymentExecutionDetailItem } from './model/PaymentExecutionDetailItem.js'
import { PointsGrantedDetail } from './model/PointsGrantedDetail.js'
import { PreferredDeliveryTime } from './model/PreferredDeliveryTime.js'
import { PrescriptionDetail } from './model/PrescriptionDetail.js'
import { ProductInfoDetail } from './model/ProductInfoDetail.js'
import { RegulatedInformation } from './model/RegulatedInformation.js'
import { RegulatedInformationField } from './model/RegulatedInformationField.js'
import { RegulatedOrderVerificationStatus } from './model/RegulatedOrderVerificationStatus.js'
import { RejectionReason } from './model/RejectionReason.js'
import { ShipmentStatus } from './model/ShipmentStatus.js'
import { ShippingConstraints } from './model/ShippingConstraints.js'
import { SubstitutionOption } from './model/SubstitutionOption.js'
import { SubstitutionPreferences } from './model/SubstitutionPreferences.js'
import { TaxClassification } from './model/TaxClassification.js'
import { TaxCollection } from './model/TaxCollection.js'
import { UpdateShipmentStatusErrorResponse } from './model/UpdateShipmentStatusErrorResponse.js'
import { UpdateShipmentStatusRequest } from './model/UpdateShipmentStatusRequest.js'
import { UpdateVerificationStatusErrorResponse } from './model/UpdateVerificationStatusErrorResponse.js'
import { UpdateVerificationStatusRequest } from './model/UpdateVerificationStatusRequest.js'
import { UpdateVerificationStatusRequestBody } from './model/UpdateVerificationStatusRequestBody.js'
import { ValidVerificationDetail } from './model/ValidVerificationDetail.js'
import { VerificationDetails } from './model/VerificationDetails.js'
import { VerificationStatus } from './model/VerificationStatus.js'
import { OrdersV0Api } from './api/OrdersV0Api.js'
import { ShipmentApi } from './api/ShipmentApi.js'

/**
* Use the Orders Selling Partner API to programmatically retrieve order information. With this API, you can develop fast, flexible, and custom applications to manage order synchronization, perform order research, and create demand-based decision support tools.   _Note:_ For the JP, AU, and SG marketplaces, the Orders API supports orders from 2016 onward. For all other marketplaces, the Orders API supports orders for the last two years (orders older than this don&#39;t show up in the response)..<br>
* The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
* @module orders_v0/index
* @version v0
*/
export {
  /**
     * The ApiClient constructor.
     * @property {module:orders_v0/ApiClient}
     */
  ApiClient,

  /**
     * The Address model constructor.
     * @property {module:orders_v0/model/Address}
     */
  Address,

  /**
     * The AddressExtendedFields model constructor.
     * @property {module:orders_v0/model/AddressExtendedFields}
     */
  AddressExtendedFields,

  /**
     * The AmazonPrograms model constructor.
     * @property {module:orders_v0/model/AmazonPrograms}
     */
  AmazonPrograms,

  /**
     * The AssociatedItem model constructor.
     * @property {module:orders_v0/model/AssociatedItem}
     */
  AssociatedItem,

  /**
     * The AssociationType model constructor.
     * @property {module:orders_v0/model/AssociationType}
     */
  AssociationType,

  /**
     * The AutomatedShippingSettings model constructor.
     * @property {module:orders_v0/model/AutomatedShippingSettings}
     */
  AutomatedShippingSettings,

  /**
     * The BusinessHours model constructor.
     * @property {module:orders_v0/model/BusinessHours}
     */
  BusinessHours,

  /**
     * The BuyerCustomizedInfoDetail model constructor.
     * @property {module:orders_v0/model/BuyerCustomizedInfoDetail}
     */
  BuyerCustomizedInfoDetail,

  /**
     * The BuyerInfo model constructor.
     * @property {module:orders_v0/model/BuyerInfo}
     */
  BuyerInfo,

  /**
     * The BuyerRequestedCancel model constructor.
     * @property {module:orders_v0/model/BuyerRequestedCancel}
     */
  BuyerRequestedCancel,

  /**
     * The BuyerTaxInfo model constructor.
     * @property {module:orders_v0/model/BuyerTaxInfo}
     */
  BuyerTaxInfo,

  /**
     * The BuyerTaxInformation model constructor.
     * @property {module:orders_v0/model/BuyerTaxInformation}
     */
  BuyerTaxInformation,

  /**
     * The ConfirmShipmentErrorResponse model constructor.
     * @property {module:orders_v0/model/ConfirmShipmentErrorResponse}
     */
  ConfirmShipmentErrorResponse,

  /**
     * The ConfirmShipmentOrderItem model constructor.
     * @property {module:orders_v0/model/ConfirmShipmentOrderItem}
     */
  ConfirmShipmentOrderItem,

  /**
     * The ConfirmShipmentRequest model constructor.
     * @property {module:orders_v0/model/ConfirmShipmentRequest}
     */
  ConfirmShipmentRequest,

  /**
     * The ConstraintType model constructor.
     * @property {module:orders_v0/model/ConstraintType}
     */
  ConstraintType,

  /**
     * The DeliveryPreferences model constructor.
     * @property {module:orders_v0/model/DeliveryPreferences}
     */
  DeliveryPreferences,

  /**
     * The EasyShipShipmentStatus model constructor.
     * @property {module:orders_v0/model/EasyShipShipmentStatus}
     */
  EasyShipShipmentStatus,

  /**
     * The ElectronicInvoiceStatus model constructor.
     * @property {module:orders_v0/model/ElectronicInvoiceStatus}
     */
  ElectronicInvoiceStatus,

  /**
     * The Error model constructor.
     * @property {module:orders_v0/model/Error}
     */
  Error,

  /**
     * The ExceptionDates model constructor.
     * @property {module:orders_v0/model/ExceptionDates}
     */
  ExceptionDates,

  /**
     * The FulfillmentInstruction model constructor.
     * @property {module:orders_v0/model/FulfillmentInstruction}
     */
  FulfillmentInstruction,

  /**
     * The GetOrderAddressResponse model constructor.
     * @property {module:orders_v0/model/GetOrderAddressResponse}
     */
  GetOrderAddressResponse,

  /**
     * The GetOrderBuyerInfoResponse model constructor.
     * @property {module:orders_v0/model/GetOrderBuyerInfoResponse}
     */
  GetOrderBuyerInfoResponse,

  /**
     * The GetOrderItemsBuyerInfoResponse model constructor.
     * @property {module:orders_v0/model/GetOrderItemsBuyerInfoResponse}
     */
  GetOrderItemsBuyerInfoResponse,

  /**
     * The GetOrderItemsResponse model constructor.
     * @property {module:orders_v0/model/GetOrderItemsResponse}
     */
  GetOrderItemsResponse,

  /**
     * The GetOrderRegulatedInfoResponse model constructor.
     * @property {module:orders_v0/model/GetOrderRegulatedInfoResponse}
     */
  GetOrderRegulatedInfoResponse,

  /**
     * The GetOrderResponse model constructor.
     * @property {module:orders_v0/model/GetOrderResponse}
     */
  GetOrderResponse,

  /**
     * The GetOrdersResponse model constructor.
     * @property {module:orders_v0/model/GetOrdersResponse}
     */
  GetOrdersResponse,

  /**
     * The ItemBuyerInfo model constructor.
     * @property {module:orders_v0/model/ItemBuyerInfo}
     */
  ItemBuyerInfo,

  /**
     * The MarketplaceTaxInfo model constructor.
     * @property {module:orders_v0/model/MarketplaceTaxInfo}
     */
  MarketplaceTaxInfo,

  /**
     * The Measurement model constructor.
     * @property {module:orders_v0/model/Measurement}
     */
  Measurement,

  /**
     * The Money model constructor.
     * @property {module:orders_v0/model/Money}
     */
  Money,

  /**
     * The OpenInterval model constructor.
     * @property {module:orders_v0/model/OpenInterval}
     */
  OpenInterval,

  /**
     * The OpenTimeInterval model constructor.
     * @property {module:orders_v0/model/OpenTimeInterval}
     */
  OpenTimeInterval,

  /**
     * The Order model constructor.
     * @property {module:orders_v0/model/Order}
     */
  Order,

  /**
     * The OrderAddress model constructor.
     * @property {module:orders_v0/model/OrderAddress}
     */
  OrderAddress,

  /**
     * The OrderBuyerInfo model constructor.
     * @property {module:orders_v0/model/OrderBuyerInfo}
     */
  OrderBuyerInfo,

  /**
     * The OrderItem model constructor.
     * @property {module:orders_v0/model/OrderItem}
     */
  OrderItem,

  /**
     * The OrderItemBuyerInfo model constructor.
     * @property {module:orders_v0/model/OrderItemBuyerInfo}
     */
  OrderItemBuyerInfo,

  /**
     * The OrderItemsBuyerInfoList model constructor.
     * @property {module:orders_v0/model/OrderItemsBuyerInfoList}
     */
  OrderItemsBuyerInfoList,

  /**
     * The OrderItemsInner model constructor.
     * @property {module:orders_v0/model/OrderItemsInner}
     */
  OrderItemsInner,

  /**
     * The OrderItemsList model constructor.
     * @property {module:orders_v0/model/OrderItemsList}
     */
  OrderItemsList,

  /**
     * The OrderRegulatedInfo model constructor.
     * @property {module:orders_v0/model/OrderRegulatedInfo}
     */
  OrderRegulatedInfo,

  /**
     * The OrdersList model constructor.
     * @property {module:orders_v0/model/OrdersList}
     */
  OrdersList,

  /**
     * The OtherDeliveryAttributes model constructor.
     * @property {module:orders_v0/model/OtherDeliveryAttributes}
     */
  OtherDeliveryAttributes,

  /**
     * The PackageDetail model constructor.
     * @property {module:orders_v0/model/PackageDetail}
     */
  PackageDetail,

  /**
     * The PaymentExecutionDetailItem model constructor.
     * @property {module:orders_v0/model/PaymentExecutionDetailItem}
     */
  PaymentExecutionDetailItem,

  /**
     * The PointsGrantedDetail model constructor.
     * @property {module:orders_v0/model/PointsGrantedDetail}
     */
  PointsGrantedDetail,

  /**
     * The PreferredDeliveryTime model constructor.
     * @property {module:orders_v0/model/PreferredDeliveryTime}
     */
  PreferredDeliveryTime,

  /**
     * The PrescriptionDetail model constructor.
     * @property {module:orders_v0/model/PrescriptionDetail}
     */
  PrescriptionDetail,

  /**
     * The ProductInfoDetail model constructor.
     * @property {module:orders_v0/model/ProductInfoDetail}
     */
  ProductInfoDetail,

  /**
     * The RegulatedInformation model constructor.
     * @property {module:orders_v0/model/RegulatedInformation}
     */
  RegulatedInformation,

  /**
     * The RegulatedInformationField model constructor.
     * @property {module:orders_v0/model/RegulatedInformationField}
     */
  RegulatedInformationField,

  /**
     * The RegulatedOrderVerificationStatus model constructor.
     * @property {module:orders_v0/model/RegulatedOrderVerificationStatus}
     */
  RegulatedOrderVerificationStatus,

  /**
     * The RejectionReason model constructor.
     * @property {module:orders_v0/model/RejectionReason}
     */
  RejectionReason,

  /**
     * The ShipmentStatus model constructor.
     * @property {module:orders_v0/model/ShipmentStatus}
     */
  ShipmentStatus,

  /**
     * The ShippingConstraints model constructor.
     * @property {module:orders_v0/model/ShippingConstraints}
     */
  ShippingConstraints,

  /**
     * The SubstitutionOption model constructor.
     * @property {module:orders_v0/model/SubstitutionOption}
     */
  SubstitutionOption,

  /**
     * The SubstitutionPreferences model constructor.
     * @property {module:orders_v0/model/SubstitutionPreferences}
     */
  SubstitutionPreferences,

  /**
     * The TaxClassification model constructor.
     * @property {module:orders_v0/model/TaxClassification}
     */
  TaxClassification,

  /**
     * The TaxCollection model constructor.
     * @property {module:orders_v0/model/TaxCollection}
     */
  TaxCollection,

  /**
     * The UpdateShipmentStatusErrorResponse model constructor.
     * @property {module:orders_v0/model/UpdateShipmentStatusErrorResponse}
     */
  UpdateShipmentStatusErrorResponse,

  /**
     * The UpdateShipmentStatusRequest model constructor.
     * @property {module:orders_v0/model/UpdateShipmentStatusRequest}
     */
  UpdateShipmentStatusRequest,

  /**
     * The UpdateVerificationStatusErrorResponse model constructor.
     * @property {module:orders_v0/model/UpdateVerificationStatusErrorResponse}
     */
  UpdateVerificationStatusErrorResponse,

  /**
     * The UpdateVerificationStatusRequest model constructor.
     * @property {module:orders_v0/model/UpdateVerificationStatusRequest}
     */
  UpdateVerificationStatusRequest,

  /**
     * The UpdateVerificationStatusRequestBody model constructor.
     * @property {module:orders_v0/model/UpdateVerificationStatusRequestBody}
     */
  UpdateVerificationStatusRequestBody,

  /**
     * The ValidVerificationDetail model constructor.
     * @property {module:orders_v0/model/ValidVerificationDetail}
     */
  ValidVerificationDetail,

  /**
     * The VerificationDetails model constructor.
     * @property {module:orders_v0/model/VerificationDetails}
     */
  VerificationDetails,

  /**
     * The VerificationStatus model constructor.
     * @property {module:orders_v0/model/VerificationStatus}
     */
  VerificationStatus,

  /**
    * The OrdersV0Api service constructor.
    * @property {module:orders_v0/api/OrdersV0Api}
    */
  OrdersV0Api,

  /**
    * The ShipmentApi service constructor.
    * @property {module:orders_v0/api/ShipmentApi}
    */
  ShipmentApi
}
