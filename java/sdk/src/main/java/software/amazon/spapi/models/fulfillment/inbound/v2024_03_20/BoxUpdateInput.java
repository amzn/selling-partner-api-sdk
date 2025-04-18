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

/** Input information for updating a box */
@Schema(description = "Input information for updating a box")
public class BoxUpdateInput {
    @SerializedName("contentInformationSource")
    private BoxContentInformationSource contentInformationSource = null;

    @SerializedName("dimensions")
    private Dimensions dimensions = null;

    @SerializedName("items")
    private List<ItemInput> items = null;

    @SerializedName("packageId")
    private String packageId = null;

    @SerializedName("quantity")
    private Integer quantity = null;

    @SerializedName("weight")
    private Weight weight = null;

    public BoxUpdateInput contentInformationSource(BoxContentInformationSource contentInformationSource) {
        this.contentInformationSource = contentInformationSource;
        return this;
    }

    /**
     * Get contentInformationSource
     *
     * @return contentInformationSource
     */
    @Schema(required = true, description = "")
    public BoxContentInformationSource getContentInformationSource() {
        return contentInformationSource;
    }

    public void setContentInformationSource(BoxContentInformationSource contentInformationSource) {
        this.contentInformationSource = contentInformationSource;
    }

    public BoxUpdateInput dimensions(Dimensions dimensions) {
        this.dimensions = dimensions;
        return this;
    }

    /**
     * Get dimensions
     *
     * @return dimensions
     */
    @Schema(required = true, description = "")
    public Dimensions getDimensions() {
        return dimensions;
    }

    public void setDimensions(Dimensions dimensions) {
        this.dimensions = dimensions;
    }

    public BoxUpdateInput items(List<ItemInput> items) {
        this.items = items;
        return this;
    }

    public BoxUpdateInput addItemsItem(ItemInput itemsItem) {
        if (this.items == null) {
            this.items = new ArrayList<ItemInput>();
        }
        this.items.add(itemsItem);
        return this;
    }

    /**
     * The items and their quantity in the box. This must be empty if the box &#x60;contentInformationSource&#x60; is
     * &#x60;BARCODE_2D&#x60; or &#x60;MANUAL_PROCESS&#x60;.
     *
     * @return items
     */
    @Schema(
            description =
                    "The items and their quantity in the box. This must be empty if the box `contentInformationSource` is `BARCODE_2D` or `MANUAL_PROCESS`.")
    public List<ItemInput> getItems() {
        return items;
    }

    public void setItems(List<ItemInput> items) {
        this.items = items;
    }

    public BoxUpdateInput packageId(String packageId) {
        this.packageId = packageId;
        return this;
    }

    /**
     * Primary key to uniquely identify a Box Package. PackageId must be provided if the intent is to update an existing
     * box. Adding a new box will not require providing this value. Any existing PackageIds not provided will be treated
     * as to-be-removed
     *
     * @return packageId
     */
    @Schema(
            description =
                    "Primary key to uniquely identify a Box Package. PackageId must be provided if the intent is to update an existing box. Adding a new box will not require providing this value. Any existing PackageIds not provided will be treated as to-be-removed")
    public String getPackageId() {
        return packageId;
    }

    public void setPackageId(String packageId) {
        this.packageId = packageId;
    }

    public BoxUpdateInput quantity(Integer quantity) {
        this.quantity = quantity;
        return this;
    }

    /**
     * The number of containers where all other properties like weight or dimensions are identical. minimum: 1 maximum:
     * 10000
     *
     * @return quantity
     */
    @Schema(
            required = true,
            description =
                    "The number of containers where all other properties like weight or dimensions are identical.")
    public Integer getQuantity() {
        return quantity;
    }

    public void setQuantity(Integer quantity) {
        this.quantity = quantity;
    }

    public BoxUpdateInput weight(Weight weight) {
        this.weight = weight;
        return this;
    }

    /**
     * Get weight
     *
     * @return weight
     */
    @Schema(required = true, description = "")
    public Weight getWeight() {
        return weight;
    }

    public void setWeight(Weight weight) {
        this.weight = weight;
    }

    @Override
    public boolean equals(java.lang.Object o) {
        if (this == o) {
            return true;
        }
        if (o == null || getClass() != o.getClass()) {
            return false;
        }
        BoxUpdateInput boxUpdateInput = (BoxUpdateInput) o;
        return Objects.equals(this.contentInformationSource, boxUpdateInput.contentInformationSource)
                && Objects.equals(this.dimensions, boxUpdateInput.dimensions)
                && Objects.equals(this.items, boxUpdateInput.items)
                && Objects.equals(this.packageId, boxUpdateInput.packageId)
                && Objects.equals(this.quantity, boxUpdateInput.quantity)
                && Objects.equals(this.weight, boxUpdateInput.weight);
    }

    @Override
    public int hashCode() {
        return Objects.hash(contentInformationSource, dimensions, items, packageId, quantity, weight);
    }

    @Override
    public String toString() {
        StringBuilder sb = new StringBuilder();
        sb.append("class BoxUpdateInput {\n");

        sb.append("    contentInformationSource: ")
                .append(toIndentedString(contentInformationSource))
                .append("\n");
        sb.append("    dimensions: ").append(toIndentedString(dimensions)).append("\n");
        sb.append("    items: ").append(toIndentedString(items)).append("\n");
        sb.append("    packageId: ").append(toIndentedString(packageId)).append("\n");
        sb.append("    quantity: ").append(toIndentedString(quantity)).append("\n");
        sb.append("    weight: ").append(toIndentedString(weight)).append("\n");
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
