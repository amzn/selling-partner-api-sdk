/**
 * The AccountHolderAddress model module.
 * @module sellerWallet_2024_03_01/model/AccountHolderAddress
 * @version 2024-03-01
 */
export class AccountHolderAddress {
    /**
     * Constructs a <code>AccountHolderAddress</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {AccountHolderAddress} obj Optional instance to populate.
     * @return {AccountHolderAddress} The populated <code>AccountHolderAddress</code> instance.
     */
    static constructFromObject(data: any, obj: AccountHolderAddress): AccountHolderAddress;
    /**
     * Constructs a new <code>AccountHolderAddress</code>.
     * Address for bank account verification of the Payee. For example, this can be a person or business mailing address
     * @alias module:sellerWallet_2024_03_01/model/AccountHolderAddress
     * @class
     * @param addressLine1 {String} Address Line 1 of the public address
     * @param city {String} City name of the public address
     * @param state {String} State name of the public address. This is the state or region for China-based addresses.
     * @param postalCode {String} Postal code of the public address
     * @param countryCode {String} The two digit country code, in ISO 3166 format.
     */
    constructor(addressLine1: string, city: string, state: string, postalCode: string, countryCode: string);
    addressLine1: string;
    city: string;
    state: string;
    postalCode: string;
    countryCode: string;
    /**
     * Address Line 2 of the public address
     * @member {String} addressLine2
     * @type {String}
     */
    addressLine2: string;
    /**
     * Country name of the public address
     * @member {String} country
     * @type {String}
     */
    country: string;
}
//# sourceMappingURL=AccountHolderAddress.d.ts.map