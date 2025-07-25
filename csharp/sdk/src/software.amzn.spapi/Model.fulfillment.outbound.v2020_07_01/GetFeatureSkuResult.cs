/*
 * Selling Partner APIs for Fulfillment Outbound
 *
 * The Selling Partner API for Fulfillment Outbound lets you create applications that help a seller fulfill Multi-Channel Fulfillment orders using their inventory in Amazon's fulfillment network. You can get information on both potential and existing fulfillment orders.
 *
 * The version of the OpenAPI document: 2020-07-01
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

namespace software.amzn.spapi.Model.fulfillment.outbound.v2020_07_01
{
    /// <summary>
    /// The payload for the &#x60;getFeatureSKU&#x60; operation.
    /// </summary>
    [DataContract(Name = "GetFeatureSkuResult")]
    public partial class GetFeatureSkuResult : IValidatableObject
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="GetFeatureSkuResult" /> class.
        /// </summary>
        [JsonConstructorAttribute]
        protected GetFeatureSkuResult() { }
        /// <summary>
        /// Initializes a new instance of the <see cref="GetFeatureSkuResult" /> class.
        /// </summary>
        /// <param name="marketplaceId">The requested marketplace. (required).</param>
        /// <param name="featureName">The name of the feature. (required).</param>
        /// <param name="isEligible">When true, the seller SKU is eligible for the requested feature. (required).</param>
        /// <param name="ineligibleReasons">A list of one or more reasons that the seller SKU is ineligibile for the feature.  Possible values: * &#x60;MERCHANT_NOT_ENROLLED&#x60; - The merchant isn&#39;t enrolled for the feature. * &#x60;SKU_NOT_ELIGIBLE&#x60; - The SKU doesn&#39;t reside in a warehouse that supports the feature. * &#x60;INVALID_SKU&#x60; - There is an issue with the SKU provided..</param>
        /// <param name="skuInfo">skuInfo.</param>
        public GetFeatureSkuResult(string marketplaceId = default(string), string featureName = default(string), bool isEligible = default(bool), List<string> ineligibleReasons = default(List<string>), FeatureSku skuInfo = default(FeatureSku))
        {
            // to ensure "marketplaceId" is required (not null)
            if (marketplaceId == null)
            {
                throw new ArgumentNullException("marketplaceId is a required property for GetFeatureSkuResult and cannot be null");
            }
            this.MarketplaceId = marketplaceId;
            // to ensure "featureName" is required (not null)
            if (featureName == null)
            {
                throw new ArgumentNullException("featureName is a required property for GetFeatureSkuResult and cannot be null");
            }
            this.FeatureName = featureName;
            this.IsEligible = isEligible;
            this.IneligibleReasons = ineligibleReasons;
            this.SkuInfo = skuInfo;
        }

        /// <summary>
        /// The requested marketplace.
        /// </summary>
        /// <value>The requested marketplace.</value>
        [DataMember(Name = "marketplaceId", IsRequired = true, EmitDefaultValue = true)]
        public string MarketplaceId { get; set; }

        /// <summary>
        /// The name of the feature.
        /// </summary>
        /// <value>The name of the feature.</value>
        [DataMember(Name = "featureName", IsRequired = true, EmitDefaultValue = true)]
        public string FeatureName { get; set; }

        /// <summary>
        /// When true, the seller SKU is eligible for the requested feature.
        /// </summary>
        /// <value>When true, the seller SKU is eligible for the requested feature.</value>
        [DataMember(Name = "isEligible", IsRequired = true, EmitDefaultValue = true)]
        public bool IsEligible { get; set; }

        /// <summary>
        /// A list of one or more reasons that the seller SKU is ineligibile for the feature.  Possible values: * &#x60;MERCHANT_NOT_ENROLLED&#x60; - The merchant isn&#39;t enrolled for the feature. * &#x60;SKU_NOT_ELIGIBLE&#x60; - The SKU doesn&#39;t reside in a warehouse that supports the feature. * &#x60;INVALID_SKU&#x60; - There is an issue with the SKU provided.
        /// </summary>
        /// <value>A list of one or more reasons that the seller SKU is ineligibile for the feature.  Possible values: * &#x60;MERCHANT_NOT_ENROLLED&#x60; - The merchant isn&#39;t enrolled for the feature. * &#x60;SKU_NOT_ELIGIBLE&#x60; - The SKU doesn&#39;t reside in a warehouse that supports the feature. * &#x60;INVALID_SKU&#x60; - There is an issue with the SKU provided.</value>
        [DataMember(Name = "ineligibleReasons", EmitDefaultValue = false)]
        public List<string> IneligibleReasons { get; set; }

        /// <summary>
        /// Gets or Sets SkuInfo
        /// </summary>
        [DataMember(Name = "skuInfo", EmitDefaultValue = false)]
        public FeatureSku SkuInfo { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            StringBuilder sb = new StringBuilder();
            sb.Append("class GetFeatureSkuResult {\n");
            sb.Append("  MarketplaceId: ").Append(MarketplaceId).Append("\n");
            sb.Append("  FeatureName: ").Append(FeatureName).Append("\n");
            sb.Append("  IsEligible: ").Append(IsEligible).Append("\n");
            sb.Append("  IneligibleReasons: ").Append(IneligibleReasons).Append("\n");
            sb.Append("  SkuInfo: ").Append(SkuInfo).Append("\n");
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
