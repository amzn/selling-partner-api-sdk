/**
 * The RegulatedInformation model module.
 * @module orders_v0/model/RegulatedInformation
 * @version v0
 */
export class RegulatedInformation {
    /**
     * Constructs a <code>RegulatedInformation</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {RegulatedInformation} obj Optional instance to populate.
     * @return {RegulatedInformation} The populated <code>RegulatedInformation</code> instance.
     */
    static constructFromObject(data: any, obj: RegulatedInformation): RegulatedInformation;
    /**
     * Constructs a new <code>RegulatedInformation</code>.
     * The regulated information collected during purchase and used to verify the order.
     * @alias module:orders_v0/model/RegulatedInformation
     * @class
     * @param fields {[RegulatedInformationField]} A list of regulated information fields as collected from the regulatory form.
     */
    constructor(fields: [RegulatedInformationField]);
    fields: [RegulatedInformationField];
}
import { RegulatedInformationField } from './RegulatedInformationField.js';
//# sourceMappingURL=RegulatedInformation.d.ts.map