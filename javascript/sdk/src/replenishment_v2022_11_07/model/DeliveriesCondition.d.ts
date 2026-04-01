/**
 * The DeliveriesCondition model module.
 * @module replenishment_v2022_11_07/model/DeliveriesCondition
 * @version 2022-11-07
 */
export class DeliveriesCondition {
    /**
     * Constructs a <code>DeliveriesCondition</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {DeliveriesCondition} obj Optional instance to populate.
     * @return {DeliveriesCondition} The populated <code>DeliveriesCondition</code> instance.
     */
    static constructFromObject(data: Object, obj: DeliveriesCondition): DeliveriesCondition;
    /**
     * The condition type of upcoming deliveries for the offer.
     * @member {String} condition
     * @type {String}
     */
    condition: string;
    /**
     * The number of upcoming deliveries in the next 30 days associated with this delivery condition.
     * @member {Number} next30DaysDeliveries
     * @type {Number}
     */
    next30DaysDeliveries: number;
}
export namespace DeliveriesCondition {
    namespace ConditionEnum {
        let NEXT_30_DAYS_DELIVERIES_PAUSED_PRICING: string;
        let NEXT_30_DAYS_DELIVERIES_PAUSED_NON_BUYABLE: string;
        let NEXT_30_DAYS_DELIVERIES_AT_LOW_INVENTORY_RISK_ONLY: string;
        let NEXT_30_DAYS_DELIVERIES_AT_LOW_INVENTORY_RISK: string;
        let NO_ISSUES_FOR_NEXT_30_DAYS_DELIVERIES: string;
    }
    /**
     * *
     */
    type ConditionEnum = string;
}
//# sourceMappingURL=DeliveriesCondition.d.ts.map