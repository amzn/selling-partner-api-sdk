/**
 * The PlacementOption model module.
 * @module fulfillmentinbound_v2024_03_20/model/PlacementOption
 * @version 2024-03-20
 */
export class PlacementOption {
    /**
     * Constructs a <code>PlacementOption</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {PlacementOption} obj Optional instance to populate.
     * @return {PlacementOption} The populated <code>PlacementOption</code> instance.
     */
    static constructFromObject(data: any, obj: PlacementOption): PlacementOption;
    /**
     * Constructs a new <code>PlacementOption</code>.
     * Contains information pertaining to the placement of the contents of an inbound plan and the related costs.
     * @alias module:fulfillmentinbound_v2024_03_20/model/PlacementOption
     * @class
     * @param discounts {Array[]} Discount for the offered option.
     * @param fees {Array[]} The fee for the offered option.
     * @param placementOptionId {String} The identifier of a placement option. A placement option represents the shipment splits and destinations of SKUs.
     * @param shipmentIds {Array[]} Shipment ids.
     * @param status {String} The status of a placement option. Possible values: `OFFERED`, `ACCEPTED`, `EXPIRED`.
     */
    constructor(discounts: any[][], fees: any[][], placementOptionId: string, shipmentIds: any[][], status: string);
    discounts: any[][];
    fees: any[][];
    placementOptionId: string;
    shipmentIds: any[][];
    status: string;
    /**
     * The expiration date of the placement option. In [ISO 8601](https://developer-docs.amazon.com/sp-api/docs/iso-8601) datetime format with pattern `yyyy-MM-ddTHH:mm:ss.sssZ`.
     * @member {Date} expiration
     * @type {Date}
     */
    expiration: Date;
}
//# sourceMappingURL=PlacementOption.d.ts.map