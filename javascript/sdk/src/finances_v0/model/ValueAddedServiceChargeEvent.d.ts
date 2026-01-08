/**
 * The ValueAddedServiceChargeEvent model module.
 * @module finances_v0/model/ValueAddedServiceChargeEvent
 * @version v0
 */
export class ValueAddedServiceChargeEvent {
    /**
     * Constructs a <code>ValueAddedServiceChargeEvent</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {ValueAddedServiceChargeEvent} obj Optional instance to populate.
     * @return {ValueAddedServiceChargeEvent} The populated <code>ValueAddedServiceChargeEvent</code> instance.
     */
    static constructFromObject(data: any, obj: ValueAddedServiceChargeEvent): ValueAddedServiceChargeEvent;
    /**
     * The transaction type. For example, 'Other Support Service fees'
     * @member {String} transactionType
     * @type {String}
     */
    transactionType: string;
    /**
     * A date in [ISO 8601](https://developer-docs.amazon.com/sp-api/docs/iso-8601) date-time format.
     * @member {Date} postedDate
     * @type {Date}
     */
    postedDate: Date;
    /**
     * A short description of the service charge event.
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
//# sourceMappingURL=ValueAddedServiceChargeEvent.d.ts.map