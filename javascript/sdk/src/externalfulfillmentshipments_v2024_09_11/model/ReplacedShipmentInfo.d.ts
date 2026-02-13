/**
 * The ReplacedShipmentInfo model module.
 * @module externalfulfillmentshipments_v2024_09_11/model/ReplacedShipmentInfo
 * @version 2024-09-11
 */
export class ReplacedShipmentInfo {
    /**
     * Constructs a <code>ReplacedShipmentInfo</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {ReplacedShipmentInfo} obj Optional instance to populate.
     * @return {ReplacedShipmentInfo} The populated <code>ReplacedShipmentInfo</code> instance.
     */
    static constructFromObject(data: any, obj: ReplacedShipmentInfo): ReplacedShipmentInfo;
    /**
     * Constructs a new <code>ReplacedShipmentInfo</code>.
     * Details of the original shipment if &#x60;shipmentType&#x60; is either &#x60;REPLACEMENT&#x60; or &#x60;EXCHANGE&#x60;.
     * @alias module:externalfulfillmentshipments_v2024_09_11/model/ReplacedShipmentInfo
     * @class
     * @param id {String} The original shipment's ID.
     * @param locationId {String} The original shipment's location ID.
     * @param marketplaceAttributes {MarketplaceAttributes}
     */
    constructor(id: string, locationId: string, marketplaceAttributes: MarketplaceAttributes);
    id: string;
    locationId: string;
    marketplaceAttributes: MarketplaceAttributes;
    /**
     * The line items from the original shipment that corresponds to this shipment.
     * @member {OriginalLineItem[]} originalLineItems
     * @type {OriginalLineItem[]}
     */
    originalLineItems: OriginalLineItem[];
}
import { MarketplaceAttributes } from './MarketplaceAttributes.js';
import { OriginalLineItem } from './OriginalLineItem.js';
//# sourceMappingURL=ReplacedShipmentInfo.d.ts.map