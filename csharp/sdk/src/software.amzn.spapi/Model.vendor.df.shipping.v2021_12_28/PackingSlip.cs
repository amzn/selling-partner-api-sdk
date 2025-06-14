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
    /// Packing slip information.
    /// </summary>
    [DataContract(Name = "PackingSlip")]
    public partial class PackingSlip : IValidatableObject
    {
        /// <summary>
        /// The format of the file such as PDF, JPEG etc.
        /// </summary>
        /// <value>The format of the file such as PDF, JPEG etc.</value>
        [JsonConverter(typeof(StringEnumConverter))]
        public enum ContentTypeEnum
        {
            /// <summary>
            /// Enum ApplicationPdf for value: application/pdf
            /// </summary>
            [EnumMember(Value = "application/pdf")]
            ApplicationPdf = 1
        }


        /// <summary>
        /// The format of the file such as PDF, JPEG etc.
        /// </summary>
        /// <value>The format of the file such as PDF, JPEG etc.</value>
        [DataMember(Name = "contentType", EmitDefaultValue = false)]
        public ContentTypeEnum? ContentType { get; set; }
        /// <summary>
        /// Initializes a new instance of the <see cref="PackingSlip" /> class.
        /// </summary>
        [JsonConstructorAttribute]
        protected PackingSlip() { }
        /// <summary>
        /// Initializes a new instance of the <see cref="PackingSlip" /> class.
        /// </summary>
        /// <param name="purchaseOrderNumber">Purchase order number of the shipment that the packing slip is for. (required).</param>
        /// <param name="content">A Base64 string of the packing slip PDF. (required).</param>
        /// <param name="contentType">The format of the file such as PDF, JPEG etc..</param>
        public PackingSlip(string purchaseOrderNumber = default(string), string content = default(string), ContentTypeEnum? contentType = default(ContentTypeEnum?))
        {
            // to ensure "purchaseOrderNumber" is required (not null)
            if (purchaseOrderNumber == null)
            {
                throw new ArgumentNullException("purchaseOrderNumber is a required property for PackingSlip and cannot be null");
            }
            this.PurchaseOrderNumber = purchaseOrderNumber;
            // to ensure "content" is required (not null)
            if (content == null)
            {
                throw new ArgumentNullException("content is a required property for PackingSlip and cannot be null");
            }
            this.Content = content;
            this.ContentType = contentType;
        }

        /// <summary>
        /// Purchase order number of the shipment that the packing slip is for.
        /// </summary>
        /// <value>Purchase order number of the shipment that the packing slip is for.</value>
        [DataMember(Name = "purchaseOrderNumber", IsRequired = true, EmitDefaultValue = true)]
        public string PurchaseOrderNumber { get; set; }

        /// <summary>
        /// A Base64 string of the packing slip PDF.
        /// </summary>
        /// <value>A Base64 string of the packing slip PDF.</value>
        [DataMember(Name = "content", IsRequired = true, EmitDefaultValue = true)]
        public string Content { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            StringBuilder sb = new StringBuilder();
            sb.Append("class PackingSlip {\n");
            sb.Append("  PurchaseOrderNumber: ").Append(PurchaseOrderNumber).Append("\n");
            sb.Append("  Content: ").Append(Content).Append("\n");
            sb.Append("  ContentType: ").Append(ContentType).Append("\n");
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
            if (this.PurchaseOrderNumber != null) {
                // PurchaseOrderNumber (string) pattern
                Regex regexPurchaseOrderNumber = new Regex(@"^[a-zA-Z0-9]+$", RegexOptions.CultureInvariant);
                if (!regexPurchaseOrderNumber.Match(this.PurchaseOrderNumber).Success)
                {
                    yield return new System.ComponentModel.DataAnnotations.ValidationResult("Invalid value for PurchaseOrderNumber, must match a pattern of " + regexPurchaseOrderNumber, new [] { "PurchaseOrderNumber" });
                }
            }

            yield break;
        }
    }

}
