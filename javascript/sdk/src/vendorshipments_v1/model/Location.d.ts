/**
 * The Location model module.
 * @module vendorshipments_v1/model/Location
 * @version v1
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
     * Type of location identification.
     * @member {String} type
     * @type {String}
     */
    type: string;
    /**
     * Location code.
     * @member {String} locationCode
     * @type {String}
     */
    locationCode: string;
    /**
     * The two digit country code. In ISO 3166-1 alpha-2 format.
     * @member {String} countryCode
     * @type {String}
     */
    countryCode: string;
}
//# sourceMappingURL=Location.d.ts.map