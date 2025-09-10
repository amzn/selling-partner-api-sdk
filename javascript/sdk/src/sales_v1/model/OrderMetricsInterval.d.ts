/**
 * The OrderMetricsInterval model module.
 * @module sales_v1/model/OrderMetricsInterval
 * @version v1
 */
export class OrderMetricsInterval {
    /**
     * Constructs a <code>OrderMetricsInterval</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {OrderMetricsInterval} obj Optional instance to populate.
     * @return {OrderMetricsInterval} The populated <code>OrderMetricsInterval</code> instance.
     */
    static constructFromObject(data: any, obj: OrderMetricsInterval): OrderMetricsInterval;
    /**
     * Constructs a new <code>OrderMetricsInterval</code>.
     * Contains order metrics.
     * @alias module:sales_v1/model/OrderMetricsInterval
     * @class
     * @param interval {String} The interval of time based on requested granularity (ex. Hour, Day, etc.) If this is the first or the last interval from the list, it might contain incomplete data if the requested interval doesn't align with the requested granularity (ex. request interval 2018-09-01T02:00:00Z--2018-09-04T19:00:00Z and granularity day will result in Sept 1st UTC day and Sept 4th UTC days having partial data).
     * @param unitCount {Number} The number of units in orders based on the specified filters.
     * @param orderItemCount {Number} The number of order items based on the specified filters.
     * @param orderCount {Number} The number of orders based on the specified filters.
     * @param averageUnitPrice {Money}
     * @param totalSales {Money}
     */
    constructor(interval: string, unitCount: number, orderItemCount: number, orderCount: number, averageUnitPrice: Money, totalSales: Money);
    interval: string;
    unitCount: number;
    orderItemCount: number;
    orderCount: number;
    averageUnitPrice: Money;
    totalSales: Money;
}
import { Money } from './Money.js';
//# sourceMappingURL=OrderMetricsInterval.d.ts.map