/**
 * The SerialNumberRequirement model module.
 * @module orders_v2026_01_01/model/SerialNumberRequirement
 * @version 2026-01-01
 */
export class SerialNumberRequirement {
    /**
     * Constructs a <code>SerialNumberRequirement</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {SerialNumberRequirement} obj Optional instance to populate.
     * @return {SerialNumberRequirement} The populated <code>SerialNumberRequirement</code> instance.
     */
    static constructFromObject(data: Object, obj: SerialNumberRequirement): SerialNumberRequirement;
    /**
     * The requirement type for this request.   **Possible values**: `REQUIRED`
     * @member {String} requirementType
     * @type {String}
     */
    requirementType: string;
}
//# sourceMappingURL=SerialNumberRequirement.d.ts.map