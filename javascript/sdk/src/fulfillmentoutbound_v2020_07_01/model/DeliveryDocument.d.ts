/**
 * The DeliveryDocument model module.
 * @module fulfillmentoutbound_v2020_07_01/model/DeliveryDocument
 * @version 2020-07-01
 */
export class DeliveryDocument {
    /**
     * Constructs a <code>DeliveryDocument</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {DeliveryDocument} obj Optional instance to populate.
     * @return {DeliveryDocument} The populated <code>DeliveryDocument</code> instance.
     */
    static constructFromObject(data: any, obj: DeliveryDocument): DeliveryDocument;
    /**
     * Constructs a new <code>DeliveryDocument</code>.
     * A delivery document for a package.
     * @alias module:fulfillmentoutbound_v2020_07_01/model/DeliveryDocument
     * @class
     * @param documentType {String} The delivery document type. The only possible value is `DELIVERY_IMAGE`.
     */
    constructor(documentType: string);
    documentType: string;
    /**
     * A URL that you can use to download the document. This URL has a `Content-Type` header. Note that the URL expires after one hour. To get a new URL, you must call the API again.
     * @member {String} url
     * @type {String}
     */
    url: string;
}
//# sourceMappingURL=DeliveryDocument.d.ts.map