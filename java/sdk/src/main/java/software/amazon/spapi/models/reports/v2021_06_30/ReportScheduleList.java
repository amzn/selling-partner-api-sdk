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
import software.amazon.spapi.models.reports.v2021_06_30.ReportSchedule;
/**
 * A list of report schedules.
 */
@Schema(description = "A list of report schedules.")


public class ReportScheduleList {
  @SerializedName("reportSchedules")
  private List<ReportSchedule> reportSchedules = new ArrayList<ReportSchedule>();

  public ReportScheduleList reportSchedules(List<ReportSchedule> reportSchedules) {
    this.reportSchedules = reportSchedules;
    return this;
  }

  public ReportScheduleList addReportSchedulesItem(ReportSchedule reportSchedulesItem) {
    this.reportSchedules.add(reportSchedulesItem);
    return this;
  }

   /**
   * Detailed information about a report schedule.
   * @return reportSchedules
  **/
  @Schema(required = true, description = "Detailed information about a report schedule.")
  public List<ReportSchedule> getReportSchedules() {
    return reportSchedules;
  }

  public void setReportSchedules(List<ReportSchedule> reportSchedules) {
    this.reportSchedules = reportSchedules;
  }


  @Override
  public boolean equals(java.lang.Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    ReportScheduleList reportScheduleList = (ReportScheduleList) o;
    return Objects.equals(this.reportSchedules, reportScheduleList.reportSchedules);
  }

  @Override
  public int hashCode() {
    return Objects.hash(reportSchedules);
  }


  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class ReportScheduleList {\n");
    
    sb.append("    reportSchedules: ").append(toIndentedString(reportSchedules)).append("\n");
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
