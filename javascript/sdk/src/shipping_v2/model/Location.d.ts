/**
 * The Location model module.
 * @module shipping_v2/model/Location
 * @version v2
 */
export class Location {
    /**
     * Constructs a <code>Location</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {Location} obj Optional instance to populate.
     * @return {Location} The populated <code>Location</code> instance.
     */
    static constructFromObject(data: any, obj: Location): Location;
    /**
     * The state, county or region where the person, business or institution is located.
     * @member {String} stateOrRegion
     * @type {String}
     */
    stateOrRegion: string;
    /**
     * The city or town where the person, business or institution is located.
     * @member {String} city
     * @type {String}
     */
    city: string;
    /**
     * The two digit country code. Follows ISO 3166-1 alpha-2 format.
     * @member {String} countryCode
     * @type {String}
     */
    countryCode: string;
    /**
     * The postal code of that address. It contains a series of letters or digits or both, sometimes including spaces or punctuation.
     * @member {String} postalCode
     * @type {String}
     */
    postalCode: string;
}
//# sourceMappingURL=Location.d.ts.map