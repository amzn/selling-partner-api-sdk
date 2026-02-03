/**
 * The RequestedDocumentSpecification model module.
 * @module shipping_v2/model/RequestedDocumentSpecification
 * @version v2
 */
export class RequestedDocumentSpecification {
    /**
     * Constructs a <code>RequestedDocumentSpecification</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {RequestedDocumentSpecification} obj Optional instance to populate.
     * @return {RequestedDocumentSpecification} The populated <code>RequestedDocumentSpecification</code> instance.
     */
    static constructFromObject(data: any, obj: RequestedDocumentSpecification): RequestedDocumentSpecification;
    /**
     * Constructs a new <code>RequestedDocumentSpecification</code>.
     * The document specifications requested. For calls to the purchaseShipment operation, the shipment purchase fails if the specified document specifications are not among those returned in the response to the getRates operation.
     * @alias module:shipping_v2/model/RequestedDocumentSpecification
     * @class
     * @param format {DocumentFormat}
     * @param size {DocumentSize}
     * @param needFileJoining {Boolean} When true, files should be stitched together. Otherwise, files should be returned separately. Defaults to false.
     * @param requestedDocumentTypes {Array[]} A list of the document types requested.
     */
    constructor(format: DocumentFormat, size: DocumentSize, needFileJoining: boolean, requestedDocumentTypes: any[][]);
    format: DocumentFormat;
    size: DocumentSize;
    needFileJoining: boolean;
    requestedDocumentTypes: any[][];
    /**
     * The dots per inch (DPI) value used in printing. This value represents a measure of the resolution of the document.
     * @member {Number} dpi
     * @type {Number}
     */
    dpi: number;
    /**
     * Indicates the position of the label on the paper. Should be the same value as returned in getRates response.
     * @member {String} pageLayout
     * @type {String}
     */
    pageLayout: string;
    /**
     * @member {RequestedLabelCustomization} requestedLabelCustomization
     * @type {RequestedLabelCustomization}
     */
    requestedLabelCustomization: RequestedLabelCustomization;
}
import { DocumentFormat } from './DocumentFormat.js';
import { DocumentSize } from './DocumentSize.js';
import { RequestedLabelCustomization } from './RequestedLabelCustomization.js';
//# sourceMappingURL=RequestedDocumentSpecification.d.ts.map