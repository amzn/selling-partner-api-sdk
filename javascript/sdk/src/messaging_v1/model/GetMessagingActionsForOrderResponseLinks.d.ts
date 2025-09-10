/**
 * The GetMessagingActionsForOrderResponseLinks model module.
 * @module messaging_v1/model/GetMessagingActionsForOrderResponseLinks
 * @version v1
 */
export class GetMessagingActionsForOrderResponseLinks {
    /**
     * Constructs a <code>GetMessagingActionsForOrderResponseLinks</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {GetMessagingActionsForOrderResponseLinks} obj Optional instance to populate.
     * @return {GetMessagingActionsForOrderResponseLinks} The populated <code>GetMessagingActionsForOrderResponseLinks</code> instance.
     */
    static constructFromObject(data: any, obj: GetMessagingActionsForOrderResponseLinks): GetMessagingActionsForOrderResponseLinks;
    /**
     * Constructs a new <code>GetMessagingActionsForOrderResponseLinks</code>.
     * The links response that is associated with the specified &#x60;amazonOrderId&#x60;.
     * @alias module:messaging_v1/model/GetMessagingActionsForOrderResponseLinks
     * @class
     * @param self {LinkObject}
     * @param actions {[LinkObject]} Eligible actions for the specified amazonOrderId.
     */
    constructor(self: LinkObject, actions: [LinkObject]);
    self: LinkObject;
    actions: [LinkObject];
}
import { LinkObject } from './LinkObject.js';
//# sourceMappingURL=GetMessagingActionsForOrderResponseLinks.d.ts.map