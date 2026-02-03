/**
 * The CreateMarketplaceItemLabelsRequest model module.
 * @module fulfillmentinbound_v2024_03_20/model/CreateMarketplaceItemLabelsRequest
 * @version 2024-03-20
 */
export class CreateMarketplaceItemLabelsRequest {
    /**
     * Constructs a <code>CreateMarketplaceItemLabelsRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {CreateMarketplaceItemLabelsRequest} obj Optional instance to populate.
     * @return {CreateMarketplaceItemLabelsRequest} The populated <code>CreateMarketplaceItemLabelsRequest</code> instance.
     */
    static constructFromObject(data: any, obj: CreateMarketplaceItemLabelsRequest): CreateMarketplaceItemLabelsRequest;
    /**
     * Constructs a new <code>CreateMarketplaceItemLabelsRequest</code>.
     * The &#x60;createMarketplaceItemLabels&#x60; request.
     * @alias module:fulfillmentinbound_v2024_03_20/model/CreateMarketplaceItemLabelsRequest
     * @class
     * @param labelType {LabelPrintType}
     * @param marketplaceId {String} The Marketplace ID. For a list of possible values, refer to [Marketplace IDs](https://developer-docs.amazon.com/sp-api/docs/marketplace-ids).
     * @param mskuQuantities {Array[]} Represents the quantity of an MSKU to print item labels for.
     */
    constructor(labelType: LabelPrintType, marketplaceId: string, mskuQuantities: any[][]);
    labelType: LabelPrintType;
    marketplaceId: string;
    mskuQuantities: any[][];
    /**
     * The height of the item label.
     * @member {Number} height
     * @type {Number}
     */
    height: number;
    /**
     * The locale code constructed from ISO 639 language code and ISO 3166-1 alpha-2 standard of country codes separated by an underscore character.
     * @member {String} localeCode
     * @default 'en_US'
     * @type {String}
     */
    localeCode: string;
    /**
     * @member {ItemLabelPageType} pageType
     * @type {ItemLabelPageType}
     */
    pageType: ItemLabelPageType;
    /**
     * The width of the item label.
     * @member {Number} width
     * @type {Number}
     */
    width: number;
}
import { LabelPrintType } from './LabelPrintType.js';
import { ItemLabelPageType } from './ItemLabelPageType.js';
//# sourceMappingURL=CreateMarketplaceItemLabelsRequest.d.ts.map