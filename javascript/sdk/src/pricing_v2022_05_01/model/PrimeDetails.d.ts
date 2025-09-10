/**
 * The PrimeDetails model module.
 * @module pricing_v2022_05_01/model/PrimeDetails
 * @version 2022-05-01
 */
export class PrimeDetails {
    /**
     * Constructs a <code>PrimeDetails</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {PrimeDetails} obj Optional instance to populate.
     * @return {PrimeDetails} The populated <code>PrimeDetails</code> instance.
     */
    static constructFromObject(data: any, obj: PrimeDetails): PrimeDetails;
    /**
     * Constructs a new <code>PrimeDetails</code>.
     * Amazon Prime details.
     * @alias module:pricing_v2022_05_01/model/PrimeDetails
     * @class
     * @param eligibility {String} Indicates whether the offer is an Amazon Prime offer.
     */
    constructor(eligibility: string);
    eligibility: string;
}
export namespace PrimeDetails {
    namespace EligibilityEnum {
        let NATIONAL: string;
        let REGIONAL: string;
        let NONE: string;
    }
    /**
     * *
     */
    type EligibilityEnum = string;
}
//# sourceMappingURL=PrimeDetails.d.ts.map