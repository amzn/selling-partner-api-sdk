/*
 * Selling Partner API for Direct Fulfillment Orders
 * The Selling Partner API for Direct Fulfillment Orders provides programmatic access to a direct fulfillment vendor's order data.
 *
 * OpenAPI spec version: 2021-12-28
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */

package com.amazon.SellingPartnerAPI.models;

import java.util.Objects;
import java.util.Arrays;
import com.google.gson.TypeAdapter;
import com.google.gson.annotations.JsonAdapter;
import com.google.gson.annotations.SerializedName;
import com.google.gson.stream.JsonReader;
import com.google.gson.stream.JsonWriter;
import io.swagger.v3.oas.annotations.media.Schema;
import java.io.IOException;
/**
 * Gift details for the item.
 */
@Schema(description = "Gift details for the item.")


public class GiftDetails {
  @SerializedName("giftMessage")
  private String giftMessage = null;

  @SerializedName("giftWrapId")
  private String giftWrapId = null;

  public GiftDetails giftMessage(String giftMessage) {
    this.giftMessage = giftMessage;
    return this;
  }

   /**
   * Gift message to be printed in shipment.
   * @return giftMessage
  **/
  @Schema(description = "Gift message to be printed in shipment.")
  public String getGiftMessage() {
    return giftMessage;
  }

  public void setGiftMessage(String giftMessage) {
    this.giftMessage = giftMessage;
  }

  public GiftDetails giftWrapId(String giftWrapId) {
    this.giftWrapId = giftWrapId;
    return this;
  }

   /**
   * Gift wrap identifier for the gift wrapping, if any.
   * @return giftWrapId
  **/
  @Schema(description = "Gift wrap identifier for the gift wrapping, if any.")
  public String getGiftWrapId() {
    return giftWrapId;
  }

  public void setGiftWrapId(String giftWrapId) {
    this.giftWrapId = giftWrapId;
  }


  @Override
  public boolean equals(java.lang.Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    GiftDetails giftDetails = (GiftDetails) o;
    return Objects.equals(this.giftMessage, giftDetails.giftMessage) &&
        Objects.equals(this.giftWrapId, giftDetails.giftWrapId);
  }

  @Override
  public int hashCode() {
    return Objects.hash(giftMessage, giftWrapId);
  }


  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class GiftDetails {\n");
    
    sb.append("    giftMessage: ").append(toIndentedString(giftMessage)).append("\n");
    sb.append("    giftWrapId: ").append(toIndentedString(giftWrapId)).append("\n");
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
