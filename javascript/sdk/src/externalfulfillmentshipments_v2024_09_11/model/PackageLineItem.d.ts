/**
 * The PackageLineItem model module.
 * @module externalfulfillmentshipments_v2024_09_11/model/PackageLineItem
 * @version 2024-09-11
 */
export class PackageLineItem {
    /**
     * Constructs a <code>PackageLineItem</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {PackageLineItem} obj Optional instance to populate.
     * @return {PackageLineItem} The populated <code>PackageLineItem</code> instance.
     */
    static constructFromObject(data: any, obj: PackageLineItem): PackageLineItem;
    /**
     * Constructs a new <code>PackageLineItem</code>.
     * A line item in a package.
     * @alias module:externalfulfillmentshipments_v2024_09_11/model/PackageLineItem
     * @class
     * @param packageLineItemId {String} The line item ID.
     * @param quantity {Number} The number of items of a particular line item of a shipment that are packed into the package.
     */
    constructor(packageLineItemId: string, quantity: number);
    packageLineItemId: string;
    quantity: number;
    /**
     * The list of serial numbers of items in the package, if required to be provided.
     * @member {String[]} serialNumbers
     * @type {String[]}
     */
    serialNumbers: string[];
    /**
     * The number of pieces of a multi-piece item that are in this package. This is applicable only for items that are shipped in multiple pieces.
     * @member {Number} pieces
     * @type {Number}
     */
    pieces: number;
    /**
     * A two-letter country code, as defined by the ISO-3166 alpha-2 standard.
     * @member {String} countryOfOrigin
     * @type {String}
     */
    countryOfOrigin: string;
    /**
     * @member {Amount} itemValue
     * @type {Amount}
     */
    itemValue: Amount;
}
import { Amount } from './Amount.js';
//# sourceMappingURL=PackageLineItem.d.ts.map