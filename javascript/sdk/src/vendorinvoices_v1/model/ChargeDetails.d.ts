/**
 * The ChargeDetails model module.
 * @module vendorinvoices_v1/model/ChargeDetails
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
     * @alias module:vendorinvoices_v1/model/ChargeDetails
     * @class
     * @param type {String} Type of the charge applied.
     * @param chargeAmount {Money}
     */
    constructor(type: string, chargeAmount: Money);
    type: string;
    chargeAmount: Money;
    /**
     * Description of the charge.
     * @member {String} description
     * @type {String}
     */
    description: string;
    /**
     * Tax amount details applied on this charge.
     * @member {Array[]} taxDetails
     * @type {Array[]}
     */
    taxDetails: any[][];
}
export namespace ChargeDetails {
    namespace TypeEnum {
        let Freight: string;
        let Packing: string;
        let Duty: string;
        let Service: string;
        let SmallOrder: string;
        let InsurancePlacementCost: string;
        let InsuranceFee: string;
        let SpecialHandlingService: string;
        let CollectionAndRecyclingService: string;
        let EnvironmentalProtectionService: string;
        let TaxCollectedAtSource: string;
    }
    /**
     * *
     */
    type TypeEnum = string;
}
import { Money } from './Money.js';
//# sourceMappingURL=ChargeDetails.d.ts.map