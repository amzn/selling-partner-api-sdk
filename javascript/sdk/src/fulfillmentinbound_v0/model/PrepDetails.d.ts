/**
 * The PrepDetails model module.
 * @module fulfillmentinbound_v0/model/PrepDetails
 * @version v0
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
     * Constructs a new <code>PrepDetails</code>.
     * Preparation instructions and who is responsible for the preparation.
     * @alias module:fulfillmentinbound_v0/model/PrepDetails
     * @class
     * @param prepInstruction {PrepInstruction}
     * @param prepOwner {PrepOwner}
     */
    constructor(prepInstruction: PrepInstruction, prepOwner: PrepOwner);
    prepInstruction: PrepInstruction;
    prepOwner: PrepOwner;
}
import { PrepInstruction } from './PrepInstruction.js';
import { PrepOwner } from './PrepOwner.js';
//# sourceMappingURL=PrepDetails.d.ts.map