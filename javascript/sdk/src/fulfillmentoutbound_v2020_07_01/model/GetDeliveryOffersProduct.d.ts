/**
 * The GetDeliveryOffersProduct model module.
 * @module fulfillmentoutbound_v2020_07_01/model/GetDeliveryOffersProduct
 * @version 2020-07-01
 */
export class GetDeliveryOffersProduct {
    /**
     * Constructs a <code>GetDeliveryOffersProduct</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {GetDeliveryOffersProduct} obj Optional instance to populate.
     * @return {GetDeliveryOffersProduct} The populated <code>GetDeliveryOffersProduct</code> instance.
     */
    static constructFromObject(data: any, obj: GetDeliveryOffersProduct): GetDeliveryOffersProduct;
    /**
     * Constructs a new <code>GetDeliveryOffersProduct</code>.
     * The product details for the delivery offer.
     * @alias module:fulfillmentoutbound_v2020_07_01/model/GetDeliveryOffersProduct
     * @class
     * @param productIdentifier {ProductIdentifier}
     */
    constructor(productIdentifier: ProductIdentifier);
    productIdentifier: ProductIdentifier;
    /**
     * @member {Amount} amount
     * @type {Amount}
     */
    amount: Amount;
}
import { ProductIdentifier } from './ProductIdentifier.js';
import { Amount } from './Amount.js';
//# sourceMappingURL=GetDeliveryOffersProduct.d.ts.map