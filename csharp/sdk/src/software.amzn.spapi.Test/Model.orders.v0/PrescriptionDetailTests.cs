/*
 * Selling Partner API for Orders
 *
 * Use the Orders Selling Partner API to programmatically retrieve order information. With this API, you can develop fast, flexible, and custom applications to manage order synchronization, perform order research, and create demand-based decision support tools.   _Note:_ For the JP, AU, and SG marketplaces, the Orders API supports orders from 2016 onward. For all other marketplaces, the Orders API supports orders for the last two years (orders older than this don't show up in the response).
 *
 * The version of the OpenAPI document: v0
 * Generated by: https://github.com/openapitools/openapi-generator.git
 */


using Xunit;

using System;
using System.Linq;
using System.IO;
using System.Collections.Generic;
using software.amzn.spapi.Model.orders.v0;
using software.amzn.spapi.Client;
using System.Reflection;
using Newtonsoft.Json;

namespace software.amzn.spapi.Test.Model
{
    /// <summary>
    ///  Class for testing PrescriptionDetail
    /// </summary>
    /// <remarks>
    /// This file is automatically generated by OpenAPI Generator (https://openapi-generator.tech).
    /// Please update the test case below to test the model.
    /// </remarks>
    public class PrescriptionDetailTests : IDisposable
    {
        // TODO uncomment below to declare an instance variable for PrescriptionDetail
        //private PrescriptionDetail instance;

        public PrescriptionDetailTests()
        {
            // TODO uncomment below to create an instance of PrescriptionDetail
            //instance = new PrescriptionDetail();
        }

        public void Dispose()
        {
            // Cleanup when everything is done.
        }

        /// <summary>
        /// Test an instance of PrescriptionDetail
        /// </summary>
        [Fact]
        public void PrescriptionDetailInstanceTest()
        {
            // TODO uncomment below to test "IsType" PrescriptionDetail
            //Assert.IsType<PrescriptionDetail>(instance);
        }

        /// <summary>
        /// Test the property 'PrescriptionId'
        /// </summary>
        [Fact]
        public void PrescriptionIdTest()
        {
            // TODO unit test for the property 'PrescriptionId'
        }

        /// <summary>
        /// Test the property 'ExpirationDate'
        /// </summary>
        [Fact]
        public void ExpirationDateTest()
        {
            // TODO unit test for the property 'ExpirationDate'
        }

        /// <summary>
        /// Test the property 'WrittenQuantity'
        /// </summary>
        [Fact]
        public void WrittenQuantityTest()
        {
            // TODO unit test for the property 'WrittenQuantity'
        }

        /// <summary>
        /// Test the property 'TotalRefillsAuthorized'
        /// </summary>
        [Fact]
        public void TotalRefillsAuthorizedTest()
        {
            // TODO unit test for the property 'TotalRefillsAuthorized'
        }

        /// <summary>
        /// Test the property 'RefillsRemaining'
        /// </summary>
        [Fact]
        public void RefillsRemainingTest()
        {
            // TODO unit test for the property 'RefillsRemaining'
        }

        /// <summary>
        /// Test the property 'ClinicId'
        /// </summary>
        [Fact]
        public void ClinicIdTest()
        {
            // TODO unit test for the property 'ClinicId'
        }

        /// <summary>
        /// Test the property 'UsageInstructions'
        /// </summary>
        [Fact]
        public void UsageInstructionsTest()
        {
            // TODO unit test for the property 'UsageInstructions'
        }
    }
}
