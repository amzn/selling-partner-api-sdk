/**
 * The Document model module.
 * @module externalfulfillmentshipments_v2024_09_11/model/Document
 * @version 2024-09-11
 */
export class Document {
    /**
     * Constructs a <code>Document</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {Document} obj Optional instance to populate.
     * @return {Document} The populated <code>Document</code> instance.
     */
    static constructFromObject(data: any, obj: Document): Document;
    /**
     * The type of the file.
     * @member {String} format
     * @type {String}
     */
    format: string;
    /**
     * Base 64 encoded file contents.
     * @member {String} content
     * @type {String}
     */
    content: string;
}
export namespace Document {
    namespace FormatEnum {
        let ZPL: string;
        let PDF: string;
        let PNG: string;
        let PLAIN_TEXT: string;
    }
    /**
     * *
     */
    type FormatEnum = string;
}
//# sourceMappingURL=Document.d.ts.map