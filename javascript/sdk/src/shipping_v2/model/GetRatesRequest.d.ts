/**
 * The GetRatesRequest model module.
 * @module shipping_v2/model/GetRatesRequest
 * @version v2
 */
export class GetRatesRequest {
    /**
     * Constructs a <code>GetRatesRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {GetRatesRequest} obj Optional instance to populate.
     * @return {GetRatesRequest} The populated <code>GetRatesRequest</code> instance.
     */
    static constructFromObject(data: any, obj: GetRatesRequest): GetRatesRequest;
    /**
     * Constructs a new <code>GetRatesRequest</code>.
     * The request schema for the getRates operation. When the channelType is Amazon, the shipTo address is not required and will be ignored.
     * @alias module:shipping_v2/model/GetRatesRequest
     * @class
     * @param shipFrom {Address}
     * @param packages {[Package]} A list of packages to be shipped through a shipping service offering.
     * @param channelDetails {ChannelDetails}
     */
    constructor(shipFrom: Address, packages: [Package], channelDetails: ChannelDetails);
    shipFrom: Address;
    packages: [Package];
    channelDetails: ChannelDetails;
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
     * @member {ShipperInstruction} shipperInstruction
     * @type {ShipperInstruction}
     */
    shipperInstruction: ShipperInstruction;
    /**
     * @member {ValueAddedServiceDetails} valueAddedServices
     * @type {ValueAddedServiceDetails}
     */
    valueAddedServices: ValueAddedServiceDetails;
    /**
     * A list of tax detail information.
     * @member {[TaxDetail]} taxDetails
     * @type {[TaxDetail]}
     */
    taxDetails: [TaxDetail];
    /**
     * Object to pass additional information about the MCI Integrator shipperType: List of ClientReferenceDetail
     * @member {[ClientReferenceDetail]} clientReferenceDetails
     * @type {[ClientReferenceDetail]}
     */
    clientReferenceDetails: [ClientReferenceDetail];
    /**
     * @member {ShipmentType} shipmentType
     * @type {ShipmentType}
     */
    shipmentType: ShipmentType;
    /**
     * @member {AccessPointDetails} destinationAccessPointDetails
     * @type {AccessPointDetails}
     */
    destinationAccessPointDetails: AccessPointDetails;
    /**
     * A list of CarrierAccounts
     * @member {[CarrierAccount]} carrierAccounts
     * @type {[CarrierAccount]}
     */
    carrierAccounts: [CarrierAccount];
}
import { Address } from './Address.js';
import { Package } from './Package.js';
import { ChannelDetails } from './ChannelDetails.js';
import { ShipperInstruction } from './ShipperInstruction.js';
import { ValueAddedServiceDetails } from './ValueAddedServiceDetails.js';
import { TaxDetail } from './TaxDetail.js';
import { ClientReferenceDetail } from './ClientReferenceDetail.js';
import { ShipmentType } from './ShipmentType.js';
import { AccessPointDetails } from './AccessPointDetails.js';
import { CarrierAccount } from './CarrierAccount.js';
//# sourceMappingURL=GetRatesRequest.d.ts.map