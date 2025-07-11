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
    /// Additional information required for the NDR action that has been filed. If the NDR Action is RESCHEDULE, rescheduleDate is a required field. Otherwise, if the NDR Action is REATTEMPT, additionalAddressNotes is a required field. 
    /// </summary>
    [DataContract(Name = "NdrRequestData")]
    public partial class NdrRequestData : IValidatableObject
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="NdrRequestData" /> class.
        /// </summary>
        /// <param name="rescheduleDate">The date on which the Seller wants to reschedule shipment delivery, in ISO-8601 date/time format.</param>
        /// <param name="additionalAddressNotes">Address notes to re-attempt delivery with..</param>
        public NdrRequestData(DateTime rescheduleDate = default(DateTime), string additionalAddressNotes = default(string))
        {
            this.RescheduleDate = rescheduleDate;
            this.AdditionalAddressNotes = additionalAddressNotes;
        }

        /// <summary>
        /// The date on which the Seller wants to reschedule shipment delivery, in ISO-8601 date/time format
        /// </summary>
        /// <value>The date on which the Seller wants to reschedule shipment delivery, in ISO-8601 date/time format</value>
        /*
        <example>2023-12-12T05:24Z</example>
        */
        [DataMember(Name = "rescheduleDate", EmitDefaultValue = false)]
        public DateTime RescheduleDate { get; set; }

        /// <summary>
        /// Address notes to re-attempt delivery with.
        /// </summary>
        /// <value>Address notes to re-attempt delivery with.</value>
        [DataMember(Name = "additionalAddressNotes", EmitDefaultValue = false)]
        public string AdditionalAddressNotes { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            StringBuilder sb = new StringBuilder();
            sb.Append("class NdrRequestData {\n");
            sb.Append("  RescheduleDate: ").Append(RescheduleDate).Append("\n");
            sb.Append("  AdditionalAddressNotes: ").Append(AdditionalAddressNotes).Append("\n");
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
            // AdditionalAddressNotes (string) maxLength
            if (this.AdditionalAddressNotes != null && this.AdditionalAddressNotes.Length > 256)
            {
                yield return new ValidationResult("Invalid value for AdditionalAddressNotes, length must be less than 256.", new [] { "AdditionalAddressNotes" });
            }

            yield break;
        }
    }

}
