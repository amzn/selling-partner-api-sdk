/**
 * The Region model module.
 * @module fulfillmentinbound_v2024_03_20/model/Region
 * @version 2024-03-20
 */
export class Region {
    /**
     * Constructs a <code>Region</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {Region} obj Optional instance to populate.
     * @return {Region} The populated <code>Region</code> instance.
     */
    static constructFromObject(data: any, obj: Region): Region;
    /**
     * ISO 3166 standard alpha-2 country code.
     * @member {String} countryCode
     * @type {String}
     */
    countryCode: string;
    /**
     * State.
     * @member {String} state
     * @type {String}
     */
    state: string;
    /**
     * An identifier for a warehouse, such as a FC, IXD, upstream storage.
     * @member {String} warehouseId
     * @type {String}
     */
    warehouseId: string;
}
//# sourceMappingURL=Region.d.ts.map