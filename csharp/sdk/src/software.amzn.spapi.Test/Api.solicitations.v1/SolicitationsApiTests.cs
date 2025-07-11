/*
 * Selling Partner API for Solicitations
 *
 * With the Solicitations API you can build applications that send non-critical solicitations to buyers. You can get a list of solicitation types that are available for an order that you specify, then call an operation that sends a solicitation to the buyer for that order. Buyers cannot respond to solicitations sent by this API, and these solicitations do not appear in the Messaging section of Seller Central or in the recipient's Message Center. The Solicitations API returns responses that are formed according to the <a href=https://tools.ietf.org/html/draft-kelly-json-hal-08>JSON Hypertext Application Language</a> (HAL) standard.
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
using software.amzn.spapi.Api.solicitations.v1;
using software.amzn.spapi.Model.solicitations.v1;

namespace software.amzn.spapi.Api.solicitations.v1.Test
{
    /// <summary>
    ///  Class for testing SolicitationsApi
    /// </summary>
    /// <remarks>
    /// This file is automatically generated by Swagger Codegen.
    /// Please update the test case below to test the API endpoint.
    /// </remarks>
    public class SolicitationsApiTests
    {
        private SolicitationsApi instance;

        /// <summary>
        /// Setup before each unit test
        /// </summary>
        public void Init()
        {
            // TODO uncomment below to initialize instance for testing
            //instance = new SolicitationsApi();
        }

        /// <summary>
        /// Clean up after each unit test
        /// </summary>
        public void Cleanup()
        {

        }

        /// <summary>
        /// Test an instance of SolicitationsApi
        /// </summary>
        public void InstanceTest()
        {
            // TODO uncomment below to test 'IsInstanceOfType' SolicitationsApi
            //Assert.IsInstanceOfType(typeof(SolicitationsApi), instance, "instance is a SolicitationsApi");
        }

        
        /// <summary>
        /// Test CreateProductReviewAndSellerFeedbackSolicitation
        /// </summary>
        [Fact]
        public void CreateProductReviewAndSellerFeedbackSolicitationTest()
        {
            // TODO uncomment below to test the method and replace null with proper value
            //string amazonOrderId = null;
            //List<string> marketplaceIds = null;
            //var response = instance.CreateProductReviewAndSellerFeedbackSolicitation(amazonOrderIdmarketplaceIds);
            //Assert.IsInstanceOf<CreateProductReviewAndSellerFeedbackSolicitationResponse> (response, "response is CreateProductReviewAndSellerFeedbackSolicitationResponse");
        }
        
        /// <summary>
        /// Test GetSolicitationActionsForOrder
        /// </summary>
        [Fact]
        public void GetSolicitationActionsForOrderTest()
        {
            // TODO uncomment below to test the method and replace null with proper value
            //string amazonOrderId = null;
            //List<string> marketplaceIds = null;
            //var response = instance.GetSolicitationActionsForOrder(amazonOrderIdmarketplaceIds);
            //Assert.IsInstanceOf<GetSolicitationActionsForOrderResponse> (response, "response is GetSolicitationActionsForOrderResponse");
        }
        
    }

}
