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

package com.amazon.SellingPartnerAPI;

import java.util.Objects;
import java.util.Arrays;
import com.google.gson.TypeAdapter;
import com.google.gson.annotations.JsonAdapter;
import com.google.gson.annotations.SerializedName;
import com.google.gson.stream.JsonReader;
import com.google.gson.stream.JsonWriter;
import io.swagger.v3.oas.annotations.media.Schema;
import java.io.IOException;
/**
 * Small Parcel Delivery (SPD) tracking items input information.
 */
@Schema(description = "Small Parcel Delivery (SPD) tracking items input information.")
@javax.annotation.Generated(value = "io.swagger.codegen.v3.generators.java.JavaClientCodegen", date = "2024-11-14T09:08:39.223252Z[Etc/UTC]")

public class SpdTrackingItemInput {
  @SerializedName("boxId")
  private String boxId = null;

  @SerializedName("trackingId")
  private String trackingId = null;

  public SpdTrackingItemInput boxId(String boxId) {
    this.boxId = boxId;
    return this;
  }

   /**
   * The ID provided by Amazon that identifies a given box. This ID is comprised of the external shipment ID (which is generated after transportation has been confirmed) and the index of the box.
   * @return boxId
  **/
  @Schema(required = true, description = "The ID provided by Amazon that identifies a given box. This ID is comprised of the external shipment ID (which is generated after transportation has been confirmed) and the index of the box.")
  public String getBoxId() {
    return boxId;
  }

  public void setBoxId(String boxId) {
    this.boxId = boxId;
  }

  public SpdTrackingItemInput trackingId(String trackingId) {
    this.trackingId = trackingId;
    return this;
  }

   /**
   * The tracking Id associated with each box in a non-Amazon partnered Small Parcel Delivery (SPD) shipment. The seller must provide this information.
   * @return trackingId
  **/
  @Schema(required = true, description = "The tracking Id associated with each box in a non-Amazon partnered Small Parcel Delivery (SPD) shipment. The seller must provide this information.")
  public String getTrackingId() {
    return trackingId;
  }

  public void setTrackingId(String trackingId) {
    this.trackingId = trackingId;
  }


  @Override
  public boolean equals(java.lang.Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    SpdTrackingItemInput spdTrackingItemInput = (SpdTrackingItemInput) o;
    return Objects.equals(this.boxId, spdTrackingItemInput.boxId) &&
        Objects.equals(this.trackingId, spdTrackingItemInput.trackingId);
  }

  @Override
  public int hashCode() {
    return Objects.hash(boxId, trackingId);
  }


  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class SpdTrackingItemInput {\n");
    
    sb.append("    boxId: ").append(toIndentedString(boxId)).append("\n");
    sb.append("    trackingId: ").append(toIndentedString(trackingId)).append("\n");
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
