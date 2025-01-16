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

package com.amazon.SellingPartnerAPI.models.awd.v2024_05_09;

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
 * Possible shipment statuses for outbound shipments.
 */
@JsonAdapter(OutboundShipmentStatus.Adapter.class)
public enum OutboundShipmentStatus {
  @SerializedName("CREATED")
  CREATED("CREATED"),
  @SerializedName("IN_TRANSIT")
  IN_TRANSIT("IN_TRANSIT"),
  @SerializedName("DELIVERED")
  DELIVERED("DELIVERED"),
  @SerializedName("RECEIVING")
  RECEIVING("RECEIVING"),
  @SerializedName("RECEIVED")
  RECEIVED("RECEIVED"),
  @SerializedName("CLOSED")
  CLOSED("CLOSED"),
  @SerializedName("CANCELLED")
  CANCELLED("CANCELLED"),
  @SerializedName("FAILED")
  FAILED("FAILED");

  private String value;

  OutboundShipmentStatus(String value) {
    this.value = value;
  }

  public String getValue() {
    return value;
  }

  @Override
  public String toString() {
    return String.valueOf(value);
  }

  public static OutboundShipmentStatus fromValue(String input) {
    for (OutboundShipmentStatus b : OutboundShipmentStatus.values()) {
      if (b.value.equals(input)) {
        return b;
      }
    }
    return null;
  }

  public static class Adapter extends TypeAdapter<OutboundShipmentStatus> {
    @Override
    public void write(final JsonWriter jsonWriter, final OutboundShipmentStatus enumeration) throws IOException {
      jsonWriter.value(String.valueOf(enumeration.getValue()));
    }

    @Override
    public OutboundShipmentStatus read(final JsonReader jsonReader) throws IOException {
      Object value = jsonReader.nextString();
      return OutboundShipmentStatus.fromValue((String)(value));
    }
  }
}
