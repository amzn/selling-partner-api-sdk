/**
 * The DeliveryWindowOption model module.
 * @module fulfillmentinbound_v2024_03_20/model/DeliveryWindowOption
 * @version 2024-03-20
 */
export class DeliveryWindowOption {
    /**
     * Constructs a <code>DeliveryWindowOption</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {DeliveryWindowOption} obj Optional instance to populate.
     * @return {DeliveryWindowOption} The populated <code>DeliveryWindowOption</code> instance.
     */
    static constructFromObject(data: any, obj: DeliveryWindowOption): DeliveryWindowOption;
    /**
     * Constructs a new <code>DeliveryWindowOption</code>.
     * Contains information pertaining to a delivery window option.
     * @alias module:fulfillmentinbound_v2024_03_20/model/DeliveryWindowOption
     * @class
     * @param availabilityType {String} The type of delivery window availability. Values: `AVAILABLE`, `BLOCKED`, `CONGESTED`, `DISCOUNTED`
     * @param deliveryWindowOptionId {String} Identifier of a delivery window option. A delivery window option represent one option for when a shipment is expected to be delivered.
     * @param endDate {Date} The time at which this delivery window option ends. In [ISO 8601](https://developer-docs.amazon.com/sp-api/docs/iso-8601) datetime format with pattern `yyyy-MM-ddTHH:mmZ`.
     * @param startDate {Date} The time at which this delivery window option starts. In [ISO 8601](https://developer-docs.amazon.com/sp-api/docs/iso-8601) datetime format with pattern `yyyy-MM-ddTHH:mmZ`.
     * @param validUntil {Date} The time at which this window delivery option is no longer valid. In [ISO 8601](https://developer-docs.amazon.com/sp-api/docs/iso-8601) datetime format with pattern `yyyy-MM-ddTHH:mmZ`.
     */
    constructor(availabilityType: string, deliveryWindowOptionId: string, endDate: Date, startDate: Date, validUntil: Date);
    availabilityType: string;
    deliveryWindowOptionId: string;
    endDate: Date;
    startDate: Date;
    validUntil: Date;
}
//# sourceMappingURL=DeliveryWindowOption.d.ts.map