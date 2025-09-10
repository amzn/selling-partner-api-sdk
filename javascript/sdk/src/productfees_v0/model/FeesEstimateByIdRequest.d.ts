/**
 * The FeesEstimateByIdRequest model module.
 * @module productfees_v0/model/FeesEstimateByIdRequest
 * @version v0
 */
export class FeesEstimateByIdRequest {
    /**
     * Constructs a <code>FeesEstimateByIdRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {FeesEstimateByIdRequest} obj Optional instance to populate.
     * @return {FeesEstimateByIdRequest} The populated <code>FeesEstimateByIdRequest</code> instance.
     */
    static constructFromObject(data: any, obj: FeesEstimateByIdRequest): FeesEstimateByIdRequest;
    /**
     * Constructs a new <code>FeesEstimateByIdRequest</code>.
     * A product, marketplace, and proposed price used to request estimated fees.
     * @alias module:productfees_v0/model/FeesEstimateByIdRequest
     * @class
     * @param idType {IdType}
     * @param idValue {String} The item identifier.
     */
    constructor(idType: IdType, idValue: string);
    idType: IdType;
    idValue: string;
    /**
     * @member {FeesEstimateRequest} feesEstimateRequest
     * @type {FeesEstimateRequest}
     */
    feesEstimateRequest: FeesEstimateRequest;
}
import { IdType } from './IdType.js';
import { FeesEstimateRequest } from './FeesEstimateRequest.js';
//# sourceMappingURL=FeesEstimateByIdRequest.d.ts.map