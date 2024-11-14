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

package com.amazon.SellingPartnerAPI.models;

import java.util.Objects;
import java.util.Arrays;
import com.amazon.SellingPartnerAPI.models.VerificationDetails;
import com.amazon.SellingPartnerAPI.models.VerificationStatus;
import com.google.gson.TypeAdapter;
import com.google.gson.annotations.JsonAdapter;
import com.google.gson.annotations.SerializedName;
import com.google.gson.stream.JsonReader;
import com.google.gson.stream.JsonWriter;
import io.swagger.v3.oas.annotations.media.Schema;
import java.io.IOException;
/**
 * The updated values of the &#x60;VerificationStatus&#x60; field.
 */
@Schema(description = "The updated values of the `VerificationStatus` field.")


public class UpdateVerificationStatusRequestBody {
  @SerializedName("status")
  private VerificationStatus status = null;

  @SerializedName("externalReviewerId")
  private String externalReviewerId = null;

  @SerializedName("rejectionReasonId")
  private String rejectionReasonId = null;

  @SerializedName("verificationDetails")
  private VerificationDetails verificationDetails = null;

  public UpdateVerificationStatusRequestBody status(VerificationStatus status) {
    this.status = status;
    return this;
  }

   /**
   * Get status
   * @return status
  **/
  @Schema(description = "")
  public VerificationStatus getStatus() {
    return status;
  }

  public void setStatus(VerificationStatus status) {
    this.status = status;
  }

  public UpdateVerificationStatusRequestBody externalReviewerId(String externalReviewerId) {
    this.externalReviewerId = externalReviewerId;
    return this;
  }

   /**
   * The identifier of the order&#x27;s regulated information reviewer.
   * @return externalReviewerId
  **/
  @Schema(required = true, description = "The identifier of the order's regulated information reviewer.")
  public String getExternalReviewerId() {
    return externalReviewerId;
  }

  public void setExternalReviewerId(String externalReviewerId) {
    this.externalReviewerId = externalReviewerId;
  }

  public UpdateVerificationStatusRequestBody rejectionReasonId(String rejectionReasonId) {
    this.rejectionReasonId = rejectionReasonId;
    return this;
  }

   /**
   * The unique identifier of the rejection reason used for rejecting the order&#x27;s regulated information. Only required if the new status is rejected.
   * @return rejectionReasonId
  **/
  @Schema(description = "The unique identifier of the rejection reason used for rejecting the order's regulated information. Only required if the new status is rejected.")
  public String getRejectionReasonId() {
    return rejectionReasonId;
  }

  public void setRejectionReasonId(String rejectionReasonId) {
    this.rejectionReasonId = rejectionReasonId;
  }

  public UpdateVerificationStatusRequestBody verificationDetails(VerificationDetails verificationDetails) {
    this.verificationDetails = verificationDetails;
    return this;
  }

   /**
   * Get verificationDetails
   * @return verificationDetails
  **/
  @Schema(description = "")
  public VerificationDetails getVerificationDetails() {
    return verificationDetails;
  }

  public void setVerificationDetails(VerificationDetails verificationDetails) {
    this.verificationDetails = verificationDetails;
  }


  @Override
  public boolean equals(java.lang.Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    UpdateVerificationStatusRequestBody updateVerificationStatusRequestBody = (UpdateVerificationStatusRequestBody) o;
    return Objects.equals(this.status, updateVerificationStatusRequestBody.status) &&
        Objects.equals(this.externalReviewerId, updateVerificationStatusRequestBody.externalReviewerId) &&
        Objects.equals(this.rejectionReasonId, updateVerificationStatusRequestBody.rejectionReasonId) &&
        Objects.equals(this.verificationDetails, updateVerificationStatusRequestBody.verificationDetails);
  }

  @Override
  public int hashCode() {
    return Objects.hash(status, externalReviewerId, rejectionReasonId, verificationDetails);
  }


  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class UpdateVerificationStatusRequestBody {\n");
    
    sb.append("    status: ").append(toIndentedString(status)).append("\n");
    sb.append("    externalReviewerId: ").append(toIndentedString(externalReviewerId)).append("\n");
    sb.append("    rejectionReasonId: ").append(toIndentedString(rejectionReasonId)).append("\n");
    sb.append("    verificationDetails: ").append(toIndentedString(verificationDetails)).append("\n");
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
