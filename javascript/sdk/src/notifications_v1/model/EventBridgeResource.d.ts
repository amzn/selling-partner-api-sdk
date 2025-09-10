/**
 * The EventBridgeResource model module.
 * @module notifications_v1/model/EventBridgeResource
 * @version v1
 */
export class EventBridgeResource {
    /**
     * Constructs a <code>EventBridgeResource</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {EventBridgeResource} obj Optional instance to populate.
     * @return {EventBridgeResource} The populated <code>EventBridgeResource</code> instance.
     */
    static constructFromObject(data: any, obj: EventBridgeResource): EventBridgeResource;
    /**
     * Constructs a new <code>EventBridgeResource</code>.
     * The Amazon EventBridge destination.
     * @alias module:notifications_v1/model/EventBridgeResource
     * @class
     * @param name {String} The name of the partner event source associated with the destination.
     * @param region {String} The AWS region in which you receive the notifications. For AWS regions that are supported in Amazon EventBridge, refer to [Amazon EventBridge endpoints and quotas](https://docs.aws.amazon.com/general/latest/gr/ev.html).
     * @param accountId {String} The identifier for the AWS account that is responsible for charges related to receiving notifications.
     */
    constructor(name: string, region: string, accountId: string);
    name: string;
    region: string;
    accountId: string;
}
//# sourceMappingURL=EventBridgeResource.d.ts.map