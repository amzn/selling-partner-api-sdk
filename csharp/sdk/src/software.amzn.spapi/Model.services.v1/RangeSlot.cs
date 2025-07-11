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
    /// Capacity slots represented in a format similar to availability rules.
    /// </summary>
    [DataContract(Name = "RangeSlot")]
    public partial class RangeSlot : IValidatableObject
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="RangeSlot" /> class.
        /// </summary>
        /// <param name="startDateTime">Start date time of slot in ISO 8601 format with precision of seconds..</param>
        /// <param name="endDateTime">End date time of slot in ISO 8601 format with precision of seconds..</param>
        /// <param name="capacity">Capacity of the slot..</param>
        public RangeSlot(DateTime startDateTime = default(DateTime), DateTime endDateTime = default(DateTime), int capacity = default(int))
        {
            this.StartDateTime = startDateTime;
            this.EndDateTime = endDateTime;
            this.Capacity = capacity;
        }

        /// <summary>
        /// Start date time of slot in ISO 8601 format with precision of seconds.
        /// </summary>
        /// <value>Start date time of slot in ISO 8601 format with precision of seconds.</value>
        [DataMember(Name = "startDateTime", EmitDefaultValue = false)]
        public DateTime StartDateTime { get; set; }

        /// <summary>
        /// End date time of slot in ISO 8601 format with precision of seconds.
        /// </summary>
        /// <value>End date time of slot in ISO 8601 format with precision of seconds.</value>
        [DataMember(Name = "endDateTime", EmitDefaultValue = false)]
        public DateTime EndDateTime { get; set; }

        /// <summary>
        /// Capacity of the slot.
        /// </summary>
        /// <value>Capacity of the slot.</value>
        [DataMember(Name = "capacity", EmitDefaultValue = false)]
        public int Capacity { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            StringBuilder sb = new StringBuilder();
            sb.Append("class RangeSlot {\n");
            sb.Append("  StartDateTime: ").Append(StartDateTime).Append("\n");
            sb.Append("  EndDateTime: ").Append(EndDateTime).Append("\n");
            sb.Append("  Capacity: ").Append(Capacity).Append("\n");
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
