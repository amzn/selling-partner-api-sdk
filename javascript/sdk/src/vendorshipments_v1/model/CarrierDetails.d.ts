/**
 * The CarrierDetails model module.
 * @module vendorshipments_v1/model/CarrierDetails
 * @version v1
 */
export class CarrierDetails {
    /**
     * Constructs a <code>CarrierDetails</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {CarrierDetails} obj Optional instance to populate.
     * @return {CarrierDetails} The populated <code>CarrierDetails</code> instance.
     */
    static constructFromObject(data: any, obj: CarrierDetails): CarrierDetails;
    /**
     * The field is used to represent the carrier used for performing the shipment.
     * @member {String} name
     * @type {String}
     */
    name: string;
    /**
     * Code that identifies the carrier for the shipment. The Standard Carrier Alpha Code (SCAC) is a unique two to four letter code used to identify a carrier. Carrier SCAC codes are assigned and maintained by the NMFTA (National Motor Freight Association).
     * @member {String} code
     * @type {String}
     */
    code: string;
    /**
     * The field is used to represent the Carrier contact number.
     * @member {String} phone
     * @type {String}
     */
    phone: string;
    /**
     * The field is used to represent the carrier Email id.
     * @member {String} email
     * @type {String}
     */
    email: string;
    /**
     * The field is also known as PRO number is a unique number assigned by the carrier. It is used to identify and track the shipment that goes out for delivery. This field is mandatory for US, CA, MX shipment confirmations.
     * @member {String} shipmentReferenceNumber
     * @type {String}
     */
    shipmentReferenceNumber: string;
}
//# sourceMappingURL=CarrierDetails.d.ts.map