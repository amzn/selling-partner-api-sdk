/**
 * The TransportationOption model module.
 * @module fulfillmentinbound_v2024_03_20/model/TransportationOption
 * @version 2024-03-20
 */
export class TransportationOption {
    /**
     * Constructs a <code>TransportationOption</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {TransportationOption} obj Optional instance to populate.
     * @return {TransportationOption} The populated <code>TransportationOption</code> instance.
     */
    static constructFromObject(data: any, obj: TransportationOption): TransportationOption;
    /**
     * Constructs a new <code>TransportationOption</code>.
     * Contains information pertaining to a transportation option and the related carrier.
     * @alias module:fulfillmentinbound_v2024_03_20/model/TransportationOption
     * @class
     * @param carrier {Carrier}
     * @param preconditions {[String]} Identifies a list of preconditions for confirming the transportation option.
     * @param shipmentId {String} Identifier of a shipment. A shipment contains the boxes and units being inbounded.
     * @param shippingMode {String} Mode of shipment transportation that this option will provide.  Possible values: `GROUND_SMALL_PARCEL`, `FREIGHT_LTL`, `FREIGHT_FTL_PALLET`, `FREIGHT_FTL_NONPALLET`, `OCEAN_LCL`, `OCEAN_FCL`, `AIR_SMALL_PARCEL`, `AIR_SMALL_PARCEL_EXPRESS`.
     * @param shippingSolution {String} Shipping program for the option. Possible values: `AMAZON_PARTNERED_CARRIER`, `USE_YOUR_OWN_CARRIER`.
     * @param transportationOptionId {String} Identifier of a transportation option. A transportation option represent one option for how to send a shipment.
     */
    constructor(carrier: Carrier, preconditions: [string], shipmentId: string, shippingMode: string, shippingSolution: string, transportationOptionId: string);
    carrier: Carrier;
    preconditions: [string];
    shipmentId: string;
    shippingMode: string;
    shippingSolution: string;
    transportationOptionId: string;
    /**
     * @member {CarrierAppointment} carrierAppointment
     * @type {CarrierAppointment}
     */
    carrierAppointment: CarrierAppointment;
    /**
     * @member {Quote} quote
     * @type {Quote}
     */
    quote: Quote;
}
import { Carrier } from './Carrier.js';
import { CarrierAppointment } from './CarrierAppointment.js';
import { Quote } from './Quote.js';
//# sourceMappingURL=TransportationOption.d.ts.map