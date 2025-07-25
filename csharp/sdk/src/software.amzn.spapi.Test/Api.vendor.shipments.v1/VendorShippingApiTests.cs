/*
 * Selling Partner API for Retail Procurement Shipments
 *
 * The Selling Partner API for Retail Procurement Shipments provides programmatic access to retail shipping data for vendors.
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
using software.amzn.spapi.Api.vendor.shipments.v1;
using software.amzn.spapi.Model.vendor.shipments.v1;

namespace software.amzn.spapi.Api.vendor.shipments.v1.Test
{
    /// <summary>
    ///  Class for testing VendorShippingApi
    /// </summary>
    /// <remarks>
    /// This file is automatically generated by Swagger Codegen.
    /// Please update the test case below to test the API endpoint.
    /// </remarks>
    public class VendorShippingApiTests
    {
        private VendorShippingApi instance;

        /// <summary>
        /// Setup before each unit test
        /// </summary>
        public void Init()
        {
            // TODO uncomment below to initialize instance for testing
            //instance = new VendorShippingApi();
        }

        /// <summary>
        /// Clean up after each unit test
        /// </summary>
        public void Cleanup()
        {

        }

        /// <summary>
        /// Test an instance of VendorShippingApi
        /// </summary>
        public void InstanceTest()
        {
            // TODO uncomment below to test 'IsInstanceOfType' VendorShippingApi
            //Assert.IsInstanceOfType(typeof(VendorShippingApi), instance, "instance is a VendorShippingApi");
        }

        
        /// <summary>
        /// Test GetShipmentDetails
        /// </summary>
        [Fact]
        public void GetShipmentDetailsTest()
        {
            // TODO uncomment below to test the method and replace null with proper value
            //long? limit = null;
            //string? sortOrder = null;
            //string? nextToken = null;
            //DateTime? createdAfter = null;
            //DateTime? createdBefore = null;
            //DateTime? shipmentConfirmedBefore = null;
            //DateTime? shipmentConfirmedAfter = null;
            //DateTime? packageLabelCreatedBefore = null;
            //DateTime? packageLabelCreatedAfter = null;
            //DateTime? shippedBefore = null;
            //DateTime? shippedAfter = null;
            //DateTime? estimatedDeliveryBefore = null;
            //DateTime? estimatedDeliveryAfter = null;
            //DateTime? shipmentDeliveryBefore = null;
            //DateTime? shipmentDeliveryAfter = null;
            //DateTime? requestedPickUpBefore = null;
            //DateTime? requestedPickUpAfter = null;
            //DateTime? scheduledPickUpBefore = null;
            //DateTime? scheduledPickUpAfter = null;
            //string? currentShipmentStatus = null;
            //string? vendorShipmentIdentifier = null;
            //string? buyerReferenceNumber = null;
            //string? buyerWarehouseCode = null;
            //string? sellerWarehouseCode = null;
            //var response = instance.GetShipmentDetails(limitsortOrdernextTokencreatedAftercreatedBeforeshipmentConfirmedBeforeshipmentConfirmedAfterpackageLabelCreatedBeforepackageLabelCreatedAftershippedBeforeshippedAfterestimatedDeliveryBeforeestimatedDeliveryAftershipmentDeliveryBeforeshipmentDeliveryAfterrequestedPickUpBeforerequestedPickUpAfterscheduledPickUpBeforescheduledPickUpAftercurrentShipmentStatusvendorShipmentIdentifierbuyerReferenceNumberbuyerWarehouseCodesellerWarehouseCode);
            //Assert.IsInstanceOf<GetShipmentDetailsResponse> (response, "response is GetShipmentDetailsResponse");
        }
        
        /// <summary>
        /// Test GetShipmentLabels
        /// </summary>
        [Fact]
        public void GetShipmentLabelsTest()
        {
            // TODO uncomment below to test the method and replace null with proper value
            //long? limit = null;
            //string? sortOrder = null;
            //string? nextToken = null;
            //DateTime? labelCreatedAfter = null;
            //DateTime? labelCreatedBefore = null;
            //string? buyerReferenceNumber = null;
            //string? vendorShipmentIdentifier = null;
            //string? sellerWarehouseCode = null;
            //var response = instance.GetShipmentLabels(limitsortOrdernextTokenlabelCreatedAfterlabelCreatedBeforebuyerReferenceNumbervendorShipmentIdentifiersellerWarehouseCode);
            //Assert.IsInstanceOf<GetShipmentLabels> (response, "response is GetShipmentLabels");
        }
        
        /// <summary>
        /// Test SubmitShipmentConfirmations
        /// </summary>
        [Fact]
        public void SubmitShipmentConfirmationsTest()
        {
            // TODO uncomment below to test the method and replace null with proper value
            //SubmitShipmentConfirmationsRequest body = null;
            //var response = instance.SubmitShipmentConfirmations(body);
            //Assert.IsInstanceOf<SubmitShipmentConfirmationsResponse> (response, "response is SubmitShipmentConfirmationsResponse");
        }
        
        /// <summary>
        /// Test SubmitShipments
        /// </summary>
        [Fact]
        public void SubmitShipmentsTest()
        {
            // TODO uncomment below to test the method and replace null with proper value
            //SubmitShipments body = null;
            //var response = instance.SubmitShipments(body);
            //Assert.IsInstanceOf<SubmitShipmentConfirmationsResponse> (response, "response is SubmitShipmentConfirmationsResponse");
        }
        
    }

}
