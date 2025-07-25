/*
 * Selling Partner API for Retail Procurement Payments
 *
 * The Selling Partner API for Retail Procurement Payments provides programmatic access to vendors payments data.
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

namespace software.amzn.spapi.Model.vendor.invoices.v1
{
    /// <summary>
    /// Additional information provided by the selling party for tax-related or any other purpose.
    /// </summary>
    [DataContract(Name = "AdditionalDetails")]
    public partial class AdditionalDetails : IValidatableObject
    {
        /// <summary>
        /// The type of the additional information provided by the selling party.
        /// </summary>
        /// <value>The type of the additional information provided by the selling party.</value>
        [JsonConverter(typeof(StringEnumConverter))]
        public enum TypeEnum
        {
            /// <summary>
            /// Enum SUR for value: SUR
            /// </summary>
            [EnumMember(Value = "SUR")]
            SUR = 1,

            /// <summary>
            /// Enum OCR for value: OCR
            /// </summary>
            [EnumMember(Value = "OCR")]
            OCR = 2,

            /// <summary>
            /// Enum CartonCount for value: CartonCount
            /// </summary>
            [EnumMember(Value = "CartonCount")]
            CartonCount = 3
        }


        /// <summary>
        /// The type of the additional information provided by the selling party.
        /// </summary>
        /// <value>The type of the additional information provided by the selling party.</value>
        [DataMember(Name = "type", IsRequired = true, EmitDefaultValue = true)]
        public TypeEnum Type { get; set; }
        /// <summary>
        /// Initializes a new instance of the <see cref="AdditionalDetails" /> class.
        /// </summary>
        [JsonConstructorAttribute]
        protected AdditionalDetails() { }
        /// <summary>
        /// Initializes a new instance of the <see cref="AdditionalDetails" /> class.
        /// </summary>
        /// <param name="type">The type of the additional information provided by the selling party. (required).</param>
        /// <param name="detail">The detail of the additional information provided by the selling party. (required).</param>
        /// <param name="languageCode">The language code of the additional information detail..</param>
        public AdditionalDetails(TypeEnum type = default(TypeEnum), string detail = default(string), string languageCode = default(string))
        {
            this.Type = type;
            // to ensure "detail" is required (not null)
            if (detail == null)
            {
                throw new ArgumentNullException("detail is a required property for AdditionalDetails and cannot be null");
            }
            this.Detail = detail;
            this.LanguageCode = languageCode;
        }

        /// <summary>
        /// The detail of the additional information provided by the selling party.
        /// </summary>
        /// <value>The detail of the additional information provided by the selling party.</value>
        [DataMember(Name = "detail", IsRequired = true, EmitDefaultValue = true)]
        public string Detail { get; set; }

        /// <summary>
        /// The language code of the additional information detail.
        /// </summary>
        /// <value>The language code of the additional information detail.</value>
        [DataMember(Name = "languageCode", EmitDefaultValue = false)]
        public string LanguageCode { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            StringBuilder sb = new StringBuilder();
            sb.Append("class AdditionalDetails {\n");
            sb.Append("  Type: ").Append(Type).Append("\n");
            sb.Append("  Detail: ").Append(Detail).Append("\n");
            sb.Append("  LanguageCode: ").Append(LanguageCode).Append("\n");
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
