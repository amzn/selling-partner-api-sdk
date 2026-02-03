/**
 * The CreateClaimRequest model module.
 * @module shipping_v2/model/CreateClaimRequest
 * @version v2
 */
export class CreateClaimRequest {
    /**
     * Constructs a <code>CreateClaimRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {CreateClaimRequest} obj Optional instance to populate.
     * @return {CreateClaimRequest} The populated <code>CreateClaimRequest</code> instance.
     */
    static constructFromObject(data: any, obj: CreateClaimRequest): CreateClaimRequest;
    /**
     * Constructs a new <code>CreateClaimRequest</code>.
     * The request schema for the CreateClaim operation
     * @alias module:shipping_v2/model/CreateClaimRequest
     * @class
     * @param trackingId {String} The carrier generated identifier for a package in a purchased shipment.
     * @param claimReason {ClaimReason}
     * @param settlementType {SettlementType}
     */
    constructor(trackingId: string, claimReason: ClaimReason, settlementType: SettlementType);
    trackingId: string;
    claimReason: ClaimReason;
    settlementType: SettlementType;
    /**
     * @member {Currency} declaredValue
     * @type {Currency}
     */
    declaredValue: Currency;
    /**
     * Applicable for only On Amazon shipments to identify if replacement was sent
     * @member {Boolean} isReplacementPackageSent
     * @type {Boolean}
     */
    isReplacementPackageSent: boolean;
    /**
     * A list of proof URLs for a claim. Basic URL validation will happen for each URLs present in the list
     * @member {Array[]} proofs
     * @type {Array[]}
     */
    proofs: any[][];
}
import { ClaimReason } from './ClaimReason.js';
import { SettlementType } from './SettlementType.js';
import { Currency } from './Currency.js';
//# sourceMappingURL=CreateClaimRequest.d.ts.map