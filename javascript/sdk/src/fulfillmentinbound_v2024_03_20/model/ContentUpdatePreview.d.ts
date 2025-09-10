/**
 * The ContentUpdatePreview model module.
 * @module fulfillmentinbound_v2024_03_20/model/ContentUpdatePreview
 * @version 2024-03-20
 */
export class ContentUpdatePreview {
    /**
     * Constructs a <code>ContentUpdatePreview</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {ContentUpdatePreview} obj Optional instance to populate.
     * @return {ContentUpdatePreview} The populated <code>ContentUpdatePreview</code> instance.
     */
    static constructFromObject(data: any, obj: ContentUpdatePreview): ContentUpdatePreview;
    /**
     * Constructs a new <code>ContentUpdatePreview</code>.
     * Preview of the changes that will be applied to the shipment.
     * @alias module:fulfillmentinbound_v2024_03_20/model/ContentUpdatePreview
     * @class
     * @param contentUpdatePreviewId {String} Identifier of a content update preview.
     * @param expiration {Date} The time at which the content update expires. In [ISO 8601](https://developer-docs.amazon.com/sp-api/docs/iso-8601) datetime format with pattern `yyyy-MM-ddTHH:mm:ss.sssZ`.
     * @param requestedUpdates {RequestedUpdates}
     * @param transportationOption {TransportationOption}
     */
    constructor(contentUpdatePreviewId: string, expiration: Date, requestedUpdates: RequestedUpdates, transportationOption: TransportationOption);
    contentUpdatePreviewId: string;
    expiration: Date;
    requestedUpdates: RequestedUpdates;
    transportationOption: TransportationOption;
}
import { RequestedUpdates } from './RequestedUpdates.js';
import { TransportationOption } from './TransportationOption.js';
//# sourceMappingURL=ContentUpdatePreview.d.ts.map