/**
 * The FxRateDetails model module.
 * @module sellerWallet_2024_03_01/model/FxRateDetails
 * @version 2024-03-01
 */
export class FxRateDetails {
    /**
     * Constructs a <code>FxRateDetails</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {FxRateDetails} obj Optional instance to populate.
     * @return {FxRateDetails} The populated <code>FxRateDetails</code> instance.
     */
    static constructFromObject(data: any, obj: FxRateDetails): FxRateDetails;
    /**
     * Constructs a new <code>FxRateDetails</code>.
     * Foreign exchange rate details displayed when transfer preview is requested.
     * @alias module:sellerWallet_2024_03_01/model/FxRateDetails
     * @class
     * @param fxRateId {String} Unique identifier assigned to the fees/foreign exchange Rate of a transaction.
     * @param baseRate {Number} A decimal number such as amount or FX rate.
     * @param effectiveFxRate {Number} A decimal number such as amount or FX rate.
     * @param rateDirection {RateDirection}
     */
    constructor(fxRateId: string, baseRate: number, effectiveFxRate: number, rateDirection: RateDirection);
    fxRateId: string;
    baseRate: number;
    effectiveFxRate: number;
    rateDirection: RateDirection;
}
import { RateDirection } from './RateDirection.js';
//# sourceMappingURL=FxRateDetails.d.ts.map