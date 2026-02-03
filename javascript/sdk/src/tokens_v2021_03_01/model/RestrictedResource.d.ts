/**
 * The RestrictedResource model module.
 * @module tokens_v2021_03_01/model/RestrictedResource
 * @version 2021-03-01
 */
export class RestrictedResource {
    /**
     * Constructs a <code>RestrictedResource</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {RestrictedResource} obj Optional instance to populate.
     * @return {RestrictedResource} The populated <code>RestrictedResource</code> instance.
     */
    static constructFromObject(data: any, obj: RestrictedResource): RestrictedResource;
    /**
     * Constructs a new <code>RestrictedResource</code>.
     * Model of a restricted resource.
     * @alias module:tokens_v2021_03_01/model/RestrictedResource
     * @class
     * @param method {String} The HTTP method in the restricted resource.
     * @param path {String} The path in the restricted resource. Here are some path examples: - ```/orders/v0/orders```. For getting an RDT for the getOrders operation of the Orders API. For bulk orders. - ```/orders/v0/orders/123-1234567-1234567```. For getting an RDT for the getOrder operation of the Orders API. For a specific order. - ```/orders/v0/orders/123-1234567-1234567/orderItems```. For getting an RDT for the getOrderItems operation of the Orders API. For the order items in a specific order. - ```/mfn/v0/shipments/FBA1234ABC5D```. For getting an RDT for the getShipment operation of the Shipping API. For a specific shipment. - ```/mfn/v0/shipments/{shipmentId}```. For getting an RDT for the getShipment operation of the Shipping API. For any of a selling partner's shipments that you specify when you call the getShipment operation.
     */
    constructor(method: string, path: string);
    method: string;
    path: string;
    /**
     * Indicates the type of Personally Identifiable Information requested. This parameter is required only when getting an RDT for use with the getOrder, getOrders, or getOrderItems operation of the Orders API. For more information, see the [Tokens API Use Case Guide](doc:tokens-api-use-case-guide). Possible values include: - **buyerInfo**. On the order level this includes general identifying information about the buyer and tax-related information. On the order item level this includes gift wrap information and custom order information, if available. - **shippingAddress**. This includes information for fulfilling orders. - **buyerTaxInformation**. This includes information for issuing tax invoices.
     * @member {Array[]} dataElements
     * @type {Array[]}
     */
    dataElements: any[][];
}
export namespace RestrictedResource {
    namespace MethodEnum {
        let GET: string;
        let PUT: string;
        let POST: string;
        let DELETE: string;
    }
    /**
     * *
     */
    type MethodEnum = string;
}
//# sourceMappingURL=RestrictedResource.d.ts.map