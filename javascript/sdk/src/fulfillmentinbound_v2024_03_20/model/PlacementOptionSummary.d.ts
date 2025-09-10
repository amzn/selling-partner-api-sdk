/**
 * The PlacementOptionSummary model module.
 * @module fulfillmentinbound_v2024_03_20/model/PlacementOptionSummary
 * @version 2024-03-20
 */
export class PlacementOptionSummary {
    /**
     * Constructs a <code>PlacementOptionSummary</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {PlacementOptionSummary} obj Optional instance to populate.
     * @return {PlacementOptionSummary} The populated <code>PlacementOptionSummary</code> instance.
     */
    static constructFromObject(data: any, obj: PlacementOptionSummary): PlacementOptionSummary;
    /**
     * Constructs a new <code>PlacementOptionSummary</code>.
     * Summary information about a placement option.
     * @alias module:fulfillmentinbound_v2024_03_20/model/PlacementOptionSummary
     * @class
     * @param placementOptionId {String} The identifier of a placement option. A placement option represents the shipment splits and destinations of SKUs.
     * @param status {String} The status of a placement option. Possible values: `OFFERED`, `ACCEPTED`.
     */
    constructor(placementOptionId: string, status: string);
    placementOptionId: string;
    status: string;
}
//# sourceMappingURL=PlacementOptionSummary.d.ts.map