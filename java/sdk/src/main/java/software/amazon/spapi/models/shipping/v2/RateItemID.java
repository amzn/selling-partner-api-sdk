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

package software.amazon.spapi.models.shipping.v2;

import com.google.gson.TypeAdapter;
import com.google.gson.annotations.JsonAdapter;
import com.google.gson.annotations.SerializedName;
import com.google.gson.stream.JsonReader;
import com.google.gson.stream.JsonWriter;
import java.io.IOException;

/** Unique ID for the rateItem. */
@JsonAdapter(RateItemID.Adapter.class)
public enum RateItemID {
    @SerializedName("BASE_RATE")
    BASE_RATE("BASE_RATE"),
    @SerializedName("TRANSACTION_FEE")
    TRANSACTION_FEE("TRANSACTION_FEE"),
    @SerializedName("ADULT_SIGNATURE_CONFIRMATION")
    ADULT_SIGNATURE_CONFIRMATION("ADULT_SIGNATURE_CONFIRMATION"),
    @SerializedName("SIGNATURE_CONFIRMATION")
    SIGNATURE_CONFIRMATION("SIGNATURE_CONFIRMATION"),
    @SerializedName("NO_CONFIRMATION")
    NO_CONFIRMATION("NO_CONFIRMATION"),
    @SerializedName("WAIVE_SIGNATURE")
    WAIVE_SIGNATURE("WAIVE_SIGNATURE"),
    @SerializedName("IMPLIED_LIABILITY")
    IMPLIED_LIABILITY("IMPLIED_LIABILITY"),
    @SerializedName("HIDDEN_POSTAGE")
    HIDDEN_POSTAGE("HIDDEN_POSTAGE"),
    @SerializedName("DECLARED_VALUE")
    DECLARED_VALUE("DECLARED_VALUE"),
    @SerializedName("SUNDAY_HOLIDAY_DELIVERY")
    SUNDAY_HOLIDAY_DELIVERY("SUNDAY_HOLIDAY_DELIVERY"),
    @SerializedName("DELIVERY_CONFIRMATION")
    DELIVERY_CONFIRMATION("DELIVERY_CONFIRMATION"),
    @SerializedName("IMPORT_DUTY_CHARGE")
    IMPORT_DUTY_CHARGE("IMPORT_DUTY_CHARGE"),
    @SerializedName("VAT")
    VAT("VAT"),
    @SerializedName("NO_SATURDAY_DELIVERY")
    NO_SATURDAY_DELIVERY("NO_SATURDAY_DELIVERY"),
    @SerializedName("INSURANCE")
    INSURANCE("INSURANCE"),
    @SerializedName("COD")
    COD("COD"),
    @SerializedName("FUEL_SURCHARGE")
    FUEL_SURCHARGE("FUEL_SURCHARGE"),
    @SerializedName("INSPECTION_CHARGE")
    INSPECTION_CHARGE("INSPECTION_CHARGE"),
    @SerializedName("DELIVERY_AREA_SURCHARGE")
    DELIVERY_AREA_SURCHARGE("DELIVERY_AREA_SURCHARGE"),
    @SerializedName("WAYBILL_CHARGE")
    WAYBILL_CHARGE("WAYBILL_CHARGE"),
    @SerializedName("AMAZON_SPONSORED_DISCOUNT")
    AMAZON_SPONSORED_DISCOUNT("AMAZON_SPONSORED_DISCOUNT"),
    @SerializedName("INTEGRATOR_SPONSORED_DISCOUNT")
    INTEGRATOR_SPONSORED_DISCOUNT("INTEGRATOR_SPONSORED_DISCOUNT"),
    @SerializedName("OVERSIZE_SURCHARGE")
    OVERSIZE_SURCHARGE("OVERSIZE_SURCHARGE"),
    @SerializedName("CONGESTION_CHARGE")
    CONGESTION_CHARGE("CONGESTION_CHARGE"),
    @SerializedName("RESIDENTIAL_SURCHARGE")
    RESIDENTIAL_SURCHARGE("RESIDENTIAL_SURCHARGE"),
    @SerializedName("ADDITIONAL_SURCHARGE")
    ADDITIONAL_SURCHARGE("ADDITIONAL_SURCHARGE"),
    @SerializedName("SURCHARGE")
    SURCHARGE("SURCHARGE"),
    @SerializedName("REBATE")
    REBATE("REBATE"),
    @SerializedName("HIGH_CUBE_SURCHARGE")
    HIGH_CUBE_SURCHARGE("HIGH_CUBE_SURCHARGE"),
    @SerializedName("HIGH_LENGTH_SURCHARGE")
    HIGH_LENGTH_SURCHARGE("HIGH_LENGTH_SURCHARGE"),
    @SerializedName("HIGH_WIDTH_SURCHARGE")
    HIGH_WIDTH_SURCHARGE("HIGH_WIDTH_SURCHARGE"),
    @SerializedName("DEMAND_SURCHARGE")
    DEMAND_SURCHARGE("DEMAND_SURCHARGE"),
    @SerializedName("NONSTANDARD_FEE")
    NONSTANDARD_FEE("NONSTANDARD_FEE");

    private String value;

    RateItemID(String value) {
        this.value = value;
    }

    public String getValue() {
        return value;
    }

    @Override
    public String toString() {
        return String.valueOf(value);
    }

    public static RateItemID fromValue(String input) {
        for (RateItemID b : RateItemID.values()) {
            if (b.value.equals(input)) {
                return b;
            }
        }
        return null;
    }

    public static class Adapter extends TypeAdapter<RateItemID> {
        @Override
        public void write(final JsonWriter jsonWriter, final RateItemID enumeration) throws IOException {
            jsonWriter.value(String.valueOf(enumeration.getValue()));
        }

        @Override
        public RateItemID read(final JsonReader jsonReader) throws IOException {
            Object value = jsonReader.nextString();
            return RateItemID.fromValue((String) (value));
        }
    }
}
