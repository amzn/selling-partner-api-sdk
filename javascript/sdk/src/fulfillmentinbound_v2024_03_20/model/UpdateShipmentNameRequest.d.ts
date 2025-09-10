/**
 * The UpdateShipmentNameRequest model module.
 * @module fulfillmentinbound_v2024_03_20/model/UpdateShipmentNameRequest
 * @version 2024-03-20
 */
export class UpdateShipmentNameRequest {
    /**
     * Constructs a <code>UpdateShipmentNameRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {UpdateShipmentNameRequest} obj Optional instance to populate.
     * @return {UpdateShipmentNameRequest} The populated <code>UpdateShipmentNameRequest</code> instance.
     */
    static constructFromObject(data: any, obj: UpdateShipmentNameRequest): UpdateShipmentNameRequest;
    /**
     * Constructs a new <code>UpdateShipmentNameRequest</code>.
     * The &#x60;updateShipmentName&#x60; request.
     * @alias module:fulfillmentinbound_v2024_03_20/model/UpdateShipmentNameRequest
     * @class
     * @param name {String} A human-readable name to update the shipment name to.
     */
    constructor(name: string);
    name: string;
}
//# sourceMappingURL=UpdateShipmentNameRequest.d.ts.map