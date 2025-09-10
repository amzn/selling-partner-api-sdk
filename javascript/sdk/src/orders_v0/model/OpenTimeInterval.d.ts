/**
 * The OpenTimeInterval model module.
 * @module orders_v0/model/OpenTimeInterval
 * @version v0
 */
export class OpenTimeInterval {
    /**
     * Constructs a <code>OpenTimeInterval</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {OpenTimeInterval} obj Optional instance to populate.
     * @return {OpenTimeInterval} The populated <code>OpenTimeInterval</code> instance.
     */
    static constructFromObject(data: any, obj: OpenTimeInterval): OpenTimeInterval;
    /**
     * The hour when the business opens or closes.
     * @member {Number} hour
     * @type {Number}
     */
    hour: number;
    /**
     * The minute when the business opens or closes.
     * @member {Number} minute
     * @type {Number}
     */
    minute: number;
}
//# sourceMappingURL=OpenTimeInterval.d.ts.map