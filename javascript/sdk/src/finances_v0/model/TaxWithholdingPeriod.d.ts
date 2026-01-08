/**
 * The TaxWithholdingPeriod model module.
 * @module finances_v0/model/TaxWithholdingPeriod
 * @version v0
 */
export class TaxWithholdingPeriod {
    /**
     * Constructs a <code>TaxWithholdingPeriod</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {TaxWithholdingPeriod} obj Optional instance to populate.
     * @return {TaxWithholdingPeriod} The populated <code>TaxWithholdingPeriod</code> instance.
     */
    static constructFromObject(data: any, obj: TaxWithholdingPeriod): TaxWithholdingPeriod;
    /**
     * A date in [ISO 8601](https://developer-docs.amazon.com/sp-api/docs/iso-8601) date-time format.
     * @member {Date} startDate
     * @type {Date}
     */
    startDate: Date;
    /**
     * A date in [ISO 8601](https://developer-docs.amazon.com/sp-api/docs/iso-8601) date-time format.
     * @member {Date} endDate
     * @type {Date}
     */
    endDate: Date;
}
//# sourceMappingURL=TaxWithholdingPeriod.d.ts.map