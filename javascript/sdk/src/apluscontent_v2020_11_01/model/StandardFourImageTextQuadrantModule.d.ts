/**
 * The StandardFourImageTextQuadrantModule model module.
 * @module apluscontent_v2020_11_01/model/StandardFourImageTextQuadrantModule
 * @version 2020-11-01
 */
export class StandardFourImageTextQuadrantModule {
    /**
     * Constructs a <code>StandardFourImageTextQuadrantModule</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {StandardFourImageTextQuadrantModule} obj Optional instance to populate.
     * @return {StandardFourImageTextQuadrantModule} The populated <code>StandardFourImageTextQuadrantModule</code> instance.
     */
    static constructFromObject(data: any, obj: StandardFourImageTextQuadrantModule): StandardFourImageTextQuadrantModule;
    /**
     * Constructs a new <code>StandardFourImageTextQuadrantModule</code>.
     * Four standard images with text, presented on a grid of four quadrants.
     * @alias module:apluscontent_v2020_11_01/model/StandardFourImageTextQuadrantModule
     * @class
     * @param block1 {StandardImageTextBlock}
     * @param block2 {StandardImageTextBlock}
     * @param block3 {StandardImageTextBlock}
     * @param block4 {StandardImageTextBlock}
     */
    constructor(block1: StandardImageTextBlock, block2: StandardImageTextBlock, block3: StandardImageTextBlock, block4: StandardImageTextBlock);
    block1: StandardImageTextBlock;
    block2: StandardImageTextBlock;
    block3: StandardImageTextBlock;
    block4: StandardImageTextBlock;
}
import { StandardImageTextBlock } from './StandardImageTextBlock.js';
//# sourceMappingURL=StandardFourImageTextQuadrantModule.d.ts.map