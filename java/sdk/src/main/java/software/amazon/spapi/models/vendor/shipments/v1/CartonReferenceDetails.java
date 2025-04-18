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

/** Carton reference details. */
@Schema(description = "Carton reference details.")
public class CartonReferenceDetails {
    @SerializedName("cartonCount")
    private Integer cartonCount = null;

    @SerializedName("cartonReferenceNumbers")
    private List<String> cartonReferenceNumbers = new ArrayList<String>();

    public CartonReferenceDetails cartonCount(Integer cartonCount) {
        this.cartonCount = cartonCount;
        return this;
    }

    /**
     * Pallet level carton count is mandatory for single item pallet and optional for mixed item pallet.
     *
     * @return cartonCount
     */
    @Schema(
            description =
                    "Pallet level carton count is mandatory for single item pallet and optional for mixed item pallet.")
    public Integer getCartonCount() {
        return cartonCount;
    }

    public void setCartonCount(Integer cartonCount) {
        this.cartonCount = cartonCount;
    }

    public CartonReferenceDetails cartonReferenceNumbers(List<String> cartonReferenceNumbers) {
        this.cartonReferenceNumbers = cartonReferenceNumbers;
        return this;
    }

    public CartonReferenceDetails addCartonReferenceNumbersItem(String cartonReferenceNumbersItem) {
        this.cartonReferenceNumbers.add(cartonReferenceNumbersItem);
        return this;
    }

    /**
     * Array of reference numbers for the carton that are part of this pallet/shipment. Please provide the
     * cartonSequenceNumber from the &#x27;cartons&#x27; segment to refer to that carton&#x27;s details here.
     *
     * @return cartonReferenceNumbers
     */
    @Schema(
            required = true,
            description =
                    "Array of reference numbers for the carton that are part of this pallet/shipment. Please provide the cartonSequenceNumber from the 'cartons' segment to refer to that carton's details here.")
    public List<String> getCartonReferenceNumbers() {
        return cartonReferenceNumbers;
    }

    public void setCartonReferenceNumbers(List<String> cartonReferenceNumbers) {
        this.cartonReferenceNumbers = cartonReferenceNumbers;
    }

    @Override
    public boolean equals(java.lang.Object o) {
        if (this == o) {
            return true;
        }
        if (o == null || getClass() != o.getClass()) {
            return false;
        }
        CartonReferenceDetails cartonReferenceDetails = (CartonReferenceDetails) o;
        return Objects.equals(this.cartonCount, cartonReferenceDetails.cartonCount)
                && Objects.equals(this.cartonReferenceNumbers, cartonReferenceDetails.cartonReferenceNumbers);
    }

    @Override
    public int hashCode() {
        return Objects.hash(cartonCount, cartonReferenceNumbers);
    }

    @Override
    public String toString() {
        StringBuilder sb = new StringBuilder();
        sb.append("class CartonReferenceDetails {\n");

        sb.append("    cartonCount: ").append(toIndentedString(cartonCount)).append("\n");
        sb.append("    cartonReferenceNumbers: ")
                .append(toIndentedString(cartonReferenceNumbers))
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
