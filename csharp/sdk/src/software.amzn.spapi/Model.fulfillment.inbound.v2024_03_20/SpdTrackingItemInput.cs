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
    /// Small Parcel Delivery (SPD) tracking items input information.
    /// </summary>
    [DataContract(Name = "SpdTrackingItemInput")]
    public partial class SpdTrackingItemInput : IValidatableObject
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="SpdTrackingItemInput" /> class.
        /// </summary>
        [JsonConstructorAttribute]
        protected SpdTrackingItemInput() { }
        /// <summary>
        /// Initializes a new instance of the <see cref="SpdTrackingItemInput" /> class.
        /// </summary>
        /// <param name="boxId">The ID provided by Amazon that identifies a given box. This ID is comprised of the external shipment ID (which is generated after transportation has been confirmed) and the index of the box. (required).</param>
        /// <param name="trackingId">The tracking Id associated with each box in a non-Amazon partnered Small Parcel Delivery (SPD) shipment. The seller must provide this information. (required).</param>
        public SpdTrackingItemInput(string boxId = default(string), string trackingId = default(string))
        {
            // to ensure "boxId" is required (not null)
            if (boxId == null)
            {
                throw new ArgumentNullException("boxId is a required property for SpdTrackingItemInput and cannot be null");
            }
            this.BoxId = boxId;
            // to ensure "trackingId" is required (not null)
            if (trackingId == null)
            {
                throw new ArgumentNullException("trackingId is a required property for SpdTrackingItemInput and cannot be null");
            }
            this.TrackingId = trackingId;
        }

        /// <summary>
        /// The ID provided by Amazon that identifies a given box. This ID is comprised of the external shipment ID (which is generated after transportation has been confirmed) and the index of the box.
        /// </summary>
        /// <value>The ID provided by Amazon that identifies a given box. This ID is comprised of the external shipment ID (which is generated after transportation has been confirmed) and the index of the box.</value>
        [DataMember(Name = "boxId", IsRequired = true, EmitDefaultValue = true)]
        public string BoxId { get; set; }

        /// <summary>
        /// The tracking Id associated with each box in a non-Amazon partnered Small Parcel Delivery (SPD) shipment. The seller must provide this information.
        /// </summary>
        /// <value>The tracking Id associated with each box in a non-Amazon partnered Small Parcel Delivery (SPD) shipment. The seller must provide this information.</value>
        [DataMember(Name = "trackingId", IsRequired = true, EmitDefaultValue = true)]
        public string TrackingId { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            StringBuilder sb = new StringBuilder();
            sb.Append("class SpdTrackingItemInput {\n");
            sb.Append("  BoxId: ").Append(BoxId).Append("\n");
            sb.Append("  TrackingId: ").Append(TrackingId).Append("\n");
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
            // BoxId (string) maxLength
            if (this.BoxId != null && this.BoxId.Length > 1024)
            {
                yield return new ValidationResult("Invalid value for BoxId, length must be less than 1024.", new [] { "BoxId" });
            }

            // BoxId (string) minLength
            if (this.BoxId != null && this.BoxId.Length < 1)
            {
                yield return new ValidationResult("Invalid value for BoxId, length must be greater than 1.", new [] { "BoxId" });
            }

            // TrackingId (string) maxLength
            if (this.TrackingId != null && this.TrackingId.Length > 1024)
            {
                yield return new ValidationResult("Invalid value for TrackingId, length must be less than 1024.", new [] { "TrackingId" });
            }

            // TrackingId (string) minLength
            if (this.TrackingId != null && this.TrackingId.Length < 1)
            {
                yield return new ValidationResult("Invalid value for TrackingId, length must be greater than 1.", new [] { "TrackingId" });
            }

            yield break;
        }
    }

}
