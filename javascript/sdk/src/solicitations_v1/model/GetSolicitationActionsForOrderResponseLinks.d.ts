/**
 * The GetSolicitationActionsForOrderResponseLinks model module.
 * @module solicitations_v1/model/GetSolicitationActionsForOrderResponseLinks
 * @version v1
 */
export class GetSolicitationActionsForOrderResponseLinks {
    /**
     * Constructs a <code>GetSolicitationActionsForOrderResponseLinks</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {GetSolicitationActionsForOrderResponseLinks} obj Optional instance to populate.
     * @return {GetSolicitationActionsForOrderResponseLinks} The populated <code>GetSolicitationActionsForOrderResponseLinks</code> instance.
     */
    static constructFromObject(data: any, obj: GetSolicitationActionsForOrderResponseLinks): GetSolicitationActionsForOrderResponseLinks;
    /**
     * Constructs a new <code>GetSolicitationActionsForOrderResponseLinks</code>.
     * @alias module:solicitations_v1/model/GetSolicitationActionsForOrderResponseLinks
     * @class
     * @param self {LinkObject}
     * @param actions {Array[]} Eligible actions for the specified amazonOrderId.
     */
    constructor(self: LinkObject, actions: any[][]);
    self: LinkObject;
    actions: any[][];
}
import { LinkObject } from './LinkObject.js';
//# sourceMappingURL=GetSolicitationActionsForOrderResponseLinks.d.ts.map