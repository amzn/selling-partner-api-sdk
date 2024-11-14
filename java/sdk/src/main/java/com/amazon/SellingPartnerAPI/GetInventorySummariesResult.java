/*
 * Selling Partner API for FBA Inventory
 * The Selling Partner API for FBA Inventory lets you programmatically retrieve information about inventory in Amazon's fulfillment network.
 *
 * OpenAPI spec version: v1
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */

package com.amazon.SellingPartnerAPI;

import java.util.Objects;
import java.util.Arrays;
import com.amazon.SellingPartnerAPI.Granularity;
import com.amazon.SellingPartnerAPI.InventorySummaries;
import com.google.gson.TypeAdapter;
import com.google.gson.annotations.JsonAdapter;
import com.google.gson.annotations.SerializedName;
import com.google.gson.stream.JsonReader;
import com.google.gson.stream.JsonWriter;
import io.swagger.v3.oas.annotations.media.Schema;
import java.io.IOException;
/**
 * The payload schema for the getInventorySummaries operation.
 */
@Schema(description = "The payload schema for the getInventorySummaries operation.")
@javax.annotation.Generated(value = "io.swagger.codegen.v3.generators.java.JavaClientCodegen", date = "2024-11-14T09:08:17.202868Z[Etc/UTC]")

public class GetInventorySummariesResult {
  @SerializedName("granularity")
  private Granularity granularity = null;

  @SerializedName("inventorySummaries")
  private InventorySummaries inventorySummaries = null;

  public GetInventorySummariesResult granularity(Granularity granularity) {
    this.granularity = granularity;
    return this;
  }

   /**
   * Get granularity
   * @return granularity
  **/
  @Schema(required = true, description = "")
  public Granularity getGranularity() {
    return granularity;
  }

  public void setGranularity(Granularity granularity) {
    this.granularity = granularity;
  }

  public GetInventorySummariesResult inventorySummaries(InventorySummaries inventorySummaries) {
    this.inventorySummaries = inventorySummaries;
    return this;
  }

   /**
   * Get inventorySummaries
   * @return inventorySummaries
  **/
  @Schema(required = true, description = "")
  public InventorySummaries getInventorySummaries() {
    return inventorySummaries;
  }

  public void setInventorySummaries(InventorySummaries inventorySummaries) {
    this.inventorySummaries = inventorySummaries;
  }


  @Override
  public boolean equals(java.lang.Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    GetInventorySummariesResult getInventorySummariesResult = (GetInventorySummariesResult) o;
    return Objects.equals(this.granularity, getInventorySummariesResult.granularity) &&
        Objects.equals(this.inventorySummaries, getInventorySummariesResult.inventorySummaries);
  }

  @Override
  public int hashCode() {
    return Objects.hash(granularity, inventorySummaries);
  }


  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class GetInventorySummariesResult {\n");
    
    sb.append("    granularity: ").append(toIndentedString(granularity)).append("\n");
    sb.append("    inventorySummaries: ").append(toIndentedString(inventorySummaries)).append("\n");
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
