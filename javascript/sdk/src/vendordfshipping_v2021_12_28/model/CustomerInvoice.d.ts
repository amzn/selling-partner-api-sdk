/**
 * The CustomerInvoice model module.
 * @module vendordfshipping_v2021_12_28/model/CustomerInvoice
 * @version 2021-12-28
 */
export class CustomerInvoice {
    /**
     * Constructs a <code>CustomerInvoice</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {CustomerInvoice} obj Optional instance to populate.
     * @return {CustomerInvoice} The populated <code>CustomerInvoice</code> instance.
     */
    static constructFromObject(data: any, obj: CustomerInvoice): CustomerInvoice;
    /**
     * Constructs a new <code>CustomerInvoice</code>.
     * Represents a customer invoice associated with a purchase order.
     * @alias module:vendordfshipping_v2021_12_28/model/CustomerInvoice
     * @class
     * @param purchaseOrderNumber {String} The purchase order number for this order.
     * @param content {String} The Base64 customer invoice.
     */
    constructor(purchaseOrderNumber: string, content: string);
    purchaseOrderNumber: string;
    content: string;
}
//# sourceMappingURL=CustomerInvoice.d.ts.map