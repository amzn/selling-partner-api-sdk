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
    /// A mapping of additional HTTP headers to send/receive for the individual batch request.
    /// </summary>
    [DataContract(Name = "HttpResponseHeaders")]
    public partial class HttpResponseHeaders : IValidatableObject
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="HttpResponseHeaders" /> class.
        /// </summary>
        /// <param name="date">The timestamp that the API request was received.  For more information, consult [RFC 2616 Section 14](https://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html)..</param>
        /// <param name="xAmznRequestId">Unique request reference identifier..</param>
        public HttpResponseHeaders(string date = default(string), string xAmznRequestId = default(string))
        {
            this.Date = date;
            this.XAmznRequestId = xAmznRequestId;
            this.AdditionalProperties = new Dictionary<string, object>();
        }

        /// <summary>
        /// The timestamp that the API request was received.  For more information, consult [RFC 2616 Section 14](https://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html).
        /// </summary>
        /// <value>The timestamp that the API request was received.  For more information, consult [RFC 2616 Section 14](https://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html).</value>
        [DataMember(Name = "Date", EmitDefaultValue = false)]
        public string Date { get; set; }

        /// <summary>
        /// Unique request reference identifier.
        /// </summary>
        /// <value>Unique request reference identifier.</value>
        [DataMember(Name = "x-amzn-RequestId", EmitDefaultValue = false)]
        public string XAmznRequestId { get; set; }

        /// <summary>
        /// Gets or Sets additional properties
        /// </summary>
        [JsonExtensionData]
        public IDictionary<string, object> AdditionalProperties { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            StringBuilder sb = new StringBuilder();
            sb.Append("class HttpResponseHeaders {\n");
            sb.Append("  Date: ").Append(Date).Append("\n");
            sb.Append("  XAmznRequestId: ").Append(XAmznRequestId).Append("\n");
            sb.Append("  AdditionalProperties: ").Append(AdditionalProperties).Append("\n");
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
