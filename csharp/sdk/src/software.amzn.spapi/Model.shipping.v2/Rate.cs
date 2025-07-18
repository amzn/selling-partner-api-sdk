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
    /// The details of a shipping service offering.
    /// </summary>
    [DataContract(Name = "Rate")]
    public partial class Rate : IValidatableObject
    {

        /// <summary>
        /// Gets or Sets PaymentType
        /// </summary>
        [DataMember(Name = "paymentType", EmitDefaultValue = false)]
        public PaymentType? PaymentType { get; set; }
        /// <summary>
        /// Initializes a new instance of the <see cref="Rate" /> class.
        /// </summary>
        [JsonConstructorAttribute]
        protected Rate() { }
        /// <summary>
        /// Initializes a new instance of the <see cref="Rate" /> class.
        /// </summary>
        /// <param name="rateId">An identifier for the rate (shipment offering) provided by a shipping service provider. (required).</param>
        /// <param name="carrierId">The carrier identifier for the offering, provided by the carrier. (required).</param>
        /// <param name="carrierName">The carrier name for the offering. (required).</param>
        /// <param name="serviceId">An identifier for the shipping service. (required).</param>
        /// <param name="serviceName">The name of the shipping service. (required).</param>
        /// <param name="billedWeight">billedWeight.</param>
        /// <param name="totalCharge">totalCharge (required).</param>
        /// <param name="promise">promise (required).</param>
        /// <param name="supportedDocumentSpecifications">A list of the document specifications supported for a shipment service offering. (required).</param>
        /// <param name="availableValueAddedServiceGroups">A list of value-added services available for a shipping service offering..</param>
        /// <param name="requiresAdditionalInputs">When true, indicates that additional inputs are required to purchase this shipment service. You must then call the getAdditionalInputs operation to return the JSON schema to use when providing the additional inputs to the purchaseShipment operation. (required).</param>
        /// <param name="rateItemList">A list of RateItem.</param>
        /// <param name="paymentType">paymentType.</param>
        /// <param name="benefits">benefits.</param>
        public Rate(string rateId = default(string), string carrierId = default(string), string carrierName = default(string), string serviceId = default(string), string serviceName = default(string), Weight billedWeight = default(Weight), Currency totalCharge = default(Currency), Promise promise = default(Promise), List<SupportedDocumentSpecification> supportedDocumentSpecifications = default(List<SupportedDocumentSpecification>), List<AvailableValueAddedServiceGroup> availableValueAddedServiceGroups = default(List<AvailableValueAddedServiceGroup>), bool requiresAdditionalInputs = default(bool), List<RateItem> rateItemList = default(List<RateItem>), PaymentType? paymentType = default(PaymentType?), Benefits benefits = default(Benefits))
        {
            // to ensure "rateId" is required (not null)
            if (rateId == null)
            {
                throw new ArgumentNullException("rateId is a required property for Rate and cannot be null");
            }
            this.RateId = rateId;
            // to ensure "carrierId" is required (not null)
            if (carrierId == null)
            {
                throw new ArgumentNullException("carrierId is a required property for Rate and cannot be null");
            }
            this.CarrierId = carrierId;
            // to ensure "carrierName" is required (not null)
            if (carrierName == null)
            {
                throw new ArgumentNullException("carrierName is a required property for Rate and cannot be null");
            }
            this.CarrierName = carrierName;
            // to ensure "serviceId" is required (not null)
            if (serviceId == null)
            {
                throw new ArgumentNullException("serviceId is a required property for Rate and cannot be null");
            }
            this.ServiceId = serviceId;
            // to ensure "serviceName" is required (not null)
            if (serviceName == null)
            {
                throw new ArgumentNullException("serviceName is a required property for Rate and cannot be null");
            }
            this.ServiceName = serviceName;
            // to ensure "totalCharge" is required (not null)
            if (totalCharge == null)
            {
                throw new ArgumentNullException("totalCharge is a required property for Rate and cannot be null");
            }
            this.TotalCharge = totalCharge;
            // to ensure "promise" is required (not null)
            if (promise == null)
            {
                throw new ArgumentNullException("promise is a required property for Rate and cannot be null");
            }
            this.Promise = promise;
            // to ensure "supportedDocumentSpecifications" is required (not null)
            if (supportedDocumentSpecifications == null)
            {
                throw new ArgumentNullException("supportedDocumentSpecifications is a required property for Rate and cannot be null");
            }
            this.SupportedDocumentSpecifications = supportedDocumentSpecifications;
            this.RequiresAdditionalInputs = requiresAdditionalInputs;
            this.BilledWeight = billedWeight;
            this.AvailableValueAddedServiceGroups = availableValueAddedServiceGroups;
            this.RateItemList = rateItemList;
            this.PaymentType = paymentType;
            this.Benefits = benefits;
        }

        /// <summary>
        /// An identifier for the rate (shipment offering) provided by a shipping service provider.
        /// </summary>
        /// <value>An identifier for the rate (shipment offering) provided by a shipping service provider.</value>
        [DataMember(Name = "rateId", IsRequired = true, EmitDefaultValue = true)]
        public string RateId { get; set; }

        /// <summary>
        /// The carrier identifier for the offering, provided by the carrier.
        /// </summary>
        /// <value>The carrier identifier for the offering, provided by the carrier.</value>
        [DataMember(Name = "carrierId", IsRequired = true, EmitDefaultValue = true)]
        public string CarrierId { get; set; }

        /// <summary>
        /// The carrier name for the offering.
        /// </summary>
        /// <value>The carrier name for the offering.</value>
        [DataMember(Name = "carrierName", IsRequired = true, EmitDefaultValue = true)]
        public string CarrierName { get; set; }

        /// <summary>
        /// An identifier for the shipping service.
        /// </summary>
        /// <value>An identifier for the shipping service.</value>
        [DataMember(Name = "serviceId", IsRequired = true, EmitDefaultValue = true)]
        public string ServiceId { get; set; }

        /// <summary>
        /// The name of the shipping service.
        /// </summary>
        /// <value>The name of the shipping service.</value>
        [DataMember(Name = "serviceName", IsRequired = true, EmitDefaultValue = true)]
        public string ServiceName { get; set; }

        /// <summary>
        /// Gets or Sets BilledWeight
        /// </summary>
        [DataMember(Name = "billedWeight", EmitDefaultValue = false)]
        public Weight BilledWeight { get; set; }

        /// <summary>
        /// Gets or Sets TotalCharge
        /// </summary>
        [DataMember(Name = "totalCharge", IsRequired = true, EmitDefaultValue = true)]
        public Currency TotalCharge { get; set; }

        /// <summary>
        /// Gets or Sets Promise
        /// </summary>
        [DataMember(Name = "promise", IsRequired = true, EmitDefaultValue = true)]
        public Promise Promise { get; set; }

        /// <summary>
        /// A list of the document specifications supported for a shipment service offering.
        /// </summary>
        /// <value>A list of the document specifications supported for a shipment service offering.</value>
        [DataMember(Name = "supportedDocumentSpecifications", IsRequired = true, EmitDefaultValue = true)]
        public List<SupportedDocumentSpecification> SupportedDocumentSpecifications { get; set; }

        /// <summary>
        /// A list of value-added services available for a shipping service offering.
        /// </summary>
        /// <value>A list of value-added services available for a shipping service offering.</value>
        [DataMember(Name = "availableValueAddedServiceGroups", EmitDefaultValue = false)]
        public List<AvailableValueAddedServiceGroup> AvailableValueAddedServiceGroups { get; set; }

        /// <summary>
        /// When true, indicates that additional inputs are required to purchase this shipment service. You must then call the getAdditionalInputs operation to return the JSON schema to use when providing the additional inputs to the purchaseShipment operation.
        /// </summary>
        /// <value>When true, indicates that additional inputs are required to purchase this shipment service. You must then call the getAdditionalInputs operation to return the JSON schema to use when providing the additional inputs to the purchaseShipment operation.</value>
        [DataMember(Name = "requiresAdditionalInputs", IsRequired = true, EmitDefaultValue = true)]
        public bool RequiresAdditionalInputs { get; set; }

        /// <summary>
        /// A list of RateItem
        /// </summary>
        /// <value>A list of RateItem</value>
        [DataMember(Name = "rateItemList", EmitDefaultValue = false)]
        public List<RateItem> RateItemList { get; set; }

        /// <summary>
        /// Gets or Sets Benefits
        /// </summary>
        [DataMember(Name = "benefits", EmitDefaultValue = false)]
        public Benefits Benefits { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            StringBuilder sb = new StringBuilder();
            sb.Append("class Rate {\n");
            sb.Append("  RateId: ").Append(RateId).Append("\n");
            sb.Append("  CarrierId: ").Append(CarrierId).Append("\n");
            sb.Append("  CarrierName: ").Append(CarrierName).Append("\n");
            sb.Append("  ServiceId: ").Append(ServiceId).Append("\n");
            sb.Append("  ServiceName: ").Append(ServiceName).Append("\n");
            sb.Append("  BilledWeight: ").Append(BilledWeight).Append("\n");
            sb.Append("  TotalCharge: ").Append(TotalCharge).Append("\n");
            sb.Append("  Promise: ").Append(Promise).Append("\n");
            sb.Append("  SupportedDocumentSpecifications: ").Append(SupportedDocumentSpecifications).Append("\n");
            sb.Append("  AvailableValueAddedServiceGroups: ").Append(AvailableValueAddedServiceGroups).Append("\n");
            sb.Append("  RequiresAdditionalInputs: ").Append(RequiresAdditionalInputs).Append("\n");
            sb.Append("  RateItemList: ").Append(RateItemList).Append("\n");
            sb.Append("  PaymentType: ").Append(PaymentType).Append("\n");
            sb.Append("  Benefits: ").Append(Benefits).Append("\n");
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
