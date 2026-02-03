/**
 * The FulfillmentInstructions model module.
 * @module orders_v0/model/FulfillmentInstructions
 * @version v0
 */
export class FulfillmentInstructions {
    /**
     * Constructs a <code>FulfillmentInstructions</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {FulfillmentInstructions} obj Optional instance to populate.
     * @return {FulfillmentInstructions} The populated <code>FulfillmentInstructions</code> instance.
     */
    static constructFromObject(data: any, obj: FulfillmentInstructions): FulfillmentInstructions;
    /**
     * Constructs a new <code>FulfillmentInstructions</code>.
     * Contains all fulfillment plans for the order
     * @alias module:orders_v0/model/FulfillmentInstructions
     * @class
     * @param amazonOrderId {String} An Amazon-defined order identifier, in 3-7-7 format.
     */
    constructor(amazonOrderId: string);
    amazonOrderId: string;
    /**
     * List of all fulfillment plans for the given order id
     * @member {Array[]} fulfillmentPlans
     * @type {Array[]}
     */
    fulfillmentPlans: any[][];
}
//# sourceMappingURL=FulfillmentInstructions.d.ts.map