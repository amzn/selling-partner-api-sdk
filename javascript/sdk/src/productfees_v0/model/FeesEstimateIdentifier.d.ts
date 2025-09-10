/**
 * The FeesEstimateIdentifier model module.
 * @module productfees_v0/model/FeesEstimateIdentifier
 * @version v0
 */
export class FeesEstimateIdentifier {
    /**
     * Constructs a <code>FeesEstimateIdentifier</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {FeesEstimateIdentifier} obj Optional instance to populate.
     * @return {FeesEstimateIdentifier} The populated <code>FeesEstimateIdentifier</code> instance.
     */
    static constructFromObject(data: any, obj: FeesEstimateIdentifier): FeesEstimateIdentifier;
    /**
     * A marketplace identifier.
     * @member {String} marketplaceId
     * @type {String}
     */
    marketplaceId: string;
    /**
     * The seller identifier.
     * @member {String} sellerId
     * @type {String}
     */
    sellerId: string;
    /**
     * @member {IdType} idType
     * @type {IdType}
     */
    idType: IdType;
    /**
     * The item identifier.
     * @member {String} idValue
     * @type {String}
     */
    idValue: string;
    /**
     * When true, the offer is fulfilled by Amazon.
     * @member {Boolean} isAmazonFulfilled
     * @type {Boolean}
     */
    isAmazonFulfilled: boolean;
    /**
     * @member {PriceToEstimateFees} priceToEstimateFees
     * @type {PriceToEstimateFees}
     */
    priceToEstimateFees: PriceToEstimateFees;
    /**
     * A unique identifier provided by the caller to track this request.
     * @member {String} sellerInputIdentifier
     * @type {String}
     */
    sellerInputIdentifier: string;
    /**
     * @member {OptionalFulfillmentProgram} optionalFulfillmentProgram
     * @type {OptionalFulfillmentProgram}
     */
    optionalFulfillmentProgram: OptionalFulfillmentProgram;
}
import { IdType } from './IdType.js';
import { PriceToEstimateFees } from './PriceToEstimateFees.js';
import { OptionalFulfillmentProgram } from './OptionalFulfillmentProgram.js';
//# sourceMappingURL=FeesEstimateIdentifier.d.ts.map