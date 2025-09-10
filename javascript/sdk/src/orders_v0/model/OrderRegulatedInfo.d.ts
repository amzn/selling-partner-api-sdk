/**
 * The OrderRegulatedInfo model module.
 * @module orders_v0/model/OrderRegulatedInfo
 * @version v0
 */
export class OrderRegulatedInfo {
    /**
     * Constructs a <code>OrderRegulatedInfo</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {OrderRegulatedInfo} obj Optional instance to populate.
     * @return {OrderRegulatedInfo} The populated <code>OrderRegulatedInfo</code> instance.
     */
    static constructFromObject(data: any, obj: OrderRegulatedInfo): OrderRegulatedInfo;
    /**
     * Constructs a new <code>OrderRegulatedInfo</code>.
     * The order&#39;s regulated information along with its verification status.
     * @alias module:orders_v0/model/OrderRegulatedInfo
     * @class
     * @param amazonOrderId {String} An Amazon-defined order identifier, in 3-7-7 format.
     * @param regulatedInformation {RegulatedInformation}
     * @param requiresDosageLabel {Boolean} When true, the order requires attaching a dosage information label when shipped.
     * @param regulatedOrderVerificationStatus {RegulatedOrderVerificationStatus}
     */
    constructor(amazonOrderId: string, regulatedInformation: RegulatedInformation, requiresDosageLabel: boolean, regulatedOrderVerificationStatus: RegulatedOrderVerificationStatus);
    amazonOrderId: string;
    regulatedInformation: RegulatedInformation;
    requiresDosageLabel: boolean;
    regulatedOrderVerificationStatus: RegulatedOrderVerificationStatus;
}
import { RegulatedInformation } from './RegulatedInformation.js';
import { RegulatedOrderVerificationStatus } from './RegulatedOrderVerificationStatus.js';
//# sourceMappingURL=OrderRegulatedInfo.d.ts.map