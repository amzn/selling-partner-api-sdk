/**
 * The OrderTaxInvoicing model module.
 * @module orders_v2026_01_01/model/OrderTaxInvoicing
 * @version 2026-01-01
 */
export class OrderTaxInvoicing {
    /**
     * Constructs a <code>OrderTaxInvoicing</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {OrderTaxInvoicing} obj Optional instance to populate.
     * @return {OrderTaxInvoicing} The populated <code>OrderTaxInvoicing</code> instance.
     */
    static constructFromObject(data: Object, obj: OrderTaxInvoicing): OrderTaxInvoicing;
    /**
     * The buyer's invoicing preference, which indicates whether the seller should issue an individual or a business invoice to the buyer.    **Note**: This attribute is only available in the Turkey marketplace.   **Possible values**: - `INDIVIDUAL` (Issues an individual invoice to the buyer) - `BUSINESS` (Issues a business invoice to the buyer)
     * @member {String} buyerInvoicePreference
     * @type {String}
     */
    buyerInvoicePreference: string;
    /**
     * The status of the invoice. Only available for Easy Ship orders and orders in the Brazil marketplace.  **Possible values**: - `NOT_REQUIRED` (The order does not require an electronic invoice to be uploaded) - `NOT_FOUND` (The order requires an electronic invoice but it is not uploaded) - `PROCESSING` (The required electronic invoice was uploaded and is processing) - `ERRORED` (The uploaded electronic invoice was not accepted) - `ACCEPTED` (The uploaded electronic invoice was accepted)
     * @member {String} invoiceStatus
     * @type {String}
     */
    invoiceStatus: string;
}
//# sourceMappingURL=OrderTaxInvoicing.d.ts.map