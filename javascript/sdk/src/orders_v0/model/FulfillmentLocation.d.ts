/**
 * The FulfillmentLocation model module.
 * @module orders_v0/model/FulfillmentLocation
 * @version v0
 */
export class FulfillmentLocation {
    /**
     * Constructs a <code>FulfillmentLocation</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {FulfillmentLocation} obj Optional instance to populate.
     * @return {FulfillmentLocation} The populated <code>FulfillmentLocation</code> instance.
     */
    static constructFromObject(data: any, obj: FulfillmentLocation): FulfillmentLocation;
    /**
     * The fulfillment location identifier.
     * @member {String} supplySourceId
     * @type {String}
     */
    supplySourceId: string;
}
//# sourceMappingURL=FulfillmentLocation.d.ts.map