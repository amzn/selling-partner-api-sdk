/**
 * The CapacityReservationBillingEvent model module.
 * @module finances_v0/model/CapacityReservationBillingEvent
 * @version v0
 */
export class CapacityReservationBillingEvent {
    /**
     * Constructs a <code>CapacityReservationBillingEvent</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {CapacityReservationBillingEvent} obj Optional instance to populate.
     * @return {CapacityReservationBillingEvent} The populated <code>CapacityReservationBillingEvent</code> instance.
     */
    static constructFromObject(data: any, obj: CapacityReservationBillingEvent): CapacityReservationBillingEvent;
    /**
     * Indicates the type of transaction. For example, FBA Inventory Fee
     * @member {String} transactionType
     * @type {String}
     */
    transactionType: string;
    /**
     * Fields with a schema type of date are in ISO 8601 date time format (for example GroupBeginDate).
     * @member {Date} postedDate
     * @type {Date}
     */
    postedDate: Date;
    /**
     * A short description of the capacity reservation billing event.
     * @member {String} description
     * @type {String}
     */
    description: string;
    /**
     * @member {Currency} transactionAmount
     * @type {Currency}
     */
    transactionAmount: Currency;
}
import { Currency } from './Currency.js';
//# sourceMappingURL=CapacityReservationBillingEvent.d.ts.map