/**
 * The LabelCustomization model module.
 * @module merchantfulfillment_v0/model/LabelCustomization
 * @version v0
 */
export class LabelCustomization {
    /**
     * Constructs a <code>LabelCustomization</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {LabelCustomization} obj Optional instance to populate.
     * @return {LabelCustomization} The populated <code>LabelCustomization</code> instance.
     */
    static constructFromObject(data: any, obj: LabelCustomization): LabelCustomization;
    /**
     * Custom text to print on the label. Note: Custom text is only included on labels that are in ZPL format (ZPL203). FedEx does not support `CustomTextForLabel`.
     * @member {String} customTextForLabel
     * @type {String}
     */
    customTextForLabel: string;
    /**
     * @member {StandardIdForLabel} standardIdForLabel
     * @type {StandardIdForLabel}
     */
    standardIdForLabel: StandardIdForLabel;
}
import { StandardIdForLabel } from './StandardIdForLabel.js';
//# sourceMappingURL=LabelCustomization.d.ts.map