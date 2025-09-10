/**
 * The Geocode model module.
 * @module shipping_v2/model/Geocode
 * @version v2
 */
export class Geocode {
    /**
     * Constructs a <code>Geocode</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {Geocode} obj Optional instance to populate.
     * @return {Geocode} The populated <code>Geocode</code> instance.
     */
    static constructFromObject(data: any, obj: Geocode): Geocode;
    /**
     * The latitude of access point.
     * @member {String} latitude
     * @type {String}
     */
    latitude: string;
    /**
     * The longitude of access point.
     * @member {String} longitude
     * @type {String}
     */
    longitude: string;
}
//# sourceMappingURL=Geocode.d.ts.map