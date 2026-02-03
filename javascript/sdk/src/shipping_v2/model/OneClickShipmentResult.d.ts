/**
 * The OneClickShipmentResult model module.
 * @module shipping_v2/model/OneClickShipmentResult
 * @version v2
 */
export class OneClickShipmentResult {
    /**
     * Constructs a <code>OneClickShipmentResult</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {OneClickShipmentResult} obj Optional instance to populate.
     * @return {OneClickShipmentResult} The populated <code>OneClickShipmentResult</code> instance.
     */
    static constructFromObject(data: any, obj: OneClickShipmentResult): OneClickShipmentResult;
    /**
     * Constructs a new <code>OneClickShipmentResult</code>.
     * The payload for the OneClickShipment API.
     * @alias module:shipping_v2/model/OneClickShipmentResult
     * @class
     * @param shipmentId {String} The unique shipment identifier provided by a shipping service.
     * @param packageDocumentDetails {Array[]} A list of post-purchase details about a package that will be shipped using a shipping service.
     * @param promise {Promise}
     * @param carrier {Carrier}
     * @param service {Service}
     * @param totalCharge {Currency}
     */
    constructor(shipmentId: string, packageDocumentDetails: any[][], promise: Promise, carrier: Carrier, service: Service, totalCharge: Currency);
    shipmentId: string;
    packageDocumentDetails: any[][];
    promise: Promise;
    carrier: Carrier;
    service: Service;
    totalCharge: Currency;
}
import { Promise } from './Promise.js';
import { Carrier } from './Carrier.js';
import { Service } from './Service.js';
import { Currency } from './Currency.js';
//# sourceMappingURL=OneClickShipmentResult.d.ts.map