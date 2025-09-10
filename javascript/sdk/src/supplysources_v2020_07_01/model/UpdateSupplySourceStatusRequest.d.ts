/**
 * The UpdateSupplySourceStatusRequest model module.
 * @module supplysources_v2020_07_01/model/UpdateSupplySourceStatusRequest
 * @version 2020-07-01
 */
export class UpdateSupplySourceStatusRequest {
    /**
     * Constructs a <code>UpdateSupplySourceStatusRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {UpdateSupplySourceStatusRequest} obj Optional instance to populate.
     * @return {UpdateSupplySourceStatusRequest} The populated <code>UpdateSupplySourceStatusRequest</code> instance.
     */
    static constructFromObject(data: any, obj: UpdateSupplySourceStatusRequest): UpdateSupplySourceStatusRequest;
    /**
     * @member {SupplySourceStatus} status
     * @type {SupplySourceStatus}
     */
    status: SupplySourceStatus;
}
import { SupplySourceStatus } from './SupplySourceStatus.js';
//# sourceMappingURL=UpdateSupplySourceStatusRequest.d.ts.map