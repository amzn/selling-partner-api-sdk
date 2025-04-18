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

/** The &#x60;listDeliveryWindowOptions&#x60; response. */
@Schema(description = "The `listDeliveryWindowOptions` response.")
public class ListDeliveryWindowOptionsResponse {
    @SerializedName("deliveryWindowOptions")
    private List<DeliveryWindowOption> deliveryWindowOptions = new ArrayList<DeliveryWindowOption>();

    @SerializedName("pagination")
    private Pagination pagination = null;

    public ListDeliveryWindowOptionsResponse deliveryWindowOptions(List<DeliveryWindowOption> deliveryWindowOptions) {
        this.deliveryWindowOptions = deliveryWindowOptions;
        return this;
    }

    public ListDeliveryWindowOptionsResponse addDeliveryWindowOptionsItem(
            DeliveryWindowOption deliveryWindowOptionsItem) {
        this.deliveryWindowOptions.add(deliveryWindowOptionsItem);
        return this;
    }

    /**
     * Delivery window options generated for the placement option.
     *
     * @return deliveryWindowOptions
     */
    @Schema(required = true, description = "Delivery window options generated for the placement option.")
    public List<DeliveryWindowOption> getDeliveryWindowOptions() {
        return deliveryWindowOptions;
    }

    public void setDeliveryWindowOptions(List<DeliveryWindowOption> deliveryWindowOptions) {
        this.deliveryWindowOptions = deliveryWindowOptions;
    }

    public ListDeliveryWindowOptionsResponse pagination(Pagination pagination) {
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

    @Override
    public boolean equals(java.lang.Object o) {
        if (this == o) {
            return true;
        }
        if (o == null || getClass() != o.getClass()) {
            return false;
        }
        ListDeliveryWindowOptionsResponse listDeliveryWindowOptionsResponse = (ListDeliveryWindowOptionsResponse) o;
        return Objects.equals(this.deliveryWindowOptions, listDeliveryWindowOptionsResponse.deliveryWindowOptions)
                && Objects.equals(this.pagination, listDeliveryWindowOptionsResponse.pagination);
    }

    @Override
    public int hashCode() {
        return Objects.hash(deliveryWindowOptions, pagination);
    }

    @Override
    public String toString() {
        StringBuilder sb = new StringBuilder();
        sb.append("class ListDeliveryWindowOptionsResponse {\n");

        sb.append("    deliveryWindowOptions: ")
                .append(toIndentedString(deliveryWindowOptions))
                .append("\n");
        sb.append("    pagination: ").append(toIndentedString(pagination)).append("\n");
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
