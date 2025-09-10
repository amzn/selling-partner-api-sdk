/**
 * The ItemContributorRole model module.
 * @module catalogitems_v2022_04_01/model/ItemContributorRole
 * @version 2022-04-01
 */
export class ItemContributorRole {
    /**
     * Constructs a <code>ItemContributorRole</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {ItemContributorRole} obj Optional instance to populate.
     * @return {ItemContributorRole} The populated <code>ItemContributorRole</code> instance.
     */
    static constructFromObject(data: any, obj: ItemContributorRole): ItemContributorRole;
    /**
     * Constructs a new <code>ItemContributorRole</code>.
     * Role of an individual contributor in the creation of an item, such as author or actor.
     * @alias module:catalogitems_v2022_04_01/model/ItemContributorRole
     * @class
     * @param value {String} Role value for the Amazon catalog item, such as `author` or `actor`.
     */
    constructor(value: string);
    value: string;
    /**
     * Display name of the role in the requested locale, such as `Author` or `Actor`.
     * @member {String} displayName
     * @type {String}
     */
    displayName: string;
}
//# sourceMappingURL=ItemContributorRole.d.ts.map