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
    /// Request schema for the &#x60;assignAppointmentResources&#x60; operation.
    /// </summary>
    [DataContract(Name = "AssignAppointmentResourcesRequest")]
    public partial class AssignAppointmentResourcesRequest : IValidatableObject
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="AssignAppointmentResourcesRequest" /> class.
        /// </summary>
        [JsonConstructorAttribute]
        protected AssignAppointmentResourcesRequest() { }
        /// <summary>
        /// Initializes a new instance of the <see cref="AssignAppointmentResourcesRequest" /> class.
        /// </summary>
        /// <param name="resources">List of resources that performs or performed job appointment fulfillment. (required).</param>
        public AssignAppointmentResourcesRequest(List<AppointmentResource> resources = default(List<AppointmentResource>))
        {
            // to ensure "resources" is required (not null)
            if (resources == null)
            {
                throw new ArgumentNullException("resources is a required property for AssignAppointmentResourcesRequest and cannot be null");
            }
            this.Resources = resources;
        }

        /// <summary>
        /// List of resources that performs or performed job appointment fulfillment.
        /// </summary>
        /// <value>List of resources that performs or performed job appointment fulfillment.</value>
        [DataMember(Name = "resources", IsRequired = true, EmitDefaultValue = true)]
        public List<AppointmentResource> Resources { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            StringBuilder sb = new StringBuilder();
            sb.Append("class AssignAppointmentResourcesRequest {\n");
            sb.Append("  Resources: ").Append(Resources).Append("\n");
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
