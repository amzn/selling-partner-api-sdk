/**
 * The ListingsItemPutRequest model module.
 * @module listingsitems_v2021_08_01/model/ListingsItemPutRequest
 * @version 2021-08-01
 */
export class ListingsItemPutRequest {
    /**
     * Constructs a <code>ListingsItemPutRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {ListingsItemPutRequest} obj Optional instance to populate.
     * @return {ListingsItemPutRequest} The populated <code>ListingsItemPutRequest</code> instance.
     */
    static constructFromObject(data: any, obj: ListingsItemPutRequest): ListingsItemPutRequest;
    /**
     * Constructs a new <code>ListingsItemPutRequest</code>.
     * The request body schema for the &#x60;putListingsItem&#x60; operation.
     * @alias module:listingsitems_v2021_08_01/model/ListingsItemPutRequest
     * @class
     * @param productType {String} The Amazon product type of the listings item.
     * @param attributes {{String: Object}} A JSON object containing structured listings item attribute data keyed by attribute name.
     */
    constructor(productType: string, attributes: {
        String: any;
    });
    productType: string;
    attributes: {
        String: any;
    };
    /**
     * The name of the requirements set for the provided data.
     * @member {String} requirements
     * @type {String}
     */
    requirements: string;
}
export namespace ListingsItemPutRequest {
    namespace RequirementsEnum {
        let LISTING: string;
        let LISTING_PRODUCT_ONLY: string;
        let LISTING_OFFER_ONLY: string;
    }
    /**
     * *
     */
    type RequirementsEnum = string;
}
//# sourceMappingURL=ListingsItemPutRequest.d.ts.map