/**
* Invoices service.
* @module invoices_v2024_06_19/api/InvoicesApi
* @version 2024-06-19
*/
export class InvoicesApi {
    /**
      * Constructs a new InvoicesApi.
      * @alias module:invoices_v2024_06_19/api/InvoicesApi
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
       * Submits an asynchronous government invoice creation request.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 0.0167 | 1 |  For more information, see \&quot;Usage Plans and Rate Limits\&quot; in the Selling Partner API documentation.
       * @param {GovernmentInvoiceRequest} body Information required to create the government invoice.
       * @return {Promise<void>}
       */
    createGovernmentInvoiceWithHttpInfo(body: GovernmentInvoiceRequest): Promise<void>;
    /**
       * Submits an asynchronous government invoice creation request.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 0.0167 | 1 |  For more information, see \&quot;Usage Plans and Rate Limits\&quot; in the Selling Partner API documentation.
       * @param {GovernmentInvoiceRequest} body Information required to create the government invoice.
       * @return {Promise<void>}
       */
    createGovernmentInvoice(body: GovernmentInvoiceRequest): Promise<void>;
    /**
       * Creates an invoice export request.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 0.167 | 1 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The preceding table indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may have higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
       * @param {ExportInvoicesRequest} body Information required to create the export request.
       * @return {Promise<ExportInvoicesResponse>}
       */
    createInvoicesExportWithHttpInfo(body: ExportInvoicesRequest): Promise<ExportInvoicesResponse>;
    /**
       * Creates an invoice export request.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 0.167 | 1 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The preceding table indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may have higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
       * @param {ExportInvoicesRequest} body Information required to create the export request.
       * @return {Promise<ExportInvoicesResponse>}
       */
    createInvoicesExport(body: ExportInvoicesRequest): Promise<ExportInvoicesResponse>;
    /**
       * Returns an invoiceDocument object containing an invoiceDocumentUrl .  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 0.0167 | 1 |  For more information, see \&quot;Usage Plans and Rate Limits\&quot; in the Selling Partner API documentation.
       * @param {String} marketplaceId The invoices returned will match the marketplace that you specify.
       * @param {String} transactionType Marketplace specific classification of the transaction type that originated the invoice. Check &#39;transactionType&#39; options using &#39;getInvoicesAttributes&#39; operation.
       * @param {String} shipmentId The unique shipment identifier to get an invoice for.
       * @param {String} invoiceType Marketplace specific classification of the invoice type. Check &#39;invoiceType&#39; options using &#39;getInvoicesAttributes&#39; operation.
       * @param {Object} [opts] Optional parameters
       * @param {String} [opts.inboundPlanId] The unique InboundPlan identifier in which the shipment is contained and for which the invoice will be created.
       * @param {String} [opts.fileFormat] Requested file format. Default is XML
       * @return {Promise<GovtInvoiceDocumentResponse>}
       */
    getGovernmentInvoiceDocumentWithHttpInfo(marketplaceId: string, transactionType: string, shipmentId: string, invoiceType: string, opts?: {
        inboundPlanId?: string;
        fileFormat?: string;
    }): Promise<GovtInvoiceDocumentResponse>;
    /**
       * Returns an invoiceDocument object containing an invoiceDocumentUrl .  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 0.0167 | 1 |  For more information, see \&quot;Usage Plans and Rate Limits\&quot; in the Selling Partner API documentation.
       * @param {String} marketplaceId The invoices returned will match the marketplace that you specify.
       * @param {String} transactionType Marketplace specific classification of the transaction type that originated the invoice. Check &#39;transactionType&#39; options using &#39;getInvoicesAttributes&#39; operation.
       * @param {String} shipmentId The unique shipment identifier to get an invoice for.
       * @param {String} invoiceType Marketplace specific classification of the invoice type. Check &#39;invoiceType&#39; options using &#39;getInvoicesAttributes&#39; operation.
       * @param {Object} [opts] Optional parameters
       * @param {String} [opts.inboundPlanId] The unique InboundPlan identifier in which the shipment is contained and for which the invoice will be created.
       * @param {String} [opts.fileFormat] Requested file format. Default is XML
       * @return {Promise<GovtInvoiceDocumentResponse>}
       */
    getGovernmentInvoiceDocument(marketplaceId: string, transactionType: string, shipmentId: string, invoiceType: string, opts?: {
        inboundPlanId?: string;
        fileFormat?: string;
    }): Promise<GovtInvoiceDocumentResponse>;
    /**
       * Returns the status of an invoice generation request.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 0.0167 | 1 |  For more information, see \&quot;Usage Plans and Rate Limits\&quot; in the Selling Partner API documentation.
       * @param {String} marketplaceId The invoices status will match the marketplace that you specify.
       * @param {String} transactionType Marketplace specific classification of the transaction type that originated the invoice. Check &#39;transactionType&#39; options using &#39;getInvoicesAttributes&#39; operation.
       * @param {String} shipmentId The unique shipment identifier to get an invoice for.
       * @param {String} invoiceType Marketplace specific classification of the invoice type. Check &#39;invoiceType&#39; options using &#39;getInvoicesAttributes&#39; operation.
       * @param {Object} [opts] Optional parameters
       * @param {String} [opts.inboundPlanId] The unique InboundPlan identifier in which the shipment is contained and for which the invoice will be created.
       * @return {Promise<GovernmentInvoiceStatusResponse>}
       */
    getGovernmentInvoiceStatusWithHttpInfo(marketplaceId: string, transactionType: string, shipmentId: string, invoiceType: string, opts?: {
        inboundPlanId?: string;
    }): Promise<GovernmentInvoiceStatusResponse>;
    /**
       * Returns the status of an invoice generation request.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 0.0167 | 1 |  For more information, see \&quot;Usage Plans and Rate Limits\&quot; in the Selling Partner API documentation.
       * @param {String} marketplaceId The invoices status will match the marketplace that you specify.
       * @param {String} transactionType Marketplace specific classification of the transaction type that originated the invoice. Check &#39;transactionType&#39; options using &#39;getInvoicesAttributes&#39; operation.
       * @param {String} shipmentId The unique shipment identifier to get an invoice for.
       * @param {String} invoiceType Marketplace specific classification of the invoice type. Check &#39;invoiceType&#39; options using &#39;getInvoicesAttributes&#39; operation.
       * @param {Object} [opts] Optional parameters
       * @param {String} [opts.inboundPlanId] The unique InboundPlan identifier in which the shipment is contained and for which the invoice will be created.
       * @return {Promise<GovernmentInvoiceStatusResponse>}
       */
    getGovernmentInvoiceStatus(marketplaceId: string, transactionType: string, shipmentId: string, invoiceType: string, opts?: {
        inboundPlanId?: string;
    }): Promise<GovernmentInvoiceStatusResponse>;
    /**
       * Returns invoice data for the specified invoice. This operation returns only a subset of the invoices data; refer to the response definition to get all the possible attributes. To get the full invoice, use the &#x60;createInvoicesExport&#x60; operation to start an export request.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 2 | 15 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The preceding table indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may have higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
       * @param {String} marketplaceId The marketplace from which you want the invoice.
       * @param {String} invoiceId The invoice identifier.
       * @return {Promise<GetInvoiceResponse>}
       */
    getInvoiceWithHttpInfo(marketplaceId: string, invoiceId: string): Promise<GetInvoiceResponse>;
    /**
       * Returns invoice data for the specified invoice. This operation returns only a subset of the invoices data; refer to the response definition to get all the possible attributes. To get the full invoice, use the &#x60;createInvoicesExport&#x60; operation to start an export request.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 2 | 15 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The preceding table indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may have higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
       * @param {String} marketplaceId The marketplace from which you want the invoice.
       * @param {String} invoiceId The invoice identifier.
       * @return {Promise<GetInvoiceResponse>}
       */
    getInvoice(marketplaceId: string, invoiceId: string): Promise<GetInvoiceResponse>;
    /**
       * Returns invoice details for the invoices that match the filters that you specify.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 0.1 | 20 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The preceding table indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may have higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
       * @param {String} marketplaceId The response includes only the invoices that match the specified marketplace.
       * @param {Object} [opts] Optional parameters
       * @param {String} [opts.transactionIdentifierName] The name of the transaction identifier filter. If you provide a value for this field, you must also provide a value for the &#x60;transactionIdentifierId&#x60; field.Use the &#x60;getInvoicesAttributes&#x60; operation to check &#x60;transactionIdentifierName&#x60; options.
       * @param {Number} [opts.pageSize] The maximum number of invoices you want to return in a single call.  Minimum: 1  Maximum: 200
       * @param {Date} [opts.dateEnd] The latest invoice creation date for invoices that you want to include in the response. Dates are in [ISO 8601](https://developer-docs.amazon.com/sp-api/docs/iso-8601) date-time format. The default is the current date-time.
       * @param {String} [opts.transactionType] The marketplace-specific classification of the transaction type for which the invoice was created. Use the &#x60;getInvoicesAttributes&#x60; operation to check &#x60;transactionType&#x60; options.
       * @param {String} [opts.transactionIdentifierId] The ID of the transaction identifier filter. If you provide a value for this field, you must also provide a value for the &#x60;transactionIdentifierName&#x60; field.
       * @param {Date} [opts.dateStart] The earliest invoice creation date for invoices that you want to include in the response. Dates are in [ISO 8601](https://developer-docs.amazon.com/sp-api/docs/iso-8601) date-time format. The default is 24 hours prior to the time of the request.
       * @param {String} [opts.series] Return invoices with the specified series number.
       * @param {String} [opts.nextToken] The response includes &#x60;nextToken&#x60; when the number of results exceeds the specified &#x60;pageSize&#x60; value. To get the next page of results, call the operation with this token and include the same arguments as the call that produced the token. To get a complete list, call this operation until &#x60;nextToken&#x60; is null. Note that this operation can return empty pages.
       * @param {String} [opts.sortOrder] Sort the invoices in the response in ascending or descending order.
       * @param {String} [opts.invoiceType] The marketplace-specific classification of the invoice type. Use the &#x60;getInvoicesAttributes&#x60; operation to check &#x60;invoiceType&#x60; options.
       * @param {[String]} [opts.statuses] A list of statuses that you can use to filter invoices. Use the &#x60;getInvoicesAttributes&#x60; operation to check invoice status options.  Min count: 1
       * @param {String} [opts.externalInvoiceId] Return invoices that match this external ID. This is typically the Government Invoice ID.
       * @param {String} [opts.sortBy] The attribute by which you want to sort the invoices in the response.
       * @return {Promise<GetInvoicesResponse>}
       */
    getInvoicesWithHttpInfo(marketplaceId: string, opts?: {
        transactionIdentifierName?: string;
        pageSize?: number;
        dateEnd?: Date;
        transactionType?: string;
        transactionIdentifierId?: string;
        dateStart?: Date;
        series?: string;
        nextToken?: string;
        sortOrder?: string;
        invoiceType?: string;
        statuses?: [string];
        externalInvoiceId?: string;
        sortBy?: string;
    }): Promise<GetInvoicesResponse>;
    /**
       * Returns invoice details for the invoices that match the filters that you specify.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 0.1 | 20 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The preceding table indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may have higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
       * @param {String} marketplaceId The response includes only the invoices that match the specified marketplace.
       * @param {Object} [opts] Optional parameters
       * @param {String} [opts.transactionIdentifierName] The name of the transaction identifier filter. If you provide a value for this field, you must also provide a value for the &#x60;transactionIdentifierId&#x60; field.Use the &#x60;getInvoicesAttributes&#x60; operation to check &#x60;transactionIdentifierName&#x60; options.
       * @param {Number} [opts.pageSize] The maximum number of invoices you want to return in a single call.  Minimum: 1  Maximum: 200
       * @param {Date} [opts.dateEnd] The latest invoice creation date for invoices that you want to include in the response. Dates are in [ISO 8601](https://developer-docs.amazon.com/sp-api/docs/iso-8601) date-time format. The default is the current date-time.
       * @param {String} [opts.transactionType] The marketplace-specific classification of the transaction type for which the invoice was created. Use the &#x60;getInvoicesAttributes&#x60; operation to check &#x60;transactionType&#x60; options.
       * @param {String} [opts.transactionIdentifierId] The ID of the transaction identifier filter. If you provide a value for this field, you must also provide a value for the &#x60;transactionIdentifierName&#x60; field.
       * @param {Date} [opts.dateStart] The earliest invoice creation date for invoices that you want to include in the response. Dates are in [ISO 8601](https://developer-docs.amazon.com/sp-api/docs/iso-8601) date-time format. The default is 24 hours prior to the time of the request.
       * @param {String} [opts.series] Return invoices with the specified series number.
       * @param {String} [opts.nextToken] The response includes &#x60;nextToken&#x60; when the number of results exceeds the specified &#x60;pageSize&#x60; value. To get the next page of results, call the operation with this token and include the same arguments as the call that produced the token. To get a complete list, call this operation until &#x60;nextToken&#x60; is null. Note that this operation can return empty pages.
       * @param {String} [opts.sortOrder] Sort the invoices in the response in ascending or descending order.
       * @param {String} [opts.invoiceType] The marketplace-specific classification of the invoice type. Use the &#x60;getInvoicesAttributes&#x60; operation to check &#x60;invoiceType&#x60; options.
       * @param {[String]} [opts.statuses] A list of statuses that you can use to filter invoices. Use the &#x60;getInvoicesAttributes&#x60; operation to check invoice status options.  Min count: 1
       * @param {String} [opts.externalInvoiceId] Return invoices that match this external ID. This is typically the Government Invoice ID.
       * @param {String} [opts.sortBy] The attribute by which you want to sort the invoices in the response.
       * @return {Promise<GetInvoicesResponse>}
       */
    getInvoices(marketplaceId: string, opts?: {
        transactionIdentifierName?: string;
        pageSize?: number;
        dateEnd?: Date;
        transactionType?: string;
        transactionIdentifierId?: string;
        dateStart?: Date;
        series?: string;
        nextToken?: string;
        sortOrder?: string;
        invoiceType?: string;
        statuses?: [string];
        externalInvoiceId?: string;
        sortBy?: string;
    }): Promise<GetInvoicesResponse>;
    /**
       * Returns marketplace-dependent schemas and their respective set of possible values.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 1 | 1 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The preceding table indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may have higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
       * @param {String} marketplaceId The marketplace identifier.
       * @return {Promise<GetInvoicesAttributesResponse>}
       */
    getInvoicesAttributesWithHttpInfo(marketplaceId: string): Promise<GetInvoicesAttributesResponse>;
    /**
       * Returns marketplace-dependent schemas and their respective set of possible values.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 1 | 1 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The preceding table indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may have higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
       * @param {String} marketplaceId The marketplace identifier.
       * @return {Promise<GetInvoicesAttributesResponse>}
       */
    getInvoicesAttributes(marketplaceId: string): Promise<GetInvoicesAttributesResponse>;
    /**
       * Returns the invoice document&#39;s ID and URL. Use the URL to download the ZIP file, which contains the invoices from the corresponding &#x60;createInvoicesExport&#x60; request.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 0.0167 | 1 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The preceding table indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may have higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
       * @param {String} invoicesDocumentId The export document identifier.
       * @return {Promise<GetInvoicesDocumentResponse>}
       */
    getInvoicesDocumentWithHttpInfo(invoicesDocumentId: string): Promise<GetInvoicesDocumentResponse>;
    /**
       * Returns the invoice document&#39;s ID and URL. Use the URL to download the ZIP file, which contains the invoices from the corresponding &#x60;createInvoicesExport&#x60; request.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 0.0167 | 1 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The preceding table indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may have higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
       * @param {String} invoicesDocumentId The export document identifier.
       * @return {Promise<GetInvoicesDocumentResponse>}
       */
    getInvoicesDocument(invoicesDocumentId: string): Promise<GetInvoicesDocumentResponse>;
    /**
       * Returns invoice export details (including the &#x60;exportDocumentId&#x60;, if available) for the export that you specify.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 2 | 15 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The preceding table indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may have higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
       * @param {String} exportId The unique identifier for the export.
       * @return {Promise<GetInvoicesExportResponse>}
       */
    getInvoicesExportWithHttpInfo(exportId: string): Promise<GetInvoicesExportResponse>;
    /**
       * Returns invoice export details (including the &#x60;exportDocumentId&#x60;, if available) for the export that you specify.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 2 | 15 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The preceding table indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may have higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
       * @param {String} exportId The unique identifier for the export.
       * @return {Promise<GetInvoicesExportResponse>}
       */
    getInvoicesExport(exportId: string): Promise<GetInvoicesExportResponse>;
    /**
       * Returns invoice exports details for exports that match the filters that you specify.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 0.1 | 20 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The preceding table indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may have higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
       * @param {String} marketplaceId The returned exports match the specified marketplace.
       * @param {Object} [opts] Optional parameters
       * @param {Date} [opts.dateStart] The earliest export creation date and time for exports that you want to include in the response. Values are in [ISO 8601](https://developer-docs.amazon.com/sp-api/docs/iso-8601) date-time format. The default is 30 days ago.
       * @param {String} [opts.nextToken] The response includes &#x60;nextToken&#x60; when the number of results exceeds the specified &#x60;pageSize&#x60; value. To get the next page of results, call the operation with this token and include the same arguments as the call that produced the token. To get a complete list, call this operation until &#x60;nextToken&#x60; is null. Note that this operation can return empty pages.
       * @param {Number} [opts.pageSize] The maximum number of invoices to return in a single call.  Minimum: 1  Maximum: 100
       * @param {Date} [opts.dateEnd] The latest export creation date and time for exports that you want to include in the response. Values are in [ISO 8601](https://developer-docs.amazon.com/sp-api/docs/iso-8601) date-time format. The default value is the time of the request.
       * @param {String} [opts.status] Return exports matching the status specified.
       * @return {Promise<GetInvoicesExportsResponse>}
       */
    getInvoicesExportsWithHttpInfo(marketplaceId: string, opts?: {
        dateStart?: Date;
        nextToken?: string;
        pageSize?: number;
        dateEnd?: Date;
        status?: string;
    }): Promise<GetInvoicesExportsResponse>;
    /**
       * Returns invoice exports details for exports that match the filters that you specify.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 0.1 | 20 |  The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the requested operation, when available. The preceding table indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may have higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate Limits in the Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
       * @param {String} marketplaceId The returned exports match the specified marketplace.
       * @param {Object} [opts] Optional parameters
       * @param {Date} [opts.dateStart] The earliest export creation date and time for exports that you want to include in the response. Values are in [ISO 8601](https://developer-docs.amazon.com/sp-api/docs/iso-8601) date-time format. The default is 30 days ago.
       * @param {String} [opts.nextToken] The response includes &#x60;nextToken&#x60; when the number of results exceeds the specified &#x60;pageSize&#x60; value. To get the next page of results, call the operation with this token and include the same arguments as the call that produced the token. To get a complete list, call this operation until &#x60;nextToken&#x60; is null. Note that this operation can return empty pages.
       * @param {Number} [opts.pageSize] The maximum number of invoices to return in a single call.  Minimum: 1  Maximum: 100
       * @param {Date} [opts.dateEnd] The latest export creation date and time for exports that you want to include in the response. Values are in [ISO 8601](https://developer-docs.amazon.com/sp-api/docs/iso-8601) date-time format. The default value is the time of the request.
       * @param {String} [opts.status] Return exports matching the status specified.
       * @return {Promise<GetInvoicesExportsResponse>}
       */
    getInvoicesExports(marketplaceId: string, opts?: {
        dateStart?: Date;
        nextToken?: string;
        pageSize?: number;
        dateEnd?: Date;
        status?: string;
    }): Promise<GetInvoicesExportsResponse>;
    #private;
}
import { GovernmentInvoiceRequest } from '../model/GovernmentInvoiceRequest.js';
import { ExportInvoicesRequest } from '../model/ExportInvoicesRequest.js';
import { ExportInvoicesResponse } from '../model/ExportInvoicesResponse.js';
import { GovtInvoiceDocumentResponse } from '../model/GovtInvoiceDocumentResponse.js';
import { GovernmentInvoiceStatusResponse } from '../model/GovernmentInvoiceStatusResponse.js';
import { GetInvoiceResponse } from '../model/GetInvoiceResponse.js';
import { GetInvoicesResponse } from '../model/GetInvoicesResponse.js';
import { GetInvoicesAttributesResponse } from '../model/GetInvoicesAttributesResponse.js';
import { GetInvoicesDocumentResponse } from '../model/GetInvoicesDocumentResponse.js';
import { GetInvoicesExportResponse } from '../model/GetInvoicesExportResponse.js';
import { GetInvoicesExportsResponse } from '../model/GetInvoicesExportsResponse.js';
import { ApiClient } from '../ApiClient.js';
//# sourceMappingURL=InvoicesApi.d.ts.map