/**
 * The TaxCollection model module.
 * @module orders_v0/model/TaxCollection
 * @version v0
 */
export class TaxCollection {
    /**
     * Constructs a <code>TaxCollection</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {TaxCollection} obj Optional instance to populate.
     * @return {TaxCollection} The populated <code>TaxCollection</code> instance.
     */
    static constructFromObject(data: any, obj: TaxCollection): TaxCollection;
    /**
     * The tax collection model applied to the item.
     * @member {String} model
     * @type {String}
     */
    model: string;
    /**
     * The party responsible for withholding the taxes and remitting them to the taxing authority.
     * @member {String} responsibleParty
     * @type {String}
     */
    responsibleParty: string;
}
export namespace TaxCollection {
    namespace ModelEnum {
        let MarketplaceFacilitator: string;
    }
    /**
     * *
     */
    type ModelEnum = string;
    /**
     * *
     */
    type ResponsiblePartyEnum = string;
    let ResponsiblePartyEnum: {
        /**
           * value: "Amazon Services, Inc."
           * @const
           */
        'Amazon Services, Inc.': string;
    };
}
//# sourceMappingURL=TaxCollection.d.ts.map