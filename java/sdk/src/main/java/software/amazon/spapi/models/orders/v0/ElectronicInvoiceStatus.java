/*
 * Selling Partner API for Orders
 * Use the Orders Selling Partner API to programmatically retrieve order information. With this API, you can develop fast, flexible, and custom applications to manage order synchronization, perform order research, and create demand-based decision support tools.   _Note:_ For the JP, AU, and SG marketplaces, the Orders API supports orders from 2016 onward. For all other marketplaces, the Orders API supports orders for the last two years (orders older than this don't show up in the response).
 *
 * OpenAPI spec version: v0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */

package software.amazon.spapi.models.orders.v0;

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
 * The status of the electronic invoice. Only available for Easy Ship orders and orders in the BR marketplace.
 */
@JsonAdapter(ElectronicInvoiceStatus.Adapter.class)
public enum ElectronicInvoiceStatus {
  @SerializedName("NotRequired")
  NOTREQUIRED("NotRequired"),
  @SerializedName("NotFound")
  NOTFOUND("NotFound"),
  @SerializedName("Processing")
  PROCESSING("Processing"),
  @SerializedName("Errored")
  ERRORED("Errored"),
  @SerializedName("Accepted")
  ACCEPTED("Accepted");

  private String value;

  ElectronicInvoiceStatus(String value) {
    this.value = value;
  }

  public String getValue() {
    return value;
  }

  @Override
  public String toString() {
    return String.valueOf(value);
  }

  public static ElectronicInvoiceStatus fromValue(String input) {
    for (ElectronicInvoiceStatus b : ElectronicInvoiceStatus.values()) {
      if (b.value.equals(input)) {
        return b;
      }
    }
    return null;
  }

  public static class Adapter extends TypeAdapter<ElectronicInvoiceStatus> {
    @Override
    public void write(final JsonWriter jsonWriter, final ElectronicInvoiceStatus enumeration) throws IOException {
      jsonWriter.value(String.valueOf(enumeration.getValue()));
    }

    @Override
    public ElectronicInvoiceStatus read(final JsonReader jsonReader) throws IOException {
      Object value = jsonReader.nextString();
      return ElectronicInvoiceStatus.fromValue((String)(value));
    }
  }
}
