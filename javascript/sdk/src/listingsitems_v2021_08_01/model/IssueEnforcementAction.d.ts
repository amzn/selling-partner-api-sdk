/**
 * The IssueEnforcementAction model module.
 * @module listingsitems_v2021_08_01/model/IssueEnforcementAction
 * @version 2021-08-01
 */
export class IssueEnforcementAction {
    /**
     * Constructs a <code>IssueEnforcementAction</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {IssueEnforcementAction} obj Optional instance to populate.
     * @return {IssueEnforcementAction} The populated <code>IssueEnforcementAction</code> instance.
     */
    static constructFromObject(data: any, obj: IssueEnforcementAction): IssueEnforcementAction;
    /**
     * Constructs a new <code>IssueEnforcementAction</code>.
     * The enforcement action taken by Amazon that affect the publishing or status of a listing
     * @alias module:listingsitems_v2021_08_01/model/IssueEnforcementAction
     * @class
     * @param action {String} The enforcement action name.   Possible values:   * `LISTING_SUPPRESSED` - This enforcement takes down the current listing item's buyability.   * `ATTRIBUTE_SUPPRESSED` - An attribute's value on the listing item is invalid, which causes it to be rejected by Amazon.   * `CATALOG_ITEM_REMOVED` - This catalog item is inactive on Amazon, and all offers against it in the applicable marketplace are non-buyable.   * `SEARCH_SUPPRESSED` - This value indicates that the catalog item is hidden from search results.
     */
    constructor(action: string);
    action: string;
}
//# sourceMappingURL=IssueEnforcementAction.d.ts.map