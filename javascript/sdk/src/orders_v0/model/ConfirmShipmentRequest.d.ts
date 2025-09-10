/**
 * The ConfirmShipmentRequest model module.
 * @module orders_v0/model/ConfirmShipmentRequest
 * @version v0
 */
export class ConfirmShipmentRequest {
    /**
     * Constructs a <code>ConfirmShipmentRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {ConfirmShipmentRequest} obj Optional instance to populate.
     * @return {ConfirmShipmentRequest} The populated <code>ConfirmShipmentRequest</code> instance.
     */
    static constructFromObject(data: any, obj: ConfirmShipmentRequest): ConfirmShipmentRequest;
    /**
     * Constructs a new <code>ConfirmShipmentRequest</code>.
     * The request schema for an shipment confirmation.
     * @alias module:orders_v0/model/ConfirmShipmentRequest
     * @class
     * @param packageDetail {PackageDetail}
     * @param marketplaceId {String} The unobfuscated marketplace identifier.
     */
    constructor(packageDetail: PackageDetail, marketplaceId: string);
    packageDetail: PackageDetail;
    marketplaceId: string;
    /**
     * The COD collection method (only supported in the JP marketplace).
     * @member {String} codCollectionMethod
     * @type {String}
     */
    codCollectionMethod: string;
}
export namespace ConfirmShipmentRequest {
    namespace CodCollectionMethodEnum {
        let DirectPayment: string;
    }
    /**
     * *
     */
    type CodCollectionMethodEnum = string;
}
import { PackageDetail } from './PackageDetail.js';
//# sourceMappingURL=ConfirmShipmentRequest.d.ts.map