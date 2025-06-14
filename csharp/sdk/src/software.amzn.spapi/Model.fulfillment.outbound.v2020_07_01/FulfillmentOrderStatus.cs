/*
 * Selling Partner APIs for Fulfillment Outbound
 *
 * The Selling Partner API for Fulfillment Outbound lets you create applications that help a seller fulfill Multi-Channel Fulfillment orders using their inventory in Amazon's fulfillment network. You can get information on both potential and existing fulfillment orders.
 *
 * The version of the OpenAPI document: 2020-07-01
 * Generated by: https://github.com/openapitools/openapi-generator.git
 */


using System;
using System.Collections;
using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.Linq;
using System.IO;
using System.Runtime.Serialization;
using System.Text;
using System.Text.RegularExpressions;
using Newtonsoft.Json;
using Newtonsoft.Json.Converters;
using Newtonsoft.Json.Linq;
using System.ComponentModel.DataAnnotations;
using OpenAPIDateConverter = software.amzn.spapi.Client.OpenAPIDateConverter;

namespace software.amzn.spapi.Model.fulfillment.outbound.v2020_07_01
{
    /// <summary>
    /// The current status of the fulfillment order.
    /// </summary>
    /// <value>The current status of the fulfillment order.</value>
    [JsonConverter(typeof(StringEnumConverter))]
    public enum FulfillmentOrderStatus
    {
        /// <summary>
        /// Enum New for value: New
        /// </summary>
        [EnumMember(Value = "New")]
        New = 1,

        /// <summary>
        /// Enum Received for value: Received
        /// </summary>
        [EnumMember(Value = "Received")]
        Received = 2,

        /// <summary>
        /// Enum Planning for value: Planning
        /// </summary>
        [EnumMember(Value = "Planning")]
        Planning = 3,

        /// <summary>
        /// Enum Processing for value: Processing
        /// </summary>
        [EnumMember(Value = "Processing")]
        Processing = 4,

        /// <summary>
        /// Enum Cancelled for value: Cancelled
        /// </summary>
        [EnumMember(Value = "Cancelled")]
        Cancelled = 5,

        /// <summary>
        /// Enum Complete for value: Complete
        /// </summary>
        [EnumMember(Value = "Complete")]
        Complete = 6,

        /// <summary>
        /// Enum CompletePartialled for value: CompletePartialled
        /// </summary>
        [EnumMember(Value = "CompletePartialled")]
        CompletePartialled = 7,

        /// <summary>
        /// Enum Unfulfillable for value: Unfulfillable
        /// </summary>
        [EnumMember(Value = "Unfulfillable")]
        Unfulfillable = 8,

        /// <summary>
        /// Enum Invalid for value: Invalid
        /// </summary>
        [EnumMember(Value = "Invalid")]
        Invalid = 9
    }

}
