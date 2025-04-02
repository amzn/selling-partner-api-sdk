/*
 * Selling Partner API for Services
 * With the Services API, you can build applications that help service providers get and modify their service orders and manage their resources.
 *
 * OpenAPI spec version: v1
 *
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */

package software.amazon.spapi.models.services.v1;

import com.google.gson.annotations.SerializedName;
import io.swagger.v3.oas.annotations.media.Schema;
import java.util.Objects;
import org.threeten.bp.OffsetDateTime;

/** A range of time. */
@Schema(description = "A range of time.")
public class DateTimeRange {
    @SerializedName("startTime")
    private OffsetDateTime startTime = null;

    @SerializedName("endTime")
    private OffsetDateTime endTime = null;

    public DateTimeRange startTime(OffsetDateTime startTime) {
        this.startTime = startTime;
        return this;
    }

    /**
     * The beginning of the time range. Must be in UTC in [ISO
     * 8601](https://developer-docs.amazon.com/sp-api/docs/iso-8601) format.
     *
     * @return startTime
     */
    @Schema(
            required = true,
            description =
                    "The beginning of the time range. Must be in UTC in [ISO 8601](https://developer-docs.amazon.com/sp-api/docs/iso-8601) format.")
    public OffsetDateTime getStartTime() {
        return startTime;
    }

    public void setStartTime(OffsetDateTime startTime) {
        this.startTime = startTime;
    }

    public DateTimeRange endTime(OffsetDateTime endTime) {
        this.endTime = endTime;
        return this;
    }

    /**
     * The end of the time range. Must be in UTC in [ISO 8601](https://developer-docs.amazon.com/sp-api/docs/iso-8601)
     * format.
     *
     * @return endTime
     */
    @Schema(
            required = true,
            description =
                    "The end of the time range. Must be in UTC in [ISO 8601](https://developer-docs.amazon.com/sp-api/docs/iso-8601) format.")
    public OffsetDateTime getEndTime() {
        return endTime;
    }

    public void setEndTime(OffsetDateTime endTime) {
        this.endTime = endTime;
    }

    @Override
    public boolean equals(java.lang.Object o) {
        if (this == o) {
            return true;
        }
        if (o == null || getClass() != o.getClass()) {
            return false;
        }
        DateTimeRange dateTimeRange = (DateTimeRange) o;
        return Objects.equals(this.startTime, dateTimeRange.startTime)
                && Objects.equals(this.endTime, dateTimeRange.endTime);
    }

    @Override
    public int hashCode() {
        return Objects.hash(startTime, endTime);
    }

    @Override
    public String toString() {
        StringBuilder sb = new StringBuilder();
        sb.append("class DateTimeRange {\n");

        sb.append("    startTime: ").append(toIndentedString(startTime)).append("\n");
        sb.append("    endTime: ").append(toIndentedString(endTime)).append("\n");
        sb.append("}");
        return sb.toString();
    }

    /** Convert the given object to string with each line indented by 4 spaces (except the first line). */
    private String toIndentedString(java.lang.Object o) {
        if (o == null) {
            return "null";
        }
        return o.toString().replace("\n", "\n    ");
    }
}
