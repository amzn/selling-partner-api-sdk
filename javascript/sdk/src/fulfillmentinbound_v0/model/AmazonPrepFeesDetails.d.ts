/**
 * The AmazonPrepFeesDetails model module.
 * @module fulfillmentinbound_v0/model/AmazonPrepFeesDetails
 * @version v0
 */
export class AmazonPrepFeesDetails {
    /**
     * Constructs a <code>AmazonPrepFeesDetails</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {AmazonPrepFeesDetails} obj Optional instance to populate.
     * @return {AmazonPrepFeesDetails} The populated <code>AmazonPrepFeesDetails</code> instance.
     */
    static constructFromObject(data: any, obj: AmazonPrepFeesDetails): AmazonPrepFeesDetails;
    /**
     * @member {PrepInstruction} prepInstruction
     * @type {PrepInstruction}
     */
    prepInstruction: PrepInstruction;
    /**
     * @member {Amount} feePerUnit
     * @type {Amount}
     */
    feePerUnit: Amount;
}
import { PrepInstruction } from './PrepInstruction.js';
import { Amount } from './Amount.js';
//# sourceMappingURL=AmazonPrepFeesDetails.d.ts.map