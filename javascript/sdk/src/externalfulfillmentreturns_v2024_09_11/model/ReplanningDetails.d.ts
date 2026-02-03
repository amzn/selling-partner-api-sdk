/**
 * The ReplanningDetails model module.
 * @module externalfulfillmentreturns_v2024_09_11/model/ReplanningDetails
 * @version 2024-09-11
 */
export class ReplanningDetails {
    /**
     * Constructs a <code>ReplanningDetails</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {ReplanningDetails} obj Optional instance to populate.
     * @return {ReplanningDetails} The populated <code>ReplanningDetails</code> instance.
     */
    static constructFromObject(data: any, obj: ReplanningDetails): ReplanningDetails;
    /**
     * A list of all the previous tracking information for the return.
     * @member {Array[]} previousTrackingInfo
     * @type {Array[]}
     */
    previousTrackingInfo: any[][];
}
//# sourceMappingURL=ReplanningDetails.d.ts.map