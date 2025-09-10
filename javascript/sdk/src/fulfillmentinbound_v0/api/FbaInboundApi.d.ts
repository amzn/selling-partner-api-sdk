/**
* FbaInbound service.
* @module fulfillmentinbound_v0/api/FbaInboundApi
* @version v0
*/
export class FbaInboundApi {
    /**
      * Constructs a new FbaInboundApi.
      * @alias module:fulfillmentinbound_v0/api/FbaInboundApi
      * @class
      * @param {ApiClient} [apiClient] Optional API client implementation to use,
      * default to {@link ApiClient#instance} if unspecified.
      */
    constructor(apiClient?: ApiClient);
    apiClient: any;
    /**
       * Initialize rate limiters for API operations
       */
    initializeDefaultRateLimiterMap(): void;
    /**
       * Get rate limiter for a specific operation
       * @param {String} operation name
       */
    getRateLimiter(operation: string): any;
    /**
       * Returns a bill of lading for a Less Than Truckload/Full Truckload (LTL/FTL) shipment. The getBillOfLading operation returns PDF document data for printing a bill of lading for an Amazon-partnered Less Than Truckload/Full Truckload (LTL/FTL) inbound shipment.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 2 | 30 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
       * @param {String} shipmentId A shipment identifier originally returned by the createInboundShipmentPlan operation.
       * @return {Promise<GetBillOfLadingResponse>}
       */
    getBillOfLadingWithHttpInfo(shipmentId: string): Promise<GetBillOfLadingResponse>;
    /**
       * Returns a bill of lading for a Less Than Truckload/Full Truckload (LTL/FTL) shipment. The getBillOfLading operation returns PDF document data for printing a bill of lading for an Amazon-partnered Less Than Truckload/Full Truckload (LTL/FTL) inbound shipment.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 2 | 30 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
       * @param {String} shipmentId A shipment identifier originally returned by the createInboundShipmentPlan operation.
       * @return {Promise<GetBillOfLadingResponse>}
       */
    getBillOfLading(shipmentId: string): Promise<GetBillOfLadingResponse>;
    /**
       * Returns package/pallet labels for faster and more accurate shipment processing at the Amazon fulfillment center.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 2 | 30 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
       * @param {String} shipmentId A shipment identifier originally returned by the createInboundShipmentPlan operation.
       * @param {String} pageType The page type to use to print the labels. Submitting a PageType value that is not supported in your marketplace returns an error.
       * @param {String} labelType The type of labels requested.
       * @param {Object} [opts] Optional parameters
       * @param {Number} [opts.numberOfPackages] The number of packages in the shipment.
       * @param {[String]} [opts.packageLabelsToPrint] A list of identifiers that specify packages for which you want package labels printed.  If you provide box content information with the [FBA Inbound Shipment Carton Information Feed](https://developer-docs.amazon.com/sp-api/docs/fulfillment-by-amazon-feed-type-values#fba-inbound-shipment-carton-information-feed), then &#x60;PackageLabelsToPrint&#x60; must match the &#x60;CartonId&#x60; values you provide through that feed. If you provide box content information with the Fulfillment Inbound API v2024-03-20, then &#x60;PackageLabelsToPrint&#x60; must match the &#x60;boxID&#x60; values from the [&#x60;listShipmentBoxes&#x60;](https://developer-docs.amazon.com/sp-api/reference/listshipmentboxes) response. If these values do not match as required, the operation returns the &#x60;IncorrectPackageIdentifier&#x60; error code.
       * @param {Number} [opts.numberOfPallets] The number of pallets in the shipment. This returns four identical labels for each pallet.
       * @param {Number} [opts.pageSize] The page size for paginating through the total packages&#39; labels. This is a required parameter for Non-Partnered LTL Shipments. Max value:1000.
       * @param {Number} [opts.pageStartIndex] The page start index for paginating through the total packages&#39; labels. This is a required parameter for Non-Partnered LTL Shipments.
       * @return {Promise<GetLabelsResponse>}
       */
    getLabelsWithHttpInfo(shipmentId: string, pageType: string, labelType: string, opts?: {
        numberOfPackages?: number;
        packageLabelsToPrint?: [string];
        numberOfPallets?: number;
        pageSize?: number;
        pageStartIndex?: number;
    }): Promise<GetLabelsResponse>;
    /**
       * Returns package/pallet labels for faster and more accurate shipment processing at the Amazon fulfillment center.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 2 | 30 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
       * @param {String} shipmentId A shipment identifier originally returned by the createInboundShipmentPlan operation.
       * @param {String} pageType The page type to use to print the labels. Submitting a PageType value that is not supported in your marketplace returns an error.
       * @param {String} labelType The type of labels requested.
       * @param {Object} [opts] Optional parameters
       * @param {Number} [opts.numberOfPackages] The number of packages in the shipment.
       * @param {[String]} [opts.packageLabelsToPrint] A list of identifiers that specify packages for which you want package labels printed.  If you provide box content information with the [FBA Inbound Shipment Carton Information Feed](https://developer-docs.amazon.com/sp-api/docs/fulfillment-by-amazon-feed-type-values#fba-inbound-shipment-carton-information-feed), then &#x60;PackageLabelsToPrint&#x60; must match the &#x60;CartonId&#x60; values you provide through that feed. If you provide box content information with the Fulfillment Inbound API v2024-03-20, then &#x60;PackageLabelsToPrint&#x60; must match the &#x60;boxID&#x60; values from the [&#x60;listShipmentBoxes&#x60;](https://developer-docs.amazon.com/sp-api/reference/listshipmentboxes) response. If these values do not match as required, the operation returns the &#x60;IncorrectPackageIdentifier&#x60; error code.
       * @param {Number} [opts.numberOfPallets] The number of pallets in the shipment. This returns four identical labels for each pallet.
       * @param {Number} [opts.pageSize] The page size for paginating through the total packages&#39; labels. This is a required parameter for Non-Partnered LTL Shipments. Max value:1000.
       * @param {Number} [opts.pageStartIndex] The page start index for paginating through the total packages&#39; labels. This is a required parameter for Non-Partnered LTL Shipments.
       * @return {Promise<GetLabelsResponse>}
       */
    getLabels(shipmentId: string, pageType: string, labelType: string, opts?: {
        numberOfPackages?: number;
        packageLabelsToPrint?: [string];
        numberOfPallets?: number;
        pageSize?: number;
        pageStartIndex?: number;
    }): Promise<GetLabelsResponse>;
    /**
       * Returns labeling requirements and item preparation instructions to help prepare items for shipment to Amazon&#39;s fulfillment network.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 2 | 30 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
       * @param {String} shipToCountryCode The country code of the country to which the items will be shipped. Note that labeling requirements and item preparation instructions can vary by country.
       * @param {Object} [opts] Optional parameters
       * @param {[String]} [opts.sellerSKUList] A list of SellerSKU values. Used to identify items for which you want labeling requirements and item preparation instructions for shipment to Amazon&#39;s fulfillment network. The SellerSKU is qualified by the Seller ID, which is included with every call to the Seller Partner API.  Note: Include seller SKUs that you have used to list items on Amazon&#39;s retail website. If you include a seller SKU that you have never used to list an item on Amazon&#39;s retail website, the seller SKU is returned in the InvalidSKUList property in the response.
       * @param {[String]} [opts.aSINList] A list of ASIN values. Used to identify items for which you want item preparation instructions to help with item sourcing decisions.  Note: ASINs must be included in the product catalog for at least one of the marketplaces that the seller  participates in. Any ASIN that is not included in the product catalog for at least one of the marketplaces that the seller participates in is returned in the InvalidASINList property in the response. You can find out which marketplaces a seller participates in by calling the getMarketplaceParticipations operation in the Selling Partner API for Sellers.
       * @return {Promise<GetPrepInstructionsResponse>}
       */
    getPrepInstructionsWithHttpInfo(shipToCountryCode: string, opts?: {
        sellerSKUList?: [string];
        aSINList?: [string];
    }): Promise<GetPrepInstructionsResponse>;
    /**
       * Returns labeling requirements and item preparation instructions to help prepare items for shipment to Amazon&#39;s fulfillment network.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 2 | 30 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
       * @param {String} shipToCountryCode The country code of the country to which the items will be shipped. Note that labeling requirements and item preparation instructions can vary by country.
       * @param {Object} [opts] Optional parameters
       * @param {[String]} [opts.sellerSKUList] A list of SellerSKU values. Used to identify items for which you want labeling requirements and item preparation instructions for shipment to Amazon&#39;s fulfillment network. The SellerSKU is qualified by the Seller ID, which is included with every call to the Seller Partner API.  Note: Include seller SKUs that you have used to list items on Amazon&#39;s retail website. If you include a seller SKU that you have never used to list an item on Amazon&#39;s retail website, the seller SKU is returned in the InvalidSKUList property in the response.
       * @param {[String]} [opts.aSINList] A list of ASIN values. Used to identify items for which you want item preparation instructions to help with item sourcing decisions.  Note: ASINs must be included in the product catalog for at least one of the marketplaces that the seller  participates in. Any ASIN that is not included in the product catalog for at least one of the marketplaces that the seller participates in is returned in the InvalidASINList property in the response. You can find out which marketplaces a seller participates in by calling the getMarketplaceParticipations operation in the Selling Partner API for Sellers.
       * @return {Promise<GetPrepInstructionsResponse>}
       */
    getPrepInstructions(shipToCountryCode: string, opts?: {
        sellerSKUList?: [string];
        aSINList?: [string];
    }): Promise<GetPrepInstructionsResponse>;
    /**
       * Returns a list of items in a specified inbound shipment, or a list of items that were updated within a specified time frame.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 2 | 30 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
       * @param {String} queryType Indicates whether items are returned using a date range (by providing the LastUpdatedAfter and LastUpdatedBefore parameters), or using NextToken, which continues returning items specified in a previous request.
       * @param {String} marketplaceId A marketplace identifier. Specifies the marketplace where the product would be stored.
       * @param {Object} [opts] Optional parameters
       * @param {Date} [opts.lastUpdatedAfter] A date used for selecting inbound shipment items that were last updated after (or at) a specified time. The selection includes updates made by Amazon and by the seller.
       * @param {Date} [opts.lastUpdatedBefore] A date used for selecting inbound shipment items that were last updated before (or at) a specified time. The selection includes updates made by Amazon and by the seller.
       * @param {String} [opts.nextToken] A string token returned in the response to your previous request.
       * @return {Promise<GetShipmentItemsResponse>}
       */
    getShipmentItemsWithHttpInfo(queryType: string, marketplaceId: string, opts?: {
        lastUpdatedAfter?: Date;
        lastUpdatedBefore?: Date;
        nextToken?: string;
    }): Promise<GetShipmentItemsResponse>;
    /**
       * Returns a list of items in a specified inbound shipment, or a list of items that were updated within a specified time frame.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 2 | 30 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
       * @param {String} queryType Indicates whether items are returned using a date range (by providing the LastUpdatedAfter and LastUpdatedBefore parameters), or using NextToken, which continues returning items specified in a previous request.
       * @param {String} marketplaceId A marketplace identifier. Specifies the marketplace where the product would be stored.
       * @param {Object} [opts] Optional parameters
       * @param {Date} [opts.lastUpdatedAfter] A date used for selecting inbound shipment items that were last updated after (or at) a specified time. The selection includes updates made by Amazon and by the seller.
       * @param {Date} [opts.lastUpdatedBefore] A date used for selecting inbound shipment items that were last updated before (or at) a specified time. The selection includes updates made by Amazon and by the seller.
       * @param {String} [opts.nextToken] A string token returned in the response to your previous request.
       * @return {Promise<GetShipmentItemsResponse>}
       */
    getShipmentItems(queryType: string, marketplaceId: string, opts?: {
        lastUpdatedAfter?: Date;
        lastUpdatedBefore?: Date;
        nextToken?: string;
    }): Promise<GetShipmentItemsResponse>;
    /**
       * Returns a list of items in a specified inbound shipment.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 2 | 30 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
       * @param {String} shipmentId A shipment identifier used for selecting items in a specific inbound shipment.
       * @param {Object} [opts] Optional parameters
       * @param {String} [opts.marketplaceId] Deprecated. Do not use.
       * @return {Promise<GetShipmentItemsResponse>}
       */
    getShipmentItemsByShipmentIdWithHttpInfo(shipmentId: string, opts?: {
        marketplaceId?: string;
    }): Promise<GetShipmentItemsResponse>;
    /**
       * Returns a list of items in a specified inbound shipment.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 2 | 30 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
       * @param {String} shipmentId A shipment identifier used for selecting items in a specific inbound shipment.
       * @param {Object} [opts] Optional parameters
       * @param {String} [opts.marketplaceId] Deprecated. Do not use.
       * @return {Promise<GetShipmentItemsResponse>}
       */
    getShipmentItemsByShipmentId(shipmentId: string, opts?: {
        marketplaceId?: string;
    }): Promise<GetShipmentItemsResponse>;
    /**
       * Returns a list of inbound shipments based on criteria that you specify.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 2 | 30 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
       * @param {String} queryType Indicates whether shipments are returned using shipment information (by providing the ShipmentStatusList or ShipmentIdList parameters), using a date range (by providing the LastUpdatedAfter and LastUpdatedBefore parameters), or by using NextToken to continue returning items specified in a previous request.
       * @param {String} marketplaceId A marketplace identifier. Specifies the marketplace where the product would be stored.
       * @param {Object} [opts] Optional parameters
       * @param {[String]} [opts.shipmentStatusList] A list of ShipmentStatus values. Used to select shipments with a current status that matches the status values that you specify.
       * @param {[String]} [opts.shipmentIdList] A list of shipment IDs used to select the shipments that you want. If both ShipmentStatusList and ShipmentIdList are specified, only shipments that match both parameters are returned.
       * @param {Date} [opts.lastUpdatedAfter] A date used for selecting inbound shipments that were last updated after (or at) a specified time. The selection includes updates made by Amazon and by the seller.
       * @param {Date} [opts.lastUpdatedBefore] A date used for selecting inbound shipments that were last updated before (or at) a specified time. The selection includes updates made by Amazon and by the seller.
       * @param {String} [opts.nextToken] A string token returned in the response to your previous request.
       * @return {Promise<GetShipmentsResponse>}
       */
    getShipmentsWithHttpInfo(queryType: string, marketplaceId: string, opts?: {
        shipmentStatusList?: [string];
        shipmentIdList?: [string];
        lastUpdatedAfter?: Date;
        lastUpdatedBefore?: Date;
        nextToken?: string;
    }): Promise<GetShipmentsResponse>;
    /**
       * Returns a list of inbound shipments based on criteria that you specify.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 2 | 30 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
       * @param {String} queryType Indicates whether shipments are returned using shipment information (by providing the ShipmentStatusList or ShipmentIdList parameters), using a date range (by providing the LastUpdatedAfter and LastUpdatedBefore parameters), or by using NextToken to continue returning items specified in a previous request.
       * @param {String} marketplaceId A marketplace identifier. Specifies the marketplace where the product would be stored.
       * @param {Object} [opts] Optional parameters
       * @param {[String]} [opts.shipmentStatusList] A list of ShipmentStatus values. Used to select shipments with a current status that matches the status values that you specify.
       * @param {[String]} [opts.shipmentIdList] A list of shipment IDs used to select the shipments that you want. If both ShipmentStatusList and ShipmentIdList are specified, only shipments that match both parameters are returned.
       * @param {Date} [opts.lastUpdatedAfter] A date used for selecting inbound shipments that were last updated after (or at) a specified time. The selection includes updates made by Amazon and by the seller.
       * @param {Date} [opts.lastUpdatedBefore] A date used for selecting inbound shipments that were last updated before (or at) a specified time. The selection includes updates made by Amazon and by the seller.
       * @param {String} [opts.nextToken] A string token returned in the response to your previous request.
       * @return {Promise<GetShipmentsResponse>}
       */
    getShipments(queryType: string, marketplaceId: string, opts?: {
        shipmentStatusList?: [string];
        shipmentIdList?: [string];
        lastUpdatedAfter?: Date;
        lastUpdatedBefore?: Date;
        nextToken?: string;
    }): Promise<GetShipmentsResponse>;
    #private;
}
import { GetBillOfLadingResponse } from '../model/GetBillOfLadingResponse.js';
import { GetLabelsResponse } from '../model/GetLabelsResponse.js';
import { GetPrepInstructionsResponse } from '../model/GetPrepInstructionsResponse.js';
import { GetShipmentItemsResponse } from '../model/GetShipmentItemsResponse.js';
import { GetShipmentsResponse } from '../model/GetShipmentsResponse.js';
import { ApiClient } from '../ApiClient.js';
//# sourceMappingURL=FbaInboundApi.d.ts.map