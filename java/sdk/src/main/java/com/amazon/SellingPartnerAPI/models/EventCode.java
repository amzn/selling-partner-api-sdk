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
 * The tracking event type.
 */
@JsonAdapter(EventCode.Adapter.class)
public enum EventCode {
  @SerializedName("ReadyForReceive")
  READYFORRECEIVE("ReadyForReceive"),
  @SerializedName("PickupDone")
  PICKUPDONE("PickupDone"),
  @SerializedName("Delivered")
  DELIVERED("Delivered"),
  @SerializedName("Departed")
  DEPARTED("Departed"),
  @SerializedName("DeliveryAttempted")
  DELIVERYATTEMPTED("DeliveryAttempted"),
  @SerializedName("Lost")
  LOST("Lost"),
  @SerializedName("OutForDelivery")
  OUTFORDELIVERY("OutForDelivery"),
  @SerializedName("ArrivedAtCarrierFacility")
  ARRIVEDATCARRIERFACILITY("ArrivedAtCarrierFacility"),
  @SerializedName("Rejected")
  REJECTED("Rejected"),
  @SerializedName("Undeliverable")
  UNDELIVERABLE("Undeliverable"),
  @SerializedName("PickupCancelled")
  PICKUPCANCELLED("PickupCancelled");

  private String value;

  EventCode(String value) {
    this.value = value;
  }

  public String getValue() {
    return value;
  }

  @Override
  public String toString() {
    return String.valueOf(value);
  }

  public static EventCode fromValue(String input) {
    for (EventCode b : EventCode.values()) {
      if (b.value.equals(input)) {
        return b;
      }
    }
    return null;
  }

  public static class Adapter extends TypeAdapter<EventCode> {
    @Override
    public void write(final JsonWriter jsonWriter, final EventCode enumeration) throws IOException {
      jsonWriter.value(String.valueOf(enumeration.getValue()));
    }

    @Override
    public EventCode read(final JsonReader jsonReader) throws IOException {
      Object value = jsonReader.nextString();
      return EventCode.fromValue((String)(value));
    }
  }
}
