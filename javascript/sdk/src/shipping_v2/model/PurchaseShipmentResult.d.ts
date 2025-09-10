/**
 * The PurchaseShipmentResult model module.
 * @module shipping_v2/model/PurchaseShipmentResult
 * @version v2
 */
export class PurchaseShipmentResult {
    /**
     * Constructs a <code>PurchaseShipmentResult</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {PurchaseShipmentResult} obj Optional instance to populate.
     * @return {PurchaseShipmentResult} The populated <code>PurchaseShipmentResult</code> instance.
     */
    static constructFromObject(data: any, obj: PurchaseShipmentResult): PurchaseShipmentResult;
    /**
     * Constructs a new <code>PurchaseShipmentResult</code>.
     * The payload for the purchaseShipment operation.
     * @alias module:shipping_v2/model/PurchaseShipmentResult
     * @class
     * @param shipmentId {String} The unique shipment identifier provided by a shipping service.
     * @param packageDocumentDetails {[PackageDocumentDetail]} A list of post-purchase details about a package that will be shipped using a shipping service.
     * @param promise {Promise}
     */
    constructor(shipmentId: string, packageDocumentDetails: [PackageDocumentDetail], promise: Promise);
    shipmentId: string;
    packageDocumentDetails: [PackageDocumentDetail];
    promise: Promise;
    /**
     * @member {Benefits} benefits
     * @type {Benefits}
     */
    benefits: Benefits;
}
import { PackageDocumentDetail } from './PackageDocumentDetail.js';
import { Promise } from './Promise.js';
import { Benefits } from './Benefits.js';
//# sourceMappingURL=PurchaseShipmentResult.d.ts.map