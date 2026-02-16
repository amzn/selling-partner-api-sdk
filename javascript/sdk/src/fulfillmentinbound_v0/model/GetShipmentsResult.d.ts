/**
 * The GetShipmentsResult model module.
 * @module fulfillmentinbound_v0/model/GetShipmentsResult
 * @version v0
 */
export class GetShipmentsResult {
    /**
     * Constructs a <code>GetShipmentsResult</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {GetShipmentsResult} obj Optional instance to populate.
     * @return {GetShipmentsResult} The populated <code>GetShipmentsResult</code> instance.
     */
    static constructFromObject(data: any, obj: GetShipmentsResult): GetShipmentsResult;
    /**
     * A list of inbound shipment information.
     * @member {InboundShipmentInfo[]} shipmentData
     * @type {InboundShipmentInfo[]}
     */
    shipmentData: InboundShipmentInfo[];
    /**
     * When present and not empty, pass this string token in the next request to return the next response page.
     * @member {String} nextToken
     * @type {String}
     */
    nextToken: string;
}
import { InboundShipmentInfo } from './InboundShipmentInfo.js';
//# sourceMappingURL=GetShipmentsResult.d.ts.map