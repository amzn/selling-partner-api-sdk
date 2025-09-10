/**
 * The DocumentSize model module.
 * @module shipping_v2/model/DocumentSize
 * @version v2
 */
export class DocumentSize {
    /**
     * Constructs a <code>DocumentSize</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {DocumentSize} obj Optional instance to populate.
     * @return {DocumentSize} The populated <code>DocumentSize</code> instance.
     */
    static constructFromObject(data: any, obj: DocumentSize): DocumentSize;
    /**
     * Constructs a new <code>DocumentSize</code>.
     * The size dimensions of the label.
     * @alias module:shipping_v2/model/DocumentSize
     * @class
     * @param width {Number} The width of the document measured in the units specified.
     * @param length {Number} The length of the document measured in the units specified.
     * @param unit {String} The unit of measurement.
     */
    constructor(width: number, length: number, unit: string);
    width: number;
    length: number;
    unit: string;
}
export namespace DocumentSize {
    namespace UnitEnum {
        let INCH: string;
        let CENTIMETER: string;
    }
    /**
     * *
     */
    type UnitEnum = string;
}
//# sourceMappingURL=DocumentSize.d.ts.map