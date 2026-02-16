/**
 * The AllowanceDetails model module.
 * @module vendorinvoices_v1/model/AllowanceDetails
 * @version v1
 */
export class AllowanceDetails {
    /**
     * Constructs a <code>AllowanceDetails</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {AllowanceDetails} obj Optional instance to populate.
     * @return {AllowanceDetails} The populated <code>AllowanceDetails</code> instance.
     */
    static constructFromObject(data: any, obj: AllowanceDetails): AllowanceDetails;
    /**
     * Constructs a new <code>AllowanceDetails</code>.
     * Monetary and tax details of the allowance.
     * @alias module:vendorinvoices_v1/model/AllowanceDetails
     * @class
     * @param type {String} Type of the allowance applied.
     * @param allowanceAmount {Money}
     */
    constructor(type: string, allowanceAmount: Money);
    type: string;
    allowanceAmount: Money;
    /**
     * Description of the allowance.
     * @member {String} description
     * @type {String}
     */
    description: string;
    /**
     * Tax amount details applied on this allowance.
     * @member {TaxDetails[]} taxDetails
     * @type {TaxDetails[]}
     */
    taxDetails: TaxDetails[];
}
export namespace AllowanceDetails {
    namespace TypeEnum {
        let Discount: string;
        let DiscountIncentive: string;
        let Defective: string;
        let Promotional: string;
        let UnsaleableMerchandise: string;
        let Special: string;
    }
    /**
     * *
     */
    type TypeEnum = string;
}
import { Money } from './Money.js';
import { TaxDetails } from './TaxDetails.js';
//# sourceMappingURL=AllowanceDetails.d.ts.map