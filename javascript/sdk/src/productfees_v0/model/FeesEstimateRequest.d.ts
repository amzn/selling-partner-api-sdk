/**
 * The FeesEstimateRequest model module.
 * @module productfees_v0/model/FeesEstimateRequest
 * @version v0
 */
export class FeesEstimateRequest {
    /**
     * Constructs a <code>FeesEstimateRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {FeesEstimateRequest} obj Optional instance to populate.
     * @return {FeesEstimateRequest} The populated <code>FeesEstimateRequest</code> instance.
     */
    static constructFromObject(data: any, obj: FeesEstimateRequest): FeesEstimateRequest;
    /**
     * Constructs a new <code>FeesEstimateRequest</code>.
     * A product, marketplace, and proposed price used to request estimated fees.
     * @alias module:productfees_v0/model/FeesEstimateRequest
     * @class
     * @param marketplaceId {String} A marketplace identifier.
     * @param priceToEstimateFees {PriceToEstimateFees}
     * @param identifier {String} A unique identifier provided by the caller to track this request.
     */
    constructor(marketplaceId: string, priceToEstimateFees: PriceToEstimateFees, identifier: string);
    marketplaceId: string;
    priceToEstimateFees: PriceToEstimateFees;
    identifier: string;
    /**
     * When true, the offer is fulfilled by Amazon.
     * @member {Boolean} isAmazonFulfilled
     * @type {Boolean}
     */
    isAmazonFulfilled: boolean;
    /**
     * @member {OptionalFulfillmentProgram} optionalFulfillmentProgram
     * @type {OptionalFulfillmentProgram}
     */
    optionalFulfillmentProgram: OptionalFulfillmentProgram;
}
import { PriceToEstimateFees } from './PriceToEstimateFees.js';
import { OptionalFulfillmentProgram } from './OptionalFulfillmentProgram.js';
//# sourceMappingURL=FeesEstimateRequest.d.ts.map