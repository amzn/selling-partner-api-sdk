/**
 * The PackageDocument model module.
 * @module shipping_v2/model/PackageDocument
 * @version v2
 */
export class PackageDocument {
    /**
     * Constructs a <code>PackageDocument</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {PackageDocument} obj Optional instance to populate.
     * @return {PackageDocument} The populated <code>PackageDocument</code> instance.
     */
    static constructFromObject(data: any, obj: PackageDocument): PackageDocument;
    /**
     * Constructs a new <code>PackageDocument</code>.
     * A document related to a package.
     * @alias module:shipping_v2/model/PackageDocument
     * @class
     * @param type {DocumentType}
     * @param format {DocumentFormat}
     * @param contents {String} A Base64 encoded string of the file contents.
     */
    constructor(type: DocumentType, format: DocumentFormat, contents: string);
    type: DocumentType;
    format: DocumentFormat;
    contents: string;
}
import { DocumentType } from './DocumentType.js';
import { DocumentFormat } from './DocumentFormat.js';
//# sourceMappingURL=PackageDocument.d.ts.map