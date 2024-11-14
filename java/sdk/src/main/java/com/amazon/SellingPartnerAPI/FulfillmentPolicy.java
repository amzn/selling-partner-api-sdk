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
import io.swagger.v3.oas.annotations.media.Schema;
import com.google.gson.annotations.SerializedName;
import java.io.IOException;
import com.google.gson.TypeAdapter;
import com.google.gson.annotations.JsonAdapter;
import com.google.gson.stream.JsonReader;
import com.google.gson.stream.JsonWriter;

/**
 * The &#x60;FulfillmentPolicy&#x60; value specified when you submitted the &#x60;createFulfillmentOrder&#x60; operation.
 */
@JsonAdapter(FulfillmentPolicy.Adapter.class)
public enum FulfillmentPolicy {
  @SerializedName("FillOrKill")
  FILLORKILL("FillOrKill"),
  @SerializedName("FillAll")
  FILLALL("FillAll"),
  @SerializedName("FillAllAvailable")
  FILLALLAVAILABLE("FillAllAvailable");

  private String value;

  FulfillmentPolicy(String value) {
    this.value = value;
  }

  public String getValue() {
    return value;
  }

  @Override
  public String toString() {
    return String.valueOf(value);
  }

  public static FulfillmentPolicy fromValue(String input) {
    for (FulfillmentPolicy b : FulfillmentPolicy.values()) {
      if (b.value.equals(input)) {
        return b;
      }
    }
    return null;
  }

  public static class Adapter extends TypeAdapter<FulfillmentPolicy> {
    @Override
    public void write(final JsonWriter jsonWriter, final FulfillmentPolicy enumeration) throws IOException {
      jsonWriter.value(String.valueOf(enumeration.getValue()));
    }

    @Override
    public FulfillmentPolicy read(final JsonReader jsonReader) throws IOException {
      Object value = jsonReader.nextString();
      return FulfillmentPolicy.fromValue((String)(value));
    }
  }
}
