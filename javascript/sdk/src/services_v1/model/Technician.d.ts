/**
 * The Technician model module.
 * @module services_v1/model/Technician
 * @version v1
 */
export class Technician {
    /**
     * Constructs a <code>Technician</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {Technician} obj Optional instance to populate.
     * @return {Technician} The populated <code>Technician</code> instance.
     */
    static constructFromObject(data: any, obj: Technician): Technician;
    /**
     * The technician identifier.
     * @member {String} technicianId
     * @type {String}
     */
    technicianId: string;
    /**
     * The name of the technician.
     * @member {String} name
     * @type {String}
     */
    name: string;
}
//# sourceMappingURL=Technician.d.ts.map