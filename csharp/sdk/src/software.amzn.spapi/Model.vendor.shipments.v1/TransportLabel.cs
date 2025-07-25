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
    /// A list of one or more ShipmentLabels.
    /// </summary>
    [DataContract(Name = "TransportLabel")]
    public partial class TransportLabel : IValidatableObject
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="TransportLabel" /> class.
        /// </summary>
        /// <param name="labelCreateDateTime">Date on which label is created..</param>
        /// <param name="shipmentInformation">shipmentInformation.</param>
        /// <param name="labelData">Indicates the label data,format and type associated ..</param>
        public TransportLabel(DateTime labelCreateDateTime = default(DateTime), ShipmentInformation shipmentInformation = default(ShipmentInformation), List<LabelData> labelData = default(List<LabelData>))
        {
            this.LabelCreateDateTime = labelCreateDateTime;
            this.ShipmentInformation = shipmentInformation;
            this.LabelData = labelData;
        }

        /// <summary>
        /// Date on which label is created.
        /// </summary>
        /// <value>Date on which label is created.</value>
        [DataMember(Name = "labelCreateDateTime", EmitDefaultValue = false)]
        public DateTime LabelCreateDateTime { get; set; }

        /// <summary>
        /// Gets or Sets ShipmentInformation
        /// </summary>
        [DataMember(Name = "shipmentInformation", EmitDefaultValue = false)]
        public ShipmentInformation ShipmentInformation { get; set; }

        /// <summary>
        /// Indicates the label data,format and type associated .
        /// </summary>
        /// <value>Indicates the label data,format and type associated .</value>
        [DataMember(Name = "labelData", EmitDefaultValue = false)]
        public List<LabelData> LabelData { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            StringBuilder sb = new StringBuilder();
            sb.Append("class TransportLabel {\n");
            sb.Append("  LabelCreateDateTime: ").Append(LabelCreateDateTime).Append("\n");
            sb.Append("  ShipmentInformation: ").Append(ShipmentInformation).Append("\n");
            sb.Append("  LabelData: ").Append(LabelData).Append("\n");
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
