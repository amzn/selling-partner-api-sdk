/**
 * The OutboundCapability model module.
 * @module supplysources_v2020_07_01/model/OutboundCapability
 * @version 2020-07-01
 */
export class OutboundCapability {
    /**
     * Constructs a <code>OutboundCapability</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {OutboundCapability} obj Optional instance to populate.
     * @return {OutboundCapability} The populated <code>OutboundCapability</code> instance.
     */
    static constructFromObject(data: any, obj: OutboundCapability): OutboundCapability;
    /**
     * @member {Boolean} isSupported
     * @type {Boolean}
     */
    isSupported: boolean;
    /**
     * @member {OperationalConfiguration} operationalConfiguration
     * @type {OperationalConfiguration}
     */
    operationalConfiguration: OperationalConfiguration;
    /**
     * @member {ReturnLocation} returnLocation
     * @type {ReturnLocation}
     */
    returnLocation: ReturnLocation;
    /**
     * @member {DeliveryChannel} deliveryChannel
     * @type {DeliveryChannel}
     */
    deliveryChannel: DeliveryChannel;
    /**
     * @member {PickupChannel} pickupChannel
     * @type {PickupChannel}
     */
    pickupChannel: PickupChannel;
}
import { OperationalConfiguration } from './OperationalConfiguration.js';
import { ReturnLocation } from './ReturnLocation.js';
import { DeliveryChannel } from './DeliveryChannel.js';
import { PickupChannel } from './PickupChannel.js';
//# sourceMappingURL=OutboundCapability.d.ts.map