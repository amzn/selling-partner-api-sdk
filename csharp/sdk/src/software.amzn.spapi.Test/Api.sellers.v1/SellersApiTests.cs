/*
 * The Selling Partner API for Sellers
 *
 * The [Selling Partner API for Sellers](https://developer-docs.amazon.com/sp-api/docs/sellers-api-v1-reference) (Sellers API) provides essential information about seller accounts, such as:  - The marketplaces a seller can list in - The default language and currency of a marketplace - Whether the seller has suspended listings  Refer to the [Sellers API reference](https://developer-docs.amazon.com/sp-api/docs/sellers-api-v1-reference) for details about this API's operations, data types, and schemas.
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
using software.amzn.spapi.Api.sellers.v1;
using software.amzn.spapi.Model.sellers.v1;

namespace software.amzn.spapi.Api.sellers.v1.Test
{
    /// <summary>
    ///  Class for testing SellersApi
    /// </summary>
    /// <remarks>
    /// This file is automatically generated by Swagger Codegen.
    /// Please update the test case below to test the API endpoint.
    /// </remarks>
    public class SellersApiTests
    {
        private SellersApi instance;

        /// <summary>
        /// Setup before each unit test
        /// </summary>
        public void Init()
        {
            // TODO uncomment below to initialize instance for testing
            //instance = new SellersApi();
        }

        /// <summary>
        /// Clean up after each unit test
        /// </summary>
        public void Cleanup()
        {

        }

        /// <summary>
        /// Test an instance of SellersApi
        /// </summary>
        public void InstanceTest()
        {
            // TODO uncomment below to test 'IsInstanceOfType' SellersApi
            //Assert.IsInstanceOfType(typeof(SellersApi), instance, "instance is a SellersApi");
        }

        
        /// <summary>
        /// Test GetAccount
        /// </summary>
        [Fact]
        public void GetAccountTest()
        {
            // TODO uncomment below to test the method and replace null with proper value
            //var response = instance.GetAccount();
            //Assert.IsInstanceOf<GetAccountResponse> (response, "response is GetAccountResponse");
        }
        
        /// <summary>
        /// Test GetMarketplaceParticipations
        /// </summary>
        [Fact]
        public void GetMarketplaceParticipationsTest()
        {
            // TODO uncomment below to test the method and replace null with proper value
            //var response = instance.GetMarketplaceParticipations();
            //Assert.IsInstanceOf<GetMarketplaceParticipationsResponse> (response, "response is GetMarketplaceParticipationsResponse");
        }
        
    }

}
