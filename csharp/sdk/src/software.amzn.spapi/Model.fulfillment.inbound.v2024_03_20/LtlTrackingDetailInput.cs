/*
 * The Selling Partner API for FBA inbound operations.
 *
 * The Selling Partner API for Fulfillment By Amazon (FBA) Inbound. The FBA Inbound API enables building inbound workflows to create, manage, and send shipments into Amazon's fulfillment network. The API has interoperability with the Send-to-Amazon user interface.
 *
 * The version of the OpenAPI document: 2024-03-20
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

namespace software.amzn.spapi.Model.fulfillment.inbound.v2024_03_20
{
    /// <summary>
    /// Contains input information to update Less-Than-Truckload (LTL) tracking information.
    /// </summary>
    [DataContract(Name = "LtlTrackingDetailInput")]
    public partial class LtlTrackingDetailInput : IValidatableObject
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="LtlTrackingDetailInput" /> class.
        /// </summary>
        [JsonConstructorAttribute]
        protected LtlTrackingDetailInput() { }
        /// <summary>
        /// Initializes a new instance of the <see cref="LtlTrackingDetailInput" /> class.
        /// </summary>
        /// <param name="billOfLadingNumber">The number of the carrier shipment acknowledgement document..</param>
        /// <param name="freightBillNumber">Number associated with the freight bill. (required).</param>
        public LtlTrackingDetailInput(string billOfLadingNumber = default(string), List<string> freightBillNumber = default(List<string>))
        {
            // to ensure "freightBillNumber" is required (not null)
            if (freightBillNumber == null)
            {
                throw new ArgumentNullException("freightBillNumber is a required property for LtlTrackingDetailInput and cannot be null");
            }
            this.FreightBillNumber = freightBillNumber;
            this.BillOfLadingNumber = billOfLadingNumber;
        }

        /// <summary>
        /// The number of the carrier shipment acknowledgement document.
        /// </summary>
        /// <value>The number of the carrier shipment acknowledgement document.</value>
        [DataMember(Name = "billOfLadingNumber", EmitDefaultValue = false)]
        public string BillOfLadingNumber { get; set; }

        /// <summary>
        /// Number associated with the freight bill.
        /// </summary>
        /// <value>Number associated with the freight bill.</value>
        [DataMember(Name = "freightBillNumber", IsRequired = true, EmitDefaultValue = true)]
        public List<string> FreightBillNumber { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            StringBuilder sb = new StringBuilder();
            sb.Append("class LtlTrackingDetailInput {\n");
            sb.Append("  BillOfLadingNumber: ").Append(BillOfLadingNumber).Append("\n");
            sb.Append("  FreightBillNumber: ").Append(FreightBillNumber).Append("\n");
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
            // BillOfLadingNumber (string) maxLength
            if (this.BillOfLadingNumber != null && this.BillOfLadingNumber.Length > 1024)
            {
                yield return new ValidationResult("Invalid value for BillOfLadingNumber, length must be less than 1024.", new [] { "BillOfLadingNumber" });
            }

            // BillOfLadingNumber (string) minLength
            if (this.BillOfLadingNumber != null && this.BillOfLadingNumber.Length < 1)
            {
                yield return new ValidationResult("Invalid value for BillOfLadingNumber, length must be greater than 1.", new [] { "BillOfLadingNumber" });
            }

            yield break;
        }
    }

}
