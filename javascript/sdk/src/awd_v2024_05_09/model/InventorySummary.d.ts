/**
 * The InventorySummary model module.
 * @module awd_v2024_05_09/model/InventorySummary
 * @version 2024-05-09
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
     * Constructs a new <code>InventorySummary</code>.
     * Summary of inventory per SKU.
     * @alias module:awd_v2024_05_09/model/InventorySummary
     * @class
     * @param sku {String} The seller or merchant SKU.
     */
    constructor(sku: string);
    sku: string;
    /**
     * The expiration details of the inventory. This object will only appear if the `details` parameter in the request is set to `SHOW`.
     * @member {ExpirationDetails[]} expirationDetails
     * @type {ExpirationDetails[]}
     */
    expirationDetails: ExpirationDetails[];
    /**
     * @member {InventoryDetails} inventoryDetails
     * @type {InventoryDetails}
     */
    inventoryDetails: InventoryDetails;
    /**
     * Total quantity that is in-transit from the seller and has not yet been received at an AWD Distribution Center
     * @member {Number} totalInboundQuantity
     * @type {Number}
     */
    totalInboundQuantity: number;
    /**
     * Total quantity that is present in AWD distribution centers.
     * @member {Number} totalOnhandQuantity
     * @type {Number}
     */
    totalOnhandQuantity: number;
}
import { ExpirationDetails } from './ExpirationDetails.js';
import { InventoryDetails } from './InventoryDetails.js';
//# sourceMappingURL=InventorySummary.d.ts.map