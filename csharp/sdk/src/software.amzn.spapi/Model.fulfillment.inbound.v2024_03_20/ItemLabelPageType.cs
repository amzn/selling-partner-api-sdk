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
    /// The page type to use to print the labels. Possible values: &#39;A4_21&#39;, &#39;A4_24&#39;, &#39;A4_24_64x33&#39;, &#39;A4_24_66x35&#39;, &#39;A4_24_70x36&#39;, &#39;A4_24_70x37&#39;, &#39;A4_24i&#39;, &#39;A4_27&#39;, &#39;A4_40_52x29&#39;, &#39;A4_44_48x25&#39;, &#39;Letter_30&#39;.
    /// </summary>
    /// <value>The page type to use to print the labels. Possible values: &#39;A4_21&#39;, &#39;A4_24&#39;, &#39;A4_24_64x33&#39;, &#39;A4_24_66x35&#39;, &#39;A4_24_70x36&#39;, &#39;A4_24_70x37&#39;, &#39;A4_24i&#39;, &#39;A4_27&#39;, &#39;A4_40_52x29&#39;, &#39;A4_44_48x25&#39;, &#39;Letter_30&#39;.</value>
    [JsonConverter(typeof(StringEnumConverter))]
    public enum ItemLabelPageType
    {
        /// <summary>
        /// Enum A421 for value: A4_21
        /// </summary>
        [EnumMember(Value = "A4_21")]
        A421 = 1,

        /// <summary>
        /// Enum A424 for value: A4_24
        /// </summary>
        [EnumMember(Value = "A4_24")]
        A424 = 2,

        /// <summary>
        /// Enum A42464x33 for value: A4_24_64x33
        /// </summary>
        [EnumMember(Value = "A4_24_64x33")]
        A42464x33 = 3,

        /// <summary>
        /// Enum A42466x35 for value: A4_24_66x35
        /// </summary>
        [EnumMember(Value = "A4_24_66x35")]
        A42466x35 = 4,

        /// <summary>
        /// Enum A42470x36 for value: A4_24_70x36
        /// </summary>
        [EnumMember(Value = "A4_24_70x36")]
        A42470x36 = 5,

        /// <summary>
        /// Enum A42470x37 for value: A4_24_70x37
        /// </summary>
        [EnumMember(Value = "A4_24_70x37")]
        A42470x37 = 6,

        /// <summary>
        /// Enum A424i for value: A4_24i
        /// </summary>
        [EnumMember(Value = "A4_24i")]
        A424i = 7,

        /// <summary>
        /// Enum A427 for value: A4_27
        /// </summary>
        [EnumMember(Value = "A4_27")]
        A427 = 8,

        /// <summary>
        /// Enum A44052x29 for value: A4_40_52x29
        /// </summary>
        [EnumMember(Value = "A4_40_52x29")]
        A44052x29 = 9,

        /// <summary>
        /// Enum A44448x25 for value: A4_44_48x25
        /// </summary>
        [EnumMember(Value = "A4_44_48x25")]
        A44448x25 = 10,

        /// <summary>
        /// Enum Letter30 for value: Letter_30
        /// </summary>
        [EnumMember(Value = "Letter_30")]
        Letter30 = 11
    }

}
