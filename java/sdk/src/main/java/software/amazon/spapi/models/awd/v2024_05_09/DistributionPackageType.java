/*
 * The Selling Partner API for Amazon Warehousing and Distribution
 * The Selling Partner API for Amazon Warehousing and Distribution (AWD) provides programmatic access to information about AWD shipments and inventory.
 *
 * OpenAPI spec version: 2024-05-09
 *
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */

package software.amazon.spapi.models.awd.v2024_05_09;

import com.google.gson.TypeAdapter;
import com.google.gson.annotations.JsonAdapter;
import com.google.gson.annotations.SerializedName;
import com.google.gson.stream.JsonReader;
import com.google.gson.stream.JsonWriter;
import java.io.IOException;

/** Type of distribution packages. */
@JsonAdapter(DistributionPackageType.Adapter.class)
public enum DistributionPackageType {
    @SerializedName("CASE")
    CASE("CASE"),
    @SerializedName("PALLET")
    PALLET("PALLET");

    private String value;

    DistributionPackageType(String value) {
        this.value = value;
    }

    public String getValue() {
        return value;
    }

    @Override
    public String toString() {
        return String.valueOf(value);
    }

    public static DistributionPackageType fromValue(String input) {
        for (DistributionPackageType b : DistributionPackageType.values()) {
            if (b.value.equals(input)) {
                return b;
            }
        }
        return null;
    }

    public static class Adapter extends TypeAdapter<DistributionPackageType> {
        @Override
        public void write(final JsonWriter jsonWriter, final DistributionPackageType enumeration) throws IOException {
            jsonWriter.value(String.valueOf(enumeration.getValue()));
        }

        @Override
        public DistributionPackageType read(final JsonReader jsonReader) throws IOException {
            Object value = jsonReader.nextString();
            return DistributionPackageType.fromValue((String) (value));
        }
    }
}
