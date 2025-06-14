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
    /// The request schema for remove the Carrier Account associated with the provided merchant.
    /// </summary>
    [DataContract(Name = "UnlinkCarrierAccountRequest")]
    public partial class UnlinkCarrierAccountRequest : IValidatableObject
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="UnlinkCarrierAccountRequest" /> class.
        /// </summary>
        /// <param name="clientReferenceDetails">Object to pass additional information about the MCI Integrator shipperType: List of ClientReferenceDetail.</param>
        /// <param name="accountId">Identifier for the seller&#39;s carrier account..</param>
        public UnlinkCarrierAccountRequest(List<ClientReferenceDetail> clientReferenceDetails = default(List<ClientReferenceDetail>), string accountId = default(string))
        {
            this.ClientReferenceDetails = clientReferenceDetails;
            this.AccountId = accountId;
        }

        /// <summary>
        /// Object to pass additional information about the MCI Integrator shipperType: List of ClientReferenceDetail
        /// </summary>
        /// <value>Object to pass additional information about the MCI Integrator shipperType: List of ClientReferenceDetail</value>
        [DataMember(Name = "clientReferenceDetails", EmitDefaultValue = false)]
        public List<ClientReferenceDetail> ClientReferenceDetails { get; set; }

        /// <summary>
        /// Identifier for the seller&#39;s carrier account.
        /// </summary>
        /// <value>Identifier for the seller&#39;s carrier account.</value>
        [DataMember(Name = "accountId", EmitDefaultValue = false)]
        public string AccountId { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            StringBuilder sb = new StringBuilder();
            sb.Append("class UnlinkCarrierAccountRequest {\n");
            sb.Append("  ClientReferenceDetails: ").Append(ClientReferenceDetails).Append("\n");
            sb.Append("  AccountId: ").Append(AccountId).Append("\n");
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
