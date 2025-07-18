/*
 * Selling Partner API for Replenishment
 *
 * The Selling Partner API for Replenishment (Replenishment API) provides programmatic access to replenishment program metrics and offers. These programs provide recurring delivery of any replenishable item at a frequency chosen by the customer.  The Replenishment API is available worldwide wherever Amazon Subscribe & Save is available or is supported. The API is available to vendors and FBA selling partners.
 *
 * The version of the OpenAPI document: 2022-11-07
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

namespace software.amzn.spapi.Model.replenishment.v2022_11_07
{
    /// <summary>
    /// Use these parameters to paginate through the response.
    /// </summary>
    [DataContract(Name = "ListOfferMetricsRequestPagination")]
    public partial class ListOfferMetricsRequestPagination : IValidatableObject
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="ListOfferMetricsRequestPagination" /> class.
        /// </summary>
        [JsonConstructorAttribute]
        protected ListOfferMetricsRequestPagination() { }
        /// <summary>
        /// Initializes a new instance of the <see cref="ListOfferMetricsRequestPagination" /> class.
        /// </summary>
        /// <param name="limit">The maximum number of results to return in the response. (required).</param>
        /// <param name="offset">The offset from which to retrieve the number of results specified by the &#x60;limit&#x60; value. The first result is at offset 0. (required).</param>
        public ListOfferMetricsRequestPagination(long limit = default(long), long offset = default(long))
        {
            this.Limit = limit;
            this.Offset = offset;
        }

        /// <summary>
        /// The maximum number of results to return in the response.
        /// </summary>
        /// <value>The maximum number of results to return in the response.</value>
        [DataMember(Name = "limit", IsRequired = true, EmitDefaultValue = true)]
        public long Limit { get; set; }

        /// <summary>
        /// The offset from which to retrieve the number of results specified by the &#x60;limit&#x60; value. The first result is at offset 0.
        /// </summary>
        /// <value>The offset from which to retrieve the number of results specified by the &#x60;limit&#x60; value. The first result is at offset 0.</value>
        [DataMember(Name = "offset", IsRequired = true, EmitDefaultValue = true)]
        public long Offset { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            StringBuilder sb = new StringBuilder();
            sb.Append("class ListOfferMetricsRequestPagination {\n");
            sb.Append("  Limit: ").Append(Limit).Append("\n");
            sb.Append("  Offset: ").Append(Offset).Append("\n");
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
            // Limit (long) maximum
            if (this.Limit > (long)500)
            {
                yield return new ValidationResult("Invalid value for Limit, must be a value less than or equal to 500.", new [] { "Limit" });
            }

            // Limit (long) minimum
            if (this.Limit < (long)1)
            {
                yield return new ValidationResult("Invalid value for Limit, must be a value greater than or equal to 1.", new [] { "Limit" });
            }

            // Offset (long) maximum
            if (this.Offset > (long)9000)
            {
                yield return new ValidationResult("Invalid value for Offset, must be a value less than or equal to 9000.", new [] { "Offset" });
            }

            // Offset (long) minimum
            if (this.Offset < (long)0)
            {
                yield return new ValidationResult("Invalid value for Offset, must be a value greater than or equal to 0.", new [] { "Offset" });
            }

            yield break;
        }
    }

}
