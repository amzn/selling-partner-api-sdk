/**
 * The PackageStatus model module.
 * @module orders_v2026_01_01/model/PackageStatus
 * @version 2026-01-01
 */
export class PackageStatus {
    /**
     * Constructs a <code>PackageStatus</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {PackageStatus} obj Optional instance to populate.
     * @return {PackageStatus} The populated <code>PackageStatus</code> instance.
     */
    static constructFromObject(data: any, obj: PackageStatus): PackageStatus;
    /**
     * Constructs a new <code>PackageStatus</code>.
     * Current status and detailed tracking information for a shipping package throughout the delivery process.
     * @alias module:orders_v2026_01_01/model/PackageStatus
     * @class
     * @param status {String} Primary status classification of the package in the shipping workflow.
     */
    constructor(status: string);
    status: string;
    /**
     * Granular status information providing specific details about the package's current location and handling stage.   **Possible values:** - `PENDING_SCHEDULE` (Package awaiting pickup scheduling) - `PENDING_PICK_UP` (Package ready for carrier collection from seller) - `PENDING_DROP_OFF` (Package awaiting seller delivery to carrier) - `LABEL_CANCELLED` (Shipping label canceled by seller) - `PICKED_UP` (Package collected by carrier from seller location) - `DROPPED_OFF` (Package delivered to carrier by seller) - `AT_ORIGIN_FC` (Package at originating fulfillment center) - `AT_DESTINATION_FC` (Package at destination fulfillment center) - `DELIVERED` (Package successfully delivered to recipient) - `REJECTED_BY_BUYER` (Package refused by intended recipient) - `UNDELIVERABLE` (Package cannot be delivered due to address or access issues) - `RETURNING_TO_SELLER` (Package in transit back to seller) - `RETURNED_TO_SELLER` (Package successfully returned to seller) - `LOST` (Package location unknown or confirmed lost) - `OUT_FOR_DELIVERY` (Package on delivery vehicle for final delivery) - `DAMAGED` (Package damaged during transit)
     * @member {String} detailedStatus
     * @type {String}
     */
    detailedStatus: string;
}
export namespace PackageStatus {
    namespace StatusEnum {
        let PENDING: string;
        let IN_TRANSIT: string;
        let SHIPPED: string;
        let DELIVERED: string;
        let CANCELLED: string;
        let UNDELIVERABLE: string;
    }
    /**
     * *
     */
    type StatusEnum = string;
}
//# sourceMappingURL=PackageStatus.d.ts.map