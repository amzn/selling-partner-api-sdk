/*
 * Selling Partner API for Product Fees
 * The Selling Partner API for Product Fees lets you programmatically retrieve estimated fees for a product. You can then account for those fees in your pricing.
 *
 * OpenAPI spec version: v0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */

package com.amazon.SellingPartnerAPI;

import java.util.Objects;
import java.util.Arrays;
import com.amazon.SellingPartnerAPI.FeesEstimateRequest;
import com.amazon.SellingPartnerAPI.IdType;
import com.google.gson.TypeAdapter;
import com.google.gson.annotations.JsonAdapter;
import com.google.gson.annotations.SerializedName;
import com.google.gson.stream.JsonReader;
import com.google.gson.stream.JsonWriter;
import io.swagger.v3.oas.annotations.media.Schema;
import java.io.IOException;
/**
 * A product, marketplace, and proposed price used to request estimated fees.
 */
@Schema(description = "A product, marketplace, and proposed price used to request estimated fees.")
@javax.annotation.Generated(value = "io.swagger.codegen.v3.generators.java.JavaClientCodegen", date = "2024-11-14T09:09:19.393005Z[Etc/UTC]")

public class FeesEstimateByIdRequest {
  @SerializedName("FeesEstimateRequest")
  private FeesEstimateRequest feesEstimateRequest = null;

  @SerializedName("IdType")
  private IdType idType = null;

  @SerializedName("IdValue")
  private String idValue = null;

  public FeesEstimateByIdRequest feesEstimateRequest(FeesEstimateRequest feesEstimateRequest) {
    this.feesEstimateRequest = feesEstimateRequest;
    return this;
  }

   /**
   * Get feesEstimateRequest
   * @return feesEstimateRequest
  **/
  @Schema(description = "")
  public FeesEstimateRequest getFeesEstimateRequest() {
    return feesEstimateRequest;
  }

  public void setFeesEstimateRequest(FeesEstimateRequest feesEstimateRequest) {
    this.feesEstimateRequest = feesEstimateRequest;
  }

  public FeesEstimateByIdRequest idType(IdType idType) {
    this.idType = idType;
    return this;
  }

   /**
   * Get idType
   * @return idType
  **/
  @Schema(required = true, description = "")
  public IdType getIdType() {
    return idType;
  }

  public void setIdType(IdType idType) {
    this.idType = idType;
  }

  public FeesEstimateByIdRequest idValue(String idValue) {
    this.idValue = idValue;
    return this;
  }

   /**
   * The item identifier.
   * @return idValue
  **/
  @Schema(required = true, description = "The item identifier.")
  public String getIdValue() {
    return idValue;
  }

  public void setIdValue(String idValue) {
    this.idValue = idValue;
  }


  @Override
  public boolean equals(java.lang.Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    FeesEstimateByIdRequest feesEstimateByIdRequest = (FeesEstimateByIdRequest) o;
    return Objects.equals(this.feesEstimateRequest, feesEstimateByIdRequest.feesEstimateRequest) &&
        Objects.equals(this.idType, feesEstimateByIdRequest.idType) &&
        Objects.equals(this.idValue, feesEstimateByIdRequest.idValue);
  }

  @Override
  public int hashCode() {
    return Objects.hash(feesEstimateRequest, idType, idValue);
  }


  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class FeesEstimateByIdRequest {\n");
    
    sb.append("    feesEstimateRequest: ").append(toIndentedString(feesEstimateRequest)).append("\n");
    sb.append("    idType: ").append(toIndentedString(idType)).append("\n");
    sb.append("    idValue: ").append(toIndentedString(idValue)).append("\n");
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
