/*
 * Selling Partner API for Pricing
 * The Selling Partner API for Pricing helps you programmatically retrieve product pricing and offer information for Amazon Marketplace products.
 *
 * OpenAPI spec version: v0
 *
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */

package software.amazon.spapi.models.pricing.v0;

import com.google.gson.TypeAdapter;
import com.google.gson.annotations.JsonAdapter;
import com.google.gson.annotations.SerializedName;
import com.google.gson.stream.JsonReader;
import com.google.gson.stream.JsonWriter;
import java.io.IOException;

/** Indicates whether the offer is a B2B or B2C offer */
@JsonAdapter(OfferCustomerType.Adapter.class)
public enum OfferCustomerType {
    @SerializedName("B2C")
    B2C("B2C"),
    @SerializedName("B2B")
    B2B("B2B");

    private String value;

    OfferCustomerType(String value) {
        this.value = value;
    }

    public String getValue() {
        return value;
    }

    @Override
    public String toString() {
        return String.valueOf(value);
    }

    public static OfferCustomerType fromValue(String input) {
        for (OfferCustomerType b : OfferCustomerType.values()) {
            if (b.value.equals(input)) {
                return b;
            }
        }
        return null;
    }

    public static class Adapter extends TypeAdapter<OfferCustomerType> {
        @Override
        public void write(final JsonWriter jsonWriter, final OfferCustomerType enumeration) throws IOException {
            jsonWriter.value(String.valueOf(enumeration.getValue()));
        }

        @Override
        public OfferCustomerType read(final JsonReader jsonReader) throws IOException {
            Object value = jsonReader.nextString();
            return OfferCustomerType.fromValue((String) (value));
        }
    }
}
