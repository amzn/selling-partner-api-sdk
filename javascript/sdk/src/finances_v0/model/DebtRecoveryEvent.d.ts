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
     * The debt recovery type.  Possible values:  * DebtPayment  * DebtPaymentFailure  * DebtAdjustment
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
     * @member {[DebtRecoveryItem]} debtRecoveryItemList
     * @type {[DebtRecoveryItem]}
     */
    debtRecoveryItemList: [DebtRecoveryItem];
    /**
     * A list of payment instruments.
     * @member {[ChargeInstrument]} chargeInstrumentList
     * @type {[ChargeInstrument]}
     */
    chargeInstrumentList: [ChargeInstrument];
}
import { Currency } from './Currency.js';
import { DebtRecoveryItem } from './DebtRecoveryItem.js';
import { ChargeInstrument } from './ChargeInstrument.js';
//# sourceMappingURL=DebtRecoveryEvent.d.ts.map