/**
 * The MskuPrepDetailInput model module.
 * @module fulfillmentinbound_v2024_03_20/model/MskuPrepDetailInput
 * @version 2024-03-20
 */
export class MskuPrepDetailInput {
    /**
     * Constructs a <code>MskuPrepDetailInput</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {MskuPrepDetailInput} obj Optional instance to populate.
     * @return {MskuPrepDetailInput} The populated <code>MskuPrepDetailInput</code> instance.
     */
    static constructFromObject(data: any, obj: MskuPrepDetailInput): MskuPrepDetailInput;
    /**
     * Constructs a new <code>MskuPrepDetailInput</code>.
     * An MSKU and its related prep details.
     * @alias module:fulfillmentinbound_v2024_03_20/model/MskuPrepDetailInput
     * @class
     * @param msku {String} The merchant SKU, a merchant-supplied identifier for a specific SKU.
     * @param prepCategory {PrepCategory}
     * @param prepTypes {PrepType[]} A list of preparation types associated with a preparation category.
     */
    constructor(msku: string, prepCategory: PrepCategory, prepTypes: PrepType[]);
    msku: string;
    prepCategory: PrepCategory;
    prepTypes: PrepType[];
}
import { PrepCategory } from './PrepCategory.js';
import { PrepType } from './PrepType.js';
//# sourceMappingURL=MskuPrepDetailInput.d.ts.map