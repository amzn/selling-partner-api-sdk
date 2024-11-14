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
import com.amazon.SellingPartnerAPI.UnmanifestedShipmentLocationList;
import com.google.gson.TypeAdapter;
import com.google.gson.annotations.JsonAdapter;
import com.google.gson.annotations.SerializedName;
import com.google.gson.stream.JsonReader;
import com.google.gson.stream.JsonWriter;
import io.swagger.v3.oas.annotations.media.Schema;
import java.io.IOException;
/**
 * UnmanifestedCarrierInformation like carrierId CarrierName and Location
 */
@Schema(description = "UnmanifestedCarrierInformation like carrierId CarrierName and Location")
@javax.annotation.Generated(value = "io.swagger.codegen.v3.generators.java.JavaClientCodegen", date = "2024-11-14T09:09:56.733862Z[Etc/UTC]")

public class UnmanifestedCarrierInformation {
  @SerializedName("carrierId")
  private String carrierId = null;

  @SerializedName("carrierName")
  private String carrierName = null;

  @SerializedName("unmanifestedShipmentLocationList")
  private UnmanifestedShipmentLocationList unmanifestedShipmentLocationList = null;

  public UnmanifestedCarrierInformation carrierId(String carrierId) {
    this.carrierId = carrierId;
    return this;
  }

   /**
   * Get carrierId
   * @return carrierId
  **/
  @Schema(description = "")
  public String getCarrierId() {
    return carrierId;
  }

  public void setCarrierId(String carrierId) {
    this.carrierId = carrierId;
  }

  public UnmanifestedCarrierInformation carrierName(String carrierName) {
    this.carrierName = carrierName;
    return this;
  }

   /**
   * Get carrierName
   * @return carrierName
  **/
  @Schema(description = "")
  public String getCarrierName() {
    return carrierName;
  }

  public void setCarrierName(String carrierName) {
    this.carrierName = carrierName;
  }

  public UnmanifestedCarrierInformation unmanifestedShipmentLocationList(UnmanifestedShipmentLocationList unmanifestedShipmentLocationList) {
    this.unmanifestedShipmentLocationList = unmanifestedShipmentLocationList;
    return this;
  }

   /**
   * Get unmanifestedShipmentLocationList
   * @return unmanifestedShipmentLocationList
  **/
  @Schema(description = "")
  public UnmanifestedShipmentLocationList getUnmanifestedShipmentLocationList() {
    return unmanifestedShipmentLocationList;
  }

  public void setUnmanifestedShipmentLocationList(UnmanifestedShipmentLocationList unmanifestedShipmentLocationList) {
    this.unmanifestedShipmentLocationList = unmanifestedShipmentLocationList;
  }


  @Override
  public boolean equals(java.lang.Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    UnmanifestedCarrierInformation unmanifestedCarrierInformation = (UnmanifestedCarrierInformation) o;
    return Objects.equals(this.carrierId, unmanifestedCarrierInformation.carrierId) &&
        Objects.equals(this.carrierName, unmanifestedCarrierInformation.carrierName) &&
        Objects.equals(this.unmanifestedShipmentLocationList, unmanifestedCarrierInformation.unmanifestedShipmentLocationList);
  }

  @Override
  public int hashCode() {
    return Objects.hash(carrierId, carrierName, unmanifestedShipmentLocationList);
  }


  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class UnmanifestedCarrierInformation {\n");
    
    sb.append("    carrierId: ").append(toIndentedString(carrierId)).append("\n");
    sb.append("    carrierName: ").append(toIndentedString(carrierName)).append("\n");
    sb.append("    unmanifestedShipmentLocationList: ").append(toIndentedString(unmanifestedShipmentLocationList)).append("\n");
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
