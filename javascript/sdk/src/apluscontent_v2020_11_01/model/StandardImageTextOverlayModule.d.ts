/**
 * The StandardImageTextOverlayModule model module.
 * @module apluscontent_v2020_11_01/model/StandardImageTextOverlayModule
 * @version 2020-11-01
 */
export class StandardImageTextOverlayModule {
    /**
     * Constructs a <code>StandardImageTextOverlayModule</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {StandardImageTextOverlayModule} obj Optional instance to populate.
     * @return {StandardImageTextOverlayModule} The populated <code>StandardImageTextOverlayModule</code> instance.
     */
    static constructFromObject(data: any, obj: StandardImageTextOverlayModule): StandardImageTextOverlayModule;
    /**
     * Constructs a new <code>StandardImageTextOverlayModule</code>.
     * A standard background image with a floating text box.
     * @alias module:apluscontent_v2020_11_01/model/StandardImageTextOverlayModule
     * @class
     * @param overlayColorType {ColorType}
     */
    constructor(overlayColorType: ColorType);
    overlayColorType: ColorType;
    /**
     * @member {StandardImageTextBlock} block
     * @type {StandardImageTextBlock}
     */
    block: StandardImageTextBlock;
}
import { ColorType } from './ColorType.js';
import { StandardImageTextBlock } from './StandardImageTextBlock.js';
//# sourceMappingURL=StandardImageTextOverlayModule.d.ts.map