/**
 * The OneClickShipmentRequest model module.
 * @module shipping_v2/model/OneClickShipmentRequest
 * @version v2
 */
export class OneClickShipmentRequest {
    /**
     * Constructs a <code>OneClickShipmentRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {OneClickShipmentRequest} obj Optional instance to populate.
     * @return {OneClickShipmentRequest} The populated <code>OneClickShipmentRequest</code> instance.
     */
    static constructFromObject(data: any, obj: OneClickShipmentRequest): OneClickShipmentRequest;
    /**
     * Constructs a new <code>OneClickShipmentRequest</code>.
     * The request schema for the OneClickShipment operation. When the channelType is not Amazon, shipTo is required and when channelType is Amazon shipTo is ignored.
     * @alias module:shipping_v2/model/OneClickShipmentRequest
     * @class
     * @param shipFrom {Address}
     * @param packages {[Package]} A list of packages to be shipped through a shipping service offering.
     * @param channelDetails {ChannelDetails}
     * @param labelSpecifications {RequestedDocumentSpecification}
     * @param serviceSelection {ServiceSelection}
     */
    constructor(shipFrom: Address, packages: [Package], channelDetails: ChannelDetails, labelSpecifications: RequestedDocumentSpecification, serviceSelection: ServiceSelection);
    shipFrom: Address;
    packages: Package[];
    channelDetails: ChannelDetails;
    labelSpecifications: RequestedDocumentSpecification;
    serviceSelection: ServiceSelection;
    /**
     * @member {Address} shipTo
     * @type {Address}
     */
    shipTo: Address;
    /**
     * @member {Address} returnTo
     * @type {Address}
     */
    returnTo: Address;
    /**
     * The ship date and time (the requested pickup). This defaults to the current date and time.
     * @member {Date} shipDate
     * @type {Date}
     */
    shipDate: Date;
    /**
     * @member {GoodsOwner} goodsOwner
     * @type {GoodsOwner}
     */
    goodsOwner: GoodsOwner;
    /**
     * The value-added services to be added to a shipping service purchase.
     * @member {OneClickShipmentValueAddedService[]} valueAddedServicesDetails
     * @type {OneClickShipmentValueAddedService[]}
     */
    valueAddedServicesDetails: OneClickShipmentValueAddedService[];
    /**
     * A list of tax detail information.
     * @member {TaxDetail[]} taxDetails
     * @type {TaxDetail[]}
     */
    taxDetails: TaxDetail[];
    /**
     * @member {ShipperInstruction} shipperInstruction
     * @type {ShipperInstruction}
     */
    shipperInstruction: ShipperInstruction;
    /**
     * @member {AccessPointDetails} destinationAccessPointDetails
     * @type {AccessPointDetails}
     */
    destinationAccessPointDetails: AccessPointDetails;
}
import { Address } from './Address.js';
import { Package } from './Package.js';
import { ChannelDetails } from './ChannelDetails.js';
import { RequestedDocumentSpecification } from './RequestedDocumentSpecification.js';
import { ServiceSelection } from './ServiceSelection.js';
import { GoodsOwner } from './GoodsOwner.js';
import { OneClickShipmentValueAddedService } from './OneClickShipmentValueAddedService.js';
import { TaxDetail } from './TaxDetail.js';
import { ShipperInstruction } from './ShipperInstruction.js';
import { AccessPointDetails } from './AccessPointDetails.js';
//# sourceMappingURL=OneClickShipmentRequest.d.ts.map