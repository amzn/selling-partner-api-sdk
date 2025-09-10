/**
 * The ItemIdentifier model module.
 * @module catalogitems_v2022_04_01/model/ItemIdentifier
 * @version 2022-04-01
 */
export class ItemIdentifier {
    /**
     * Constructs a <code>ItemIdentifier</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {ItemIdentifier} obj Optional instance to populate.
     * @return {ItemIdentifier} The populated <code>ItemIdentifier</code> instance.
     */
    static constructFromObject(data: any, obj: ItemIdentifier): ItemIdentifier;
    /**
     * Constructs a new <code>ItemIdentifier</code>.
     * The identifier that is associated with the item in the Amazon catalog, such as a UPC or EAN identifier.
     * @alias module:catalogitems_v2022_04_01/model/ItemIdentifier
     * @class
     * @param identifierType {String} Type of identifier, such as UPC, EAN, or ISBN.
     * @param identifier {String} Identifier of the item.
     */
    constructor(identifierType: string, identifier: string);
    identifierType: string;
    identifier: string;
}
//# sourceMappingURL=ItemIdentifier.d.ts.map