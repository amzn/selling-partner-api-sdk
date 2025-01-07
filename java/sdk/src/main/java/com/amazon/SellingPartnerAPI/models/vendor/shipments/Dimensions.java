/*
 * Selling Partner API for Retail Procurement Shipments
 * The Selling Partner API for Retail Procurement Shipments provides programmatic access to retail shipping data for vendors.
 *
 * OpenAPI spec version: v1
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */

package com.amazon.SellingPartnerAPI.models.vendor.shipments;

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
 * Physical dimensional measurements of a container.
 */
@Schema(description = "Physical dimensional measurements of a container.")


public class Dimensions {
  @SerializedName("length")
  private String length = null;

  @SerializedName("width")
  private String width = null;

  @SerializedName("height")
  private String height = null;

  /**
   * The unit of measure for dimensions.
   */
  @JsonAdapter(UnitOfMeasureEnum.Adapter.class)
  public enum UnitOfMeasureEnum {
    @SerializedName("In")
    IN("In"),
    @SerializedName("Ft")
    FT("Ft"),
    @SerializedName("Meter")
    METER("Meter"),
    @SerializedName("Yard")
    YARD("Yard");

    private String value;

    UnitOfMeasureEnum(String value) {
      this.value = value;
    }
    public String getValue() {
      return value;
    }

    @Override
    public String toString() {
      return String.valueOf(value);
    }
    public static UnitOfMeasureEnum fromValue(String input) {
      for (UnitOfMeasureEnum b : UnitOfMeasureEnum.values()) {
        if (b.value.equals(input)) {
          return b;
        }
      }
      return null;
    }
    public static class Adapter extends TypeAdapter<UnitOfMeasureEnum> {
      @Override
      public void write(final JsonWriter jsonWriter, final UnitOfMeasureEnum enumeration) throws IOException {
        jsonWriter.value(String.valueOf(enumeration.getValue()));
      }

      @Override
      public UnitOfMeasureEnum read(final JsonReader jsonReader) throws IOException {
        Object value = jsonReader.nextString();
        return UnitOfMeasureEnum.fromValue((String)(value));
      }
    }
  }  @SerializedName("unitOfMeasure")
  private UnitOfMeasureEnum unitOfMeasure = null;

  public Dimensions length(String length) {
    this.length = length;
    return this;
  }

   /**
   * Get length
   * @return length
  **/
  @Schema(required = true, description = "")
  public String getLength() {
    return length;
  }

  public void setLength(String length) {
    this.length = length;
  }

  public Dimensions width(String width) {
    this.width = width;
    return this;
  }

   /**
   * Get width
   * @return width
  **/
  @Schema(required = true, description = "")
  public String getWidth() {
    return width;
  }

  public void setWidth(String width) {
    this.width = width;
  }

  public Dimensions height(String height) {
    this.height = height;
    return this;
  }

   /**
   * Get height
   * @return height
  **/
  @Schema(required = true, description = "")
  public String getHeight() {
    return height;
  }

  public void setHeight(String height) {
    this.height = height;
  }

  public Dimensions unitOfMeasure(UnitOfMeasureEnum unitOfMeasure) {
    this.unitOfMeasure = unitOfMeasure;
    return this;
  }

   /**
   * The unit of measure for dimensions.
   * @return unitOfMeasure
  **/
  @Schema(required = true, description = "The unit of measure for dimensions.")
  public UnitOfMeasureEnum getUnitOfMeasure() {
    return unitOfMeasure;
  }

  public void setUnitOfMeasure(UnitOfMeasureEnum unitOfMeasure) {
    this.unitOfMeasure = unitOfMeasure;
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
    return Objects.equals(this.length, dimensions.length) &&
        Objects.equals(this.width, dimensions.width) &&
        Objects.equals(this.height, dimensions.height) &&
        Objects.equals(this.unitOfMeasure, dimensions.unitOfMeasure);
  }

  @Override
  public int hashCode() {
    return Objects.hash(length, width, height, unitOfMeasure);
  }


  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class Dimensions {\n");
    
    sb.append("    length: ").append(toIndentedString(length)).append("\n");
    sb.append("    width: ").append(toIndentedString(width)).append("\n");
    sb.append("    height: ").append(toIndentedString(height)).append("\n");
    sb.append("    unitOfMeasure: ").append(toIndentedString(unitOfMeasure)).append("\n");
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
