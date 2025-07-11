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
    /// A code for why the item is invalid for return.
    /// </summary>
    /// <value>A code for why the item is invalid for return.</value>
    [JsonConverter(typeof(StringEnumConverter))]
    public enum InvalidItemReasonCode
    {
        /// <summary>
        /// Enum InvalidValues for value: InvalidValues
        /// </summary>
        [EnumMember(Value = "InvalidValues")]
        InvalidValues = 1,

        /// <summary>
        /// Enum DuplicateRequest for value: DuplicateRequest
        /// </summary>
        [EnumMember(Value = "DuplicateRequest")]
        DuplicateRequest = 2,

        /// <summary>
        /// Enum NoCompletedShipItems for value: NoCompletedShipItems
        /// </summary>
        [EnumMember(Value = "NoCompletedShipItems")]
        NoCompletedShipItems = 3,

        /// <summary>
        /// Enum NoReturnableQuantity for value: NoReturnableQuantity
        /// </summary>
        [EnumMember(Value = "NoReturnableQuantity")]
        NoReturnableQuantity = 4
    }

}
