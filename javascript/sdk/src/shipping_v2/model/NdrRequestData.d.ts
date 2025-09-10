/**
 * The NdrRequestData model module.
 * @module shipping_v2/model/NdrRequestData
 * @version v2
 */
export class NdrRequestData {
    /**
     * Constructs a <code>NdrRequestData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {NdrRequestData} obj Optional instance to populate.
     * @return {NdrRequestData} The populated <code>NdrRequestData</code> instance.
     */
    static constructFromObject(data: any, obj: NdrRequestData): NdrRequestData;
    /**
     * The date on which the Seller wants to reschedule shipment delivery, in ISO-8601 date/time format
     * @member {Date} rescheduleDate
     * @type {Date}
     */
    rescheduleDate: Date;
    /**
     * Address notes to re-attempt delivery with.
     * @member {String} additionalAddressNotes
     * @type {String}
     */
    additionalAddressNotes: string;
}
//# sourceMappingURL=NdrRequestData.d.ts.map