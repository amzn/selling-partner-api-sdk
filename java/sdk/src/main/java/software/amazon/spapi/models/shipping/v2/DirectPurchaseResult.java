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

/** The payload for the directPurchaseShipment operation. */
@Schema(description = "The payload for the directPurchaseShipment operation.")
public class DirectPurchaseResult {
    @SerializedName("shipmentId")
    private String shipmentId = null;

    @SerializedName("packageDocumentDetailList")
    private PackageDocumentDetailList packageDocumentDetailList = null;

    public DirectPurchaseResult shipmentId(String shipmentId) {
        this.shipmentId = shipmentId;
        return this;
    }

    /**
     * Get shipmentId
     *
     * @return shipmentId
     */
    @Schema(required = true, description = "")
    public String getShipmentId() {
        return shipmentId;
    }

    public void setShipmentId(String shipmentId) {
        this.shipmentId = shipmentId;
    }

    public DirectPurchaseResult packageDocumentDetailList(PackageDocumentDetailList packageDocumentDetailList) {
        this.packageDocumentDetailList = packageDocumentDetailList;
        return this;
    }

    /**
     * Get packageDocumentDetailList
     *
     * @return packageDocumentDetailList
     */
    @Schema(description = "")
    public PackageDocumentDetailList getPackageDocumentDetailList() {
        return packageDocumentDetailList;
    }

    public void setPackageDocumentDetailList(PackageDocumentDetailList packageDocumentDetailList) {
        this.packageDocumentDetailList = packageDocumentDetailList;
    }

    @Override
    public boolean equals(java.lang.Object o) {
        if (this == o) {
            return true;
        }
        if (o == null || getClass() != o.getClass()) {
            return false;
        }
        DirectPurchaseResult directPurchaseResult = (DirectPurchaseResult) o;
        return Objects.equals(this.shipmentId, directPurchaseResult.shipmentId)
                && Objects.equals(this.packageDocumentDetailList, directPurchaseResult.packageDocumentDetailList);
    }

    @Override
    public int hashCode() {
        return Objects.hash(shipmentId, packageDocumentDetailList);
    }

    @Override
    public String toString() {
        StringBuilder sb = new StringBuilder();
        sb.append("class DirectPurchaseResult {\n");

        sb.append("    shipmentId: ").append(toIndentedString(shipmentId)).append("\n");
        sb.append("    packageDocumentDetailList: ")
                .append(toIndentedString(packageDocumentDetailList))
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
