/**
 * The ClientReferenceDetail model module.
 * @module shipping_v2/model/ClientReferenceDetail
 * @version v2
 */
export class ClientReferenceDetail {
    /**
     * Constructs a <code>ClientReferenceDetail</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {ClientReferenceDetail} obj Optional instance to populate.
     * @return {ClientReferenceDetail} The populated <code>ClientReferenceDetail</code> instance.
     */
    static constructFromObject(data: any, obj: ClientReferenceDetail): ClientReferenceDetail;
    /**
     * Constructs a new <code>ClientReferenceDetail</code>.
     * Client Reference Details
     * @alias module:shipping_v2/model/ClientReferenceDetail
     * @class
     * @param clientReferenceType {String} Client Reference type.
     * @param clientReferenceId {String} The Client Reference Id.
     */
    constructor(clientReferenceType: string, clientReferenceId: string);
    clientReferenceType: string;
    clientReferenceId: string;
}
export namespace ClientReferenceDetail {
    namespace ClientReferenceTypeEnum {
        let IntegratorShipperId: string;
        let IntegratorMerchantId: string;
    }
    /**
     * *
     */
    type ClientReferenceTypeEnum = string;
}
//# sourceMappingURL=ClientReferenceDetail.d.ts.map