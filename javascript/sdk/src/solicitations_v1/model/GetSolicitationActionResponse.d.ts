/**
 * The GetSolicitationActionResponse model module.
 * @module solicitations_v1/model/GetSolicitationActionResponse
 * @version v1
 */
export class GetSolicitationActionResponse {
    /**
     * Constructs a <code>GetSolicitationActionResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {GetSolicitationActionResponse} obj Optional instance to populate.
     * @return {GetSolicitationActionResponse} The populated <code>GetSolicitationActionResponse</code> instance.
     */
    static constructFromObject(data: any, obj: GetSolicitationActionResponse): GetSolicitationActionResponse;
    /**
     * @member {GetSolicitationActionResponseLinks} links
     * @type {GetSolicitationActionResponseLinks}
     */
    links: GetSolicitationActionResponseLinks;
    /**
     * @member {GetSolicitationActionResponseEmbedded} embedded
     * @type {GetSolicitationActionResponseEmbedded}
     */
    embedded: GetSolicitationActionResponseEmbedded;
    /**
     * @member {SolicitationsAction} payload
     * @type {SolicitationsAction}
     */
    payload: SolicitationsAction;
    /**
     * A list of error responses returned when a request is unsuccessful.
     * @member {Array[]} errors
     * @type {Array[]}
     */
    errors: any[][];
}
import { GetSolicitationActionResponseLinks } from './GetSolicitationActionResponseLinks.js';
import { GetSolicitationActionResponseEmbedded } from './GetSolicitationActionResponseEmbedded.js';
import { SolicitationsAction } from './SolicitationsAction.js';
//# sourceMappingURL=GetSolicitationActionResponse.d.ts.map