/*
 * Selling Partner API for Fulfillment Inbound
 *
 * The Selling Partner API for Fulfillment Inbound lets you create applications that create and update inbound shipments of inventory to Amazon's fulfillment network.
 *
 * The version of the OpenAPI document: v0
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

namespace software.amzn.spapi.Model.fulfillment.inbound.v0
{
    /// <summary>
    /// The manual processing fee per unit and total fee for a shipment.
    /// </summary>
    [DataContract(Name = "BoxContentsFeeDetails")]
    public partial class BoxContentsFeeDetails : IValidatableObject
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="BoxContentsFeeDetails" /> class.
        /// </summary>
        /// <param name="totalUnits">The item quantity..</param>
        /// <param name="feePerUnit">feePerUnit.</param>
        /// <param name="totalFee">totalFee.</param>
        public BoxContentsFeeDetails(int totalUnits = default(int), Amount feePerUnit = default(Amount), Amount totalFee = default(Amount))
        {
            this.TotalUnits = totalUnits;
            this.FeePerUnit = feePerUnit;
            this.TotalFee = totalFee;
        }

        /// <summary>
        /// The item quantity.
        /// </summary>
        /// <value>The item quantity.</value>
        [DataMember(Name = "TotalUnits", EmitDefaultValue = false)]
        public int TotalUnits { get; set; }

        /// <summary>
        /// Gets or Sets FeePerUnit
        /// </summary>
        [DataMember(Name = "FeePerUnit", EmitDefaultValue = false)]
        public Amount FeePerUnit { get; set; }

        /// <summary>
        /// Gets or Sets TotalFee
        /// </summary>
        [DataMember(Name = "TotalFee", EmitDefaultValue = false)]
        public Amount TotalFee { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            StringBuilder sb = new StringBuilder();
            sb.Append("class BoxContentsFeeDetails {\n");
            sb.Append("  TotalUnits: ").Append(TotalUnits).Append("\n");
            sb.Append("  FeePerUnit: ").Append(FeePerUnit).Append("\n");
            sb.Append("  TotalFee: ").Append(TotalFee).Append("\n");
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
