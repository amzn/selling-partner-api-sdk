/**
 * The SupportedDocumentDetail model module.
 * @module shipping_v2/model/SupportedDocumentDetail
 * @version v2
 */
export class SupportedDocumentDetail {
    /**
     * Constructs a <code>SupportedDocumentDetail</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {SupportedDocumentDetail} obj Optional instance to populate.
     * @return {SupportedDocumentDetail} The populated <code>SupportedDocumentDetail</code> instance.
     */
    static constructFromObject(data: any, obj: SupportedDocumentDetail): SupportedDocumentDetail;
    /**
     * Constructs a new <code>SupportedDocumentDetail</code>.
     * The supported document types for a service offering.
     * @alias module:shipping_v2/model/SupportedDocumentDetail
     * @class
     * @param name {DocumentType}
     * @param isMandatory {Boolean} When true, the supported document type is required.
     */
    constructor(name: DocumentType, isMandatory: boolean);
    name: DocumentType;
    isMandatory: boolean;
}
import { DocumentType } from './DocumentType.js';
//# sourceMappingURL=SupportedDocumentDetail.d.ts.map