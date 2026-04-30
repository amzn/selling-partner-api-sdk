/**
 * The ItemTaxCollection model module.
 * @module orders_v2026_01_01/model/ItemTaxCollection
 * @version 2026-01-01
 */
export class ItemTaxCollection {
    /**
     * Constructs a <code>ItemTaxCollection</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {ItemTaxCollection} obj Optional instance to populate.
     * @return {ItemTaxCollection} The populated <code>ItemTaxCollection</code> instance.
     */
    static constructFromObject(data: Object, obj: ItemTaxCollection): ItemTaxCollection;
    /**
     * The tax collection model applied to the item.  **Possible values**: - `MARKETPLACE_FACILITATOR` (Tax is withheld and remitted to the taxing authority by Amazon on behalf of the seller)
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
//# sourceMappingURL=ItemTaxCollection.d.ts.map