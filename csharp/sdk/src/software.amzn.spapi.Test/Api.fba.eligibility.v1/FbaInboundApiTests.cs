/*
 * Selling Partner API for FBA Inbound Eligibilty
 *
 * With the FBA Inbound Eligibility API, you can build applications that let sellers get eligibility previews for items before shipping them to Amazon's fulfillment centers. With this API you can find out if an item is eligible for inbound shipment to Amazon's fulfillment centers in a specific marketplace. You can also find out if an item is eligible for using the manufacturer barcode for FBA inventory tracking. Sellers can use this information to inform their decisions about which items to ship Amazon's fulfillment centers.
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
using software.amzn.spapi.Api.fba.eligibility.v1;
using software.amzn.spapi.Model.fba.eligibility.v1;

namespace software.amzn.spapi.Api.fba.eligibility.v1.Test
{
    /// <summary>
    ///  Class for testing FbaInboundApi
    /// </summary>
    /// <remarks>
    /// This file is automatically generated by Swagger Codegen.
    /// Please update the test case below to test the API endpoint.
    /// </remarks>
    public class FbaInboundApiTests
    {
        private FbaInboundApi instance;

        /// <summary>
        /// Setup before each unit test
        /// </summary>
        public void Init()
        {
            // TODO uncomment below to initialize instance for testing
            //instance = new FbaInboundApi();
        }

        /// <summary>
        /// Clean up after each unit test
        /// </summary>
        public void Cleanup()
        {

        }

        /// <summary>
        /// Test an instance of FbaInboundApi
        /// </summary>
        public void InstanceTest()
        {
            // TODO uncomment below to test 'IsInstanceOfType' FbaInboundApi
            //Assert.IsInstanceOfType(typeof(FbaInboundApi), instance, "instance is a FbaInboundApi");
        }

        
        /// <summary>
        /// Test GetItemEligibilityPreview
        /// </summary>
        [Fact]
        public void GetItemEligibilityPreviewTest()
        {
            // TODO uncomment below to test the method and replace null with proper value
            //string asin = null;
            //string program = null;
            //List<string>? marketplaceIds = null;
            //var response = instance.GetItemEligibilityPreview(asinprogrammarketplaceIds);
            //Assert.IsInstanceOf<GetItemEligibilityPreviewResponse> (response, "response is GetItemEligibilityPreviewResponse");
        }
        
    }

}
