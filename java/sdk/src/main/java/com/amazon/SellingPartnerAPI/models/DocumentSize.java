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

package com.amazon.SellingPartnerAPI.models;

import java.util.Objects;
import java.util.Arrays;
import com.google.gson.TypeAdapter;
import com.google.gson.annotations.JsonAdapter;
import com.google.gson.annotations.SerializedName;
import com.google.gson.stream.JsonReader;
import com.google.gson.stream.JsonWriter;
import io.swagger.v3.oas.annotations.media.Schema;
import java.io.IOException;
import java.math.BigDecimal;
/**
 * The size dimensions of the label.
 */
@Schema(description = "The size dimensions of the label.")


public class DocumentSize {
  @SerializedName("width")
  private BigDecimal width = null;

  @SerializedName("length")
  private BigDecimal length = null;

  /**
   * The unit of measurement.
   */
  @JsonAdapter(UnitEnum.Adapter.class)
  public enum UnitEnum {
    @SerializedName("INCH")
    INCH("INCH"),
    @SerializedName("CENTIMETER")
    CENTIMETER("CENTIMETER");

    private String value;

    UnitEnum(String value) {
      this.value = value;
    }
    public String getValue() {
      return value;
    }

    @Override
    public String toString() {
      return String.valueOf(value);
    }
    public static UnitEnum fromValue(String input) {
      for (UnitEnum b : UnitEnum.values()) {
        if (b.value.equals(input)) {
          return b;
        }
      }
      return null;
    }
    public static class Adapter extends TypeAdapter<UnitEnum> {
      @Override
      public void write(final JsonWriter jsonWriter, final UnitEnum enumeration) throws IOException {
        jsonWriter.value(String.valueOf(enumeration.getValue()));
      }

      @Override
      public UnitEnum read(final JsonReader jsonReader) throws IOException {
        Object value = jsonReader.nextString();
        return UnitEnum.fromValue((String)(value));
      }
    }
  }  @SerializedName("unit")
  private UnitEnum unit = null;

  public DocumentSize width(BigDecimal width) {
    this.width = width;
    return this;
  }

   /**
   * The width of the document measured in the units specified.
   * @return width
  **/
  @Schema(required = true, description = "The width of the document measured in the units specified.")
  public BigDecimal getWidth() {
    return width;
  }

  public void setWidth(BigDecimal width) {
    this.width = width;
  }

  public DocumentSize length(BigDecimal length) {
    this.length = length;
    return this;
  }

   /**
   * The length of the document measured in the units specified.
   * @return length
  **/
  @Schema(required = true, description = "The length of the document measured in the units specified.")
  public BigDecimal getLength() {
    return length;
  }

  public void setLength(BigDecimal length) {
    this.length = length;
  }

  public DocumentSize unit(UnitEnum unit) {
    this.unit = unit;
    return this;
  }

   /**
   * The unit of measurement.
   * @return unit
  **/
  @Schema(required = true, description = "The unit of measurement.")
  public UnitEnum getUnit() {
    return unit;
  }

  public void setUnit(UnitEnum unit) {
    this.unit = unit;
  }


  @Override
  public boolean equals(java.lang.Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    DocumentSize documentSize = (DocumentSize) o;
    return Objects.equals(this.width, documentSize.width) &&
        Objects.equals(this.length, documentSize.length) &&
        Objects.equals(this.unit, documentSize.unit);
  }

  @Override
  public int hashCode() {
    return Objects.hash(width, length, unit);
  }


  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class DocumentSize {\n");
    
    sb.append("    width: ").append(toIndentedString(width)).append("\n");
    sb.append("    length: ").append(toIndentedString(length)).append("\n");
    sb.append("    unit: ").append(toIndentedString(unit)).append("\n");
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
