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

package com.amazon.SellingPartnerAPI.models.fulfillmentoutbound;

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
 * The event code for the delivery event.
 */
@JsonAdapter(EventCode.Adapter.class)
public enum EventCode {
  @SerializedName("EVENT_101")
  _101("EVENT_101"),
  @SerializedName("EVENT_102")
  _102("EVENT_102"),
  @SerializedName("EVENT_201")
  _201("EVENT_201"),
  @SerializedName("EVENT_202")
  _202("EVENT_202"),
  @SerializedName("EVENT_203")
  _203("EVENT_203"),
  @SerializedName("EVENT_204")
  _204("EVENT_204"),
  @SerializedName("EVENT_205")
  _205("EVENT_205"),
  @SerializedName("EVENT_206")
  _206("EVENT_206"),
  @SerializedName("EVENT_301")
  _301("EVENT_301"),
  @SerializedName("EVENT_302")
  _302("EVENT_302"),
  @SerializedName("EVENT_304")
  _304("EVENT_304"),
  @SerializedName("EVENT_306")
  _306("EVENT_306"),
  @SerializedName("EVENT_307")
  _307("EVENT_307"),
  @SerializedName("EVENT_308")
  _308("EVENT_308"),
  @SerializedName("EVENT_309")
  _309("EVENT_309"),
  @SerializedName("EVENT_401")
  _401("EVENT_401"),
  @SerializedName("EVENT_402")
  _402("EVENT_402"),
  @SerializedName("EVENT_403")
  _403("EVENT_403"),
  @SerializedName("EVENT_404")
  _404("EVENT_404"),
  @SerializedName("EVENT_405")
  _405("EVENT_405"),
  @SerializedName("EVENT_406")
  _406("EVENT_406"),
  @SerializedName("EVENT_407")
  _407("EVENT_407"),
  @SerializedName("EVENT_408")
  _408("EVENT_408"),
  @SerializedName("EVENT_409")
  _409("EVENT_409"),
  @SerializedName("EVENT_411")
  _411("EVENT_411"),
  @SerializedName("EVENT_412")
  _412("EVENT_412"),
  @SerializedName("EVENT_413")
  _413("EVENT_413"),
  @SerializedName("EVENT_414")
  _414("EVENT_414"),
  @SerializedName("EVENT_415")
  _415("EVENT_415"),
  @SerializedName("EVENT_416")
  _416("EVENT_416"),
  @SerializedName("EVENT_417")
  _417("EVENT_417"),
  @SerializedName("EVENT_418")
  _418("EVENT_418"),
  @SerializedName("EVENT_419")
  _419("EVENT_419");

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
