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
    /// The condition of the return item when received by an Amazon fulfillment center.
    /// </summary>
    /// <value>The condition of the return item when received by an Amazon fulfillment center.</value>
    [JsonConverter(typeof(StringEnumConverter))]
    public enum ReturnItemDisposition
    {
        /// <summary>
        /// Enum Sellable for value: Sellable
        /// </summary>
        [EnumMember(Value = "Sellable")]
        Sellable = 1,

        /// <summary>
        /// Enum Defective for value: Defective
        /// </summary>
        [EnumMember(Value = "Defective")]
        Defective = 2,

        /// <summary>
        /// Enum CustomerDamaged for value: CustomerDamaged
        /// </summary>
        [EnumMember(Value = "CustomerDamaged")]
        CustomerDamaged = 3,

        /// <summary>
        /// Enum CarrierDamaged for value: CarrierDamaged
        /// </summary>
        [EnumMember(Value = "CarrierDamaged")]
        CarrierDamaged = 4,

        /// <summary>
        /// Enum FulfillerDamaged for value: FulfillerDamaged
        /// </summary>
        [EnumMember(Value = "FulfillerDamaged")]
        FulfillerDamaged = 5
    }

}
