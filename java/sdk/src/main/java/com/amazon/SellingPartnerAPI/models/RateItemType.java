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
import io.swagger.v3.oas.annotations.media.Schema;
import com.google.gson.annotations.SerializedName;
import java.io.IOException;
import com.google.gson.TypeAdapter;
import com.google.gson.annotations.JsonAdapter;
import com.google.gson.stream.JsonReader;
import com.google.gson.stream.JsonWriter;

/**
 * Type of the rateItem.
 */
@JsonAdapter(RateItemType.Adapter.class)
public enum RateItemType {
  @SerializedName("MANDATORY")
  MANDATORY("MANDATORY"),
  @SerializedName("OPTIONAL")
  OPTIONAL("OPTIONAL"),
  @SerializedName("INCLUDED")
  INCLUDED("INCLUDED");

  private String value;

  RateItemType(String value) {
    this.value = value;
  }

  public String getValue() {
    return value;
  }

  @Override
  public String toString() {
    return String.valueOf(value);
  }

  public static RateItemType fromValue(String input) {
    for (RateItemType b : RateItemType.values()) {
      if (b.value.equals(input)) {
        return b;
      }
    }
    return null;
  }

  public static class Adapter extends TypeAdapter<RateItemType> {
    @Override
    public void write(final JsonWriter jsonWriter, final RateItemType enumeration) throws IOException {
      jsonWriter.value(String.valueOf(enumeration.getValue()));
    }

    @Override
    public RateItemType read(final JsonReader jsonReader) throws IOException {
      Object value = jsonReader.nextString();
      return RateItemType.fromValue((String)(value));
    }
  }
}
