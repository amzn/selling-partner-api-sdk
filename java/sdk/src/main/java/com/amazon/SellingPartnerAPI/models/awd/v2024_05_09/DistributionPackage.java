/*
 * The Selling Partner API for Amazon Warehousing and Distribution
 * The Selling Partner API for Amazon Warehousing and Distribution (AWD) provides programmatic access to information about AWD shipments and inventory. 
 *
 * OpenAPI spec version: 2024-05-09
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */

package com.amazon.SellingPartnerAPI.models.awd.v2024_05_09;

import java.util.Objects;
import java.util.Arrays;
import com.amazon.SellingPartnerAPI.models.awd.v2024_05_09.DistributionPackageContents;
import com.amazon.SellingPartnerAPI.models.awd.v2024_05_09.DistributionPackageType;
import com.amazon.SellingPartnerAPI.models.awd.v2024_05_09.MeasurementData;
import com.google.gson.TypeAdapter;
import com.google.gson.annotations.JsonAdapter;
import com.google.gson.annotations.SerializedName;
import com.google.gson.stream.JsonReader;
import com.google.gson.stream.JsonWriter;
import io.swagger.v3.oas.annotations.media.Schema;
import java.io.IOException;
/**
 * Represents an AWD distribution package.
 */
@Schema(description = "Represents an AWD distribution package.")


public class DistributionPackage {
  @SerializedName("contents")
  private DistributionPackageContents contents = null;

  @SerializedName("measurements")
  private MeasurementData measurements = null;

  @SerializedName("type")
  private DistributionPackageType type = null;

  public DistributionPackage contents(DistributionPackageContents contents) {
    this.contents = contents;
    return this;
  }

   /**
   * Get contents
   * @return contents
  **/
  @Schema(required = true, description = "")
  public DistributionPackageContents getContents() {
    return contents;
  }

  public void setContents(DistributionPackageContents contents) {
    this.contents = contents;
  }

  public DistributionPackage measurements(MeasurementData measurements) {
    this.measurements = measurements;
    return this;
  }

   /**
   * Get measurements
   * @return measurements
  **/
  @Schema(required = true, description = "")
  public MeasurementData getMeasurements() {
    return measurements;
  }

  public void setMeasurements(MeasurementData measurements) {
    this.measurements = measurements;
  }

  public DistributionPackage type(DistributionPackageType type) {
    this.type = type;
    return this;
  }

   /**
   * Get type
   * @return type
  **/
  @Schema(required = true, description = "")
  public DistributionPackageType getType() {
    return type;
  }

  public void setType(DistributionPackageType type) {
    this.type = type;
  }


  @Override
  public boolean equals(java.lang.Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    DistributionPackage distributionPackage = (DistributionPackage) o;
    return Objects.equals(this.contents, distributionPackage.contents) &&
        Objects.equals(this.measurements, distributionPackage.measurements) &&
        Objects.equals(this.type, distributionPackage.type);
  }

  @Override
  public int hashCode() {
    return Objects.hash(contents, measurements, type);
  }


  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class DistributionPackage {\n");
    
    sb.append("    contents: ").append(toIndentedString(contents)).append("\n");
    sb.append("    measurements: ").append(toIndentedString(measurements)).append("\n");
    sb.append("    type: ").append(toIndentedString(type)).append("\n");
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
