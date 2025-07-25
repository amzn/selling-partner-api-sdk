/*
 * Selling Partner API for Catalog Items
 *
 * Use the Selling Partner API for Catalog Items to retrieve information about items in the Amazon catalog.  For more information, refer to the [Catalog Items API Use Case Guide](https://developer-docs.amazon.com/sp-api/docs/:catalog-items-api-v2022-04-01-use-case-guide).
 *
 * The version of the OpenAPI document: 2022-04-01
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

namespace software.amzn.spapi.Model.catalogItems.v2022_04_01
{
    /// <summary>
    /// The value of an individual dimension for an Amazon catalog item or item package.
    /// </summary>
    [DataContract(Name = "Dimension")]
    public partial class Dimension : IValidatableObject
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="Dimension" /> class.
        /// </summary>
        /// <param name="unit">Unit of measurement for the dimension value..</param>
        /// <param name="value">Numeric value of the dimension..</param>
        public Dimension(string unit = default(string), decimal value = default(decimal))
        {
            this.Unit = unit;
            this.Value = value;
        }

        /// <summary>
        /// Unit of measurement for the dimension value.
        /// </summary>
        /// <value>Unit of measurement for the dimension value.</value>
        [DataMember(Name = "unit", EmitDefaultValue = false)]
        public string Unit { get; set; }

        /// <summary>
        /// Numeric value of the dimension.
        /// </summary>
        /// <value>Numeric value of the dimension.</value>
        [DataMember(Name = "value", EmitDefaultValue = false)]
        public decimal Value { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            StringBuilder sb = new StringBuilder();
            sb.Append("class Dimension {\n");
            sb.Append("  Unit: ").Append(Unit).Append("\n");
            sb.Append("  Value: ").Append(Value).Append("\n");
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
