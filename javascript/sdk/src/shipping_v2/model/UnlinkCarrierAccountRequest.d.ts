/**
 * The UnlinkCarrierAccountRequest model module.
 * @module shipping_v2/model/UnlinkCarrierAccountRequest
 * @version v2
 */
export class UnlinkCarrierAccountRequest {
    /**
     * Constructs a <code>UnlinkCarrierAccountRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {UnlinkCarrierAccountRequest} obj Optional instance to populate.
     * @return {UnlinkCarrierAccountRequest} The populated <code>UnlinkCarrierAccountRequest</code> instance.
     */
    static constructFromObject(data: any, obj: UnlinkCarrierAccountRequest): UnlinkCarrierAccountRequest;
    /**
     * Object to pass additional information about the MCI Integrator shipperType: List of ClientReferenceDetail
     * @member {Array[]} clientReferenceDetails
     * @type {Array[]}
     */
    clientReferenceDetails: any[][];
    /**
     * Identifier for the seller's carrier account.
     * @member {String} accountId
     * @type {String}
     */
    accountId: string;
}
//# sourceMappingURL=UnlinkCarrierAccountRequest.d.ts.map