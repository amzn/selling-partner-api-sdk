/**
 * The RegulationReferences model module.
 * @module vendorshipments_v1/model/RegulationReferences
 * @version v1
 */
export class RegulationReferences {
    /**
     * Constructs a <code>RegulationReferences</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {RegulationReferences} obj Optional instance to populate.
     * @return {RegulationReferences} The populated <code>RegulationReferences</code> instance.
     */
    static constructFromObject(data: any, obj: RegulationReferences): RegulationReferences;
    /**
     * The EUDR Due Diligence Reference number from vendor's upstream Due Dilligence Statement (DDS) submitted to EU Commison portal or provided to Onix.
     * @member {String} dueDiligenceReference
     * @type {String}
     */
    dueDiligenceReference: string;
    /**
     * The EUDR Due Diligence Verification number provided by EU Commision associated with submitted DDR.
     * @member {String} dueDiligenceVerification
     * @type {String}
     */
    dueDiligenceVerification: string;
    /**
     * The EUDR Due Diligence Information for EUDR that was already pre-loaded in Vendor Central within Amazon compliance collection experience.
     * @member {String} dueDiligenceInformation
     * @type {String}
     */
    dueDiligenceInformation: string;
    /**
     * The Due Diligence exemption code for EUDR products indicating the item is exempt from due diligence requirements.
     * @member {String} dueDiligenceExemptionCode
     * @type {String}
     */
    dueDiligenceExemptionCode: string;
}
//# sourceMappingURL=RegulationReferences.d.ts.map