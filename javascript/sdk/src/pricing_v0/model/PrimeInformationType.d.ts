/**
 * The PrimeInformationType model module.
 * @module pricing_v0/model/PrimeInformationType
 * @version v0
 */
export class PrimeInformationType {
    /**
     * Constructs a <code>PrimeInformationType</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {PrimeInformationType} obj Optional instance to populate.
     * @return {PrimeInformationType} The populated <code>PrimeInformationType</code> instance.
     */
    static constructFromObject(data: any, obj: PrimeInformationType): PrimeInformationType;
    /**
     * Constructs a new <code>PrimeInformationType</code>.
     * Amazon Prime information.
     * @alias module:pricing_v0/model/PrimeInformationType
     * @class
     * @param isPrime {Boolean} Indicates whether the offer is an Amazon Prime offer.
     * @param isNationalPrime {Boolean} Indicates whether the offer is an Amazon Prime offer throughout the entire marketplace where it is listed.
     */
    constructor(isPrime: boolean, isNationalPrime: boolean);
    isPrime: boolean;
    isNationalPrime: boolean;
}
//# sourceMappingURL=PrimeInformationType.d.ts.map