/**
 * The PrepInstruction model module.
 * @module awd_v2024_05_09/model/PrepInstruction
 * @version 2024-05-09
 */
export class PrepInstruction {
    /**
     * Constructs a <code>PrepInstruction</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {PrepInstruction} obj Optional instance to populate.
     * @return {PrepInstruction} The populated <code>PrepInstruction</code> instance.
     */
    static constructFromObject(data: any, obj: PrepInstruction): PrepInstruction;
    /**
     * @member {PrepOwner} prepOwner
     * @type {PrepOwner}
     */
    prepOwner: PrepOwner;
    /**
     * The type of preparation to be done. For more information about preparing items, refer to [Prep guidance](https://sellercentral.amazon.com/help/hub/reference/external/GF4G7547KSLDX2KC) on Seller Central.
     * @member {String} prepType
     * @type {String}
     */
    prepType: string;
}
import { PrepOwner } from './PrepOwner.js';
//# sourceMappingURL=PrepInstruction.d.ts.map