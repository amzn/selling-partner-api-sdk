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

/** Input for rescheduled appointment operation. */
@Schema(description = "Input for rescheduled appointment operation.")
public class RescheduleAppointmentRequest {
    @SerializedName("appointmentTime")
    private AppointmentTimeInput appointmentTime = null;

    @SerializedName("rescheduleReasonCode")
    private String rescheduleReasonCode = null;

    public RescheduleAppointmentRequest appointmentTime(AppointmentTimeInput appointmentTime) {
        this.appointmentTime = appointmentTime;
        return this;
    }

    /**
     * Get appointmentTime
     *
     * @return appointmentTime
     */
    @Schema(required = true, description = "")
    public AppointmentTimeInput getAppointmentTime() {
        return appointmentTime;
    }

    public void setAppointmentTime(AppointmentTimeInput appointmentTime) {
        this.appointmentTime = appointmentTime;
    }

    public RescheduleAppointmentRequest rescheduleReasonCode(String rescheduleReasonCode) {
        this.rescheduleReasonCode = rescheduleReasonCode;
        return this;
    }

    /**
     * Get rescheduleReasonCode
     *
     * @return rescheduleReasonCode
     */
    @Schema(required = true, description = "")
    public String getRescheduleReasonCode() {
        return rescheduleReasonCode;
    }

    public void setRescheduleReasonCode(String rescheduleReasonCode) {
        this.rescheduleReasonCode = rescheduleReasonCode;
    }

    @Override
    public boolean equals(java.lang.Object o) {
        if (this == o) {
            return true;
        }
        if (o == null || getClass() != o.getClass()) {
            return false;
        }
        RescheduleAppointmentRequest rescheduleAppointmentRequest = (RescheduleAppointmentRequest) o;
        return Objects.equals(this.appointmentTime, rescheduleAppointmentRequest.appointmentTime)
                && Objects.equals(this.rescheduleReasonCode, rescheduleAppointmentRequest.rescheduleReasonCode);
    }

    @Override
    public int hashCode() {
        return Objects.hash(appointmentTime, rescheduleReasonCode);
    }

    @Override
    public String toString() {
        StringBuilder sb = new StringBuilder();
        sb.append("class RescheduleAppointmentRequest {\n");

        sb.append("    appointmentTime: ")
                .append(toIndentedString(appointmentTime))
                .append("\n");
        sb.append("    rescheduleReasonCode: ")
                .append(toIndentedString(rescheduleReasonCode))
                .append("\n");
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
