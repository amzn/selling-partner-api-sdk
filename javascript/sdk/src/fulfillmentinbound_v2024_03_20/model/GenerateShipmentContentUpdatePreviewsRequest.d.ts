/**
 * The GenerateShipmentContentUpdatePreviewsRequest model module.
 * @module fulfillmentinbound_v2024_03_20/model/GenerateShipmentContentUpdatePreviewsRequest
 * @version 2024-03-20
 */
export class GenerateShipmentContentUpdatePreviewsRequest {
    /**
     * Constructs a <code>GenerateShipmentContentUpdatePreviewsRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {GenerateShipmentContentUpdatePreviewsRequest} obj Optional instance to populate.
     * @return {GenerateShipmentContentUpdatePreviewsRequest} The populated <code>GenerateShipmentContentUpdatePreviewsRequest</code> instance.
     */
    static constructFromObject(data: any, obj: GenerateShipmentContentUpdatePreviewsRequest): GenerateShipmentContentUpdatePreviewsRequest;
    /**
     * Constructs a new <code>GenerateShipmentContentUpdatePreviewsRequest</code>.
     * The &#x60;GenerateShipmentContentUpdatePreviews&#x60; request.
     * @alias module:fulfillmentinbound_v2024_03_20/model/GenerateShipmentContentUpdatePreviewsRequest
     * @class
     * @param boxes {Array[]} A list of boxes that will be present in the shipment after the update.
     * @param items {Array[]} A list of all items that will be present in the shipment after the update.
     */
    constructor(boxes: any[][], items: any[][]);
    boxes: any[][];
    items: any[][];
}
//# sourceMappingURL=GenerateShipmentContentUpdatePreviewsRequest.d.ts.map