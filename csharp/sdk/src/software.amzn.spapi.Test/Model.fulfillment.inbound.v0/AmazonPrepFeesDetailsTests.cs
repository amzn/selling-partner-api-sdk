/*
 * Selling Partner API for Fulfillment Inbound
 *
 * The Selling Partner API for Fulfillment Inbound lets you create applications that create and update inbound shipments of inventory to Amazon's fulfillment network.
 *
 * The version of the OpenAPI document: v0
 * Generated by: https://github.com/openapitools/openapi-generator.git
 */


using Xunit;

using System;
using System.Linq;
using System.IO;
using System.Collections.Generic;
using software.amzn.spapi.Model.fulfillment.inbound.v0;
using software.amzn.spapi.Client;
using System.Reflection;
using Newtonsoft.Json;

namespace software.amzn.spapi.Test.Model
{
    /// <summary>
    ///  Class for testing AmazonPrepFeesDetails
    /// </summary>
    /// <remarks>
    /// This file is automatically generated by OpenAPI Generator (https://openapi-generator.tech).
    /// Please update the test case below to test the model.
    /// </remarks>
    public class AmazonPrepFeesDetailsTests : IDisposable
    {
        // TODO uncomment below to declare an instance variable for AmazonPrepFeesDetails
        //private AmazonPrepFeesDetails instance;

        public AmazonPrepFeesDetailsTests()
        {
            // TODO uncomment below to create an instance of AmazonPrepFeesDetails
            //instance = new AmazonPrepFeesDetails();
        }

        public void Dispose()
        {
            // Cleanup when everything is done.
        }

        /// <summary>
        /// Test an instance of AmazonPrepFeesDetails
        /// </summary>
        [Fact]
        public void AmazonPrepFeesDetailsInstanceTest()
        {
            // TODO uncomment below to test "IsType" AmazonPrepFeesDetails
            //Assert.IsType<AmazonPrepFeesDetails>(instance);
        }

        /// <summary>
        /// Test the property 'PrepInstruction'
        /// </summary>
        [Fact]
        public void PrepInstructionTest()
        {
            // TODO unit test for the property 'PrepInstruction'
        }

        /// <summary>
        /// Test the property 'FeePerUnit'
        /// </summary>
        [Fact]
        public void FeePerUnitTest()
        {
            // TODO unit test for the property 'FeePerUnit'
        }
    }
}
