/**
 * The DistributionIneligibleReason model module.
 * @module awd_v2024_05_09/model/DistributionIneligibleReason
 * @version 2024-05-09
 */
export class DistributionIneligibleReason {
    /**
     * Constructs a <code>DistributionIneligibleReason</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {DistributionIneligibleReason} obj Optional instance to populate.
     * @return {DistributionIneligibleReason} The populated <code>DistributionIneligibleReason</code> instance.
     */
    static constructFromObject(data: any, obj: DistributionIneligibleReason): DistributionIneligibleReason;
    /**
     * Constructs a new <code>DistributionIneligibleReason</code>.
     * Execution errors associated with the replenishment order. This field will be populated if the order failed validation.
     * @alias module:awd_v2024_05_09/model/DistributionIneligibleReason
     * @class
     * @param failureCode {String} Failure code details of the error.
     * @param failureReasons {String[]} Failure reasons of the error.
     */
    constructor(failureCode: string, failureReasons: string[]);
    failureCode: string;
    failureReasons: string[];
    /**
     * SKU associated with the error.
     * @member {String} sku
     * @type {String}
     */
    sku: string;
}
//# sourceMappingURL=DistributionIneligibleReason.d.ts.map