/**
 * The GetMessagingActionResponse model module.
 * @module messaging_v1/model/GetMessagingActionResponse
 * @version v1
 */
export class GetMessagingActionResponse {
    /**
     * Constructs a <code>GetMessagingActionResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {GetMessagingActionResponse} obj Optional instance to populate.
     * @return {GetMessagingActionResponse} The populated <code>GetMessagingActionResponse</code> instance.
     */
    static constructFromObject(data: any, obj: GetMessagingActionResponse): GetMessagingActionResponse;
    /**
     * @member {GetMessagingActionResponseLinks} links
     * @type {GetMessagingActionResponseLinks}
     */
    links: GetMessagingActionResponseLinks;
    /**
     * @member {GetMessagingActionResponseEmbedded} embedded
     * @type {GetMessagingActionResponseEmbedded}
     */
    embedded: GetMessagingActionResponseEmbedded;
    /**
     * @member {MessagingAction} payload
     * @type {MessagingAction}
     */
    payload: MessagingAction;
    /**
     * A list of error responses returned when a request is unsuccessful.
     * @member {[Error]} errors
     * @type {[Error]}
     */
    errors: [Error];
}
import { GetMessagingActionResponseLinks } from './GetMessagingActionResponseLinks.js';
import { GetMessagingActionResponseEmbedded } from './GetMessagingActionResponseEmbedded.js';
import { MessagingAction } from './MessagingAction.js';
import { Error } from './Error.js';
//# sourceMappingURL=GetMessagingActionResponse.d.ts.map