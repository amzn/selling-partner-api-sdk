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
import com.amazon.SellingPartnerAPI.models.awd.v2024_05_09.DimensionUnitOfMeasurement;
import com.google.gson.TypeAdapter;
import com.google.gson.annotations.JsonAdapter;
import com.google.gson.annotations.SerializedName;
import com.google.gson.stream.JsonReader;
import com.google.gson.stream.JsonWriter;
import io.swagger.v3.oas.annotations.media.Schema;
import java.io.IOException;
/**
 * Dimensions of the package.
 */
@Schema(description = "Dimensions of the package.")


public class PackageDimensions {
  @SerializedName("height")
  private Double height = null;

  @SerializedName("length")
  private Double length = null;

  @SerializedName("unitOfMeasurement")
  private DimensionUnitOfMeasurement unitOfMeasurement = null;

  @SerializedName("width")
  private Double width = null;

  public PackageDimensions height(Double height) {
    this.height = height;
    return this;
  }

   /**
   * Height of the package.
   * @return height
  **/
  @Schema(required = true, description = "Height of the package.")
  public Double getHeight() {
    return height;
  }

  public void setHeight(Double height) {
    this.height = height;
  }

  public PackageDimensions length(Double length) {
    this.length = length;
    return this;
  }

   /**
   * Length of the package.
   * @return length
  **/
  @Schema(required = true, description = "Length of the package.")
  public Double getLength() {
    return length;
  }

  public void setLength(Double length) {
    this.length = length;
  }

  public PackageDimensions unitOfMeasurement(DimensionUnitOfMeasurement unitOfMeasurement) {
    this.unitOfMeasurement = unitOfMeasurement;
    return this;
  }

   /**
   * Get unitOfMeasurement
   * @return unitOfMeasurement
  **/
  @Schema(required = true, description = "")
  public DimensionUnitOfMeasurement getUnitOfMeasurement() {
    return unitOfMeasurement;
  }

  public void setUnitOfMeasurement(DimensionUnitOfMeasurement unitOfMeasurement) {
    this.unitOfMeasurement = unitOfMeasurement;
  }

  public PackageDimensions width(Double width) {
    this.width = width;
    return this;
  }

   /**
   * Width of the package.
   * @return width
  **/
  @Schema(required = true, description = "Width of the package.")
  public Double getWidth() {
    return width;
  }

  public void setWidth(Double width) {
    this.width = width;
  }


  @Override
  public boolean equals(java.lang.Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    PackageDimensions packageDimensions = (PackageDimensions) o;
    return Objects.equals(this.height, packageDimensions.height) &&
        Objects.equals(this.length, packageDimensions.length) &&
        Objects.equals(this.unitOfMeasurement, packageDimensions.unitOfMeasurement) &&
        Objects.equals(this.width, packageDimensions.width);
  }

  @Override
  public int hashCode() {
    return Objects.hash(height, length, unitOfMeasurement, width);
  }


  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class PackageDimensions {\n");
    
    sb.append("    height: ").append(toIndentedString(height)).append("\n");
    sb.append("    length: ").append(toIndentedString(length)).append("\n");
    sb.append("    unitOfMeasurement: ").append(toIndentedString(unitOfMeasurement)).append("\n");
    sb.append("    width: ").append(toIndentedString(width)).append("\n");
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
