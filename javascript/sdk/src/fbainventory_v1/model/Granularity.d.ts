/**
 * The Granularity model module.
 * @module fbainventory_v1/model/Granularity
 * @version v1
 */
export class Granularity {
    /**
     * Constructs a <code>Granularity</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {Granularity} obj Optional instance to populate.
     * @return {Granularity} The populated <code>Granularity</code> instance.
     */
    static constructFromObject(data: any, obj: Granularity): Granularity;
    /**
     * The granularity type for the inventory aggregation level.
     * @member {String} granularityType
     * @type {String}
     */
    granularityType: string;
    /**
     * The granularity ID for the specified granularity type. When granularityType is Marketplace, specify the marketplaceId.
     * @member {String} granularityId
     * @type {String}
     */
    granularityId: string;
}
//# sourceMappingURL=Granularity.d.ts.map