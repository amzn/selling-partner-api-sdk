/**
 * The SkuQuantity model module.
 * @module awd_v2024_05_09/model/SkuQuantity
 * @version 2024-05-09
 */
export class SkuQuantity {
    /**
     * Constructs a <code>SkuQuantity</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {SkuQuantity} obj Optional instance to populate.
     * @return {SkuQuantity} The populated <code>SkuQuantity</code> instance.
     */
    static constructFromObject(data: any, obj: SkuQuantity): SkuQuantity;
    /**
     * Constructs a new <code>SkuQuantity</code>.
     * Quantity details for a SKU as part of a shipment
     * @alias module:awd_v2024_05_09/model/SkuQuantity
     * @class
     * @param expectedQuantity {InventoryQuantity}
     * @param sku {String} The merchant stock keeping unit
     */
    constructor(expectedQuantity: InventoryQuantity, sku: string);
    expectedQuantity: InventoryQuantity;
    sku: string;
    /**
     * @member {InventoryQuantity} receivedQuantity
     * @type {InventoryQuantity}
     */
    receivedQuantity: InventoryQuantity;
}
import { InventoryQuantity } from './InventoryQuantity.js';
//# sourceMappingURL=SkuQuantity.d.ts.map