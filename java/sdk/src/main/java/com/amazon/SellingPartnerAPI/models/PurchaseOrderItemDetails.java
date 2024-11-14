/*
 * Vendor Shipments v1
 * The Selling Partner API for Retail Procurement Shipments provides programmatic access to retail shipping data for vendors.
 *
 * OpenAPI spec version: v1
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */

package com.amazon.SellingPartnerAPI.models;

import java.util.Objects;
import java.util.Arrays;
import com.amazon.SellingPartnerAPI.models.Money;
import com.google.gson.TypeAdapter;
import com.google.gson.annotations.JsonAdapter;
import com.google.gson.annotations.SerializedName;
import com.google.gson.stream.JsonReader;
import com.google.gson.stream.JsonWriter;
import io.swagger.v3.oas.annotations.media.Schema;
import java.io.IOException;
/**
 * Item details for be provided for every item in shipment at either the item or carton or pallet level, whichever is appropriate.
 */
@Schema(description = "Item details for be provided for every item in shipment at either the item or carton or pallet level, whichever is appropriate.")


public class PurchaseOrderItemDetails {
  @SerializedName("maximumRetailPrice")
  private Money maximumRetailPrice = null;

  public PurchaseOrderItemDetails maximumRetailPrice(Money maximumRetailPrice) {
    this.maximumRetailPrice = maximumRetailPrice;
    return this;
  }

   /**
   * Get maximumRetailPrice
   * @return maximumRetailPrice
  **/
  @Schema(description = "")
  public Money getMaximumRetailPrice() {
    return maximumRetailPrice;
  }

  public void setMaximumRetailPrice(Money maximumRetailPrice) {
    this.maximumRetailPrice = maximumRetailPrice;
  }


  @Override
  public boolean equals(java.lang.Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    PurchaseOrderItemDetails purchaseOrderItemDetails = (PurchaseOrderItemDetails) o;
    return Objects.equals(this.maximumRetailPrice, purchaseOrderItemDetails.maximumRetailPrice);
  }

  @Override
  public int hashCode() {
    return Objects.hash(maximumRetailPrice);
  }


  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class PurchaseOrderItemDetails {\n");
    
    sb.append("    maximumRetailPrice: ").append(toIndentedString(maximumRetailPrice)).append("\n");
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
