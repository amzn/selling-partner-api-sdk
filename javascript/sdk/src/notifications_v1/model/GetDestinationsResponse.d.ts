/**
 * The GetDestinationsResponse model module.
 * @module notifications_v1/model/GetDestinationsResponse
 * @version v1
 */
export class GetDestinationsResponse {
    /**
     * Constructs a <code>GetDestinationsResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {GetDestinationsResponse} obj Optional instance to populate.
     * @return {GetDestinationsResponse} The populated <code>GetDestinationsResponse</code> instance.
     */
    static constructFromObject(data: any, obj: GetDestinationsResponse): GetDestinationsResponse;
    /**
     * A list of destinations.
     * @member {Array[]} payload
     * @type {Array[]}
     */
    payload: any[][];
    /**
     * A list of error responses returned when a request is unsuccessful.
     * @member {Array[]} errors
     * @type {Array[]}
     */
    errors: any[][];
}
//# sourceMappingURL=GetDestinationsResponse.d.ts.map