/*
 * Selling Partner API for Finances
 *
 * The Selling Partner API for Finances helps you obtain financial information relevant to a seller's business. You can obtain financial events for a given order, financial event group, or date range without having to wait until a statement period closes. You can also obtain financial event groups for a given date range.
 *
 * The version of the OpenAPI document: v0
 * Generated by: https://github.com/openapitools/openapi-generator.git
 */


using Xunit;

using System;
using System.Linq;
using System.IO;
using System.Collections.Generic;
using software.amzn.spapi.Model.finances.v0;
using software.amzn.spapi.Client;
using System.Reflection;
using Newtonsoft.Json;

namespace software.amzn.spapi.Test.Model
{
    /// <summary>
    ///  Class for testing SellerReviewEnrollmentPaymentEvent
    /// </summary>
    /// <remarks>
    /// This file is automatically generated by OpenAPI Generator (https://openapi-generator.tech).
    /// Please update the test case below to test the model.
    /// </remarks>
    public class SellerReviewEnrollmentPaymentEventTests : IDisposable
    {
        // TODO uncomment below to declare an instance variable for SellerReviewEnrollmentPaymentEvent
        //private SellerReviewEnrollmentPaymentEvent instance;

        public SellerReviewEnrollmentPaymentEventTests()
        {
            // TODO uncomment below to create an instance of SellerReviewEnrollmentPaymentEvent
            //instance = new SellerReviewEnrollmentPaymentEvent();
        }

        public void Dispose()
        {
            // Cleanup when everything is done.
        }

        /// <summary>
        /// Test an instance of SellerReviewEnrollmentPaymentEvent
        /// </summary>
        [Fact]
        public void SellerReviewEnrollmentPaymentEventInstanceTest()
        {
            // TODO uncomment below to test "IsType" SellerReviewEnrollmentPaymentEvent
            //Assert.IsType<SellerReviewEnrollmentPaymentEvent>(instance);
        }

        /// <summary>
        /// Test the property 'PostedDate'
        /// </summary>
        [Fact]
        public void PostedDateTest()
        {
            // TODO unit test for the property 'PostedDate'
        }

        /// <summary>
        /// Test the property 'EnrollmentId'
        /// </summary>
        [Fact]
        public void EnrollmentIdTest()
        {
            // TODO unit test for the property 'EnrollmentId'
        }

        /// <summary>
        /// Test the property 'ParentASIN'
        /// </summary>
        [Fact]
        public void ParentASINTest()
        {
            // TODO unit test for the property 'ParentASIN'
        }

        /// <summary>
        /// Test the property 'FeeComponent'
        /// </summary>
        [Fact]
        public void FeeComponentTest()
        {
            // TODO unit test for the property 'FeeComponent'
        }

        /// <summary>
        /// Test the property 'ChargeComponent'
        /// </summary>
        [Fact]
        public void ChargeComponentTest()
        {
            // TODO unit test for the property 'ChargeComponent'
        }

        /// <summary>
        /// Test the property 'TotalAmount'
        /// </summary>
        [Fact]
        public void TotalAmountTest()
        {
            // TODO unit test for the property 'TotalAmount'
        }
    }
}
