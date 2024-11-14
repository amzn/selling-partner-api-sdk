/*
 * Vendor Shipments v1
 * The Selling Partner API for Retail Procurement Shipments provides programmatic access to retail shipping data for vendors.
 *
 * OpenAPI spec version: v1
 * 
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
/**
 * Duration after manufacturing date during which the product is valid for consumption.
 */
@Schema(description = "Duration after manufacturing date during which the product is valid for consumption.")


public class Duration {
  /**
   * Unit for duration.
   */
  @JsonAdapter(DurationUnitEnum.Adapter.class)
  public enum DurationUnitEnum {
    @SerializedName("Days")
    DAYS("Days"),
    @SerializedName("Months")
    MONTHS("Months");

    private String value;

    DurationUnitEnum(String value) {
      this.value = value;
    }
    public String getValue() {
      return value;
    }

    @Override
    public String toString() {
      return String.valueOf(value);
    }
    public static DurationUnitEnum fromValue(String input) {
      for (DurationUnitEnum b : DurationUnitEnum.values()) {
        if (b.value.equals(input)) {
          return b;
        }
      }
      return null;
    }
    public static class Adapter extends TypeAdapter<DurationUnitEnum> {
      @Override
      public void write(final JsonWriter jsonWriter, final DurationUnitEnum enumeration) throws IOException {
        jsonWriter.value(String.valueOf(enumeration.getValue()));
      }

      @Override
      public DurationUnitEnum read(final JsonReader jsonReader) throws IOException {
        Object value = jsonReader.nextString();
        return DurationUnitEnum.fromValue((String)(value));
      }
    }
  }  @SerializedName("durationUnit")
  private DurationUnitEnum durationUnit = null;

  @SerializedName("durationValue")
  private Integer durationValue = null;

  public Duration durationUnit(DurationUnitEnum durationUnit) {
    this.durationUnit = durationUnit;
    return this;
  }

   /**
   * Unit for duration.
   * @return durationUnit
  **/
  @Schema(required = true, description = "Unit for duration.")
  public DurationUnitEnum getDurationUnit() {
    return durationUnit;
  }

  public void setDurationUnit(DurationUnitEnum durationUnit) {
    this.durationUnit = durationUnit;
  }

  public Duration durationValue(Integer durationValue) {
    this.durationValue = durationValue;
    return this;
  }

   /**
   * Value for the duration in terms of the durationUnit.
   * @return durationValue
  **/
  @Schema(required = true, description = "Value for the duration in terms of the durationUnit.")
  public Integer getDurationValue() {
    return durationValue;
  }

  public void setDurationValue(Integer durationValue) {
    this.durationValue = durationValue;
  }


  @Override
  public boolean equals(java.lang.Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    Duration duration = (Duration) o;
    return Objects.equals(this.durationUnit, duration.durationUnit) &&
        Objects.equals(this.durationValue, duration.durationValue);
  }

  @Override
  public int hashCode() {
    return Objects.hash(durationUnit, durationValue);
  }


  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class Duration {\n");
    
    sb.append("    durationUnit: ").append(toIndentedString(durationUnit)).append("\n");
    sb.append("    durationValue: ").append(toIndentedString(durationValue)).append("\n");
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
