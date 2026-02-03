/**
 * The GetMessagingActionsForOrderResponse model module.
 * @module messaging_v1/model/GetMessagingActionsForOrderResponse
 * @version v1
 */
export class GetMessagingActionsForOrderResponse {
    /**
     * Constructs a <code>GetMessagingActionsForOrderResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {GetMessagingActionsForOrderResponse} obj Optional instance to populate.
     * @return {GetMessagingActionsForOrderResponse} The populated <code>GetMessagingActionsForOrderResponse</code> instance.
     */
    static constructFromObject(data: any, obj: GetMessagingActionsForOrderResponse): GetMessagingActionsForOrderResponse;
    /**
     * @member {GetMessagingActionsForOrderResponseLinks} links
     * @type {GetMessagingActionsForOrderResponseLinks}
     */
    links: GetMessagingActionsForOrderResponseLinks;
    /**
     * @member {GetMessagingActionsForOrderResponseEmbedded} embedded
     * @type {GetMessagingActionsForOrderResponseEmbedded}
     */
    embedded: GetMessagingActionsForOrderResponseEmbedded;
    /**
     * A list of error responses returned when a request is unsuccessful.
     * @member {Array[]} errors
     * @type {Array[]}
     */
    errors: any[][];
}
import { GetMessagingActionsForOrderResponseLinks } from './GetMessagingActionsForOrderResponseLinks.js';
import { GetMessagingActionsForOrderResponseEmbedded } from './GetMessagingActionsForOrderResponseEmbedded.js';
//# sourceMappingURL=GetMessagingActionsForOrderResponse.d.ts.map