/**
 * The ChargeDetails model module.
 * @module vendordfpayments_v1/model/ChargeDetails
 * @version v1
 */
export class ChargeDetails {
    /**
     * Constructs a <code>ChargeDetails</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {ChargeDetails} obj Optional instance to populate.
     * @return {ChargeDetails} The populated <code>ChargeDetails</code> instance.
     */
    static constructFromObject(data: any, obj: ChargeDetails): ChargeDetails;
    /**
     * Constructs a new <code>ChargeDetails</code>.
     * Monetary and tax details of the charge.
     * @alias module:vendordfpayments_v1/model/ChargeDetails
     * @class
     * @param type {String} Type of charge applied.
     * @param chargeAmount {Money}
     */
    constructor(type: string, chargeAmount: Money);
    type: string;
    chargeAmount: Money;
    /**
     * Individual tax details per line item.
     * @member {TaxDetail[]} taxDetails
     * @type {TaxDetail[]}
     */
    taxDetails: TaxDetail[];
}
export namespace ChargeDetails {
    namespace TypeEnum {
        let GIFTWRAP: string;
        let FULFILLMENT: string;
        let MARKETINGINSERT: string;
        let PACKAGING: string;
        let LOADING: string;
        let FREIGHTOUT: string;
        let TAX_COLLECTED_AT_SOURCE: string;
    }
    /**
     * *
     */
    type TypeEnum = string;
}
import { Money } from './Money.js';
import { TaxDetail } from './TaxDetail.js';
//# sourceMappingURL=ChargeDetails.d.ts.map