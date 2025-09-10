/**
 * The Label model module.
 * @module merchantfulfillment_v0/model/Label
 * @version v0
 */
export class Label {
    /**
     * Constructs a <code>Label</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {Label} obj Optional instance to populate.
     * @return {Label} The populated <code>Label</code> instance.
     */
    static constructFromObject(data: any, obj: Label): Label;
    /**
     * Constructs a new <code>Label</code>.
     * Data for creating a shipping label and dimensions for printing the label.
     * @alias module:merchantfulfillment_v0/model/Label
     * @class
     * @param dimensions {LabelDimensions}
     * @param fileContents {FileContents}
     */
    constructor(dimensions: LabelDimensions, fileContents: FileContents);
    dimensions: LabelDimensions;
    fileContents: FileContents;
    /**
     * Custom text to print on the label. Note: Custom text is only included on labels that are in ZPL format (ZPL203). FedEx does not support `CustomTextForLabel`.
     * @member {String} customTextForLabel
     * @type {String}
     */
    customTextForLabel: string;
    /**
     * @member {LabelFormat} labelFormat
     * @type {LabelFormat}
     */
    labelFormat: LabelFormat;
    /**
     * @member {StandardIdForLabel} standardIdForLabel
     * @type {StandardIdForLabel}
     */
    standardIdForLabel: StandardIdForLabel;
}
import { LabelDimensions } from './LabelDimensions.js';
import { FileContents } from './FileContents.js';
import { LabelFormat } from './LabelFormat.js';
import { StandardIdForLabel } from './StandardIdForLabel.js';
//# sourceMappingURL=Label.d.ts.map