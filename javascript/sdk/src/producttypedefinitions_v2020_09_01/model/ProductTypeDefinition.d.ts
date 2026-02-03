/**
 * The ProductTypeDefinition model module.
 * @module producttypedefinitions_v2020_09_01/model/ProductTypeDefinition
 * @version 2020-09-01
 */
export class ProductTypeDefinition {
    /**
     * Constructs a <code>ProductTypeDefinition</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {ProductTypeDefinition} obj Optional instance to populate.
     * @return {ProductTypeDefinition} The populated <code>ProductTypeDefinition</code> instance.
     */
    static constructFromObject(data: any, obj: ProductTypeDefinition): ProductTypeDefinition;
    /**
     * Constructs a new <code>ProductTypeDefinition</code>.
     * A product type definition represents the attributes and data requirements for a product type in the Amazon catalog. Product type definitions are used interchangeably between the Selling Partner API for Listings Items, Selling Partner API for Catalog Items, and JSON-based listings feeds in the Selling Partner API for Feeds.
     * @alias module:producttypedefinitions_v2020_09_01/model/ProductTypeDefinition
     * @class
     * @param schema {SchemaLink}
     * @param requirements {String} Name of the requirements set represented in this product type definition.
     * @param requirementsEnforced {String} Identifies if the required attributes for a requirements set are enforced by the product type definition schema. Non-enforced requirements enable structural validation of individual attributes without all of the required attributes being present (such as for partial updates).
     * @param propertyGroups {{String: PropertyGroup}} Mapping of property group names to property groups. Property groups represent logical groupings of schema properties that can be used for display or informational purposes.
     * @param locale {String} Locale of the display elements contained in the product type definition.
     * @param marketplaceIds {Array[]} Amazon marketplace identifiers for which the product type definition is applicable.
     * @param productType {String} The name of the Amazon product type that this product type definition applies to.
     * @param displayName {String} Human-readable and localized description of the Amazon product type.
     * @param productTypeVersion {ProductTypeVersion}
     */
    constructor(schema: SchemaLink, requirements: string, requirementsEnforced: string, propertyGroups: {
        String: PropertyGroup;
    }, locale: string, marketplaceIds: any[][], productType: string, displayName: string, productTypeVersion: ProductTypeVersion);
    schema: SchemaLink;
    requirements: string;
    requirementsEnforced: string;
    propertyGroups: {
        String: PropertyGroup;
    };
    locale: string;
    marketplaceIds: any[][];
    productType: string;
    displayName: string;
    productTypeVersion: ProductTypeVersion;
    /**
     * @member {SchemaLink} metaSchema
     * @type {SchemaLink}
     */
    metaSchema: SchemaLink;
}
export namespace ProductTypeDefinition {
    namespace RequirementsEnum {
        let LISTING: string;
        let LISTING_PRODUCT_ONLY: string;
        let LISTING_OFFER_ONLY: string;
    }
    /**
     * *
     */
    type RequirementsEnum = string;
    namespace RequirementsEnforcedEnum {
        let ENFORCED: string;
        let NOT_ENFORCED: string;
    }
    /**
     * *
     */
    type RequirementsEnforcedEnum = string;
}
import { SchemaLink } from './SchemaLink.js';
import { PropertyGroup } from './PropertyGroup.js';
import { ProductTypeVersion } from './ProductTypeVersion.js';
//# sourceMappingURL=ProductTypeDefinition.d.ts.map