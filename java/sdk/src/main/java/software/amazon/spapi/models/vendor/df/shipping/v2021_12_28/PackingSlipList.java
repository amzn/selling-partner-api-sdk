/*
 * Selling Partner API for Direct Fulfillment Shipping
 * Use the Selling Partner API for Direct Fulfillment Shipping to access a direct fulfillment vendor's shipping data.
 *
 * OpenAPI spec version: 2021-12-28
 *
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */

package software.amazon.spapi.models.vendor.df.shipping.v2021_12_28;

import com.google.gson.annotations.SerializedName;
import io.swagger.v3.oas.annotations.media.Schema;
import java.util.ArrayList;
import java.util.List;
import java.util.Objects;

/** A list of packing slips. */
@Schema(description = "A list of packing slips.")
public class PackingSlipList {
    @SerializedName("pagination")
    private Pagination pagination = null;

    @SerializedName("packingSlips")
    private List<PackingSlip> packingSlips = null;

    public PackingSlipList pagination(Pagination pagination) {
        this.pagination = pagination;
        return this;
    }

    /**
     * Get pagination
     *
     * @return pagination
     */
    @Schema(description = "")
    public Pagination getPagination() {
        return pagination;
    }

    public void setPagination(Pagination pagination) {
        this.pagination = pagination;
    }

    public PackingSlipList packingSlips(List<PackingSlip> packingSlips) {
        this.packingSlips = packingSlips;
        return this;
    }

    public PackingSlipList addPackingSlipsItem(PackingSlip packingSlipsItem) {
        if (this.packingSlips == null) {
            this.packingSlips = new ArrayList<PackingSlip>();
        }
        this.packingSlips.add(packingSlipsItem);
        return this;
    }

    /**
     * An array of packing slip objects.
     *
     * @return packingSlips
     */
    @Schema(description = "An array of packing slip objects.")
    public List<PackingSlip> getPackingSlips() {
        return packingSlips;
    }

    public void setPackingSlips(List<PackingSlip> packingSlips) {
        this.packingSlips = packingSlips;
    }

    @Override
    public boolean equals(java.lang.Object o) {
        if (this == o) {
            return true;
        }
        if (o == null || getClass() != o.getClass()) {
            return false;
        }
        PackingSlipList packingSlipList = (PackingSlipList) o;
        return Objects.equals(this.pagination, packingSlipList.pagination)
                && Objects.equals(this.packingSlips, packingSlipList.packingSlips);
    }

    @Override
    public int hashCode() {
        return Objects.hash(pagination, packingSlips);
    }

    @Override
    public String toString() {
        StringBuilder sb = new StringBuilder();
        sb.append("class PackingSlipList {\n");

        sb.append("    pagination: ").append(toIndentedString(pagination)).append("\n");
        sb.append("    packingSlips: ").append(toIndentedString(packingSlips)).append("\n");
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
