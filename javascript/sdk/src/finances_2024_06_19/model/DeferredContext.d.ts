/**
 * The DeferredContext model module.
 * @module finances_2024_06_19/model/DeferredContext
 * @version 2024-06-19
 */
export class DeferredContext {
    /**
     * Constructs a <code>DeferredContext</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {DeferredContext} obj Optional instance to populate.
     * @return {DeferredContext} The populated <code>DeferredContext</code> instance.
     */
    static constructFromObject(data: any, obj: DeferredContext): DeferredContext;
    /**
     * The deferral policy applied to the transaction.  **Examples:** `B2B` (invoiced orders), `DD7` (delivery date policy)
     * @member {String} deferralReason
     * @type {String}
     */
    deferralReason: string;
    /**
     * A date in [ISO 8601](https://developer-docs.amazon.com/sp-api/docs/iso-8601) date-time format.
     * @member {Date} maturityDate
     * @type {Date}
     */
    maturityDate: Date;
}
//# sourceMappingURL=DeferredContext.d.ts.map