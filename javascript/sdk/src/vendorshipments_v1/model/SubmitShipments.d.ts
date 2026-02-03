/**
 * The SubmitShipments model module.
 * @module vendorshipments_v1/model/SubmitShipments
 * @version v1
 */
export class SubmitShipments {
    /**
     * Constructs a <code>SubmitShipments</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {SubmitShipments} obj Optional instance to populate.
     * @return {SubmitShipments} The populated <code>SubmitShipments</code> instance.
     */
    static constructFromObject(data: any, obj: SubmitShipments): SubmitShipments;
    /**
     * A list of one or more shipments with underlying details.
     * @member {Array[]} shipments
     * @type {Array[]}
     */
    shipments: any[][];
}
//# sourceMappingURL=SubmitShipments.d.ts.map