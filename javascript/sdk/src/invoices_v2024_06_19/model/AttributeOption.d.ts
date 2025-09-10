/**
 * The AttributeOption model module.
 * @module invoices_v2024_06_19/model/AttributeOption
 * @version 2024-06-19
 */
export class AttributeOption {
    /**
     * Constructs a <code>AttributeOption</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {AttributeOption} obj Optional instance to populate.
     * @return {AttributeOption} The populated <code>AttributeOption</code> instance.
     */
    static constructFromObject(data: any, obj: AttributeOption): AttributeOption;
    /**
     * The description of the attribute value.
     * @member {String} description
     * @type {String}
     */
    description: string;
    /**
     * The possible values for the attribute option.
     * @member {String} value
     * @type {String}
     */
    value: string;
}
//# sourceMappingURL=AttributeOption.d.ts.map