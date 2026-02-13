/**
 * The CustomPlacementInput model module.
 * @module fulfillmentinbound_v2024_03_20/model/CustomPlacementInput
 * @version 2024-03-20
 */
export class CustomPlacementInput {
    /**
     * Constructs a <code>CustomPlacementInput</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {CustomPlacementInput} obj Optional instance to populate.
     * @return {CustomPlacementInput} The populated <code>CustomPlacementInput</code> instance.
     */
    static constructFromObject(data: any, obj: CustomPlacementInput): CustomPlacementInput;
    /**
     * Constructs a new <code>CustomPlacementInput</code>.
     * Provide units going to the warehouse.
     * @alias module:fulfillmentinbound_v2024_03_20/model/CustomPlacementInput
     * @class
     * @param items {[ItemInput]} Items included while creating Inbound Plan.
     * @param warehouseId {String} Warehouse Id.
     */
    constructor(items: [ItemInput], warehouseId: string);
    items: ItemInput[];
    warehouseId: string;
}
import { ItemInput } from './ItemInput.js';
//# sourceMappingURL=CustomPlacementInput.d.ts.map