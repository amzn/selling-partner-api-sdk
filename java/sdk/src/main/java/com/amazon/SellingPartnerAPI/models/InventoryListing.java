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

package com.amazon.SellingPartnerAPI.models;

import java.util.Objects;
import java.util.Arrays;
import com.amazon.SellingPartnerAPI.models.InventorySummary;
import com.google.gson.TypeAdapter;
import com.google.gson.annotations.JsonAdapter;
import com.google.gson.annotations.SerializedName;
import com.google.gson.stream.JsonReader;
import com.google.gson.stream.JsonWriter;
import io.swagger.v3.oas.annotations.media.Schema;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
/**
 * AWD inventory payload.
 */
@Schema(description = "AWD inventory payload.")


public class InventoryListing {
  @SerializedName("inventory")
  private List<InventorySummary> inventory = new ArrayList<InventorySummary>();

  @SerializedName("nextToken")
  private String nextToken = null;

  public InventoryListing inventory(List<InventorySummary> inventory) {
    this.inventory = inventory;
    return this;
  }

  public InventoryListing addInventoryItem(InventorySummary inventoryItem) {
    this.inventory.add(inventoryItem);
    return this;
  }

   /**
   * List of inventory summaries.
   * @return inventory
  **/
  @Schema(required = true, description = "List of inventory summaries.")
  public List<InventorySummary> getInventory() {
    return inventory;
  }

  public void setInventory(List<InventorySummary> inventory) {
    this.inventory = inventory;
  }

  public InventoryListing nextToken(String nextToken) {
    this.nextToken = nextToken;
    return this;
  }

   /**
   * Token to retrieve the next set of paginated results.
   * @return nextToken
  **/
  @Schema(example = "SampleToken", description = "Token to retrieve the next set of paginated results.")
  public String getNextToken() {
    return nextToken;
  }

  public void setNextToken(String nextToken) {
    this.nextToken = nextToken;
  }


  @Override
  public boolean equals(java.lang.Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    InventoryListing inventoryListing = (InventoryListing) o;
    return Objects.equals(this.inventory, inventoryListing.inventory) &&
        Objects.equals(this.nextToken, inventoryListing.nextToken);
  }

  @Override
  public int hashCode() {
    return Objects.hash(inventory, nextToken);
  }


  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class InventoryListing {\n");
    
    sb.append("    inventory: ").append(toIndentedString(inventory)).append("\n");
    sb.append("    nextToken: ").append(toIndentedString(nextToken)).append("\n");
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
