/**
 * The ItemImage model module.
 * @module catalogitems_v2022_04_01/model/ItemImage
 * @version 2022-04-01
 */
export class ItemImage {
    /**
     * Constructs a <code>ItemImage</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {ItemImage} obj Optional instance to populate.
     * @return {ItemImage} The populated <code>ItemImage</code> instance.
     */
    static constructFromObject(data: any, obj: ItemImage): ItemImage;
    /**
     * Constructs a new <code>ItemImage</code>.
     * Image for an item in the Amazon catalog.
     * @alias module:catalogitems_v2022_04_01/model/ItemImage
     * @class
     * @param variant {String} Variant of the image, such as `MAIN` or `PT01`.
     * @param link {String} URL for the image.
     * @param height {Number} Height of the image in pixels.
     * @param width {Number} Width of the image in pixels.
     */
    constructor(variant: string, link: string, height: number, width: number);
    variant: string;
    link: string;
    height: number;
    width: number;
}
export namespace ItemImage {
    namespace VariantEnum {
        let MAIN: string;
        let PT01: string;
        let PT02: string;
        let PT03: string;
        let PT04: string;
        let PT05: string;
        let PT06: string;
        let PT07: string;
        let PT08: string;
        let SWCH: string;
    }
    /**
     * *
     */
    type VariantEnum = string;
}
//# sourceMappingURL=ItemImage.d.ts.map