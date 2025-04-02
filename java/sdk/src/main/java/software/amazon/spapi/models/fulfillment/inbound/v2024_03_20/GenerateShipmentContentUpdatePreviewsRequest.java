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

/** The &#x60;GenerateShipmentContentUpdatePreviews&#x60; request. */
@Schema(description = "The `GenerateShipmentContentUpdatePreviews` request.")
public class GenerateShipmentContentUpdatePreviewsRequest {
    @SerializedName("boxes")
    private List<BoxUpdateInput> boxes = new ArrayList<BoxUpdateInput>();

    @SerializedName("items")
    private List<ItemInput> items = new ArrayList<ItemInput>();

    public GenerateShipmentContentUpdatePreviewsRequest boxes(List<BoxUpdateInput> boxes) {
        this.boxes = boxes;
        return this;
    }

    public GenerateShipmentContentUpdatePreviewsRequest addBoxesItem(BoxUpdateInput boxesItem) {
        this.boxes.add(boxesItem);
        return this;
    }

    /**
     * A list of boxes that will be present in the shipment after the update.
     *
     * @return boxes
     */
    @Schema(required = true, description = "A list of boxes that will be present in the shipment after the update.")
    public List<BoxUpdateInput> getBoxes() {
        return boxes;
    }

    public void setBoxes(List<BoxUpdateInput> boxes) {
        this.boxes = boxes;
    }

    public GenerateShipmentContentUpdatePreviewsRequest items(List<ItemInput> items) {
        this.items = items;
        return this;
    }

    public GenerateShipmentContentUpdatePreviewsRequest addItemsItem(ItemInput itemsItem) {
        this.items.add(itemsItem);
        return this;
    }

    /**
     * A list of all items that will be present in the shipment after the update.
     *
     * @return items
     */
    @Schema(required = true, description = "A list of all items that will be present in the shipment after the update.")
    public List<ItemInput> getItems() {
        return items;
    }

    public void setItems(List<ItemInput> items) {
        this.items = items;
    }

    @Override
    public boolean equals(java.lang.Object o) {
        if (this == o) {
            return true;
        }
        if (o == null || getClass() != o.getClass()) {
            return false;
        }
        GenerateShipmentContentUpdatePreviewsRequest generateShipmentContentUpdatePreviewsRequest =
                (GenerateShipmentContentUpdatePreviewsRequest) o;
        return Objects.equals(this.boxes, generateShipmentContentUpdatePreviewsRequest.boxes)
                && Objects.equals(this.items, generateShipmentContentUpdatePreviewsRequest.items);
    }

    @Override
    public int hashCode() {
        return Objects.hash(boxes, items);
    }

    @Override
    public String toString() {
        StringBuilder sb = new StringBuilder();
        sb.append("class GenerateShipmentContentUpdatePreviewsRequest {\n");

        sb.append("    boxes: ").append(toIndentedString(boxes)).append("\n");
        sb.append("    items: ").append(toIndentedString(items)).append("\n");
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
