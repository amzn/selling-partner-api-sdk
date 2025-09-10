/**
 * The PalletInput model module.
 * @module fulfillmentinbound_v2024_03_20/model/PalletInput
 * @version 2024-03-20
 */
export class PalletInput {
    /**
     * Constructs a <code>PalletInput</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {PalletInput} obj Optional instance to populate.
     * @return {PalletInput} The populated <code>PalletInput</code> instance.
     */
    static constructFromObject(data: any, obj: PalletInput): PalletInput;
    /**
     * Constructs a new <code>PalletInput</code>.
     * Contains input information about a pallet to be used in the inbound plan.
     * @alias module:fulfillmentinbound_v2024_03_20/model/PalletInput
     * @class
     * @param quantity {Number} The number of containers where all other properties like weight or dimensions are identical.
     */
    constructor(quantity: number);
    quantity: number;
    /**
     * @member {Dimensions} dimensions
     * @type {Dimensions}
     */
    dimensions: Dimensions;
    /**
     * @member {Stackability} stackability
     * @type {Stackability}
     */
    stackability: Stackability;
    /**
     * @member {Weight} weight
     * @type {Weight}
     */
    weight: Weight;
}
import { Dimensions } from './Dimensions.js';
import { Stackability } from './Stackability.js';
import { Weight } from './Weight.js';
//# sourceMappingURL=PalletInput.d.ts.map