/**
 * The InboundShipmentInfo model module.
 * @module fulfillmentinbound_v0/model/InboundShipmentInfo
 * @version v0
 */
export class InboundShipmentInfo {
    /**
     * Constructs a <code>InboundShipmentInfo</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {InboundShipmentInfo} obj Optional instance to populate.
     * @return {InboundShipmentInfo} The populated <code>InboundShipmentInfo</code> instance.
     */
    static constructFromObject(data: any, obj: InboundShipmentInfo): InboundShipmentInfo;
    /**
     * Constructs a new <code>InboundShipmentInfo</code>.
     * Information about the seller&#39;s inbound shipments. Returned by the listInboundShipments operation.
     * @alias module:fulfillmentinbound_v0/model/InboundShipmentInfo
     * @class
     * @param shipFromAddress {Address}
     * @param areCasesRequired {Boolean} Indicates whether or not an inbound shipment contains case-packed boxes. When AreCasesRequired = true for an inbound shipment, all items in the inbound shipment must be case packed.
     */
    constructor(shipFromAddress: Address, areCasesRequired: boolean);
    shipFromAddress: Address;
    areCasesRequired: boolean;
    /**
     * The shipment identifier submitted in the request.
     * @member {String} shipmentId
     * @type {String}
     */
    shipmentId: string;
    /**
     * The name for the inbound shipment.
     * @member {String} shipmentName
     * @type {String}
     */
    shipmentName: string;
    /**
     * An Amazon fulfillment center identifier created by Amazon.
     * @member {String} destinationFulfillmentCenterId
     * @type {String}
     */
    destinationFulfillmentCenterId: string;
    /**
     * @member {ShipmentStatus} shipmentStatus
     * @type {ShipmentStatus}
     */
    shipmentStatus: ShipmentStatus;
    /**
     * @member {LabelPrepType} labelPrepType
     * @type {LabelPrepType}
     */
    labelPrepType: LabelPrepType;
    /**
     * Type containing date in string format
     * @member {Date} confirmedNeedByDate
     * @type {Date}
     */
    confirmedNeedByDate: Date;
    /**
     * @member {BoxContentsSource} boxContentsSource
     * @type {BoxContentsSource}
     */
    boxContentsSource: BoxContentsSource;
    /**
     * @member {BoxContentsFeeDetails} estimatedBoxContentsFee
     * @type {BoxContentsFeeDetails}
     */
    estimatedBoxContentsFee: BoxContentsFeeDetails;
}
import { Address } from './Address.js';
import { ShipmentStatus } from './ShipmentStatus.js';
import { LabelPrepType } from './LabelPrepType.js';
import { BoxContentsSource } from './BoxContentsSource.js';
import { BoxContentsFeeDetails } from './BoxContentsFeeDetails.js';
//# sourceMappingURL=InboundShipmentInfo.d.ts.map