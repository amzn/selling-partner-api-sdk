/*
 * Selling Partner API for Finances
 *
 * The Selling Partner API for Finances helps you obtain financial information relevant to a seller's business. You can obtain financial events for a given order, financial event group, or date range without having to wait until a statement period closes. You can also obtain financial event groups for a given date range.
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

namespace software.amzn.spapi.Model.finances.v0
{
    /// <summary>
    /// The charge refund transaction.
    /// </summary>
    [DataContract(Name = "ChargeRefundTransaction")]
    public partial class ChargeRefundTransaction : IValidatableObject
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="ChargeRefundTransaction" /> class.
        /// </summary>
        /// <param name="chargeAmount">chargeAmount.</param>
        /// <param name="chargeType">The type of charge..</param>
        public ChargeRefundTransaction(Currency chargeAmount = default(Currency), string chargeType = default(string))
        {
            this.ChargeAmount = chargeAmount;
            this.ChargeType = chargeType;
        }

        /// <summary>
        /// Gets or Sets ChargeAmount
        /// </summary>
        [DataMember(Name = "ChargeAmount", EmitDefaultValue = false)]
        public Currency ChargeAmount { get; set; }

        /// <summary>
        /// The type of charge.
        /// </summary>
        /// <value>The type of charge.</value>
        [DataMember(Name = "ChargeType", EmitDefaultValue = false)]
        public string ChargeType { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            StringBuilder sb = new StringBuilder();
            sb.Append("class ChargeRefundTransaction {\n");
            sb.Append("  ChargeAmount: ").Append(ChargeAmount).Append("\n");
            sb.Append("  ChargeType: ").Append(ChargeType).Append("\n");
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
