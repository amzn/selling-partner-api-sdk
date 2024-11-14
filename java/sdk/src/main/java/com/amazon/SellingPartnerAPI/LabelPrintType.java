/*
 * Fulfillment Inbound v2024-03-20
 * The Selling Partner API for Fulfillment By Amazon (FBA) Inbound. The FBA Inbound API enables building inbound workflows to create, manage, and send shipments into Amazon's fulfillment network. The API has interoperability with the Send-to-Amazon user interface.
 *
 * OpenAPI spec version: 2024-03-20
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */

package com.amazon.SellingPartnerAPI;

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
 * Indicates the type of print type for a given label.
 */
@JsonAdapter(LabelPrintType.Adapter.class)
public enum LabelPrintType {
  @SerializedName("STANDARD_FORMAT")
  STANDARD_FORMAT("STANDARD_FORMAT"),
  @SerializedName("THERMAL_PRINTING")
  THERMAL_PRINTING("THERMAL_PRINTING");

  private String value;

  LabelPrintType(String value) {
    this.value = value;
  }

  public String getValue() {
    return value;
  }

  @Override
  public String toString() {
    return String.valueOf(value);
  }

  public static LabelPrintType fromValue(String input) {
    for (LabelPrintType b : LabelPrintType.values()) {
      if (b.value.equals(input)) {
        return b;
      }
    }
    return null;
  }

  public static class Adapter extends TypeAdapter<LabelPrintType> {
    @Override
    public void write(final JsonWriter jsonWriter, final LabelPrintType enumeration) throws IOException {
      jsonWriter.value(String.valueOf(enumeration.getValue()));
    }

    @Override
    public LabelPrintType read(final JsonReader jsonReader) throws IOException {
      Object value = jsonReader.nextString();
      return LabelPrintType.fromValue((String)(value));
    }
  }
}
