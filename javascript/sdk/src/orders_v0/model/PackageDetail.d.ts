/**
 * The PackageDetail model module.
 * @module orders_v0/model/PackageDetail
 * @version v0
 */
export class PackageDetail {
    /**
     * Constructs a <code>PackageDetail</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {PackageDetail} obj Optional instance to populate.
     * @return {PackageDetail} The populated <code>PackageDetail</code> instance.
     */
    static constructFromObject(data: any, obj: PackageDetail): PackageDetail;
    /**
     * Constructs a new <code>PackageDetail</code>.
     * Properties of packages
     * @alias module:orders_v0/model/PackageDetail
     * @class
     * @param packageReferenceId {String} A seller-supplied identifier that uniquely identifies a package within the scope of an order. Only positive numeric values are supported.
     * @param carrierCode {String} Identifies the carrier that will deliver the package. This field is required for all marketplaces. For more information, refer to the [`CarrierCode` announcement](https://developer-docs.amazon.com/sp-api/changelog/carriercode-value-required-in-shipment-confirmations-for-br-mx-ca-sg-au-in-jp-marketplaces).
     * @param trackingNumber {String} The tracking number used to obtain tracking and delivery information.
     * @param shipDate {Date} The shipping date for the package. Must be in <a href='https://developer-docs.amazon.com/sp-api/docs/iso-8601'>ISO 8601</a> date/time format.
     * @param orderItems {[ConfirmShipmentOrderItem]} A list of order items.
     */
    constructor(packageReferenceId: string, carrierCode: string, trackingNumber: string, shipDate: Date, orderItems: [ConfirmShipmentOrderItem]);
    packageReferenceId: string;
    carrierCode: string;
    trackingNumber: string;
    shipDate: Date;
    orderItems: [ConfirmShipmentOrderItem];
    /**
     * Carrier name that will deliver the package. Required when `carrierCode` is \"Other\"
     * @member {String} carrierName
     * @type {String}
     */
    carrierName: string;
    /**
     * Ship method to be used for shipping the order.
     * @member {String} shippingMethod
     * @type {String}
     */
    shippingMethod: string;
    /**
     * The unique identifier for the supply source.
     * @member {String} shipFromSupplySourceId
     * @type {String}
     */
    shipFromSupplySourceId: string;
}
import { ConfirmShipmentOrderItem } from './ConfirmShipmentOrderItem.js';
//# sourceMappingURL=PackageDetail.d.ts.map