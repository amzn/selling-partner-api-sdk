/*
 * The Selling Partner API for Sellers
 *
 * The [Selling Partner API for Sellers](https://developer-docs.amazon.com/sp-api/docs/sellers-api-v1-reference) (Sellers API) provides essential information about seller accounts, such as:  - The marketplaces a seller can list in - The default language and currency of a marketplace - Whether the seller has suspended listings  Refer to the [Sellers API reference](https://developer-docs.amazon.com/sp-api/docs/sellers-api-v1-reference) for details about this API's operations, data types, and schemas.
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

namespace software.amzn.spapi.Model.sellers.v1
{
    /// <summary>
    /// The response schema for the &#x60;getAccount&#x60; operation.
    /// </summary>
    [DataContract(Name = "Account")]
    public partial class Account : IValidatableObject
    {
        /// <summary>
        /// The type of business registered for the seller account.
        /// </summary>
        /// <value>The type of business registered for the seller account.</value>
        [JsonConverter(typeof(StringEnumConverter))]
        public enum BusinessTypeEnum
        {
            /// <summary>
            /// Enum CHARITY for value: CHARITY
            /// </summary>
            [EnumMember(Value = "CHARITY")]
            CHARITY = 1,

            /// <summary>
            /// Enum CRAFTSMAN for value: CRAFTSMAN
            /// </summary>
            [EnumMember(Value = "CRAFTSMAN")]
            CRAFTSMAN = 2,

            /// <summary>
            /// Enum NATURALPERSONCOMPANY for value: NATURAL_PERSON_COMPANY
            /// </summary>
            [EnumMember(Value = "NATURAL_PERSON_COMPANY")]
            NATURALPERSONCOMPANY = 3,

            /// <summary>
            /// Enum PUBLICLISTED for value: PUBLIC_LISTED
            /// </summary>
            [EnumMember(Value = "PUBLIC_LISTED")]
            PUBLICLISTED = 4,

            /// <summary>
            /// Enum PRIVATELIMITED for value: PRIVATE_LIMITED
            /// </summary>
            [EnumMember(Value = "PRIVATE_LIMITED")]
            PRIVATELIMITED = 5,

            /// <summary>
            /// Enum SOLEPROPRIETORSHIP for value: SOLE_PROPRIETORSHIP
            /// </summary>
            [EnumMember(Value = "SOLE_PROPRIETORSHIP")]
            SOLEPROPRIETORSHIP = 6,

            /// <summary>
            /// Enum STATEOWNED for value: STATE_OWNED
            /// </summary>
            [EnumMember(Value = "STATE_OWNED")]
            STATEOWNED = 7,

            /// <summary>
            /// Enum INDIVIDUAL for value: INDIVIDUAL
            /// </summary>
            [EnumMember(Value = "INDIVIDUAL")]
            INDIVIDUAL = 8
        }


        /// <summary>
        /// The type of business registered for the seller account.
        /// </summary>
        /// <value>The type of business registered for the seller account.</value>
        [DataMember(Name = "businessType", IsRequired = true, EmitDefaultValue = true)]
        public BusinessTypeEnum BusinessType { get; set; }
        /// <summary>
        /// The selling plan details.
        /// </summary>
        /// <value>The selling plan details.</value>
        [JsonConverter(typeof(StringEnumConverter))]
        public enum SellingPlanEnum
        {
            /// <summary>
            /// Enum PROFESSIONAL for value: PROFESSIONAL
            /// </summary>
            [EnumMember(Value = "PROFESSIONAL")]
            PROFESSIONAL = 1,

            /// <summary>
            /// Enum INDIVIDUAL for value: INDIVIDUAL
            /// </summary>
            [EnumMember(Value = "INDIVIDUAL")]
            INDIVIDUAL = 2
        }


        /// <summary>
        /// The selling plan details.
        /// </summary>
        /// <value>The selling plan details.</value>
        [DataMember(Name = "sellingPlan", IsRequired = true, EmitDefaultValue = true)]
        public SellingPlanEnum SellingPlan { get; set; }
        /// <summary>
        /// Initializes a new instance of the <see cref="Account" /> class.
        /// </summary>
        [JsonConstructorAttribute]
        protected Account() { }
        /// <summary>
        /// Initializes a new instance of the <see cref="Account" /> class.
        /// </summary>
        /// <param name="marketplaceParticipationList">List of marketplace participations. (required).</param>
        /// <param name="businessType">The type of business registered for the seller account. (required).</param>
        /// <param name="sellingPlan">The selling plan details. (required).</param>
        /// <param name="business">business.</param>
        /// <param name="primaryContact">primaryContact.</param>
        public Account(List<MarketplaceParticipation> marketplaceParticipationList = default(List<MarketplaceParticipation>), BusinessTypeEnum businessType = default(BusinessTypeEnum), SellingPlanEnum sellingPlan = default(SellingPlanEnum), Business business = default(Business), PrimaryContact primaryContact = default(PrimaryContact))
        {
            // to ensure "marketplaceParticipationList" is required (not null)
            if (marketplaceParticipationList == null)
            {
                throw new ArgumentNullException("marketplaceParticipationList is a required property for Account and cannot be null");
            }
            this.MarketplaceParticipationList = marketplaceParticipationList;
            this.BusinessType = businessType;
            this.SellingPlan = sellingPlan;
            this.Business = business;
            this.PrimaryContact = primaryContact;
        }

        /// <summary>
        /// List of marketplace participations.
        /// </summary>
        /// <value>List of marketplace participations.</value>
        [DataMember(Name = "marketplaceParticipationList", IsRequired = true, EmitDefaultValue = true)]
        public List<MarketplaceParticipation> MarketplaceParticipationList { get; set; }

        /// <summary>
        /// Gets or Sets Business
        /// </summary>
        [DataMember(Name = "business", EmitDefaultValue = false)]
        public Business Business { get; set; }

        /// <summary>
        /// Gets or Sets PrimaryContact
        /// </summary>
        [DataMember(Name = "primaryContact", EmitDefaultValue = false)]
        public PrimaryContact PrimaryContact { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            StringBuilder sb = new StringBuilder();
            sb.Append("class Account {\n");
            sb.Append("  MarketplaceParticipationList: ").Append(MarketplaceParticipationList).Append("\n");
            sb.Append("  BusinessType: ").Append(BusinessType).Append("\n");
            sb.Append("  SellingPlan: ").Append(SellingPlan).Append("\n");
            sb.Append("  Business: ").Append(Business).Append("\n");
            sb.Append("  PrimaryContact: ").Append(PrimaryContact).Append("\n");
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
