/**
 * The GetSellingPartnerMetricsRequestFilters model module.
 * @module replenishment_v2022_11_07/model/GetSellingPartnerMetricsRequestFilters
 * @version 2022-11-07
 */
export class GetSellingPartnerMetricsRequestFilters {
    /**
     * Constructs a <code>GetSellingPartnerMetricsRequestFilters</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {GetSellingPartnerMetricsRequestFilters} obj Optional instance to populate.
     * @return {GetSellingPartnerMetricsRequestFilters} The populated <code>GetSellingPartnerMetricsRequestFilters</code> instance.
     */
    static constructFromObject(data: Object, obj: GetSellingPartnerMetricsRequestFilters): GetSellingPartnerMetricsRequestFilters;
    /**
     * A list of Amazon Standard Identification Numbers (ASINs) to filter by. ASIN filter is supported for these metrics: SHIPPED_SUBSCRIPTION_UNITS, TOTAL_SUBSCRIPTIONS_REVENUE, ACTIVE_SUBSCRIPTIONS, NOT_DELIVERED_DUE_TO_OOS, LOST_REVENUE_DUE_TO_OOS, COUPONS_REVENUE_PENETRATION, SHARE_OF_COUPON_SUBSCRIPTIONS and REVENUE_PENETRATION.
     * @member {String[]} asins
     * @type {String[]}
     */
    asins: string[];
    /**
     * [Applicable only for Sellers] A list of SKUs to filter by. SKU filter is supported for these metrics: SHIPPED_SUBSCRIPTION_UNITS, TOTAL_SUBSCRIPTIONS_REVENUE, ACTIVE_SUBSCRIPTIONS, NOT_DELIVERED_DUE_TO_OOS, LOST_REVENUE_DUE_TO_OOS, COUPONS_REVENUE_PENETRATION, SHARE_OF_COUPON_SUBSCRIPTIONS and REVENUE_PENETRATION.
     * @member {String[]} skus
     * @type {String[]}
     */
    skus: string[];
    /**
     * [Applicable only for Sellers] The fulfillment channel types to filter by. Fulfillment channel type filter is supported for these metrics: SHIPPED_SUBSCRIPTION_UNITS, TOTAL_SUBSCRIPTIONS_REVENUE, ACTIVE_SUBSCRIPTIONS, NOT_DELIVERED_DUE_TO_OOS, LOST_REVENUE_DUE_TO_OOS, COUPONS_REVENUE_PENETRATION, SHARE_OF_COUPON_SUBSCRIPTIONS and REVENUE_PENETRATION.
     * @member {FulfillmentChannelType[]} fulfillmentChannelTypes
     * @type {FulfillmentChannelType[]}
     */
    fulfillmentChannelTypes: FulfillmentChannelType[];
    /**
     * [Applicable only for US marketplace] A list of brand names to filter by. Brand name filter is supported for these metrics: SHIPPED_SUBSCRIPTION_UNITS, TOTAL_SUBSCRIPTIONS_REVENUE, ACTIVE_SUBSCRIPTIONS, NOT_DELIVERED_DUE_TO_OOS, LOST_REVENUE_DUE_TO_OOS, COUPONS_REVENUE_PENETRATION, SHARE_OF_COUPON_SUBSCRIPTIONS, REVENUE_PENETRATION, SUBSCRIBER_NON_SUBSCRIBER_AVERAGE_REVENUE, SUBSCRIBER_NON_SUBSCRIBER_AVERAGE_REORDERS, REVENUE_BY_DELIVERIES, SUBSCRIBER_RETENTION, REVENUE_PENETRATION_BY_SELLER_FUNDING, SUBSCRIBER_LIFETIME_VALUE_BY_CUSTOMER_SEGMENT and SIGNUP_CONVERSION_BY_SELLER_FUNDING.
     * @member {String[]} brandNames
     * @type {String[]}
     */
    brandNames: string[];
    /**
     * [Applicable only for Vendors] A list of product group names to filter by. Product group filter is supported for these metrics: SHIPPED_SUBSCRIPTION_UNITS, TOTAL_SUBSCRIPTIONS_REVENUE, ACTIVE_SUBSCRIPTIONS, NOT_DELIVERED_DUE_TO_OOS, LOST_REVENUE_DUE_TO_OOS, COUPONS_REVENUE_PENETRATION, SHARE_OF_COUPON_SUBSCRIPTIONS and REVENUE_PENETRATION.
     * @member {String[]} productGroups
     * @type {String[]}
     */
    productGroups: string[];
}
import { FulfillmentChannelType } from './FulfillmentChannelType.js';
//# sourceMappingURL=GetSellingPartnerMetricsRequestFilters.d.ts.map