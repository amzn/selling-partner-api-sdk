/*
 * The Selling Partner API for FBA inbound operations.
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
import com.amazon.SellingPartnerAPI.models.fulfillment.inbound.v2024_03_20.SelfShipAppointmentDetails;
import com.google.gson.TypeAdapter;
import com.google.gson.annotations.JsonAdapter;
import com.google.gson.annotations.SerializedName;
import com.google.gson.stream.JsonReader;
import com.google.gson.stream.JsonWriter;
import io.swagger.v3.oas.annotations.media.Schema;
import java.io.IOException;
/**
 * The &#x60;scheduleSelfShipAppointment&#x60; response.
 */
@Schema(description = "The `scheduleSelfShipAppointment` response.")


public class ScheduleSelfShipAppointmentResponse {
  @SerializedName("selfShipAppointmentDetails")
  private SelfShipAppointmentDetails selfShipAppointmentDetails = null;

  public ScheduleSelfShipAppointmentResponse selfShipAppointmentDetails(SelfShipAppointmentDetails selfShipAppointmentDetails) {
    this.selfShipAppointmentDetails = selfShipAppointmentDetails;
    return this;
  }

   /**
   * Get selfShipAppointmentDetails
   * @return selfShipAppointmentDetails
  **/
  @Schema(required = true, description = "")
  public SelfShipAppointmentDetails getSelfShipAppointmentDetails() {
    return selfShipAppointmentDetails;
  }

  public void setSelfShipAppointmentDetails(SelfShipAppointmentDetails selfShipAppointmentDetails) {
    this.selfShipAppointmentDetails = selfShipAppointmentDetails;
  }


  @Override
  public boolean equals(java.lang.Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    ScheduleSelfShipAppointmentResponse scheduleSelfShipAppointmentResponse = (ScheduleSelfShipAppointmentResponse) o;
    return Objects.equals(this.selfShipAppointmentDetails, scheduleSelfShipAppointmentResponse.selfShipAppointmentDetails);
  }

  @Override
  public int hashCode() {
    return Objects.hash(selfShipAppointmentDetails);
  }


  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class ScheduleSelfShipAppointmentResponse {\n");
    
    sb.append("    selfShipAppointmentDetails: ").append(toIndentedString(selfShipAppointmentDetails)).append("\n");
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
