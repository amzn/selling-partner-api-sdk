/**
 * The GetOrderMetricsResponse model module.
 * @module sales_v1/model/GetOrderMetricsResponse
 * @version v1
 */
export class GetOrderMetricsResponse {
    /**
     * Constructs a <code>GetOrderMetricsResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {GetOrderMetricsResponse} obj Optional instance to populate.
     * @return {GetOrderMetricsResponse} The populated <code>GetOrderMetricsResponse</code> instance.
     */
    static constructFromObject(data: any, obj: GetOrderMetricsResponse): GetOrderMetricsResponse;
    /**
     * A set of order metrics, each scoped to a particular time interval.
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
//# sourceMappingURL=GetOrderMetricsResponse.d.ts.map