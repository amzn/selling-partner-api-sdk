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
    /// Information about an item associated with the service job.
    /// </summary>
    [DataContract(Name = "AssociatedItem")]
    public partial class AssociatedItem : IValidatableObject
    {
        /// <summary>
        /// The status of the item.
        /// </summary>
        /// <value>The status of the item.</value>
        [JsonConverter(typeof(StringEnumConverter))]
        public enum ItemStatusEnum
        {
            /// <summary>
            /// Enum ACTIVE for value: ACTIVE
            /// </summary>
            [EnumMember(Value = "ACTIVE")]
            ACTIVE = 1,

            /// <summary>
            /// Enum CANCELLED for value: CANCELLED
            /// </summary>
            [EnumMember(Value = "CANCELLED")]
            CANCELLED = 2,

            /// <summary>
            /// Enum SHIPPED for value: SHIPPED
            /// </summary>
            [EnumMember(Value = "SHIPPED")]
            SHIPPED = 3,

            /// <summary>
            /// Enum DELIVERED for value: DELIVERED
            /// </summary>
            [EnumMember(Value = "DELIVERED")]
            DELIVERED = 4
        }


        /// <summary>
        /// The status of the item.
        /// </summary>
        /// <value>The status of the item.</value>
        [DataMember(Name = "itemStatus", EmitDefaultValue = false)]
        public ItemStatusEnum? ItemStatus { get; set; }
        /// <summary>
        /// Initializes a new instance of the <see cref="AssociatedItem" /> class.
        /// </summary>
        /// <param name="asin">The Amazon Standard Identification Number (ASIN) of the item..</param>
        /// <param name="title">The title of the item..</param>
        /// <param name="quantity">The total number of items included in the order..</param>
        /// <param name="orderId">The Amazon-defined identifier for an order placed by the buyer, in 3-7-7 format..</param>
        /// <param name="itemStatus">The status of the item..</param>
        /// <param name="brandName">The brand name of the item..</param>
        /// <param name="itemDelivery">itemDelivery.</param>
        public AssociatedItem(string asin = default(string), string title = default(string), int quantity = default(int), string orderId = default(string), ItemStatusEnum? itemStatus = default(ItemStatusEnum?), string brandName = default(string), ItemDelivery itemDelivery = default(ItemDelivery))
        {
            this.Asin = asin;
            this.Title = title;
            this.Quantity = quantity;
            this.OrderId = orderId;
            this.ItemStatus = itemStatus;
            this.BrandName = brandName;
            this.ItemDelivery = itemDelivery;
        }

        /// <summary>
        /// The Amazon Standard Identification Number (ASIN) of the item.
        /// </summary>
        /// <value>The Amazon Standard Identification Number (ASIN) of the item.</value>
        [DataMember(Name = "asin", EmitDefaultValue = false)]
        public string Asin { get; set; }

        /// <summary>
        /// The title of the item.
        /// </summary>
        /// <value>The title of the item.</value>
        [DataMember(Name = "title", EmitDefaultValue = false)]
        public string Title { get; set; }

        /// <summary>
        /// The total number of items included in the order.
        /// </summary>
        /// <value>The total number of items included in the order.</value>
        [DataMember(Name = "quantity", EmitDefaultValue = false)]
        public int Quantity { get; set; }

        /// <summary>
        /// The Amazon-defined identifier for an order placed by the buyer, in 3-7-7 format.
        /// </summary>
        /// <value>The Amazon-defined identifier for an order placed by the buyer, in 3-7-7 format.</value>
        [DataMember(Name = "orderId", EmitDefaultValue = false)]
        public string OrderId { get; set; }

        /// <summary>
        /// The brand name of the item.
        /// </summary>
        /// <value>The brand name of the item.</value>
        [DataMember(Name = "brandName", EmitDefaultValue = false)]
        public string BrandName { get; set; }

        /// <summary>
        /// Gets or Sets ItemDelivery
        /// </summary>
        [DataMember(Name = "itemDelivery", EmitDefaultValue = false)]
        public ItemDelivery ItemDelivery { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            StringBuilder sb = new StringBuilder();
            sb.Append("class AssociatedItem {\n");
            sb.Append("  Asin: ").Append(Asin).Append("\n");
            sb.Append("  Title: ").Append(Title).Append("\n");
            sb.Append("  Quantity: ").Append(Quantity).Append("\n");
            sb.Append("  OrderId: ").Append(OrderId).Append("\n");
            sb.Append("  ItemStatus: ").Append(ItemStatus).Append("\n");
            sb.Append("  BrandName: ").Append(BrandName).Append("\n");
            sb.Append("  ItemDelivery: ").Append(ItemDelivery).Append("\n");
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
            // OrderId (string) maxLength
            if (this.OrderId != null && this.OrderId.Length > 20)
            {
                yield return new ValidationResult("Invalid value for OrderId, length must be less than 20.", new [] { "OrderId" });
            }

            // OrderId (string) minLength
            if (this.OrderId != null && this.OrderId.Length < 5)
            {
                yield return new ValidationResult("Invalid value for OrderId, length must be greater than 5.", new [] { "OrderId" });
            }

            yield break;
        }
    }

}
