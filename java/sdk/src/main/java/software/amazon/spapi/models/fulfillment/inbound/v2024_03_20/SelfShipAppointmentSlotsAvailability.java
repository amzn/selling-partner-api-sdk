/*
 * The Selling Partner API for FBA inbound operations.
 * The Selling Partner API for Fulfillment By Amazon (FBA) Inbound. The FBA Inbound API enables building inbound workflows to create, manage, and send shipments into Amazon's fulfillment network. The API has interoperability with the Send-to-Amazon user interface.
 *
 * OpenAPI spec version: 2024-03-20
 *
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */

package software.amazon.spapi.models.fulfillment.inbound.v2024_03_20;

import com.google.gson.annotations.SerializedName;
import io.swagger.v3.oas.annotations.media.Schema;
import java.util.ArrayList;
import java.util.List;
import java.util.Objects;
import org.threeten.bp.OffsetDateTime;

/** The self ship appointment time slots availability and an expiration date for which the slots can be scheduled. */
@Schema(
        description =
                "The self ship appointment time slots availability and an expiration date for which the slots can be scheduled.")
public class SelfShipAppointmentSlotsAvailability {
    @SerializedName("expiresAt")
    private OffsetDateTime expiresAt = null;

    @SerializedName("slots")
    private List<AppointmentSlot> slots = null;

    public SelfShipAppointmentSlotsAvailability expiresAt(OffsetDateTime expiresAt) {
        this.expiresAt = expiresAt;
        return this;
    }

    /**
     * The time at which the self ship appointment slot expires. In [ISO
     * 8601](https://developer-docs.amazon.com/sp-api/docs/iso-8601) datetime format.
     *
     * @return expiresAt
     */
    @Schema(
            description =
                    "The time at which the self ship appointment slot expires. In [ISO 8601](https://developer-docs.amazon.com/sp-api/docs/iso-8601) datetime format.")
    public OffsetDateTime getExpiresAt() {
        return expiresAt;
    }

    public void setExpiresAt(OffsetDateTime expiresAt) {
        this.expiresAt = expiresAt;
    }

    public SelfShipAppointmentSlotsAvailability slots(List<AppointmentSlot> slots) {
        this.slots = slots;
        return this;
    }

    public SelfShipAppointmentSlotsAvailability addSlotsItem(AppointmentSlot slotsItem) {
        if (this.slots == null) {
            this.slots = new ArrayList<AppointmentSlot>();
        }
        this.slots.add(slotsItem);
        return this;
    }

    /**
     * A list of appointment slots.
     *
     * @return slots
     */
    @Schema(description = "A list of appointment slots.")
    public List<AppointmentSlot> getSlots() {
        return slots;
    }

    public void setSlots(List<AppointmentSlot> slots) {
        this.slots = slots;
    }

    @Override
    public boolean equals(java.lang.Object o) {
        if (this == o) {
            return true;
        }
        if (o == null || getClass() != o.getClass()) {
            return false;
        }
        SelfShipAppointmentSlotsAvailability selfShipAppointmentSlotsAvailability =
                (SelfShipAppointmentSlotsAvailability) o;
        return Objects.equals(this.expiresAt, selfShipAppointmentSlotsAvailability.expiresAt)
                && Objects.equals(this.slots, selfShipAppointmentSlotsAvailability.slots);
    }

    @Override
    public int hashCode() {
        return Objects.hash(expiresAt, slots);
    }

    @Override
    public String toString() {
        StringBuilder sb = new StringBuilder();
        sb.append("class SelfShipAppointmentSlotsAvailability {\n");

        sb.append("    expiresAt: ").append(toIndentedString(expiresAt)).append("\n");
        sb.append("    slots: ").append(toIndentedString(slots)).append("\n");
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
