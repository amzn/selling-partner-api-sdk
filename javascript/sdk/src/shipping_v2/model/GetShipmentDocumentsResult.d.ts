/**
 * The GetShipmentDocumentsResult model module.
 * @module shipping_v2/model/GetShipmentDocumentsResult
 * @version v2
 */
export class GetShipmentDocumentsResult {
    /**
     * Constructs a <code>GetShipmentDocumentsResult</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {GetShipmentDocumentsResult} obj Optional instance to populate.
     * @return {GetShipmentDocumentsResult} The populated <code>GetShipmentDocumentsResult</code> instance.
     */
    static constructFromObject(data: any, obj: GetShipmentDocumentsResult): GetShipmentDocumentsResult;
    /**
     * Constructs a new <code>GetShipmentDocumentsResult</code>.
     * The payload for the getShipmentDocuments operation.
     * @alias module:shipping_v2/model/GetShipmentDocumentsResult
     * @class
     * @param shipmentId {String} The unique shipment identifier provided by a shipping service.
     * @param packageDocumentDetail {PackageDocumentDetail}
     */
    constructor(shipmentId: string, packageDocumentDetail: PackageDocumentDetail);
    shipmentId: string;
    packageDocumentDetail: PackageDocumentDetail;
    /**
     * @member {Benefits} benefits
     * @type {Benefits}
     */
    benefits: Benefits;
}
import { PackageDocumentDetail } from './PackageDocumentDetail.js';
import { Benefits } from './Benefits.js';
//# sourceMappingURL=GetShipmentDocumentsResult.d.ts.map