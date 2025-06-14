/*
 * Selling Partner API for Pricing
 *
 * The Selling Partner API for Pricing helps you programmatically retrieve product pricing and offer information for Amazon Marketplace products.
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

namespace software.amzn.spapi.Model.pricing.v0
{
    /// <summary>
    /// Amazon Prime information.
    /// </summary>
    [DataContract(Name = "PrimeInformationType")]
    public partial class PrimeInformationType : IValidatableObject
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="PrimeInformationType" /> class.
        /// </summary>
        [JsonConstructorAttribute]
        protected PrimeInformationType() { }
        /// <summary>
        /// Initializes a new instance of the <see cref="PrimeInformationType" /> class.
        /// </summary>
        /// <param name="isPrime">Indicates whether the offer is an Amazon Prime offer. (required).</param>
        /// <param name="isNationalPrime">Indicates whether the offer is an Amazon Prime offer throughout the entire marketplace where it is listed. (required).</param>
        public PrimeInformationType(bool isPrime = default(bool), bool isNationalPrime = default(bool))
        {
            this.IsPrime = isPrime;
            this.IsNationalPrime = isNationalPrime;
        }

        /// <summary>
        /// Indicates whether the offer is an Amazon Prime offer.
        /// </summary>
        /// <value>Indicates whether the offer is an Amazon Prime offer.</value>
        [DataMember(Name = "IsPrime", IsRequired = true, EmitDefaultValue = true)]
        public bool IsPrime { get; set; }

        /// <summary>
        /// Indicates whether the offer is an Amazon Prime offer throughout the entire marketplace where it is listed.
        /// </summary>
        /// <value>Indicates whether the offer is an Amazon Prime offer throughout the entire marketplace where it is listed.</value>
        [DataMember(Name = "IsNationalPrime", IsRequired = true, EmitDefaultValue = true)]
        public bool IsNationalPrime { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            StringBuilder sb = new StringBuilder();
            sb.Append("class PrimeInformationType {\n");
            sb.Append("  IsPrime: ").Append(IsPrime).Append("\n");
            sb.Append("  IsNationalPrime: ").Append(IsNationalPrime).Append("\n");
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
