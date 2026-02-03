/**
 * The InventorySummary model module.
 * @module fbainventory_v1/model/InventorySummary
 * @version v1
 */
export class InventorySummary {
    /**
     * Constructs a <code>InventorySummary</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {InventorySummary} obj Optional instance to populate.
     * @return {InventorySummary} The populated <code>InventorySummary</code> instance.
     */
    static constructFromObject(data: any, obj: InventorySummary): InventorySummary;
    /**
     * The Amazon Standard Identification Number (ASIN) of an item.
     * @member {String} asin
     * @type {String}
     */
    asin: string;
    /**
     * Amazon's fulfillment network SKU identifier.
     * @member {String} fnSku
     * @type {String}
     */
    fnSku: string;
    /**
     * The seller SKU of the item.
     * @member {String} sellerSku
     * @type {String}
     */
    sellerSku: string;
    /**
     * The condition of the item as described by the seller (for example, New Item).
     * @member {String} condition
     * @type {String}
     */
    condition: string;
    /**
     * @member {InventoryDetails} inventoryDetails
     * @type {InventoryDetails}
     */
    inventoryDetails: InventoryDetails;
    /**
     * The date and time that any quantity was last updated.
     * @member {Date} lastUpdatedTime
     * @type {Date}
     */
    lastUpdatedTime: Date;
    /**
     * The localized language product title of the item within the specific marketplace.
     * @member {String} productName
     * @type {String}
     */
    productName: string;
    /**
     * The total number of units in an inbound shipment or in Amazon fulfillment centers.
     * @member {Number} totalQuantity
     * @type {Number}
     */
    totalQuantity: number;
    /**
     * A list of seller-enrolled stores that apply to this seller SKU.
     * @member {Array[]} stores
     * @type {Array[]}
     */
    stores: any[][];
}
import { InventoryDetails } from './InventoryDetails.js';
//# sourceMappingURL=InventorySummary.d.ts.map