/**
 * The FeeDetail model module.
 * @module productfees_v0/model/FeeDetail
 * @version v0
 */
export class FeeDetail {
    /**
     * Constructs a <code>FeeDetail</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {FeeDetail} obj Optional instance to populate.
     * @return {FeeDetail} The populated <code>FeeDetail</code> instance.
     */
    static constructFromObject(data: any, obj: FeeDetail): FeeDetail;
    /**
     * Constructs a new <code>FeeDetail</code>.
     * The type of fee, fee amount, and other details.
     * @alias module:productfees_v0/model/FeeDetail
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
    /**
     * A list of other fees that contribute to a given fee.
     * @member {Array[]} includedFeeDetailList
     * @type {Array[]}
     */
    includedFeeDetailList: any[][];
}
import { MoneyType } from './MoneyType.js';
//# sourceMappingURL=FeeDetail.d.ts.map