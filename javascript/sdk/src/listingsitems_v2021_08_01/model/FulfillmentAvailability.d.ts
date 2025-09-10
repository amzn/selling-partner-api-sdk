/**
 * The FulfillmentAvailability model module.
 * @module listingsitems_v2021_08_01/model/FulfillmentAvailability
 * @version 2021-08-01
 */
export class FulfillmentAvailability {
    /**
     * Constructs a <code>FulfillmentAvailability</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {FulfillmentAvailability} obj Optional instance to populate.
     * @return {FulfillmentAvailability} The populated <code>FulfillmentAvailability</code> instance.
     */
    static constructFromObject(data: any, obj: FulfillmentAvailability): FulfillmentAvailability;
    /**
     * Constructs a new <code>FulfillmentAvailability</code>.
     * The fulfillment availability details for the listings item.
     * @alias module:listingsitems_v2021_08_01/model/FulfillmentAvailability
     * @class
     * @param fulfillmentChannelCode {String} Designates which fulfillment network is used.
     */
    constructor(fulfillmentChannelCode: string);
    fulfillmentChannelCode: string;
    /**
     * The quantity of the item you are making available for sale.
     * @member {Number} quantity
     * @type {Number}
     */
    quantity: number;
}
//# sourceMappingURL=FulfillmentAvailability.d.ts.map