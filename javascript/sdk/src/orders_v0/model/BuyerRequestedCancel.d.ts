/**
 * The BuyerRequestedCancel model module.
 * @module orders_v0/model/BuyerRequestedCancel
 * @version v0
 */
export class BuyerRequestedCancel {
    /**
     * Constructs a <code>BuyerRequestedCancel</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {BuyerRequestedCancel} obj Optional instance to populate.
     * @return {BuyerRequestedCancel} The populated <code>BuyerRequestedCancel</code> instance.
     */
    static constructFromObject(data: any, obj: BuyerRequestedCancel): BuyerRequestedCancel;
    /**
     * Indicate whether the buyer has requested cancellation.  **Possible Values**: `true`, `false`.
     * @member {String} isBuyerRequestedCancel
     * @type {String}
     */
    isBuyerRequestedCancel: string;
    /**
     * The reason that the buyer requested cancellation.
     * @member {String} buyerCancelReason
     * @type {String}
     */
    buyerCancelReason: string;
}
//# sourceMappingURL=BuyerRequestedCancel.d.ts.map