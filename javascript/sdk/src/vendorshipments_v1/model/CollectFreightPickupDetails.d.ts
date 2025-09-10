/**
 * The CollectFreightPickupDetails model module.
 * @module vendorshipments_v1/model/CollectFreightPickupDetails
 * @version v1
 */
export class CollectFreightPickupDetails {
    /**
     * Constructs a <code>CollectFreightPickupDetails</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {CollectFreightPickupDetails} obj Optional instance to populate.
     * @return {CollectFreightPickupDetails} The populated <code>CollectFreightPickupDetails</code> instance.
     */
    static constructFromObject(data: any, obj: CollectFreightPickupDetails): CollectFreightPickupDetails;
    /**
     * Date on which the items can be picked up from vendor warehouse by Buyer used for WePay/Collect vendors.
     * @member {Date} requestedPickUp
     * @type {Date}
     */
    requestedPickUp: Date;
    /**
     * Date on which the items are scheduled to be picked from vendor warehouse by Buyer used for WePay/Collect vendors.
     * @member {Date} scheduledPickUp
     * @type {Date}
     */
    scheduledPickUp: Date;
    /**
     * Date on which the carrier is being scheduled to pickup items from vendor warehouse by Byer used for WePay/Collect vendors.
     * @member {Date} carrierAssignmentDate
     * @type {Date}
     */
    carrierAssignmentDate: Date;
}
//# sourceMappingURL=CollectFreightPickupDetails.d.ts.map