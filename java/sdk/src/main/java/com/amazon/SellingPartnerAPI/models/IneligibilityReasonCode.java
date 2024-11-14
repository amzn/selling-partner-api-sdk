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
 * Reasons that make a shipment service offering ineligible.
 */
@JsonAdapter(IneligibilityReasonCode.Adapter.class)
public enum IneligibilityReasonCode {
  @SerializedName("NO_COVERAGE")
  NO_COVERAGE("NO_COVERAGE"),
  @SerializedName("PICKUP_SLOT_RESTRICTION")
  PICKUP_SLOT_RESTRICTION("PICKUP_SLOT_RESTRICTION"),
  @SerializedName("UNSUPPORTED_VAS")
  UNSUPPORTED_VAS("UNSUPPORTED_VAS"),
  @SerializedName("VAS_COMBINATION_RESTRICTION")
  VAS_COMBINATION_RESTRICTION("VAS_COMBINATION_RESTRICTION"),
  @SerializedName("SIZE_RESTRICTIONS")
  SIZE_RESTRICTIONS("SIZE_RESTRICTIONS"),
  @SerializedName("WEIGHT_RESTRICTIONS")
  WEIGHT_RESTRICTIONS("WEIGHT_RESTRICTIONS"),
  @SerializedName("LATE_DELIVERY")
  LATE_DELIVERY("LATE_DELIVERY"),
  @SerializedName("PROGRAM_CONSTRAINTS")
  PROGRAM_CONSTRAINTS("PROGRAM_CONSTRAINTS"),
  @SerializedName("TERMS_AND_CONDITIONS_NOT_ACCEPTED")
  TERMS_AND_CONDITIONS_NOT_ACCEPTED("TERMS_AND_CONDITIONS_NOT_ACCEPTED"),
  @SerializedName("UNKNOWN")
  UNKNOWN("UNKNOWN");

  private String value;

  IneligibilityReasonCode(String value) {
    this.value = value;
  }

  public String getValue() {
    return value;
  }

  @Override
  public String toString() {
    return String.valueOf(value);
  }

  public static IneligibilityReasonCode fromValue(String input) {
    for (IneligibilityReasonCode b : IneligibilityReasonCode.values()) {
      if (b.value.equals(input)) {
        return b;
      }
    }
    return null;
  }

  public static class Adapter extends TypeAdapter<IneligibilityReasonCode> {
    @Override
    public void write(final JsonWriter jsonWriter, final IneligibilityReasonCode enumeration) throws IOException {
      jsonWriter.value(String.valueOf(enumeration.getValue()));
    }

    @Override
    public IneligibilityReasonCode read(final JsonReader jsonReader) throws IOException {
      Object value = jsonReader.nextString();
      return IneligibilityReasonCode.fromValue((String)(value));
    }
  }
}
