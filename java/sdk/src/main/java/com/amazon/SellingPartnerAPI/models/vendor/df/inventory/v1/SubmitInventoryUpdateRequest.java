/*
 * Selling Partner API for Direct Fulfillment Inventory Updates
 * The Selling Partner API for Direct Fulfillment Inventory Updates provides programmatic access to a direct fulfillment vendor's inventory updates.
 *
 * OpenAPI spec version: v1
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */

package com.amazon.SellingPartnerAPI.models.vendor.df.inventory.v1;

import java.util.Objects;
import java.util.Arrays;
import com.amazon.SellingPartnerAPI.models.vendor.df.inventory.v1.InventoryUpdate;
import com.google.gson.TypeAdapter;
import com.google.gson.annotations.JsonAdapter;
import com.google.gson.annotations.SerializedName;
import com.google.gson.stream.JsonReader;
import com.google.gson.stream.JsonWriter;
import io.swagger.v3.oas.annotations.media.Schema;
import java.io.IOException;
/**
 * The request body for the submitInventoryUpdate operation.
 */
@Schema(description = "The request body for the submitInventoryUpdate operation.")


public class SubmitInventoryUpdateRequest {
  @SerializedName("inventory")
  private InventoryUpdate inventory = null;

  public SubmitInventoryUpdateRequest inventory(InventoryUpdate inventory) {
    this.inventory = inventory;
    return this;
  }

   /**
   * Get inventory
   * @return inventory
  **/
  @Schema(description = "")
  public InventoryUpdate getInventory() {
    return inventory;
  }

  public void setInventory(InventoryUpdate inventory) {
    this.inventory = inventory;
  }


  @Override
  public boolean equals(java.lang.Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    SubmitInventoryUpdateRequest submitInventoryUpdateRequest = (SubmitInventoryUpdateRequest) o;
    return Objects.equals(this.inventory, submitInventoryUpdateRequest.inventory);
  }

  @Override
  public int hashCode() {
    return Objects.hash(inventory);
  }


  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class SubmitInventoryUpdateRequest {\n");
    
    sb.append("    inventory: ").append(toIndentedString(inventory)).append("\n");
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
