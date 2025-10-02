/**
 * The InvoiceInformation model module.
 * @module externalfulfillmentreturns_v2024_09_11/model/InvoiceInformation
 * @version 2024-09-11
 */
export class InvoiceInformation {
    /**
     * Constructs a <code>InvoiceInformation</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {InvoiceInformation} obj Optional instance to populate.
     * @return {InvoiceInformation} The populated <code>InvoiceInformation</code> instance.
     */
    static constructFromObject(data: any, obj: InvoiceInformation): InvoiceInformation;
    /**
     * Constructs a new <code>InvoiceInformation</code>.
     * Invoice-related information for the return created for Amazon SmartConnect.
     * @alias module:externalfulfillmentreturns_v2024_09_11/model/InvoiceInformation
     * @class
     * @param id {String} The unique ID of the invoice that corresponds to the return.
     */
    constructor(id: string);
    id: string;
}
//# sourceMappingURL=InvoiceInformation.d.ts.map