/*
 * The Selling Partner API for FBA inbound operations.
 *
 * The Selling Partner API for Fulfillment By Amazon (FBA) Inbound. The FBA Inbound API enables building inbound workflows to create, manage, and send shipments into Amazon's fulfillment network. The API has interoperability with the Send-to-Amazon user interface.
 *
 * The version of the OpenAPI document: 2024-03-20
 * Generated by: https://github.com/openapitools/openapi-generator.git
 */


using Xunit;

using System;
using System.Linq;
using System.IO;
using System.Collections.Generic;
using software.amzn.spapi.Model.fulfillment.inbound.v2024_03_20;
using software.amzn.spapi.Client;
using System.Reflection;
using Newtonsoft.Json;

namespace software.amzn.spapi.Test.Model
{
    /// <summary>
    ///  Class for testing SelfShipAppointmentDetails
    /// </summary>
    /// <remarks>
    /// This file is automatically generated by OpenAPI Generator (https://openapi-generator.tech).
    /// Please update the test case below to test the model.
    /// </remarks>
    public class SelfShipAppointmentDetailsTests : IDisposable
    {
        // TODO uncomment below to declare an instance variable for SelfShipAppointmentDetails
        //private SelfShipAppointmentDetails instance;

        public SelfShipAppointmentDetailsTests()
        {
            // TODO uncomment below to create an instance of SelfShipAppointmentDetails
            //instance = new SelfShipAppointmentDetails();
        }

        public void Dispose()
        {
            // Cleanup when everything is done.
        }

        /// <summary>
        /// Test an instance of SelfShipAppointmentDetails
        /// </summary>
        [Fact]
        public void SelfShipAppointmentDetailsInstanceTest()
        {
            // TODO uncomment below to test "IsType" SelfShipAppointmentDetails
            //Assert.IsType<SelfShipAppointmentDetails>(instance);
        }

        /// <summary>
        /// Test the property 'AppointmentId'
        /// </summary>
        [Fact]
        public void AppointmentIdTest()
        {
            // TODO unit test for the property 'AppointmentId'
        }

        /// <summary>
        /// Test the property 'AppointmentSlotTime'
        /// </summary>
        [Fact]
        public void AppointmentSlotTimeTest()
        {
            // TODO unit test for the property 'AppointmentSlotTime'
        }

        /// <summary>
        /// Test the property 'AppointmentStatus'
        /// </summary>
        [Fact]
        public void AppointmentStatusTest()
        {
            // TODO unit test for the property 'AppointmentStatus'
        }
    }
}
