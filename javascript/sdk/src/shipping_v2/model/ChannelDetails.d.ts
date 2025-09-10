/**
 * The ChannelDetails model module.
 * @module shipping_v2/model/ChannelDetails
 * @version v2
 */
export class ChannelDetails {
    /**
     * Constructs a <code>ChannelDetails</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {ChannelDetails} obj Optional instance to populate.
     * @return {ChannelDetails} The populated <code>ChannelDetails</code> instance.
     */
    static constructFromObject(data: any, obj: ChannelDetails): ChannelDetails;
    /**
     * Constructs a new <code>ChannelDetails</code>.
     * Shipment source channel related information.
     * @alias module:shipping_v2/model/ChannelDetails
     * @class
     * @param channelType {ChannelType}
     */
    constructor(channelType: ChannelType);
    channelType: ChannelType;
    /**
     * @member {AmazonOrderDetails} amazonOrderDetails
     * @type {AmazonOrderDetails}
     */
    amazonOrderDetails: AmazonOrderDetails;
    /**
     * @member {AmazonShipmentDetails} amazonShipmentDetails
     * @type {AmazonShipmentDetails}
     */
    amazonShipmentDetails: AmazonShipmentDetails;
}
import { ChannelType } from './ChannelType.js';
import { AmazonOrderDetails } from './AmazonOrderDetails.js';
import { AmazonShipmentDetails } from './AmazonShipmentDetails.js';
//# sourceMappingURL=ChannelDetails.d.ts.map