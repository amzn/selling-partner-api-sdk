/**
 * The StandardProductDescriptionModule model module.
 * @module apluscontent_v2020_11_01/model/StandardProductDescriptionModule
 * @version 2020-11-01
 */
export class StandardProductDescriptionModule {
    /**
     * Constructs a <code>StandardProductDescriptionModule</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {StandardProductDescriptionModule} obj Optional instance to populate.
     * @return {StandardProductDescriptionModule} The populated <code>StandardProductDescriptionModule</code> instance.
     */
    static constructFromObject(data: any, obj: StandardProductDescriptionModule): StandardProductDescriptionModule;
    /**
     * Constructs a new <code>StandardProductDescriptionModule</code>.
     * Standard product description text.
     * @alias module:apluscontent_v2020_11_01/model/StandardProductDescriptionModule
     * @class
     * @param body {ParagraphComponent}
     */
    constructor(body: ParagraphComponent);
    body: ParagraphComponent;
}
import { ParagraphComponent } from './ParagraphComponent.js';
//# sourceMappingURL=StandardProductDescriptionModule.d.ts.map