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
import com.amazon.SellingPartnerAPI.PackageStatus;
import com.google.gson.TypeAdapter;
import com.google.gson.annotations.JsonAdapter;
import com.google.gson.annotations.SerializedName;
import com.google.gson.stream.JsonReader;
import com.google.gson.stream.JsonWriter;
import io.swagger.v3.oas.annotations.media.Schema;
import java.io.IOException;
/**
 * Carrier, tracking number, and status information for the package.
 */
@Schema(description = "Carrier, tracking number, and status information for the package.")
@javax.annotation.Generated(value = "io.swagger.codegen.v3.generators.java.JavaClientCodegen", date = "2024-11-14T09:08:32.346564Z[Etc/UTC]")

public class NonPartneredSmallParcelPackageOutput {
  @SerializedName("CarrierName")
  private String carrierName = null;

  @SerializedName("TrackingId")
  private String trackingId = null;

  @SerializedName("PackageStatus")
  private PackageStatus packageStatus = null;

  public NonPartneredSmallParcelPackageOutput carrierName(String carrierName) {
    this.carrierName = carrierName;
    return this;
  }

   /**
   * The carrier that you are using for the inbound shipment.
   * @return carrierName
  **/
  @Schema(required = true, description = "The carrier that you are using for the inbound shipment.")
  public String getCarrierName() {
    return carrierName;
  }

  public void setCarrierName(String carrierName) {
    this.carrierName = carrierName;
  }

  public NonPartneredSmallParcelPackageOutput trackingId(String trackingId) {
    this.trackingId = trackingId;
    return this;
  }

   /**
   * Get trackingId
   * @return trackingId
  **/
  @Schema(required = true, description = "")
  public String getTrackingId() {
    return trackingId;
  }

  public void setTrackingId(String trackingId) {
    this.trackingId = trackingId;
  }

  public NonPartneredSmallParcelPackageOutput packageStatus(PackageStatus packageStatus) {
    this.packageStatus = packageStatus;
    return this;
  }

   /**
   * Get packageStatus
   * @return packageStatus
  **/
  @Schema(required = true, description = "")
  public PackageStatus getPackageStatus() {
    return packageStatus;
  }

  public void setPackageStatus(PackageStatus packageStatus) {
    this.packageStatus = packageStatus;
  }


  @Override
  public boolean equals(java.lang.Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    NonPartneredSmallParcelPackageOutput nonPartneredSmallParcelPackageOutput = (NonPartneredSmallParcelPackageOutput) o;
    return Objects.equals(this.carrierName, nonPartneredSmallParcelPackageOutput.carrierName) &&
        Objects.equals(this.trackingId, nonPartneredSmallParcelPackageOutput.trackingId) &&
        Objects.equals(this.packageStatus, nonPartneredSmallParcelPackageOutput.packageStatus);
  }

  @Override
  public int hashCode() {
    return Objects.hash(carrierName, trackingId, packageStatus);
  }


  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class NonPartneredSmallParcelPackageOutput {\n");
    
    sb.append("    carrierName: ").append(toIndentedString(carrierName)).append("\n");
    sb.append("    trackingId: ").append(toIndentedString(trackingId)).append("\n");
    sb.append("    packageStatus: ").append(toIndentedString(packageStatus)).append("\n");
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
