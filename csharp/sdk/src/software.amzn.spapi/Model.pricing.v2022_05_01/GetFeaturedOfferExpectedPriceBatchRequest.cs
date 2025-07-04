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
    /// The request body for the &#x60;getFeaturedOfferExpectedPriceBatch&#x60; operation.
    /// </summary>
    [DataContract(Name = "GetFeaturedOfferExpectedPriceBatchRequest")]
    public partial class GetFeaturedOfferExpectedPriceBatchRequest : IValidatableObject
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="GetFeaturedOfferExpectedPriceBatchRequest" /> class.
        /// </summary>
        /// <param name="requests">A batched list of FOEP requests..</param>
        public GetFeaturedOfferExpectedPriceBatchRequest(List<FeaturedOfferExpectedPriceRequest> requests = default(List<FeaturedOfferExpectedPriceRequest>))
        {
            this.Requests = requests;
        }

        /// <summary>
        /// A batched list of FOEP requests.
        /// </summary>
        /// <value>A batched list of FOEP requests.</value>
        [DataMember(Name = "requests", EmitDefaultValue = false)]
        public List<FeaturedOfferExpectedPriceRequest> Requests { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            StringBuilder sb = new StringBuilder();
            sb.Append("class GetFeaturedOfferExpectedPriceBatchRequest {\n");
            sb.Append("  Requests: ").Append(Requests).Append("\n");
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
