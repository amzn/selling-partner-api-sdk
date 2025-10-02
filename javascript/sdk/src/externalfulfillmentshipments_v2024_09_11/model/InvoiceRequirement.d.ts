/**
 * The InvoiceRequirement model module.
 * @module externalfulfillmentshipments_v2024_09_11/model/InvoiceRequirement
 * @version 2024-09-11
 */
export class InvoiceRequirement {
    /**
     * Constructs a <code>InvoiceRequirement</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {InvoiceRequirement} obj Optional instance to populate.
     * @return {InvoiceRequirement} The populated <code>InvoiceRequirement</code> instance.
     */
    static constructFromObject(data: any, obj: InvoiceRequirement): InvoiceRequirement;
    /**
     * Whether the invoice document is required to be attached to the shipment.
     * @member {String} requirement
     * @type {String}
     */
    requirement: string;
    /**
     * The status of the of the invoice document that is attached to the shipment.
     * @member {String} status
     * @type {String}
     */
    status: string;
}
export namespace InvoiceRequirement {
    namespace RequirementEnum {
        let REQUIRED: string;
        let NOT_REQUIRED: string;
    }
    /**
     * *
     */
    type RequirementEnum = string;
    namespace StatusEnum {
        let PENDING: string;
        let AVAILABLE: string;
        let NOT_AVAILABLE: string;
    }
    /**
     * *
     */
    type StatusEnum = string;
}
//# sourceMappingURL=InvoiceRequirement.d.ts.map