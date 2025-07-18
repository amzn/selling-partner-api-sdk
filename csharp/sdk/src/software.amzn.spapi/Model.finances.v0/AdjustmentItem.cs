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
    /// An item in an adjustment to the seller&#39;s account.
    /// </summary>
    [DataContract(Name = "AdjustmentItem")]
    public partial class AdjustmentItem : IValidatableObject
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="AdjustmentItem" /> class.
        /// </summary>
        /// <param name="quantity">Represents the number of units in the seller&#39;s inventory when the AdustmentType is FBAInventoryReimbursement..</param>
        /// <param name="perUnitAmount">perUnitAmount.</param>
        /// <param name="totalAmount">totalAmount.</param>
        /// <param name="sellerSKU">The seller SKU of the item. The seller SKU is qualified by the seller&#39;s seller ID, which is included with every call to the Selling Partner API..</param>
        /// <param name="fnSKU">A unique identifier assigned to products stored in and fulfilled from a fulfillment center..</param>
        /// <param name="productDescription">A short description of the item..</param>
        /// <param name="aSIN">The Amazon Standard Identification Number (ASIN) of the item..</param>
        /// <param name="transactionNumber">The transaction number that is related to the adjustment..</param>
        public AdjustmentItem(string quantity = default(string), Currency perUnitAmount = default(Currency), Currency totalAmount = default(Currency), string sellerSKU = default(string), string fnSKU = default(string), string productDescription = default(string), string aSIN = default(string), string transactionNumber = default(string))
        {
            this.Quantity = quantity;
            this.PerUnitAmount = perUnitAmount;
            this.TotalAmount = totalAmount;
            this.SellerSKU = sellerSKU;
            this.FnSKU = fnSKU;
            this.ProductDescription = productDescription;
            this.ASIN = aSIN;
            this.TransactionNumber = transactionNumber;
        }

        /// <summary>
        /// Represents the number of units in the seller&#39;s inventory when the AdustmentType is FBAInventoryReimbursement.
        /// </summary>
        /// <value>Represents the number of units in the seller&#39;s inventory when the AdustmentType is FBAInventoryReimbursement.</value>
        [DataMember(Name = "Quantity", EmitDefaultValue = false)]
        public string Quantity { get; set; }

        /// <summary>
        /// Gets or Sets PerUnitAmount
        /// </summary>
        [DataMember(Name = "PerUnitAmount", EmitDefaultValue = false)]
        public Currency PerUnitAmount { get; set; }

        /// <summary>
        /// Gets or Sets TotalAmount
        /// </summary>
        [DataMember(Name = "TotalAmount", EmitDefaultValue = false)]
        public Currency TotalAmount { get; set; }

        /// <summary>
        /// The seller SKU of the item. The seller SKU is qualified by the seller&#39;s seller ID, which is included with every call to the Selling Partner API.
        /// </summary>
        /// <value>The seller SKU of the item. The seller SKU is qualified by the seller&#39;s seller ID, which is included with every call to the Selling Partner API.</value>
        [DataMember(Name = "SellerSKU", EmitDefaultValue = false)]
        public string SellerSKU { get; set; }

        /// <summary>
        /// A unique identifier assigned to products stored in and fulfilled from a fulfillment center.
        /// </summary>
        /// <value>A unique identifier assigned to products stored in and fulfilled from a fulfillment center.</value>
        [DataMember(Name = "FnSKU", EmitDefaultValue = false)]
        public string FnSKU { get; set; }

        /// <summary>
        /// A short description of the item.
        /// </summary>
        /// <value>A short description of the item.</value>
        [DataMember(Name = "ProductDescription", EmitDefaultValue = false)]
        public string ProductDescription { get; set; }

        /// <summary>
        /// The Amazon Standard Identification Number (ASIN) of the item.
        /// </summary>
        /// <value>The Amazon Standard Identification Number (ASIN) of the item.</value>
        [DataMember(Name = "ASIN", EmitDefaultValue = false)]
        public string ASIN { get; set; }

        /// <summary>
        /// The transaction number that is related to the adjustment.
        /// </summary>
        /// <value>The transaction number that is related to the adjustment.</value>
        [DataMember(Name = "TransactionNumber", EmitDefaultValue = false)]
        public string TransactionNumber { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            StringBuilder sb = new StringBuilder();
            sb.Append("class AdjustmentItem {\n");
            sb.Append("  Quantity: ").Append(Quantity).Append("\n");
            sb.Append("  PerUnitAmount: ").Append(PerUnitAmount).Append("\n");
            sb.Append("  TotalAmount: ").Append(TotalAmount).Append("\n");
            sb.Append("  SellerSKU: ").Append(SellerSKU).Append("\n");
            sb.Append("  FnSKU: ").Append(FnSKU).Append("\n");
            sb.Append("  ProductDescription: ").Append(ProductDescription).Append("\n");
            sb.Append("  ASIN: ").Append(ASIN).Append("\n");
            sb.Append("  TransactionNumber: ").Append(TransactionNumber).Append("\n");
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
