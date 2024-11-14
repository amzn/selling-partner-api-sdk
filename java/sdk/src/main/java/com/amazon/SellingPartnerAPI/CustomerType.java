/*
 * Selling Partner API for Pricing
 * The Selling Partner API for Pricing helps you programmatically retrieve product pricing and offer information for Amazon Marketplace products.
 *
 * OpenAPI spec version: v0
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
 * Indicates whether to request Consumer or Business offers. Default is Consumer.
 */
@JsonAdapter(CustomerType.Adapter.class)
public enum CustomerType {
  @SerializedName("Consumer")
  CONSUMER("Consumer"),
  @SerializedName("Business")
  BUSINESS("Business");

  private String value;

  CustomerType(String value) {
    this.value = value;
  }

  public String getValue() {
    return value;
  }

  @Override
  public String toString() {
    return String.valueOf(value);
  }

  public static CustomerType fromValue(String input) {
    for (CustomerType b : CustomerType.values()) {
      if (b.value.equals(input)) {
        return b;
      }
    }
    return null;
  }

  public static class Adapter extends TypeAdapter<CustomerType> {
    @Override
    public void write(final JsonWriter jsonWriter, final CustomerType enumeration) throws IOException {
      jsonWriter.value(String.valueOf(enumeration.getValue()));
    }

    @Override
    public CustomerType read(final JsonReader jsonReader) throws IOException {
      Object value = jsonReader.nextString();
      return CustomerType.fromValue((String)(value));
    }
  }
}
