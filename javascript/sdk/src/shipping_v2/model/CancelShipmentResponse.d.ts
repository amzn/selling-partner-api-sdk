/**
 * The CancelShipmentResponse model module.
 * @module shipping_v2/model/CancelShipmentResponse
 * @version v2
 */
export class CancelShipmentResponse {
    /**
     * Constructs a <code>CancelShipmentResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {CancelShipmentResponse} obj Optional instance to populate.
     * @return {CancelShipmentResponse} The populated <code>CancelShipmentResponse</code> instance.
     */
    static constructFromObject(data: any, obj: CancelShipmentResponse): CancelShipmentResponse;
    /**
     * The payload for the cancelShipment operation.
     * @member {{String: Object}} payload
     * @type {{String: Object}}
     */
    payload: {
        String: any;
    };
}
//# sourceMappingURL=CancelShipmentResponse.d.ts.map