/*
 * Fulfillment Inbound v2024-03-20
 * The Selling Partner API for Fulfillment By Amazon (FBA) Inbound. The FBA Inbound API enables building inbound workflows to create, manage, and send shipments into Amazon's fulfillment network. The API has interoperability with the Send-to-Amazon user interface.
 *
 * OpenAPI spec version: 2024-03-20
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */

package com.amazon.SellingPartnerAPI.models.fulfillment.inbound.v2024_03_20;

import java.util.Objects;
import java.util.Arrays;
import com.amazon.SellingPartnerAPI.models.fulfillment.inbound.v2024_03_20.ReasonComment;
import com.google.gson.TypeAdapter;
import com.google.gson.annotations.JsonAdapter;
import com.google.gson.annotations.SerializedName;
import com.google.gson.stream.JsonReader;
import com.google.gson.stream.JsonWriter;
import io.swagger.v3.oas.annotations.media.Schema;
import java.io.IOException;
/**
 * The &#x60;scheduleSelfShipAppointment&#x60; request.
 */
@Schema(description = "The `scheduleSelfShipAppointment` request.")


public class ScheduleSelfShipAppointmentRequest {
  @SerializedName("reasonComment")
  private ReasonComment reasonComment = null;

  public ScheduleSelfShipAppointmentRequest reasonComment(ReasonComment reasonComment) {
    this.reasonComment = reasonComment;
    return this;
  }

   /**
   * Get reasonComment
   * @return reasonComment
  **/
  @Schema(description = "")
  public ReasonComment getReasonComment() {
    return reasonComment;
  }

  public void setReasonComment(ReasonComment reasonComment) {
    this.reasonComment = reasonComment;
  }


  @Override
  public boolean equals(java.lang.Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    ScheduleSelfShipAppointmentRequest scheduleSelfShipAppointmentRequest = (ScheduleSelfShipAppointmentRequest) o;
    return Objects.equals(this.reasonComment, scheduleSelfShipAppointmentRequest.reasonComment);
  }

  @Override
  public int hashCode() {
    return Objects.hash(reasonComment);
  }


  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class ScheduleSelfShipAppointmentRequest {\n");
    
    sb.append("    reasonComment: ").append(toIndentedString(reasonComment)).append("\n");
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
