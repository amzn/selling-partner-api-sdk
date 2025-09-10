/**
 * The SqsResource model module.
 * @module notifications_v1/model/SqsResource
 * @version v1
 */
export class SqsResource {
    /**
     * Constructs a <code>SqsResource</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {SqsResource} obj Optional instance to populate.
     * @return {SqsResource} The populated <code>SqsResource</code> instance.
     */
    static constructFromObject(data: any, obj: SqsResource): SqsResource;
    /**
     * Constructs a new <code>SqsResource</code>.
     * The information required to create an Amazon Simple Queue Service (Amazon SQS) queue destination.
     * @alias module:notifications_v1/model/SqsResource
     * @class
     * @param arn {String} The Amazon Resource Name (ARN) associated with the SQS queue.
     */
    constructor(arn: string);
    arn: string;
}
//# sourceMappingURL=SqsResource.d.ts.map