/**
 * The Preference model module.
 * @module replenishment_v2022_11_07/model/Preference
 * @version 2022-11-07
 */
export class Preference {
    /**
     * Constructs a <code>Preference</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {Preference} obj Optional instance to populate.
     * @return {Preference} The populated <code>Preference</code> instance.
     */
    static constructFromObject(data: any, obj: Preference): Preference;
    /**
     * Filters the results to only include offers with the auto-enrollment preference specified.
     * @member {Array[]} autoEnrollment
     * @type {Array[]}
     */
    autoEnrollment: any[][];
}
//# sourceMappingURL=Preference.d.ts.map