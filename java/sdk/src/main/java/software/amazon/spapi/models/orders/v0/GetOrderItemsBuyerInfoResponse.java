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
import software.amazon.spapi.models.orders.v0.ErrorList;
import software.amazon.spapi.models.orders.v0.OrderItemsBuyerInfoList;
/**
 * The response schema for the &#x60;getOrderItemsBuyerInfo&#x60; operation.
 */
@Schema(description = "The response schema for the `getOrderItemsBuyerInfo` operation.")


public class GetOrderItemsBuyerInfoResponse {
  @SerializedName("payload")
  private OrderItemsBuyerInfoList payload = null;

  @SerializedName("errors")
  private ErrorList errors = null;

  public GetOrderItemsBuyerInfoResponse payload(OrderItemsBuyerInfoList payload) {
    this.payload = payload;
    return this;
  }

   /**
   * Get payload
   * @return payload
  **/
  @Schema(description = "")
  public OrderItemsBuyerInfoList getPayload() {
    return payload;
  }

  public void setPayload(OrderItemsBuyerInfoList payload) {
    this.payload = payload;
  }

  public GetOrderItemsBuyerInfoResponse errors(ErrorList errors) {
    this.errors = errors;
    return this;
  }

   /**
   * Get errors
   * @return errors
  **/
  @Schema(description = "")
  public ErrorList getErrors() {
    return errors;
  }

  public void setErrors(ErrorList errors) {
    this.errors = errors;
  }


  @Override
  public boolean equals(java.lang.Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    GetOrderItemsBuyerInfoResponse getOrderItemsBuyerInfoResponse = (GetOrderItemsBuyerInfoResponse) o;
    return Objects.equals(this.payload, getOrderItemsBuyerInfoResponse.payload) &&
        Objects.equals(this.errors, getOrderItemsBuyerInfoResponse.errors);
  }

  @Override
  public int hashCode() {
    return Objects.hash(payload, errors);
  }


  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class GetOrderItemsBuyerInfoResponse {\n");
    
    sb.append("    payload: ").append(toIndentedString(payload)).append("\n");
    sb.append("    errors: ").append(toIndentedString(errors)).append("\n");
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
