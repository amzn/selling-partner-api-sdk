/*
 * The Selling Partner API for Transfers.
 * The Selling Partner API for Transfers enables selling partners to retrieve payment methods and initiate payouts for their seller accounts. This API supports the following marketplaces: DE, FR, IT, ES, SE, NL, PL, and BE.
 *
 * OpenAPI spec version: 2024-06-01
 *
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */

package software.amazon.spapi.models.transfers.v2024_06_01;

import com.google.gson.TypeAdapter;
import com.google.gson.annotations.JsonAdapter;
import com.google.gson.annotations.SerializedName;
import com.google.gson.stream.JsonReader;
import com.google.gson.stream.JsonWriter;
import java.io.IOException;

/** The type of payment method. */
@JsonAdapter(PaymentMethodType.Adapter.class)
public enum PaymentMethodType {
    @SerializedName("BANK_ACCOUNT")
    BANK_ACCOUNT("BANK_ACCOUNT"),
    @SerializedName("CARD")
    CARD("CARD"),
    @SerializedName("SELLER_WALLET")
    SELLER_WALLET("SELLER_WALLET");

    private String value;

    PaymentMethodType(String value) {
        this.value = value;
    }

    public String getValue() {
        return value;
    }

    @Override
    public String toString() {
        return String.valueOf(value);
    }

    public static PaymentMethodType fromValue(String input) {
        for (PaymentMethodType b : PaymentMethodType.values()) {
            if (b.value.equals(input)) {
                return b;
            }
        }
        return null;
    }

    public static class Adapter extends TypeAdapter<PaymentMethodType> {
        @Override
        public void write(final JsonWriter jsonWriter, final PaymentMethodType enumeration) throws IOException {
            jsonWriter.value(String.valueOf(enumeration.getValue()));
        }

        @Override
        public PaymentMethodType read(final JsonReader jsonReader) throws IOException {
            Object value = jsonReader.nextString();
            return PaymentMethodType.fromValue((String) (value));
        }
    }
}
