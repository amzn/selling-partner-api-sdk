/**
 * The Selling Partner API for Amazon Seller Wallet Open Banking API
 * The Selling Partner API for Seller Wallet (Seller Wallet API) provides financial information that is relevant to a seller's Seller Wallet account. You can obtain financial events, balances, and transfer schedules for Seller Wallet accounts. You can also schedule and initiate transactions.
 *
 * The version of the OpenAPI document: 2024-03-01
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import { ApiClient } from '../ApiClient.js'
import { BankAccountNumberFormat } from './BankAccountNumberFormat.js'

/**
 * The TransactionAccount model module.
 * @module sellerWallet_2024_03_01/model/TransactionAccount
 * @version 2024-03-01
 */
export class TransactionAccount {
  /**
   * Constructs a new <code>TransactionAccount</code>.
   * Details of the bank account involved in transaction.
   * @alias module:sellerWallet_2024_03_01/model/TransactionAccount
   * @class
   * @param bankAccountHolderName {String} The account holder's name.
   * @param bankName {String} The name of the bank.
   * @param bankAccountNumberFormat {module:sellerWallet_2024_03_01/model/BankAccountNumberFormat}
   * @param bankAccountCurrency {String} The currency code in ISO 4217 format.
   */
  constructor (bankAccountHolderName, bankName, bankAccountNumberFormat, bankAccountCurrency) {
    this.bankAccountHolderName = bankAccountHolderName
    this.bankName = bankName
    this.bankAccountNumberFormat = bankAccountNumberFormat
    this.bankAccountCurrency = bankAccountCurrency
  }

  /**
   * Constructs a <code>TransactionAccount</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:sellerWallet_2024_03_01/model/TransactionAccount} obj Optional instance to populate.
   * @return {module:sellerWallet_2024_03_01/model/TransactionAccount} The populated <code>TransactionAccount</code> instance.
   */
  static constructFromObject (data, obj) {
    if (data) {
      switch (typeof data) {
        case 'string':
          obj = String(data)
          break
        case 'number':
          obj = Number(data)
          break
        case 'boolean':
          obj = Boolean(data)
          break
      }
      obj = obj || new TransactionAccount()
      if (data.hasOwnProperty('accountId')) { obj.accountId = ApiClient.convertToType(data.accountId, 'String') }
      if (data.hasOwnProperty('bankAccountHolderName')) { obj.bankAccountHolderName = ApiClient.convertToType(data.bankAccountHolderName, 'String') }
      if (data.hasOwnProperty('bankName')) { obj.bankName = ApiClient.convertToType(data.bankName, 'String') }
      if (data.hasOwnProperty('bankAccountNumberFormat')) { obj.bankAccountNumberFormat = BankAccountNumberFormat.constructFromObject(data.bankAccountNumberFormat) }
      if (data.hasOwnProperty('bankAccountNumberTail')) { obj.bankAccountNumberTail = ApiClient.convertToType(data.bankAccountNumberTail, 'String') }
      if (data.hasOwnProperty('bankAccountCountryCode')) { obj.bankAccountCountryCode = ApiClient.convertToType(data.bankAccountCountryCode, 'String') }
      if (data.hasOwnProperty('bankAccountCurrency')) { obj.bankAccountCurrency = ApiClient.convertToType(data.bankAccountCurrency, 'String') }
    }
    return obj
  }
}

/**
 * The unique identifier provided by Amazon to identify the account.
 * @member {String} accountId
 */
TransactionAccount.prototype.accountId = undefined

/**
 * The account holder's name.
 * @member {String} bankAccountHolderName
 */
TransactionAccount.prototype.bankAccountHolderName = undefined

/**
 * The name of the bank.
 * @member {String} bankName
 */
TransactionAccount.prototype.bankName = undefined

/**
 * @member {module:sellerWallet_2024_03_01/model/BankAccountNumberFormat} bankAccountNumberFormat
 */
TransactionAccount.prototype.bankAccountNumberFormat = undefined

/**
 * The last three digits of the bank account number.
 * @member {String} bankAccountNumberTail
 */
TransactionAccount.prototype.bankAccountNumberTail = undefined

/**
 * The two-digit country code, in ISO 3166 format. This field is optional for `transactionSourceAccount`, but is mandatory for `transactionDestinationAccount`.
 * @member {String} bankAccountCountryCode
 */
TransactionAccount.prototype.bankAccountCountryCode = undefined

/**
 * The currency code in ISO 4217 format.
 * @member {String} bankAccountCurrency
 */
TransactionAccount.prototype.bankAccountCurrency = undefined
