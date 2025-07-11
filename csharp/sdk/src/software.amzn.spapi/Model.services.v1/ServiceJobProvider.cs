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
    /// Information about the service job provider.
    /// </summary>
    [DataContract(Name = "ServiceJobProvider")]
    public partial class ServiceJobProvider : IValidatableObject
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="ServiceJobProvider" /> class.
        /// </summary>
        /// <param name="serviceJobProviderId">The identifier of the service job provider..</param>
        public ServiceJobProvider(string serviceJobProviderId = default(string))
        {
            this.ServiceJobProviderId = serviceJobProviderId;
        }

        /// <summary>
        /// The identifier of the service job provider.
        /// </summary>
        /// <value>The identifier of the service job provider.</value>
        [DataMember(Name = "serviceJobProviderId", EmitDefaultValue = false)]
        public string ServiceJobProviderId { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            StringBuilder sb = new StringBuilder();
            sb.Append("class ServiceJobProvider {\n");
            sb.Append("  ServiceJobProviderId: ").Append(ServiceJobProviderId).Append("\n");
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
            if (this.ServiceJobProviderId != null) {
                // ServiceJobProviderId (string) pattern
                Regex regexServiceJobProviderId = new Regex(@"^[A-Z0-9]*$", RegexOptions.CultureInvariant);
                if (!regexServiceJobProviderId.Match(this.ServiceJobProviderId).Success)
                {
                    yield return new System.ComponentModel.DataAnnotations.ValidationResult("Invalid value for ServiceJobProviderId, must match a pattern of " + regexServiceJobProviderId, new [] { "ServiceJobProviderId" });
                }
            }

            yield break;
        }
    }

}
