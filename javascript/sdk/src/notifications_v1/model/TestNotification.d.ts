/**
 * The TestNotification model module.
 * @module notifications_v1/model/TestNotification
 * @version v1
 */
export class TestNotification {
    /**
     * Constructs a <code>TestNotification</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {TestNotification} obj Optional instance to populate.
     * @return {TestNotification} The populated <code>TestNotification</code> instance.
     */
    static constructFromObject(data: Object, obj: TestNotification): TestNotification;
    /**
     * Constructs a new <code>TestNotification</code>.
     * The describer for the test notification that will be delivered.
     * @alias module:notifications_v1/model/TestNotification
     * @class
     * @param payloadVersion {String} The version of the payload object to be used in the notification.
     */
    constructor(payloadVersion: string);
    payloadVersion: string;
    /**
     * The scenario of the specified notification to be used in the notification payload. If testScenario is empty, a 400 response will be returned back to the developer. The scenarios supported for each notification type can be found in the Selling Partner API Developer Guide.
     * @member {String} testScenario
     * @type {String}
     */
    testScenario: string;
}
//# sourceMappingURL=TestNotification.d.ts.map