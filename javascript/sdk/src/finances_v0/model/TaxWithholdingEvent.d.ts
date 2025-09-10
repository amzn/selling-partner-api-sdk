/**
 * The TaxWithholdingEvent model module.
 * @module finances_v0/model/TaxWithholdingEvent
 * @version v0
 */
export class TaxWithholdingEvent {
    /**
     * Constructs a <code>TaxWithholdingEvent</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {TaxWithholdingEvent} obj Optional instance to populate.
     * @return {TaxWithholdingEvent} The populated <code>TaxWithholdingEvent</code> instance.
     */
    static constructFromObject(data: any, obj: TaxWithholdingEvent): TaxWithholdingEvent;
    /**
     * Fields with a schema type of date are in ISO 8601 date time format (for example GroupBeginDate).
     * @member {Date} postedDate
     * @type {Date}
     */
    postedDate: Date;
    /**
     * @member {Currency} baseAmount
     * @type {Currency}
     */
    baseAmount: Currency;
    /**
     * @member {Currency} withheldAmount
     * @type {Currency}
     */
    withheldAmount: Currency;
    /**
     * @member {TaxWithholdingPeriod} taxWithholdingPeriod
     * @type {TaxWithholdingPeriod}
     */
    taxWithholdingPeriod: TaxWithholdingPeriod;
}
import { Currency } from './Currency.js';
import { TaxWithholdingPeriod } from './TaxWithholdingPeriod.js';
//# sourceMappingURL=TaxWithholdingEvent.d.ts.map