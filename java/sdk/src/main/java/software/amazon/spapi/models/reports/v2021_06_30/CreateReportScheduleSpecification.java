/*
 * Selling Partner API for Reports
 * The Selling Partner API for Reports lets you retrieve and manage a variety of reports that can help selling partners manage their businesses.
 *
 * OpenAPI spec version: 2021-06-30
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */

package software.amazon.spapi.models.reports.v2021_06_30;

import java.util.Objects;
import java.util.Arrays;
import com.google.gson.TypeAdapter;
import com.google.gson.annotations.JsonAdapter;
import com.google.gson.annotations.SerializedName;
import com.google.gson.stream.JsonReader;
import com.google.gson.stream.JsonWriter;
import io.swagger.v3.oas.annotations.media.Schema;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import org.threeten.bp.OffsetDateTime;
import software.amazon.spapi.models.reports.v2021_06_30.ReportOptions;
/**
 * Information required to create the report schedule.
 */
@Schema(description = "Information required to create the report schedule.")


public class CreateReportScheduleSpecification {
  @SerializedName("reportType")
  private String reportType = null;

  @SerializedName("marketplaceIds")
  private List<String> marketplaceIds = new ArrayList<String>();

  @SerializedName("reportOptions")
  private ReportOptions reportOptions = null;

  /**
   * One of a set of predefined &lt;a href&#x3D;&#x27;https://developer-docs.amazon.com/sp-api/docs/iso-8601&#x27;&gt;ISO 8601&lt;/a&gt; periods that specifies how often a report should be created.
   */
  @JsonAdapter(PeriodEnum.Adapter.class)
  public enum PeriodEnum {
    @SerializedName("PT5M")
    PT5M("PT5M"),
    @SerializedName("PT15M")
    PT15M("PT15M"),
    @SerializedName("PT30M")
    PT30M("PT30M"),
    @SerializedName("PT1H")
    PT1H("PT1H"),
    @SerializedName("PT2H")
    PT2H("PT2H"),
    @SerializedName("PT4H")
    PT4H("PT4H"),
    @SerializedName("PT8H")
    PT8H("PT8H"),
    @SerializedName("PT12H")
    PT12H("PT12H"),
    @SerializedName("P1D")
    P1D("P1D"),
    @SerializedName("P2D")
    P2D("P2D"),
    @SerializedName("P3D")
    P3D("P3D"),
    @SerializedName("PT84H")
    PT84H("PT84H"),
    @SerializedName("P7D")
    P7D("P7D"),
    @SerializedName("P14D")
    P14D("P14D"),
    @SerializedName("P15D")
    P15D("P15D"),
    @SerializedName("P18D")
    P18D("P18D"),
    @SerializedName("P30D")
    P30D("P30D"),
    @SerializedName("P1M")
    P1M("P1M");

    private String value;

    PeriodEnum(String value) {
      this.value = value;
    }
    public String getValue() {
      return value;
    }

    @Override
    public String toString() {
      return String.valueOf(value);
    }
    public static PeriodEnum fromValue(String input) {
      for (PeriodEnum b : PeriodEnum.values()) {
        if (b.value.equals(input)) {
          return b;
        }
      }
      return null;
    }
    public static class Adapter extends TypeAdapter<PeriodEnum> {
      @Override
      public void write(final JsonWriter jsonWriter, final PeriodEnum enumeration) throws IOException {
        jsonWriter.value(String.valueOf(enumeration.getValue()));
      }

      @Override
      public PeriodEnum read(final JsonReader jsonReader) throws IOException {
        Object value = jsonReader.nextString();
        return PeriodEnum.fromValue((String)(value));
      }
    }
  }  @SerializedName("period")
  private PeriodEnum period = null;

  @SerializedName("nextReportCreationTime")
  private OffsetDateTime nextReportCreationTime = null;

  public CreateReportScheduleSpecification reportType(String reportType) {
    this.reportType = reportType;
    return this;
  }

   /**
   * The report type. Refer to [Report Type Values](https://developer-docs.amazon.com/sp-api/docs/report-type-values) for more information.
   * @return reportType
  **/
  @Schema(required = true, description = "The report type. Refer to [Report Type Values](https://developer-docs.amazon.com/sp-api/docs/report-type-values) for more information.")
  public String getReportType() {
    return reportType;
  }

  public void setReportType(String reportType) {
    this.reportType = reportType;
  }

  public CreateReportScheduleSpecification marketplaceIds(List<String> marketplaceIds) {
    this.marketplaceIds = marketplaceIds;
    return this;
  }

  public CreateReportScheduleSpecification addMarketplaceIdsItem(String marketplaceIdsItem) {
    this.marketplaceIds.add(marketplaceIdsItem);
    return this;
  }

   /**
   * A list of marketplace identifiers for the report schedule.
   * @return marketplaceIds
  **/
  @Schema(required = true, description = "A list of marketplace identifiers for the report schedule.")
  public List<String> getMarketplaceIds() {
    return marketplaceIds;
  }

  public void setMarketplaceIds(List<String> marketplaceIds) {
    this.marketplaceIds = marketplaceIds;
  }

  public CreateReportScheduleSpecification reportOptions(ReportOptions reportOptions) {
    this.reportOptions = reportOptions;
    return this;
  }

   /**
   * Get reportOptions
   * @return reportOptions
  **/
  @Schema(description = "")
  public ReportOptions getReportOptions() {
    return reportOptions;
  }

  public void setReportOptions(ReportOptions reportOptions) {
    this.reportOptions = reportOptions;
  }

  public CreateReportScheduleSpecification period(PeriodEnum period) {
    this.period = period;
    return this;
  }

   /**
   * One of a set of predefined &lt;a href&#x3D;&#x27;https://developer-docs.amazon.com/sp-api/docs/iso-8601&#x27;&gt;ISO 8601&lt;/a&gt; periods that specifies how often a report should be created.
   * @return period
  **/
  @Schema(required = true, description = "One of a set of predefined <a href='https://developer-docs.amazon.com/sp-api/docs/iso-8601'>ISO 8601</a> periods that specifies how often a report should be created.")
  public PeriodEnum getPeriod() {
    return period;
  }

  public void setPeriod(PeriodEnum period) {
    this.period = period;
  }

  public CreateReportScheduleSpecification nextReportCreationTime(OffsetDateTime nextReportCreationTime) {
    this.nextReportCreationTime = nextReportCreationTime;
    return this;
  }

   /**
   * The date and time when the schedule will create its next report, in &lt;a href&#x3D;&#x27;https://developer-docs.amazon.com/sp-api/docs/iso-8601&#x27;&gt;ISO 8601&lt;/a&gt; date time format.
   * @return nextReportCreationTime
  **/
  @Schema(description = "The date and time when the schedule will create its next report, in <a href='https://developer-docs.amazon.com/sp-api/docs/iso-8601'>ISO 8601</a> date time format.")
  public OffsetDateTime getNextReportCreationTime() {
    return nextReportCreationTime;
  }

  public void setNextReportCreationTime(OffsetDateTime nextReportCreationTime) {
    this.nextReportCreationTime = nextReportCreationTime;
  }


  @Override
  public boolean equals(java.lang.Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    CreateReportScheduleSpecification createReportScheduleSpecification = (CreateReportScheduleSpecification) o;
    return Objects.equals(this.reportType, createReportScheduleSpecification.reportType) &&
        Objects.equals(this.marketplaceIds, createReportScheduleSpecification.marketplaceIds) &&
        Objects.equals(this.reportOptions, createReportScheduleSpecification.reportOptions) &&
        Objects.equals(this.period, createReportScheduleSpecification.period) &&
        Objects.equals(this.nextReportCreationTime, createReportScheduleSpecification.nextReportCreationTime);
  }

  @Override
  public int hashCode() {
    return Objects.hash(reportType, marketplaceIds, reportOptions, period, nextReportCreationTime);
  }


  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class CreateReportScheduleSpecification {\n");
    
    sb.append("    reportType: ").append(toIndentedString(reportType)).append("\n");
    sb.append("    marketplaceIds: ").append(toIndentedString(marketplaceIds)).append("\n");
    sb.append("    reportOptions: ").append(toIndentedString(reportOptions)).append("\n");
    sb.append("    period: ").append(toIndentedString(period)).append("\n");
    sb.append("    nextReportCreationTime: ").append(toIndentedString(nextReportCreationTime)).append("\n");
    sb.append("}");
    return sb.toString();
  }

  /**
   * Convert the given object to string with each line indented by 4 spaces
   * (except the first line).
   */
  private String toIndentedString(java.lang.Object o) {
    if (o == null) {
      return "null";
    }
    return o.toString().replace("\n", "\n    ");
  }

}
