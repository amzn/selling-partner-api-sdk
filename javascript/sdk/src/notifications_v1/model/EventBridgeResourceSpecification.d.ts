/**
 * The EventBridgeResourceSpecification model module.
 * @module notifications_v1/model/EventBridgeResourceSpecification
 * @version v1
 */
export class EventBridgeResourceSpecification {
    /**
     * Constructs a <code>EventBridgeResourceSpecification</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {EventBridgeResourceSpecification} obj Optional instance to populate.
     * @return {EventBridgeResourceSpecification} The populated <code>EventBridgeResourceSpecification</code> instance.
     */
    static constructFromObject(data: any, obj: EventBridgeResourceSpecification): EventBridgeResourceSpecification;
    /**
     * Constructs a new <code>EventBridgeResourceSpecification</code>.
     * The information required to create an Amazon EventBridge destination.
     * @alias module:notifications_v1/model/EventBridgeResourceSpecification
     * @class
     * @param region {String} The AWS region in which you will be receiving the notifications.
     * @param accountId {String} The identifier for the AWS account that is responsible for charges related to receiving notifications.
     */
    constructor(region: string, accountId: string);
    region: string;
    accountId: string;
}
//# sourceMappingURL=EventBridgeResourceSpecification.d.ts.map