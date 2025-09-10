/**
 * The IncludedFeeDetail model module.
 * @module productfees_v0/model/IncludedFeeDetail
 * @version v0
 */
export class IncludedFeeDetail {
    /**
     * Constructs a <code>IncludedFeeDetail</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {IncludedFeeDetail} obj Optional instance to populate.
     * @return {IncludedFeeDetail} The populated <code>IncludedFeeDetail</code> instance.
     */
    static constructFromObject(data: any, obj: IncludedFeeDetail): IncludedFeeDetail;
    /**
     * Constructs a new <code>IncludedFeeDetail</code>.
     * The type of fee, fee amount, and other details.
     * @alias module:productfees_v0/model/IncludedFeeDetail
     * @class
     * @param feeType {String} The type of fee charged to a seller.
     * @param feeAmount {MoneyType}
     * @param finalFee {MoneyType}
     */
    constructor(feeType: string, feeAmount: MoneyType, finalFee: MoneyType);
    feeType: string;
    feeAmount: MoneyType;
    finalFee: MoneyType;
    /**
     * @member {MoneyType} feePromotion
     * @type {MoneyType}
     */
    feePromotion: MoneyType;
    /**
     * @member {MoneyType} taxAmount
     * @type {MoneyType}
     */
    taxAmount: MoneyType;
}
import { MoneyType } from './MoneyType.js';
//# sourceMappingURL=IncludedFeeDetail.d.ts.map