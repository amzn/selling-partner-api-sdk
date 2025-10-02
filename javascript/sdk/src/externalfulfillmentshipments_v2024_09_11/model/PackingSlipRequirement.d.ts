/**
 * The PackingSlipRequirement model module.
 * @module externalfulfillmentshipments_v2024_09_11/model/PackingSlipRequirement
 * @version 2024-09-11
 */
export class PackingSlipRequirement {
    /**
     * Constructs a <code>PackingSlipRequirement</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {PackingSlipRequirement} obj Optional instance to populate.
     * @return {PackingSlipRequirement} The populated <code>PackingSlipRequirement</code> instance.
     */
    static constructFromObject(data: any, obj: PackingSlipRequirement): PackingSlipRequirement;
    /**
     * Whether the packing slip is required to be attached to the shipment.
     * @member {String} requirement
     * @type {String}
     */
    requirement: string;
    /**
     * The status of the packing slip that is attached to the shipment.
     * @member {String} status
     * @type {String}
     */
    status: string;
}
export namespace PackingSlipRequirement {
    namespace RequirementEnum {
        let REQUIRED: string;
        let NOT_REQUIRED: string;
    }
    /**
     * *
     */
    type RequirementEnum = string;
    namespace StatusEnum {
        let GENERATED: string;
        let NOT_GENERATED: string;
    }
    /**
     * *
     */
    type StatusEnum = string;
}
//# sourceMappingURL=PackingSlipRequirement.d.ts.map