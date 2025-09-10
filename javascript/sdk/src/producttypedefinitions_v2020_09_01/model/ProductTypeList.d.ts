/**
 * The ProductTypeList model module.
 * @module producttypedefinitions_v2020_09_01/model/ProductTypeList
 * @version 2020-09-01
 */
export class ProductTypeList {
    /**
     * Constructs a <code>ProductTypeList</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {ProductTypeList} obj Optional instance to populate.
     * @return {ProductTypeList} The populated <code>ProductTypeList</code> instance.
     */
    static constructFromObject(data: any, obj: ProductTypeList): ProductTypeList;
    /**
     * Constructs a new <code>ProductTypeList</code>.
     * A list of Amazon product types with definitions available.
     * @alias module:producttypedefinitions_v2020_09_01/model/ProductTypeList
     * @class
     * @param productTypes {[ProductType]}
     * @param productTypeVersion {String} Amazon product type version identifier.
     */
    constructor(productTypes: [ProductType], productTypeVersion: string);
    productTypes: [ProductType];
    productTypeVersion: string;
}
import { ProductType } from './ProductType.js';
//# sourceMappingURL=ProductTypeList.d.ts.map