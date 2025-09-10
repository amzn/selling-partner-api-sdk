/**
 * The ShipsFromType model module.
 * @module pricing_v0/model/ShipsFromType
 * @version v0
 */
export class ShipsFromType {
    /**
     * Constructs a <code>ShipsFromType</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {ShipsFromType} obj Optional instance to populate.
     * @return {ShipsFromType} The populated <code>ShipsFromType</code> instance.
     */
    static constructFromObject(data: any, obj: ShipsFromType): ShipsFromType;
    /**
     * The state from where the item is shipped.
     * @member {String} state
     * @type {String}
     */
    state: string;
    /**
     * The country from where the item is shipped.
     * @member {String} country
     * @type {String}
     */
    country: string;
}
//# sourceMappingURL=ShipsFromType.d.ts.map