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

import java.util.Objects;
import java.util.Arrays;
import com.google.gson.TypeAdapter;
import com.google.gson.annotations.JsonAdapter;
import com.google.gson.annotations.SerializedName;
import com.google.gson.stream.JsonReader;
import com.google.gson.stream.JsonWriter;
import io.swagger.v3.oas.annotations.media.Schema;
import java.io.IOException;
import software.amazon.spapi.models.orders.v0.OrderItems;
import software.amazon.spapi.models.orders.v0.ShipmentStatus;
/**
 * The request body for the &#x60;updateShipmentStatus&#x60; operation.
 */
@Schema(description = "The request body for the `updateShipmentStatus` operation.")


public class UpdateShipmentStatusRequest {
  @SerializedName("marketplaceId")
  private String marketplaceId = null;

  @SerializedName("shipmentStatus")
  private ShipmentStatus shipmentStatus = null;

  @SerializedName("orderItems")
  private OrderItems orderItems = null;

  public UpdateShipmentStatusRequest marketplaceId(String marketplaceId) {
    this.marketplaceId = marketplaceId;
    return this;
  }

   /**
   * Get marketplaceId
   * @return marketplaceId
  **/
  @Schema(required = true, description = "")
  public String getMarketplaceId() {
    return marketplaceId;
  }

  public void setMarketplaceId(String marketplaceId) {
    this.marketplaceId = marketplaceId;
  }

  public UpdateShipmentStatusRequest shipmentStatus(ShipmentStatus shipmentStatus) {
    this.shipmentStatus = shipmentStatus;
    return this;
  }

   /**
   * Get shipmentStatus
   * @return shipmentStatus
  **/
  @Schema(required = true, description = "")
  public ShipmentStatus getShipmentStatus() {
    return shipmentStatus;
  }

  public void setShipmentStatus(ShipmentStatus shipmentStatus) {
    this.shipmentStatus = shipmentStatus;
  }

  public UpdateShipmentStatusRequest orderItems(OrderItems orderItems) {
    this.orderItems = orderItems;
    return this;
  }

   /**
   * Get orderItems
   * @return orderItems
  **/
  @Schema(description = "")
  public OrderItems getOrderItems() {
    return orderItems;
  }

  public void setOrderItems(OrderItems orderItems) {
    this.orderItems = orderItems;
  }


  @Override
  public boolean equals(java.lang.Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    UpdateShipmentStatusRequest updateShipmentStatusRequest = (UpdateShipmentStatusRequest) o;
    return Objects.equals(this.marketplaceId, updateShipmentStatusRequest.marketplaceId) &&
        Objects.equals(this.shipmentStatus, updateShipmentStatusRequest.shipmentStatus) &&
        Objects.equals(this.orderItems, updateShipmentStatusRequest.orderItems);
  }

  @Override
  public int hashCode() {
    return Objects.hash(marketplaceId, shipmentStatus, orderItems);
  }


  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class UpdateShipmentStatusRequest {\n");
    
    sb.append("    marketplaceId: ").append(toIndentedString(marketplaceId)).append("\n");
    sb.append("    shipmentStatus: ").append(toIndentedString(shipmentStatus)).append("\n");
    sb.append("    orderItems: ").append(toIndentedString(orderItems)).append("\n");
    sb.append("}");
    return sb.toString();
  }

  /**
   * Convert the given object to string with each line indented by 4 spaces
   * (except the first line).
   */
  private String toIndentedString(java.lang.Object o) {
    if (o == null) {
      return "null";
    }
    return o.toString().replace("\n", "\n    ");
  }

}
