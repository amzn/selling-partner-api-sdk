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

package com.amazon.SellingPartnerAPI.models.vendor.shipments.v1;

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
 * The total weight of units that are sold by weight in a shipment.
 */
@Schema(description = "The total weight of units that are sold by weight in a shipment.")


public class TotalWeight {
  /**
   * The unit of measure for the weight of items that are ordered by cases and support pricing by weight.
   */
  @JsonAdapter(UnitOfMeasureEnum.Adapter.class)
  public enum UnitOfMeasureEnum {
    @SerializedName("POUNDS")
    POUNDS("POUNDS"),
    @SerializedName("OUNCES")
    OUNCES("OUNCES"),
    @SerializedName("GRAMS")
    GRAMS("GRAMS"),
    @SerializedName("KILOGRAMS")
    KILOGRAMS("KILOGRAMS");

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

  @SerializedName("amount")
  private String amount = null;

  public TotalWeight unitOfMeasure(UnitOfMeasureEnum unitOfMeasure) {
    this.unitOfMeasure = unitOfMeasure;
    return this;
  }

   /**
   * The unit of measure for the weight of items that are ordered by cases and support pricing by weight.
   * @return unitOfMeasure
  **/
  @Schema(required = true, description = "The unit of measure for the weight of items that are ordered by cases and support pricing by weight.")
  public UnitOfMeasureEnum getUnitOfMeasure() {
    return unitOfMeasure;
  }

  public void setUnitOfMeasure(UnitOfMeasureEnum unitOfMeasure) {
    this.unitOfMeasure = unitOfMeasure;
  }

  public TotalWeight amount(String amount) {
    this.amount = amount;
    return this;
  }

   /**
   * Get amount
   * @return amount
  **/
  @Schema(required = true, description = "")
  public String getAmount() {
    return amount;
  }

  public void setAmount(String amount) {
    this.amount = amount;
  }


  @Override
  public boolean equals(java.lang.Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    TotalWeight totalWeight = (TotalWeight) o;
    return Objects.equals(this.unitOfMeasure, totalWeight.unitOfMeasure) &&
        Objects.equals(this.amount, totalWeight.amount);
  }

  @Override
  public int hashCode() {
    return Objects.hash(unitOfMeasure, amount);
  }


  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class TotalWeight {\n");
    
    sb.append("    unitOfMeasure: ").append(toIndentedString(unitOfMeasure)).append("\n");
    sb.append("    amount: ").append(toIndentedString(amount)).append("\n");
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
