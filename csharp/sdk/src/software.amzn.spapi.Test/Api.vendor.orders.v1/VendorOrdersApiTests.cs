/*
 * Selling Partner API for Retail Procurement Orders
 *
 * The Selling Partner API for Retail Procurement Orders provides programmatic access to vendor orders data.
 *
 * The version of the OpenAPI document: v1
 * Generated by: https://github.com/openapitools/openapi-generator.git
 */

using System;
using System.IO;
using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.Linq;
using System.Reflection;
using RestSharp;
using Xunit;
using software.amzn.spapi.Auth;

using software.amzn.spapi.Client;
using software.amzn.spapi.Api.vendor.orders.v1;
using software.amzn.spapi.Model.vendor.orders.v1;

namespace software.amzn.spapi.Api.vendor.orders.v1.Test
{
    /// <summary>
    ///  Class for testing VendorOrdersApi
    /// </summary>
    /// <remarks>
    /// This file is automatically generated by Swagger Codegen.
    /// Please update the test case below to test the API endpoint.
    /// </remarks>
    public class VendorOrdersApiTests
    {
        private VendorOrdersApi instance;

        /// <summary>
        /// Setup before each unit test
        /// </summary>
        public void Init()
        {
            // TODO uncomment below to initialize instance for testing
            //instance = new VendorOrdersApi();
        }

        /// <summary>
        /// Clean up after each unit test
        /// </summary>
        public void Cleanup()
        {

        }

        /// <summary>
        /// Test an instance of VendorOrdersApi
        /// </summary>
        public void InstanceTest()
        {
            // TODO uncomment below to test 'IsInstanceOfType' VendorOrdersApi
            //Assert.IsInstanceOfType(typeof(VendorOrdersApi), instance, "instance is a VendorOrdersApi");
        }

        
        /// <summary>
        /// Test GetPurchaseOrder
        /// </summary>
        [Fact]
        public void GetPurchaseOrderTest()
        {
            // TODO uncomment below to test the method and replace null with proper value
            //string purchaseOrderNumber = null;
            //var response = instance.GetPurchaseOrder(purchaseOrderNumber);
            //Assert.IsInstanceOf<GetPurchaseOrderResponse> (response, "response is GetPurchaseOrderResponse");
        }
        
        /// <summary>
        /// Test GetPurchaseOrders
        /// </summary>
        [Fact]
        public void GetPurchaseOrdersTest()
        {
            // TODO uncomment below to test the method and replace null with proper value
            //long? limit = null;
            //DateTime? createdAfter = null;
            //DateTime? createdBefore = null;
            //string? sortOrder = null;
            //string? nextToken = null;
            //bool? includeDetails = null;
            //DateTime? changedAfter = null;
            //DateTime? changedBefore = null;
            //string? poItemState = null;
            //bool? isPOChanged = null;
            //string? purchaseOrderState = null;
            //string? orderingVendorCode = null;
            //var response = instance.GetPurchaseOrders(limitcreatedAftercreatedBeforesortOrdernextTokenincludeDetailschangedAfterchangedBeforepoItemStateisPOChangedpurchaseOrderStateorderingVendorCode);
            //Assert.IsInstanceOf<GetPurchaseOrdersResponse> (response, "response is GetPurchaseOrdersResponse");
        }
        
        /// <summary>
        /// Test GetPurchaseOrdersStatus
        /// </summary>
        [Fact]
        public void GetPurchaseOrdersStatusTest()
        {
            // TODO uncomment below to test the method and replace null with proper value
            //long? limit = null;
            //string? sortOrder = null;
            //string? nextToken = null;
            //DateTime? createdAfter = null;
            //DateTime? createdBefore = null;
            //DateTime? updatedAfter = null;
            //DateTime? updatedBefore = null;
            //string? purchaseOrderNumber = null;
            //string? purchaseOrderStatus = null;
            //string? itemConfirmationStatus = null;
            //string? itemReceiveStatus = null;
            //string? orderingVendorCode = null;
            //string? shipToPartyId = null;
            //var response = instance.GetPurchaseOrdersStatus(limitsortOrdernextTokencreatedAftercreatedBeforeupdatedAfterupdatedBeforepurchaseOrderNumberpurchaseOrderStatusitemConfirmationStatusitemReceiveStatusorderingVendorCodeshipToPartyId);
            //Assert.IsInstanceOf<GetPurchaseOrdersStatusResponse> (response, "response is GetPurchaseOrdersStatusResponse");
        }
        
        /// <summary>
        /// Test SubmitAcknowledgement
        /// </summary>
        [Fact]
        public void SubmitAcknowledgementTest()
        {
            // TODO uncomment below to test the method and replace null with proper value
            //SubmitAcknowledgementRequest body = null;
            //var response = instance.SubmitAcknowledgement(body);
            //Assert.IsInstanceOf<SubmitAcknowledgementResponse> (response, "response is SubmitAcknowledgementResponse");
        }
        
    }

}
