/**
 * The ShipmentLineItem model module.
 * @module externalfulfillmentshipments_v2024_09_11/model/ShipmentLineItem
 * @version 2024-09-11
 */
export class ShipmentLineItem {
    /**
     * Constructs a <code>ShipmentLineItem</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {ShipmentLineItem} obj Optional instance to populate.
     * @return {ShipmentLineItem} The populated <code>ShipmentLineItem</code> instance.
     */
    static constructFromObject(data: any, obj: ShipmentLineItem): ShipmentLineItem;
    /**
     * Constructs a new <code>ShipmentLineItem</code>.
     * Information about a line item in a shipment.
     * @alias module:externalfulfillmentshipments_v2024_09_11/model/ShipmentLineItem
     * @class
     * @param shipmentLineItemId {String} An identifier for a shipment's line item. This identifier is guaranteed to be unique within the scope of its containing shipment.
     * @param merchantSku {String} The seller SKU of a product (catalog item). A unique number assigned by the seller when listing an item.
     * @param numberOfUnits {Number} The number of items of the SKU in this line item.
     * @param charges {Array[]} The charges associated with the shipment.
     * @param complianceAttributes {ComplianceAttributes}
     */
    constructor(shipmentLineItemId: string, merchantSku: string, numberOfUnits: number, charges: any[][], complianceAttributes: ComplianceAttributes);
    shipmentLineItemId: string;
    merchantSku: string;
    numberOfUnits: number;
    charges: any[][];
    complianceAttributes: ComplianceAttributes;
    /**
     * The serial numbers for each item in this line item.
     * @member {Array[]} serialNumbers
     * @type {Array[]}
     */
    serialNumbers: any[][];
    /**
     * @member {PieceType} pieceType
     * @type {PieceType}
     */
    pieceType: PieceType;
    /**
     * A list of HAZMAT label identifiers that must be applied to the packages for this line item.
     * @member {Array[]} hazmatLabels
     * @type {Array[]}
     */
    hazmatLabels: any[][];
    /**
     * @member {GiftAttributes} giftAttributes
     * @type {GiftAttributes}
     */
    giftAttributes: GiftAttributes;
    /**
     * A list of cancellations for the given line item.  **Note:** Currently, SmartConnect does not support partial cancellation of a shipment or its line items. This list will contain a single value with all the cancellation details.
     * @member {Array[]} cancellations
     * @type {Array[]}
     */
    cancellations: any[][];
    /**
     * The HSN code of SKU in this line item.
     * @member {String} hsnCode
     * @type {String}
     */
    hsnCode: string;
    /**
     * A two-letter country code, as defined by the ISO-3166 alpha-2 standard.
     * @member {String} recommendedCountryOfOrigin
     * @type {String}
     */
    recommendedCountryOfOrigin: string;
    /**
     * A two-letter country code, as defined by the ISO-3166 alpha-2 standard.
     * @member {String} countryOfOrigin
     * @type {String}
     */
    countryOfOrigin: string;
    /**
     * The three digit currency code of the currency recommended by the marketplace, in ISO 4217 format.
     * @member {String} recommendedCurrencyCode
     * @type {String}
     */
    recommendedCurrencyCode: string;
    /**
     * @member {Amount} itemValue
     * @type {Amount}
     */
    itemValue: Amount;
    /**
     * A list of custom passthrough attributes. For details on these attributes, reach out to your respective program teams at Amazon.
     * @member {Array[]} customAttributes
     * @type {Array[]}
     */
    customAttributes: any[][];
}
import { ComplianceAttributes } from './ComplianceAttributes.js';
import { PieceType } from './PieceType.js';
import { GiftAttributes } from './GiftAttributes.js';
import { Amount } from './Amount.js';
//# sourceMappingURL=ShipmentLineItem.d.ts.map