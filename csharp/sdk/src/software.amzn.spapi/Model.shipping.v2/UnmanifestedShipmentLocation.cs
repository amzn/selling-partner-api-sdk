/*
 * Amazon Shipping API
 *
 * The Amazon Shipping API is designed to support outbound shipping use cases both for orders originating on Amazon-owned marketplaces as well as external channels/marketplaces. With these APIs, you can request shipping rates, create shipments, cancel shipments, and track shipments.
 *
 * The version of the OpenAPI document: v2
 * Contact: swa-api-core@amazon.com
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

namespace software.amzn.spapi.Model.shipping.v2
{
    /// <summary>
    /// UnmanifestedShipmentLocation info 
    /// </summary>
    [DataContract(Name = "UnmanifestedShipmentLocation")]
    public partial class UnmanifestedShipmentLocation : IValidatableObject
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="UnmanifestedShipmentLocation" /> class.
        /// </summary>
        /// <param name="address">address.</param>
        /// <param name="lastManifestDate">Its Last Manifest Date..</param>
        public UnmanifestedShipmentLocation(Address address = default(Address), string lastManifestDate = default(string))
        {
            this.Address = address;
            this.LastManifestDate = lastManifestDate;
        }

        /// <summary>
        /// Gets or Sets Address
        /// </summary>
        [DataMember(Name = "address", EmitDefaultValue = false)]
        public Address Address { get; set; }

        /// <summary>
        /// Its Last Manifest Date.
        /// </summary>
        /// <value>Its Last Manifest Date.</value>
        [DataMember(Name = "lastManifestDate", EmitDefaultValue = false)]
        public string LastManifestDate { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            StringBuilder sb = new StringBuilder();
            sb.Append("class UnmanifestedShipmentLocation {\n");
            sb.Append("  Address: ").Append(Address).Append("\n");
            sb.Append("  LastManifestDate: ").Append(LastManifestDate).Append("\n");
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
