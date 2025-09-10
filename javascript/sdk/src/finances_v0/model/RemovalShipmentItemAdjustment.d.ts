/**
 * The RemovalShipmentItemAdjustment model module.
 * @module finances_v0/model/RemovalShipmentItemAdjustment
 * @version v0
 */
export class RemovalShipmentItemAdjustment {
    /**
     * Constructs a <code>RemovalShipmentItemAdjustment</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {RemovalShipmentItemAdjustment} obj Optional instance to populate.
     * @return {RemovalShipmentItemAdjustment} The populated <code>RemovalShipmentItemAdjustment</code> instance.
     */
    static constructFromObject(data: any, obj: RemovalShipmentItemAdjustment): RemovalShipmentItemAdjustment;
    /**
     * An identifier for an item in a removal shipment.
     * @member {String} removalShipmentItemId
     * @type {String}
     */
    removalShipmentItemId: string;
    /**
     * The tax collection model applied to the item.  Possible values:  * MarketplaceFacilitator - Tax is withheld and remitted to the taxing authority by Amazon on behalf of the seller.  * Standard - Tax is paid to the seller and not remitted to the taxing authority by Amazon.
     * @member {String} taxCollectionModel
     * @type {String}
     */
    taxCollectionModel: string;
    /**
     * The Amazon fulfillment network SKU for the item.
     * @member {String} fulfillmentNetworkSKU
     * @type {String}
     */
    fulfillmentNetworkSKU: string;
    /**
     * Adjusted quantity of removal shipmentItemAdjustment items.
     * @member {Number} adjustedQuantity
     * @type {Number}
     */
    adjustedQuantity: number;
    /**
     * @member {Currency} revenueAdjustment
     * @type {Currency}
     */
    revenueAdjustment: Currency;
    /**
     * @member {Currency} taxAmountAdjustment
     * @type {Currency}
     */
    taxAmountAdjustment: Currency;
    /**
     * @member {Currency} taxWithheldAdjustment
     * @type {Currency}
     */
    taxWithheldAdjustment: Currency;
}
import { Currency } from './Currency.js';
//# sourceMappingURL=RemovalShipmentItemAdjustment.d.ts.map