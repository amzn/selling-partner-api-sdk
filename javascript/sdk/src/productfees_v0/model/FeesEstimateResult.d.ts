/**
 * The FeesEstimateResult model module.
 * @module productfees_v0/model/FeesEstimateResult
 * @version v0
 */
export class FeesEstimateResult {
    /**
     * Constructs a <code>FeesEstimateResult</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {FeesEstimateResult} obj Optional instance to populate.
     * @return {FeesEstimateResult} The populated <code>FeesEstimateResult</code> instance.
     */
    static constructFromObject(data: any, obj: FeesEstimateResult): FeesEstimateResult;
    /**
     * The status of the fee request. Possible values: Success, ClientError, ServiceError.
     * @member {String} status
     * @type {String}
     */
    status: string;
    /**
     * @member {FeesEstimateIdentifier} feesEstimateIdentifier
     * @type {FeesEstimateIdentifier}
     */
    feesEstimateIdentifier: FeesEstimateIdentifier;
    /**
     * @member {FeesEstimate} feesEstimate
     * @type {FeesEstimate}
     */
    feesEstimate: FeesEstimate;
    /**
     * @member {FeesEstimateError} error
     * @type {FeesEstimateError}
     */
    error: FeesEstimateError;
}
import { FeesEstimateIdentifier } from './FeesEstimateIdentifier.js';
import { FeesEstimate } from './FeesEstimate.js';
import { FeesEstimateError } from './FeesEstimateError.js';
//# sourceMappingURL=FeesEstimateResult.d.ts.map