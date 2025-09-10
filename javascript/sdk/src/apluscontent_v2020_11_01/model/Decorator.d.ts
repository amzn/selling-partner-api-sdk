/**
 * The Decorator model module.
 * @module apluscontent_v2020_11_01/model/Decorator
 * @version 2020-11-01
 */
export class Decorator {
    /**
     * Constructs a <code>Decorator</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {Decorator} obj Optional instance to populate.
     * @return {Decorator} The populated <code>Decorator</code> instance.
     */
    static constructFromObject(data: any, obj: Decorator): Decorator;
    /**
     * @member {DecoratorType} type
     * @type {DecoratorType}
     */
    type: DecoratorType;
    /**
     * The starting value of this decorator within the content string. Use zero (`0`) for the first value.
     * @member {Number} offset
     * @type {Number}
     */
    offset: number;
    /**
     * The number of content characters to alter with this decorator. Decorators, such as line breaks, can have zero length and fit between characters.
     * @member {Number} length
     * @type {Number}
     */
    length: number;
    /**
     * The relative intensity or variation of this decorator. Decorators, such as bullet-points, can have multiple indentation depths.
     * @member {Number} depth
     * @type {Number}
     */
    depth: number;
}
import { DecoratorType } from './DecoratorType.js';
//# sourceMappingURL=Decorator.d.ts.map