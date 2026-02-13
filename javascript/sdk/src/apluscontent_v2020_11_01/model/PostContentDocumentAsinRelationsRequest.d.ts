/**
 * The PostContentDocumentAsinRelationsRequest model module.
 * @module apluscontent_v2020_11_01/model/PostContentDocumentAsinRelationsRequest
 * @version 2020-11-01
 */
export class PostContentDocumentAsinRelationsRequest {
    /**
     * Constructs a <code>PostContentDocumentAsinRelationsRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {PostContentDocumentAsinRelationsRequest} obj Optional instance to populate.
     * @return {PostContentDocumentAsinRelationsRequest} The populated <code>PostContentDocumentAsinRelationsRequest</code> instance.
     */
    static constructFromObject(data: any, obj: PostContentDocumentAsinRelationsRequest): PostContentDocumentAsinRelationsRequest;
    /**
     * Constructs a new <code>PostContentDocumentAsinRelationsRequest</code>.
     * @alias module:apluscontent_v2020_11_01/model/PostContentDocumentAsinRelationsRequest
     * @class
     * @param asinSet {[String]} The set of ASINs.
     */
    constructor(asinSet: [string]);
    asinSet: string[];
}
//# sourceMappingURL=PostContentDocumentAsinRelationsRequest.d.ts.map