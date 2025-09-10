/**
 * The DestinationResourceSpecification model module.
 * @module notifications_v1/model/DestinationResourceSpecification
 * @version v1
 */
export class DestinationResourceSpecification {
    /**
     * Constructs a <code>DestinationResourceSpecification</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {DestinationResourceSpecification} obj Optional instance to populate.
     * @return {DestinationResourceSpecification} The populated <code>DestinationResourceSpecification</code> instance.
     */
    static constructFromObject(data: any, obj: DestinationResourceSpecification): DestinationResourceSpecification;
    /**
     * @member {SqsResource} sqs
     * @type {SqsResource}
     */
    sqs: SqsResource;
    /**
     * @member {EventBridgeResourceSpecification} eventBridge
     * @type {EventBridgeResourceSpecification}
     */
    eventBridge: EventBridgeResourceSpecification;
}
import { SqsResource } from './SqsResource.js';
import { EventBridgeResourceSpecification } from './EventBridgeResourceSpecification.js';
//# sourceMappingURL=DestinationResourceSpecification.d.ts.map