/**
 * The GetSellingPartnerMetricsResponseMetric model module.
 * @module replenishment_v2022_11_07/model/GetSellingPartnerMetricsResponseMetric
 * @version 2022-11-07
 */
export class GetSellingPartnerMetricsResponseMetric {
    /**
     * Constructs a <code>GetSellingPartnerMetricsResponseMetric</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {GetSellingPartnerMetricsResponseMetric} obj Optional instance to populate.
     * @return {GetSellingPartnerMetricsResponseMetric} The populated <code>GetSellingPartnerMetricsResponseMetric</code> instance.
     */
    static constructFromObject(data: any, obj: GetSellingPartnerMetricsResponseMetric): GetSellingPartnerMetricsResponseMetric;
    /**
     * The percentage of items that were not shipped out of the total shipped units over a period of time due to being out of stock. Applicable to `PERFORMANCE` `timePeriodType`.
     * @member {Number} notDeliveredDueToOOS
     * @type {Number}
     */
    notDeliveredDueToOOS: number;
    /**
     * The revenue generated from subscriptions over a period of time. Applicable for both the `PERFORMANCE` and `FORECAST` `timePeriodType`.
     * @member {Number} totalSubscriptionsRevenue
     * @type {Number}
     */
    totalSubscriptionsRevenue: number;
    /**
     * The number of units shipped to the subscribers over a period of time. Applicable for both the `PERFORMANCE` and `FORECAST` `timePeriodType`.
     * @member {Number} shippedSubscriptionUnits
     * @type {Number}
     */
    shippedSubscriptionUnits: number;
    /**
     * The number of active subscriptions present at the end of the period. Applicable to `PERFORMANCE` `timePeriodType`.
     * @member {Number} activeSubscriptions
     * @type {Number}
     */
    activeSubscriptions: number;
    /**
     * The average revenue per subscriber of the program over a period of past 12 months for sellers and 6 months for vendors. Applicable to `PERFORMANCE` `timePeriodType`.
     * @member {Number} subscriberAverageRevenue
     * @type {Number}
     */
    subscriberAverageRevenue: number;
    /**
     * The average revenue per non-subscriber of the program over a period of past 12 months for sellers and 6 months for vendors. Applicable to `PERFORMANCE` `timePeriodType`.
     * @member {Number} nonSubscriberAverageRevenue
     * @type {Number}
     */
    nonSubscriberAverageRevenue: number;
    /**
     * The revenue that would have been generated had there not been out of stock. Applicable to `PERFORMANCE` `timePeriodType`.
     * @member {Number} lostRevenueDueToOOS
     * @type {Number}
     */
    lostRevenueDueToOOS: number;
    /**
     * The average reorders per subscriber of the program over a period of 12 months. Applicable to `PERFORMANCE` `timePeriodType`.
     * @member {Number} subscriberAverageReorders
     * @type {Number}
     */
    subscriberAverageReorders: number;
    /**
     * The average reorders per non-subscriber of the program over a period of past 12 months. Applicable to `PERFORMANCE` `timePeriodType`.
     * @member {Number} nonSubscriberAverageReorders
     * @type {Number}
     */
    nonSubscriberAverageReorders: number;
    /**
     * The percentage of revenue from ASINs with coupons out of total revenue from all ASINs. Applicable to `PERFORMANCE` `timePeriodType`.
     * @member {Number} couponsRevenuePenetration
     * @type {Number}
     */
    couponsRevenuePenetration: number;
    /**
     * The subscription revenue generated from subscriptions with over two deliveries over the past 12 months. Applicable to `PERFORMANCE` `timePeriodType`.
     * @member {Number} revenueFromSubscriptionsWithMultipleDeliveries
     * @type {Number}
     */
    revenueFromSubscriptionsWithMultipleDeliveries: number;
    /**
     * The subscription revenue generated from active subscriptions with one delivery over the past 12 months. Applicable to `PERFORMANCE` `timePeriodType`.
     * @member {Number} revenueFromActiveSubscriptionsWithSingleDelivery
     * @type {Number}
     */
    revenueFromActiveSubscriptionsWithSingleDelivery: number;
    /**
     * The subscription revenue generated from subscriptions which are cancelled after one delivery over the past 12 months. Applicable to `PERFORMANCE` `timePeriodType`.
     * @member {Number} revenueFromCancelledSubscriptionsAfterSingleDelivery
     * @type {Number}
     */
    revenueFromCancelledSubscriptionsAfterSingleDelivery: number;
    /**
     * The percentage of subscriptions retained after 30 days of subscription creation. Applicable to `PERFORMANCE` `timePeriodType`.
     * @member {Number} subscriberRetentionFor30Days
     * @type {Number}
     */
    subscriberRetentionFor30Days: number;
    /**
     * The percentage of subscriptions retained after 90 days of subscription creation. Applicable to `PERFORMANCE` `timePeriodType`.
     * @member {Number} subscriberRetentionFor90Days
     * @type {Number}
     */
    subscriberRetentionFor90Days: number;
    /**
     * The percentage of subscription revenue generated by offers with 0% seller-funded discount over the last 12 months. Applicable to `PERFORMANCE` `timePeriodType`.
     * @member {Number} revenuePenetrationFor0PercentSellerFunding
     * @type {Number}
     */
    revenuePenetrationFor0PercentSellerFunding: number;
    /**
     * [Applicable only for Sellers] The percentage of subscription revenue generated by offers with 5% seller-funded discount over the last 12 months. Applicable to `PERFORMANCE` `timePeriodType`.
     * @member {Number} revenuePenetrationFor5PercentSellerFunding
     * @type {Number}
     */
    revenuePenetrationFor5PercentSellerFunding: number;
    /**
     * [Applicable only for Sellers] The percentage of subscription revenue generated by offers with 10% seller-funded discount over the last 12 months. Applicable to `PERFORMANCE` `timePeriodType`.
     * @member {Number} revenuePenetrationFor10PercentSellerFunding
     * @type {Number}
     */
    revenuePenetrationFor10PercentSellerFunding: number;
    /**
     * [Applicable only for vendors] The percentage of subscription revenue generated by offers with 5% or above seller-funded discount over the last 12 months. Applicable to `PERFORMANCE` `timePeriodType`.
     * @member {Number} revenuePenetrationFor5PlusPercentSellerFunding
     * @type {Number}
     */
    revenuePenetrationFor5PlusPercentSellerFunding: number;
    /**
     * The percentage of new subscriptions acquired through coupons. Applicable to `PERFORMANCE` `timePeriodType`.
     * @member {Number} shareOfCouponSubscriptions
     * @type {Number}
     */
    shareOfCouponSubscriptions: number;
    /**
     * Total revenue from customers who have made purchases from your catalog but have never subscribed to any products
     * @member {Number} nonSubscriberLifeTimeValueFromOTP
     * @type {Number}
     */
    nonSubscriberLifeTimeValueFromOTP: number;
    /**
     * Revenue from one-time purchase orders placed by customers who previously had subscriptions but currently have none active in your catalog.
     * @member {Number} lostSubscriberLifeTimeValueFromOTP
     * @type {Number}
     */
    lostSubscriberLifeTimeValueFromOTP: number;
    /**
     * Revenue from Subscribe & Save orders placed by customers who previously had subscriptions but currently have none active in your catalog.
     * @member {Number} lostSubscriberLifeTimeValueFromSNS
     * @type {Number}
     */
    lostSubscriberLifeTimeValueFromSNS: number;
    /**
     * Revenue from one-time purchase orders placed by customers who started their first subscription with your catalog within the past 12 months.
     * @member {Number} growingSubscriberLifeTimeValueFromOTP
     * @type {Number}
     */
    growingSubscriberLifeTimeValueFromOTP: number;
    /**
     * Revenue from Subscribe & Save orders placed by customers who started their first subscription with your catalog within the past 12 months.
     * @member {Number} growingSubscriberLifeTimeValueFromSNS
     * @type {Number}
     */
    growingSubscriberLifeTimeValueFromSNS: number;
    /**
     * Revenue from one-time purchase orders placed by customers who have maintained an active subscription with your catalog for more than 12 months.
     * @member {Number} establishedSubscriberLifeTimeValueFromOTP
     * @type {Number}
     */
    establishedSubscriberLifeTimeValueFromOTP: number;
    /**
     * Revenue from Subscribe & Save orders placed by customers who have maintained an active subscription with your catalog for more than 12 months.
     * @member {Number} establishedSubscriberLifeTimeValueFromSNS
     * @type {Number}
     */
    establishedSubscriberLifeTimeValueFromSNS: number;
    /**
     * Percentage of subscriptions created by offers with 0% seller-funded discount out of the total number of new orders placed over the past 12 months
     * @member {Number} signupConversionFor0PercentSellerFunding
     * @type {Number}
     */
    signupConversionFor0PercentSellerFunding: number;
    /**
     * [Applicable only for Sellers] Percentage of subscriptions created by offers with 5% seller-funded discount out of the total number of new orders placed over the past 12 months
     * @member {Number} signupConversionFor5PercentSellerFunding
     * @type {Number}
     */
    signupConversionFor5PercentSellerFunding: number;
    /**
     * [Applicable only for Sellers] Percentage of subscriptions created by offers with 10% seller-funded discount out of the total number of new orders placed over the past 12 months
     * @member {Number} signupConversionFor10PercentSellerFunding
     * @type {Number}
     */
    signupConversionFor10PercentSellerFunding: number;
    /**
     * [Applicable only for Vendors] Percentage of subscriptions created by offers with 5% or above seller-funded discount out of the total number of new orders placed over the past 12 months
     * @member {Number} signupConversionFor5PlusPercentSellerFunding
     * @type {Number}
     */
    signupConversionFor5PlusPercentSellerFunding: number;
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
//# sourceMappingURL=GetSellingPartnerMetricsResponseMetric.d.ts.map