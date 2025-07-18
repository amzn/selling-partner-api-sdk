/*
 * The Selling Partner API for Amazon Warehousing and Distribution
 *
 * The Selling Partner API for Amazon Warehousing and Distribution (AWD) provides programmatic access to information about AWD shipments and inventory.
 *
 * The version of the OpenAPI document: 2024-05-09
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

namespace software.amzn.spapi.Model.awd.v2024_05_09
{
    /// <summary>
    /// The expiration details of the inventory. This object will only appear if the details parameter in the request is set to &#x60;SHOW&#x60;.
    /// </summary>
    [DataContract(Name = "ExpirationDetails")]
    public partial class ExpirationDetails : IValidatableObject
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="ExpirationDetails" /> class.
        /// </summary>
        /// <param name="expiration">The expiration date of the SKU..</param>
        /// <param name="onhandQuantity">The quantity that is present in AWD..</param>
        public ExpirationDetails(DateTime expiration = default(DateTime), long onhandQuantity = default(long))
        {
            this.Expiration = expiration;
            this.OnhandQuantity = onhandQuantity;
        }

        /// <summary>
        /// The expiration date of the SKU.
        /// </summary>
        /// <value>The expiration date of the SKU.</value>
        [DataMember(Name = "expiration", EmitDefaultValue = false)]
        public DateTime Expiration { get; set; }

        /// <summary>
        /// The quantity that is present in AWD.
        /// </summary>
        /// <value>The quantity that is present in AWD.</value>
        [DataMember(Name = "onhandQuantity", EmitDefaultValue = false)]
        public long OnhandQuantity { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            StringBuilder sb = new StringBuilder();
            sb.Append("class ExpirationDetails {\n");
            sb.Append("  Expiration: ").Append(Expiration).Append("\n");
            sb.Append("  OnhandQuantity: ").Append(OnhandQuantity).Append("\n");
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
