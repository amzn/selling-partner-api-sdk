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
    /// This is used only for direct import shipment confirmations.
    /// </summary>
    [DataContract(Name = "Route")]
    public partial class Route : IValidatableObject
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="Route" /> class.
        /// </summary>
        [JsonConstructorAttribute]
        protected Route() { }
        /// <summary>
        /// Initializes a new instance of the <see cref="Route" /> class.
        /// </summary>
        /// <param name="stops">The port or location involved in transporting the cargo, as specified in transportation contracts or operational plans. (required).</param>
        public Route(List<Stop> stops = default(List<Stop>))
        {
            // to ensure "stops" is required (not null)
            if (stops == null)
            {
                throw new ArgumentNullException("stops is a required property for Route and cannot be null");
            }
            this.Stops = stops;
        }

        /// <summary>
        /// The port or location involved in transporting the cargo, as specified in transportation contracts or operational plans.
        /// </summary>
        /// <value>The port or location involved in transporting the cargo, as specified in transportation contracts or operational plans.</value>
        [DataMember(Name = "stops", IsRequired = true, EmitDefaultValue = true)]
        public List<Stop> Stops { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            StringBuilder sb = new StringBuilder();
            sb.Append("class Route {\n");
            sb.Append("  Stops: ").Append(Stops).Append("\n");
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
