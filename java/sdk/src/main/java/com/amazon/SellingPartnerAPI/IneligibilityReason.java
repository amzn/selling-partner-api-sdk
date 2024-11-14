/*
 * Amazon Shipping API
 * The Amazon Shipping API is designed to support outbound shipping use cases both for orders originating on Amazon-owned marketplaces as well as external channels/marketplaces. With these APIs, you can request shipping rates, create shipments, cancel shipments, and track shipments.
 *
 * OpenAPI spec version: v2
 * Contact: swa-api-core@amazon.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */

package com.amazon.SellingPartnerAPI;

import java.util.Objects;
import java.util.Arrays;
import com.amazon.SellingPartnerAPI.IneligibilityReasonCode;
import com.google.gson.TypeAdapter;
import com.google.gson.annotations.JsonAdapter;
import com.google.gson.annotations.SerializedName;
import com.google.gson.stream.JsonReader;
import com.google.gson.stream.JsonWriter;
import io.swagger.v3.oas.annotations.media.Schema;
import java.io.IOException;
/**
 * The reason why a shipping service offering is ineligible.
 */
@Schema(description = "The reason why a shipping service offering is ineligible.")
@javax.annotation.Generated(value = "io.swagger.codegen.v3.generators.java.JavaClientCodegen", date = "2024-11-14T09:09:56.733862Z[Etc/UTC]")

public class IneligibilityReason {
  @SerializedName("code")
  private IneligibilityReasonCode code = null;

  @SerializedName("message")
  private String message = null;

  public IneligibilityReason code(IneligibilityReasonCode code) {
    this.code = code;
    return this;
  }

   /**
   * Get code
   * @return code
  **/
  @Schema(required = true, description = "")
  public IneligibilityReasonCode getCode() {
    return code;
  }

  public void setCode(IneligibilityReasonCode code) {
    this.code = code;
  }

  public IneligibilityReason message(String message) {
    this.message = message;
    return this;
  }

   /**
   * The ineligibility reason.
   * @return message
  **/
  @Schema(required = true, description = "The ineligibility reason.")
  public String getMessage() {
    return message;
  }

  public void setMessage(String message) {
    this.message = message;
  }


  @Override
  public boolean equals(java.lang.Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    IneligibilityReason ineligibilityReason = (IneligibilityReason) o;
    return Objects.equals(this.code, ineligibilityReason.code) &&
        Objects.equals(this.message, ineligibilityReason.message);
  }

  @Override
  public int hashCode() {
    return Objects.hash(code, message);
  }


  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class IneligibilityReason {\n");
    
    sb.append("    code: ").append(toIndentedString(code)).append("\n");
    sb.append("    message: ").append(toIndentedString(message)).append("\n");
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
