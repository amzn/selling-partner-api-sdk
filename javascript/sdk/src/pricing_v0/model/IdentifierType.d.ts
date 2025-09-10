/**
 * The IdentifierType model module.
 * @module pricing_v0/model/IdentifierType
 * @version v0
 */
export class IdentifierType {
    /**
     * Constructs a <code>IdentifierType</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {IdentifierType} obj Optional instance to populate.
     * @return {IdentifierType} The populated <code>IdentifierType</code> instance.
     */
    static constructFromObject(data: any, obj: IdentifierType): IdentifierType;
    /**
     * Constructs a new <code>IdentifierType</code>.
     * Specifies the identifiers used to uniquely identify an item.
     * @alias module:pricing_v0/model/IdentifierType
     * @class
     * @param marketplaceASIN {ASINIdentifier}
     */
    constructor(marketplaceASIN: ASINIdentifier);
    marketplaceASIN: ASINIdentifier;
    /**
     * @member {SellerSKUIdentifier} sKUIdentifier
     * @type {SellerSKUIdentifier}
     */
    sKUIdentifier: SellerSKUIdentifier;
}
import { ASINIdentifier } from './ASINIdentifier.js';
import { SellerSKUIdentifier } from './SellerSKUIdentifier.js';
//# sourceMappingURL=IdentifierType.d.ts.map