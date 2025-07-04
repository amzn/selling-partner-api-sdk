/*
 * Selling Partner API for Direct Fulfillment Orders
 *
 * The Selling Partner API for Direct Fulfillment Orders provides programmatic access to a direct fulfillment vendor's order data.
 *
 * The version of the OpenAPI document: 2021-12-28
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

namespace software.amzn.spapi.Model.vendor.df.orders.v2021_12_28
{
    /// <summary>
    /// Dates for the scheduled delivery shipments.
    /// </summary>
    [DataContract(Name = "ScheduledDeliveryShipment")]
    public partial class ScheduledDeliveryShipment : IValidatableObject
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="ScheduledDeliveryShipment" /> class.
        /// </summary>
        /// <param name="scheduledDeliveryServiceType">Scheduled delivery service type..</param>
        /// <param name="earliestNominatedDeliveryDate">Earliest nominated delivery date for the scheduled delivery..</param>
        /// <param name="latestNominatedDeliveryDate">Latest nominated delivery date for the scheduled delivery..</param>
        public ScheduledDeliveryShipment(string scheduledDeliveryServiceType = default(string), DateTime earliestNominatedDeliveryDate = default(DateTime), DateTime latestNominatedDeliveryDate = default(DateTime))
        {
            this.ScheduledDeliveryServiceType = scheduledDeliveryServiceType;
            this.EarliestNominatedDeliveryDate = earliestNominatedDeliveryDate;
            this.LatestNominatedDeliveryDate = latestNominatedDeliveryDate;
        }

        /// <summary>
        /// Scheduled delivery service type.
        /// </summary>
        /// <value>Scheduled delivery service type.</value>
        [DataMember(Name = "scheduledDeliveryServiceType", EmitDefaultValue = false)]
        public string ScheduledDeliveryServiceType { get; set; }

        /// <summary>
        /// Earliest nominated delivery date for the scheduled delivery.
        /// </summary>
        /// <value>Earliest nominated delivery date for the scheduled delivery.</value>
        [DataMember(Name = "earliestNominatedDeliveryDate", EmitDefaultValue = false)]
        public DateTime EarliestNominatedDeliveryDate { get; set; }

        /// <summary>
        /// Latest nominated delivery date for the scheduled delivery.
        /// </summary>
        /// <value>Latest nominated delivery date for the scheduled delivery.</value>
        [DataMember(Name = "latestNominatedDeliveryDate", EmitDefaultValue = false)]
        public DateTime LatestNominatedDeliveryDate { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            StringBuilder sb = new StringBuilder();
            sb.Append("class ScheduledDeliveryShipment {\n");
            sb.Append("  ScheduledDeliveryServiceType: ").Append(ScheduledDeliveryServiceType).Append("\n");
            sb.Append("  EarliestNominatedDeliveryDate: ").Append(EarliestNominatedDeliveryDate).Append("\n");
            sb.Append("  LatestNominatedDeliveryDate: ").Append(LatestNominatedDeliveryDate).Append("\n");
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
