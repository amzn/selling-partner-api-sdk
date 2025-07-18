/*
 * Selling Partner API for Retail Procurement Shipments
 *
 * The Selling Partner API for Retail Procurement Shipments provides programmatic access to retail shipping data for vendors.
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

namespace software.amzn.spapi.Model.vendor.shipments.v1
{
    /// <summary>
    /// Indicates the carrier details and their contact informations
    /// </summary>
    [DataContract(Name = "CarrierDetails")]
    public partial class CarrierDetails : IValidatableObject
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="CarrierDetails" /> class.
        /// </summary>
        /// <param name="name">The field is used to represent the carrier used for performing the shipment..</param>
        /// <param name="code">Code that identifies the carrier for the shipment. The Standard Carrier Alpha Code (SCAC) is a unique two to four letter code used to identify a carrier. Carrier SCAC codes are assigned and maintained by the NMFTA (National Motor Freight Association)..</param>
        /// <param name="phone">The field is used to represent the Carrier contact number..</param>
        /// <param name="email">The field is used to represent the carrier Email id..</param>
        /// <param name="shipmentReferenceNumber">The field is also known as PRO number is a unique number assigned by the carrier. It is used to identify and track the shipment that goes out for delivery. This field is mandatory for US, CA, MX shipment confirmations..</param>
        public CarrierDetails(string name = default(string), string code = default(string), string phone = default(string), string email = default(string), string shipmentReferenceNumber = default(string))
        {
            this.Name = name;
            this.Code = code;
            this.Phone = phone;
            this.Email = email;
            this.ShipmentReferenceNumber = shipmentReferenceNumber;
        }

        /// <summary>
        /// The field is used to represent the carrier used for performing the shipment.
        /// </summary>
        /// <value>The field is used to represent the carrier used for performing the shipment.</value>
        [DataMember(Name = "name", EmitDefaultValue = false)]
        public string Name { get; set; }

        /// <summary>
        /// Code that identifies the carrier for the shipment. The Standard Carrier Alpha Code (SCAC) is a unique two to four letter code used to identify a carrier. Carrier SCAC codes are assigned and maintained by the NMFTA (National Motor Freight Association).
        /// </summary>
        /// <value>Code that identifies the carrier for the shipment. The Standard Carrier Alpha Code (SCAC) is a unique two to four letter code used to identify a carrier. Carrier SCAC codes are assigned and maintained by the NMFTA (National Motor Freight Association).</value>
        [DataMember(Name = "code", EmitDefaultValue = false)]
        public string Code { get; set; }

        /// <summary>
        /// The field is used to represent the Carrier contact number.
        /// </summary>
        /// <value>The field is used to represent the Carrier contact number.</value>
        [DataMember(Name = "phone", EmitDefaultValue = false)]
        public string Phone { get; set; }

        /// <summary>
        /// The field is used to represent the carrier Email id.
        /// </summary>
        /// <value>The field is used to represent the carrier Email id.</value>
        [DataMember(Name = "email", EmitDefaultValue = false)]
        public string Email { get; set; }

        /// <summary>
        /// The field is also known as PRO number is a unique number assigned by the carrier. It is used to identify and track the shipment that goes out for delivery. This field is mandatory for US, CA, MX shipment confirmations.
        /// </summary>
        /// <value>The field is also known as PRO number is a unique number assigned by the carrier. It is used to identify and track the shipment that goes out for delivery. This field is mandatory for US, CA, MX shipment confirmations.</value>
        [DataMember(Name = "shipmentReferenceNumber", EmitDefaultValue = false)]
        public string ShipmentReferenceNumber { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            StringBuilder sb = new StringBuilder();
            sb.Append("class CarrierDetails {\n");
            sb.Append("  Name: ").Append(Name).Append("\n");
            sb.Append("  Code: ").Append(Code).Append("\n");
            sb.Append("  Phone: ").Append(Phone).Append("\n");
            sb.Append("  Email: ").Append(Email).Append("\n");
            sb.Append("  ShipmentReferenceNumber: ").Append(ShipmentReferenceNumber).Append("\n");
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
