/*
 * Selling Partner API for Merchant Fulfillment
 *
 * With the Selling Partner API for Merchant Fulfillment, you can build applications that sellers can use to purchase shipping for non-Prime and Prime orders using Amazon's Buy Shipping Services.
 *
 * The version of the OpenAPI document: v0
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

namespace software.amzn.spapi.Model.merchantFulfillment.v0
{
    /// <summary>
    /// Information about a rejected shipping service
    /// </summary>
    [DataContract(Name = "RejectedShippingService")]
    public partial class RejectedShippingService : IValidatableObject
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="RejectedShippingService" /> class.
        /// </summary>
        [JsonConstructorAttribute]
        protected RejectedShippingService() { }
        /// <summary>
        /// Initializes a new instance of the <see cref="RejectedShippingService" /> class.
        /// </summary>
        /// <param name="carrierName">The rejected shipping carrier name. For example, USPS. (required).</param>
        /// <param name="shippingServiceName">The rejected shipping service localized name. For example, FedEx Standard Overnight. (required).</param>
        /// <param name="shippingServiceId">An Amazon-defined shipping service identifier. (required).</param>
        /// <param name="rejectionReasonCode">A reason code meant to be consumed programatically. For example, &#x60;CARRIER_CANNOT_SHIP_TO_POBOX&#x60;. (required).</param>
        /// <param name="rejectionReasonMessage">A localized human readable description of the rejected reason..</param>
        public RejectedShippingService(string carrierName = default(string), string shippingServiceName = default(string), string shippingServiceId = default(string), string rejectionReasonCode = default(string), string rejectionReasonMessage = default(string))
        {
            // to ensure "carrierName" is required (not null)
            if (carrierName == null)
            {
                throw new ArgumentNullException("carrierName is a required property for RejectedShippingService and cannot be null");
            }
            this.CarrierName = carrierName;
            // to ensure "shippingServiceName" is required (not null)
            if (shippingServiceName == null)
            {
                throw new ArgumentNullException("shippingServiceName is a required property for RejectedShippingService and cannot be null");
            }
            this.ShippingServiceName = shippingServiceName;
            // to ensure "shippingServiceId" is required (not null)
            if (shippingServiceId == null)
            {
                throw new ArgumentNullException("shippingServiceId is a required property for RejectedShippingService and cannot be null");
            }
            this.ShippingServiceId = shippingServiceId;
            // to ensure "rejectionReasonCode" is required (not null)
            if (rejectionReasonCode == null)
            {
                throw new ArgumentNullException("rejectionReasonCode is a required property for RejectedShippingService and cannot be null");
            }
            this.RejectionReasonCode = rejectionReasonCode;
            this.RejectionReasonMessage = rejectionReasonMessage;
        }

        /// <summary>
        /// The rejected shipping carrier name. For example, USPS.
        /// </summary>
        /// <value>The rejected shipping carrier name. For example, USPS.</value>
        [DataMember(Name = "CarrierName", IsRequired = true, EmitDefaultValue = true)]
        public string CarrierName { get; set; }

        /// <summary>
        /// The rejected shipping service localized name. For example, FedEx Standard Overnight.
        /// </summary>
        /// <value>The rejected shipping service localized name. For example, FedEx Standard Overnight.</value>
        [DataMember(Name = "ShippingServiceName", IsRequired = true, EmitDefaultValue = true)]
        public string ShippingServiceName { get; set; }

        /// <summary>
        /// An Amazon-defined shipping service identifier.
        /// </summary>
        /// <value>An Amazon-defined shipping service identifier.</value>
        [DataMember(Name = "ShippingServiceId", IsRequired = true, EmitDefaultValue = true)]
        public string ShippingServiceId { get; set; }

        /// <summary>
        /// A reason code meant to be consumed programatically. For example, &#x60;CARRIER_CANNOT_SHIP_TO_POBOX&#x60;.
        /// </summary>
        /// <value>A reason code meant to be consumed programatically. For example, &#x60;CARRIER_CANNOT_SHIP_TO_POBOX&#x60;.</value>
        [DataMember(Name = "RejectionReasonCode", IsRequired = true, EmitDefaultValue = true)]
        public string RejectionReasonCode { get; set; }

        /// <summary>
        /// A localized human readable description of the rejected reason.
        /// </summary>
        /// <value>A localized human readable description of the rejected reason.</value>
        [DataMember(Name = "RejectionReasonMessage", EmitDefaultValue = false)]
        public string RejectionReasonMessage { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            StringBuilder sb = new StringBuilder();
            sb.Append("class RejectedShippingService {\n");
            sb.Append("  CarrierName: ").Append(CarrierName).Append("\n");
            sb.Append("  ShippingServiceName: ").Append(ShippingServiceName).Append("\n");
            sb.Append("  ShippingServiceId: ").Append(ShippingServiceId).Append("\n");
            sb.Append("  RejectionReasonCode: ").Append(RejectionReasonCode).Append("\n");
            sb.Append("  RejectionReasonMessage: ").Append(RejectionReasonMessage).Append("\n");
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
