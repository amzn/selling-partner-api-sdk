/**
 * The CarrierCode model module.
 * @module awd_v2024_05_09/model/CarrierCode
 * @version 2024-05-09
 */
export class CarrierCode {
    /**
     * Constructs a <code>CarrierCode</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {CarrierCode} obj Optional instance to populate.
     * @return {CarrierCode} The populated <code>CarrierCode</code> instance.
     */
    static constructFromObject(data: any, obj: CarrierCode): CarrierCode;
    /**
     * @member {CarrierCodeType} carrierCodeType
     * @type {CarrierCodeType}
     */
    carrierCodeType: CarrierCodeType;
    /**
     * Value of the carrier code.
     * @member {String} carrierCodeValue
     * @type {String}
     */
    carrierCodeValue: string;
}
import { CarrierCodeType } from './CarrierCodeType.js';
//# sourceMappingURL=CarrierCode.d.ts.map