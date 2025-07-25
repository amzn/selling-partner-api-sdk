/*
 * The Selling Partner API for Finances
 *
 * The Selling Partner API for Finances helps you obtain financial information relevant to a seller's business. You can obtain financial events for a given order or date range without having to wait until a statement period closes.
 *
 * The version of the OpenAPI document: 2024-06-19
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

namespace software.amzn.spapi.Model.finances.v2024_06_19
{
    /// <summary>
    /// Metadata describing the seller.
    /// </summary>
    [DataContract(Name = "SellingPartnerMetadata")]
    public partial class SellingPartnerMetadata : IValidatableObject
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="SellingPartnerMetadata" /> class.
        /// </summary>
        /// <param name="sellingPartnerId">Unique seller identifier..</param>
        /// <param name="accountType">Account type of transaction..</param>
        /// <param name="marketplaceId">The identifier of the marketplace where the transaction occurred. The marketplace ID is the globally unique identifier of a marketplace. To find the ID for your marketplace, refer to [Marketplace IDs](https://developer-docs.amazon.com/sp-api/docs/marketplace-ids)..</param>
        public SellingPartnerMetadata(string sellingPartnerId = default(string), string accountType = default(string), string marketplaceId = default(string))
        {
            this.SellingPartnerId = sellingPartnerId;
            this.AccountType = accountType;
            this.MarketplaceId = marketplaceId;
        }

        /// <summary>
        /// Unique seller identifier.
        /// </summary>
        /// <value>Unique seller identifier.</value>
        [DataMember(Name = "sellingPartnerId", EmitDefaultValue = false)]
        public string SellingPartnerId { get; set; }

        /// <summary>
        /// Account type of transaction.
        /// </summary>
        /// <value>Account type of transaction.</value>
        [DataMember(Name = "accountType", EmitDefaultValue = false)]
        public string AccountType { get; set; }

        /// <summary>
        /// The identifier of the marketplace where the transaction occurred. The marketplace ID is the globally unique identifier of a marketplace. To find the ID for your marketplace, refer to [Marketplace IDs](https://developer-docs.amazon.com/sp-api/docs/marketplace-ids).
        /// </summary>
        /// <value>The identifier of the marketplace where the transaction occurred. The marketplace ID is the globally unique identifier of a marketplace. To find the ID for your marketplace, refer to [Marketplace IDs](https://developer-docs.amazon.com/sp-api/docs/marketplace-ids).</value>
        [DataMember(Name = "marketplaceId", EmitDefaultValue = false)]
        public string MarketplaceId { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            StringBuilder sb = new StringBuilder();
            sb.Append("class SellingPartnerMetadata {\n");
            sb.Append("  SellingPartnerId: ").Append(SellingPartnerId).Append("\n");
            sb.Append("  AccountType: ").Append(AccountType).Append("\n");
            sb.Append("  MarketplaceId: ").Append(MarketplaceId).Append("\n");
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
