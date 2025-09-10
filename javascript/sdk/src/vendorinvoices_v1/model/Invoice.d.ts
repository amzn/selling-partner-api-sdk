/**
 * The Invoice model module.
 * @module vendorinvoices_v1/model/Invoice
 * @version v1
 */
export class Invoice {
    /**
     * Constructs a <code>Invoice</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {Invoice} obj Optional instance to populate.
     * @return {Invoice} The populated <code>Invoice</code> instance.
     */
    static constructFromObject(data: any, obj: Invoice): Invoice;
    /**
     * Constructs a new <code>Invoice</code>.
     * Represents an invoice or credit note document with details about the transaction, parties involved, and line items.
     * @alias module:vendorinvoices_v1/model/Invoice
     * @class
     * @param invoiceType {String} Identifies the type of invoice.
     * @param id {String} Unique number relating to the charges defined in this document. This will be invoice number if the document type is Invoice or CreditNote number if the document type is Credit Note. Failure to provide this reference will result in a rejection.
     * @param date {Date} Defines a date and time according to ISO8601.
     * @param remitToParty {PartyIdentification}
     * @param invoiceTotal {Money}
     */
    constructor(invoiceType: string, id: string, date: Date, remitToParty: PartyIdentification, invoiceTotal: Money);
    invoiceType: string;
    id: string;
    date: Date;
    remitToParty: PartyIdentification;
    invoiceTotal: Money;
    /**
     * An additional unique reference number used for regulatory or other purposes.
     * @member {String} referenceNumber
     * @type {String}
     */
    referenceNumber: string;
    /**
     * @member {PartyIdentification} shipToParty
     * @type {PartyIdentification}
     */
    shipToParty: PartyIdentification;
    /**
     * @member {PartyIdentification} shipFromParty
     * @type {PartyIdentification}
     */
    shipFromParty: PartyIdentification;
    /**
     * @member {PartyIdentification} billToParty
     * @type {PartyIdentification}
     */
    billToParty: PartyIdentification;
    /**
     * @member {PaymentTerms} paymentTerms
     * @type {PaymentTerms}
     */
    paymentTerms: PaymentTerms;
    /**
     * Total tax amount details for all line items.
     * @member {[TaxDetails]} taxDetails
     * @type {[TaxDetails]}
     */
    taxDetails: [TaxDetails];
    /**
     * Additional details provided by the selling party, for tax related or other purposes.
     * @member {[AdditionalDetails]} additionalDetails
     * @type {[AdditionalDetails]}
     */
    additionalDetails: [AdditionalDetails];
    /**
     * Total charge amount details for all line items.
     * @member {[ChargeDetails]} chargeDetails
     * @type {[ChargeDetails]}
     */
    chargeDetails: [ChargeDetails];
    /**
     * Total allowance amount details for all line items.
     * @member {[AllowanceDetails]} allowanceDetails
     * @type {[AllowanceDetails]}
     */
    allowanceDetails: [AllowanceDetails];
    /**
     * The list of invoice items.
     * @member {[InvoiceItem]} items
     * @type {[InvoiceItem]}
     */
    items: [InvoiceItem];
}
export namespace Invoice {
    namespace InvoiceTypeEnum {
        let Invoice: string;
        let CreditNote: string;
    }
    /**
     * *
     */
    type InvoiceTypeEnum = string;
}
import { PartyIdentification } from './PartyIdentification.js';
import { Money } from './Money.js';
import { PaymentTerms } from './PaymentTerms.js';
import { TaxDetails } from './TaxDetails.js';
import { AdditionalDetails } from './AdditionalDetails.js';
import { ChargeDetails } from './ChargeDetails.js';
import { AllowanceDetails } from './AllowanceDetails.js';
import { InvoiceItem } from './InvoiceItem.js';
//# sourceMappingURL=Invoice.d.ts.map