/**
 * The StandardComparisonProductBlock model module.
 * @module apluscontent_v2020_11_01/model/StandardComparisonProductBlock
 * @version 2020-11-01
 */
export class StandardComparisonProductBlock {
    /**
     * Constructs a <code>StandardComparisonProductBlock</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {StandardComparisonProductBlock} obj Optional instance to populate.
     * @return {StandardComparisonProductBlock} The populated <code>StandardComparisonProductBlock</code> instance.
     */
    static constructFromObject(data: any, obj: StandardComparisonProductBlock): StandardComparisonProductBlock;
    /**
     * Constructs a new <code>StandardComparisonProductBlock</code>.
     * The A+ Content standard comparison product block.
     * @alias module:apluscontent_v2020_11_01/model/StandardComparisonProductBlock
     * @class
     * @param position {Number} The rank or index of this comparison product block within the module. Different blocks cannot occupy the same position within a single module.
     */
    constructor(position: number);
    position: number;
    /**
     * @member {ImageComponent} image
     * @type {ImageComponent}
     */
    image: ImageComponent;
    /**
     * The comparison product title.
     * @member {String} title
     * @type {String}
     */
    title: string;
    /**
     * The Amazon Standard Identification Number (ASIN).
     * @member {String} asin
     * @type {String}
     */
    asin: string;
    /**
     * When true, indicates that this content block is visually highlighted.
     * @member {Boolean} highlight
     * @type {Boolean}
     */
    highlight: boolean;
    /**
     * Comparison metrics for the product.
     * @member {Array[]} metrics
     * @type {Array[]}
     */
    metrics: any[][];
}
import { ImageComponent } from './ImageComponent.js';
//# sourceMappingURL=StandardComparisonProductBlock.d.ts.map