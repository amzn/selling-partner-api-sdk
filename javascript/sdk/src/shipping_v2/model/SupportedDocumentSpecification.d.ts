/**
 * The SupportedDocumentSpecification model module.
 * @module shipping_v2/model/SupportedDocumentSpecification
 * @version v2
 */
export class SupportedDocumentSpecification {
    /**
     * Constructs a <code>SupportedDocumentSpecification</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {SupportedDocumentSpecification} obj Optional instance to populate.
     * @return {SupportedDocumentSpecification} The populated <code>SupportedDocumentSpecification</code> instance.
     */
    static constructFromObject(data: any, obj: SupportedDocumentSpecification): SupportedDocumentSpecification;
    /**
     * Constructs a new <code>SupportedDocumentSpecification</code>.
     * Document specification that is supported for a service offering.
     * @alias module:shipping_v2/model/SupportedDocumentSpecification
     * @class
     * @param format {DocumentFormat}
     * @param size {DocumentSize}
     * @param printOptions {[PrintOption]} A list of the format options for a label.
     */
    constructor(format: DocumentFormat, size: DocumentSize, printOptions: [PrintOption]);
    format: DocumentFormat;
    size: DocumentSize;
    printOptions: [PrintOption];
}
import { DocumentFormat } from './DocumentFormat.js';
import { DocumentSize } from './DocumentSize.js';
import { PrintOption } from './PrintOption.js';
//# sourceMappingURL=SupportedDocumentSpecification.d.ts.map