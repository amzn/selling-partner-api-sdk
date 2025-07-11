/*
 * The Selling Partner API for FBA inbound operations.
 *
 * The Selling Partner API for Fulfillment By Amazon (FBA) Inbound. The FBA Inbound API enables building inbound workflows to create, manage, and send shipments into Amazon's fulfillment network. The API has interoperability with the Send-to-Amazon user interface.
 *
 * The version of the OpenAPI document: 2024-03-20
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

namespace software.amzn.spapi.Model.fulfillment.inbound.v2024_03_20
{
    /// <summary>
    /// Unit of linear measure.
    /// </summary>
    /// <value>Unit of linear measure.</value>
    [JsonConverter(typeof(StringEnumConverter))]
    public enum UnitOfMeasurement
    {
        /// <summary>
        /// Enum IN for value: IN
        /// </summary>
        [EnumMember(Value = "IN")]
        IN = 1,

        /// <summary>
        /// Enum CM for value: CM
        /// </summary>
        [EnumMember(Value = "CM")]
        CM = 2
    }

}
