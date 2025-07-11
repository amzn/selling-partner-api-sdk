/*
 * Selling Partner API for Pricing
 *
 * The Selling Partner API for Pricing helps you programmatically retrieve product pricing and offer pricing information for Amazon Marketplace products.  For more information, refer to the [Product Pricing v2022-05-01 Use Case Guide](https://developer-docs.amazon.com/sp-api/docs/product-pricing-api-v2022-05-01-use-case-guide).
 *
 * The version of the OpenAPI document: 2022-05-01
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

namespace software.amzn.spapi.Model.pricing.v2022_05_01
{
    /// <summary>
    /// The offer data of a product.
    /// </summary>
    [DataContract(Name = "Offer")]
    public partial class Offer : IValidatableObject
    {

        /// <summary>
        /// Gets or Sets Condition
        /// </summary>
        [DataMember(Name = "condition", IsRequired = true, EmitDefaultValue = true)]
        public Condition Condition { get; set; }
        /// <summary>
        /// The item subcondition of the offer.
        /// </summary>
        /// <value>The item subcondition of the offer.</value>
        [JsonConverter(typeof(StringEnumConverter))]
        public enum SubConditionEnum
        {
            /// <summary>
            /// Enum New for value: New
            /// </summary>
            [EnumMember(Value = "New")]
            New = 1,

            /// <summary>
            /// Enum Mint for value: Mint
            /// </summary>
            [EnumMember(Value = "Mint")]
            Mint = 2,

            /// <summary>
            /// Enum VeryGood for value: VeryGood
            /// </summary>
            [EnumMember(Value = "VeryGood")]
            VeryGood = 3,

            /// <summary>
            /// Enum Good for value: Good
            /// </summary>
            [EnumMember(Value = "Good")]
            Good = 4,

            /// <summary>
            /// Enum Acceptable for value: Acceptable
            /// </summary>
            [EnumMember(Value = "Acceptable")]
            Acceptable = 5,

            /// <summary>
            /// Enum Poor for value: Poor
            /// </summary>
            [EnumMember(Value = "Poor")]
            Poor = 6,

            /// <summary>
            /// Enum Club for value: Club
            /// </summary>
            [EnumMember(Value = "Club")]
            Club = 7,

            /// <summary>
            /// Enum OEM for value: OEM
            /// </summary>
            [EnumMember(Value = "OEM")]
            OEM = 8,

            /// <summary>
            /// Enum Warranty for value: Warranty
            /// </summary>
            [EnumMember(Value = "Warranty")]
            Warranty = 9,

            /// <summary>
            /// Enum RefurbishedWarranty for value: RefurbishedWarranty
            /// </summary>
            [EnumMember(Value = "RefurbishedWarranty")]
            RefurbishedWarranty = 10,

            /// <summary>
            /// Enum Refurbished for value: Refurbished
            /// </summary>
            [EnumMember(Value = "Refurbished")]
            Refurbished = 11,

            /// <summary>
            /// Enum OpenBox for value: OpenBox
            /// </summary>
            [EnumMember(Value = "OpenBox")]
            OpenBox = 12,

            /// <summary>
            /// Enum Other for value: Other
            /// </summary>
            [EnumMember(Value = "Other")]
            Other = 13
        }


        /// <summary>
        /// The item subcondition of the offer.
        /// </summary>
        /// <value>The item subcondition of the offer.</value>
        [DataMember(Name = "subCondition", EmitDefaultValue = false)]
        public SubConditionEnum? SubCondition { get; set; }

        /// <summary>
        /// Gets or Sets FulfillmentType
        /// </summary>
        [DataMember(Name = "fulfillmentType", IsRequired = true, EmitDefaultValue = true)]
        public FulfillmentType FulfillmentType { get; set; }
        /// <summary>
        /// Initializes a new instance of the <see cref="Offer" /> class.
        /// </summary>
        [JsonConstructorAttribute]
        protected Offer() { }
        /// <summary>
        /// Initializes a new instance of the <see cref="Offer" /> class.
        /// </summary>
        /// <param name="sellerId">The seller identifier for the offer. (required).</param>
        /// <param name="condition">condition (required).</param>
        /// <param name="subCondition">The item subcondition of the offer..</param>
        /// <param name="fulfillmentType">fulfillmentType (required).</param>
        /// <param name="listingPrice">listingPrice (required).</param>
        /// <param name="shippingOptions">A list of shipping options associated with this offer.</param>
        /// <param name="points">points.</param>
        /// <param name="primeDetails">primeDetails.</param>
        public Offer(string sellerId = default(string), Condition condition = default(Condition), SubConditionEnum? subCondition = default(SubConditionEnum?), FulfillmentType fulfillmentType = default(FulfillmentType), MoneyType listingPrice = default(MoneyType), List<ShippingOption> shippingOptions = default(List<ShippingOption>), Points points = default(Points), PrimeDetails primeDetails = default(PrimeDetails))
        {
            // to ensure "sellerId" is required (not null)
            if (sellerId == null)
            {
                throw new ArgumentNullException("sellerId is a required property for Offer and cannot be null");
            }
            this.SellerId = sellerId;
            this.Condition = condition;
            this.FulfillmentType = fulfillmentType;
            // to ensure "listingPrice" is required (not null)
            if (listingPrice == null)
            {
                throw new ArgumentNullException("listingPrice is a required property for Offer and cannot be null");
            }
            this.ListingPrice = listingPrice;
            this.SubCondition = subCondition;
            this.ShippingOptions = shippingOptions;
            this.Points = points;
            this.PrimeDetails = primeDetails;
        }

        /// <summary>
        /// The seller identifier for the offer.
        /// </summary>
        /// <value>The seller identifier for the offer.</value>
        [DataMember(Name = "sellerId", IsRequired = true, EmitDefaultValue = true)]
        public string SellerId { get; set; }

        /// <summary>
        /// Gets or Sets ListingPrice
        /// </summary>
        [DataMember(Name = "listingPrice", IsRequired = true, EmitDefaultValue = true)]
        public MoneyType ListingPrice { get; set; }

        /// <summary>
        /// A list of shipping options associated with this offer
        /// </summary>
        /// <value>A list of shipping options associated with this offer</value>
        [DataMember(Name = "shippingOptions", EmitDefaultValue = false)]
        public List<ShippingOption> ShippingOptions { get; set; }

        /// <summary>
        /// Gets or Sets Points
        /// </summary>
        [DataMember(Name = "points", EmitDefaultValue = false)]
        public Points Points { get; set; }

        /// <summary>
        /// Gets or Sets PrimeDetails
        /// </summary>
        [DataMember(Name = "primeDetails", EmitDefaultValue = false)]
        public PrimeDetails PrimeDetails { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            StringBuilder sb = new StringBuilder();
            sb.Append("class Offer {\n");
            sb.Append("  SellerId: ").Append(SellerId).Append("\n");
            sb.Append("  Condition: ").Append(Condition).Append("\n");
            sb.Append("  SubCondition: ").Append(SubCondition).Append("\n");
            sb.Append("  FulfillmentType: ").Append(FulfillmentType).Append("\n");
            sb.Append("  ListingPrice: ").Append(ListingPrice).Append("\n");
            sb.Append("  ShippingOptions: ").Append(ShippingOptions).Append("\n");
            sb.Append("  Points: ").Append(Points).Append("\n");
            sb.Append("  PrimeDetails: ").Append(PrimeDetails).Append("\n");
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
