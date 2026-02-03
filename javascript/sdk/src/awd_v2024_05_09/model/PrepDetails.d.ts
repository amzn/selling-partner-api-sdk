/**
 * The PrepDetails model module.
 * @module awd_v2024_05_09/model/PrepDetails
 * @version 2024-05-09
 */
export class PrepDetails {
    /**
     * Constructs a <code>PrepDetails</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {PrepDetails} obj Optional instance to populate.
     * @return {PrepDetails} The populated <code>PrepDetails</code> instance.
     */
    static constructFromObject(data: any, obj: PrepDetails): PrepDetails;
    /**
     * @member {LabelOwner} labelOwner
     * @type {LabelOwner}
     */
    labelOwner: LabelOwner;
    /**
     * @member {PrepCategory} prepCategory
     * @type {PrepCategory}
     */
    prepCategory: PrepCategory;
    /**
     * Contains information about the preparation of the inbound products. The system auto-generates this field with the use of the `prepCategory`, and if you attempt to pass a value for this field, the system will ignore it.
     * @member {Array[]} prepInstructions
     * @type {Array[]}
     */
    prepInstructions: any[][];
    /**
     * @member {PrepOwner} prepOwner
     * @type {PrepOwner}
     */
    prepOwner: PrepOwner;
}
import { LabelOwner } from './LabelOwner.js';
import { PrepCategory } from './PrepCategory.js';
import { PrepOwner } from './PrepOwner.js';
//# sourceMappingURL=PrepDetails.d.ts.map