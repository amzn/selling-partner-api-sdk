/**
 * The TransactionStatus model module.
 * @module vendordftransactions_v2021_12_28/model/TransactionStatus
 * @version 2021-12-28
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