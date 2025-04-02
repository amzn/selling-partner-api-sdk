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

/** The &#x60;confirmTransportationOptions&#x60; request. */
@Schema(description = "The `confirmTransportationOptions` request.")
public class ConfirmTransportationOptionsRequest {
    @SerializedName("transportationSelections")
    private List<TransportationSelection> transportationSelections = new ArrayList<TransportationSelection>();

    public ConfirmTransportationOptionsRequest transportationSelections(
            List<TransportationSelection> transportationSelections) {
        this.transportationSelections = transportationSelections;
        return this;
    }

    public ConfirmTransportationOptionsRequest addTransportationSelectionsItem(
            TransportationSelection transportationSelectionsItem) {
        this.transportationSelections.add(transportationSelectionsItem);
        return this;
    }

    /**
     * Information needed to confirm one of the available transportation options.
     *
     * @return transportationSelections
     */
    @Schema(required = true, description = "Information needed to confirm one of the available transportation options.")
    public List<TransportationSelection> getTransportationSelections() {
        return transportationSelections;
    }

    public void setTransportationSelections(List<TransportationSelection> transportationSelections) {
        this.transportationSelections = transportationSelections;
    }

    @Override
    public boolean equals(java.lang.Object o) {
        if (this == o) {
            return true;
        }
        if (o == null || getClass() != o.getClass()) {
            return false;
        }
        ConfirmTransportationOptionsRequest confirmTransportationOptionsRequest =
                (ConfirmTransportationOptionsRequest) o;
        return Objects.equals(
                this.transportationSelections, confirmTransportationOptionsRequest.transportationSelections);
    }

    @Override
    public int hashCode() {
        return Objects.hash(transportationSelections);
    }

    @Override
    public String toString() {
        StringBuilder sb = new StringBuilder();
        sb.append("class ConfirmTransportationOptionsRequest {\n");

        sb.append("    transportationSelections: ")
                .append(toIndentedString(transportationSelections))
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
