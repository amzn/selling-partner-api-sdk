/**
 * The TransactionStatus model module.
 * @module vendortransactionstatus_v1/model/TransactionStatus
 * @version v1
 */
export class TransactionStatus {
    /**
     * Constructs a <code>TransactionStatus</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {TransactionStatus} obj Optional instance to populate.
     * @return {TransactionStatus} The populated <code>TransactionStatus</code> instance.
     */
    static constructFromObject(data: any, obj: TransactionStatus): TransactionStatus;
    /**
     * @member {Transaction} transactionStatus
     * @type {Transaction}
     */
    transactionStatus: Transaction;
}
import { Transaction } from './Transaction.js';
//# sourceMappingURL=TransactionStatus.d.ts.map