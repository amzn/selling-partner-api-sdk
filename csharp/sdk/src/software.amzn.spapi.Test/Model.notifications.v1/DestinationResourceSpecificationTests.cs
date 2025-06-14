/*
 * Selling Partner API for Notifications
 *
 * The Selling Partner API for Notifications lets you subscribe to notifications that are relevant to a selling partner's business. Using this API you can create a destination to receive notifications, subscribe to notifications, delete notification subscriptions, and more.  For more information, refer to the [Notifications Use Case Guide](https://developer-docs.amazon.com/sp-api/docs/notifications-api-v1-use-case-guide).
 *
 * The version of the OpenAPI document: v1
 * Generated by: https://github.com/openapitools/openapi-generator.git
 */


using Xunit;

using System;
using System.Linq;
using System.IO;
using System.Collections.Generic;
using software.amzn.spapi.Model.notifications.v1;
using software.amzn.spapi.Client;
using System.Reflection;
using Newtonsoft.Json;

namespace software.amzn.spapi.Test.Model
{
    /// <summary>
    ///  Class for testing DestinationResourceSpecification
    /// </summary>
    /// <remarks>
    /// This file is automatically generated by OpenAPI Generator (https://openapi-generator.tech).
    /// Please update the test case below to test the model.
    /// </remarks>
    public class DestinationResourceSpecificationTests : IDisposable
    {
        // TODO uncomment below to declare an instance variable for DestinationResourceSpecification
        //private DestinationResourceSpecification instance;

        public DestinationResourceSpecificationTests()
        {
            // TODO uncomment below to create an instance of DestinationResourceSpecification
            //instance = new DestinationResourceSpecification();
        }

        public void Dispose()
        {
            // Cleanup when everything is done.
        }

        /// <summary>
        /// Test an instance of DestinationResourceSpecification
        /// </summary>
        [Fact]
        public void DestinationResourceSpecificationInstanceTest()
        {
            // TODO uncomment below to test "IsType" DestinationResourceSpecification
            //Assert.IsType<DestinationResourceSpecification>(instance);
        }

        /// <summary>
        /// Test the property 'Sqs'
        /// </summary>
        [Fact]
        public void SqsTest()
        {
            // TODO unit test for the property 'Sqs'
        }

        /// <summary>
        /// Test the property 'EventBridge'
        /// </summary>
        [Fact]
        public void EventBridgeTest()
        {
            // TODO unit test for the property 'EventBridge'
        }
    }
}
