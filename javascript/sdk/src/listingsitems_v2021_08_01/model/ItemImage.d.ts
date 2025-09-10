/**
 * The ItemImage model module.
 * @module listingsitems_v2021_08_01/model/ItemImage
 * @version 2021-08-01
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
     * The image for the listings item.
     * @alias module:listingsitems_v2021_08_01/model/ItemImage
     * @class
     * @param link {String} The link, or URL, to the image.
     * @param height {Number} The height of the image in pixels.
     * @param width {Number} The width of the image in pixels.
     */
    constructor(link: string, height: number, width: number);
    link: string;
    height: number;
    width: number;
}
//# sourceMappingURL=ItemImage.d.ts.map