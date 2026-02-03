/**
 * The DirectPurchaseResult model module.
 * @module shipping_v2/model/DirectPurchaseResult
 * @version v2
 */
export class DirectPurchaseResult {
    /**
     * Constructs a <code>DirectPurchaseResult</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {DirectPurchaseResult} obj Optional instance to populate.
     * @return {DirectPurchaseResult} The populated <code>DirectPurchaseResult</code> instance.
     */
    static constructFromObject(data: any, obj: DirectPurchaseResult): DirectPurchaseResult;
    /**
     * Constructs a new <code>DirectPurchaseResult</code>.
     * The payload for the directPurchaseShipment operation.
     * @alias module:shipping_v2/model/DirectPurchaseResult
     * @class
     * @param shipmentId {String} The unique shipment identifier provided by a shipping service.
     */
    constructor(shipmentId: string);
    shipmentId: string;
    /**
     * A list of post-purchase details about a package that will be shipped using a shipping service.
     * @member {Array[]} packageDocumentDetailList
     * @type {Array[]}
     */
    packageDocumentDetailList: any[][];
}
//# sourceMappingURL=DirectPurchaseResult.d.ts.map