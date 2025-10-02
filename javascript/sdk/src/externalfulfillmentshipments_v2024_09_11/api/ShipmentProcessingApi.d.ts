/**
* ShipmentProcessing service.
* @module externalfulfillmentshipments_v2024_09_11/api/ShipmentProcessingApi
* @version 2024-09-11
*/
export class ShipmentProcessingApi {
    /**
      * Constructs a new ShipmentProcessingApi.
      * @alias module:externalfulfillmentshipments_v2024_09_11/api/ShipmentProcessingApi
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
       * Provide details about the packages in the specified shipment.
       * @param {String} shipmentId The ID of the shipment.
       * @param {Packages} body A list of packages in the shipment.
       * @return {Promise<void>}
       */
    createPackagesWithHttpInfo(shipmentId: string, body: Packages): Promise<void>;
    /**
       * Provide details about the packages in the specified shipment.
       * @param {String} shipmentId The ID of the shipment.
       * @param {Packages} body A list of packages in the shipment.
       * @return {Promise<void>}
       */
    createPackages(shipmentId: string, body: Packages): Promise<void>;
    /**
       * Get invoices for the shipment you specify.
       * @param {String} shipmentId The ID of the shipment whose invoice you want.
       * @return {Promise<InvoiceResponse>}
       */
    generateInvoiceWithHttpInfo(shipmentId: string): Promise<InvoiceResponse>;
    /**
       * Get invoices for the shipment you specify.
       * @param {String} shipmentId The ID of the shipment whose invoice you want.
       * @return {Promise<InvoiceResponse>}
       */
    generateInvoice(shipmentId: string): Promise<InvoiceResponse>;
    /**
       * Generate and retrieve all shipping labels for one or more packages in the shipment you specify.
       * @param {String} shipmentId The ID of the shipment whose shipping labels you want to generate and retrieve.
       * @param {String} operation Specify whether you want to generate or regenerate a label.
       * @param {Object} [opts] Optional parameters
       * @param {String} [opts.shippingOptionId] The ID of the shipping option whose shipping labels you want.
       * @param {ShipLabelsInput} [opts.body] Shipping details for when shipping is not done by the marketplace channel.
       * @return {Promise<ShipLabelsResponse>}
       */
    generateShipLabelsWithHttpInfo(shipmentId: string, operation: string, opts?: {
        shippingOptionId?: string;
        body?: ShipLabelsInput;
    }): Promise<ShipLabelsResponse>;
    /**
       * Generate and retrieve all shipping labels for one or more packages in the shipment you specify.
       * @param {String} shipmentId The ID of the shipment whose shipping labels you want to generate and retrieve.
       * @param {String} operation Specify whether you want to generate or regenerate a label.
       * @param {Object} [opts] Optional parameters
       * @param {String} [opts.shippingOptionId] The ID of the shipping option whose shipping labels you want.
       * @param {ShipLabelsInput} [opts.body] Shipping details for when shipping is not done by the marketplace channel.
       * @return {Promise<ShipLabelsResponse>}
       */
    generateShipLabels(shipmentId: string, operation: string, opts?: {
        shippingOptionId?: string;
        body?: ShipLabelsInput;
    }): Promise<ShipLabelsResponse>;
    /**
       * Confirm or reject the specified shipment.
       * @param {String} shipmentId The ID of the shipment you want to confirm or reject.
       * @param {String} operation The status of the shipment.
       * @param {Object} [opts] Optional parameters
       * @param {ShipmentAcknowledgementRequest} [opts.body] Information about the shipment and its line items.
       * @return {Promise<void>}
       */
    processShipmentWithHttpInfo(shipmentId: string, operation: string, opts?: {
        body?: ShipmentAcknowledgementRequest;
    }): Promise<void>;
    /**
       * Confirm or reject the specified shipment.
       * @param {String} shipmentId The ID of the shipment you want to confirm or reject.
       * @param {String} operation The status of the shipment.
       * @param {Object} [opts] Optional parameters
       * @param {ShipmentAcknowledgementRequest} [opts.body] Information about the shipment and its line items.
       * @return {Promise<void>}
       */
    processShipment(shipmentId: string, operation: string, opts?: {
        body?: ShipmentAcknowledgementRequest;
    }): Promise<void>;
    /**
       * Retrieve invoices for the shipment you specify.
       * @param {String} shipmentId The ID of the shipment whose invoice you want to retrieve.
       * @return {Promise<InvoiceResponse>}
       */
    retrieveInvoiceWithHttpInfo(shipmentId: string): Promise<InvoiceResponse>;
    /**
       * Retrieve invoices for the shipment you specify.
       * @param {String} shipmentId The ID of the shipment whose invoice you want to retrieve.
       * @return {Promise<InvoiceResponse>}
       */
    retrieveInvoice(shipmentId: string): Promise<InvoiceResponse>;
    /**
       * Get a list of shipping options for a package in a shipment given the shipment&#39;s marketplace and channel. If the marketplace and channel have a pre-determined shipping option, then this operation returns an empty response.
       * @param {String} shipmentId The ID of the shipment to which the package belongs.
       * @param {String} packageId The ID of the package for which you want to retrieve shipping options.
       * @return {Promise<ShippingOptionsResponse>}
       */
    retrieveShippingOptionsWithHttpInfo(shipmentId: string, packageId: string): Promise<ShippingOptionsResponse>;
    /**
       * Get a list of shipping options for a package in a shipment given the shipment&#39;s marketplace and channel. If the marketplace and channel have a pre-determined shipping option, then this operation returns an empty response.
       * @param {String} shipmentId The ID of the shipment to which the package belongs.
       * @param {String} packageId The ID of the package for which you want to retrieve shipping options.
       * @return {Promise<ShippingOptionsResponse>}
       */
    retrieveShippingOptions(shipmentId: string, packageId: string): Promise<ShippingOptionsResponse>;
    /**
       * Updates the details about the packages that will be used to fulfill the specified shipment.
       * @param {String} shipmentId The ID of the shipment to which the package belongs.
       * @param {String} packageId The ID of the package whose information you want to update.
       * @param {Package} body The body of the request.
       * @return {Promise<void>}
       */
    updatePackageWithHttpInfo(shipmentId: string, packageId: string, body: Package): Promise<void>;
    /**
       * Updates the details about the packages that will be used to fulfill the specified shipment.
       * @param {String} shipmentId The ID of the shipment to which the package belongs.
       * @param {String} packageId The ID of the package whose information you want to update.
       * @param {Package} body The body of the request.
       * @return {Promise<void>}
       */
    updatePackage(shipmentId: string, packageId: string, body: Package): Promise<void>;
    /**
       * Updates the status of the packages.
       * @param {String} shipmentId The ID of the shipment to which the package belongs.
       * @param {String} packageId The ID of the package whose status you want to update.
       * @param {Object} [opts] Optional parameters
       * @param {String} [opts.status] **DEPRECATED**. Do not use. Package status is defined in the body parameter.
       * @param {PackageDeliveryStatus} [opts.body] The body of the request.
       * @return {Promise<void>}
       */
    updatePackageStatusWithHttpInfo(shipmentId: string, packageId: string, opts?: {
        status?: string;
        body?: PackageDeliveryStatus;
    }): Promise<void>;
    /**
       * Updates the status of the packages.
       * @param {String} shipmentId The ID of the shipment to which the package belongs.
       * @param {String} packageId The ID of the package whose status you want to update.
       * @param {Object} [opts] Optional parameters
       * @param {String} [opts.status] **DEPRECATED**. Do not use. Package status is defined in the body parameter.
       * @param {PackageDeliveryStatus} [opts.body] The body of the request.
       * @return {Promise<void>}
       */
    updatePackageStatus(shipmentId: string, packageId: string, opts?: {
        status?: string;
        body?: PackageDeliveryStatus;
    }): Promise<void>;
    #private;
}
import { Packages } from '../model/Packages.js';
import { InvoiceResponse } from '../model/InvoiceResponse.js';
import { ShipLabelsInput } from '../model/ShipLabelsInput.js';
import { ShipLabelsResponse } from '../model/ShipLabelsResponse.js';
import { ShipmentAcknowledgementRequest } from '../model/ShipmentAcknowledgementRequest.js';
import { ShippingOptionsResponse } from '../model/ShippingOptionsResponse.js';
import { Package } from '../model/Package.js';
import { PackageDeliveryStatus } from '../model/PackageDeliveryStatus.js';
import { ApiClient } from '../ApiClient.js';
//# sourceMappingURL=ShipmentProcessingApi.d.ts.map