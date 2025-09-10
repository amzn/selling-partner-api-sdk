/**
 * The CustomerInvoiceList model module.
 * @module vendordfshipping_v2021_12_28/model/CustomerInvoiceList
 * @version 2021-12-28
 */
export class CustomerInvoiceList {
    /**
     * Constructs a <code>CustomerInvoiceList</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {CustomerInvoiceList} obj Optional instance to populate.
     * @return {CustomerInvoiceList} The populated <code>CustomerInvoiceList</code> instance.
     */
    static constructFromObject(data: any, obj: CustomerInvoiceList): CustomerInvoiceList;
    /**
     * @member {Pagination} pagination
     * @type {Pagination}
     */
    pagination: Pagination;
    /**
     * Represents a customer invoice within the `CustomerInvoiceList`.
     * @member {[CustomerInvoice]} customerInvoices
     * @type {[CustomerInvoice]}
     */
    customerInvoices: [CustomerInvoice];
}
import { Pagination } from './Pagination.js';
import { CustomerInvoice } from './CustomerInvoice.js';
//# sourceMappingURL=CustomerInvoiceList.d.ts.map