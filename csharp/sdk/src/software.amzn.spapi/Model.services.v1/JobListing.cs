/*
 * Selling Partner API for Services
 *
 * With the Services API, you can build applications that help service providers get and modify their service orders and manage their resources.
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

namespace software.amzn.spapi.Model.services.v1
{
    /// <summary>
    /// The payload for the &#x60;getServiceJobs&#x60; operation.
    /// </summary>
    [DataContract(Name = "JobListing")]
    public partial class JobListing : IValidatableObject
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="JobListing" /> class.
        /// </summary>
        /// <param name="totalResultSize">Total result size of the query result..</param>
        /// <param name="nextPageToken">A generated string used to pass information to your next request. If &#x60;nextPageToken&#x60; is returned, pass the value of &#x60;nextPageToken&#x60; to the &#x60;pageToken&#x60; to get next results..</param>
        /// <param name="previousPageToken">A generated string used to pass information to your next request. If &#x60;previousPageToken&#x60; is returned, pass the value of &#x60;previousPageToken&#x60; to the &#x60;pageToken&#x60; to get previous page results..</param>
        /// <param name="jobs">List of job details for the given input..</param>
        public JobListing(int totalResultSize = default(int), string nextPageToken = default(string), string previousPageToken = default(string), List<ServiceJob> jobs = default(List<ServiceJob>))
        {
            this.TotalResultSize = totalResultSize;
            this.NextPageToken = nextPageToken;
            this.PreviousPageToken = previousPageToken;
            this.Jobs = jobs;
        }

        /// <summary>
        /// Total result size of the query result.
        /// </summary>
        /// <value>Total result size of the query result.</value>
        [DataMember(Name = "totalResultSize", EmitDefaultValue = false)]
        public int TotalResultSize { get; set; }

        /// <summary>
        /// A generated string used to pass information to your next request. If &#x60;nextPageToken&#x60; is returned, pass the value of &#x60;nextPageToken&#x60; to the &#x60;pageToken&#x60; to get next results.
        /// </summary>
        /// <value>A generated string used to pass information to your next request. If &#x60;nextPageToken&#x60; is returned, pass the value of &#x60;nextPageToken&#x60; to the &#x60;pageToken&#x60; to get next results.</value>
        [DataMember(Name = "nextPageToken", EmitDefaultValue = false)]
        public string NextPageToken { get; set; }

        /// <summary>
        /// A generated string used to pass information to your next request. If &#x60;previousPageToken&#x60; is returned, pass the value of &#x60;previousPageToken&#x60; to the &#x60;pageToken&#x60; to get previous page results.
        /// </summary>
        /// <value>A generated string used to pass information to your next request. If &#x60;previousPageToken&#x60; is returned, pass the value of &#x60;previousPageToken&#x60; to the &#x60;pageToken&#x60; to get previous page results.</value>
        [DataMember(Name = "previousPageToken", EmitDefaultValue = false)]
        public string PreviousPageToken { get; set; }

        /// <summary>
        /// List of job details for the given input.
        /// </summary>
        /// <value>List of job details for the given input.</value>
        [DataMember(Name = "jobs", EmitDefaultValue = false)]
        public List<ServiceJob> Jobs { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            StringBuilder sb = new StringBuilder();
            sb.Append("class JobListing {\n");
            sb.Append("  TotalResultSize: ").Append(TotalResultSize).Append("\n");
            sb.Append("  NextPageToken: ").Append(NextPageToken).Append("\n");
            sb.Append("  PreviousPageToken: ").Append(PreviousPageToken).Append("\n");
            sb.Append("  Jobs: ").Append(Jobs).Append("\n");
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
