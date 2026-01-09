/**
 * The FinancialEventGroup model module.
 * @module finances_v0/model/FinancialEventGroup
 * @version v0
 */
export class FinancialEventGroup {
    /**
     * Constructs a <code>FinancialEventGroup</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {FinancialEventGroup} obj Optional instance to populate.
     * @return {FinancialEventGroup} The populated <code>FinancialEventGroup</code> instance.
     */
    static constructFromObject(data: any, obj: FinancialEventGroup): FinancialEventGroup;
    /**
     * A unique identifier for the financial event group.
     * @member {String} financialEventGroupId
     * @type {String}
     */
    financialEventGroupId: string;
    /**
     * The processing status of the financial event group indicates whether the balance of the financial event group is settled.  Possible values:  * `Open` * `Closed`
     * @member {String} processingStatus
     * @type {String}
     */
    processingStatus: string;
    /**
     * The status of the fund transfer.
     * @member {String} fundTransferStatus
     * @type {String}
     */
    fundTransferStatus: string;
    /**
     * @member {Currency} originalTotal
     * @type {Currency}
     */
    originalTotal: Currency;
    /**
     * @member {Currency} convertedTotal
     * @type {Currency}
     */
    convertedTotal: Currency;
    /**
     * A date in [ISO 8601](https://developer-docs.amazon.com/sp-api/docs/iso-8601) date-time format.
     * @member {Date} fundTransferDate
     * @type {Date}
     */
    fundTransferDate: Date;
    /**
     * The trace identifier used by sellers to look up transactions externally.
     * @member {String} traceId
     * @type {String}
     */
    traceId: string;
    /**
     * The account tail of the payment instrument.
     * @member {String} accountTail
     * @type {String}
     */
    accountTail: string;
    /**
     * @member {Currency} beginningBalance
     * @type {Currency}
     */
    beginningBalance: Currency;
    /**
     * A date in [ISO 8601](https://developer-docs.amazon.com/sp-api/docs/iso-8601) date-time format.
     * @member {Date} financialEventGroupStart
     * @type {Date}
     */
    financialEventGroupStart: Date;
    /**
     * A date in [ISO 8601](https://developer-docs.amazon.com/sp-api/docs/iso-8601) date-time format.
     * @member {Date} financialEventGroupEnd
     * @type {Date}
     */
    financialEventGroupEnd: Date;
}
import { Currency } from './Currency.js';
//# sourceMappingURL=FinancialEventGroup.d.ts.map