/*
 * The Selling Partner API for FBA inbound operations.
 * The Selling Partner API for Fulfillment By Amazon (FBA) Inbound. The FBA Inbound API enables building inbound workflows to create, manage, and send shipments into Amazon's fulfillment network. The API has interoperability with the Send-to-Amazon user interface.
 *
 * OpenAPI spec version: 2024-03-20
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */

package com.amazon.SellingPartnerAPI.models.fulfillment.inbound.v2024_03_20;

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
 * Reason for cancelling or rescheduling a self-ship appointment.
 */
@JsonAdapter(ReasonComment.Adapter.class)
public enum ReasonComment {
  @SerializedName("APPOINTMENT_REQUESTED_BY_MISTAKE")
  APPOINTMENT_REQUESTED_BY_MISTAKE("APPOINTMENT_REQUESTED_BY_MISTAKE"),
  @SerializedName("VEHICLE_DELAY")
  VEHICLE_DELAY("VEHICLE_DELAY"),
  @SerializedName("SLOT_NOT_SUITABLE")
  SLOT_NOT_SUITABLE("SLOT_NOT_SUITABLE"),
  @SerializedName("OUTSIDE_CARRIER_BUSINESS_HOURS")
  OUTSIDE_CARRIER_BUSINESS_HOURS("OUTSIDE_CARRIER_BUSINESS_HOURS"),
  @SerializedName("UNFAVOURABLE_EXTERNAL_CONDITIONS")
  UNFAVOURABLE_EXTERNAL_CONDITIONS("UNFAVOURABLE_EXTERNAL_CONDITIONS"),
  @SerializedName("PROCUREMENT_DELAY")
  PROCUREMENT_DELAY("PROCUREMENT_DELAY"),
  @SerializedName("SHIPPING_PLAN_CHANGED")
  SHIPPING_PLAN_CHANGED("SHIPPING_PLAN_CHANGED"),
  @SerializedName("INCREASED_QUANTITY")
  INCREASED_QUANTITY("INCREASED_QUANTITY"),
  @SerializedName("OTHER")
  OTHER("OTHER");

  private String value;

  ReasonComment(String value) {
    this.value = value;
  }

  public String getValue() {
    return value;
  }

  @Override
  public String toString() {
    return String.valueOf(value);
  }

  public static ReasonComment fromValue(String input) {
    for (ReasonComment b : ReasonComment.values()) {
      if (b.value.equals(input)) {
        return b;
      }
    }
    return null;
  }

  public static class Adapter extends TypeAdapter<ReasonComment> {
    @Override
    public void write(final JsonWriter jsonWriter, final ReasonComment enumeration) throws IOException {
      jsonWriter.value(String.valueOf(enumeration.getValue()));
    }

    @Override
    public ReasonComment read(final JsonReader jsonReader) throws IOException {
      Object value = jsonReader.nextString();
      return ReasonComment.fromValue((String)(value));
    }
  }
}
