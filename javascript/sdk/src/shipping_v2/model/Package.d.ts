/**
 * The Package model module.
 * @module shipping_v2/model/Package
 * @version v2
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
     * A package to be shipped through a shipping service offering.
     * @alias module:shipping_v2/model/Package
     * @class
     * @param dimensions {Dimensions}
     * @param weight {Weight}
     * @param insuredValue {Currency}
     * @param packageClientReferenceId {String} A client provided unique identifier for a package being shipped. This value should be saved by the client to pass as a parameter to the getShipmentDocuments operation.
     * @param items {[Item]} A list of items.
     */
    constructor(dimensions: Dimensions, weight: Weight, insuredValue: Currency, packageClientReferenceId: string, items: [Item]);
    dimensions: Dimensions;
    weight: Weight;
    insuredValue: Currency;
    packageClientReferenceId: string;
    items: Item[];
    /**
     * When true, the package contains hazardous materials. Defaults to false.
     * @member {Boolean} isHazmat
     * @type {Boolean}
     */
    isHazmat: boolean;
    /**
     * The seller name displayed on the label.
     * @member {String} sellerDisplayName
     * @type {String}
     */
    sellerDisplayName: string;
    /**
     * A list of charges based on the shipping service charges applied on a package.
     * @member {ChargeComponent[]} charges
     * @type {ChargeComponent[]}
     */
    charges: ChargeComponent[];
}
import { Dimensions } from './Dimensions.js';
import { Weight } from './Weight.js';
import { Currency } from './Currency.js';
import { Item } from './Item.js';
import { ChargeComponent } from './ChargeComponent.js';
//# sourceMappingURL=Package.d.ts.map