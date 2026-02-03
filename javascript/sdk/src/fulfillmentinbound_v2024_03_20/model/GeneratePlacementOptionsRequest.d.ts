/**
 * The GeneratePlacementOptionsRequest model module.
 * @module fulfillmentinbound_v2024_03_20/model/GeneratePlacementOptionsRequest
 * @version 2024-03-20
 */
export class GeneratePlacementOptionsRequest {
    /**
     * Constructs a <code>GeneratePlacementOptionsRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {GeneratePlacementOptionsRequest} obj Optional instance to populate.
     * @return {GeneratePlacementOptionsRequest} The populated <code>GeneratePlacementOptionsRequest</code> instance.
     */
    static constructFromObject(data: any, obj: GeneratePlacementOptionsRequest): GeneratePlacementOptionsRequest;
    /**
     * Custom placement options you want to add to the plan. This is only used for the India (IN - A21TJRUUN4KGV) marketplace.
     * @member {Array[]} customPlacement
     * @type {Array[]}
     */
    customPlacement: any[][];
}
//# sourceMappingURL=GeneratePlacementOptionsRequest.d.ts.map