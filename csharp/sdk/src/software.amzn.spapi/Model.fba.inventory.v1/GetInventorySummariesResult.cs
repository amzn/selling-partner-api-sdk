/*
 * Selling Partner API for FBA Inventory
 *
 * The Selling Partner API for FBA Inventory lets you programmatically retrieve information about inventory in Amazon's fulfillment network.
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

namespace software.amzn.spapi.Model.fba.inventory.v1
{
    /// <summary>
    /// The payload schema for the getInventorySummaries operation.
    /// </summary>
    [DataContract(Name = "GetInventorySummariesResult")]
    public partial class GetInventorySummariesResult : IValidatableObject
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="GetInventorySummariesResult" /> class.
        /// </summary>
        [JsonConstructorAttribute]
        protected GetInventorySummariesResult() { }
        /// <summary>
        /// Initializes a new instance of the <see cref="GetInventorySummariesResult" /> class.
        /// </summary>
        /// <param name="granularity">granularity (required).</param>
        /// <param name="inventorySummaries">A list of inventory summaries. (required).</param>
        public GetInventorySummariesResult(Granularity granularity = default(Granularity), List<InventorySummary> inventorySummaries = default(List<InventorySummary>))
        {
            // to ensure "granularity" is required (not null)
            if (granularity == null)
            {
                throw new ArgumentNullException("granularity is a required property for GetInventorySummariesResult and cannot be null");
            }
            this.Granularity = granularity;
            // to ensure "inventorySummaries" is required (not null)
            if (inventorySummaries == null)
            {
                throw new ArgumentNullException("inventorySummaries is a required property for GetInventorySummariesResult and cannot be null");
            }
            this.InventorySummaries = inventorySummaries;
        }

        /// <summary>
        /// Gets or Sets Granularity
        /// </summary>
        [DataMember(Name = "granularity", IsRequired = true, EmitDefaultValue = true)]
        public Granularity Granularity { get; set; }

        /// <summary>
        /// A list of inventory summaries.
        /// </summary>
        /// <value>A list of inventory summaries.</value>
        [DataMember(Name = "inventorySummaries", IsRequired = true, EmitDefaultValue = true)]
        public List<InventorySummary> InventorySummaries { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            StringBuilder sb = new StringBuilder();
            sb.Append("class GetInventorySummariesResult {\n");
            sb.Append("  Granularity: ").Append(Granularity).Append("\n");
            sb.Append("  InventorySummaries: ").Append(InventorySummaries).Append("\n");
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
