/**
 * The PackingSlip model module.
 * @module vendordfshipping_v2021_12_28/model/PackingSlip
 * @version 2021-12-28
 */
export class PackingSlip {
    /**
     * Constructs a <code>PackingSlip</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {PackingSlip} obj Optional instance to populate.
     * @return {PackingSlip} The populated <code>PackingSlip</code> instance.
     */
    static constructFromObject(data: any, obj: PackingSlip): PackingSlip;
    /**
     * Constructs a new <code>PackingSlip</code>.
     * Packing slip information.
     * @alias module:vendordfshipping_v2021_12_28/model/PackingSlip
     * @class
     * @param purchaseOrderNumber {String} Purchase order number of the shipment that the packing slip is for.
     * @param content {String} A Base64 string of the packing slip PDF.
     */
    constructor(purchaseOrderNumber: string, content: string);
    purchaseOrderNumber: string;
    content: string;
    /**
     * The format of the file such as PDF, JPEG etc.
     * @member {String} contentType
     * @type {String}
     */
    contentType: string;
}
export namespace PackingSlip {
    /**
     * *
     */
    type ContentTypeEnum = string;
    let ContentTypeEnum: {
        /**
           * value: "application/pdf"
           * @const
           */
        'application/pdf': string;
    };
}
//# sourceMappingURL=PackingSlip.d.ts.map