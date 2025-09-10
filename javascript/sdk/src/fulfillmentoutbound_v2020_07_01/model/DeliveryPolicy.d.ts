/**
 * The DeliveryPolicy model module.
 * @module fulfillmentoutbound_v2020_07_01/model/DeliveryPolicy
 * @version 2020-07-01
 */
export class DeliveryPolicy {
    /**
     * Constructs a <code>DeliveryPolicy</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {DeliveryPolicy} obj Optional instance to populate.
     * @return {DeliveryPolicy} The populated <code>DeliveryPolicy</code> instance.
     */
    static constructFromObject(data: any, obj: DeliveryPolicy): DeliveryPolicy;
    /**
     * @member {DeliveryMessage} message
     * @type {DeliveryMessage}
     */
    message: DeliveryMessage;
}
import { DeliveryMessage } from './DeliveryMessage.js';
//# sourceMappingURL=DeliveryPolicy.d.ts.map