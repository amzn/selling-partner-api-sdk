/*
 * Selling Partner API for Direct Fulfillment Orders
 *
 * The Selling Partner API for Direct Fulfillment Orders provides programmatic access to a direct fulfillment vendor's order data.
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

namespace software.amzn.spapi.Model.vendor.df.orders.v2021_12_28
{
    /// <summary>
    /// The tax details for the order. _Note:_ Amazon calculates tax on the list price (Amazon retail price).
    /// </summary>
    [DataContract(Name = "TaxDetails")]
    public partial class TaxDetails : IValidatableObject
    {
        /// <summary>
        /// Tax type.
        /// </summary>
        /// <value>Tax type.</value>
        [JsonConverter(typeof(StringEnumConverter))]
        public enum TypeEnum
        {
            /// <summary>
            /// Enum CONSUMPTION for value: CONSUMPTION
            /// </summary>
            [EnumMember(Value = "CONSUMPTION")]
            CONSUMPTION = 1,

            /// <summary>
            /// Enum GST for value: GST
            /// </summary>
            [EnumMember(Value = "GST")]
            GST = 2,

            /// <summary>
            /// Enum MwSt for value: MwSt.
            /// </summary>
            [EnumMember(Value = "MwSt.")]
            MwSt = 3,

            /// <summary>
            /// Enum PST for value: PST
            /// </summary>
            [EnumMember(Value = "PST")]
            PST = 4,

            /// <summary>
            /// Enum TOTAL for value: TOTAL
            /// </summary>
            [EnumMember(Value = "TOTAL")]
            TOTAL = 5,

            /// <summary>
            /// Enum TVA for value: TVA
            /// </summary>
            [EnumMember(Value = "TVA")]
            TVA = 6,

            /// <summary>
            /// Enum VAT for value: VAT
            /// </summary>
            [EnumMember(Value = "VAT")]
            VAT = 7
        }


        /// <summary>
        /// Tax type.
        /// </summary>
        /// <value>Tax type.</value>
        [DataMember(Name = "type", EmitDefaultValue = false)]
        public TypeEnum? Type { get; set; }
        /// <summary>
        /// Initializes a new instance of the <see cref="TaxDetails" /> class.
        /// </summary>
        [JsonConstructorAttribute]
        protected TaxDetails() { }
        /// <summary>
        /// Initializes a new instance of the <see cref="TaxDetails" /> class.
        /// </summary>
        /// <param name="taxRate">A decimal number with no loss of precision. Useful when precision loss is unacceptable, as with currencies. Follows RFC7159 for number representation..</param>
        /// <param name="taxAmount">taxAmount (required).</param>
        /// <param name="taxableAmount">taxableAmount.</param>
        /// <param name="type">Tax type..</param>
        public TaxDetails(string taxRate = default(string), Money taxAmount = default(Money), Money taxableAmount = default(Money), TypeEnum? type = default(TypeEnum?))
        {
            // to ensure "taxAmount" is required (not null)
            if (taxAmount == null)
            {
                throw new ArgumentNullException("taxAmount is a required property for TaxDetails and cannot be null");
            }
            this.TaxAmount = taxAmount;
            this.TaxRate = taxRate;
            this.TaxableAmount = taxableAmount;
            this.Type = type;
        }

        /// <summary>
        /// A decimal number with no loss of precision. Useful when precision loss is unacceptable, as with currencies. Follows RFC7159 for number representation.
        /// </summary>
        /// <value>A decimal number with no loss of precision. Useful when precision loss is unacceptable, as with currencies. Follows RFC7159 for number representation.</value>
        [DataMember(Name = "taxRate", EmitDefaultValue = false)]
        public string TaxRate { get; set; }

        /// <summary>
        /// Gets or Sets TaxAmount
        /// </summary>
        [DataMember(Name = "taxAmount", IsRequired = true, EmitDefaultValue = true)]
        public Money TaxAmount { get; set; }

        /// <summary>
        /// Gets or Sets TaxableAmount
        /// </summary>
        [DataMember(Name = "taxableAmount", EmitDefaultValue = false)]
        public Money TaxableAmount { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            StringBuilder sb = new StringBuilder();
            sb.Append("class TaxDetails {\n");
            sb.Append("  TaxRate: ").Append(TaxRate).Append("\n");
            sb.Append("  TaxAmount: ").Append(TaxAmount).Append("\n");
            sb.Append("  TaxableAmount: ").Append(TaxableAmount).Append("\n");
            sb.Append("  Type: ").Append(Type).Append("\n");
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
