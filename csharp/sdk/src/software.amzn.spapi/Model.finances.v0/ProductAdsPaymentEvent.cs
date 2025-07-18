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
    /// A Sponsored Products payment event.
    /// </summary>
    [DataContract(Name = "ProductAdsPaymentEvent")]
    public partial class ProductAdsPaymentEvent : IValidatableObject
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="ProductAdsPaymentEvent" /> class.
        /// </summary>
        /// <param name="postedDate">Fields with a schema type of date are in ISO 8601 date time format (for example GroupBeginDate)..</param>
        /// <param name="transactionType">Indicates if the transaction is for a charge or a refund.  Possible values:  * charge - Charge  * refund - Refund.</param>
        /// <param name="invoiceId">Identifier for the invoice that the transaction appears in..</param>
        /// <param name="baseValue">baseValue.</param>
        /// <param name="taxValue">taxValue.</param>
        /// <param name="transactionValue">transactionValue.</param>
        public ProductAdsPaymentEvent(DateTime postedDate = default(DateTime), string transactionType = default(string), string invoiceId = default(string), Currency baseValue = default(Currency), Currency taxValue = default(Currency), Currency transactionValue = default(Currency))
        {
            this.PostedDate = postedDate;
            this.TransactionType = transactionType;
            this.InvoiceId = invoiceId;
            this.BaseValue = baseValue;
            this.TaxValue = taxValue;
            this.TransactionValue = transactionValue;
        }

        /// <summary>
        /// Fields with a schema type of date are in ISO 8601 date time format (for example GroupBeginDate).
        /// </summary>
        /// <value>Fields with a schema type of date are in ISO 8601 date time format (for example GroupBeginDate).</value>
        [DataMember(Name = "postedDate", EmitDefaultValue = false)]
        public DateTime PostedDate { get; set; }

        /// <summary>
        /// Indicates if the transaction is for a charge or a refund.  Possible values:  * charge - Charge  * refund - Refund
        /// </summary>
        /// <value>Indicates if the transaction is for a charge or a refund.  Possible values:  * charge - Charge  * refund - Refund</value>
        [DataMember(Name = "transactionType", EmitDefaultValue = false)]
        public string TransactionType { get; set; }

        /// <summary>
        /// Identifier for the invoice that the transaction appears in.
        /// </summary>
        /// <value>Identifier for the invoice that the transaction appears in.</value>
        [DataMember(Name = "invoiceId", EmitDefaultValue = false)]
        public string InvoiceId { get; set; }

        /// <summary>
        /// Gets or Sets BaseValue
        /// </summary>
        [DataMember(Name = "baseValue", EmitDefaultValue = false)]
        public Currency BaseValue { get; set; }

        /// <summary>
        /// Gets or Sets TaxValue
        /// </summary>
        [DataMember(Name = "taxValue", EmitDefaultValue = false)]
        public Currency TaxValue { get; set; }

        /// <summary>
        /// Gets or Sets TransactionValue
        /// </summary>
        [DataMember(Name = "transactionValue", EmitDefaultValue = false)]
        public Currency TransactionValue { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            StringBuilder sb = new StringBuilder();
            sb.Append("class ProductAdsPaymentEvent {\n");
            sb.Append("  PostedDate: ").Append(PostedDate).Append("\n");
            sb.Append("  TransactionType: ").Append(TransactionType).Append("\n");
            sb.Append("  InvoiceId: ").Append(InvoiceId).Append("\n");
            sb.Append("  BaseValue: ").Append(BaseValue).Append("\n");
            sb.Append("  TaxValue: ").Append(TaxValue).Append("\n");
            sb.Append("  TransactionValue: ").Append(TransactionValue).Append("\n");
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
