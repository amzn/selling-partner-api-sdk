/**
 * The TemporarilyUnavailableCarrier model module.
 * @module merchantfulfillment_v0/model/TemporarilyUnavailableCarrier
 * @version v0
 */
export class TemporarilyUnavailableCarrier {
    /**
     * Constructs a <code>TemporarilyUnavailableCarrier</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {TemporarilyUnavailableCarrier} obj Optional instance to populate.
     * @return {TemporarilyUnavailableCarrier} The populated <code>TemporarilyUnavailableCarrier</code> instance.
     */
    static constructFromObject(data: any, obj: TemporarilyUnavailableCarrier): TemporarilyUnavailableCarrier;
    /**
     * Constructs a new <code>TemporarilyUnavailableCarrier</code>.
     * A carrier who is temporarily unavailable, most likely due to a service outage experienced by the carrier.
     * @alias module:merchantfulfillment_v0/model/TemporarilyUnavailableCarrier
     * @class
     * @param carrierName {String} The name of the carrier.
     */
    constructor(carrierName: string);
    carrierName: string;
}
//# sourceMappingURL=TemporarilyUnavailableCarrier.d.ts.map