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
 * Payment type of the purchase.
 */
@JsonAdapter(PaymentType.Adapter.class)
public enum PaymentType {
  @SerializedName("PAY_THROUGH_AMAZON")
  THROUGH_AMAZON("PAY_THROUGH_AMAZON"),
  @SerializedName("PAY_DIRECT_TO_CARRIER")
  DIRECT_TO_CARRIER("PAY_DIRECT_TO_CARRIER");

  private String value;

  PaymentType(String value) {
    this.value = value;
  }

  public String getValue() {
    return value;
  }

  @Override
  public String toString() {
    return String.valueOf(value);
  }

  public static PaymentType fromValue(String input) {
    for (PaymentType b : PaymentType.values()) {
      if (b.value.equals(input)) {
        return b;
      }
    }
    return null;
  }

  public static class Adapter extends TypeAdapter<PaymentType> {
    @Override
    public void write(final JsonWriter jsonWriter, final PaymentType enumeration) throws IOException {
      jsonWriter.value(String.valueOf(enumeration.getValue()));
    }

    @Override
    public PaymentType read(final JsonReader jsonReader) throws IOException {
      Object value = jsonReader.nextString();
      return PaymentType.fromValue((String)(value));
    }
  }
}
