/*
 * Orders v0
 * Use the Orders Selling Partner API to programmatically retrieve order information. With this API, you can develop fast, flexible, and custom applications to manage order synchronization, perform order research, and create demand-based decision support tools.   _Note:_ For the JP, AU, and SG marketplaces, the Orders API supports orders from 2016 onward. For all other marketplaces, the Orders API supports orders for the last two years (orders older than this don't show up in the response).
 *
 * OpenAPI spec version: v0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */

package com.amazon.SellingPartnerAPI.models;

import java.util.Objects;
import java.util.Arrays;
import com.amazon.SellingPartnerAPI.models.OrderList;
import com.google.gson.TypeAdapter;
import com.google.gson.annotations.JsonAdapter;
import com.google.gson.annotations.SerializedName;
import com.google.gson.stream.JsonReader;
import com.google.gson.stream.JsonWriter;
import io.swagger.v3.oas.annotations.media.Schema;
import java.io.IOException;
/**
 * A list of orders along with additional information to make subsequent API calls.
 */
@Schema(description = "A list of orders along with additional information to make subsequent API calls.")


public class OrdersList {
  @SerializedName("Orders")
  private OrderList orders = null;

  @SerializedName("NextToken")
  private String nextToken = null;

  @SerializedName("LastUpdatedBefore")
  private String lastUpdatedBefore = null;

  @SerializedName("CreatedBefore")
  private String createdBefore = null;

  public OrdersList orders(OrderList orders) {
    this.orders = orders;
    return this;
  }

   /**
   * Get orders
   * @return orders
  **/
  @Schema(required = true, description = "")
  public OrderList getOrders() {
    return orders;
  }

  public void setOrders(OrderList orders) {
    this.orders = orders;
  }

  public OrdersList nextToken(String nextToken) {
    this.nextToken = nextToken;
    return this;
  }

   /**
   * When present and not empty, pass this string token in the next request to return the next response page.
   * @return nextToken
  **/
  @Schema(description = "When present and not empty, pass this string token in the next request to return the next response page.")
  public String getNextToken() {
    return nextToken;
  }

  public void setNextToken(String nextToken) {
    this.nextToken = nextToken;
  }

  public OrdersList lastUpdatedBefore(String lastUpdatedBefore) {
    this.lastUpdatedBefore = lastUpdatedBefore;
    return this;
  }

   /**
   * Use this date to select orders that were last updated before (or at) a specified time. An update is defined as any change in order status, including the creation of a new order. Includes updates made by Amazon and by the seller. All dates must be in [ISO 8601](https://developer-docs.amazon.com/sp-api/docs/iso-8601) format.
   * @return lastUpdatedBefore
  **/
  @Schema(description = "Use this date to select orders that were last updated before (or at) a specified time. An update is defined as any change in order status, including the creation of a new order. Includes updates made by Amazon and by the seller. All dates must be in [ISO 8601](https://developer-docs.amazon.com/sp-api/docs/iso-8601) format.")
  public String getLastUpdatedBefore() {
    return lastUpdatedBefore;
  }

  public void setLastUpdatedBefore(String lastUpdatedBefore) {
    this.lastUpdatedBefore = lastUpdatedBefore;
  }

  public OrdersList createdBefore(String createdBefore) {
    this.createdBefore = createdBefore;
    return this;
  }

   /**
   * Use this date to select orders created before (or at) a specified time. Only orders placed before the specified time are returned. The date must be in [ISO 8601](https://developer-docs.amazon.com/sp-api/docs/iso-8601) format.
   * @return createdBefore
  **/
  @Schema(description = "Use this date to select orders created before (or at) a specified time. Only orders placed before the specified time are returned. The date must be in [ISO 8601](https://developer-docs.amazon.com/sp-api/docs/iso-8601) format.")
  public String getCreatedBefore() {
    return createdBefore;
  }

  public void setCreatedBefore(String createdBefore) {
    this.createdBefore = createdBefore;
  }


  @Override
  public boolean equals(java.lang.Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    OrdersList ordersList = (OrdersList) o;
    return Objects.equals(this.orders, ordersList.orders) &&
        Objects.equals(this.nextToken, ordersList.nextToken) &&
        Objects.equals(this.lastUpdatedBefore, ordersList.lastUpdatedBefore) &&
        Objects.equals(this.createdBefore, ordersList.createdBefore);
  }

  @Override
  public int hashCode() {
    return Objects.hash(orders, nextToken, lastUpdatedBefore, createdBefore);
  }


  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class OrdersList {\n");
    
    sb.append("    orders: ").append(toIndentedString(orders)).append("\n");
    sb.append("    nextToken: ").append(toIndentedString(nextToken)).append("\n");
    sb.append("    lastUpdatedBefore: ").append(toIndentedString(lastUpdatedBefore)).append("\n");
    sb.append("    createdBefore: ").append(toIndentedString(createdBefore)).append("\n");
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
