/**
 * The GovernmentInvoiceRequest model module.
 * @module invoices_v2024_06_19/model/GovernmentInvoiceRequest
 * @version 2024-06-19
 */
export class GovernmentInvoiceRequest {
    /**
     * Constructs a <code>GovernmentInvoiceRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {GovernmentInvoiceRequest} obj Optional instance to populate.
     * @return {GovernmentInvoiceRequest} The populated <code>GovernmentInvoiceRequest</code> instance.
     */
    static constructFromObject(data: any, obj: GovernmentInvoiceRequest): GovernmentInvoiceRequest;
    /**
     * Constructs a new <code>GovernmentInvoiceRequest</code>.
     * Information required to create the government invoice.
     * @alias module:invoices_v2024_06_19/model/GovernmentInvoiceRequest
     * @class
     * @param invoiceType {String} Marketplace specific classification of the invoice type. Check 'invoiceType' options using 'getInvoicesAttributes' operation.
     * @param marketplaceId {String} The government invoices creation request will match the national authoritative source of the given marketplace.
     * @param shipmentId {String} The unique shipment identifier to get an invoice for.
     * @param transactionType {String} Marketplace specific classification of the transaction type that originated the invoice. Check 'transactionType' options using 'getInvoicesAttributes' operation.
     */
    constructor(invoiceType: string, marketplaceId: string, shipmentId: string, transactionType: string);
    invoiceType: string;
    marketplaceId: string;
    shipmentId: string;
    transactionType: string;
    /**
     * Object that contains additional invoice creation information
     * @member {CarrierDetailsContext[]} contexts
     * @type {CarrierDetailsContext[]}
     */
    contexts: CarrierDetailsContext[];
    /**
     * The unique InboundPlan identifier in which the shipment is contained and for which the invoice will be created.
     * @member {String} inboundPlanId
     * @type {String}
     */
    inboundPlanId: string;
}
import { CarrierDetailsContext } from './CarrierDetailsContext.js';
//# sourceMappingURL=GovernmentInvoiceRequest.d.ts.map