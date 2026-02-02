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
     * The reference number from the vendor's EUDR Due Diligence Statement (DDS) submitted to the EU Commission portal or provided to Amazon through ONIX feed.
     * @member {String} dueDiligenceReference
     * @type {String}
     */
    dueDiligenceReference: string;
    /**
     * The EUDR Due Diligence verification number provided by the EU Commission for the submitted DDS.
     * @member {String} dueDiligenceVerification
     * @type {String}
     */
    dueDiligenceVerification: string;
    /**
     * The EUDR Due Diligence information pre-loaded in Vendor Central.
     * @member {String} dueDiligenceInformation
     * @type {String}
     */
    dueDiligenceInformation: string;
    /**
     * The exemption code for EUDR products exempt from due diligence requirements.
     * @member {String} dueDiligenceExemptionCode
     * @type {String}
     */
    dueDiligenceExemptionCode: string;
}
//# sourceMappingURL=RegulationReferences.d.ts.map