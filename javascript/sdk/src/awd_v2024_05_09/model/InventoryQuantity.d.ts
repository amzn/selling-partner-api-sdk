/**
 * The InventoryQuantity model module.
 * @module awd_v2024_05_09/model/InventoryQuantity
 * @version 2024-05-09
 */
export class InventoryQuantity {
    /**
     * Constructs a <code>InventoryQuantity</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {InventoryQuantity} obj Optional instance to populate.
     * @return {InventoryQuantity} The populated <code>InventoryQuantity</code> instance.
     */
    static constructFromObject(data: any, obj: InventoryQuantity): InventoryQuantity;
    /**
     * Constructs a new <code>InventoryQuantity</code>.
     * Quantity of inventory with an associated measurement unit context.
     * @alias module:awd_v2024_05_09/model/InventoryQuantity
     * @class
     * @param quantity {Number} Quantity of the respective inventory.
     * @param unitOfMeasurement {InventoryUnitOfMeasurement}
     */
    constructor(quantity: number, unitOfMeasurement: InventoryUnitOfMeasurement);
    quantity: number;
    unitOfMeasurement: InventoryUnitOfMeasurement;
}
import { InventoryUnitOfMeasurement } from './InventoryUnitOfMeasurement.js';
//# sourceMappingURL=InventoryQuantity.d.ts.map