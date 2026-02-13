/**
 * The GetShipmentItemsResult model module.
 * @module fulfillmentinbound_v0/model/GetShipmentItemsResult
 * @version v0
 */
export class GetShipmentItemsResult {
    /**
     * Constructs a <code>GetShipmentItemsResult</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {GetShipmentItemsResult} obj Optional instance to populate.
     * @return {GetShipmentItemsResult} The populated <code>GetShipmentItemsResult</code> instance.
     */
    static constructFromObject(data: any, obj: GetShipmentItemsResult): GetShipmentItemsResult;
    /**
     * A list of inbound shipment item information.
     * @member {InboundShipmentItem[]} itemData
     * @type {InboundShipmentItem[]}
     */
    itemData: InboundShipmentItem[];
    /**
     * When present and not empty, pass this string token in the next request to return the next response page.
     * @member {String} nextToken
     * @type {String}
     */
    nextToken: string;
}
import { InboundShipmentItem } from './InboundShipmentItem.js';
//# sourceMappingURL=GetShipmentItemsResult.d.ts.map