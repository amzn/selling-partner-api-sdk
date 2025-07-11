/*
 * Selling Partner API for Services
 *
 * With the Services API, you can build applications that help service providers get and modify their service orders and manage their resources.
 *
 * The version of the OpenAPI document: v1
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

namespace software.amzn.spapi.Model.services.v1
{
    /// <summary>
    /// Input for fulfillment time details
    /// </summary>
    [DataContract(Name = "FulfillmentTime")]
    public partial class FulfillmentTime : IValidatableObject
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="FulfillmentTime" /> class.
        /// </summary>
        /// <param name="startTime">The date, time in UTC of the fulfillment start time in ISO 8601 format..</param>
        /// <param name="endTime">The date, time in UTC of the fulfillment end time in ISO 8601 format..</param>
        public FulfillmentTime(DateTime startTime = default(DateTime), DateTime endTime = default(DateTime))
        {
            this.StartTime = startTime;
            this.EndTime = endTime;
        }

        /// <summary>
        /// The date, time in UTC of the fulfillment start time in ISO 8601 format.
        /// </summary>
        /// <value>The date, time in UTC of the fulfillment start time in ISO 8601 format.</value>
        [DataMember(Name = "startTime", EmitDefaultValue = false)]
        public DateTime StartTime { get; set; }

        /// <summary>
        /// The date, time in UTC of the fulfillment end time in ISO 8601 format.
        /// </summary>
        /// <value>The date, time in UTC of the fulfillment end time in ISO 8601 format.</value>
        [DataMember(Name = "endTime", EmitDefaultValue = false)]
        public DateTime EndTime { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            StringBuilder sb = new StringBuilder();
            sb.Append("class FulfillmentTime {\n");
            sb.Append("  StartTime: ").Append(StartTime).Append("\n");
            sb.Append("  EndTime: ").Append(EndTime).Append("\n");
            sb.Append("}\n");
            return sb.ToString();
        }

        /// <summary>
        /// Returns the JSON string presentation of the object
        /// </summary>
        /// <returns>JSON string presentation of the object</returns>
        public virtual string ToJson()
        {
            return Newtonsoft.Json.JsonConvert.SerializeObject(this, Newtonsoft.Json.Formatting.Indented);
        }

        /// <summary>
        /// To validate all properties of the instance
        /// </summary>
        /// <param name="validationContext">Validation context</param>
        /// <returns>Validation Result</returns>
        IEnumerable<ValidationResult> IValidatableObject.Validate(ValidationContext validationContext)
        {
            yield break;
        }
    }

}
