/**
 * The Package model module.
 * @module vendordfshipping_v2021_12_28/model/Package
 * @version 2021-12-28
 */
export class Package {
    /**
     * Constructs a <code>Package</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {Package} obj Optional instance to populate.
     * @return {Package} The populated <code>Package</code> instance.
     */
    static constructFromObject(data: any, obj: Package): Package;
    /**
     * Constructs a new <code>Package</code>.
     * The package that is associated with the container.
     * @alias module:vendordfshipping_v2021_12_28/model/Package
     * @class
     * @param packageTrackingNumber {String} The tracking number on the label of shipment package, that you can fetch from the `shippingLabels` response. You can also scan the bar code on the shipping label to get the tracking number.
     */
    constructor(packageTrackingNumber: string);
    packageTrackingNumber: string;
}
//# sourceMappingURL=Package.d.ts.map