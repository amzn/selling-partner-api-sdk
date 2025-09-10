/**
 * The Product model module.
 * @module pricing_v0/model/Product
 * @version v0
 */
export class Product {
    /**
     * Constructs a <code>Product</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {Product} obj Optional instance to populate.
     * @return {Product} The populated <code>Product</code> instance.
     */
    static constructFromObject(data: any, obj: Product): Product;
    /**
     * Constructs a new <code>Product</code>.
     * An item.
     * @alias module:pricing_v0/model/Product
     * @class
     * @param identifiers {IdentifierType}
     */
    constructor(identifiers: IdentifierType);
    identifiers: IdentifierType;
    /**
     * A list of product attributes if they are applicable to the product that is returned.
     * @member {[Object]} attributeSets
     * @type {[Object]}
     */
    attributeSets: [any];
    /**
     * A list that contains product variation information, if applicable.
     * @member {[Object]} relationships
     * @type {[Object]}
     */
    relationships: [any];
    /**
     * @member {CompetitivePricingType} competitivePricing
     * @type {CompetitivePricingType}
     */
    competitivePricing: CompetitivePricingType;
    /**
     * A list of sales rank information for the item, by category.
     * @member {[SalesRankType]} salesRankings
     * @type {[SalesRankType]}
     */
    salesRankings: [SalesRankType];
    /**
     * A list of offers.
     * @member {[OfferType]} offers
     * @type {[OfferType]}
     */
    offers: [OfferType];
}
import { IdentifierType } from './IdentifierType.js';
import { CompetitivePricingType } from './CompetitivePricingType.js';
import { SalesRankType } from './SalesRankType.js';
import { OfferType } from './OfferType.js';
//# sourceMappingURL=Product.d.ts.map