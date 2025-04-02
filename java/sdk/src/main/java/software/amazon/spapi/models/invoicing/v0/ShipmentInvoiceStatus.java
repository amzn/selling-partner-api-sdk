/*
 * Selling Partner API for Shipment Invoicing
 * The Selling Partner API for Shipment Invoicing helps you programmatically retrieve shipment invoice information in the Brazil marketplace for a selling partner’s Fulfillment by Amazon (FBA) orders.
 *
 * OpenAPI spec version: v0
 *
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */

package software.amazon.spapi.models.invoicing.v0;

import com.google.gson.TypeAdapter;
import com.google.gson.annotations.JsonAdapter;
import com.google.gson.annotations.SerializedName;
import com.google.gson.stream.JsonReader;
import com.google.gson.stream.JsonWriter;
import java.io.IOException;

/** The shipment invoice status. */
@JsonAdapter(ShipmentInvoiceStatus.Adapter.class)
public enum ShipmentInvoiceStatus {
    @SerializedName("Processing")
    PROCESSING("Processing"),
    @SerializedName("Accepted")
    ACCEPTED("Accepted"),
    @SerializedName("Errored")
    ERRORED("Errored"),
    @SerializedName("NotFound")
    NOTFOUND("NotFound");

    private String value;

    ShipmentInvoiceStatus(String value) {
        this.value = value;
    }

    public String getValue() {
        return value;
    }

    @Override
    public String toString() {
        return String.valueOf(value);
    }

    public static ShipmentInvoiceStatus fromValue(String input) {
        for (ShipmentInvoiceStatus b : ShipmentInvoiceStatus.values()) {
            if (b.value.equals(input)) {
                return b;
            }
        }
        return null;
    }

    public static class Adapter extends TypeAdapter<ShipmentInvoiceStatus> {
        @Override
        public void write(final JsonWriter jsonWriter, final ShipmentInvoiceStatus enumeration) throws IOException {
            jsonWriter.value(String.valueOf(enumeration.getValue()));
        }

        @Override
        public ShipmentInvoiceStatus read(final JsonReader jsonReader) throws IOException {
            Object value = jsonReader.nextString();
            return ShipmentInvoiceStatus.fromValue((String) (value));
        }
    }
}
