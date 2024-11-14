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

package com.amazon.SellingPartnerAPI.models;

import java.util.Objects;
import java.util.Arrays;
import io.swagger.v3.oas.annotations.media.Schema;
import com.google.gson.annotations.SerializedName;
import java.io.IOException;
import com.google.gson.TypeAdapter;
import com.google.gson.annotations.JsonAdapter;
import com.google.gson.stream.JsonReader;
import com.google.gson.stream.JsonWriter;

/**
 * Denotes the type for the carrier.
 */
@JsonAdapter(CarrierCodeType.Adapter.class)
public enum CarrierCodeType {
  @SerializedName("SCAC")
  SCAC("SCAC");

  private String value;

  CarrierCodeType(String value) {
    this.value = value;
  }

  public String getValue() {
    return value;
  }

  @Override
  public String toString() {
    return String.valueOf(value);
  }

  public static CarrierCodeType fromValue(String input) {
    for (CarrierCodeType b : CarrierCodeType.values()) {
      if (b.value.equals(input)) {
        return b;
      }
    }
    return null;
  }

  public static class Adapter extends TypeAdapter<CarrierCodeType> {
    @Override
    public void write(final JsonWriter jsonWriter, final CarrierCodeType enumeration) throws IOException {
      jsonWriter.value(String.valueOf(enumeration.getValue()));
    }

    @Override
    public CarrierCodeType read(final JsonReader jsonReader) throws IOException {
      Object value = jsonReader.nextString();
      return CarrierCodeType.fromValue((String)(value));
    }
  }
}
