/**
 * The BoxUpdateInput model module.
 * @module fulfillmentinbound_v2024_03_20/model/BoxUpdateInput
 * @version 2024-03-20
 */
export class BoxUpdateInput {
    /**
     * Constructs a <code>BoxUpdateInput</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {BoxUpdateInput} obj Optional instance to populate.
     * @return {BoxUpdateInput} The populated <code>BoxUpdateInput</code> instance.
     */
    static constructFromObject(data: any, obj: BoxUpdateInput): BoxUpdateInput;
    /**
     * Constructs a new <code>BoxUpdateInput</code>.
     * Input information for updating a box
     * @alias module:fulfillmentinbound_v2024_03_20/model/BoxUpdateInput
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
     * @member {[ItemInput]} items
     * @type {[ItemInput]}
     */
    items: [ItemInput];
    /**
     * Primary key to uniquely identify a Box Package. PackageId must be provided if the intent is to update an existing box. Adding a new box will not require providing this value. Any existing PackageIds not provided will be treated as to-be-removed
     * @member {String} packageId
     * @type {String}
     */
    packageId: string;
}
import { BoxContentInformationSource } from './BoxContentInformationSource.js';
import { Dimensions } from './Dimensions.js';
import { Weight } from './Weight.js';
import { ItemInput } from './ItemInput.js';
//# sourceMappingURL=BoxUpdateInput.d.ts.map