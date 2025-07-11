/*
 * Selling Partner API for Direct Fulfillment Shipping
 *
 * Use the Selling Partner API for Direct Fulfillment Shipping to access a direct fulfillment vendor's shipping data.
 *
 * The version of the OpenAPI document: 2021-12-28
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

namespace software.amzn.spapi.Model.vendor.df.shipping.v2021_12_28
{
    /// <summary>
    /// The package that is associated with the container.
    /// </summary>
    [DataContract(Name = "Package")]
    public partial class Package : IValidatableObject
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="Package" /> class.
        /// </summary>
        [JsonConstructorAttribute]
        protected Package() { }
        /// <summary>
        /// Initializes a new instance of the <see cref="Package" /> class.
        /// </summary>
        /// <param name="packageTrackingNumber">The tracking number on the label of shipment package, that you can fetch from the &#x60;shippingLabels&#x60; response. You can also scan the bar code on the shipping label to get the tracking number. (required).</param>
        public Package(string packageTrackingNumber = default(string))
        {
            // to ensure "packageTrackingNumber" is required (not null)
            if (packageTrackingNumber == null)
            {
                throw new ArgumentNullException("packageTrackingNumber is a required property for Package and cannot be null");
            }
            this.PackageTrackingNumber = packageTrackingNumber;
        }

        /// <summary>
        /// The tracking number on the label of shipment package, that you can fetch from the &#x60;shippingLabels&#x60; response. You can also scan the bar code on the shipping label to get the tracking number.
        /// </summary>
        /// <value>The tracking number on the label of shipment package, that you can fetch from the &#x60;shippingLabels&#x60; response. You can also scan the bar code on the shipping label to get the tracking number.</value>
        [DataMember(Name = "packageTrackingNumber", IsRequired = true, EmitDefaultValue = true)]
        public string PackageTrackingNumber { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            StringBuilder sb = new StringBuilder();
            sb.Append("class Package {\n");
            sb.Append("  PackageTrackingNumber: ").Append(PackageTrackingNumber).Append("\n");
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
