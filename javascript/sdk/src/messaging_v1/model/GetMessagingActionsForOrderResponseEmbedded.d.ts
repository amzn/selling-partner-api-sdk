/**
 * The GetMessagingActionsForOrderResponseEmbedded model module.
 * @module messaging_v1/model/GetMessagingActionsForOrderResponseEmbedded
 * @version v1
 */
export class GetMessagingActionsForOrderResponseEmbedded {
    /**
     * Constructs a <code>GetMessagingActionsForOrderResponseEmbedded</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {GetMessagingActionsForOrderResponseEmbedded} obj Optional instance to populate.
     * @return {GetMessagingActionsForOrderResponseEmbedded} The populated <code>GetMessagingActionsForOrderResponseEmbedded</code> instance.
     */
    static constructFromObject(data: any, obj: GetMessagingActionsForOrderResponseEmbedded): GetMessagingActionsForOrderResponseEmbedded;
    /**
     * Constructs a new <code>GetMessagingActionsForOrderResponseEmbedded</code>.
     * The messaging actions response that is associated with the specified &#x60;amazonOrderId&#x60;.
     * @alias module:messaging_v1/model/GetMessagingActionsForOrderResponseEmbedded
     * @class
     * @param actions {[GetMessagingActionResponse]}
     */
    constructor(actions: [GetMessagingActionResponse]);
    actions: GetMessagingActionResponse[];
}
import { GetMessagingActionResponse } from './GetMessagingActionResponse.js';
//# sourceMappingURL=GetMessagingActionsForOrderResponseEmbedded.d.ts.map