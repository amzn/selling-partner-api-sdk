/*
 * Selling Partner API for Retail Procurement Shipments
 *
 * The Selling Partner API for Retail Procurement Shipments provides programmatic access to retail shipping data for vendors.
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

namespace software.amzn.spapi.Model.vendor.shipments.v1
{
    /// <summary>
    /// Contractual or operational port or point relevant to the movement of the cargo.
    /// </summary>
    [DataContract(Name = "Stop")]
    public partial class Stop : IValidatableObject
    {
        /// <summary>
        /// Provide the function code.
        /// </summary>
        /// <value>Provide the function code.</value>
        [JsonConverter(typeof(StringEnumConverter))]
        public enum FunctionCodeEnum
        {
            /// <summary>
            /// Enum PortOfDischarge for value: PortOfDischarge
            /// </summary>
            [EnumMember(Value = "PortOfDischarge")]
            PortOfDischarge = 1,

            /// <summary>
            /// Enum FreightPayableAt for value: FreightPayableAt
            /// </summary>
            [EnumMember(Value = "FreightPayableAt")]
            FreightPayableAt = 2,

            /// <summary>
            /// Enum PortOfLoading for value: PortOfLoading
            /// </summary>
            [EnumMember(Value = "PortOfLoading")]
            PortOfLoading = 3
        }


        /// <summary>
        /// Provide the function code.
        /// </summary>
        /// <value>Provide the function code.</value>
        [DataMember(Name = "functionCode", IsRequired = true, EmitDefaultValue = true)]
        public FunctionCodeEnum FunctionCode { get; set; }
        /// <summary>
        /// Initializes a new instance of the <see cref="Stop" /> class.
        /// </summary>
        [JsonConstructorAttribute]
        protected Stop() { }
        /// <summary>
        /// Initializes a new instance of the <see cref="Stop" /> class.
        /// </summary>
        /// <param name="functionCode">Provide the function code. (required).</param>
        /// <param name="locationIdentification">locationIdentification.</param>
        /// <param name="arrivalTime">Date and time of the arrival of the cargo..</param>
        /// <param name="departureTime">Date and time of the departure of the cargo..</param>
        public Stop(FunctionCodeEnum functionCode = default(FunctionCodeEnum), Location locationIdentification = default(Location), DateTime arrivalTime = default(DateTime), DateTime departureTime = default(DateTime))
        {
            this.FunctionCode = functionCode;
            this.LocationIdentification = locationIdentification;
            this.ArrivalTime = arrivalTime;
            this.DepartureTime = departureTime;
        }

        /// <summary>
        /// Gets or Sets LocationIdentification
        /// </summary>
        [DataMember(Name = "locationIdentification", EmitDefaultValue = false)]
        public Location LocationIdentification { get; set; }

        /// <summary>
        /// Date and time of the arrival of the cargo.
        /// </summary>
        /// <value>Date and time of the arrival of the cargo.</value>
        [DataMember(Name = "arrivalTime", EmitDefaultValue = false)]
        public DateTime ArrivalTime { get; set; }

        /// <summary>
        /// Date and time of the departure of the cargo.
        /// </summary>
        /// <value>Date and time of the departure of the cargo.</value>
        [DataMember(Name = "departureTime", EmitDefaultValue = false)]
        public DateTime DepartureTime { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            StringBuilder sb = new StringBuilder();
            sb.Append("class Stop {\n");
            sb.Append("  FunctionCode: ").Append(FunctionCode).Append("\n");
            sb.Append("  LocationIdentification: ").Append(LocationIdentification).Append("\n");
            sb.Append("  ArrivalTime: ").Append(ArrivalTime).Append("\n");
            sb.Append("  DepartureTime: ").Append(DepartureTime).Append("\n");
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
