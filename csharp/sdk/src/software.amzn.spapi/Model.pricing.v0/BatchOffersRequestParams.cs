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
    /// Common request parameters that can be accepted by &#x60;ItemOffersRequest&#x60; and &#x60;ListingOffersRequest&#x60;
    /// </summary>
    [DataContract(Name = "BatchOffersRequestParams")]
    public partial class BatchOffersRequestParams : IValidatableObject
    {

        /// <summary>
        /// Gets or Sets ItemCondition
        /// </summary>
        [DataMember(Name = "ItemCondition", IsRequired = true, EmitDefaultValue = true)]
        public ItemCondition ItemCondition { get; set; }

        /// <summary>
        /// Gets or Sets CustomerType
        /// </summary>
        [DataMember(Name = "CustomerType", EmitDefaultValue = false)]
        public CustomerType? CustomerType { get; set; }
        /// <summary>
        /// Initializes a new instance of the <see cref="BatchOffersRequestParams" /> class.
        /// </summary>
        [JsonConstructorAttribute]
        protected BatchOffersRequestParams() { }
        /// <summary>
        /// Initializes a new instance of the <see cref="BatchOffersRequestParams" /> class.
        /// </summary>
        /// <param name="marketplaceId">A marketplace identifier. Specifies the marketplace for which prices are returned. (required).</param>
        /// <param name="itemCondition">itemCondition (required).</param>
        /// <param name="customerType">customerType.</param>
        public BatchOffersRequestParams(string marketplaceId = default(string), ItemCondition itemCondition = default(ItemCondition), CustomerType? customerType = default(CustomerType?))
        {
            // to ensure "marketplaceId" is required (not null)
            if (marketplaceId == null)
            {
                throw new ArgumentNullException("marketplaceId is a required property for BatchOffersRequestParams and cannot be null");
            }
            this.MarketplaceId = marketplaceId;
            this.ItemCondition = itemCondition;
            this.CustomerType = customerType;
        }

        /// <summary>
        /// A marketplace identifier. Specifies the marketplace for which prices are returned.
        /// </summary>
        /// <value>A marketplace identifier. Specifies the marketplace for which prices are returned.</value>
        [DataMember(Name = "MarketplaceId", IsRequired = true, EmitDefaultValue = true)]
        public string MarketplaceId { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            StringBuilder sb = new StringBuilder();
            sb.Append("class BatchOffersRequestParams {\n");
            sb.Append("  MarketplaceId: ").Append(MarketplaceId).Append("\n");
            sb.Append("  ItemCondition: ").Append(ItemCondition).Append("\n");
            sb.Append("  CustomerType: ").Append(CustomerType).Append("\n");
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
