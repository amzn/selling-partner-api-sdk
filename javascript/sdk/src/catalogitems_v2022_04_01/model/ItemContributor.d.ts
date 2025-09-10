/**
 * The ItemContributor model module.
 * @module catalogitems_v2022_04_01/model/ItemContributor
 * @version 2022-04-01
 */
export class ItemContributor {
    /**
     * Constructs a <code>ItemContributor</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {ItemContributor} obj Optional instance to populate.
     * @return {ItemContributor} The populated <code>ItemContributor</code> instance.
     */
    static constructFromObject(data: any, obj: ItemContributor): ItemContributor;
    /**
     * Constructs a new <code>ItemContributor</code>.
     * Individual contributor to the creation of an item, such as an author or actor.
     * @alias module:catalogitems_v2022_04_01/model/ItemContributor
     * @class
     * @param role {ItemContributorRole}
     * @param value {String} Name of the contributor, such as `Jane Austen`.
     */
    constructor(role: ItemContributorRole, value: string);
    role: ItemContributorRole;
    value: string;
}
import { ItemContributorRole } from './ItemContributorRole.js';
//# sourceMappingURL=ItemContributor.d.ts.map