/**
 * The CreateTransactionResponse model module.
 * @module sellerWallet_2024_03_01/model/CreateTransactionResponse
 * @version 2024-03-01
 */
export class CreateTransactionResponse {
    /**
     * Constructs a <code>CreateTransactionResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {CreateTransactionResponse} obj Optional instance to populate.
     * @return {CreateTransactionResponse} The populated <code>CreateTransactionResponse</code> instance.
     */
    static constructFromObject(data: any, obj: CreateTransactionResponse): CreateTransactionResponse;
    /**
     * Constructs a new <code>CreateTransactionResponse</code>.
     * The transaction response and historical details related to it.
     * @alias module:sellerWallet_2024_03_01/model/CreateTransactionResponse
     * @class
     * @param transaction {Transaction}
     * @param callBackURL {String} The callback URL for the transaction which the user have to click to approve/consent the transaction
     */
    constructor(transaction: Transaction, callBackURL: string);
    transaction: Transaction;
    callBackURL: string;
}
import { Transaction } from './Transaction.js';
//# sourceMappingURL=CreateTransactionResponse.d.ts.map