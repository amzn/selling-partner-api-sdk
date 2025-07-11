/*
 * Selling Partner API for Feeds
 *
 * The Selling Partner API for Feeds lets you upload data to Amazon on behalf of a selling partner.
 *
 * The version of the OpenAPI document: 2021-06-30
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

namespace software.amzn.spapi.Model.feeds.v2021_06_30
{
    /// <summary>
    /// Information required to upload a feed document&#39;s contents.
    /// </summary>
    [DataContract(Name = "CreateFeedDocumentResponse")]
    public partial class CreateFeedDocumentResponse : IValidatableObject
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="CreateFeedDocumentResponse" /> class.
        /// </summary>
        [JsonConstructorAttribute]
        protected CreateFeedDocumentResponse() { }
        /// <summary>
        /// Initializes a new instance of the <see cref="CreateFeedDocumentResponse" /> class.
        /// </summary>
        /// <param name="feedDocumentId">The identifier of the feed document. (required).</param>
        /// <param name="url">The presigned URL for uploading the feed contents. This URL expires after 5 minutes. (required).</param>
        public CreateFeedDocumentResponse(string feedDocumentId = default(string), string url = default(string))
        {
            // to ensure "feedDocumentId" is required (not null)
            if (feedDocumentId == null)
            {
                throw new ArgumentNullException("feedDocumentId is a required property for CreateFeedDocumentResponse and cannot be null");
            }
            this.FeedDocumentId = feedDocumentId;
            // to ensure "url" is required (not null)
            if (url == null)
            {
                throw new ArgumentNullException("url is a required property for CreateFeedDocumentResponse and cannot be null");
            }
            this.Url = url;
        }

        /// <summary>
        /// The identifier of the feed document.
        /// </summary>
        /// <value>The identifier of the feed document.</value>
        [DataMember(Name = "feedDocumentId", IsRequired = true, EmitDefaultValue = true)]
        public string FeedDocumentId { get; set; }

        /// <summary>
        /// The presigned URL for uploading the feed contents. This URL expires after 5 minutes.
        /// </summary>
        /// <value>The presigned URL for uploading the feed contents. This URL expires after 5 minutes.</value>
        [DataMember(Name = "url", IsRequired = true, EmitDefaultValue = true)]
        public string Url { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            StringBuilder sb = new StringBuilder();
            sb.Append("class CreateFeedDocumentResponse {\n");
            sb.Append("  FeedDocumentId: ").Append(FeedDocumentId).Append("\n");
            sb.Append("  Url: ").Append(Url).Append("\n");
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
