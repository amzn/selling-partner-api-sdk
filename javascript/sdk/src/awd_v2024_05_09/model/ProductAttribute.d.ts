/**
 * The ProductAttribute model module.
 * @module awd_v2024_05_09/model/ProductAttribute
 * @version 2024-05-09
 */
export class ProductAttribute {
    /**
     * Constructs a <code>ProductAttribute</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {ProductAttribute} obj Optional instance to populate.
     * @return {ProductAttribute} The populated <code>ProductAttribute</code> instance.
     */
    static constructFromObject(data: any, obj: ProductAttribute): ProductAttribute;
    /**
     * Product attribute name.
     * @member {String} name
     * @type {String}
     */
    name: string;
    /**
     * Product attribute value.
     * @member {String} value
     * @type {String}
     */
    value: string;
}
//# sourceMappingURL=ProductAttribute.d.ts.map