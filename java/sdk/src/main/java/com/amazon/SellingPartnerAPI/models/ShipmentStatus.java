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
 * The shipment status to apply.
 */
@JsonAdapter(ShipmentStatus.Adapter.class)
public enum ShipmentStatus {
  @SerializedName("ReadyForPickup")
  READYFORPICKUP("ReadyForPickup"),
  @SerializedName("PickedUp")
  PICKEDUP("PickedUp"),
  @SerializedName("RefusedPickup")
  REFUSEDPICKUP("RefusedPickup");

  private String value;

  ShipmentStatus(String value) {
    this.value = value;
  }

  public String getValue() {
    return value;
  }

  @Override
  public String toString() {
    return String.valueOf(value);
  }

  public static ShipmentStatus fromValue(String input) {
    for (ShipmentStatus b : ShipmentStatus.values()) {
      if (b.value.equals(input)) {
        return b;
      }
    }
    return null;
  }

  public static class Adapter extends TypeAdapter<ShipmentStatus> {
    @Override
    public void write(final JsonWriter jsonWriter, final ShipmentStatus enumeration) throws IOException {
      jsonWriter.value(String.valueOf(enumeration.getValue()));
    }

    @Override
    public ShipmentStatus read(final JsonReader jsonReader) throws IOException {
      Object value = jsonReader.nextString();
      return ShipmentStatus.fromValue((String)(value));
    }
  }
}
