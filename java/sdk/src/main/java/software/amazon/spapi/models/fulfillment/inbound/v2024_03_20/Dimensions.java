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
import java.math.BigDecimal;
import java.util.Objects;

/** Measurement of a package&#x27;s dimensions. */
@Schema(description = "Measurement of a package's dimensions.")
public class Dimensions {
    @SerializedName("height")
    private BigDecimal height = null;

    @SerializedName("length")
    private BigDecimal length = null;

    @SerializedName("unitOfMeasurement")
    private UnitOfMeasurement unitOfMeasurement = null;

    @SerializedName("width")
    private BigDecimal width = null;

    public Dimensions height(BigDecimal height) {
        this.height = height;
        return this;
    }

    /**
     * The height of a package. minimum: 0 maximum: 100000
     *
     * @return height
     */
    @Schema(required = true, description = "The height of a package.")
    public BigDecimal getHeight() {
        return height;
    }

    public void setHeight(BigDecimal height) {
        this.height = height;
    }

    public Dimensions length(BigDecimal length) {
        this.length = length;
        return this;
    }

    /**
     * The length of a package. minimum: 0 maximum: 100000
     *
     * @return length
     */
    @Schema(required = true, description = "The length of a package.")
    public BigDecimal getLength() {
        return length;
    }

    public void setLength(BigDecimal length) {
        this.length = length;
    }

    public Dimensions unitOfMeasurement(UnitOfMeasurement unitOfMeasurement) {
        this.unitOfMeasurement = unitOfMeasurement;
        return this;
    }

    /**
     * Get unitOfMeasurement
     *
     * @return unitOfMeasurement
     */
    @Schema(required = true, description = "")
    public UnitOfMeasurement getUnitOfMeasurement() {
        return unitOfMeasurement;
    }

    public void setUnitOfMeasurement(UnitOfMeasurement unitOfMeasurement) {
        this.unitOfMeasurement = unitOfMeasurement;
    }

    public Dimensions width(BigDecimal width) {
        this.width = width;
        return this;
    }

    /**
     * The width of a package. minimum: 0 maximum: 100000
     *
     * @return width
     */
    @Schema(required = true, description = "The width of a package.")
    public BigDecimal getWidth() {
        return width;
    }

    public void setWidth(BigDecimal width) {
        this.width = width;
    }

    @Override
    public boolean equals(java.lang.Object o) {
        if (this == o) {
            return true;
        }
        if (o == null || getClass() != o.getClass()) {
            return false;
        }
        Dimensions dimensions = (Dimensions) o;
        return Objects.equals(this.height, dimensions.height)
                && Objects.equals(this.length, dimensions.length)
                && Objects.equals(this.unitOfMeasurement, dimensions.unitOfMeasurement)
                && Objects.equals(this.width, dimensions.width);
    }

    @Override
    public int hashCode() {
        return Objects.hash(height, length, unitOfMeasurement, width);
    }

    @Override
    public String toString() {
        StringBuilder sb = new StringBuilder();
        sb.append("class Dimensions {\n");

        sb.append("    height: ").append(toIndentedString(height)).append("\n");
        sb.append("    length: ").append(toIndentedString(length)).append("\n");
        sb.append("    unitOfMeasurement: ")
                .append(toIndentedString(unitOfMeasurement))
                .append("\n");
        sb.append("    width: ").append(toIndentedString(width)).append("\n");
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
