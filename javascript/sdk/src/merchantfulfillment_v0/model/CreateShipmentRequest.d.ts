/**
 * The CreateShipmentRequest model module.
 * @module merchantfulfillment_v0/model/CreateShipmentRequest
 * @version v0
 */
export class CreateShipmentRequest {
    /**
     * Constructs a <code>CreateShipmentRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {CreateShipmentRequest} obj Optional instance to populate.
     * @return {CreateShipmentRequest} The populated <code>CreateShipmentRequest</code> instance.
     */
    static constructFromObject(data: any, obj: CreateShipmentRequest): CreateShipmentRequest;
    /**
     * Constructs a new <code>CreateShipmentRequest</code>.
     * Request schema.
     * @alias module:merchantfulfillment_v0/model/CreateShipmentRequest
     * @class
     * @param shipmentRequestDetails {ShipmentRequestDetails}
     * @param shippingServiceId {String} An Amazon-defined shipping service identifier.
     */
    constructor(shipmentRequestDetails: ShipmentRequestDetails, shippingServiceId: string);
    shipmentRequestDetails: ShipmentRequestDetails;
    shippingServiceId: string;
    /**
     * Identifies a shipping service order made by a carrier.
     * @member {String} shippingServiceOfferId
     * @type {String}
     */
    shippingServiceOfferId: string;
    /**
     * @member {HazmatType} hazmatType
     * @type {HazmatType}
     */
    hazmatType: HazmatType;
    /**
     * @member {LabelFormatOptionRequest} labelFormatOption
     * @type {LabelFormatOptionRequest}
     */
    labelFormatOption: LabelFormatOptionRequest;
    /**
     * A list of additional seller input pairs required to purchase shipping.
     * @member {AdditionalSellerInputs[]} shipmentLevelSellerInputsList
     * @type {AdditionalSellerInputs[]}
     */
    shipmentLevelSellerInputsList: AdditionalSellerInputs[];
}
import { ShipmentRequestDetails } from './ShipmentRequestDetails.js';
import { HazmatType } from './HazmatType.js';
import { LabelFormatOptionRequest } from './LabelFormatOptionRequest.js';
import { AdditionalSellerInputs } from './AdditionalSellerInputs.js';
//# sourceMappingURL=CreateShipmentRequest.d.ts.map