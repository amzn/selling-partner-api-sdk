/**
* Enum class Metric.
* @enum {String}
* @readonly
*/
export class Metric {
    /**
      * Returns a <code>Metric</code> enum value from a Javascript object name.
      * @param {Object} data The plain JavaScript object containing the name of the enum value.
      * @return {Metric} The enum <code>Metric</code> value.
      */
    static constructFromObject(object: any): Metric;
    /**
           * value: "SHIPPED_SUBSCRIPTION_UNITS"
           * @const
           */
    SHIPPED_SUBSCRIPTION_UNITS: string;
    /**
           * value: "TOTAL_SUBSCRIPTIONS_REVENUE"
           * @const
           */
    TOTAL_SUBSCRIPTIONS_REVENUE: string;
    /**
           * value: "ACTIVE_SUBSCRIPTIONS"
           * @const
           */
    ACTIVE_SUBSCRIPTIONS: string;
    /**
           * value: "NOT_DELIVERED_DUE_TO_OOS"
           * @const
           */
    NOT_DELIVERED_DUE_TO_OOS: string;
    /**
           * value: "SUBSCRIBER_NON_SUBSCRIBER_AVERAGE_REVENUE"
           * @const
           */
    SUBSCRIBER_NON_SUBSCRIBER_AVERAGE_REVENUE: string;
    /**
           * value: "LOST_REVENUE_DUE_TO_OOS"
           * @const
           */
    LOST_REVENUE_DUE_TO_OOS: string;
    /**
           * value: "SUBSCRIBER_NON_SUBSCRIBER_AVERAGE_REORDERS"
           * @const
           */
    SUBSCRIBER_NON_SUBSCRIBER_AVERAGE_REORDERS: string;
    /**
           * value: "COUPONS_REVENUE_PENETRATION"
           * @const
           */
    COUPONS_REVENUE_PENETRATION: string;
    /**
           * value: "REVENUE_BY_DELIVERIES"
           * @const
           */
    REVENUE_BY_DELIVERIES: string;
    /**
           * value: "SUBSCRIBER_RETENTION"
           * @const
           */
    SUBSCRIBER_RETENTION: string;
    /**
           * value: "REVENUE_PENETRATION_BY_SELLER_FUNDING"
           * @const
           */
    REVENUE_PENETRATION_BY_SELLER_FUNDING: string;
    /**
           * value: "SHARE_OF_COUPON_SUBSCRIPTIONS"
           * @const
           */
    SHARE_OF_COUPON_SUBSCRIPTIONS: string;
}
//# sourceMappingURL=Metric.d.ts.map