/*
 * Selling Partner API for Reports
 *
 * The Selling Partner API for Reports lets you retrieve and manage a variety of reports that can help selling partners manage their businesses.
 *
 * The version of the OpenAPI document: 2021-06-30
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

namespace software.amzn.spapi.Model.reports.v2021_06_30
{
    /// <summary>
    /// Information required to create the report schedule.
    /// </summary>
    [DataContract(Name = "CreateReportScheduleSpecification")]
    public partial class CreateReportScheduleSpecification : IValidatableObject
    {
        /// <summary>
        /// One of a set of predefined &lt;a href&#x3D;&#39;https://developer-docs.amazon.com/sp-api/docs/iso-8601&#39;&gt;ISO 8601&lt;/a&gt; periods that specifies how often a report should be created.
        /// </summary>
        /// <value>One of a set of predefined &lt;a href&#x3D;&#39;https://developer-docs.amazon.com/sp-api/docs/iso-8601&#39;&gt;ISO 8601&lt;/a&gt; periods that specifies how often a report should be created.</value>
        [JsonConverter(typeof(StringEnumConverter))]
        public enum PeriodEnum
        {
            /// <summary>
            /// Enum PT5M for value: PT5M
            /// </summary>
            [EnumMember(Value = "PT5M")]
            PT5M = 1,

            /// <summary>
            /// Enum PT15M for value: PT15M
            /// </summary>
            [EnumMember(Value = "PT15M")]
            PT15M = 2,

            /// <summary>
            /// Enum PT30M for value: PT30M
            /// </summary>
            [EnumMember(Value = "PT30M")]
            PT30M = 3,

            /// <summary>
            /// Enum PT1H for value: PT1H
            /// </summary>
            [EnumMember(Value = "PT1H")]
            PT1H = 4,

            /// <summary>
            /// Enum PT2H for value: PT2H
            /// </summary>
            [EnumMember(Value = "PT2H")]
            PT2H = 5,

            /// <summary>
            /// Enum PT4H for value: PT4H
            /// </summary>
            [EnumMember(Value = "PT4H")]
            PT4H = 6,

            /// <summary>
            /// Enum PT8H for value: PT8H
            /// </summary>
            [EnumMember(Value = "PT8H")]
            PT8H = 7,

            /// <summary>
            /// Enum PT12H for value: PT12H
            /// </summary>
            [EnumMember(Value = "PT12H")]
            PT12H = 8,

            /// <summary>
            /// Enum P1D for value: P1D
            /// </summary>
            [EnumMember(Value = "P1D")]
            P1D = 9,

            /// <summary>
            /// Enum P2D for value: P2D
            /// </summary>
            [EnumMember(Value = "P2D")]
            P2D = 10,

            /// <summary>
            /// Enum P3D for value: P3D
            /// </summary>
            [EnumMember(Value = "P3D")]
            P3D = 11,

            /// <summary>
            /// Enum PT84H for value: PT84H
            /// </summary>
            [EnumMember(Value = "PT84H")]
            PT84H = 12,

            /// <summary>
            /// Enum P7D for value: P7D
            /// </summary>
            [EnumMember(Value = "P7D")]
            P7D = 13,

            /// <summary>
            /// Enum P14D for value: P14D
            /// </summary>
            [EnumMember(Value = "P14D")]
            P14D = 14,

            /// <summary>
            /// Enum P15D for value: P15D
            /// </summary>
            [EnumMember(Value = "P15D")]
            P15D = 15,

            /// <summary>
            /// Enum P18D for value: P18D
            /// </summary>
            [EnumMember(Value = "P18D")]
            P18D = 16,

            /// <summary>
            /// Enum P30D for value: P30D
            /// </summary>
            [EnumMember(Value = "P30D")]
            P30D = 17,

            /// <summary>
            /// Enum P1M for value: P1M
            /// </summary>
            [EnumMember(Value = "P1M")]
            P1M = 18
        }


        /// <summary>
        /// One of a set of predefined &lt;a href&#x3D;&#39;https://developer-docs.amazon.com/sp-api/docs/iso-8601&#39;&gt;ISO 8601&lt;/a&gt; periods that specifies how often a report should be created.
        /// </summary>
        /// <value>One of a set of predefined &lt;a href&#x3D;&#39;https://developer-docs.amazon.com/sp-api/docs/iso-8601&#39;&gt;ISO 8601&lt;/a&gt; periods that specifies how often a report should be created.</value>
        [DataMember(Name = "period", IsRequired = true, EmitDefaultValue = true)]
        public PeriodEnum Period { get; set; }
        /// <summary>
        /// Initializes a new instance of the <see cref="CreateReportScheduleSpecification" /> class.
        /// </summary>
        [JsonConstructorAttribute]
        protected CreateReportScheduleSpecification() { }
        /// <summary>
        /// Initializes a new instance of the <see cref="CreateReportScheduleSpecification" /> class.
        /// </summary>
        /// <param name="reportType">The report type. Refer to [Report Type Values](https://developer-docs.amazon.com/sp-api/docs/report-type-values) for more information. (required).</param>
        /// <param name="marketplaceIds">A list of marketplace identifiers for the report schedule. (required).</param>
        /// <param name="reportOptions">Additional information passed to reports. This varies by report type..</param>
        /// <param name="period">One of a set of predefined &lt;a href&#x3D;&#39;https://developer-docs.amazon.com/sp-api/docs/iso-8601&#39;&gt;ISO 8601&lt;/a&gt; periods that specifies how often a report should be created. (required).</param>
        /// <param name="nextReportCreationTime">The date and time when the schedule will create its next report, in &lt;a href&#x3D;&#39;https://developer-docs.amazon.com/sp-api/docs/iso-8601&#39;&gt;ISO 8601&lt;/a&gt; date time format..</param>
        public CreateReportScheduleSpecification(string reportType = default(string), List<string> marketplaceIds = default(List<string>), Dictionary<string, string> reportOptions = default(Dictionary<string, string>), PeriodEnum period = default(PeriodEnum), DateTime nextReportCreationTime = default(DateTime))
        {
            // to ensure "reportType" is required (not null)
            if (reportType == null)
            {
                throw new ArgumentNullException("reportType is a required property for CreateReportScheduleSpecification and cannot be null");
            }
            this.ReportType = reportType;
            // to ensure "marketplaceIds" is required (not null)
            if (marketplaceIds == null)
            {
                throw new ArgumentNullException("marketplaceIds is a required property for CreateReportScheduleSpecification and cannot be null");
            }
            this.MarketplaceIds = marketplaceIds;
            this.Period = period;
            this.ReportOptions = reportOptions;
            this.NextReportCreationTime = nextReportCreationTime;
        }

        /// <summary>
        /// The report type. Refer to [Report Type Values](https://developer-docs.amazon.com/sp-api/docs/report-type-values) for more information.
        /// </summary>
        /// <value>The report type. Refer to [Report Type Values](https://developer-docs.amazon.com/sp-api/docs/report-type-values) for more information.</value>
        [DataMember(Name = "reportType", IsRequired = true, EmitDefaultValue = true)]
        public string ReportType { get; set; }

        /// <summary>
        /// A list of marketplace identifiers for the report schedule.
        /// </summary>
        /// <value>A list of marketplace identifiers for the report schedule.</value>
        [DataMember(Name = "marketplaceIds", IsRequired = true, EmitDefaultValue = true)]
        public List<string> MarketplaceIds { get; set; }

        /// <summary>
        /// Additional information passed to reports. This varies by report type.
        /// </summary>
        /// <value>Additional information passed to reports. This varies by report type.</value>
        [DataMember(Name = "reportOptions", EmitDefaultValue = false)]
        public Dictionary<string, string> ReportOptions { get; set; }

        /// <summary>
        /// The date and time when the schedule will create its next report, in &lt;a href&#x3D;&#39;https://developer-docs.amazon.com/sp-api/docs/iso-8601&#39;&gt;ISO 8601&lt;/a&gt; date time format.
        /// </summary>
        /// <value>The date and time when the schedule will create its next report, in &lt;a href&#x3D;&#39;https://developer-docs.amazon.com/sp-api/docs/iso-8601&#39;&gt;ISO 8601&lt;/a&gt; date time format.</value>
        [DataMember(Name = "nextReportCreationTime", EmitDefaultValue = false)]
        public DateTime NextReportCreationTime { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            StringBuilder sb = new StringBuilder();
            sb.Append("class CreateReportScheduleSpecification {\n");
            sb.Append("  ReportType: ").Append(ReportType).Append("\n");
            sb.Append("  MarketplaceIds: ").Append(MarketplaceIds).Append("\n");
            sb.Append("  ReportOptions: ").Append(ReportOptions).Append("\n");
            sb.Append("  Period: ").Append(Period).Append("\n");
            sb.Append("  NextReportCreationTime: ").Append(NextReportCreationTime).Append("\n");
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
