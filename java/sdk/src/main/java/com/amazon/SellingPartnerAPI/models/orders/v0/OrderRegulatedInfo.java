/*
 * Orders v0
 * Use the Orders Selling Partner API to programmatically retrieve order information. With this API, you can develop fast, flexible, and custom applications to manage order synchronization, perform order research, and create demand-based decision support tools.   _Note:_ For the JP, AU, and SG marketplaces, the Orders API supports orders from 2016 onward. For all other marketplaces, the Orders API supports orders for the last two years (orders older than this don't show up in the response).
 *
 * OpenAPI spec version: v0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */

package com.amazon.SellingPartnerAPI.models.orders.v0;

import java.util.Objects;
import java.util.Arrays;
import com.amazon.SellingPartnerAPI.models.orders.v0.RegulatedInformation;
import com.amazon.SellingPartnerAPI.models.orders.v0.RegulatedOrderVerificationStatus;
import com.google.gson.TypeAdapter;
import com.google.gson.annotations.JsonAdapter;
import com.google.gson.annotations.SerializedName;
import com.google.gson.stream.JsonReader;
import com.google.gson.stream.JsonWriter;
import io.swagger.v3.oas.annotations.media.Schema;
import java.io.IOException;
/**
 * The order&#x27;s regulated information along with its verification status.
 */
@Schema(description = "The order's regulated information along with its verification status.")


public class OrderRegulatedInfo {
  @SerializedName("AmazonOrderId")
  private String amazonOrderId = null;

  @SerializedName("RegulatedInformation")
  private RegulatedInformation regulatedInformation = null;

  @SerializedName("RequiresDosageLabel")
  private Boolean requiresDosageLabel = null;

  @SerializedName("RegulatedOrderVerificationStatus")
  private RegulatedOrderVerificationStatus regulatedOrderVerificationStatus = null;

  public OrderRegulatedInfo amazonOrderId(String amazonOrderId) {
    this.amazonOrderId = amazonOrderId;
    return this;
  }

   /**
   * An Amazon-defined order identifier, in 3-7-7 format.
   * @return amazonOrderId
  **/
  @Schema(required = true, description = "An Amazon-defined order identifier, in 3-7-7 format.")
  public String getAmazonOrderId() {
    return amazonOrderId;
  }

  public void setAmazonOrderId(String amazonOrderId) {
    this.amazonOrderId = amazonOrderId;
  }

  public OrderRegulatedInfo regulatedInformation(RegulatedInformation regulatedInformation) {
    this.regulatedInformation = regulatedInformation;
    return this;
  }

   /**
   * Get regulatedInformation
   * @return regulatedInformation
  **/
  @Schema(required = true, description = "")
  public RegulatedInformation getRegulatedInformation() {
    return regulatedInformation;
  }

  public void setRegulatedInformation(RegulatedInformation regulatedInformation) {
    this.regulatedInformation = regulatedInformation;
  }

  public OrderRegulatedInfo requiresDosageLabel(Boolean requiresDosageLabel) {
    this.requiresDosageLabel = requiresDosageLabel;
    return this;
  }

   /**
   * When true, the order requires attaching a dosage information label when shipped.
   * @return requiresDosageLabel
  **/
  @Schema(required = true, description = "When true, the order requires attaching a dosage information label when shipped.")
  public Boolean isRequiresDosageLabel() {
    return requiresDosageLabel;
  }

  public void setRequiresDosageLabel(Boolean requiresDosageLabel) {
    this.requiresDosageLabel = requiresDosageLabel;
  }

  public OrderRegulatedInfo regulatedOrderVerificationStatus(RegulatedOrderVerificationStatus regulatedOrderVerificationStatus) {
    this.regulatedOrderVerificationStatus = regulatedOrderVerificationStatus;
    return this;
  }

   /**
   * Get regulatedOrderVerificationStatus
   * @return regulatedOrderVerificationStatus
  **/
  @Schema(required = true, description = "")
  public RegulatedOrderVerificationStatus getRegulatedOrderVerificationStatus() {
    return regulatedOrderVerificationStatus;
  }

  public void setRegulatedOrderVerificationStatus(RegulatedOrderVerificationStatus regulatedOrderVerificationStatus) {
    this.regulatedOrderVerificationStatus = regulatedOrderVerificationStatus;
  }


  @Override
  public boolean equals(java.lang.Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    OrderRegulatedInfo orderRegulatedInfo = (OrderRegulatedInfo) o;
    return Objects.equals(this.amazonOrderId, orderRegulatedInfo.amazonOrderId) &&
        Objects.equals(this.regulatedInformation, orderRegulatedInfo.regulatedInformation) &&
        Objects.equals(this.requiresDosageLabel, orderRegulatedInfo.requiresDosageLabel) &&
        Objects.equals(this.regulatedOrderVerificationStatus, orderRegulatedInfo.regulatedOrderVerificationStatus);
  }

  @Override
  public int hashCode() {
    return Objects.hash(amazonOrderId, regulatedInformation, requiresDosageLabel, regulatedOrderVerificationStatus);
  }


  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class OrderRegulatedInfo {\n");
    
    sb.append("    amazonOrderId: ").append(toIndentedString(amazonOrderId)).append("\n");
    sb.append("    regulatedInformation: ").append(toIndentedString(regulatedInformation)).append("\n");
    sb.append("    requiresDosageLabel: ").append(toIndentedString(requiresDosageLabel)).append("\n");
    sb.append("    regulatedOrderVerificationStatus: ").append(toIndentedString(regulatedOrderVerificationStatus)).append("\n");
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
