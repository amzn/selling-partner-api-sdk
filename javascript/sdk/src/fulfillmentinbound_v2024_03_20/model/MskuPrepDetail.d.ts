/**
 * The MskuPrepDetail model module.
 * @module fulfillmentinbound_v2024_03_20/model/MskuPrepDetail
 * @version 2024-03-20
 */
export class MskuPrepDetail {
    /**
     * Constructs a <code>MskuPrepDetail</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {MskuPrepDetail} obj Optional instance to populate.
     * @return {MskuPrepDetail} The populated <code>MskuPrepDetail</code> instance.
     */
    static constructFromObject(data: any, obj: MskuPrepDetail): MskuPrepDetail;
    /**
     * Constructs a new <code>MskuPrepDetail</code>.
     * An MSKU and its related prep details.
     * @alias module:fulfillmentinbound_v2024_03_20/model/MskuPrepDetail
     * @class
     * @param msku {String} The merchant SKU, a merchant-supplied identifier for a specific SKU.
     * @param prepCategory {PrepCategory}
     * @param prepTypes {PrepType[]} A list of preparation types associated with a preparation category.
     */
    constructor(msku: string, prepCategory: PrepCategory, prepTypes: PrepType[]);
    msku: string;
    prepCategory: PrepCategory;
    prepTypes: PrepType[];
    /**
     * @member {AllOwnersConstraint} allOwnersConstraint
     * @type {AllOwnersConstraint}
     */
    allOwnersConstraint: AllOwnersConstraint;
    /**
     * @member {OwnerConstraint} labelOwnerConstraint
     * @type {OwnerConstraint}
     */
    labelOwnerConstraint: OwnerConstraint;
    /**
     * @member {OwnerConstraint} prepOwnerConstraint
     * @type {OwnerConstraint}
     */
    prepOwnerConstraint: OwnerConstraint;
}
import { PrepCategory } from './PrepCategory.js';
import { PrepType } from './PrepType.js';
import { AllOwnersConstraint } from './AllOwnersConstraint.js';
import { OwnerConstraint } from './OwnerConstraint.js';
//# sourceMappingURL=MskuPrepDetail.d.ts.map