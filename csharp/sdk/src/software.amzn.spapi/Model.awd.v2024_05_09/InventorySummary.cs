/*
 * The Selling Partner API for Amazon Warehousing and Distribution
 *
 * The Selling Partner API for Amazon Warehousing and Distribution (AWD) provides programmatic access to information about AWD shipments and inventory.
 *
 * The version of the OpenAPI document: 2024-05-09
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

namespace software.amzn.spapi.Model.awd.v2024_05_09
{
    /// <summary>
    /// Summary of inventory per SKU.
    /// </summary>
    [DataContract(Name = "InventorySummary")]
    public partial class InventorySummary : IValidatableObject
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="InventorySummary" /> class.
        /// </summary>
        [JsonConstructorAttribute]
        protected InventorySummary() { }
        /// <summary>
        /// Initializes a new instance of the <see cref="InventorySummary" /> class.
        /// </summary>
        /// <param name="expirationDetails">The expiration details of the inventory. This object will only appear if the &#x60;details&#x60; parameter in the request is set to &#x60;SHOW&#x60;..</param>
        /// <param name="inventoryDetails">inventoryDetails.</param>
        /// <param name="sku">The seller or merchant SKU. (required).</param>
        /// <param name="totalInboundQuantity">Total quantity that is in-transit from the seller and has not yet been received at an AWD Distribution Center.</param>
        /// <param name="totalOnhandQuantity">Total quantity that is present in AWD distribution centers..</param>
        public InventorySummary(List<ExpirationDetails> expirationDetails = default(List<ExpirationDetails>), InventoryDetails inventoryDetails = default(InventoryDetails), string sku = default(string), long totalInboundQuantity = default(long), long totalOnhandQuantity = default(long))
        {
            // to ensure "sku" is required (not null)
            if (sku == null)
            {
                throw new ArgumentNullException("sku is a required property for InventorySummary and cannot be null");
            }
            this.Sku = sku;
            this.ExpirationDetails = expirationDetails;
            this.InventoryDetails = inventoryDetails;
            this.TotalInboundQuantity = totalInboundQuantity;
            this.TotalOnhandQuantity = totalOnhandQuantity;
        }

        /// <summary>
        /// The expiration details of the inventory. This object will only appear if the &#x60;details&#x60; parameter in the request is set to &#x60;SHOW&#x60;.
        /// </summary>
        /// <value>The expiration details of the inventory. This object will only appear if the &#x60;details&#x60; parameter in the request is set to &#x60;SHOW&#x60;.</value>
        [DataMember(Name = "expirationDetails", EmitDefaultValue = false)]
        public List<ExpirationDetails> ExpirationDetails { get; set; }

        /// <summary>
        /// Gets or Sets InventoryDetails
        /// </summary>
        [DataMember(Name = "inventoryDetails", EmitDefaultValue = false)]
        public InventoryDetails InventoryDetails { get; set; }

        /// <summary>
        /// The seller or merchant SKU.
        /// </summary>
        /// <value>The seller or merchant SKU.</value>
        [DataMember(Name = "sku", IsRequired = true, EmitDefaultValue = true)]
        public string Sku { get; set; }

        /// <summary>
        /// Total quantity that is in-transit from the seller and has not yet been received at an AWD Distribution Center
        /// </summary>
        /// <value>Total quantity that is in-transit from the seller and has not yet been received at an AWD Distribution Center</value>
        [DataMember(Name = "totalInboundQuantity", EmitDefaultValue = false)]
        public long TotalInboundQuantity { get; set; }

        /// <summary>
        /// Total quantity that is present in AWD distribution centers.
        /// </summary>
        /// <value>Total quantity that is present in AWD distribution centers.</value>
        [DataMember(Name = "totalOnhandQuantity", EmitDefaultValue = false)]
        public long TotalOnhandQuantity { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            StringBuilder sb = new StringBuilder();
            sb.Append("class InventorySummary {\n");
            sb.Append("  ExpirationDetails: ").Append(ExpirationDetails).Append("\n");
            sb.Append("  InventoryDetails: ").Append(InventoryDetails).Append("\n");
            sb.Append("  Sku: ").Append(Sku).Append("\n");
            sb.Append("  TotalInboundQuantity: ").Append(TotalInboundQuantity).Append("\n");
            sb.Append("  TotalOnhandQuantity: ").Append(TotalOnhandQuantity).Append("\n");
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
