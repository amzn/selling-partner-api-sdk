/*
 * Selling Partner API for FBA Inbound Eligibilty
 *
 * With the FBA Inbound Eligibility API, you can build applications that let sellers get eligibility previews for items before shipping them to Amazon's fulfillment centers. With this API you can find out if an item is eligible for inbound shipment to Amazon's fulfillment centers in a specific marketplace. You can also find out if an item is eligible for using the manufacturer barcode for FBA inventory tracking. Sellers can use this information to inform their decisions about which items to ship Amazon's fulfillment centers.
 *
 * The version of the OpenAPI document: v1
 * Generated by: https://github.com/openapitools/openapi-generator.git
 */


using Xunit;

using System;
using System.Linq;
using System.IO;
using System.Collections.Generic;
using software.amzn.spapi.Model.fba.eligibility.v1;
using software.amzn.spapi.Client;
using System.Reflection;
using Newtonsoft.Json;

namespace software.amzn.spapi.Test.Model
{
    /// <summary>
    ///  Class for testing ItemEligibilityPreview
    /// </summary>
    /// <remarks>
    /// This file is automatically generated by OpenAPI Generator (https://openapi-generator.tech).
    /// Please update the test case below to test the model.
    /// </remarks>
    public class ItemEligibilityPreviewTests : IDisposable
    {
        // TODO uncomment below to declare an instance variable for ItemEligibilityPreview
        //private ItemEligibilityPreview instance;

        public ItemEligibilityPreviewTests()
        {
            // TODO uncomment below to create an instance of ItemEligibilityPreview
            //instance = new ItemEligibilityPreview();
        }

        public void Dispose()
        {
            // Cleanup when everything is done.
        }

        /// <summary>
        /// Test an instance of ItemEligibilityPreview
        /// </summary>
        [Fact]
        public void ItemEligibilityPreviewInstanceTest()
        {
            // TODO uncomment below to test "IsType" ItemEligibilityPreview
            //Assert.IsType<ItemEligibilityPreview>(instance);
        }

        /// <summary>
        /// Test the property 'Asin'
        /// </summary>
        [Fact]
        public void AsinTest()
        {
            // TODO unit test for the property 'Asin'
        }

        /// <summary>
        /// Test the property 'MarketplaceId'
        /// </summary>
        [Fact]
        public void MarketplaceIdTest()
        {
            // TODO unit test for the property 'MarketplaceId'
        }

        /// <summary>
        /// Test the property 'Program'
        /// </summary>
        [Fact]
        public void ProgramTest()
        {
            // TODO unit test for the property 'Program'
        }

        /// <summary>
        /// Test the property 'IsEligibleForProgram'
        /// </summary>
        [Fact]
        public void IsEligibleForProgramTest()
        {
            // TODO unit test for the property 'IsEligibleForProgram'
        }

        /// <summary>
        /// Test the property 'IneligibilityReasonList'
        /// </summary>
        [Fact]
        public void IneligibilityReasonListTest()
        {
            // TODO unit test for the property 'IneligibilityReasonList'
        }
    }
}
