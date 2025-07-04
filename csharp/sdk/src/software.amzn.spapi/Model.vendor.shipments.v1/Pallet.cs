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
    /// Details of the Pallet/Tare being shipped.
    /// </summary>
    [DataContract(Name = "Pallet")]
    public partial class Pallet : IValidatableObject
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="Pallet" /> class.
        /// </summary>
        [JsonConstructorAttribute]
        protected Pallet() { }
        /// <summary>
        /// Initializes a new instance of the <see cref="Pallet" /> class.
        /// </summary>
        /// <param name="palletIdentifiers">A list of pallet identifiers. (required).</param>
        /// <param name="tier">Number of layers per pallet. Only applicable to container type Pallet..</param>
        /// <param name="block">Number of cartons per layer on the pallet. Only applicable to container type Pallet..</param>
        /// <param name="dimensions">dimensions.</param>
        /// <param name="weight">weight.</param>
        /// <param name="cartonReferenceDetails">cartonReferenceDetails.</param>
        /// <param name="items">A list of container item details..</param>
        public Pallet(List<ContainerIdentification> palletIdentifiers = default(List<ContainerIdentification>), int tier = default(int), int block = default(int), Dimensions dimensions = default(Dimensions), Weight weight = default(Weight), CartonReferenceDetails cartonReferenceDetails = default(CartonReferenceDetails), List<ContainerItem> items = default(List<ContainerItem>))
        {
            // to ensure "palletIdentifiers" is required (not null)
            if (palletIdentifiers == null)
            {
                throw new ArgumentNullException("palletIdentifiers is a required property for Pallet and cannot be null");
            }
            this.PalletIdentifiers = palletIdentifiers;
            this.Tier = tier;
            this.Block = block;
            this.Dimensions = dimensions;
            this.Weight = weight;
            this.CartonReferenceDetails = cartonReferenceDetails;
            this.Items = items;
        }

        /// <summary>
        /// A list of pallet identifiers.
        /// </summary>
        /// <value>A list of pallet identifiers.</value>
        [DataMember(Name = "palletIdentifiers", IsRequired = true, EmitDefaultValue = true)]
        public List<ContainerIdentification> PalletIdentifiers { get; set; }

        /// <summary>
        /// Number of layers per pallet. Only applicable to container type Pallet.
        /// </summary>
        /// <value>Number of layers per pallet. Only applicable to container type Pallet.</value>
        [DataMember(Name = "tier", EmitDefaultValue = false)]
        public int Tier { get; set; }

        /// <summary>
        /// Number of cartons per layer on the pallet. Only applicable to container type Pallet.
        /// </summary>
        /// <value>Number of cartons per layer on the pallet. Only applicable to container type Pallet.</value>
        [DataMember(Name = "block", EmitDefaultValue = false)]
        public int Block { get; set; }

        /// <summary>
        /// Gets or Sets Dimensions
        /// </summary>
        [DataMember(Name = "dimensions", EmitDefaultValue = false)]
        public Dimensions Dimensions { get; set; }

        /// <summary>
        /// Gets or Sets Weight
        /// </summary>
        [DataMember(Name = "weight", EmitDefaultValue = false)]
        public Weight Weight { get; set; }

        /// <summary>
        /// Gets or Sets CartonReferenceDetails
        /// </summary>
        [DataMember(Name = "cartonReferenceDetails", EmitDefaultValue = false)]
        public CartonReferenceDetails CartonReferenceDetails { get; set; }

        /// <summary>
        /// A list of container item details.
        /// </summary>
        /// <value>A list of container item details.</value>
        [DataMember(Name = "items", EmitDefaultValue = false)]
        public List<ContainerItem> Items { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            StringBuilder sb = new StringBuilder();
            sb.Append("class Pallet {\n");
            sb.Append("  PalletIdentifiers: ").Append(PalletIdentifiers).Append("\n");
            sb.Append("  Tier: ").Append(Tier).Append("\n");
            sb.Append("  Block: ").Append(Block).Append("\n");
            sb.Append("  Dimensions: ").Append(Dimensions).Append("\n");
            sb.Append("  Weight: ").Append(Weight).Append("\n");
            sb.Append("  CartonReferenceDetails: ").Append(CartonReferenceDetails).Append("\n");
            sb.Append("  Items: ").Append(Items).Append("\n");
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
