/**
 * The GetSchemaResponse model module.
 * @module messaging_v1/model/GetSchemaResponse
 * @version v1
 */
export class GetSchemaResponse {
    /**
     * Constructs a <code>GetSchemaResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {GetSchemaResponse} obj Optional instance to populate.
     * @return {GetSchemaResponse} The populated <code>GetSchemaResponse</code> instance.
     */
    static constructFromObject(data: any, obj: GetSchemaResponse): GetSchemaResponse;
    /**
     * @member {GetSchemaResponseLinks} links
     * @type {GetSchemaResponseLinks}
     */
    links: GetSchemaResponseLinks;
    /**
     * A JSON schema document describing the expected payload of the action. This object can be validated against <a href=http://json-schema.org/draft-04/schema>http://json-schema.org/draft-04/schema</a>.
     * @member {{String: Object}} payload
     * @type {{String: Object}}
     */
    payload: {
        String: any;
    };
    /**
     * A list of error responses returned when a request is unsuccessful.
     * @member {[Error]} errors
     * @type {[Error]}
     */
    errors: [Error];
}
import { GetSchemaResponseLinks } from './GetSchemaResponseLinks.js';
import { Error } from './Error.js';
//# sourceMappingURL=GetSchemaResponse.d.ts.map