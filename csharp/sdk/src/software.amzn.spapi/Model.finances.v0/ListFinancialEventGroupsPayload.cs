/*
 * Selling Partner API for Finances
 *
 * The Selling Partner API for Finances helps you obtain financial information relevant to a seller's business. You can obtain financial events for a given order, financial event group, or date range without having to wait until a statement period closes. You can also obtain financial event groups for a given date range.
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

namespace software.amzn.spapi.Model.finances.v0
{
    /// <summary>
    /// The payload for the listFinancialEventGroups operation.
    /// </summary>
    [DataContract(Name = "ListFinancialEventGroupsPayload")]
    public partial class ListFinancialEventGroupsPayload : IValidatableObject
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="ListFinancialEventGroupsPayload" /> class.
        /// </summary>
        /// <param name="nextToken">When present and not empty, pass this string token in the next request to return the next response page..</param>
        /// <param name="financialEventGroupList">A list of financial event group information..</param>
        public ListFinancialEventGroupsPayload(string nextToken = default(string), List<FinancialEventGroup> financialEventGroupList = default(List<FinancialEventGroup>))
        {
            this.NextToken = nextToken;
            this.FinancialEventGroupList = financialEventGroupList;
        }

        /// <summary>
        /// When present and not empty, pass this string token in the next request to return the next response page.
        /// </summary>
        /// <value>When present and not empty, pass this string token in the next request to return the next response page.</value>
        [DataMember(Name = "NextToken", EmitDefaultValue = false)]
        public string NextToken { get; set; }

        /// <summary>
        /// A list of financial event group information.
        /// </summary>
        /// <value>A list of financial event group information.</value>
        [DataMember(Name = "FinancialEventGroupList", EmitDefaultValue = false)]
        public List<FinancialEventGroup> FinancialEventGroupList { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            StringBuilder sb = new StringBuilder();
            sb.Append("class ListFinancialEventGroupsPayload {\n");
            sb.Append("  NextToken: ").Append(NextToken).Append("\n");
            sb.Append("  FinancialEventGroupList: ").Append(FinancialEventGroupList).Append("\n");
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
