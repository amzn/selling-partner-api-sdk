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
    /// The input appointment time details.
    /// </summary>
    [DataContract(Name = "AppointmentTimeInput")]
    public partial class AppointmentTimeInput : IValidatableObject
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="AppointmentTimeInput" /> class.
        /// </summary>
        [JsonConstructorAttribute]
        protected AppointmentTimeInput() { }
        /// <summary>
        /// Initializes a new instance of the <see cref="AppointmentTimeInput" /> class.
        /// </summary>
        /// <param name="startTime">The date, time in UTC for the start time of an appointment in ISO 8601 format. (required).</param>
        /// <param name="durationInMinutes">The duration of an appointment in minutes..</param>
        public AppointmentTimeInput(DateTime startTime = default(DateTime), int durationInMinutes = default(int))
        {
            this.StartTime = startTime;
            this.DurationInMinutes = durationInMinutes;
        }

        /// <summary>
        /// The date, time in UTC for the start time of an appointment in ISO 8601 format.
        /// </summary>
        /// <value>The date, time in UTC for the start time of an appointment in ISO 8601 format.</value>
        [DataMember(Name = "startTime", IsRequired = true, EmitDefaultValue = true)]
        public DateTime StartTime { get; set; }

        /// <summary>
        /// The duration of an appointment in minutes.
        /// </summary>
        /// <value>The duration of an appointment in minutes.</value>
        [DataMember(Name = "durationInMinutes", EmitDefaultValue = false)]
        public int DurationInMinutes { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            StringBuilder sb = new StringBuilder();
            sb.Append("class AppointmentTimeInput {\n");
            sb.Append("  StartTime: ").Append(StartTime).Append("\n");
            sb.Append("  DurationInMinutes: ").Append(DurationInMinutes).Append("\n");
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
