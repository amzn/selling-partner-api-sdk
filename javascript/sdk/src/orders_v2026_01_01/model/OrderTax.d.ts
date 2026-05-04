/**
 * The OrderTax model module.
 * @module orders_v2026_01_01/model/OrderTax
 * @version 2026-01-01
 */
export class OrderTax {
    /**
     * Constructs a <code>OrderTax</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {OrderTax} obj Optional instance to populate.
     * @return {OrderTax} The populated <code>OrderTax</code> instance.
     */
    static constructFromObject(data: Object, obj: OrderTax): OrderTax;
    /**
     * A list of tax registrations associated with the order.
     * @member {OrderTaxRegistration[]} taxRegistrations
     * @type {OrderTaxRegistration[]}
     */
    taxRegistrations: OrderTaxRegistration[];
    /**
     * @member {OrderTaxInvoicing} taxInvoicing
     * @type {OrderTaxInvoicing}
     */
    taxInvoicing: OrderTaxInvoicing;
}
import { OrderTaxRegistration } from './OrderTaxRegistration.js';
import { OrderTaxInvoicing } from './OrderTaxInvoicing.js';
//# sourceMappingURL=OrderTax.d.ts.map