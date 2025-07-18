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
    /// The request body for the createShippingLabels operation.
    /// </summary>
    [DataContract(Name = "CreateShippingLabelsRequest")]
    public partial class CreateShippingLabelsRequest : IValidatableObject
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="CreateShippingLabelsRequest" /> class.
        /// </summary>
        [JsonConstructorAttribute]
        protected CreateShippingLabelsRequest() { }
        /// <summary>
        /// Initializes a new instance of the <see cref="CreateShippingLabelsRequest" /> class.
        /// </summary>
        /// <param name="sellingParty">sellingParty (required).</param>
        /// <param name="shipFromParty">shipFromParty (required).</param>
        /// <param name="containers">A list of the packages in this shipment..</param>
        public CreateShippingLabelsRequest(PartyIdentification sellingParty = default(PartyIdentification), PartyIdentification shipFromParty = default(PartyIdentification), List<Container> containers = default(List<Container>))
        {
            // to ensure "sellingParty" is required (not null)
            if (sellingParty == null)
            {
                throw new ArgumentNullException("sellingParty is a required property for CreateShippingLabelsRequest and cannot be null");
            }
            this.SellingParty = sellingParty;
            // to ensure "shipFromParty" is required (not null)
            if (shipFromParty == null)
            {
                throw new ArgumentNullException("shipFromParty is a required property for CreateShippingLabelsRequest and cannot be null");
            }
            this.ShipFromParty = shipFromParty;
            this.Containers = containers;
        }

        /// <summary>
        /// Gets or Sets SellingParty
        /// </summary>
        [DataMember(Name = "sellingParty", IsRequired = true, EmitDefaultValue = true)]
        public PartyIdentification SellingParty { get; set; }

        /// <summary>
        /// Gets or Sets ShipFromParty
        /// </summary>
        [DataMember(Name = "shipFromParty", IsRequired = true, EmitDefaultValue = true)]
        public PartyIdentification ShipFromParty { get; set; }

        /// <summary>
        /// A list of the packages in this shipment.
        /// </summary>
        /// <value>A list of the packages in this shipment.</value>
        [DataMember(Name = "containers", EmitDefaultValue = false)]
        public List<Container> Containers { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            StringBuilder sb = new StringBuilder();
            sb.Append("class CreateShippingLabelsRequest {\n");
            sb.Append("  SellingParty: ").Append(SellingParty).Append("\n");
            sb.Append("  ShipFromParty: ").Append(ShipFromParty).Append("\n");
            sb.Append("  Containers: ").Append(Containers).Append("\n");
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
