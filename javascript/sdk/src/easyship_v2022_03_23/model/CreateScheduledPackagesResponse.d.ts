/**
 * The CreateScheduledPackagesResponse model module.
 * @module easyship_v2022_03_23/model/CreateScheduledPackagesResponse
 * @version 2022-03-23
 */
export class CreateScheduledPackagesResponse {
    /**
     * Constructs a <code>CreateScheduledPackagesResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {CreateScheduledPackagesResponse} obj Optional instance to populate.
     * @return {CreateScheduledPackagesResponse} The populated <code>CreateScheduledPackagesResponse</code> instance.
     */
    static constructFromObject(data: any, obj: CreateScheduledPackagesResponse): CreateScheduledPackagesResponse;
    /**
     * A list of packages. Refer to the `Package` object.
     * @member {[Package]} scheduledPackages
     * @type {[Package]}
     */
    scheduledPackages: [Package];
    /**
     * A list of orders we couldn't scheduled on your behalf. Each element contains the reason and details on the error.
     * @member {[RejectedOrder]} rejectedOrders
     * @type {[RejectedOrder]}
     */
    rejectedOrders: [RejectedOrder];
    /**
     * A pre-signed URL for the zip document containing the shipping labels and the documents enabled for your marketplace.
     * @member {String} printableDocumentsUrl
     * @type {String}
     */
    printableDocumentsUrl: string;
}
import { Package } from './Package.js';
import { RejectedOrder } from './RejectedOrder.js';
//# sourceMappingURL=CreateScheduledPackagesResponse.d.ts.map