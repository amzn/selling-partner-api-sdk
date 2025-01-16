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
import com.amazon.SellingPartnerAPI.models.awd.v2024_05_09.InboundEligibilityStatus;
import com.amazon.SellingPartnerAPI.models.awd.v2024_05_09.OrderIneligibilityReason;
import com.amazon.SellingPartnerAPI.models.awd.v2024_05_09.SkuEligibility;
import com.google.gson.TypeAdapter;
import com.google.gson.annotations.JsonAdapter;
import com.google.gson.annotations.SerializedName;
import com.google.gson.stream.JsonReader;
import com.google.gson.stream.JsonWriter;
import io.swagger.v3.oas.annotations.media.Schema;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import org.threeten.bp.OffsetDateTime;
/**
 * Represents the eligibility status of the inbound packages.
 */
@Schema(description = "Represents the eligibility status of the inbound packages.")


public class InboundEligibility {
  @SerializedName("ineligibilityReasons")
  private List<OrderIneligibilityReason> ineligibilityReasons = null;

  @SerializedName("packagesToInbound")
  private List<SkuEligibility> packagesToInbound = new ArrayList<SkuEligibility>();

  @SerializedName("previewedAt")
  private OffsetDateTime previewedAt = null;

  @SerializedName("status")
  private InboundEligibilityStatus status = null;

  public InboundEligibility ineligibilityReasons(List<OrderIneligibilityReason> ineligibilityReasons) {
    this.ineligibilityReasons = ineligibilityReasons;
    return this;
  }

  public InboundEligibility addIneligibilityReasonsItem(OrderIneligibilityReason ineligibilityReasonsItem) {
    if (this.ineligibilityReasons == null) {
      this.ineligibilityReasons = new ArrayList<OrderIneligibilityReason>();
    }
    this.ineligibilityReasons.add(ineligibilityReasonsItem);
    return this;
  }

   /**
   * If there are order level eligibility issues, then this list will contain those error codes and descriptions.
   * @return ineligibilityReasons
  **/
  @Schema(description = "If there are order level eligibility issues, then this list will contain those error codes and descriptions.")
  public List<OrderIneligibilityReason> getIneligibilityReasons() {
    return ineligibilityReasons;
  }

  public void setIneligibilityReasons(List<OrderIneligibilityReason> ineligibilityReasons) {
    this.ineligibilityReasons = ineligibilityReasons;
  }

  public InboundEligibility packagesToInbound(List<SkuEligibility> packagesToInbound) {
    this.packagesToInbound = packagesToInbound;
    return this;
  }

  public InboundEligibility addPackagesToInboundItem(SkuEligibility packagesToInboundItem) {
    this.packagesToInbound.add(packagesToInboundItem);
    return this;
  }

   /**
   * Details on SKU eligibility for each inbound package.
   * @return packagesToInbound
  **/
  @Schema(required = true, description = "Details on SKU eligibility for each inbound package.")
  public List<SkuEligibility> getPackagesToInbound() {
    return packagesToInbound;
  }

  public void setPackagesToInbound(List<SkuEligibility> packagesToInbound) {
    this.packagesToInbound = packagesToInbound;
  }

  public InboundEligibility previewedAt(OffsetDateTime previewedAt) {
    this.previewedAt = previewedAt;
    return this;
  }

   /**
   * Timestamp when the eligibility check is performed.
   * @return previewedAt
  **/
  @Schema(required = true, description = "Timestamp when the eligibility check is performed.")
  public OffsetDateTime getPreviewedAt() {
    return previewedAt;
  }

  public void setPreviewedAt(OffsetDateTime previewedAt) {
    this.previewedAt = previewedAt;
  }

  public InboundEligibility status(InboundEligibilityStatus status) {
    this.status = status;
    return this;
  }

   /**
   * Get status
   * @return status
  **/
  @Schema(required = true, description = "")
  public InboundEligibilityStatus getStatus() {
    return status;
  }

  public void setStatus(InboundEligibilityStatus status) {
    this.status = status;
  }


  @Override
  public boolean equals(java.lang.Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    InboundEligibility inboundEligibility = (InboundEligibility) o;
    return Objects.equals(this.ineligibilityReasons, inboundEligibility.ineligibilityReasons) &&
        Objects.equals(this.packagesToInbound, inboundEligibility.packagesToInbound) &&
        Objects.equals(this.previewedAt, inboundEligibility.previewedAt) &&
        Objects.equals(this.status, inboundEligibility.status);
  }

  @Override
  public int hashCode() {
    return Objects.hash(ineligibilityReasons, packagesToInbound, previewedAt, status);
  }


  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class InboundEligibility {\n");
    
    sb.append("    ineligibilityReasons: ").append(toIndentedString(ineligibilityReasons)).append("\n");
    sb.append("    packagesToInbound: ").append(toIndentedString(packagesToInbound)).append("\n");
    sb.append("    previewedAt: ").append(toIndentedString(previewedAt)).append("\n");
    sb.append("    status: ").append(toIndentedString(status)).append("\n");
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
