/*
 * Selling Partner API for Product Fees
 *
 * The Selling Partner API for Product Fees lets you programmatically retrieve estimated fees for a product. You can then account for those fees in your pricing.
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

namespace software.amzn.spapi.Model.productFees.v0
{
    /// <summary>
    /// An optional enrollment program to return the estimated fees when the offer is fulfilled by Amazon (IsAmazonFulfilled is set to true).
    /// </summary>
    /// <value>An optional enrollment program to return the estimated fees when the offer is fulfilled by Amazon (IsAmazonFulfilled is set to true).</value>
    [JsonConverter(typeof(StringEnumConverter))]
    public enum OptionalFulfillmentProgram
    {
        /// <summary>
        /// Enum CORE for value: FBA_CORE
        /// </summary>
        [EnumMember(Value = "FBA_CORE")]
        CORE = 1,

        /// <summary>
        /// Enum SNL for value: FBA_SNL
        /// </summary>
        [EnumMember(Value = "FBA_SNL")]
        SNL = 2,

        /// <summary>
        /// Enum EFN for value: FBA_EFN
        /// </summary>
        [EnumMember(Value = "FBA_EFN")]
        EFN = 3
    }

}
