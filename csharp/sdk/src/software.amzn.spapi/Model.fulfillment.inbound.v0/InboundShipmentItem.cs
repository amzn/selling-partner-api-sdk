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
    /// Item information for an inbound shipment. Submitted with a call to the createInboundShipment or updateInboundShipment operation.
    /// </summary>
    [DataContract(Name = "InboundShipmentItem")]
    public partial class InboundShipmentItem : IValidatableObject
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="InboundShipmentItem" /> class.
        /// </summary>
        [JsonConstructorAttribute]
        protected InboundShipmentItem() { }
        /// <summary>
        /// Initializes a new instance of the <see cref="InboundShipmentItem" /> class.
        /// </summary>
        /// <param name="shipmentId">A shipment identifier originally returned by the createInboundShipmentPlan operation..</param>
        /// <param name="sellerSKU">The seller SKU of the item. (required).</param>
        /// <param name="fulfillmentNetworkSKU">Amazon&#39;s fulfillment network SKU of the item..</param>
        /// <param name="quantityShipped">The item quantity. (required).</param>
        /// <param name="quantityReceived">The item quantity..</param>
        /// <param name="quantityInCase">The item quantity..</param>
        /// <param name="releaseDate">Type containing date in string format.</param>
        /// <param name="prepDetailsList">A list of preparation instructions and who is responsible for that preparation..</param>
        public InboundShipmentItem(string shipmentId = default(string), string sellerSKU = default(string), string fulfillmentNetworkSKU = default(string), int quantityShipped = default(int), int quantityReceived = default(int), int quantityInCase = default(int), DateOnly releaseDate = default(DateOnly), List<PrepDetails> prepDetailsList = default(List<PrepDetails>))
        {
            // to ensure "sellerSKU" is required (not null)
            if (sellerSKU == null)
            {
                throw new ArgumentNullException("sellerSKU is a required property for InboundShipmentItem and cannot be null");
            }
            this.SellerSKU = sellerSKU;
            this.QuantityShipped = quantityShipped;
            this.ShipmentId = shipmentId;
            this.FulfillmentNetworkSKU = fulfillmentNetworkSKU;
            this.QuantityReceived = quantityReceived;
            this.QuantityInCase = quantityInCase;
            this.ReleaseDate = releaseDate;
            this.PrepDetailsList = prepDetailsList;
        }

        /// <summary>
        /// A shipment identifier originally returned by the createInboundShipmentPlan operation.
        /// </summary>
        /// <value>A shipment identifier originally returned by the createInboundShipmentPlan operation.</value>
        [DataMember(Name = "ShipmentId", EmitDefaultValue = false)]
        public string ShipmentId { get; set; }

        /// <summary>
        /// The seller SKU of the item.
        /// </summary>
        /// <value>The seller SKU of the item.</value>
        [DataMember(Name = "SellerSKU", IsRequired = true, EmitDefaultValue = true)]
        public string SellerSKU { get; set; }

        /// <summary>
        /// Amazon&#39;s fulfillment network SKU of the item.
        /// </summary>
        /// <value>Amazon&#39;s fulfillment network SKU of the item.</value>
        [DataMember(Name = "FulfillmentNetworkSKU", EmitDefaultValue = false)]
        public string FulfillmentNetworkSKU { get; set; }

        /// <summary>
        /// The item quantity.
        /// </summary>
        /// <value>The item quantity.</value>
        [DataMember(Name = "QuantityShipped", IsRequired = true, EmitDefaultValue = true)]
        public int QuantityShipped { get; set; }

        /// <summary>
        /// The item quantity.
        /// </summary>
        /// <value>The item quantity.</value>
        [DataMember(Name = "QuantityReceived", EmitDefaultValue = false)]
        public int QuantityReceived { get; set; }

        /// <summary>
        /// The item quantity.
        /// </summary>
        /// <value>The item quantity.</value>
        [DataMember(Name = "QuantityInCase", EmitDefaultValue = false)]
        public int QuantityInCase { get; set; }

        /// <summary>
        /// Type containing date in string format
        /// </summary>
        /// <value>Type containing date in string format</value>
        [DataMember(Name = "ReleaseDate", EmitDefaultValue = false)]
        public DateOnly ReleaseDate { get; set; }

        /// <summary>
        /// A list of preparation instructions and who is responsible for that preparation.
        /// </summary>
        /// <value>A list of preparation instructions and who is responsible for that preparation.</value>
        [DataMember(Name = "PrepDetailsList", EmitDefaultValue = false)]
        public List<PrepDetails> PrepDetailsList { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            StringBuilder sb = new StringBuilder();
            sb.Append("class InboundShipmentItem {\n");
            sb.Append("  ShipmentId: ").Append(ShipmentId).Append("\n");
            sb.Append("  SellerSKU: ").Append(SellerSKU).Append("\n");
            sb.Append("  FulfillmentNetworkSKU: ").Append(FulfillmentNetworkSKU).Append("\n");
            sb.Append("  QuantityShipped: ").Append(QuantityShipped).Append("\n");
            sb.Append("  QuantityReceived: ").Append(QuantityReceived).Append("\n");
            sb.Append("  QuantityInCase: ").Append(QuantityInCase).Append("\n");
            sb.Append("  ReleaseDate: ").Append(ReleaseDate).Append("\n");
            sb.Append("  PrepDetailsList: ").Append(PrepDetailsList).Append("\n");
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
