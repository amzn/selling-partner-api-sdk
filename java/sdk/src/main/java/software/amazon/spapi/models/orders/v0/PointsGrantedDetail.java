/*
 * Selling Partner API for Orders
 * Use the Orders Selling Partner API to programmatically retrieve order information. With this API, you can develop fast, flexible, and custom applications to manage order synchronization, perform order research, and create demand-based decision support tools.   _Note:_ For the JP, AU, and SG marketplaces, the Orders API supports orders from 2016 onward. For all other marketplaces, the Orders API supports orders for the last two years (orders older than this don't show up in the response).
 *
 * OpenAPI spec version: v0
 *
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */

package software.amazon.spapi.models.orders.v0;

import com.google.gson.annotations.SerializedName;
import io.swagger.v3.oas.annotations.media.Schema;
import java.util.Objects;

/** The number of Amazon Points offered with the purchase of an item, and their monetary value. */
@Schema(description = "The number of Amazon Points offered with the purchase of an item, and their monetary value.")
public class PointsGrantedDetail {
    @SerializedName("PointsNumber")
    private Integer pointsNumber = null;

    @SerializedName("PointsMonetaryValue")
    private Money pointsMonetaryValue = null;

    public PointsGrantedDetail pointsNumber(Integer pointsNumber) {
        this.pointsNumber = pointsNumber;
        return this;
    }

    /**
     * The number of Amazon Points granted with the purchase of an item.
     *
     * @return pointsNumber
     */
    @Schema(description = "The number of Amazon Points granted with the purchase of an item.")
    public Integer getPointsNumber() {
        return pointsNumber;
    }

    public void setPointsNumber(Integer pointsNumber) {
        this.pointsNumber = pointsNumber;
    }

    public PointsGrantedDetail pointsMonetaryValue(Money pointsMonetaryValue) {
        this.pointsMonetaryValue = pointsMonetaryValue;
        return this;
    }

    /**
     * Get pointsMonetaryValue
     *
     * @return pointsMonetaryValue
     */
    @Schema(description = "")
    public Money getPointsMonetaryValue() {
        return pointsMonetaryValue;
    }

    public void setPointsMonetaryValue(Money pointsMonetaryValue) {
        this.pointsMonetaryValue = pointsMonetaryValue;
    }

    @Override
    public boolean equals(java.lang.Object o) {
        if (this == o) {
            return true;
        }
        if (o == null || getClass() != o.getClass()) {
            return false;
        }
        PointsGrantedDetail pointsGrantedDetail = (PointsGrantedDetail) o;
        return Objects.equals(this.pointsNumber, pointsGrantedDetail.pointsNumber)
                && Objects.equals(this.pointsMonetaryValue, pointsGrantedDetail.pointsMonetaryValue);
    }

    @Override
    public int hashCode() {
        return Objects.hash(pointsNumber, pointsMonetaryValue);
    }

    @Override
    public String toString() {
        StringBuilder sb = new StringBuilder();
        sb.append("class PointsGrantedDetail {\n");

        sb.append("    pointsNumber: ").append(toIndentedString(pointsNumber)).append("\n");
        sb.append("    pointsMonetaryValue: ")
                .append(toIndentedString(pointsMonetaryValue))
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
