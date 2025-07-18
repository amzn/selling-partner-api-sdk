/*
 * Selling Partner API for Pricing
 *
 * The Selling Partner API for Pricing helps you programmatically retrieve product pricing and offer information for Amazon Marketplace products.
 *
 * The version of the OpenAPI document: v0
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

namespace software.amzn.spapi.Model.pricing.v0
{
    /// <summary>
    /// Indicates whether the offer is a B2B or B2C offer
    /// </summary>
    /// <value>Indicates whether the offer is a B2B or B2C offer</value>
    [JsonConverter(typeof(StringEnumConverter))]
    public enum OfferCustomerType
    {
        /// <summary>
        /// Enum B2C for value: B2C
        /// </summary>
        [EnumMember(Value = "B2C")]
        B2C = 1,

        /// <summary>
        /// Enum B2B for value: B2B
        /// </summary>
        [EnumMember(Value = "B2B")]
        B2B = 2
    }

}
