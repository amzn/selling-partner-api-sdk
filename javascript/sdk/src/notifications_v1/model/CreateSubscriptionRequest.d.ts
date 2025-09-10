/**
 * The CreateSubscriptionRequest model module.
 * @module notifications_v1/model/CreateSubscriptionRequest
 * @version v1
 */
export class CreateSubscriptionRequest {
    /**
     * Constructs a <code>CreateSubscriptionRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {CreateSubscriptionRequest} obj Optional instance to populate.
     * @return {CreateSubscriptionRequest} The populated <code>CreateSubscriptionRequest</code> instance.
     */
    static constructFromObject(data: any, obj: CreateSubscriptionRequest): CreateSubscriptionRequest;
    /**
     * Constructs a new <code>CreateSubscriptionRequest</code>.
     * The request schema for the &#x60;createSubscription&#x60; operation.
     * @alias module:notifications_v1/model/CreateSubscriptionRequest
     * @class
     * @param payloadVersion {String} The version of the payload object to be used in the notification.
     * @param destinationId {String} The identifier for the destination where notifications will be delivered.
     */
    constructor(payloadVersion: string, destinationId: string);
    payloadVersion: string;
    destinationId: string;
    /**
     * @member {ProcessingDirective} processingDirective
     * @type {ProcessingDirective}
     */
    processingDirective: ProcessingDirective;
}
import { ProcessingDirective } from './ProcessingDirective.js';
//# sourceMappingURL=CreateSubscriptionRequest.d.ts.map