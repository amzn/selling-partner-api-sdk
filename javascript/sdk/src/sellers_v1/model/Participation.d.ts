/**
 * The Participation model module.
 * @module sellers_v1/model/Participation
 * @version v1
 */
export class Participation {
    /**
     * Constructs a <code>Participation</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {Participation} obj Optional instance to populate.
     * @return {Participation} The populated <code>Participation</code> instance.
     */
    static constructFromObject(data: any, obj: Participation): Participation;
    /**
     * Constructs a new <code>Participation</code>.
     * Information that is specific to a seller in a marketplace.
     * @alias module:sellers_v1/model/Participation
     * @class
     * @param isParticipating {Boolean} If `true`, the seller participates in the marketplace. Otherwise `false`.
     * @param hasSuspendedListings {Boolean} Specifies if the seller has suspended listings. `true` if the seller Listing Status is set to Inactive, otherwise `false`.
     */
    constructor(isParticipating: boolean, hasSuspendedListings: boolean);
    isParticipating: boolean;
    hasSuspendedListings: boolean;
}
//# sourceMappingURL=Participation.d.ts.map