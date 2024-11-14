/*
 * Orders v0
 * Use the Orders Selling Partner API to programmatically retrieve order information. With this API, you can develop fast, flexible, and custom applications to manage order synchronization, perform order research, and create demand-based decision support tools.   _Note:_ For the JP, AU, and SG marketplaces, the Orders API supports orders from 2016 onward. For all other marketplaces, the Orders API supports orders for the last two years (orders older than this don't show up in the response).
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
 * The status of the Amazon Easy Ship order. This property is only included for Amazon Easy Ship orders.
 */
@JsonAdapter(EasyShipShipmentStatus.Adapter.class)
public enum EasyShipShipmentStatus {
  @SerializedName("PendingSchedule")
  PENDINGSCHEDULE("PendingSchedule"),
  @SerializedName("PendingPickUp")
  PENDINGPICKUP("PendingPickUp"),
  @SerializedName("PendingDropOff")
  PENDINGDROPOFF("PendingDropOff"),
  @SerializedName("LabelCanceled")
  LABELCANCELED("LabelCanceled"),
  @SerializedName("PickedUp")
  PICKEDUP("PickedUp"),
  @SerializedName("DroppedOff")
  DROPPEDOFF("DroppedOff"),
  @SerializedName("AtOriginFC")
  ATORIGINFC("AtOriginFC"),
  @SerializedName("AtDestinationFC")
  ATDESTINATIONFC("AtDestinationFC"),
  @SerializedName("Delivered")
  DELIVERED("Delivered"),
  @SerializedName("RejectedByBuyer")
  REJECTEDBYBUYER("RejectedByBuyer"),
  @SerializedName("Undeliverable")
  UNDELIVERABLE("Undeliverable"),
  @SerializedName("ReturningToSeller")
  RETURNINGTOSELLER("ReturningToSeller"),
  @SerializedName("ReturnedToSeller")
  RETURNEDTOSELLER("ReturnedToSeller"),
  @SerializedName("Lost")
  LOST("Lost"),
  @SerializedName("OutForDelivery")
  OUTFORDELIVERY("OutForDelivery"),
  @SerializedName("Damaged")
  DAMAGED("Damaged");

  private String value;

  EasyShipShipmentStatus(String value) {
    this.value = value;
  }

  public String getValue() {
    return value;
  }

  @Override
  public String toString() {
    return String.valueOf(value);
  }

  public static EasyShipShipmentStatus fromValue(String input) {
    for (EasyShipShipmentStatus b : EasyShipShipmentStatus.values()) {
      if (b.value.equals(input)) {
        return b;
      }
    }
    return null;
  }

  public static class Adapter extends TypeAdapter<EasyShipShipmentStatus> {
    @Override
    public void write(final JsonWriter jsonWriter, final EasyShipShipmentStatus enumeration) throws IOException {
      jsonWriter.value(String.valueOf(enumeration.getValue()));
    }

    @Override
    public EasyShipShipmentStatus read(final JsonReader jsonReader) throws IOException {
      Object value = jsonReader.nextString();
      return EasyShipShipmentStatus.fromValue((String)(value));
    }
  }
}
