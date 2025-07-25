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
    /// In this slot format each slot only has the requested capacity types. This slot size is as specified by slot duration.
    /// </summary>
    [DataContract(Name = "FixedSlot")]
    public partial class FixedSlot : IValidatableObject
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="FixedSlot" /> class.
        /// </summary>
        /// <param name="startDateTime">Start date time of slot in ISO 8601 format with precision of seconds..</param>
        /// <param name="scheduledCapacity">Scheduled capacity corresponding to the slot. This capacity represents the originally allocated capacity as per resource schedule..</param>
        /// <param name="availableCapacity">Available capacity corresponding to the slot. This capacity represents the capacity available for allocation to reservations..</param>
        /// <param name="encumberedCapacity">Encumbered capacity corresponding to the slot. This capacity represents the capacity allocated for Amazon Jobs/Appointments/Orders..</param>
        /// <param name="reservedCapacity">Reserved capacity corresponding to the slot. This capacity represents the capacity made unavailable due to events like Breaks/Leaves/Lunch..</param>
        public FixedSlot(DateTime startDateTime = default(DateTime), int scheduledCapacity = default(int), int availableCapacity = default(int), int encumberedCapacity = default(int), int reservedCapacity = default(int))
        {
            this.StartDateTime = startDateTime;
            this.ScheduledCapacity = scheduledCapacity;
            this.AvailableCapacity = availableCapacity;
            this.EncumberedCapacity = encumberedCapacity;
            this.ReservedCapacity = reservedCapacity;
        }

        /// <summary>
        /// Start date time of slot in ISO 8601 format with precision of seconds.
        /// </summary>
        /// <value>Start date time of slot in ISO 8601 format with precision of seconds.</value>
        [DataMember(Name = "startDateTime", EmitDefaultValue = false)]
        public DateTime StartDateTime { get; set; }

        /// <summary>
        /// Scheduled capacity corresponding to the slot. This capacity represents the originally allocated capacity as per resource schedule.
        /// </summary>
        /// <value>Scheduled capacity corresponding to the slot. This capacity represents the originally allocated capacity as per resource schedule.</value>
        [DataMember(Name = "scheduledCapacity", EmitDefaultValue = false)]
        public int ScheduledCapacity { get; set; }

        /// <summary>
        /// Available capacity corresponding to the slot. This capacity represents the capacity available for allocation to reservations.
        /// </summary>
        /// <value>Available capacity corresponding to the slot. This capacity represents the capacity available for allocation to reservations.</value>
        [DataMember(Name = "availableCapacity", EmitDefaultValue = false)]
        public int AvailableCapacity { get; set; }

        /// <summary>
        /// Encumbered capacity corresponding to the slot. This capacity represents the capacity allocated for Amazon Jobs/Appointments/Orders.
        /// </summary>
        /// <value>Encumbered capacity corresponding to the slot. This capacity represents the capacity allocated for Amazon Jobs/Appointments/Orders.</value>
        [DataMember(Name = "encumberedCapacity", EmitDefaultValue = false)]
        public int EncumberedCapacity { get; set; }

        /// <summary>
        /// Reserved capacity corresponding to the slot. This capacity represents the capacity made unavailable due to events like Breaks/Leaves/Lunch.
        /// </summary>
        /// <value>Reserved capacity corresponding to the slot. This capacity represents the capacity made unavailable due to events like Breaks/Leaves/Lunch.</value>
        [DataMember(Name = "reservedCapacity", EmitDefaultValue = false)]
        public int ReservedCapacity { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            StringBuilder sb = new StringBuilder();
            sb.Append("class FixedSlot {\n");
            sb.Append("  StartDateTime: ").Append(StartDateTime).Append("\n");
            sb.Append("  ScheduledCapacity: ").Append(ScheduledCapacity).Append("\n");
            sb.Append("  AvailableCapacity: ").Append(AvailableCapacity).Append("\n");
            sb.Append("  EncumberedCapacity: ").Append(EncumberedCapacity).Append("\n");
            sb.Append("  ReservedCapacity: ").Append(ReservedCapacity).Append("\n");
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
