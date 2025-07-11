/*
 * Amazon Shipping API
 *
 * The Amazon Shipping API is designed to support outbound shipping use cases both for orders originating on Amazon-owned marketplaces as well as external channels/marketplaces. With these APIs, you can request shipping rates, create shipments, cancel shipments, and track shipments.
 *
 * The version of the OpenAPI document: v2
 * Contact: swa-api-core@amazon.com
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

namespace software.amzn.spapi.Model.shipping.v2
{
    /// <summary>
    /// The type of access point, like counter (HELIX), lockers, etc.
    /// </summary>
    /// <value>The type of access point, like counter (HELIX), lockers, etc.</value>
    [JsonConverter(typeof(StringEnumConverter))]
    public enum AccessPointType
    {
        /// <summary>
        /// Enum HELIX for value: HELIX
        /// </summary>
        [EnumMember(Value = "HELIX")]
        HELIX = 1,

        /// <summary>
        /// Enum CAMPUSLOCKER for value: CAMPUS_LOCKER
        /// </summary>
        [EnumMember(Value = "CAMPUS_LOCKER")]
        CAMPUSLOCKER = 2,

        /// <summary>
        /// Enum OMNILOCKER for value: OMNI_LOCKER
        /// </summary>
        [EnumMember(Value = "OMNI_LOCKER")]
        OMNILOCKER = 3,

        /// <summary>
        /// Enum ODINLOCKER for value: ODIN_LOCKER
        /// </summary>
        [EnumMember(Value = "ODIN_LOCKER")]
        ODINLOCKER = 4,

        /// <summary>
        /// Enum DOBBYLOCKER for value: DOBBY_LOCKER
        /// </summary>
        [EnumMember(Value = "DOBBY_LOCKER")]
        DOBBYLOCKER = 5,

        /// <summary>
        /// Enum CORELOCKER for value: CORE_LOCKER
        /// </summary>
        [EnumMember(Value = "CORE_LOCKER")]
        CORELOCKER = 6,

        /// <summary>
        /// Enum _3P for value: 3P
        /// </summary>
        [EnumMember(Value = "3P")]
        _3P = 7,

        /// <summary>
        /// Enum CAMPUSROOM for value: CAMPUS_ROOM
        /// </summary>
        [EnumMember(Value = "CAMPUS_ROOM")]
        CAMPUSROOM = 8
    }

}
