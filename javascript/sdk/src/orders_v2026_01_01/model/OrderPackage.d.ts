/**
 * The OrderPackage model module.
 * @module orders_v2026_01_01/model/OrderPackage
 * @version 2026-01-01
 */
export class OrderPackage {
    /**
     * Constructs a <code>OrderPackage</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {OrderPackage} obj Optional instance to populate.
     * @return {OrderPackage} The populated <code>OrderPackage</code> instance.
     */
    static constructFromObject(data: any, obj: OrderPackage): OrderPackage;
    /**
     * Constructs a new <code>OrderPackage</code>.
     * Information about a physical shipping package, including tracking details. **Note:** Only available for merchant-fulfilled (FBM) orders.
     * @alias module:orders_v2026_01_01/model/OrderPackage
     * @class
     * @param packageReferenceId {String} A unique identifier for this package within the context of the order.
     */
    constructor(packageReferenceId: string);
    packageReferenceId: string;
    /**
     * The exact time when this shipping package was created and prepared for shipment. In [ISO 8601](https://developer-docs.amazon.com/sp-api/docs/iso-8601) format.
     * @member {Date} createdTime
     * @type {Date}
     */
    createdTime: Date;
    /**
     * @member {PackageStatus} packageStatus
     * @type {PackageStatus}
     */
    packageStatus: PackageStatus;
    /**
     * The carrier responsible for transporting this package to the customer.
     * @member {String} carrier
     * @type {String}
     */
    carrier: string;
    /**
     * The exact time when this package was handed over to the carrier and began its journey to the customer. In [ISO 8601](https://developer-docs.amazon.com/sp-api/docs/iso-8601) format.
     * @member {Date} shipTime
     * @type {Date}
     */
    shipTime: Date;
    /**
     * The specific shipping method or service used for delivering this package.
     * @member {String} shippingService
     * @type {String}
     */
    shippingService: string;
    /**
     * The carrier-provided tracking number that customers can use to monitor the package's delivery progress.
     * @member {String} trackingNumber
     * @type {String}
     */
    trackingNumber: string;
    /**
     * @member {MerchantAddress} shipFromAddress
     * @type {MerchantAddress}
     */
    shipFromAddress: MerchantAddress;
    /**
     * A list of all order items included in this specific package.
     * @member {Array[]} packageItems
     * @type {Array[]}
     */
    packageItems: any[][];
}
import { PackageStatus } from './PackageStatus.js';
import { MerchantAddress } from './MerchantAddress.js';
//# sourceMappingURL=OrderPackage.d.ts.map