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
    /// The FOEP response data for a requested SKU.
    /// </summary>
    [DataContract(Name = "FeaturedOfferExpectedPriceResponseBody")]
    public partial class FeaturedOfferExpectedPriceResponseBody : IValidatableObject
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="FeaturedOfferExpectedPriceResponseBody" /> class.
        /// </summary>
        /// <param name="offerIdentifier">offerIdentifier.</param>
        /// <param name="featuredOfferExpectedPriceResults">A list of FOEP results for the requested offer..</param>
        /// <param name="errors">A list of error responses that are returned when a request is unsuccessful..</param>
        public FeaturedOfferExpectedPriceResponseBody(OfferIdentifier offerIdentifier = default(OfferIdentifier), List<FeaturedOfferExpectedPriceResult> featuredOfferExpectedPriceResults = default(List<FeaturedOfferExpectedPriceResult>), List<Error> errors = default(List<Error>))
        {
            this.OfferIdentifier = offerIdentifier;
            this.FeaturedOfferExpectedPriceResults = featuredOfferExpectedPriceResults;
            this.Errors = errors;
        }

        /// <summary>
        /// Gets or Sets OfferIdentifier
        /// </summary>
        [DataMember(Name = "offerIdentifier", EmitDefaultValue = false)]
        public OfferIdentifier OfferIdentifier { get; set; }

        /// <summary>
        /// A list of FOEP results for the requested offer.
        /// </summary>
        /// <value>A list of FOEP results for the requested offer.</value>
        [DataMember(Name = "featuredOfferExpectedPriceResults", EmitDefaultValue = false)]
        public List<FeaturedOfferExpectedPriceResult> FeaturedOfferExpectedPriceResults { get; set; }

        /// <summary>
        /// A list of error responses that are returned when a request is unsuccessful.
        /// </summary>
        /// <value>A list of error responses that are returned when a request is unsuccessful.</value>
        [DataMember(Name = "errors", EmitDefaultValue = false)]
        public List<Error> Errors { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            StringBuilder sb = new StringBuilder();
            sb.Append("class FeaturedOfferExpectedPriceResponseBody {\n");
            sb.Append("  OfferIdentifier: ").Append(OfferIdentifier).Append("\n");
            sb.Append("  FeaturedOfferExpectedPriceResults: ").Append(FeaturedOfferExpectedPriceResults).Append("\n");
            sb.Append("  Errors: ").Append(Errors).Append("\n");
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
