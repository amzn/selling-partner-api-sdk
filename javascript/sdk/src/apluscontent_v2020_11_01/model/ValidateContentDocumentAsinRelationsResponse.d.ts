/**
 * The ValidateContentDocumentAsinRelationsResponse model module.
 * @module apluscontent_v2020_11_01/model/ValidateContentDocumentAsinRelationsResponse
 * @version 2020-11-01
 */
export class ValidateContentDocumentAsinRelationsResponse {
    /**
     * Constructs a <code>ValidateContentDocumentAsinRelationsResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {ValidateContentDocumentAsinRelationsResponse} obj Optional instance to populate.
     * @return {ValidateContentDocumentAsinRelationsResponse} The populated <code>ValidateContentDocumentAsinRelationsResponse</code> instance.
     */
    static constructFromObject(data: any, obj: ValidateContentDocumentAsinRelationsResponse): ValidateContentDocumentAsinRelationsResponse;
    /**
     * Constructs a new <code>ValidateContentDocumentAsinRelationsResponse</code>.
     * @alias module:apluscontent_v2020_11_01/model/ValidateContentDocumentAsinRelationsResponse
     * @class
     * @implements module:apluscontent_v2020_11_01/model/AplusResponse
     * @implements module:apluscontent_v2020_11_01/model/ErrorList
     * @param errors {Error[]} A list of error responses that are returned when a request is unsuccessful.
     */
    constructor(errors: Error[]);
    errors: Error[];
    /**
     * A set of messages to the user, such as warnings or comments.
     * @member {Error[]} warnings
     * @type {Error[]}
     */
    warnings: Error[];
}
import { Error } from './Error.js';
//# sourceMappingURL=ValidateContentDocumentAsinRelationsResponse.d.ts.map