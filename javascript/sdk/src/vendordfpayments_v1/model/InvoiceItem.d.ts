/**
 * The InvoiceItem model module.
 * @module vendordfpayments_v1/model/InvoiceItem
 * @version v1
 */
export class InvoiceItem {
    /**
     * Constructs a <code>InvoiceItem</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {InvoiceItem} obj Optional instance to populate.
     * @return {InvoiceItem} The populated <code>InvoiceItem</code> instance.
     */
    static constructFromObject(data: any, obj: InvoiceItem): InvoiceItem;
    /**
     * Constructs a new <code>InvoiceItem</code>.
     * Provides the details of the items in this invoice.
     * @alias module:vendordfpayments_v1/model/InvoiceItem
     * @class
     * @param itemSequenceNumber {String} Numbering of the item on the purchase order. The first item will be 1, the second 2, and so on.
     * @param invoicedQuantity {ItemQuantity}
     * @param netCost {Money}
     * @param purchaseOrderNumber {String} The purchase order number for this order. Formatting Notes: 8-character alpha-numeric code.
     */
    constructor(itemSequenceNumber: string, invoicedQuantity: ItemQuantity, netCost: Money, purchaseOrderNumber: string);
    itemSequenceNumber: string;
    invoicedQuantity: ItemQuantity;
    netCost: Money;
    purchaseOrderNumber: string;
    /**
     * Buyer's standard identification number (ASIN) of an item.
     * @member {String} buyerProductIdentifier
     * @type {String}
     */
    buyerProductIdentifier: string;
    /**
     * The vendor selected product identification of the item.
     * @member {String} vendorProductIdentifier
     * @type {String}
     */
    vendorProductIdentifier: string;
    /**
     * The vendor's order number for this order.
     * @member {String} vendorOrderNumber
     * @type {String}
     */
    vendorOrderNumber: string;
    /**
     * Harmonized System of Nomenclature (HSN) tax code. The HSN number cannot contain alphabets.
     * @member {String} hsnCode
     * @type {String}
     */
    hsnCode: string;
    /**
     * Individual tax details per line item.
     * @member {TaxDetail[]} taxDetails
     * @type {TaxDetail[]}
     */
    taxDetails: TaxDetail[];
    /**
     * Individual charge details per line item.
     * @member {ChargeDetails[]} chargeDetails
     * @type {ChargeDetails[]}
     */
    chargeDetails: ChargeDetails[];
}
import { ItemQuantity } from './ItemQuantity.js';
import { Money } from './Money.js';
import { TaxDetail } from './TaxDetail.js';
import { ChargeDetails } from './ChargeDetails.js';
//# sourceMappingURL=InvoiceItem.d.ts.map