/**
 * The Return model module.
 * @module externalfulfillmentreturns_v2024_09_11/model/Return
 * @version 2024-09-11
 */
export class Return {
    /**
     * Constructs a <code>Return</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {Return} obj Optional instance to populate.
     * @return {Return} The populated <code>Return</code> instance.
     */
    static constructFromObject(data: any, obj: Return): Return;
    /**
     * Constructs a new <code>Return</code>.
     * Information about the return item.
     * @alias module:externalfulfillmentreturns_v2024_09_11/model/Return
     * @class
     * @param id {String} The return item's ID.
     * @param returnType {String} The type of return.
     * @param status {String} The current status of the return.
     * @param fulfillmentLocationId {String} The ID of the location that fulfilled the order.
     * @param lastUpdatedDateTime {String} A date and time in [ISO 8601](https://developer-docs.amazon.com/sp-api/docs/iso-8601) format.
     * @param returnMetadata {ReturnMetadata}
     * @param returnShippingInfo {ReturnShippingInfo}
     * @param marketplaceChannelDetails {MarketplaceChannelDetails}
     */
    constructor(id: string, returnType: string, status: string, fulfillmentLocationId: string, lastUpdatedDateTime: string, returnMetadata: ReturnMetadata, returnShippingInfo: ReturnShippingInfo, marketplaceChannelDetails: MarketplaceChannelDetails);
    id: string;
    returnType: string;
    status: string;
    fulfillmentLocationId: string;
    lastUpdatedDateTime: string;
    returnMetadata: ReturnMetadata;
    returnShippingInfo: ReturnShippingInfo;
    marketplaceChannelDetails: MarketplaceChannelDetails;
    /**
     * The SmartConnect identifier for where the return item was dropped for delivery.
     * @member {String} returnLocationId
     * @type {String}
     */
    returnLocationId: string;
    /**
     * The seller's identifier for the SKU.
     * @member {String} merchantSku
     * @type {String}
     */
    merchantSku: string;
    /**
     * The sub-type of return.
     * @member {String} returnSubType
     * @type {String}
     */
    returnSubType: string;
    /**
     * The total number of units in the return.
     * @member {Number} numberOfUnits
     * @type {Number}
     */
    numberOfUnits: number;
    /**
     * A date and time in [ISO 8601](https://developer-docs.amazon.com/sp-api/docs/iso-8601) format.
     * @member {String} creationDateTime
     * @type {String}
     */
    creationDateTime: string;
    /**
     * @member {OtpDetails} otpDetails
     * @type {OtpDetails}
     */
    otpDetails: OtpDetails;
    /**
     * The package delivery mode. This indicates whether the return was delivered to the seller with or without a one-time password (OTP).
     * @member {String} packageDeliveryMode
     * @type {String}
     */
    packageDeliveryMode: string;
    /**
     * @member {ReplanningDetails} replanningDetails
     * @type {ReplanningDetails}
     */
    replanningDetails: ReplanningDetails;
}
export namespace Return {
    namespace ReturnTypeEnum {
        let CUSTOMER: string;
        let REJECT: string;
    }
    /**
     * *
     */
    type ReturnTypeEnum = string;
    namespace ReturnSubTypeEnum {
        let NORMAL: string;
        let REPLACEMENT: string;
        let EXCHANGE: string;
    }
    /**
     * *
     */
    type ReturnSubTypeEnum = string;
    namespace StatusEnum {
        let CREATED: string;
        let CARRIER_NOTIFIED_TO_PICK_UP_FROM_CUSTOMER: string;
        let CARRIER_OUT_FOR_PICK_UP_FROM_CUSTOMER: string;
        let CUSTOMER_CANCELLED_PICK_UP: string;
        let CUSTOMER_RESCHEDULED_PICK_UP: string;
        let PICKED_FROM_CUSTOMER: string;
        let IN_TRANSIT: string;
        let OUT_FOR_DELIVERY: string;
        let DELIVERED: string;
        let REPLANNED: string;
        let CUSTOMER_DROPPED_OFF: string;
        let PARTIALLY_PROCESSED: string;
        let PROCESSED: string;
        let REJECTED: string;
        let CANCELLED: string;
    }
    /**
     * *
     */
    type StatusEnum = string;
    namespace PackageDeliveryModeEnum {
        let WITH_OTP: string;
        let WITHOUT_OTP: string;
    }
    /**
     * *
     */
    type PackageDeliveryModeEnum = string;
}
import { ReturnMetadata } from './ReturnMetadata.js';
import { ReturnShippingInfo } from './ReturnShippingInfo.js';
import { MarketplaceChannelDetails } from './MarketplaceChannelDetails.js';
import { OtpDetails } from './OtpDetails.js';
import { ReplanningDetails } from './ReplanningDetails.js';
//# sourceMappingURL=Return.d.ts.map