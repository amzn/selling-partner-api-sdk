/*
 * Selling Partner API for Retail Procurement Shipments
 * The Selling Partner API for Retail Procurement Shipments provides programmatic access to retail shipping data for vendors.
 *
 * OpenAPI spec version: v1
 *
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */

package software.amazon.spapi.models.vendor.shipments.v1;

import com.google.gson.annotations.SerializedName;
import io.swagger.v3.oas.annotations.media.Schema;
import java.util.ArrayList;
import java.util.List;
import java.util.Objects;

/** This is used only for direct import shipment confirmations. */
@Schema(description = "This is used only for direct import shipment confirmations.")
public class Route {
    @SerializedName("stops")
    private List<Stop> stops = new ArrayList<Stop>();

    public Route stops(List<Stop> stops) {
        this.stops = stops;
        return this;
    }

    public Route addStopsItem(Stop stopsItem) {
        this.stops.add(stopsItem);
        return this;
    }

    /**
     * The port or location involved in transporting the cargo, as specified in transportation contracts or operational
     * plans.
     *
     * @return stops
     */
    @Schema(
            required = true,
            description =
                    "The port or location involved in transporting the cargo, as specified in transportation contracts or operational plans.")
    public List<Stop> getStops() {
        return stops;
    }

    public void setStops(List<Stop> stops) {
        this.stops = stops;
    }

    @Override
    public boolean equals(java.lang.Object o) {
        if (this == o) {
            return true;
        }
        if (o == null || getClass() != o.getClass()) {
            return false;
        }
        Route route = (Route) o;
        return Objects.equals(this.stops, route.stops);
    }

    @Override
    public int hashCode() {
        return Objects.hash(stops);
    }

    @Override
    public String toString() {
        StringBuilder sb = new StringBuilder();
        sb.append("class Route {\n");

        sb.append("    stops: ").append(toIndentedString(stops)).append("\n");
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
