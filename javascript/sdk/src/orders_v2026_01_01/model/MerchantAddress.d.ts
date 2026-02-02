/**
 * The MerchantAddress model module.
 * @module orders_v2026_01_01/model/MerchantAddress
 * @version 2026-01-01
 */
export class MerchantAddress {
    /**
     * Constructs a <code>MerchantAddress</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {MerchantAddress} obj Optional instance to populate.
     * @return {MerchantAddress} The populated <code>MerchantAddress</code> instance.
     */
    static constructFromObject(data: any, obj: MerchantAddress): MerchantAddress;
    /**
     * The name of the business or facility at this address.
     * @member {String} name
     * @type {String}
     */
    name: string;
    /**
     * The primary street address of the merchant's location.
     * @member {String} addressLine1
     * @type {String}
     */
    addressLine1: string;
    /**
     * Additional address information.
     * @member {String} addressLine2
     * @type {String}
     */
    addressLine2: string;
    /**
     * Additional address information.
     * @member {String} addressLine3
     * @type {String}
     */
    addressLine3: string;
    /**
     * The city of the address.
     * @member {String} city
     * @type {String}
     */
    city: string;
    /**
     * The district or county of the address.
     * @member {String} districtOrCounty
     * @type {String}
     */
    districtOrCounty: string;
    /**
     * The state, province, or region of the address.
     * @member {String} stateOrRegion
     * @type {String}
     */
    stateOrRegion: string;
    /**
     * The municipality of the address.
     * @member {String} municipality
     * @type {String}
     */
    municipality: string;
    /**
     * The postal code or ZIP code of the address.
     * @member {String} postalCode
     * @type {String}
     */
    postalCode: string;
    /**
     * The two-letter country code for the address, in ISO 3166-1 format.
     * @member {String} countryCode
     * @type {String}
     */
    countryCode: string;
}
//# sourceMappingURL=MerchantAddress.d.ts.map