/**
 * The InboundPreferences model module.
 * @module awd_v2024_05_09/model/InboundPreferences
 * @version 2024-05-09
 */
export class InboundPreferences {
    /**
     * Constructs a <code>InboundPreferences</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {InboundPreferences} obj Optional instance to populate.
     * @return {InboundPreferences} The populated <code>InboundPreferences</code> instance.
     */
    static constructFromObject(data: any, obj: InboundPreferences): InboundPreferences;
    /**
     * Pass a preferred region so that the inbound order can be shipped to an AWD warehouse located in that region. This doesn't guarantee the order to be assigned in the specified destination region as it depends on warehouse capacity availability. AWD currently supports following region IDs: [us-west, us-east, us-southcentral, us-southeast]
     * @member {String} destinationRegion
     * @type {String}
     */
    destinationRegion: string;
}
//# sourceMappingURL=InboundPreferences.d.ts.map