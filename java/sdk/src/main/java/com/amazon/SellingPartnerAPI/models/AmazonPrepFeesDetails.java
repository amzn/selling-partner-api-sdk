/*
 * Selling Partner API for Fulfillment Inbound
 * The Selling Partner API for Fulfillment Inbound lets you create applications that create and update inbound shipments of inventory to Amazon's fulfillment network.
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
import com.amazon.SellingPartnerAPI.models.Amount;
import com.amazon.SellingPartnerAPI.models.PrepInstruction;
import com.google.gson.TypeAdapter;
import com.google.gson.annotations.JsonAdapter;
import com.google.gson.annotations.SerializedName;
import com.google.gson.stream.JsonReader;
import com.google.gson.stream.JsonWriter;
import io.swagger.v3.oas.annotations.media.Schema;
import java.io.IOException;
/**
 * The fees for Amazon to prep goods for shipment.
 */
@Schema(description = "The fees for Amazon to prep goods for shipment.")


public class AmazonPrepFeesDetails {
  @SerializedName("PrepInstruction")
  private PrepInstruction prepInstruction = null;

  @SerializedName("FeePerUnit")
  private Amount feePerUnit = null;

  public AmazonPrepFeesDetails prepInstruction(PrepInstruction prepInstruction) {
    this.prepInstruction = prepInstruction;
    return this;
  }

   /**
   * Get prepInstruction
   * @return prepInstruction
  **/
  @Schema(description = "")
  public PrepInstruction getPrepInstruction() {
    return prepInstruction;
  }

  public void setPrepInstruction(PrepInstruction prepInstruction) {
    this.prepInstruction = prepInstruction;
  }

  public AmazonPrepFeesDetails feePerUnit(Amount feePerUnit) {
    this.feePerUnit = feePerUnit;
    return this;
  }

   /**
   * Get feePerUnit
   * @return feePerUnit
  **/
  @Schema(description = "")
  public Amount getFeePerUnit() {
    return feePerUnit;
  }

  public void setFeePerUnit(Amount feePerUnit) {
    this.feePerUnit = feePerUnit;
  }


  @Override
  public boolean equals(java.lang.Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    AmazonPrepFeesDetails amazonPrepFeesDetails = (AmazonPrepFeesDetails) o;
    return Objects.equals(this.prepInstruction, amazonPrepFeesDetails.prepInstruction) &&
        Objects.equals(this.feePerUnit, amazonPrepFeesDetails.feePerUnit);
  }

  @Override
  public int hashCode() {
    return Objects.hash(prepInstruction, feePerUnit);
  }


  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class AmazonPrepFeesDetails {\n");
    
    sb.append("    prepInstruction: ").append(toIndentedString(prepInstruction)).append("\n");
    sb.append("    feePerUnit: ").append(toIndentedString(feePerUnit)).append("\n");
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
