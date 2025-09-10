/**
 * The LoanServicingEvent model module.
 * @module finances_v0/model/LoanServicingEvent
 * @version v0
 */
export class LoanServicingEvent {
    /**
     * Constructs a <code>LoanServicingEvent</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {LoanServicingEvent} obj Optional instance to populate.
     * @return {LoanServicingEvent} The populated <code>LoanServicingEvent</code> instance.
     */
    static constructFromObject(data: any, obj: LoanServicingEvent): LoanServicingEvent;
    /**
     * @member {Currency} loanAmount
     * @type {Currency}
     */
    loanAmount: Currency;
    /**
     * The type of event.  Possible values:  * LoanAdvance  * LoanPayment  * LoanRefund
     * @member {String} sourceBusinessEventType
     * @type {String}
     */
    sourceBusinessEventType: string;
}
import { Currency } from './Currency.js';
//# sourceMappingURL=LoanServicingEvent.d.ts.map