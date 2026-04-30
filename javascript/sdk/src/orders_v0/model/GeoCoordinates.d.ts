/**
 * The GeoCoordinates model module.
 * @module orders_v0/model/GeoCoordinates
 * @version v0
 */
export class GeoCoordinates {
    /**
     * Constructs a <code>GeoCoordinates</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {GeoCoordinates} obj Optional instance to populate.
     * @return {GeoCoordinates} The populated <code>GeoCoordinates</code> instance.
     */
    static constructFromObject(data: Object, obj: GeoCoordinates): GeoCoordinates;
    /**
     * The latitude coordinate of the shipping address using the WGS84 coordinate system.
     * @member {Number} latitude
     * @type {Number}
     */
    latitude: number;
    /**
     * The longitude coordinate of the shipping address using the WGS84 coordinate system.
     * @member {Number} longitude
     * @type {Number}
     */
    longitude: number;
}
//# sourceMappingURL=GeoCoordinates.d.ts.map