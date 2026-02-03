/**
 * The GetOrderFulfillmentInstructionsResponse model module.
 * @module orders_v0/model/GetOrderFulfillmentInstructionsResponse
 * @version v0
 */
export class GetOrderFulfillmentInstructionsResponse {
    /**
     * Constructs a <code>GetOrderFulfillmentInstructionsResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {GetOrderFulfillmentInstructionsResponse} obj Optional instance to populate.
     * @return {GetOrderFulfillmentInstructionsResponse} The populated <code>GetOrderFulfillmentInstructionsResponse</code> instance.
     */
    static constructFromObject(data: any, obj: GetOrderFulfillmentInstructionsResponse): GetOrderFulfillmentInstructionsResponse;
    /**
     * @member {FulfillmentInstructions} payload
     * @type {FulfillmentInstructions}
     */
    payload: FulfillmentInstructions;
    /**
     * A list of error responses returned when a request is unsuccessful.
     * @member {Array[]} errors
     * @type {Array[]}
     */
    errors: any[][];
}
import { FulfillmentInstructions } from './FulfillmentInstructions.js';
//# sourceMappingURL=GetOrderFulfillmentInstructionsResponse.d.ts.map