/**
 * The CreateFulfillmentReturnResult model module.
 * @module fulfillmentoutbound_v2020_07_01/model/CreateFulfillmentReturnResult
 * @version 2020-07-01
 */
export class CreateFulfillmentReturnResult {
    /**
     * Constructs a <code>CreateFulfillmentReturnResult</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {CreateFulfillmentReturnResult} obj Optional instance to populate.
     * @return {CreateFulfillmentReturnResult} The populated <code>CreateFulfillmentReturnResult</code> instance.
     */
    static constructFromObject(data: any, obj: CreateFulfillmentReturnResult): CreateFulfillmentReturnResult;
    /**
     * An array of items that Amazon accepted for return. Returns empty if no items were accepted for return.
     * @member {[ReturnItem]} returnItems
     * @type {[ReturnItem]}
     */
    returnItems: [ReturnItem];
    /**
     * An array of invalid return item information.
     * @member {[InvalidReturnItem]} invalidReturnItems
     * @type {[InvalidReturnItem]}
     */
    invalidReturnItems: [InvalidReturnItem];
    /**
     * An array of return authorization information.
     * @member {[ReturnAuthorization]} returnAuthorizations
     * @type {[ReturnAuthorization]}
     */
    returnAuthorizations: [ReturnAuthorization];
}
import { ReturnItem } from './ReturnItem.js';
import { InvalidReturnItem } from './InvalidReturnItem.js';
import { ReturnAuthorization } from './ReturnAuthorization.js';
//# sourceMappingURL=CreateFulfillmentReturnResult.d.ts.map