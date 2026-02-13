/**
 * The CreateLegalDisclosureResponse model module.
 * @module messaging_v1/model/CreateLegalDisclosureResponse
 * @version v1
 */
export class CreateLegalDisclosureResponse {
    /**
     * Constructs a <code>CreateLegalDisclosureResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {CreateLegalDisclosureResponse} obj Optional instance to populate.
     * @return {CreateLegalDisclosureResponse} The populated <code>CreateLegalDisclosureResponse</code> instance.
     */
    static constructFromObject(data: any, obj: CreateLegalDisclosureResponse): CreateLegalDisclosureResponse;
    /**
     * A list of error responses returned when a request is unsuccessful.
     * @member {Error[]} errors
     * @type {Error[]}
     */
    errors: Error[];
}
import { Error } from './Error.js';
//# sourceMappingURL=CreateLegalDisclosureResponse.d.ts.map