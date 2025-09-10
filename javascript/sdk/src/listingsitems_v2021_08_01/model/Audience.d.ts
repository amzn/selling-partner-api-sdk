/**
 * The Audience model module.
 * @module listingsitems_v2021_08_01/model/Audience
 * @version 2021-08-01
 */
export class Audience {
    /**
     * Constructs a <code>Audience</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {Audience} obj Optional instance to populate.
     * @return {Audience} The populated <code>Audience</code> instance.
     */
    static constructFromObject(data: any, obj: Audience): Audience;
    /**
     * Name of the audience an offer is applicable to.   Common values:   * 'ALL' - Standard offer audience for buyers on Amazon retail websites.   * 'B2B' - Offer audience for Amazon Business website buyers.
     * @member {String} value
     * @type {String}
     */
    value: string;
    /**
     * Localized display name for the audience.
     * @member {String} displayName
     * @type {String}
     */
    displayName: string;
}
//# sourceMappingURL=Audience.d.ts.map