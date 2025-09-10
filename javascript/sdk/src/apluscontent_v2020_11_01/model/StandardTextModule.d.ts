/**
 * The StandardTextModule model module.
 * @module apluscontent_v2020_11_01/model/StandardTextModule
 * @version 2020-11-01
 */
export class StandardTextModule {
    /**
     * Constructs a <code>StandardTextModule</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {StandardTextModule} obj Optional instance to populate.
     * @return {StandardTextModule} The populated <code>StandardTextModule</code> instance.
     */
    static constructFromObject(data: any, obj: StandardTextModule): StandardTextModule;
    /**
     * Constructs a new <code>StandardTextModule</code>.
     * A standard headline and body text.
     * @alias module:apluscontent_v2020_11_01/model/StandardTextModule
     * @class
     * @param body {ParagraphComponent}
     */
    constructor(body: ParagraphComponent);
    body: ParagraphComponent;
    /**
     * @member {TextComponent} headline
     * @type {TextComponent}
     */
    headline: TextComponent;
}
import { ParagraphComponent } from './ParagraphComponent.js';
import { TextComponent } from './TextComponent.js';
//# sourceMappingURL=StandardTextModule.d.ts.map