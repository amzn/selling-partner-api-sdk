/**
 * The UpdateItemComplianceDetailsRequest model module.
 * @module fulfillmentinbound_v2024_03_20/model/UpdateItemComplianceDetailsRequest
 * @version 2024-03-20
 */
export class UpdateItemComplianceDetailsRequest {
    /**
     * Constructs a <code>UpdateItemComplianceDetailsRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {UpdateItemComplianceDetailsRequest} obj Optional instance to populate.
     * @return {UpdateItemComplianceDetailsRequest} The populated <code>UpdateItemComplianceDetailsRequest</code> instance.
     */
    static constructFromObject(data: any, obj: UpdateItemComplianceDetailsRequest): UpdateItemComplianceDetailsRequest;
    /**
     * Constructs a new <code>UpdateItemComplianceDetailsRequest</code>.
     * The &#x60;updateItemComplianceDetails&#x60; request.
     * @alias module:fulfillmentinbound_v2024_03_20/model/UpdateItemComplianceDetailsRequest
     * @class
     * @param msku {String} The merchant SKU, a merchant-supplied identifier for a specific SKU.
     * @param taxDetails {TaxDetails}
     */
    constructor(msku: string, taxDetails: TaxDetails);
    msku: string;
    taxDetails: TaxDetails;
}
import { TaxDetails } from './TaxDetails.js';
//# sourceMappingURL=UpdateItemComplianceDetailsRequest.d.ts.map