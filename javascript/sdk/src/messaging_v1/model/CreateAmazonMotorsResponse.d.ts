/**
 * The CreateAmazonMotorsResponse model module.
 * @module messaging_v1/model/CreateAmazonMotorsResponse
 * @version v1
 */
export class CreateAmazonMotorsResponse {
    /**
     * Constructs a <code>CreateAmazonMotorsResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {CreateAmazonMotorsResponse} obj Optional instance to populate.
     * @return {CreateAmazonMotorsResponse} The populated <code>CreateAmazonMotorsResponse</code> instance.
     */
    static constructFromObject(data: any, obj: CreateAmazonMotorsResponse): CreateAmazonMotorsResponse;
    /**
     * A list of error responses returned when a request is unsuccessful.
     * @member {[Error]} errors
     * @type {[Error]}
     */
    errors: [Error];
}
import { Error } from './Error.js';
//# sourceMappingURL=CreateAmazonMotorsResponse.d.ts.map