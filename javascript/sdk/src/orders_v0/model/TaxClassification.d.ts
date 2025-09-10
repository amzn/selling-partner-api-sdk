/**
 * The TaxClassification model module.
 * @module orders_v0/model/TaxClassification
 * @version v0
 */
export class TaxClassification {
    /**
     * Constructs a <code>TaxClassification</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {TaxClassification} obj Optional instance to populate.
     * @return {TaxClassification} The populated <code>TaxClassification</code> instance.
     */
    static constructFromObject(data: any, obj: TaxClassification): TaxClassification;
    /**
     * The type of tax.
     * @member {String} name
     * @type {String}
     */
    name: string;
    /**
     * The buyer's tax identifier.
     * @member {String} value
     * @type {String}
     */
    value: string;
}
//# sourceMappingURL=TaxClassification.d.ts.map