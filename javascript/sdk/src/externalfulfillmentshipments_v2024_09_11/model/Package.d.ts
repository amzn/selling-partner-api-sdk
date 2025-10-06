/**
 * The Package model module.
 * @module externalfulfillmentshipments_v2024_09_11/model/Package
 * @version 2024-09-11
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
     * A package that is created to ship one or more of a shipment&#39;s line items.
     * @alias module:externalfulfillmentshipments_v2024_09_11/model/Package
     * @class
     * @param id {String} An ID that uniquely identifies a package within a shipment.
     * @param dimensions {PackageDimensions}
     * @param weight {Weight}
     * @param packageLineItems {[PackageLineItem]} The list of line items in a package.
     */
    constructor(id: string, dimensions: PackageDimensions, weight: Weight, packageLineItems: [PackageLineItem]);
    id: string;
    dimensions: PackageDimensions;
    weight: Weight;
    packageLineItems: [PackageLineItem];
    /**
     * The optional list of HAZMAT labels applied to the package.
     * @member {[String]} hazmatLabels
     * @type {[String]}
     */
    hazmatLabels: [string];
    /**
     * The current status of the package.
     * @member {String} status
     * @type {String}
     */
    status: string;
    /**
     * Whether the package requires standard handling or extra care.
     * @member {String} packageHandlingRequirements
     * @type {String}
     */
    packageHandlingRequirements: string;
}
export namespace Package {
    namespace StatusEnum {
        let CREATED: string;
        let PICKUP_SLOT_RETRIEVED: string;
        let INVOICE_GENERATED: string;
        let SHIPLABEL_GENERATED: string;
        let SHIPPED: string;
        let DELIVERED: string;
        let CANCELLED: string;
    }
    /**
     * *
     */
    type StatusEnum = string;
    namespace PackageHandlingRequirementsEnum {
        let NORMAL: string;
        let FRAGILE: string;
    }
    /**
     * *
     */
    type PackageHandlingRequirementsEnum = string;
}
import { PackageDimensions } from './PackageDimensions.js';
import { Weight } from './Weight.js';
import { PackageLineItem } from './PackageLineItem.js';
//# sourceMappingURL=Package.d.ts.map