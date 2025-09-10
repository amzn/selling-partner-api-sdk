/**
 * The ProductTypeVersion model module.
 * @module producttypedefinitions_v2020_09_01/model/ProductTypeVersion
 * @version 2020-09-01
 */
export class ProductTypeVersion {
    /**
     * Constructs a <code>ProductTypeVersion</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {ProductTypeVersion} obj Optional instance to populate.
     * @return {ProductTypeVersion} The populated <code>ProductTypeVersion</code> instance.
     */
    static constructFromObject(data: any, obj: ProductTypeVersion): ProductTypeVersion;
    /**
     * Constructs a new <code>ProductTypeVersion</code>.
     * The version details for an Amazon product type.
     * @alias module:producttypedefinitions_v2020_09_01/model/ProductTypeVersion
     * @class
     * @param version {String} Version identifier.
     * @param latest {Boolean} When true, the version indicated by the version identifier is the latest available for the Amazon product type.
     */
    constructor(version: string, latest: boolean);
    version: string;
    latest: boolean;
    /**
     * When true, the version indicated by the version identifier is the prerelease (release candidate) for the Amazon product type.
     * @member {Boolean} releaseCandidate
     * @type {Boolean}
     */
    releaseCandidate: boolean;
}
//# sourceMappingURL=ProductTypeVersion.d.ts.map