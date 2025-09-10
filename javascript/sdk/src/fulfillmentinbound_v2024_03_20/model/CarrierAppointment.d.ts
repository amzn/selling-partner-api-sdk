/**
 * The CarrierAppointment model module.
 * @module fulfillmentinbound_v2024_03_20/model/CarrierAppointment
 * @version 2024-03-20
 */
export class CarrierAppointment {
    /**
     * Constructs a <code>CarrierAppointment</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {CarrierAppointment} obj Optional instance to populate.
     * @return {CarrierAppointment} The populated <code>CarrierAppointment</code> instance.
     */
    static constructFromObject(data: any, obj: CarrierAppointment): CarrierAppointment;
    /**
     * Constructs a new <code>CarrierAppointment</code>.
     * Contains details for a transportation carrier appointment. This appointment is vended out by Amazon and is an indicator for when a transportation carrier is accepting shipments to be picked up.
     * @alias module:fulfillmentinbound_v2024_03_20/model/CarrierAppointment
     * @class
     * @param endTime {Date} The end timestamp of the appointment in UTC.
     * @param startTime {Date} The start timestamp of the appointment in UTC.
     */
    constructor(endTime: Date, startTime: Date);
    endTime: Date;
    startTime: Date;
}
//# sourceMappingURL=CarrierAppointment.d.ts.map