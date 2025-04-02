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
import java.util.Objects;

/** The transportation option selected to confirm. */
@Schema(description = "The transportation option selected to confirm.")
public class TransportationSelection {
    @SerializedName("contactInformation")
    private ContactInformation contactInformation = null;

    @SerializedName("shipmentId")
    private String shipmentId = null;

    @SerializedName("transportationOptionId")
    private String transportationOptionId = null;

    public TransportationSelection contactInformation(ContactInformation contactInformation) {
        this.contactInformation = contactInformation;
        return this;
    }

    /**
     * Get contactInformation
     *
     * @return contactInformation
     */
    @Schema(description = "")
    public ContactInformation getContactInformation() {
        return contactInformation;
    }

    public void setContactInformation(ContactInformation contactInformation) {
        this.contactInformation = contactInformation;
    }

    public TransportationSelection shipmentId(String shipmentId) {
        this.shipmentId = shipmentId;
        return this;
    }

    /**
     * Shipment ID that the transportation Option is for.
     *
     * @return shipmentId
     */
    @Schema(required = true, description = "Shipment ID that the transportation Option is for.")
    public String getShipmentId() {
        return shipmentId;
    }

    public void setShipmentId(String shipmentId) {
        this.shipmentId = shipmentId;
    }

    public TransportationSelection transportationOptionId(String transportationOptionId) {
        this.transportationOptionId = transportationOptionId;
        return this;
    }

    /**
     * Transportation option being selected for the provided shipment.
     *
     * @return transportationOptionId
     */
    @Schema(required = true, description = "Transportation option being selected for the provided shipment.")
    public String getTransportationOptionId() {
        return transportationOptionId;
    }

    public void setTransportationOptionId(String transportationOptionId) {
        this.transportationOptionId = transportationOptionId;
    }

    @Override
    public boolean equals(java.lang.Object o) {
        if (this == o) {
            return true;
        }
        if (o == null || getClass() != o.getClass()) {
            return false;
        }
        TransportationSelection transportationSelection = (TransportationSelection) o;
        return Objects.equals(this.contactInformation, transportationSelection.contactInformation)
                && Objects.equals(this.shipmentId, transportationSelection.shipmentId)
                && Objects.equals(this.transportationOptionId, transportationSelection.transportationOptionId);
    }

    @Override
    public int hashCode() {
        return Objects.hash(contactInformation, shipmentId, transportationOptionId);
    }

    @Override
    public String toString() {
        StringBuilder sb = new StringBuilder();
        sb.append("class TransportationSelection {\n");

        sb.append("    contactInformation: ")
                .append(toIndentedString(contactInformation))
                .append("\n");
        sb.append("    shipmentId: ").append(toIndentedString(shipmentId)).append("\n");
        sb.append("    transportationOptionId: ")
                .append(toIndentedString(transportationOptionId))
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
