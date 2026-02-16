/**
 * The ScopeOfWork model module.
 * @module services_v1/model/ScopeOfWork
 * @version v1
 */
export class ScopeOfWork {
    /**
     * Constructs a <code>ScopeOfWork</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {ScopeOfWork} obj Optional instance to populate.
     * @return {ScopeOfWork} The populated <code>ScopeOfWork</code> instance.
     */
    static constructFromObject(data: any, obj: ScopeOfWork): ScopeOfWork;
    /**
     * The Amazon Standard Identification Number (ASIN) of the service job.
     * @member {String} asin
     * @type {String}
     */
    asin: string;
    /**
     * The title of the service job.
     * @member {String} title
     * @type {String}
     */
    title: string;
    /**
     * The number of service jobs.
     * @member {Number} quantity
     * @type {Number}
     */
    quantity: number;
    /**
     * A list of skills required to perform the job.
     * @member {String[]} requiredSkills
     * @type {String[]}
     */
    requiredSkills: string[];
}
//# sourceMappingURL=ScopeOfWork.d.ts.map