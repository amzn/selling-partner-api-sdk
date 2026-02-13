/**
 * The InventoryUpdate model module.
 * @module vendordfinventory_v1/model/InventoryUpdate
 * @version v1
 */
export class InventoryUpdate {
    /**
     * Constructs a <code>InventoryUpdate</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {InventoryUpdate} obj Optional instance to populate.
     * @return {InventoryUpdate} The populated <code>InventoryUpdate</code> instance.
     */
    static constructFromObject(data: any, obj: InventoryUpdate): InventoryUpdate;
    /**
     * Constructs a new <code>InventoryUpdate</code>.
     * Inventory details required to update some or all items for the requested warehouse.
     * @alias module:vendordfinventory_v1/model/InventoryUpdate
     * @class
     * @param sellingParty {PartyIdentification}
     * @param isFullUpdate {Boolean} When true, this request contains a full feed. Otherwise, this request contains a partial feed. When sending a full feed, you must send information about all items in the warehouse. Any items not in the full feed are updated as not available. When sending a partial feed, only include the items that need an update to inventory. The status of other items will remain unchanged.
     * @param items {ItemDetails[]} A list of inventory items with updated details, including quantity available.
     */
    constructor(sellingParty: PartyIdentification, isFullUpdate: boolean, items: ItemDetails[]);
    sellingParty: PartyIdentification;
    isFullUpdate: boolean;
    items: ItemDetails[];
}
import { PartyIdentification } from './PartyIdentification.js';
import { ItemDetails } from './ItemDetails.js';
//# sourceMappingURL=InventoryUpdate.d.ts.map