/**
 * The StandardComparisonTableModule model module.
 * @module apluscontent_v2020_11_01/model/StandardComparisonTableModule
 * @version 2020-11-01
 */
export class StandardComparisonTableModule {
    /**
     * Constructs a <code>StandardComparisonTableModule</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {StandardComparisonTableModule} obj Optional instance to populate.
     * @return {StandardComparisonTableModule} The populated <code>StandardComparisonTableModule</code> instance.
     */
    static constructFromObject(data: any, obj: StandardComparisonTableModule): StandardComparisonTableModule;
    /**
     * @member {StandardComparisonProductBlock[]} productColumns
     * @type {StandardComparisonProductBlock[]}
     */
    productColumns: StandardComparisonProductBlock[];
    /**
     * @member {PlainTextItem[]} metricRowLabels
     * @type {PlainTextItem[]}
     */
    metricRowLabels: PlainTextItem[];
}
import { StandardComparisonProductBlock } from './StandardComparisonProductBlock.js';
import { PlainTextItem } from './PlainTextItem.js';
//# sourceMappingURL=StandardComparisonTableModule.d.ts.map