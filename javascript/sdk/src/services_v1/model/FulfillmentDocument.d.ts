/**
 * The FulfillmentDocument model module.
 * @module services_v1/model/FulfillmentDocument
 * @version v1
 */
export class FulfillmentDocument {
    /**
     * Constructs a <code>FulfillmentDocument</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {FulfillmentDocument} obj Optional instance to populate.
     * @return {FulfillmentDocument} The populated <code>FulfillmentDocument</code> instance.
     */
    static constructFromObject(data: any, obj: FulfillmentDocument): FulfillmentDocument;
    /**
     * The identifier of the upload destination. Get this value by calling the `createServiceDocumentUploadDestination` operation of the Services API.
     * @member {String} uploadDestinationId
     * @type {String}
     */
    uploadDestinationId: string;
    /**
     * Sha256 hash of the file content. This value is used to determine if the file has been corrupted or tampered with during transit.
     * @member {String} contentSha256
     * @type {String}
     */
    contentSha256: string;
}
//# sourceMappingURL=FulfillmentDocument.d.ts.map