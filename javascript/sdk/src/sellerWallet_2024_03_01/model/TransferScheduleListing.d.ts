/**
 * The TransferScheduleListing model module.
 * @module sellerWallet_2024_03_01/model/TransferScheduleListing
 * @version 2024-03-01
 */
export class TransferScheduleListing {
    /**
     * Constructs a <code>TransferScheduleListing</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {TransferScheduleListing} obj Optional instance to populate.
     * @return {TransferScheduleListing} The populated <code>TransferScheduleListing</code> instance.
     */
    static constructFromObject(data: Object, obj: TransferScheduleListing): TransferScheduleListing;
    /**
     * Constructs a new <code>TransferScheduleListing</code>.
     * A list of transfer schedules.
     * @alias module:sellerWallet_2024_03_01/model/TransferScheduleListing
     * @class
     * @param transferSchedules {TransferSchedule[]} A list of transfer schedules.
     */
    constructor(transferSchedules: TransferSchedule[]);
    transferSchedules: TransferSchedule[];
    /**
     * A token that you use to retrieve the next page of results. The response includes `nextPageToken` when the number of results exceeds 100. To get the next page of results, call the operation with this token and include the same arguments as the call that produced the token. To get a complete list, call this operation until `nextPageToken` is null. Note that this operation can return empty pages.
     * @member {String} nextPageToken
     * @type {String}
     */
    nextPageToken: string;
}
import { TransferSchedule } from './TransferSchedule.js';
//# sourceMappingURL=TransferScheduleListing.d.ts.map