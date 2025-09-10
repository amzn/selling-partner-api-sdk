/**
 * The Subscription model module.
 * @module notifications_v1/model/Subscription
 * @version v1
 */
export class Subscription {
    /**
     * Constructs a <code>Subscription</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {Subscription} obj Optional instance to populate.
     * @return {Subscription} The populated <code>Subscription</code> instance.
     */
    static constructFromObject(data: any, obj: Subscription): Subscription;
    /**
     * Constructs a new <code>Subscription</code>.
     * Information about the subscription.
     * @alias module:notifications_v1/model/Subscription
     * @class
     * @param subscriptionId {String} The subscription identifier generated when the subscription is created.
     * @param payloadVersion {String} The version of the payload object to be used in the notification.
     * @param destinationId {String} The identifier for the destination where notifications will be delivered.
     */
    constructor(subscriptionId: string, payloadVersion: string, destinationId: string);
    subscriptionId: string;
    payloadVersion: string;
    destinationId: string;
    /**
     * @member {ProcessingDirective} processingDirective
     * @type {ProcessingDirective}
     */
    processingDirective: ProcessingDirective;
}
import { ProcessingDirective } from './ProcessingDirective.js';
//# sourceMappingURL=Subscription.d.ts.map