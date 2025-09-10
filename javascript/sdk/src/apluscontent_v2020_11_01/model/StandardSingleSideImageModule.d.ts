/**
 * The StandardSingleSideImageModule model module.
 * @module apluscontent_v2020_11_01/model/StandardSingleSideImageModule
 * @version 2020-11-01
 */
export class StandardSingleSideImageModule {
    /**
     * Constructs a <code>StandardSingleSideImageModule</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {StandardSingleSideImageModule} obj Optional instance to populate.
     * @return {StandardSingleSideImageModule} The populated <code>StandardSingleSideImageModule</code> instance.
     */
    static constructFromObject(data: any, obj: StandardSingleSideImageModule): StandardSingleSideImageModule;
    /**
     * Constructs a new <code>StandardSingleSideImageModule</code>.
     * A standard headline and body text with an image on the side.
     * @alias module:apluscontent_v2020_11_01/model/StandardSingleSideImageModule
     * @class
     * @param imagePositionType {PositionType}
     */
    constructor(imagePositionType: PositionType);
    imagePositionType: PositionType;
    /**
     * @member {StandardImageTextBlock} block
     * @type {StandardImageTextBlock}
     */
    block: StandardImageTextBlock;
}
import { PositionType } from './PositionType.js';
import { StandardImageTextBlock } from './StandardImageTextBlock.js';
//# sourceMappingURL=StandardSingleSideImageModule.d.ts.map