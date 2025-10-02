/**
 * The GiftAttributes model module.
 * @module externalfulfillmentshipments_v2024_09_11/model/GiftAttributes
 * @version 2024-09-11
 */
export class GiftAttributes {
    /**
     * Constructs a <code>GiftAttributes</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {GiftAttributes} obj Optional instance to populate.
     * @return {GiftAttributes} The populated <code>GiftAttributes</code> instance.
     */
    static constructFromObject(data: any, obj: GiftAttributes): GiftAttributes;
    /**
     * Constructs a new <code>GiftAttributes</code>.
     * Information about any gift wrapping that is needed for this line item.
     * @alias module:externalfulfillmentshipments_v2024_09_11/model/GiftAttributes
     * @class
     * @param giftWrapRequirement {RequirementLevel}
     * @param giftMessagePresence {PresenceStatus}
     */
    constructor(giftWrapRequirement: RequirementLevel, giftMessagePresence: PresenceStatus);
    giftWrapRequirement: RequirementLevel;
    giftMessagePresence: PresenceStatus;
    /**
     * The label to be printed on the wrapped gift.
     * @member {String} giftWrapLabel
     * @type {String}
     */
    giftWrapLabel: string;
    /**
     * @member {Document} giftMessage
     * @type {Document}
     */
    giftMessage: Document;
}
import { RequirementLevel } from './RequirementLevel.js';
import { PresenceStatus } from './PresenceStatus.js';
import { Document } from './Document.js';
//# sourceMappingURL=GiftAttributes.d.ts.map