/**
 * The ItemDeliveryPromise model module.
 * @module services_v1/model/ItemDeliveryPromise
 * @version v1
 */
export class ItemDeliveryPromise {
    /**
     * Constructs a <code>ItemDeliveryPromise</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {ItemDeliveryPromise} obj Optional instance to populate.
     * @return {ItemDeliveryPromise} The populated <code>ItemDeliveryPromise</code> instance.
     */
    static constructFromObject(data: any, obj: ItemDeliveryPromise): ItemDeliveryPromise;
    /**
     * The date and time of the start of the promised delivery window in ISO 8601 format.
     * @member {Date} startTime
     * @type {Date}
     */
    startTime: Date;
    /**
     * The date and time of the end of the promised delivery window in ISO 8601 format.
     * @member {Date} endTime
     * @type {Date}
     */
    endTime: Date;
}
//# sourceMappingURL=ItemDeliveryPromise.d.ts.map