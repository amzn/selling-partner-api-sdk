/**
 * The InvoiceDetail model module.
 * @module vendordfpayments_v1/model/InvoiceDetail
 * @version v1
 */
export class InvoiceDetail {
    /**
     * Constructs a <code>InvoiceDetail</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {InvoiceDetail} obj Optional instance to populate.
     * @return {InvoiceDetail} The populated <code>InvoiceDetail</code> instance.
     */
    static constructFromObject(data: any, obj: InvoiceDetail): InvoiceDetail;
    /**
     * Constructs a new <code>InvoiceDetail</code>.
     * Represents the details of an invoice, including invoice number, date, parties involved, payment terms, totals, taxes, charges, and line items.
     * @alias module:vendordfpayments_v1/model/InvoiceDetail
     * @class
     * @param invoiceNumber {String} The unique invoice number.
     * @param invoiceDate {Date} Invoice date.
     * @param remitToParty {PartyIdentification}
     * @param shipFromParty {PartyIdentification}
     * @param invoiceTotal {Money}
     * @param items {[InvoiceItem]} Provides the details of the items in this invoice.
     */
    constructor(invoiceNumber: string, invoiceDate: Date, remitToParty: PartyIdentification, shipFromParty: PartyIdentification, invoiceTotal: Money, items: [InvoiceItem]);
    invoiceNumber: string;
    invoiceDate: Date;
    remitToParty: PartyIdentification;
    shipFromParty: PartyIdentification;
    invoiceTotal: Money;
    items: [InvoiceItem];
    /**
     * An additional unique reference number used for regulatory or other purposes.
     * @member {String} referenceNumber
     * @type {String}
     */
    referenceNumber: string;
    /**
     * @member {PartyIdentification} billToParty
     * @type {PartyIdentification}
     */
    billToParty: PartyIdentification;
    /**
     * Ship-to country code.
     * @member {String} shipToCountryCode
     * @type {String}
     */
    shipToCountryCode: string;
    /**
     * The payment terms for the invoice.
     * @member {String} paymentTermsCode
     * @type {String}
     */
    paymentTermsCode: string;
    /**
     * Individual tax details per line item.
     * @member {[TaxDetail]} taxTotals
     * @type {[TaxDetail]}
     */
    taxTotals: [TaxDetail];
    /**
     * Additional details provided by the selling party, for tax-related or other purposes.
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
}
import { PartyIdentification } from './PartyIdentification.js';
import { Money } from './Money.js';
import { InvoiceItem } from './InvoiceItem.js';
import { TaxDetail } from './TaxDetail.js';
import { AdditionalDetails } from './AdditionalDetails.js';
import { ChargeDetails } from './ChargeDetails.js';
//# sourceMappingURL=InvoiceDetail.d.ts.map