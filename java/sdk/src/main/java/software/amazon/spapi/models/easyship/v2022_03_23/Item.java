/*
 * Selling Partner API for Easy Ship
 * Use the Selling Partner API for Easy Ship to build applications for sellers to manage and ship Amazon Easy Ship orders. With this API, you can get available time slots, schedule and reschedule Easy Ship orders, and print shipping labels, invoices, and warranties. To review the differences in Easy Ship operations by marketplace, refer to [Marketplace support](https://developer-docs.amazon.com/sp-api/docs/easyship-api-v2022-03-23-use-case-guide#marketplace-support).
 *
 * OpenAPI spec version: 2022-03-23
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */

package software.amazon.spapi.models.easyship.v2022_03_23;

import java.util.Objects;
import java.util.Arrays;
import com.google.gson.TypeAdapter;
import com.google.gson.annotations.JsonAdapter;
import com.google.gson.annotations.SerializedName;
import com.google.gson.stream.JsonReader;
import com.google.gson.stream.JsonWriter;
import io.swagger.v3.oas.annotations.media.Schema;
import java.io.IOException;
import software.amazon.spapi.models.easyship.v2022_03_23.OrderItemSerialNumbers;
/**
 * Item identifier and serial number information.
 */
@Schema(description = "Item identifier and serial number information.")


public class Item {
  @SerializedName("orderItemId")
  private String orderItemId = null;

  @SerializedName("orderItemSerialNumbers")
  private OrderItemSerialNumbers orderItemSerialNumbers = null;

  public Item orderItemId(String orderItemId) {
    this.orderItemId = orderItemId;
    return this;
  }

   /**
   * Get orderItemId
   * @return orderItemId
  **/
  @Schema(description = "")
  public String getOrderItemId() {
    return orderItemId;
  }

  public void setOrderItemId(String orderItemId) {
    this.orderItemId = orderItemId;
  }

  public Item orderItemSerialNumbers(OrderItemSerialNumbers orderItemSerialNumbers) {
    this.orderItemSerialNumbers = orderItemSerialNumbers;
    return this;
  }

   /**
   * Get orderItemSerialNumbers
   * @return orderItemSerialNumbers
  **/
  @Schema(description = "")
  public OrderItemSerialNumbers getOrderItemSerialNumbers() {
    return orderItemSerialNumbers;
  }

  public void setOrderItemSerialNumbers(OrderItemSerialNumbers orderItemSerialNumbers) {
    this.orderItemSerialNumbers = orderItemSerialNumbers;
  }


  @Override
  public boolean equals(java.lang.Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    Item item = (Item) o;
    return Objects.equals(this.orderItemId, item.orderItemId) &&
        Objects.equals(this.orderItemSerialNumbers, item.orderItemSerialNumbers);
  }

  @Override
  public int hashCode() {
    return Objects.hash(orderItemId, orderItemSerialNumbers);
  }


  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class Item {\n");
    
    sb.append("    orderItemId: ").append(toIndentedString(orderItemId)).append("\n");
    sb.append("    orderItemSerialNumbers: ").append(toIndentedString(orderItemSerialNumbers)).append("\n");
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
