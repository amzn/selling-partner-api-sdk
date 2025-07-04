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
    /// Represents the packages to inbound.
    /// </summary>
    [DataContract(Name = "InboundPackages")]
    public partial class InboundPackages : IValidatableObject
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="InboundPackages" /> class.
        /// </summary>
        [JsonConstructorAttribute]
        protected InboundPackages() { }
        /// <summary>
        /// Initializes a new instance of the <see cref="InboundPackages" /> class.
        /// </summary>
        /// <param name="packagesToInbound">List of packages to be inbounded. (required).</param>
        public InboundPackages(List<DistributionPackageQuantity> packagesToInbound = default(List<DistributionPackageQuantity>))
        {
            // to ensure "packagesToInbound" is required (not null)
            if (packagesToInbound == null)
            {
                throw new ArgumentNullException("packagesToInbound is a required property for InboundPackages and cannot be null");
            }
            this.PackagesToInbound = packagesToInbound;
        }

        /// <summary>
        /// List of packages to be inbounded.
        /// </summary>
        /// <value>List of packages to be inbounded.</value>
        /*
        <example>[{count&#x3D;1, distributionPackage&#x3D;{contents&#x3D;{products&#x3D;[{quantity&#x3D;1, sku&#x3D;testPen}]}, measurements&#x3D;{dimensions&#x3D;{height&#x3D;1, length&#x3D;1, unitOfMeasurement&#x3D;INCHES, width&#x3D;1}, volume&#x3D;{unitOfMeasurement&#x3D;CUIN, volume&#x3D;1}, weight&#x3D;{unitOfMeasurement&#x3D;POUNDS, weight&#x3D;1}}, type&#x3D;CASE}}]</example>
        */
        [DataMember(Name = "packagesToInbound", IsRequired = true, EmitDefaultValue = true)]
        public List<DistributionPackageQuantity> PackagesToInbound { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            StringBuilder sb = new StringBuilder();
            sb.Append("class InboundPackages {\n");
            sb.Append("  PackagesToInbound: ").Append(PackagesToInbound).Append("\n");
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
