/**
 * The RejectedOrder model module.
 * @module easyship_v2022_03_23/model/RejectedOrder
 * @version 2022-03-23
 */
export class RejectedOrder {
    /**
     * Constructs a <code>RejectedOrder</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {RejectedOrder} obj Optional instance to populate.
     * @return {RejectedOrder} The populated <code>RejectedOrder</code> instance.
     */
    static constructFromObject(data: any, obj: RejectedOrder): RejectedOrder;
    /**
     * Constructs a new <code>RejectedOrder</code>.
     * A order which we couldn&#39;t schedule on your behalf. It contains its id, and information on the error.
     * @alias module:easyship_v2022_03_23/model/RejectedOrder
     * @class
     * @param amazonOrderId {String} An Amazon-defined order identifier. Identifies the order that the seller wants to deliver using Amazon Easy Ship.
     */
    constructor(amazonOrderId: string);
    amazonOrderId: string;
    /**
     * @member {Error} error
     * @type {Error}
     */
    error: Error;
}
import { Error } from './Error.js';
//# sourceMappingURL=RejectedOrder.d.ts.map