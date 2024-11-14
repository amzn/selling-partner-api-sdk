/*
 * Selling Partner API for Fulfillment Inbound
 * The Selling Partner API for Fulfillment Inbound lets you create applications that create and update inbound shipments of inventory to Amazon's fulfillment network.
 *
 * OpenAPI spec version: v0
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
 * Specific inbound guidance for an item.
 */
@JsonAdapter(InboundGuidance.Adapter.class)
public enum InboundGuidance {
  @SerializedName("InboundNotRecommended")
  INBOUNDNOTRECOMMENDED("InboundNotRecommended"),
  @SerializedName("InboundOK")
  INBOUNDOK("InboundOK");

  private String value;

  InboundGuidance(String value) {
    this.value = value;
  }

  public String getValue() {
    return value;
  }

  @Override
  public String toString() {
    return String.valueOf(value);
  }

  public static InboundGuidance fromValue(String input) {
    for (InboundGuidance b : InboundGuidance.values()) {
      if (b.value.equals(input)) {
        return b;
      }
    }
    return null;
  }

  public static class Adapter extends TypeAdapter<InboundGuidance> {
    @Override
    public void write(final JsonWriter jsonWriter, final InboundGuidance enumeration) throws IOException {
      jsonWriter.value(String.valueOf(enumeration.getValue()));
    }

    @Override
    public InboundGuidance read(final JsonReader jsonReader) throws IOException {
      Object value = jsonReader.nextString();
      return InboundGuidance.fromValue((String)(value));
    }
  }
}
