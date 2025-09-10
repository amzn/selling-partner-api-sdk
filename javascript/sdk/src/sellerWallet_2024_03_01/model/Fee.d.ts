/**
 * The Fee model module.
 * @module sellerWallet_2024_03_01/model/Fee
 * @version 2024-03-01
 */
export class Fee {
    /**
     * Constructs a <code>Fee</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {Fee} obj Optional instance to populate.
     * @return {Fee} The populated <code>Fee</code> instance.
     */
    static constructFromObject(data: any, obj: Fee): Fee;
    /**
     * Constructs a new <code>Fee</code>.
     * If the fees is in baseAmount (sourceAccount) currency, effectiveRate &#x3D;  (baseAmount - sum(fees.feeAmount.currencyAmount)) * baseRate) / baseAmount. If the fees is in transferAmount (destinationAccount) currency, effectiveRate &#x3D;  (( baseAmount * baseRate ) -  sum(fees.feeAmount.currencyAmount )) / baseAmount
     * @alias module:sellerWallet_2024_03_01/model/Fee
     * @class
     * @param feeId {String} Unique identifier assigned to the Fee.
     * @param feeType {FeeType}
     * @param feeRateValue {String} The value of the fee in percentage format.
     * @param feeAmount {Currency}
     */
    constructor(feeId: string, feeType: FeeType, feeRateValue: string, feeAmount: Currency);
    feeId: string;
    feeType: FeeType;
    feeRateValue: string;
    feeAmount: Currency;
}
import { FeeType } from './FeeType.js';
import { Currency } from './Currency.js';
//# sourceMappingURL=Fee.d.ts.map