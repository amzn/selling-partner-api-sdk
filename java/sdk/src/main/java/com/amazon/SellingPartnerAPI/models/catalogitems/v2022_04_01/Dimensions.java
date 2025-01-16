/*
 * Catalog Items v2022-04-01
 * The Selling Partner API for Catalog Items provides programmatic access to information about items in the Amazon catalog.  For more information, refer to the [Catalog Items API Use Case Guide](doc:catalog-items-api-v2022-04-01-use-case-guide).
 *
 * OpenAPI spec version: 2022-04-01
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */

package com.amazon.SellingPartnerAPI.models.catalogitems.v2022_04_01;

import java.util.Objects;
import java.util.Arrays;
import com.amazon.SellingPartnerAPI.models.catalogitems.v2022_04_01.Dimension;
import com.google.gson.TypeAdapter;
import com.google.gson.annotations.JsonAdapter;
import com.google.gson.annotations.SerializedName;
import com.google.gson.stream.JsonReader;
import com.google.gson.stream.JsonWriter;
import io.swagger.v3.oas.annotations.media.Schema;
import java.io.IOException;
/**
 * Dimensions of an Amazon catalog item or item in its packaging.
 */
@Schema(description = "Dimensions of an Amazon catalog item or item in its packaging.")


public class Dimensions {
  @SerializedName("height")
  private Dimension height = null;

  @SerializedName("length")
  private Dimension length = null;

  @SerializedName("weight")
  private Dimension weight = null;

  @SerializedName("width")
  private Dimension width = null;

  public Dimensions height(Dimension height) {
    this.height = height;
    return this;
  }

   /**
   * Get height
   * @return height
  **/
  @Schema(description = "")
  public Dimension getHeight() {
    return height;
  }

  public void setHeight(Dimension height) {
    this.height = height;
  }

  public Dimensions length(Dimension length) {
    this.length = length;
    return this;
  }

   /**
   * Get length
   * @return length
  **/
  @Schema(description = "")
  public Dimension getLength() {
    return length;
  }

  public void setLength(Dimension length) {
    this.length = length;
  }

  public Dimensions weight(Dimension weight) {
    this.weight = weight;
    return this;
  }

   /**
   * Get weight
   * @return weight
  **/
  @Schema(description = "")
  public Dimension getWeight() {
    return weight;
  }

  public void setWeight(Dimension weight) {
    this.weight = weight;
  }

  public Dimensions width(Dimension width) {
    this.width = width;
    return this;
  }

   /**
   * Get width
   * @return width
  **/
  @Schema(description = "")
  public Dimension getWidth() {
    return width;
  }

  public void setWidth(Dimension width) {
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
    Dimensions dimensions = (Dimensions) o;
    return Objects.equals(this.height, dimensions.height) &&
        Objects.equals(this.length, dimensions.length) &&
        Objects.equals(this.weight, dimensions.weight) &&
        Objects.equals(this.width, dimensions.width);
  }

  @Override
  public int hashCode() {
    return Objects.hash(height, length, weight, width);
  }


  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class Dimensions {\n");
    
    sb.append("    height: ").append(toIndentedString(height)).append("\n");
    sb.append("    length: ").append(toIndentedString(length)).append("\n");
    sb.append("    weight: ").append(toIndentedString(weight)).append("\n");
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
