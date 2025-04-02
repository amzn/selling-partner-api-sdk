/*
 * Amazon Shipping API
 * The Amazon Shipping API is designed to support outbound shipping use cases both for orders originating on Amazon-owned marketplaces as well as external channels/marketplaces. With these APIs, you can request shipping rates, create shipments, cancel shipments, and track shipments.
 *
 * OpenAPI spec version: v2
 * Contact: swa-api-core@amazon.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */

package software.amazon.spapi.models.shipping.v2;

import com.google.gson.annotations.SerializedName;
import io.swagger.v3.oas.annotations.media.Schema;
import java.util.Objects;
import org.threeten.bp.OffsetDateTime;

/**
 * Additional information required for the NDR action that has been filed. If the NDR Action is RESCHEDULE,
 * rescheduleDate is a required field. Otherwise, if the NDR Action is REATTEMPT, additionalAddressNotes is a required
 * field.
 */
@Schema(
        description =
                "Additional information required for the NDR action that has been filed. If the NDR Action is RESCHEDULE, rescheduleDate is a required field. Otherwise, if the NDR Action is REATTEMPT, additionalAddressNotes is a required field. ")
public class NdrRequestData {
    @SerializedName("rescheduleDate")
    private OffsetDateTime rescheduleDate = null;

    @SerializedName("additionalAddressNotes")
    private String additionalAddressNotes = null;

    public NdrRequestData rescheduleDate(OffsetDateTime rescheduleDate) {
        this.rescheduleDate = rescheduleDate;
        return this;
    }

    /**
     * The date on which the Seller wants to reschedule shipment delivery, in ISO-8601 date/time format
     *
     * @return rescheduleDate
     */
    @Schema(
            example = "2023-12-12T05:24Z",
            description =
                    "The date on which the Seller wants to reschedule shipment delivery, in ISO-8601 date/time format")
    public OffsetDateTime getRescheduleDate() {
        return rescheduleDate;
    }

    public void setRescheduleDate(OffsetDateTime rescheduleDate) {
        this.rescheduleDate = rescheduleDate;
    }

    public NdrRequestData additionalAddressNotes(String additionalAddressNotes) {
        this.additionalAddressNotes = additionalAddressNotes;
        return this;
    }

    /**
     * Get additionalAddressNotes
     *
     * @return additionalAddressNotes
     */
    @Schema(description = "")
    public String getAdditionalAddressNotes() {
        return additionalAddressNotes;
    }

    public void setAdditionalAddressNotes(String additionalAddressNotes) {
        this.additionalAddressNotes = additionalAddressNotes;
    }

    @Override
    public boolean equals(java.lang.Object o) {
        if (this == o) {
            return true;
        }
        if (o == null || getClass() != o.getClass()) {
            return false;
        }
        NdrRequestData ndrRequestData = (NdrRequestData) o;
        return Objects.equals(this.rescheduleDate, ndrRequestData.rescheduleDate)
                && Objects.equals(this.additionalAddressNotes, ndrRequestData.additionalAddressNotes);
    }

    @Override
    public int hashCode() {
        return Objects.hash(rescheduleDate, additionalAddressNotes);
    }

    @Override
    public String toString() {
        StringBuilder sb = new StringBuilder();
        sb.append("class NdrRequestData {\n");

        sb.append("    rescheduleDate: ")
                .append(toIndentedString(rescheduleDate))
                .append("\n");
        sb.append("    additionalAddressNotes: ")
                .append(toIndentedString(additionalAddressNotes))
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
