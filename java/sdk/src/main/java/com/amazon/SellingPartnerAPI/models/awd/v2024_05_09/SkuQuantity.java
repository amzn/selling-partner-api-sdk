/*
 * The Selling Partner API for Amazon Warehousing and Distribution
 * The Selling Partner API for Amazon Warehousing and Distribution (AWD) provides programmatic access to information about AWD shipments and inventory. 
 *
 * OpenAPI spec version: 2024-05-09
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */

package com.amazon.SellingPartnerAPI.models.awd.v2024_05_09;

import java.util.Objects;
import java.util.Arrays;
import com.amazon.SellingPartnerAPI.models.awd.v2024_05_09.InventoryQuantity;
import com.google.gson.TypeAdapter;
import com.google.gson.annotations.JsonAdapter;
import com.google.gson.annotations.SerializedName;
import com.google.gson.stream.JsonReader;
import com.google.gson.stream.JsonWriter;
import io.swagger.v3.oas.annotations.media.Schema;
import java.io.IOException;
/**
 * Quantity details for a SKU as part of a shipment
 */
@Schema(description = "Quantity details for a SKU as part of a shipment")


public class SkuQuantity {
  @SerializedName("expectedQuantity")
  private InventoryQuantity expectedQuantity = null;

  @SerializedName("receivedQuantity")
  private InventoryQuantity receivedQuantity = null;

  @SerializedName("sku")
  private String sku = null;

  public SkuQuantity expectedQuantity(InventoryQuantity expectedQuantity) {
    this.expectedQuantity = expectedQuantity;
    return this;
  }

   /**
   * Get expectedQuantity
   * @return expectedQuantity
  **/
  @Schema(required = true, description = "")
  public InventoryQuantity getExpectedQuantity() {
    return expectedQuantity;
  }

  public void setExpectedQuantity(InventoryQuantity expectedQuantity) {
    this.expectedQuantity = expectedQuantity;
  }

  public SkuQuantity receivedQuantity(InventoryQuantity receivedQuantity) {
    this.receivedQuantity = receivedQuantity;
    return this;
  }

   /**
   * Get receivedQuantity
   * @return receivedQuantity
  **/
  @Schema(description = "")
  public InventoryQuantity getReceivedQuantity() {
    return receivedQuantity;
  }

  public void setReceivedQuantity(InventoryQuantity receivedQuantity) {
    this.receivedQuantity = receivedQuantity;
  }

  public SkuQuantity sku(String sku) {
    this.sku = sku;
    return this;
  }

   /**
   * The merchant stock keeping unit
   * @return sku
  **/
  @Schema(required = true, description = "The merchant stock keeping unit")
  public String getSku() {
    return sku;
  }

  public void setSku(String sku) {
    this.sku = sku;
  }


  @Override
  public boolean equals(java.lang.Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    SkuQuantity skuQuantity = (SkuQuantity) o;
    return Objects.equals(this.expectedQuantity, skuQuantity.expectedQuantity) &&
        Objects.equals(this.receivedQuantity, skuQuantity.receivedQuantity) &&
        Objects.equals(this.sku, skuQuantity.sku);
  }

  @Override
  public int hashCode() {
    return Objects.hash(expectedQuantity, receivedQuantity, sku);
  }


  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class SkuQuantity {\n");
    
    sb.append("    expectedQuantity: ").append(toIndentedString(expectedQuantity)).append("\n");
    sb.append("    receivedQuantity: ").append(toIndentedString(receivedQuantity)).append("\n");
    sb.append("    sku: ").append(toIndentedString(sku)).append("\n");
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
