/**
 * The PackageDetails model module.
 * @module easyship_v2022_03_23/model/PackageDetails
 * @version 2022-03-23
 */
export class PackageDetails {
    /**
     * Constructs a <code>PackageDetails</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {PackageDetails} obj Optional instance to populate.
     * @return {PackageDetails} The populated <code>PackageDetails</code> instance.
     */
    static constructFromObject(data: any, obj: PackageDetails): PackageDetails;
    /**
     * Constructs a new <code>PackageDetails</code>.
     * Package details. Includes &#x60;packageItems&#x60;, &#x60;packageTimeSlot&#x60;, and &#x60;packageIdentifier&#x60;.
     * @alias module:easyship_v2022_03_23/model/PackageDetails
     * @class
     * @param packageTimeSlot {TimeSlot}
     */
    constructor(packageTimeSlot: TimeSlot);
    packageTimeSlot: TimeSlot;
    /**
     * A list of items contained in the package.
     * @member {Item[]} packageItems
     * @type {Item[]}
     */
    packageItems: Item[];
    /**
     * Optional seller-created identifier that is printed on the shipping label to help the seller identify the package.
     * @member {String} packageIdentifier
     * @type {String}
     */
    packageIdentifier: string;
}
import { TimeSlot } from './TimeSlot.js';
import { Item } from './Item.js';
//# sourceMappingURL=PackageDetails.d.ts.map