/**
 * The AmazonPrograms model module.
 * @module orders_v0/model/AmazonPrograms
 * @version v0
 */
export class AmazonPrograms {
    /**
     * Constructs a <code>AmazonPrograms</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {AmazonPrograms} obj Optional instance to populate.
     * @return {AmazonPrograms} The populated <code>AmazonPrograms</code> instance.
     */
    static constructFromObject(data: any, obj: AmazonPrograms): AmazonPrograms;
    /**
     * Constructs a new <code>AmazonPrograms</code>.
     * Contains the list of programs that Amazon associates with an item.  Possible programs are:  - **Subscribe and Save**: Offers recurring, scheduled deliveries to Amazon customers and Amazon Business customers for their frequently ordered products. - **FBM Ship+**: Unlocks expedited shipping without the extra cost. Helps you to provide accurate and fast delivery dates to Amazon customers. You also receive protection from late deliveries, a discount on expedited shipping rates, and cash back when you ship.
     * @alias module:orders_v0/model/AmazonPrograms
     * @class
     * @param programs {[String]} A list of the programs that Amazon associates with the order item.  **Possible values**: `SUBSCRIBE_AND_SAVE`, `FBM_SHIP_PLUS`
     */
    constructor(programs: [string]);
    programs: [string];
}
//# sourceMappingURL=AmazonPrograms.d.ts.map