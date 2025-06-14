/*
 * Selling Partner API for Direct Fulfillment Shipping
 *
 * Use the Selling Partner API for Direct Fulfillment Shipping to access a direct fulfillment vendor's shipping data.
 *
 * The version of the OpenAPI document: 2021-12-28
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

namespace software.amzn.spapi.Model.vendor.df.shipping.v2021_12_28
{
    /// <summary>
    /// A container used for shipping and packing items.
    /// </summary>
    [DataContract(Name = "Container")]
    public partial class Container : IValidatableObject
    {
        /// <summary>
        /// The type of container.
        /// </summary>
        /// <value>The type of container.</value>
        [JsonConverter(typeof(StringEnumConverter))]
        public enum ContainerTypeEnum
        {
            /// <summary>
            /// Enum Carton for value: Carton
            /// </summary>
            [EnumMember(Value = "Carton")]
            Carton = 1,

            /// <summary>
            /// Enum Pallet for value: Pallet
            /// </summary>
            [EnumMember(Value = "Pallet")]
            Pallet = 2
        }


        /// <summary>
        /// The type of container.
        /// </summary>
        /// <value>The type of container.</value>
        [DataMember(Name = "containerType", IsRequired = true, EmitDefaultValue = true)]
        public ContainerTypeEnum ContainerType { get; set; }
        /// <summary>
        /// Initializes a new instance of the <see cref="Container" /> class.
        /// </summary>
        [JsonConstructorAttribute]
        protected Container() { }
        /// <summary>
        /// Initializes a new instance of the <see cref="Container" /> class.
        /// </summary>
        /// <param name="containerType">The type of container. (required).</param>
        /// <param name="containerIdentifier">The container identifier. (required).</param>
        /// <param name="trackingNumber">The tracking number..</param>
        /// <param name="manifestId">The manifest identifier..</param>
        /// <param name="manifestDate">The date of the manifest..</param>
        /// <param name="shipMethod">The shipment method. This property is required when calling the &#x60;submitShipmentConfirmations&#x60; operation, and optional otherwise..</param>
        /// <param name="scacCode">SCAC code required for NA VOC vendors only..</param>
        /// <param name="carrier">Carrier required for EU VOC vendors only..</param>
        /// <param name="containerSequenceNumber">An integer that must be submitted for multi-box shipments only, where one item may come in separate packages..</param>
        /// <param name="dimensions">dimensions.</param>
        /// <param name="weight">weight (required).</param>
        /// <param name="packedItems">A list of packed items. (required).</param>
        public Container(ContainerTypeEnum containerType = default(ContainerTypeEnum), string containerIdentifier = default(string), string trackingNumber = default(string), string manifestId = default(string), string manifestDate = default(string), string shipMethod = default(string), string scacCode = default(string), string carrier = default(string), int containerSequenceNumber = default(int), Dimensions dimensions = default(Dimensions), Weight weight = default(Weight), List<PackedItem> packedItems = default(List<PackedItem>))
        {
            this.ContainerType = containerType;
            // to ensure "containerIdentifier" is required (not null)
            if (containerIdentifier == null)
            {
                throw new ArgumentNullException("containerIdentifier is a required property for Container and cannot be null");
            }
            this.ContainerIdentifier = containerIdentifier;
            // to ensure "weight" is required (not null)
            if (weight == null)
            {
                throw new ArgumentNullException("weight is a required property for Container and cannot be null");
            }
            this.Weight = weight;
            // to ensure "packedItems" is required (not null)
            if (packedItems == null)
            {
                throw new ArgumentNullException("packedItems is a required property for Container and cannot be null");
            }
            this.PackedItems = packedItems;
            this.TrackingNumber = trackingNumber;
            this.ManifestId = manifestId;
            this.ManifestDate = manifestDate;
            this.ShipMethod = shipMethod;
            this.ScacCode = scacCode;
            this.Carrier = carrier;
            this.ContainerSequenceNumber = containerSequenceNumber;
            this.Dimensions = dimensions;
        }

        /// <summary>
        /// The container identifier.
        /// </summary>
        /// <value>The container identifier.</value>
        [DataMember(Name = "containerIdentifier", IsRequired = true, EmitDefaultValue = true)]
        public string ContainerIdentifier { get; set; }

        /// <summary>
        /// The tracking number.
        /// </summary>
        /// <value>The tracking number.</value>
        [DataMember(Name = "trackingNumber", EmitDefaultValue = false)]
        public string TrackingNumber { get; set; }

        /// <summary>
        /// The manifest identifier.
        /// </summary>
        /// <value>The manifest identifier.</value>
        [DataMember(Name = "manifestId", EmitDefaultValue = false)]
        public string ManifestId { get; set; }

        /// <summary>
        /// The date of the manifest.
        /// </summary>
        /// <value>The date of the manifest.</value>
        [DataMember(Name = "manifestDate", EmitDefaultValue = false)]
        public string ManifestDate { get; set; }

        /// <summary>
        /// The shipment method. This property is required when calling the &#x60;submitShipmentConfirmations&#x60; operation, and optional otherwise.
        /// </summary>
        /// <value>The shipment method. This property is required when calling the &#x60;submitShipmentConfirmations&#x60; operation, and optional otherwise.</value>
        [DataMember(Name = "shipMethod", EmitDefaultValue = false)]
        public string ShipMethod { get; set; }

        /// <summary>
        /// SCAC code required for NA VOC vendors only.
        /// </summary>
        /// <value>SCAC code required for NA VOC vendors only.</value>
        [DataMember(Name = "scacCode", EmitDefaultValue = false)]
        public string ScacCode { get; set; }

        /// <summary>
        /// Carrier required for EU VOC vendors only.
        /// </summary>
        /// <value>Carrier required for EU VOC vendors only.</value>
        [DataMember(Name = "carrier", EmitDefaultValue = false)]
        public string Carrier { get; set; }

        /// <summary>
        /// An integer that must be submitted for multi-box shipments only, where one item may come in separate packages.
        /// </summary>
        /// <value>An integer that must be submitted for multi-box shipments only, where one item may come in separate packages.</value>
        [DataMember(Name = "containerSequenceNumber", EmitDefaultValue = false)]
        public int ContainerSequenceNumber { get; set; }

        /// <summary>
        /// Gets or Sets Dimensions
        /// </summary>
        [DataMember(Name = "dimensions", EmitDefaultValue = false)]
        public Dimensions Dimensions { get; set; }

        /// <summary>
        /// Gets or Sets Weight
        /// </summary>
        [DataMember(Name = "weight", IsRequired = true, EmitDefaultValue = true)]
        public Weight Weight { get; set; }

        /// <summary>
        /// A list of packed items.
        /// </summary>
        /// <value>A list of packed items.</value>
        [DataMember(Name = "packedItems", IsRequired = true, EmitDefaultValue = true)]
        public List<PackedItem> PackedItems { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            StringBuilder sb = new StringBuilder();
            sb.Append("class Container {\n");
            sb.Append("  ContainerType: ").Append(ContainerType).Append("\n");
            sb.Append("  ContainerIdentifier: ").Append(ContainerIdentifier).Append("\n");
            sb.Append("  TrackingNumber: ").Append(TrackingNumber).Append("\n");
            sb.Append("  ManifestId: ").Append(ManifestId).Append("\n");
            sb.Append("  ManifestDate: ").Append(ManifestDate).Append("\n");
            sb.Append("  ShipMethod: ").Append(ShipMethod).Append("\n");
            sb.Append("  ScacCode: ").Append(ScacCode).Append("\n");
            sb.Append("  Carrier: ").Append(Carrier).Append("\n");
            sb.Append("  ContainerSequenceNumber: ").Append(ContainerSequenceNumber).Append("\n");
            sb.Append("  Dimensions: ").Append(Dimensions).Append("\n");
            sb.Append("  Weight: ").Append(Weight).Append("\n");
            sb.Append("  PackedItems: ").Append(PackedItems).Append("\n");
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
