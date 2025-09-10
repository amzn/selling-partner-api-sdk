/**
 * The GenerateTransportationOptionsRequest model module.
 * @module fulfillmentinbound_v2024_03_20/model/GenerateTransportationOptionsRequest
 * @version 2024-03-20
 */
export class GenerateTransportationOptionsRequest {
    /**
     * Constructs a <code>GenerateTransportationOptionsRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {GenerateTransportationOptionsRequest} obj Optional instance to populate.
     * @return {GenerateTransportationOptionsRequest} The populated <code>GenerateTransportationOptionsRequest</code> instance.
     */
    static constructFromObject(data: any, obj: GenerateTransportationOptionsRequest): GenerateTransportationOptionsRequest;
    /**
     * Constructs a new <code>GenerateTransportationOptionsRequest</code>.
     * The &#x60;generateTransportationOptions&#x60; request.
     * @alias module:fulfillmentinbound_v2024_03_20/model/GenerateTransportationOptionsRequest
     * @class
     * @param placementOptionId {String} The placement option to generate transportation options for.
     * @param shipmentTransportationConfigurations {[ShipmentTransportationConfiguration]} List of shipment transportation configurations.
     */
    constructor(placementOptionId: string, shipmentTransportationConfigurations: [ShipmentTransportationConfiguration]);
    placementOptionId: string;
    shipmentTransportationConfigurations: [ShipmentTransportationConfiguration];
}
import { ShipmentTransportationConfiguration } from './ShipmentTransportationConfiguration.js';
//# sourceMappingURL=GenerateTransportationOptionsRequest.d.ts.map