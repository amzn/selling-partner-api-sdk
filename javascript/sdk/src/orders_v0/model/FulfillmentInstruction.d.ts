/**
 * The FulfillmentInstruction model module.
 * @module orders_v0/model/FulfillmentInstruction
 * @version v0
 */
export class FulfillmentInstruction {
    /**
     * Constructs a <code>FulfillmentInstruction</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {FulfillmentInstruction} obj Optional instance to populate.
     * @return {FulfillmentInstruction} The populated <code>FulfillmentInstruction</code> instance.
     */
    static constructFromObject(data: any, obj: FulfillmentInstruction): FulfillmentInstruction;
    /**
     * The `sourceId` of the location from where you want the order fulfilled.
     * @member {String} fulfillmentSupplySourceId
     * @type {String}
     */
    fulfillmentSupplySourceId: string;
}
//# sourceMappingURL=FulfillmentInstruction.d.ts.map