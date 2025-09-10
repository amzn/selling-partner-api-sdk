/**
 * The AccessPointDetails model module.
 * @module shipping_v2/model/AccessPointDetails
 * @version v2
 */
export class AccessPointDetails {
    /**
     * Constructs a <code>AccessPointDetails</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {AccessPointDetails} obj Optional instance to populate.
     * @return {AccessPointDetails} The populated <code>AccessPointDetails</code> instance.
     */
    static constructFromObject(data: any, obj: AccessPointDetails): AccessPointDetails;
    /**
     * Unique identifier for the access point
     * @member {String} accessPointId
     * @type {String}
     */
    accessPointId: string;
}
//# sourceMappingURL=AccessPointDetails.d.ts.map