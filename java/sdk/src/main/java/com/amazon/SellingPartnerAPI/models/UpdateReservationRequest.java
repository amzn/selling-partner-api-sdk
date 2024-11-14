/*
 * Selling Partner API for Services
 * With the Services API, you can build applications that help service providers get and modify their service orders and manage their resources.
 *
 * OpenAPI spec version: v1
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */

package com.amazon.SellingPartnerAPI.models;

import java.util.Objects;
import java.util.Arrays;
import com.amazon.SellingPartnerAPI.models.Reservation;
import com.google.gson.TypeAdapter;
import com.google.gson.annotations.JsonAdapter;
import com.google.gson.annotations.SerializedName;
import com.google.gson.stream.JsonReader;
import com.google.gson.stream.JsonWriter;
import io.swagger.v3.oas.annotations.media.Schema;
import java.io.IOException;
/**
 * Request schema for the &#x60;updateReservation&#x60; operation.
 */
@Schema(description = "Request schema for the `updateReservation` operation.")


public class UpdateReservationRequest {
  @SerializedName("resourceId")
  private String resourceId = null;

  @SerializedName("reservation")
  private Reservation reservation = null;

  public UpdateReservationRequest resourceId(String resourceId) {
    this.resourceId = resourceId;
    return this;
  }

   /**
   * Resource (store) identifier.
   * @return resourceId
  **/
  @Schema(required = true, description = "Resource (store) identifier.")
  public String getResourceId() {
    return resourceId;
  }

  public void setResourceId(String resourceId) {
    this.resourceId = resourceId;
  }

  public UpdateReservationRequest reservation(Reservation reservation) {
    this.reservation = reservation;
    return this;
  }

   /**
   * Get reservation
   * @return reservation
  **/
  @Schema(required = true, description = "")
  public Reservation getReservation() {
    return reservation;
  }

  public void setReservation(Reservation reservation) {
    this.reservation = reservation;
  }


  @Override
  public boolean equals(java.lang.Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    UpdateReservationRequest updateReservationRequest = (UpdateReservationRequest) o;
    return Objects.equals(this.resourceId, updateReservationRequest.resourceId) &&
        Objects.equals(this.reservation, updateReservationRequest.reservation);
  }

  @Override
  public int hashCode() {
    return Objects.hash(resourceId, reservation);
  }


  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class UpdateReservationRequest {\n");
    
    sb.append("    resourceId: ").append(toIndentedString(resourceId)).append("\n");
    sb.append("    reservation: ").append(toIndentedString(reservation)).append("\n");
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
