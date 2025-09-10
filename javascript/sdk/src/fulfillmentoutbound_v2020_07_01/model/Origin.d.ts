/**
 * The Origin model module.
 * @module fulfillmentoutbound_v2020_07_01/model/Origin
 * @version 2020-07-01
 */
export class Origin {
    /**
     * Constructs a <code>Origin</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {Origin} obj Optional instance to populate.
     * @return {Origin} The populated <code>Origin</code> instance.
     */
    static constructFromObject(data: any, obj: Origin): Origin;
    /**
     * Constructs a new <code>Origin</code>.
     * The origin for the delivery offer.
     * @alias module:fulfillmentoutbound_v2020_07_01/model/Origin
     * @class
     * @param countryCode {String} The two digit country code the items should ship from. In ISO 3166-1 alpha-2 format.
     */
    constructor(countryCode: string);
    countryCode: string;
}
//# sourceMappingURL=Origin.d.ts.map