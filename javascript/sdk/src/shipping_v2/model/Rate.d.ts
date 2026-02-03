/**
 * The Rate model module.
 * @module shipping_v2/model/Rate
 * @version v2
 */
export class Rate {
    /**
     * Constructs a <code>Rate</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {Rate} obj Optional instance to populate.
     * @return {Rate} The populated <code>Rate</code> instance.
     */
    static constructFromObject(data: any, obj: Rate): Rate;
    /**
     * Constructs a new <code>Rate</code>.
     * The details of a shipping service offering.
     * @alias module:shipping_v2/model/Rate
     * @class
     * @param rateId {String} An identifier for the rate (shipment offering) provided by a shipping service provider.
     * @param carrierId {String} The carrier identifier for the offering, provided by the carrier.
     * @param carrierName {String} The carrier name for the offering.
     * @param serviceId {String} An identifier for the shipping service.
     * @param serviceName {String} The name of the shipping service.
     * @param totalCharge {Currency}
     * @param promise {Promise}
     * @param supportedDocumentSpecifications {Array[]} A list of the document specifications supported for a shipment service offering.
     * @param requiresAdditionalInputs {Boolean} When true, indicates that additional inputs are required to purchase this shipment service. You must then call the getAdditionalInputs operation to return the JSON schema to use when providing the additional inputs to the purchaseShipment operation.
     */
    constructor(rateId: string, carrierId: string, carrierName: string, serviceId: string, serviceName: string, totalCharge: Currency, promise: Promise, supportedDocumentSpecifications: any[][], requiresAdditionalInputs: boolean);
    rateId: string;
    carrierId: string;
    carrierName: string;
    serviceId: string;
    serviceName: string;
    totalCharge: Currency;
    promise: Promise;
    supportedDocumentSpecifications: any[][];
    requiresAdditionalInputs: boolean;
    /**
     * @member {Weight} billedWeight
     * @type {Weight}
     */
    billedWeight: Weight;
    /**
     * A list of value-added services available for a shipping service offering.
     * @member {Array[]} availableValueAddedServiceGroups
     * @type {Array[]}
     */
    availableValueAddedServiceGroups: any[][];
    /**
     * A list of RateItem
     * @member {Array[]} rateItemList
     * @type {Array[]}
     */
    rateItemList: any[][];
    /**
     * @member {PaymentType} paymentType
     * @type {PaymentType}
     */
    paymentType: PaymentType;
    /**
     * @member {Benefits} benefits
     * @type {Benefits}
     */
    benefits: Benefits;
}
import { Currency } from './Currency.js';
import { Promise } from './Promise.js';
import { Weight } from './Weight.js';
import { PaymentType } from './PaymentType.js';
import { Benefits } from './Benefits.js';
//# sourceMappingURL=Rate.d.ts.map