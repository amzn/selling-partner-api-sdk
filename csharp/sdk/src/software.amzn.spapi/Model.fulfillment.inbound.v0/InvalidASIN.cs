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
    /// Contains details about an invalid ASIN
    /// </summary>
    [DataContract(Name = "InvalidASIN")]
    public partial class InvalidASIN : IValidatableObject
    {

        /// <summary>
        /// Gets or Sets ErrorReason
        /// </summary>
        [DataMember(Name = "ErrorReason", EmitDefaultValue = false)]
        public ErrorReason? ErrorReason { get; set; }
        /// <summary>
        /// Initializes a new instance of the <see cref="InvalidASIN" /> class.
        /// </summary>
        /// <param name="aSIN">The Amazon Standard Identification Number (ASIN) of the item..</param>
        /// <param name="errorReason">errorReason.</param>
        public InvalidASIN(string aSIN = default(string), ErrorReason? errorReason = default(ErrorReason?))
        {
            this.ASIN = aSIN;
            this.ErrorReason = errorReason;
        }

        /// <summary>
        /// The Amazon Standard Identification Number (ASIN) of the item.
        /// </summary>
        /// <value>The Amazon Standard Identification Number (ASIN) of the item.</value>
        [DataMember(Name = "ASIN", EmitDefaultValue = false)]
        public string ASIN { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            StringBuilder sb = new StringBuilder();
            sb.Append("class InvalidASIN {\n");
            sb.Append("  ASIN: ").Append(ASIN).Append("\n");
            sb.Append("  ErrorReason: ").Append(ErrorReason).Append("\n");
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
