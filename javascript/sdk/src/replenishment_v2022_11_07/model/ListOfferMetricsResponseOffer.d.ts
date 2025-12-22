/**
 * The ListOfferMetricsResponseOffer model module.
 * @module replenishment_v2022_11_07/model/ListOfferMetricsResponseOffer
 * @version 2022-11-07
 */
export class ListOfferMetricsResponseOffer {
    /**
     * Constructs a <code>ListOfferMetricsResponseOffer</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {ListOfferMetricsResponseOffer} obj Optional instance to populate.
     * @return {ListOfferMetricsResponseOffer} The populated <code>ListOfferMetricsResponseOffer</code> instance.
     */
    static constructFromObject(data: any, obj: ListOfferMetricsResponseOffer): ListOfferMetricsResponseOffer;
    /**
     * The Amazon Standard Identification Number (ASIN).
     * @member {String} asin
     * @type {String}
     */
    asin: string;
    /**
     * The percentage of items that were not shipped out of the total shipped units over a period of time due to being out of stock. Applicable to `FORECAST` `timePeriodType`.
     * @member {Number} notDeliveredDueToOOS
     * @type {Number}
     */
    notDeliveredDueToOOS: number;
    /**
     * The revenue generated from subscriptions over a period of time. Applicable to `FORECAST` `timePeriodType`.
     * @member {Number} totalSubscriptionsRevenue
     * @type {Number}
     */
    totalSubscriptionsRevenue: number;
    /**
     * The number of units shipped to the subscribers over a period of time. Applicable to `FORECAST` `timePeriodType`.
     * @member {Number} shippedSubscriptionUnits
     * @type {Number}
     */
    shippedSubscriptionUnits: number;
    /**
     * The number of active subscriptions present at the end of the period. Applicable to `FORECAST` `timePeriodType`.
     * @member {Number} activeSubscriptions
     * @type {Number}
     */
    activeSubscriptions: number;
    /**
     * The percentage of total program revenue out of total product revenue. Applicable to `FORECAST` `timePeriodType`.
     * @member {Number} revenuePenetration
     * @type {Number}
     */
    revenuePenetration: number;
    /**
     * The revenue that would have been generated had there not been out of stock. Applicable to `FORECAST` `timePeriodType`.
     * @member {Number} lostRevenueDueToOOS
     * @type {Number}
     */
    lostRevenueDueToOOS: number;
    /**
     * The percentage of revenue from ASINs with coupons out of total revenue from all ASINs. Applicable to `FORECAST` `timePeriodType`.
     * @member {Number} couponsRevenuePenetration
     * @type {Number}
     */
    couponsRevenuePenetration: number;
    /**
     * The percentage of new subscriptions acquired through coupons. Applicable to `FORECAST` `timePeriodType`.
     * @member {Number} shareOfCouponSubscriptions
     * @type {Number}
     */
    shareOfCouponSubscriptions: number;
    /**
     * The forecasted total subscription revenue for the next 30 days. Applicable to FORECAST timePeriodType.
     * @member {Number} next30DayTotalSubscriptionsRevenue
     * @type {Number}
     */
    next30DayTotalSubscriptionsRevenue: number;
    /**
     * The forecasted total subscription revenue for the next 60 days. Applicable to FORECAST timePeriodType.
     * @member {Number} next60DayTotalSubscriptionsRevenue
     * @type {Number}
     */
    next60DayTotalSubscriptionsRevenue: number;
    /**
     * The forecasted total subscription revenue for the next 90 days. Applicable to FORECAST timePeriodType.
     * @member {Number} next90DayTotalSubscriptionsRevenue
     * @type {Number}
     */
    next90DayTotalSubscriptionsRevenue: number;
    /**
     * The forecasted shipped subscription units for the next 30 days. Applicable to FORECAST timePeriodType.
     * @member {Number} next30DayShippedSubscriptionUnits
     * @type {Number}
     */
    next30DayShippedSubscriptionUnits: number;
    /**
     * The forecasted shipped subscription units for the next 60 days. Applicable to FORECAST timePeriodType.
     * @member {Number} next60DayShippedSubscriptionUnits
     * @type {Number}
     */
    next60DayShippedSubscriptionUnits: number;
    /**
     * The forecasted shipped subscription units for the next 90 days. Applicable to FORECAST timePeriodType.
     * @member {Number} next90DayShippedSubscriptionUnits
     * @type {Number}
     */
    next90DayShippedSubscriptionUnits: number;
    /**
     * @member {TimeInterval} timeInterval
     * @type {TimeInterval}
     */
    timeInterval: TimeInterval;
    /**
     * The currency code in ISO 4217 format.
     * @member {String} currencyCode
     * @type {String}
     */
    currencyCode: string;
}
import { TimeInterval } from './TimeInterval.js';
//# sourceMappingURL=ListOfferMetricsResponseOffer.d.ts.map