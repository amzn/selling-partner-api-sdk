/**
 * The GetSolicitationActionsForOrderResponse model module.
 * @module solicitations_v1/model/GetSolicitationActionsForOrderResponse
 * @version v1
 */
export class GetSolicitationActionsForOrderResponse {
    /**
     * Constructs a <code>GetSolicitationActionsForOrderResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {GetSolicitationActionsForOrderResponse} obj Optional instance to populate.
     * @return {GetSolicitationActionsForOrderResponse} The populated <code>GetSolicitationActionsForOrderResponse</code> instance.
     */
    static constructFromObject(data: any, obj: GetSolicitationActionsForOrderResponse): GetSolicitationActionsForOrderResponse;
    /**
     * @member {GetSolicitationActionsForOrderResponseLinks} links
     * @type {GetSolicitationActionsForOrderResponseLinks}
     */
    links: GetSolicitationActionsForOrderResponseLinks;
    /**
     * @member {GetSolicitationActionsForOrderResponseEmbedded} embedded
     * @type {GetSolicitationActionsForOrderResponseEmbedded}
     */
    embedded: GetSolicitationActionsForOrderResponseEmbedded;
    /**
     * A list of error responses returned when a request is unsuccessful.
     * @member {[Error]} errors
     * @type {[Error]}
     */
    errors: [Error];
}
import { GetSolicitationActionsForOrderResponseLinks } from './GetSolicitationActionsForOrderResponseLinks.js';
import { GetSolicitationActionsForOrderResponseEmbedded } from './GetSolicitationActionsForOrderResponseEmbedded.js';
import { Error } from './Error.js';
//# sourceMappingURL=GetSolicitationActionsForOrderResponse.d.ts.map