/**
 * The ProductType model module.
 * @module producttypedefinitions_v2020_09_01/model/ProductType
 * @version 2020-09-01
 */
export class ProductType {
    /**
     * Constructs a <code>ProductType</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {ProductType} obj Optional instance to populate.
     * @return {ProductType} The populated <code>ProductType</code> instance.
     */
    static constructFromObject(data: any, obj: ProductType): ProductType;
    /**
     * Constructs a new <code>ProductType</code>.
     * An Amazon product type with a definition available.
     * @alias module:producttypedefinitions_v2020_09_01/model/ProductType
     * @class
     * @param name {String} The name of the Amazon product type.
     * @param displayName {String} The human-readable and localized description of the Amazon product type.
     * @param marketplaceIds {[String]} The Amazon marketplace identifiers for which the product type definition is available.
     */
    constructor(name: string, displayName: string, marketplaceIds: [string]);
    name: string;
    displayName: string;
    marketplaceIds: [string];
}
//# sourceMappingURL=ProductType.d.ts.map