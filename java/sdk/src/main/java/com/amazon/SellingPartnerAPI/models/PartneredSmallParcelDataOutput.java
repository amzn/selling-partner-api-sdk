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

package com.amazon.SellingPartnerAPI.models;

import java.util.Objects;
import java.util.Arrays;
import com.amazon.SellingPartnerAPI.models.PartneredEstimate;
import com.amazon.SellingPartnerAPI.models.PartneredSmallParcelPackageOutputList;
import com.google.gson.TypeAdapter;
import com.google.gson.annotations.JsonAdapter;
import com.google.gson.annotations.SerializedName;
import com.google.gson.stream.JsonReader;
import com.google.gson.stream.JsonWriter;
import io.swagger.v3.oas.annotations.media.Schema;
import java.io.IOException;
/**
 * Information returned by Amazon about a Small Parcel shipment by an Amazon-partnered carrier.
 */
@Schema(description = "Information returned by Amazon about a Small Parcel shipment by an Amazon-partnered carrier.")


public class PartneredSmallParcelDataOutput {
  @SerializedName("PackageList")
  private PartneredSmallParcelPackageOutputList packageList = null;

  @SerializedName("PartneredEstimate")
  private PartneredEstimate partneredEstimate = null;

  public PartneredSmallParcelDataOutput packageList(PartneredSmallParcelPackageOutputList packageList) {
    this.packageList = packageList;
    return this;
  }

   /**
   * Get packageList
   * @return packageList
  **/
  @Schema(required = true, description = "")
  public PartneredSmallParcelPackageOutputList getPackageList() {
    return packageList;
  }

  public void setPackageList(PartneredSmallParcelPackageOutputList packageList) {
    this.packageList = packageList;
  }

  public PartneredSmallParcelDataOutput partneredEstimate(PartneredEstimate partneredEstimate) {
    this.partneredEstimate = partneredEstimate;
    return this;
  }

   /**
   * Get partneredEstimate
   * @return partneredEstimate
  **/
  @Schema(description = "")
  public PartneredEstimate getPartneredEstimate() {
    return partneredEstimate;
  }

  public void setPartneredEstimate(PartneredEstimate partneredEstimate) {
    this.partneredEstimate = partneredEstimate;
  }


  @Override
  public boolean equals(java.lang.Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    PartneredSmallParcelDataOutput partneredSmallParcelDataOutput = (PartneredSmallParcelDataOutput) o;
    return Objects.equals(this.packageList, partneredSmallParcelDataOutput.packageList) &&
        Objects.equals(this.partneredEstimate, partneredSmallParcelDataOutput.partneredEstimate);
  }

  @Override
  public int hashCode() {
    return Objects.hash(packageList, partneredEstimate);
  }


  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class PartneredSmallParcelDataOutput {\n");
    
    sb.append("    packageList: ").append(toIndentedString(packageList)).append("\n");
    sb.append("    partneredEstimate: ").append(toIndentedString(partneredEstimate)).append("\n");
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
