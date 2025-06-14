/*
 * Selling Partner API for Pricing
 *
 * The Selling Partner API for Pricing helps you programmatically retrieve product pricing and offer pricing information for Amazon Marketplace products.  For more information, refer to the [Product Pricing v2022-05-01 Use Case Guide](https://developer-docs.amazon.com/sp-api/docs/product-pricing-api-v2022-05-01-use-case-guide).
 *
 * The version of the OpenAPI document: 2022-05-01
 * Generated by: https://github.com/openapitools/openapi-generator.git
 */


using Xunit;

using System;
using System.Linq;
using System.IO;
using System.Collections.Generic;
using software.amzn.spapi.Model.pricing.v2022_05_01;
using software.amzn.spapi.Client;
using System.Reflection;
using Newtonsoft.Json;

namespace software.amzn.spapi.Test.Model
{
    /// <summary>
    ///  Class for testing OfferIdentifier
    /// </summary>
    /// <remarks>
    /// This file is automatically generated by OpenAPI Generator (https://openapi-generator.tech).
    /// Please update the test case below to test the model.
    /// </remarks>
    public class OfferIdentifierTests : IDisposable
    {
        // TODO uncomment below to declare an instance variable for OfferIdentifier
        //private OfferIdentifier instance;

        public OfferIdentifierTests()
        {
            // TODO uncomment below to create an instance of OfferIdentifier
            //instance = new OfferIdentifier();
        }

        public void Dispose()
        {
            // Cleanup when everything is done.
        }

        /// <summary>
        /// Test an instance of OfferIdentifier
        /// </summary>
        [Fact]
        public void OfferIdentifierInstanceTest()
        {
            // TODO uncomment below to test "IsType" OfferIdentifier
            //Assert.IsType<OfferIdentifier>(instance);
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
        /// Test the property 'SellerId'
        /// </summary>
        [Fact]
        public void SellerIdTest()
        {
            // TODO unit test for the property 'SellerId'
        }

        /// <summary>
        /// Test the property 'Sku'
        /// </summary>
        [Fact]
        public void SkuTest()
        {
            // TODO unit test for the property 'Sku'
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
        /// Test the property 'FulfillmentType'
        /// </summary>
        [Fact]
        public void FulfillmentTypeTest()
        {
            // TODO unit test for the property 'FulfillmentType'
        }
    }
}
