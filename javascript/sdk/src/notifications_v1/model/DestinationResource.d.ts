/**
 * The DestinationResource model module.
 * @module notifications_v1/model/DestinationResource
 * @version v1
 */
export class DestinationResource {
    /**
     * Constructs a <code>DestinationResource</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {DestinationResource} obj Optional instance to populate.
     * @return {DestinationResource} The populated <code>DestinationResource</code> instance.
     */
    static constructFromObject(data: any, obj: DestinationResource): DestinationResource;
    /**
     * @member {SqsResource} sqs
     * @type {SqsResource}
     */
    sqs: SqsResource;
    /**
     * @member {EventBridgeResource} eventBridge
     * @type {EventBridgeResource}
     */
    eventBridge: EventBridgeResource;
}
import { SqsResource } from './SqsResource.js';
import { EventBridgeResource } from './EventBridgeResource.js';
//# sourceMappingURL=DestinationResource.d.ts.map