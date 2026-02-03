/**
 * The PackageDocumentDetail model module.
 * @module shipping_v2/model/PackageDocumentDetail
 * @version v2
 */
export class PackageDocumentDetail {
    /**
     * Constructs a <code>PackageDocumentDetail</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {PackageDocumentDetail} obj Optional instance to populate.
     * @return {PackageDocumentDetail} The populated <code>PackageDocumentDetail</code> instance.
     */
    static constructFromObject(data: any, obj: PackageDocumentDetail): PackageDocumentDetail;
    /**
     * Constructs a new <code>PackageDocumentDetail</code>.
     * The post-purchase details of a package that will be shipped using a shipping service.
     * @alias module:shipping_v2/model/PackageDocumentDetail
     * @class
     * @param packageClientReferenceId {String} A client provided unique identifier for a package being shipped. This value should be saved by the client to pass as a parameter to the getShipmentDocuments operation.
     * @param packageDocuments {Array[]} A list of documents related to a package.
     */
    constructor(packageClientReferenceId: string, packageDocuments: any[][]);
    packageClientReferenceId: string;
    packageDocuments: any[][];
    /**
     * The carrier generated identifier for a package in a purchased shipment.
     * @member {String} trackingId
     * @type {String}
     */
    trackingId: string;
}
//# sourceMappingURL=PackageDocumentDetail.d.ts.map