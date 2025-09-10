/**
 * The InvoiceItem model module.
 * @module vendorinvoices_v1/model/InvoiceItem
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
     * Details of the item being invoiced.
     * @alias module:vendorinvoices_v1/model/InvoiceItem
     * @class
     * @param itemSequenceNumber {Number} Unique number related to this line item.
     * @param invoicedQuantity {ItemQuantity}
     * @param netCost {Money}
     */
    constructor(itemSequenceNumber: number, invoicedQuantity: ItemQuantity, netCost: Money);
    itemSequenceNumber: number;
    invoicedQuantity: ItemQuantity;
    netCost: Money;
    /**
     * Amazon Standard Identification Number (ASIN) of an item.
     * @member {String} amazonProductIdentifier
     * @type {String}
     */
    amazonProductIdentifier: string;
    /**
     * The vendor selected product identifier of the item. Should be the same as was provided in the purchase order.
     * @member {String} vendorProductIdentifier
     * @type {String}
     */
    vendorProductIdentifier: string;
    /**
     * @member {NetCostUnitOfMeasure} netCostUnitOfMeasure
     * @type {NetCostUnitOfMeasure}
     */
    netCostUnitOfMeasure: NetCostUnitOfMeasure;
    /**
     * The Amazon purchase order number for this invoiced line item. Formatting Notes: 8-character alpha-numeric code. This value is mandatory only when invoiceType is Invoice, and is not required when invoiceType is CreditNote.
     * @member {String} purchaseOrderNumber
     * @type {String}
     */
    purchaseOrderNumber: string;
    /**
     * HSN Tax code. The HSN number cannot contain alphabets.
     * @member {String} hsnCode
     * @type {String}
     */
    hsnCode: string;
    /**
     * @member {CreditNoteDetails} creditNoteDetails
     * @type {CreditNoteDetails}
     */
    creditNoteDetails: CreditNoteDetails;
    /**
     * Individual tax details per line item.
     * @member {[TaxDetails]} taxDetails
     * @type {[TaxDetails]}
     */
    taxDetails: [TaxDetails];
    /**
     * Individual charge details per line item.
     * @member {[ChargeDetails]} chargeDetails
     * @type {[ChargeDetails]}
     */
    chargeDetails: [ChargeDetails];
    /**
     * Individual allowance details per line item.
     * @member {[AllowanceDetails]} allowanceDetails
     * @type {[AllowanceDetails]}
     */
    allowanceDetails: [AllowanceDetails];
}
import { ItemQuantity } from './ItemQuantity.js';
import { Money } from './Money.js';
import { NetCostUnitOfMeasure } from './NetCostUnitOfMeasure.js';
import { CreditNoteDetails } from './CreditNoteDetails.js';
import { TaxDetails } from './TaxDetails.js';
import { ChargeDetails } from './ChargeDetails.js';
import { AllowanceDetails } from './AllowanceDetails.js';
//# sourceMappingURL=InvoiceItem.d.ts.map