/**
 * The DebtRecoveryEvent model module.
 * @module finances_v0/model/DebtRecoveryEvent
 * @version v0
 */
export class DebtRecoveryEvent {
    /**
     * Constructs a <code>DebtRecoveryEvent</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {DebtRecoveryEvent} obj Optional instance to populate.
     * @return {DebtRecoveryEvent} The populated <code>DebtRecoveryEvent</code> instance.
     */
    static constructFromObject(data: any, obj: DebtRecoveryEvent): DebtRecoveryEvent;
    /**
     * The debt recovery type.  Possible values:  * `DebtPayment` * `DebtPaymentFailure` * `DebtAdjustment`
     * @member {String} debtRecoveryType
     * @type {String}
     */
    debtRecoveryType: string;
    /**
     * @member {Currency} recoveryAmount
     * @type {Currency}
     */
    recoveryAmount: Currency;
    /**
     * @member {Currency} overPaymentCredit
     * @type {Currency}
     */
    overPaymentCredit: Currency;
    /**
     * A list of debt recovery item information.
     * @member {Array[]} debtRecoveryItemList
     * @type {Array[]}
     */
    debtRecoveryItemList: any[][];
    /**
     * A list of payment instruments.
     * @member {Array[]} chargeInstrumentList
     * @type {Array[]}
     */
    chargeInstrumentList: any[][];
}
import { Currency } from './Currency.js';
//# sourceMappingURL=DebtRecoveryEvent.d.ts.map