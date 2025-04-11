/**
 * Selling Partner API for Direct Fulfillment Shipping
 * Use the Selling Partner API for Direct Fulfillment Shipping to access a direct fulfillment vendor's shipping data.
 *
 * The version of the OpenAPI document: 2021-12-28
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import {ApiClient} from './ApiClient.js';
import {Address} from './model/Address.js';
import {CarrierId} from './model/CarrierId.js';
import {Container} from './model/Container.js';
import {ContainerLabel} from './model/ContainerLabel.js';
import {ContainerLabelFormat} from './model/ContainerLabelFormat.js';
import {CreateContainerLabelRequest} from './model/CreateContainerLabelRequest.js';
import {CreateContainerLabelResponse} from './model/CreateContainerLabelResponse.js';
import {CreateShippingLabelsRequest} from './model/CreateShippingLabelsRequest.js';
import {CustomerInvoice} from './model/CustomerInvoice.js';
import {CustomerInvoiceList} from './model/CustomerInvoiceList.js';
import {Dimensions} from './model/Dimensions.js';
import {Error} from './model/Error.js';
import {ErrorList} from './model/ErrorList.js';
import {Item} from './model/Item.js';
import {ItemQuantity} from './model/ItemQuantity.js';
import {LabelData} from './model/LabelData.js';
import {Package} from './model/Package.js';
import {PackedItem} from './model/PackedItem.js';
import {PackingSlip} from './model/PackingSlip.js';
import {PackingSlipList} from './model/PackingSlipList.js';
import {Pagination} from './model/Pagination.js';
import {PartyIdentification} from './model/PartyIdentification.js';
import {ShipmentConfirmation} from './model/ShipmentConfirmation.js';
import {ShipmentDetails} from './model/ShipmentDetails.js';
import {ShipmentSchedule} from './model/ShipmentSchedule.js';
import {ShipmentStatusUpdate} from './model/ShipmentStatusUpdate.js';
import {ShippingLabel} from './model/ShippingLabel.js';
import {ShippingLabelList} from './model/ShippingLabelList.js';
import {ShippingLabelRequest} from './model/ShippingLabelRequest.js';
import {StatusUpdateDetails} from './model/StatusUpdateDetails.js';
import {SubmitShipmentConfirmationsRequest} from './model/SubmitShipmentConfirmationsRequest.js';
import {SubmitShipmentStatusUpdatesRequest} from './model/SubmitShipmentStatusUpdatesRequest.js';
import {SubmitShippingLabelsRequest} from './model/SubmitShippingLabelsRequest.js';
import {TaxRegistrationDetails} from './model/TaxRegistrationDetails.js';
import {TransactionReference} from './model/TransactionReference.js';
import {Weight} from './model/Weight.js';
import {CreateContainerLabelApi} from './api/CreateContainerLabelApi.js';
import {CustomerInvoicesApi} from './api/CustomerInvoicesApi.js';
import {VendorShippingApi} from './api/VendorShippingApi.js';
import {VendorShippingLabelsApi} from './api/VendorShippingLabelsApi.js';


/**
* Use the Selling Partner API for Direct Fulfillment Shipping to access a direct fulfillment vendor&#39;s shipping data..<br>
* The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
* @module vendordfshipping_v2021_12_28/index
* @version 2021-12-28
*/
export {
    /**
     * The ApiClient constructor.
     * @property {module:vendordfshipping_v2021_12_28/ApiClient}
     */
    ApiClient,

    /**
     * The Address model constructor.
     * @property {module:vendordfshipping_v2021_12_28/model/Address}
     */
    Address,

    /**
     * The CarrierId model constructor.
     * @property {module:vendordfshipping_v2021_12_28/model/CarrierId}
     */
    CarrierId,

    /**
     * The Container model constructor.
     * @property {module:vendordfshipping_v2021_12_28/model/Container}
     */
    Container,

    /**
     * The ContainerLabel model constructor.
     * @property {module:vendordfshipping_v2021_12_28/model/ContainerLabel}
     */
    ContainerLabel,

    /**
     * The ContainerLabelFormat model constructor.
     * @property {module:vendordfshipping_v2021_12_28/model/ContainerLabelFormat}
     */
    ContainerLabelFormat,

    /**
     * The CreateContainerLabelRequest model constructor.
     * @property {module:vendordfshipping_v2021_12_28/model/CreateContainerLabelRequest}
     */
    CreateContainerLabelRequest,

    /**
     * The CreateContainerLabelResponse model constructor.
     * @property {module:vendordfshipping_v2021_12_28/model/CreateContainerLabelResponse}
     */
    CreateContainerLabelResponse,

    /**
     * The CreateShippingLabelsRequest model constructor.
     * @property {module:vendordfshipping_v2021_12_28/model/CreateShippingLabelsRequest}
     */
    CreateShippingLabelsRequest,

    /**
     * The CustomerInvoice model constructor.
     * @property {module:vendordfshipping_v2021_12_28/model/CustomerInvoice}
     */
    CustomerInvoice,

    /**
     * The CustomerInvoiceList model constructor.
     * @property {module:vendordfshipping_v2021_12_28/model/CustomerInvoiceList}
     */
    CustomerInvoiceList,

    /**
     * The Dimensions model constructor.
     * @property {module:vendordfshipping_v2021_12_28/model/Dimensions}
     */
    Dimensions,

    /**
     * The Error model constructor.
     * @property {module:vendordfshipping_v2021_12_28/model/Error}
     */
    Error,

    /**
     * The ErrorList model constructor.
     * @property {module:vendordfshipping_v2021_12_28/model/ErrorList}
     */
    ErrorList,

    /**
     * The Item model constructor.
     * @property {module:vendordfshipping_v2021_12_28/model/Item}
     */
    Item,

    /**
     * The ItemQuantity model constructor.
     * @property {module:vendordfshipping_v2021_12_28/model/ItemQuantity}
     */
    ItemQuantity,

    /**
     * The LabelData model constructor.
     * @property {module:vendordfshipping_v2021_12_28/model/LabelData}
     */
    LabelData,

    /**
     * The Package model constructor.
     * @property {module:vendordfshipping_v2021_12_28/model/Package}
     */
    Package,

    /**
     * The PackedItem model constructor.
     * @property {module:vendordfshipping_v2021_12_28/model/PackedItem}
     */
    PackedItem,

    /**
     * The PackingSlip model constructor.
     * @property {module:vendordfshipping_v2021_12_28/model/PackingSlip}
     */
    PackingSlip,

    /**
     * The PackingSlipList model constructor.
     * @property {module:vendordfshipping_v2021_12_28/model/PackingSlipList}
     */
    PackingSlipList,

    /**
     * The Pagination model constructor.
     * @property {module:vendordfshipping_v2021_12_28/model/Pagination}
     */
    Pagination,

    /**
     * The PartyIdentification model constructor.
     * @property {module:vendordfshipping_v2021_12_28/model/PartyIdentification}
     */
    PartyIdentification,

    /**
     * The ShipmentConfirmation model constructor.
     * @property {module:vendordfshipping_v2021_12_28/model/ShipmentConfirmation}
     */
    ShipmentConfirmation,

    /**
     * The ShipmentDetails model constructor.
     * @property {module:vendordfshipping_v2021_12_28/model/ShipmentDetails}
     */
    ShipmentDetails,

    /**
     * The ShipmentSchedule model constructor.
     * @property {module:vendordfshipping_v2021_12_28/model/ShipmentSchedule}
     */
    ShipmentSchedule,

    /**
     * The ShipmentStatusUpdate model constructor.
     * @property {module:vendordfshipping_v2021_12_28/model/ShipmentStatusUpdate}
     */
    ShipmentStatusUpdate,

    /**
     * The ShippingLabel model constructor.
     * @property {module:vendordfshipping_v2021_12_28/model/ShippingLabel}
     */
    ShippingLabel,

    /**
     * The ShippingLabelList model constructor.
     * @property {module:vendordfshipping_v2021_12_28/model/ShippingLabelList}
     */
    ShippingLabelList,

    /**
     * The ShippingLabelRequest model constructor.
     * @property {module:vendordfshipping_v2021_12_28/model/ShippingLabelRequest}
     */
    ShippingLabelRequest,

    /**
     * The StatusUpdateDetails model constructor.
     * @property {module:vendordfshipping_v2021_12_28/model/StatusUpdateDetails}
     */
    StatusUpdateDetails,

    /**
     * The SubmitShipmentConfirmationsRequest model constructor.
     * @property {module:vendordfshipping_v2021_12_28/model/SubmitShipmentConfirmationsRequest}
     */
    SubmitShipmentConfirmationsRequest,

    /**
     * The SubmitShipmentStatusUpdatesRequest model constructor.
     * @property {module:vendordfshipping_v2021_12_28/model/SubmitShipmentStatusUpdatesRequest}
     */
    SubmitShipmentStatusUpdatesRequest,

    /**
     * The SubmitShippingLabelsRequest model constructor.
     * @property {module:vendordfshipping_v2021_12_28/model/SubmitShippingLabelsRequest}
     */
    SubmitShippingLabelsRequest,

    /**
     * The TaxRegistrationDetails model constructor.
     * @property {module:vendordfshipping_v2021_12_28/model/TaxRegistrationDetails}
     */
    TaxRegistrationDetails,

    /**
     * The TransactionReference model constructor.
     * @property {module:vendordfshipping_v2021_12_28/model/TransactionReference}
     */
    TransactionReference,

    /**
     * The Weight model constructor.
     * @property {module:vendordfshipping_v2021_12_28/model/Weight}
     */
    Weight,

    /**
    * The CreateContainerLabelApi service constructor.
    * @property {module:vendordfshipping_v2021_12_28/api/CreateContainerLabelApi}
    */
    CreateContainerLabelApi,

    /**
    * The CustomerInvoicesApi service constructor.
    * @property {module:vendordfshipping_v2021_12_28/api/CustomerInvoicesApi}
    */
    CustomerInvoicesApi,

    /**
    * The VendorShippingApi service constructor.
    * @property {module:vendordfshipping_v2021_12_28/api/VendorShippingApi}
    */
    VendorShippingApi,

    /**
    * The VendorShippingLabelsApi service constructor.
    * @property {module:vendordfshipping_v2021_12_28/api/VendorShippingLabelsApi}
    */
    VendorShippingLabelsApi
};
