/**
 * The TransactionInstrumentDetails model module.
 * @module sellerWallet_2024_03_01/model/TransactionInstrumentDetails
 * @version 2024-03-01
 */
export class TransactionInstrumentDetails {
    /**
     * Constructs a <code>TransactionInstrumentDetails</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {TransactionInstrumentDetails} obj Optional instance to populate.
     * @return {TransactionInstrumentDetails} The populated <code>TransactionInstrumentDetails</code> instance.
     */
    static constructFromObject(data: any, obj: TransactionInstrumentDetails): TransactionInstrumentDetails;
    /**
     * Constructs a new <code>TransactionInstrumentDetails</code>.
     * Request body to create transaction instrument, Amazon performs validation and screening (anti-money laundering measuers) on all the transaction instruments before executing a transaction thus it requires transaction instrument holder&#39;s contact details as well
     * @alias module:sellerWallet_2024_03_01/model/TransactionInstrumentDetails
     * @class
     * @param bankAccount {BankAccount}
     * @param bankAccountNumber {String} This field would be used to populate the bank account number of the destination payment method. The field is intentionally not included in any other Schemas since Amazon internal systems will never receive it in unencrypted format, so field won't be part of the request signature
     * @param accountHolderName {String} The bank account holder's name (expected to be an Amazon customer).  **Note:** This field is encrypted before Amazon receives it, so should not be used to generate `destAccountDigitalSignature`, and should not be included in the request signature.
     */
    constructor(bankAccount: BankAccount, bankAccountNumber: string, accountHolderName: string);
    bankAccount: BankAccount;
    bankAccountNumber: string;
    accountHolderName: string;
}
import { BankAccount } from './BankAccount.js';
//# sourceMappingURL=TransactionInstrumentDetails.d.ts.map