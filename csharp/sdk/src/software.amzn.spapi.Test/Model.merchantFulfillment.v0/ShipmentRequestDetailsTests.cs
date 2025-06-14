/*
 * Selling Partner API for Merchant Fulfillment
 *
 * With the Selling Partner API for Merchant Fulfillment, you can build applications that sellers can use to purchase shipping for non-Prime and Prime orders using Amazon's Buy Shipping Services.
 *
 * The version of the OpenAPI document: v0
 * Generated by: https://github.com/openapitools/openapi-generator.git
 */


using Xunit;

using System;
using System.Linq;
using System.IO;
using System.Collections.Generic;
using software.amzn.spapi.Model.merchantFulfillment.v0;
using software.amzn.spapi.Client;
using System.Reflection;
using Newtonsoft.Json;

namespace software.amzn.spapi.Test.Model
{
    /// <summary>
    ///  Class for testing ShipmentRequestDetails
    /// </summary>
    /// <remarks>
    /// This file is automatically generated by OpenAPI Generator (https://openapi-generator.tech).
    /// Please update the test case below to test the model.
    /// </remarks>
    public class ShipmentRequestDetailsTests : IDisposable
    {
        // TODO uncomment below to declare an instance variable for ShipmentRequestDetails
        //private ShipmentRequestDetails instance;

        public ShipmentRequestDetailsTests()
        {
            // TODO uncomment below to create an instance of ShipmentRequestDetails
            //instance = new ShipmentRequestDetails();
        }

        public void Dispose()
        {
            // Cleanup when everything is done.
        }

        /// <summary>
        /// Test an instance of ShipmentRequestDetails
        /// </summary>
        [Fact]
        public void ShipmentRequestDetailsInstanceTest()
        {
            // TODO uncomment below to test "IsType" ShipmentRequestDetails
            //Assert.IsType<ShipmentRequestDetails>(instance);
        }

        /// <summary>
        /// Test the property 'AmazonOrderId'
        /// </summary>
        [Fact]
        public void AmazonOrderIdTest()
        {
            // TODO unit test for the property 'AmazonOrderId'
        }

        /// <summary>
        /// Test the property 'SellerOrderId'
        /// </summary>
        [Fact]
        public void SellerOrderIdTest()
        {
            // TODO unit test for the property 'SellerOrderId'
        }

        /// <summary>
        /// Test the property 'ItemList'
        /// </summary>
        [Fact]
        public void ItemListTest()
        {
            // TODO unit test for the property 'ItemList'
        }

        /// <summary>
        /// Test the property 'ShipFromAddress'
        /// </summary>
        [Fact]
        public void ShipFromAddressTest()
        {
            // TODO unit test for the property 'ShipFromAddress'
        }

        /// <summary>
        /// Test the property 'PackageDimensions'
        /// </summary>
        [Fact]
        public void PackageDimensionsTest()
        {
            // TODO unit test for the property 'PackageDimensions'
        }

        /// <summary>
        /// Test the property 'Weight'
        /// </summary>
        [Fact]
        public void WeightTest()
        {
            // TODO unit test for the property 'Weight'
        }

        /// <summary>
        /// Test the property 'MustArriveByDate'
        /// </summary>
        [Fact]
        public void MustArriveByDateTest()
        {
            // TODO unit test for the property 'MustArriveByDate'
        }

        /// <summary>
        /// Test the property 'ShipDate'
        /// </summary>
        [Fact]
        public void ShipDateTest()
        {
            // TODO unit test for the property 'ShipDate'
        }

        /// <summary>
        /// Test the property 'ShippingServiceOptions'
        /// </summary>
        [Fact]
        public void ShippingServiceOptionsTest()
        {
            // TODO unit test for the property 'ShippingServiceOptions'
        }

        /// <summary>
        /// Test the property 'LabelCustomization'
        /// </summary>
        [Fact]
        public void LabelCustomizationTest()
        {
            // TODO unit test for the property 'LabelCustomization'
        }
    }
}
