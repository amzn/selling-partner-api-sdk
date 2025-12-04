/**
 * The Shipment model module.
 * @module externalfulfillmentshipments_v2024_09_11/model/Shipment
 * @version 2024-09-11
 */
export class Shipment {
    /**
     * Constructs a <code>Shipment</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {Shipment} obj Optional instance to populate.
     * @return {Shipment} The populated <code>Shipment</code> instance.
     */
    static constructFromObject(data: any, obj: Shipment): Shipment;
    /**
     * Constructs a new <code>Shipment</code>.
     * Information about a shipment.
     * @alias module:externalfulfillmentshipments_v2024_09_11/model/Shipment
     * @class
     * @param id {String} The shipment's ID.
     * @param locationId {String} The location identifier of the seller's location in the marketplace channel to which the shipment has been created for fulfillment.
     * @param marketplaceAttributes {MarketplaceAttributes}
     * @param shipmentInfo {ShipmentInfo}
     * @param shipmentRequirements {ShipmentRequirements}
     * @param charges {[Charge]} The charges associated with the shipment.
     * @param status {String} The current status of the shipment.
     * @param lineItems {[ShipmentLineItem]} The line items in the shipment.
     * @param shippingInfo {ShippingInfo}
     * @param creationDateTime {String} A date and time in [ISO 8601](https://developer-docs.amazon.com/sp-api/docs/iso-8601) format.
     * @param lastUpdatedDateTime {String} A date and time in [ISO 8601](https://developer-docs.amazon.com/sp-api/docs/iso-8601) format.
     */
    constructor(id: string, locationId: string, marketplaceAttributes: MarketplaceAttributes, shipmentInfo: ShipmentInfo, shipmentRequirements: ShipmentRequirements, charges: [Charge], status: string, lineItems: [ShipmentLineItem], shippingInfo: ShippingInfo, creationDateTime: string, lastUpdatedDateTime: string);
    id: string;
    locationId: string;
    marketplaceAttributes: MarketplaceAttributes;
    shipmentInfo: ShipmentInfo;
    shipmentRequirements: ShipmentRequirements;
    charges: [Charge];
    status: string;
    lineItems: [ShipmentLineItem];
    shippingInfo: ShippingInfo;
    creationDateTime: string;
    lastUpdatedDateTime: string;
    /**
     * @member {InvoiceInfo} invoiceInfo
     * @type {InvoiceInfo}
     */
    invoiceInfo: InvoiceInfo;
    /**
     * All involved party identification and metadata for the vendor, buyer, and seller. Applicable for direct-fulfillment sellers.
     * @member {[PartyIdentificationInfo]} partyInfoList
     * @type {[PartyIdentificationInfo]}
     */
    partyInfoList: [PartyIdentificationInfo];
    /**
     * The sub status of the shipment.
     * @member {String} subStatus
     * @type {String}
     */
    subStatus: string;
    /**
     * The reason for the sub-status.
     * @member {String} reason
     * @type {String}
     */
    reason: string;
    /**
     * The list of packages in the shipment.
     * @member {[Package]} packages
     * @type {[Package]}
     */
    packages: [Package];
    /**
     * A date and time in [ISO 8601](https://developer-docs.amazon.com/sp-api/docs/iso-8601) format.
     * @member {String} earliestPackDateTime
     * @type {String}
     */
    earliestPackDateTime: string;
}
export namespace Shipment {
    namespace StatusEnum {
        let CREATED: string;
        let ACCEPTED: string;
        let CONFIRMED: string;
        let PACKAGE_CREATED: string;
        let PICKUP_SLOT_RETRIEVED: string;
        let INVOICE_GENERATED: string;
        let SHIPLABEL_GENERATED: string;
        let CANCELLED: string;
        let SHIPPED: string;
        let DELIVERED: string;
    }
    /**
     * *
     */
    type StatusEnum = string;
    namespace SubStatusEnum {
        export let PENDING_SCHEDULE: string;
        export let PENDING_PICKUP: string;
        export let PENDING_DROP_OFF: string;
        export let LABEL_CANCELED: string;
        export let PICKED_UP: string;
        export let DROPPED_OFF: string;
        export let AT_ORIGIN_FC: string;
        export let AT_DESTINATION_FC: string;
        let DELIVERED_1: string;
        export { DELIVERED_1 as DELIVERED };
        export let NOT_DELIVERED: string;
        export let UNDELIVERABLE: string;
        export let LOST: string;
        export let OUT_FOR_DELIVERY: string;
        export let DAMAGED: string;
    }
    /**
     * *
     */
    type SubStatusEnum = string;
}
import { MarketplaceAttributes } from './MarketplaceAttributes.js';
import { ShipmentInfo } from './ShipmentInfo.js';
import { ShipmentRequirements } from './ShipmentRequirements.js';
import { Charge } from './Charge.js';
import { ShipmentLineItem } from './ShipmentLineItem.js';
import { ShippingInfo } from './ShippingInfo.js';
import { InvoiceInfo } from './InvoiceInfo.js';
import { PartyIdentificationInfo } from './PartyIdentificationInfo.js';
import { Package } from './Package.js';
//# sourceMappingURL=Shipment.d.ts.map