/**
 * The DangerousGoodsDetails model module.
 * @module merchantfulfillment_v0/model/DangerousGoodsDetails
 * @version v0
 */
export class DangerousGoodsDetails {
    /**
     * Constructs a <code>DangerousGoodsDetails</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {DangerousGoodsDetails} obj Optional instance to populate.
     * @return {DangerousGoodsDetails} The populated <code>DangerousGoodsDetails</code> instance.
     */
    static constructFromObject(data: any, obj: DangerousGoodsDetails): DangerousGoodsDetails;
    /**
     * The specific UNID of the item being shipped.
     * @member {String} unitedNationsRegulatoryId
     * @type {String}
     */
    unitedNationsRegulatoryId: string;
    /**
     * The specific regulatory class of the shipped item.
     * @member {String} transportationRegulatoryClass
     * @type {String}
     */
    transportationRegulatoryClass: string;
    /**
     * The specific packaging group of the item being shipped.
     * @member {String} packingGroup
     * @type {String}
     */
    packingGroup: string;
    /**
     * The specific packing instruction of the item being shipped.
     * @member {String} packingInstruction
     * @type {String}
     */
    packingInstruction: string;
}
export namespace DangerousGoodsDetails {
    namespace PackingGroupEnum {
        let I: string;
        let II: string;
        let III: string;
    }
    /**
     * *
     */
    type PackingGroupEnum = string;
    namespace PackingInstructionEnum {
        let PI965_SECTION_IA: string;
        let PI965_SECTION_IB: string;
        let PI965_SECTION_II: string;
        let PI966_SECTION_I: string;
        let PI966_SECTION_II: string;
        let PI967_SECTION_I: string;
        let PI967_SECTION_II: string;
        let PI968_SECTION_IA: string;
        let PI968_SECTION_IB: string;
        let PI969_SECTION_I: string;
        let PI969_SECTION_II: string;
        let PI970_SECTION_I: string;
        let PI970_SECTION_II: string;
    }
    /**
     * *
     */
    type PackingInstructionEnum = string;
}
//# sourceMappingURL=DangerousGoodsDetails.d.ts.map