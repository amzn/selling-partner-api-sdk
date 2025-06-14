/*
 * Selling Partner API for Listings Items
 *
 * The Selling Partner API for Listings Items (Listings Items API) provides programmatic access to selling partner listings on Amazon. Use this API in collaboration with the Selling Partner API for Product Type Definitions, which you use to retrieve the information about Amazon product types needed to use the Listings Items API.  For more information, see the [Listings Items API Use Case Guide](https://developer-docs.amazon.com/sp-api/docs/listings-items-api-v2021-08-01-use-case-guide).
 *
 * The version of the OpenAPI document: 2021-08-01
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

namespace software.amzn.spapi.Model.listings.items.v2021_08_01
{
    /// <summary>
    /// Selling partner listings items and search related metadata.
    /// </summary>
    [DataContract(Name = "ItemSearchResults")]
    public partial class ItemSearchResults : IValidatableObject
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="ItemSearchResults" /> class.
        /// </summary>
        [JsonConstructorAttribute]
        protected ItemSearchResults() { }
        /// <summary>
        /// Initializes a new instance of the <see cref="ItemSearchResults" /> class.
        /// </summary>
        /// <param name="numberOfResults">The total number of selling partner listings items found for the search criteria (only results up to the page count limit is returned per request regardless of the number found).  Note: The maximum number of items (SKUs) that can be returned and paged through is 1000. (required).</param>
        /// <param name="pagination">pagination.</param>
        /// <param name="items">A list of listings items. (required).</param>
        public ItemSearchResults(int numberOfResults = default(int), Pagination pagination = default(Pagination), List<Item> items = default(List<Item>))
        {
            this.NumberOfResults = numberOfResults;
            // to ensure "items" is required (not null)
            if (items == null)
            {
                throw new ArgumentNullException("items is a required property for ItemSearchResults and cannot be null");
            }
            this.Items = items;
            this.Pagination = pagination;
        }

        /// <summary>
        /// The total number of selling partner listings items found for the search criteria (only results up to the page count limit is returned per request regardless of the number found).  Note: The maximum number of items (SKUs) that can be returned and paged through is 1000.
        /// </summary>
        /// <value>The total number of selling partner listings items found for the search criteria (only results up to the page count limit is returned per request regardless of the number found).  Note: The maximum number of items (SKUs) that can be returned and paged through is 1000.</value>
        [DataMember(Name = "numberOfResults", IsRequired = true, EmitDefaultValue = true)]
        public int NumberOfResults { get; set; }

        /// <summary>
        /// Gets or Sets Pagination
        /// </summary>
        [DataMember(Name = "pagination", EmitDefaultValue = false)]
        public Pagination Pagination { get; set; }

        /// <summary>
        /// A list of listings items.
        /// </summary>
        /// <value>A list of listings items.</value>
        [DataMember(Name = "items", IsRequired = true, EmitDefaultValue = true)]
        public List<Item> Items { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            StringBuilder sb = new StringBuilder();
            sb.Append("class ItemSearchResults {\n");
            sb.Append("  NumberOfResults: ").Append(NumberOfResults).Append("\n");
            sb.Append("  Pagination: ").Append(Pagination).Append("\n");
            sb.Append("  Items: ").Append(Items).Append("\n");
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
