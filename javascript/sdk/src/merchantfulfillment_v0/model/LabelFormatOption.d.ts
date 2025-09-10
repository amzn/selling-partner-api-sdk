/**
 * The LabelFormatOption model module.
 * @module merchantfulfillment_v0/model/LabelFormatOption
 * @version v0
 */
export class LabelFormatOption {
    /**
     * Constructs a <code>LabelFormatOption</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {LabelFormatOption} obj Optional instance to populate.
     * @return {LabelFormatOption} The populated <code>LabelFormatOption</code> instance.
     */
    static constructFromObject(data: any, obj: LabelFormatOption): LabelFormatOption;
    /**
     * When true, include a packing slip with the label.
     * @member {Boolean} includePackingSlipWithLabel
     * @type {Boolean}
     */
    includePackingSlipWithLabel: boolean;
    /**
     * @member {LabelFormat} labelFormat
     * @type {LabelFormat}
     */
    labelFormat: LabelFormat;
}
import { LabelFormat } from './LabelFormat.js';
//# sourceMappingURL=LabelFormatOption.d.ts.map