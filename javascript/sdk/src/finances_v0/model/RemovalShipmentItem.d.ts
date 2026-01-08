/**
 * The RemovalShipmentItem model module.
 * @module finances_v0/model/RemovalShipmentItem
 * @version v0
 */
export class RemovalShipmentItem {
    /**
     * Constructs a <code>RemovalShipmentItem</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {RemovalShipmentItem} obj Optional instance to populate.
     * @return {RemovalShipmentItem} The populated <code>RemovalShipmentItem</code> instance.
     */
    static constructFromObject(data: any, obj: RemovalShipmentItem): RemovalShipmentItem;
    /**
     * An identifier for an item in a removal shipment.
     * @member {String} removalShipmentItemId
     * @type {String}
     */
    removalShipmentItemId: string;
    /**
     * The tax collection model that is applied to the item.  Possible values:  * `MarketplaceFacilitator`: Tax is withheld and remitted to the taxing authority by Amazon on behalf of the seller. * `Standard`: Tax is paid to the seller and not remitted to the taxing authority by Amazon.
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
     * The quantity of the item.
     * @member {Number} quantity
     * @type {Number}
     */
    quantity: number;
    /**
     * @member {Currency} revenue
     * @type {Currency}
     */
    revenue: Currency;
    /**
     * @member {Currency} feeAmount
     * @type {Currency}
     */
    feeAmount: Currency;
    /**
     * @member {Currency} taxAmount
     * @type {Currency}
     */
    taxAmount: Currency;
    /**
     * @member {Currency} taxWithheld
     * @type {Currency}
     */
    taxWithheld: Currency;
}
import { Currency } from './Currency.js';
//# sourceMappingURL=RemovalShipmentItem.d.ts.map