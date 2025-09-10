/**
 * The PrintOption model module.
 * @module shipping_v2/model/PrintOption
 * @version v2
 */
export class PrintOption {
    /**
     * Constructs a <code>PrintOption</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {PrintOption} obj Optional instance to populate.
     * @return {PrintOption} The populated <code>PrintOption</code> instance.
     */
    static constructFromObject(data: any, obj: PrintOption): PrintOption;
    /**
     * Constructs a new <code>PrintOption</code>.
     * The format options available for a label.
     * @alias module:shipping_v2/model/PrintOption
     * @class
     * @param supportedPageLayouts {[String]} A list of the supported page layout options for a document.
     * @param supportedFileJoiningOptions {[Boolean]} A list of the supported needFileJoining boolean values for a document.
     * @param supportedDocumentDetails {[SupportedDocumentDetail]} A list of the supported documented details.
     */
    constructor(supportedPageLayouts: [string], supportedFileJoiningOptions: [boolean], supportedDocumentDetails: [SupportedDocumentDetail]);
    supportedPageLayouts: [string];
    supportedFileJoiningOptions: [boolean];
    supportedDocumentDetails: [SupportedDocumentDetail];
    /**
     * A list of the supported DPI options for a document.
     * @member {[Number]} supportedDPIs
     * @type {[Number]}
     */
    supportedDPIs: [number];
}
import { SupportedDocumentDetail } from './SupportedDocumentDetail.js';
//# sourceMappingURL=PrintOption.d.ts.map