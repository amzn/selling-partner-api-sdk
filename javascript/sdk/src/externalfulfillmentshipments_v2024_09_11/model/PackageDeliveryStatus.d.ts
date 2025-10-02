/**
 * The PackageDeliveryStatus model module.
 * @module externalfulfillmentshipments_v2024_09_11/model/PackageDeliveryStatus
 * @version 2024-09-11
 */
export class PackageDeliveryStatus {
    /**
     * Constructs a <code>PackageDeliveryStatus</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {PackageDeliveryStatus} obj Optional instance to populate.
     * @return {PackageDeliveryStatus} The populated <code>PackageDeliveryStatus</code> instance.
     */
    static constructFromObject(data: any, obj: PackageDeliveryStatus): PackageDeliveryStatus;
    /**
     * @member {PackageStatus} status
     * @type {PackageStatus}
     */
    status: PackageStatus;
    /**
     * @member {PackageSubStatus} subStatus
     * @type {PackageSubStatus}
     */
    subStatus: PackageSubStatus;
    /**
     * The reason for the sub-status.
     * @member {String} reason
     * @type {String}
     */
    reason: string;
}
import { PackageStatus } from './PackageStatus.js';
import { PackageSubStatus } from './PackageSubStatus.js';
//# sourceMappingURL=PackageDeliveryStatus.d.ts.map