/**
 * The TextComponent model module.
 * @module apluscontent_v2020_11_01/model/TextComponent
 * @version 2020-11-01
 */
export class TextComponent {
    /**
     * Constructs a <code>TextComponent</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {TextComponent} obj Optional instance to populate.
     * @return {TextComponent} The populated <code>TextComponent</code> instance.
     */
    static constructFromObject(data: any, obj: TextComponent): TextComponent;
    /**
     * Constructs a new <code>TextComponent</code>.
     * Rich text content.
     * @alias module:apluscontent_v2020_11_01/model/TextComponent
     * @class
     * @param value {String} The actual plain text.
     */
    constructor(value: string);
    value: string;
    /**
     * A set of content decorators.
     * @member {Array[]} decoratorSet
     * @type {Array[]}
     */
    decoratorSet: any[][];
}
//# sourceMappingURL=TextComponent.d.ts.map