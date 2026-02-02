/**
 * The Alias model module.
 * @module orders_v2026_01_01/model/Alias
 * @version 2026-01-01
 */
export class Alias {
    /**
     * Constructs a <code>Alias</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {Alias} obj Optional instance to populate.
     * @return {Alias} The populated <code>Alias</code> instance.
     */
    static constructFromObject(data: any, obj: Alias): Alias;
    /**
     * Constructs a new <code>Alias</code>.
     * An alternative identifier that provides a different way to reference the same order.
     * @alias module:orders_v2026_01_01/model/Alias
     * @class
     * @param aliasId {String} The alternative identifier value that can be used to reference this order.
     * @param aliasType {String} The kind of alternative identifier this represents.  **Possible values**: `SELLER_ORDER_ID`
     */
    constructor(aliasId: string, aliasType: string);
    aliasId: string;
    aliasType: string;
}
//# sourceMappingURL=Alias.d.ts.map