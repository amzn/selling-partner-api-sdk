/*
 * Selling Partner APIs for Fulfillment Outbound
 * The Selling Partner API for Fulfillment Outbound lets you create applications that help a seller fulfill Multi-Channel Fulfillment orders using their inventory in Amazon's fulfillment network. You can get information on both potential and existing fulfillment orders.
 *
 * OpenAPI spec version: 2020-07-01
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
 * A quantity based on unit of measure.
 */
@Schema(description = "A quantity based on unit of measure.")
@javax.annotation.Generated(value = "io.swagger.codegen.v3.generators.java.JavaClientCodegen", date = "2024-11-14T09:08:45.340222Z[Etc/UTC]")

public class Amount {
  /**
   * The unit of measure for the amount.
   */
  @JsonAdapter(UnitOfMeasureEnum.Adapter.class)
  public enum UnitOfMeasureEnum {
    @SerializedName("Eaches")
    EACHES("Eaches");

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

  @SerializedName("value")
  private String value = null;

  public Amount unitOfMeasure(UnitOfMeasureEnum unitOfMeasure) {
    this.unitOfMeasure = unitOfMeasure;
    return this;
  }

   /**
   * The unit of measure for the amount.
   * @return unitOfMeasure
  **/
  @Schema(required = true, description = "The unit of measure for the amount.")
  public UnitOfMeasureEnum getUnitOfMeasure() {
    return unitOfMeasure;
  }

  public void setUnitOfMeasure(UnitOfMeasureEnum unitOfMeasure) {
    this.unitOfMeasure = unitOfMeasure;
  }

  public Amount value(String value) {
    this.value = value;
    return this;
  }

   /**
   * Get value
   * @return value
  **/
  @Schema(required = true, description = "")
  public String getValue() {
    return value;
  }

  public void setValue(String value) {
    this.value = value;
  }


  @Override
  public boolean equals(java.lang.Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    Amount amount = (Amount) o;
    return Objects.equals(this.unitOfMeasure, amount.unitOfMeasure) &&
        Objects.equals(this.value, amount.value);
  }

  @Override
  public int hashCode() {
    return Objects.hash(unitOfMeasure, value);
  }


  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class Amount {\n");
    
    sb.append("    unitOfMeasure: ").append(toIndentedString(unitOfMeasure)).append("\n");
    sb.append("    value: ").append(toIndentedString(value)).append("\n");
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
