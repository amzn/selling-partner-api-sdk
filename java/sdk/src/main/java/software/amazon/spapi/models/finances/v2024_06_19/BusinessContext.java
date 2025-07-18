/*
 * The Selling Partner API for Finances
 * The Selling Partner API for Finances helps you obtain financial information relevant to a seller's business. You can obtain financial events for a given order or date range without having to wait until a statement period closes.
 *
 * OpenAPI spec version: 2024-06-19
 *
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */

package software.amazon.spapi.models.finances.v2024_06_19;

import com.google.gson.TypeAdapter;
import com.google.gson.annotations.JsonAdapter;
import com.google.gson.annotations.SerializedName;
import com.google.gson.stream.JsonReader;
import com.google.gson.stream.JsonWriter;
import io.swagger.v3.oas.annotations.media.Schema;
import java.io.IOException;
import java.util.Objects;

/** Information about the line of business associated with a transaction. */
@Schema(description = "Information about the line of business associated with a transaction.")
public class BusinessContext {
    /** The store name associated with the transaction. */
    @JsonAdapter(StoreNameEnum.Adapter.class)
    public enum StoreNameEnum {
        @SerializedName("AMAZON_HAUL")
        AMAZON_HAUL("AMAZON_HAUL");

        private String value;

        StoreNameEnum(String value) {
            this.value = value;
        }

        public String getValue() {
            return value;
        }

        @Override
        public String toString() {
            return String.valueOf(value);
        }

        public static StoreNameEnum fromValue(String input) {
            for (StoreNameEnum b : StoreNameEnum.values()) {
                if (b.value.equals(input)) {
                    return b;
                }
            }
            return null;
        }

        public static class Adapter extends TypeAdapter<StoreNameEnum> {
            @Override
            public void write(final JsonWriter jsonWriter, final StoreNameEnum enumeration) throws IOException {
                jsonWriter.value(String.valueOf(enumeration.getValue()));
            }

            @Override
            public StoreNameEnum read(final JsonReader jsonReader) throws IOException {
                Object value = jsonReader.nextString();
                return StoreNameEnum.fromValue((String) (value));
            }
        }
    }

    @SerializedName("storeName")
    private StoreNameEnum storeName = null;

    public BusinessContext storeName(StoreNameEnum storeName) {
        this.storeName = storeName;
        return this;
    }

    /**
     * The store name associated with the transaction.
     *
     * @return storeName
     */
    @Schema(description = "The store name associated with the transaction.")
    public StoreNameEnum getStoreName() {
        return storeName;
    }

    public void setStoreName(StoreNameEnum storeName) {
        this.storeName = storeName;
    }

    @Override
    public boolean equals(java.lang.Object o) {
        if (this == o) {
            return true;
        }
        if (o == null || getClass() != o.getClass()) {
            return false;
        }
        BusinessContext businessContext = (BusinessContext) o;
        return Objects.equals(this.storeName, businessContext.storeName);
    }

    @Override
    public int hashCode() {
        return Objects.hash(storeName);
    }

    @Override
    public String toString() {
        StringBuilder sb = new StringBuilder();
        sb.append("class BusinessContext {\n");

        sb.append("    storeName: ").append(toIndentedString(storeName)).append("\n");
        sb.append("}");
        return sb.toString();
    }

    /** Convert the given object to string with each line indented by 4 spaces (except the first line). */
    private String toIndentedString(java.lang.Object o) {
        if (o == null) {
            return "null";
        }
        return o.toString().replace("\n", "\n    ");
    }
}
