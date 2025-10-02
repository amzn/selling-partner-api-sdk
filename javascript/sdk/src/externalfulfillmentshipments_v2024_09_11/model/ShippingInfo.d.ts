/**
 * The ShippingInfo model module.
 * @module externalfulfillmentshipments_v2024_09_11/model/ShippingInfo
 * @version 2024-09-11
 */
export class ShippingInfo {
    /**
     * Constructs a <code>ShippingInfo</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {ShippingInfo} obj Optional instance to populate.
     * @return {ShippingInfo} The populated <code>ShippingInfo</code> instance.
     */
    static constructFromObject(data: any, obj: ShippingInfo): ShippingInfo;
    /**
     * Constructs a new <code>ShippingInfo</code>.
     * Shipping information for the packages in a shipment.
     * @alias module:externalfulfillmentshipments_v2024_09_11/model/ShippingInfo
     * @class
     * @param expectedShippingDateTimeInUTC {String} A date and time in [ISO 8601](https://developer-docs.amazon.com/sp-api/docs/iso-8601) format.
     */
    constructor(expectedShippingDateTimeInUTC: string);
    expectedShippingDateTimeInUTC: string;
    /**
     * The ship method recommended by the Amazon Fulfillment Network for the packages in this shipment.
     * @member {String} recommendedShipMethod
     * @type {String}
     */
    recommendedShipMethod: string;
    /**
     * @member {Address} shipToAddress
     * @type {Address}
     */
    shipToAddress: Address;
    /**
     * The type of shipping that the seller uses to deliver a customer order.
     * @member {String} shippingType
     * @type {String}
     */
    shippingType: string;
    /**
     * Recommendations for the packages in an order.
     * @member {[RecommendedPackage]} recommendedPackages
     * @type {[RecommendedPackage]}
     */
    recommendedPackages: [RecommendedPackage];
}
export namespace ShippingInfo {
    namespace ShippingTypeEnum {
        let MARKETPLACE: string;
        let SELF: string;
    }
    /**
     * *
     */
    type ShippingTypeEnum = string;
}
import { Address } from './Address.js';
import { RecommendedPackage } from './RecommendedPackage.js';
//# sourceMappingURL=ShippingInfo.d.ts.map