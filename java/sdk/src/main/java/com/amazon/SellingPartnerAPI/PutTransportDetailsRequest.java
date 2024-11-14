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

package com.amazon.SellingPartnerAPI;

import java.util.Objects;
import java.util.Arrays;
import com.amazon.SellingPartnerAPI.ShipmentType;
import com.amazon.SellingPartnerAPI.TransportDetailInput;
import com.google.gson.TypeAdapter;
import com.google.gson.annotations.JsonAdapter;
import com.google.gson.annotations.SerializedName;
import com.google.gson.stream.JsonReader;
import com.google.gson.stream.JsonWriter;
import io.swagger.v3.oas.annotations.media.Schema;
import java.io.IOException;
/**
 * The request schema for a putTransportDetails operation.
 */
@Schema(description = "The request schema for a putTransportDetails operation.")
@javax.annotation.Generated(value = "io.swagger.codegen.v3.generators.java.JavaClientCodegen", date = "2024-11-14T09:08:32.346564Z[Etc/UTC]")

public class PutTransportDetailsRequest {
  @SerializedName("IsPartnered")
  private Boolean isPartnered = null;

  @SerializedName("ShipmentType")
  private ShipmentType shipmentType = null;

  @SerializedName("TransportDetails")
  private TransportDetailInput transportDetails = null;

  public PutTransportDetailsRequest isPartnered(Boolean isPartnered) {
    this.isPartnered = isPartnered;
    return this;
  }

   /**
   * Indicates whether a putTransportDetails request is for an Amazon-partnered carrier.
   * @return isPartnered
  **/
  @Schema(required = true, description = "Indicates whether a putTransportDetails request is for an Amazon-partnered carrier.")
  public Boolean isIsPartnered() {
    return isPartnered;
  }

  public void setIsPartnered(Boolean isPartnered) {
    this.isPartnered = isPartnered;
  }

  public PutTransportDetailsRequest shipmentType(ShipmentType shipmentType) {
    this.shipmentType = shipmentType;
    return this;
  }

   /**
   * Get shipmentType
   * @return shipmentType
  **/
  @Schema(required = true, description = "")
  public ShipmentType getShipmentType() {
    return shipmentType;
  }

  public void setShipmentType(ShipmentType shipmentType) {
    this.shipmentType = shipmentType;
  }

  public PutTransportDetailsRequest transportDetails(TransportDetailInput transportDetails) {
    this.transportDetails = transportDetails;
    return this;
  }

   /**
   * Get transportDetails
   * @return transportDetails
  **/
  @Schema(required = true, description = "")
  public TransportDetailInput getTransportDetails() {
    return transportDetails;
  }

  public void setTransportDetails(TransportDetailInput transportDetails) {
    this.transportDetails = transportDetails;
  }


  @Override
  public boolean equals(java.lang.Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    PutTransportDetailsRequest putTransportDetailsRequest = (PutTransportDetailsRequest) o;
    return Objects.equals(this.isPartnered, putTransportDetailsRequest.isPartnered) &&
        Objects.equals(this.shipmentType, putTransportDetailsRequest.shipmentType) &&
        Objects.equals(this.transportDetails, putTransportDetailsRequest.transportDetails);
  }

  @Override
  public int hashCode() {
    return Objects.hash(isPartnered, shipmentType, transportDetails);
  }


  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class PutTransportDetailsRequest {\n");
    
    sb.append("    isPartnered: ").append(toIndentedString(isPartnered)).append("\n");
    sb.append("    shipmentType: ").append(toIndentedString(shipmentType)).append("\n");
    sb.append("    transportDetails: ").append(toIndentedString(transportDetails)).append("\n");
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
