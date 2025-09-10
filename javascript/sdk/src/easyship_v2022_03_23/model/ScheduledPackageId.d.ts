/**
 * The ScheduledPackageId model module.
 * @module easyship_v2022_03_23/model/ScheduledPackageId
 * @version 2022-03-23
 */
export class ScheduledPackageId {
    /**
     * Constructs a <code>ScheduledPackageId</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {ScheduledPackageId} obj Optional instance to populate.
     * @return {ScheduledPackageId} The populated <code>ScheduledPackageId</code> instance.
     */
    static constructFromObject(data: any, obj: ScheduledPackageId): ScheduledPackageId;
    /**
     * Constructs a new <code>ScheduledPackageId</code>.
     * Identifies the scheduled package to be updated.
     * @alias module:easyship_v2022_03_23/model/ScheduledPackageId
     * @class
     * @param amazonOrderId {String} An Amazon-defined order identifier. Identifies the order that the seller wants to deliver using Amazon Easy Ship.
     */
    constructor(amazonOrderId: string);
    amazonOrderId: string;
    /**
     * An Amazon-defined identifier for the scheduled package.
     * @member {String} packageId
     * @type {String}
     */
    packageId: string;
}
//# sourceMappingURL=ScheduledPackageId.d.ts.map