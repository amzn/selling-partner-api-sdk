/**
 * The LinkedAsset model module.
 * @module services_v1/model/LinkedAsset
 * @version v1
 */
export class LinkedAsset {
    /**
     * Constructs a <code>LinkedAsset</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {LinkedAsset} obj Optional instance to populate.
     * @return {LinkedAsset} The populated <code>LinkedAsset</code> instance.
     */
    static constructFromObject(data: Object, obj: LinkedAsset): LinkedAsset;
    /**
     * The type of the linked asset. For example: `VEHICLE`.
     * @member {String} assetType
     * @type {String}
     */
    assetType: string;
    /**
     * The name of the linked asset. For example: `2024 Polaris Slingshot SLR AutoDrive`.
     * @member {String} assetName
     * @type {String}
     */
    assetName: string;
    /**
     * Additional attributes of the linked asset, such as vehicle make, model, year, and engine details.
     * @member {Object} additionalAttributes
     * @type {Object}
     */
    additionalAttributes: Object;
}
//# sourceMappingURL=LinkedAsset.d.ts.map