/**
 * The Marketplace model module.
 * @module sellers_v1/model/Marketplace
 * @version v1
 */
export class Marketplace {
    /**
     * Constructs a <code>Marketplace</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {Marketplace} obj Optional instance to populate.
     * @return {Marketplace} The populated <code>Marketplace</code> instance.
     */
    static constructFromObject(data: any, obj: Marketplace): Marketplace;
    /**
     * Constructs a new <code>Marketplace</code>.
     * Information about an Amazon marketplace where a seller can list items and customers can view and purchase items.
     * @alias module:sellers_v1/model/Marketplace
     * @class
     * @param id {String} The encrypted marketplace value.
     * @param name {String} The marketplace name.
     * @param countryCode {String} The ISO 3166-1 alpha-2 format country code of the marketplace.
     * @param defaultCurrencyCode {String} The ISO 4217 format currency code of the marketplace.
     * @param defaultLanguageCode {String} The ISO 639-1 format language code of the marketplace.
     * @param domainName {String} The domain name of the marketplace.
     */
    constructor(id: string, name: string, countryCode: string, defaultCurrencyCode: string, defaultLanguageCode: string, domainName: string);
    id: string;
    name: string;
    countryCode: string;
    defaultCurrencyCode: string;
    defaultLanguageCode: string;
    domainName: string;
}
//# sourceMappingURL=Marketplace.d.ts.map