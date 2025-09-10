/**
 * The MarketplaceParticipation model module.
 * @module sellers_v1/model/MarketplaceParticipation
 * @version v1
 */
export class MarketplaceParticipation {
    /**
     * Constructs a <code>MarketplaceParticipation</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {MarketplaceParticipation} obj Optional instance to populate.
     * @return {MarketplaceParticipation} The populated <code>MarketplaceParticipation</code> instance.
     */
    static constructFromObject(data: any, obj: MarketplaceParticipation): MarketplaceParticipation;
    /**
     * Constructs a new <code>MarketplaceParticipation</code>.
     * @alias module:sellers_v1/model/MarketplaceParticipation
     * @class
     * @param marketplace {Marketplace}
     * @param participation {Participation}
     * @param storeName {String} The name of the seller's store as displayed in the marketplace.
     */
    constructor(marketplace: Marketplace, participation: Participation, storeName: string);
    marketplace: Marketplace;
    participation: Participation;
    storeName: string;
}
import { Marketplace } from './Marketplace.js';
import { Participation } from './Participation.js';
//# sourceMappingURL=MarketplaceParticipation.d.ts.map