/**
 * The TrackingAddress model module.
 * @module fulfillmentoutbound_v2020_07_01/model/TrackingAddress
 * @version 2020-07-01
 */
export class TrackingAddress {
    /**
     * Constructs a <code>TrackingAddress</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {TrackingAddress} obj Optional instance to populate.
     * @return {TrackingAddress} The populated <code>TrackingAddress</code> instance.
     */
    static constructFromObject(data: any, obj: TrackingAddress): TrackingAddress;
    /**
     * Constructs a new <code>TrackingAddress</code>.
     * Address information for tracking the package.
     * @alias module:fulfillmentoutbound_v2020_07_01/model/TrackingAddress
     * @class
     * @param city {String} The city.
     * @param state {String} The state.
     * @param country {String} The country.
     */
    constructor(city: string, state: string, country: string);
    city: string;
    state: string;
    country: string;
}
//# sourceMappingURL=TrackingAddress.d.ts.map