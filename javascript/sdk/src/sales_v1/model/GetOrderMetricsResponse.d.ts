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
     * @member {[OrderMetricsInterval]} payload
     * @type {[OrderMetricsInterval]}
     */
    payload: [OrderMetricsInterval];
    /**
     * A list of error responses returned when a request is unsuccessful.
     * @member {[Error]} errors
     * @type {[Error]}
     */
    errors: [Error];
}
import { OrderMetricsInterval } from './OrderMetricsInterval.js';
import { Error } from './Error.js';
//# sourceMappingURL=GetOrderMetricsResponse.d.ts.map