/**
 * The BrowseNodeResponse model module.
 * @module customerFeedback_2024_06_01/model/BrowseNodeResponse
 * @version 2024-06-01
 */
export class BrowseNodeResponse {
    /**
     * Constructs a <code>BrowseNodeResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {BrowseNodeResponse} obj Optional instance to populate.
     * @return {BrowseNodeResponse} The populated <code>BrowseNodeResponse</code> instance.
     */
    static constructFromObject(data: any, obj: BrowseNodeResponse): BrowseNodeResponse;
    /**
     * Constructs a new <code>BrowseNodeResponse</code>.
     * The response for the &#x60;getItemBrowseNode&#x60; operation.
     * @alias module:customerFeedback_2024_06_01/model/BrowseNodeResponse
     * @class
     * @param browseNodeId {String} A browse node id is the unique identifier of a given browse node. A browse node is a location in a browse tree that is used for navigation, product classification, and website content.
     * @param displayName {String} The display name of the browse node as visible on the Amazon retail website.
     */
    constructor(browseNodeId: string, displayName: string);
    browseNodeId: string;
    displayName: string;
}
//# sourceMappingURL=BrowseNodeResponse.d.ts.map