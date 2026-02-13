/**
 * The BoxInput model module.
 * @module fulfillmentinbound_v2024_03_20/model/BoxInput
 * @version 2024-03-20
 */
export class BoxInput {
    /**
     * Constructs a <code>BoxInput</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {BoxInput} obj Optional instance to populate.
     * @return {BoxInput} The populated <code>BoxInput</code> instance.
     */
    static constructFromObject(data: any, obj: BoxInput): BoxInput;
    /**
     * Constructs a new <code>BoxInput</code>.
     * Input information for a given box.
     * @alias module:fulfillmentinbound_v2024_03_20/model/BoxInput
     * @class
     * @param contentInformationSource {BoxContentInformationSource}
     * @param dimensions {Dimensions}
     * @param quantity {Number} The number of containers where all other properties like weight or dimensions are identical.
     * @param weight {Weight}
     */
    constructor(contentInformationSource: BoxContentInformationSource, dimensions: Dimensions, quantity: number, weight: Weight);
    contentInformationSource: BoxContentInformationSource;
    dimensions: Dimensions;
    quantity: number;
    weight: Weight;
    /**
     * The items and their quantity in the box. This must be empty if the box `contentInformationSource` is `BARCODE_2D` or `MANUAL_PROCESS`.
     * @member {ItemInput[]} items
     * @type {ItemInput[]}
     */
    items: ItemInput[];
}
import { BoxContentInformationSource } from './BoxContentInformationSource.js';
import { Dimensions } from './Dimensions.js';
import { Weight } from './Weight.js';
import { ItemInput } from './ItemInput.js';
//# sourceMappingURL=BoxInput.d.ts.map