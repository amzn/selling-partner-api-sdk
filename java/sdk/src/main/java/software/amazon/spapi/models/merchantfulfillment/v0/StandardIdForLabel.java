/*
 * Selling Partner API for Merchant Fulfillment
 * With the Selling Partner API for Merchant Fulfillment, you can build applications that sellers can use to purchase shipping for non-Prime and Prime orders using Amazon's Buy Shipping Services.
 *
 * OpenAPI spec version: v0
 *
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */

package software.amazon.spapi.models.merchantfulfillment.v0;

import com.google.gson.TypeAdapter;
import com.google.gson.annotations.JsonAdapter;
import com.google.gson.annotations.SerializedName;
import com.google.gson.stream.JsonReader;
import com.google.gson.stream.JsonWriter;
import java.io.IOException;

/** The type of standard identifier to print on the label. */
@JsonAdapter(StandardIdForLabel.Adapter.class)
public enum StandardIdForLabel {
    @SerializedName("AmazonOrderId")
    AMAZONORDERID("AmazonOrderId");

    private String value;

    StandardIdForLabel(String value) {
        this.value = value;
    }

    public String getValue() {
        return value;
    }

    @Override
    public String toString() {
        return String.valueOf(value);
    }

    public static StandardIdForLabel fromValue(String input) {
        for (StandardIdForLabel b : StandardIdForLabel.values()) {
            if (b.value.equals(input)) {
                return b;
            }
        }
        return null;
    }

    public static class Adapter extends TypeAdapter<StandardIdForLabel> {
        @Override
        public void write(final JsonWriter jsonWriter, final StandardIdForLabel enumeration) throws IOException {
            jsonWriter.value(String.valueOf(enumeration.getValue()));
        }

        @Override
        public StandardIdForLabel read(final JsonReader jsonReader) throws IOException {
            Object value = jsonReader.nextString();
            return StandardIdForLabel.fromValue((String) (value));
        }
    }
}
