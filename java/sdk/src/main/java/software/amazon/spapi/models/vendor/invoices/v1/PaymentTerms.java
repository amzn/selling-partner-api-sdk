/*
 * Selling Partner API for Retail Procurement Payments
 * The Selling Partner API for Retail Procurement Payments provides programmatic access to vendors payments data.
 *
 * OpenAPI spec version: v1
 *
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */

package software.amazon.spapi.models.vendor.invoices.v1;

import com.google.gson.TypeAdapter;
import com.google.gson.annotations.JsonAdapter;
import com.google.gson.annotations.SerializedName;
import com.google.gson.stream.JsonReader;
import com.google.gson.stream.JsonWriter;
import io.swagger.v3.oas.annotations.media.Schema;
import java.io.IOException;
import java.math.BigDecimal;
import java.util.Objects;

/** Terms of the payment for the invoice. The basis of the payment terms is the invoice date. */
@Schema(description = "Terms of the payment for the invoice. The basis of the payment terms is the invoice date.")
public class PaymentTerms {
    /** The payment term type for the invoice. */
    @JsonAdapter(TypeEnum.Adapter.class)
    public enum TypeEnum {
        @SerializedName("Basic")
        BASIC("Basic"),
        @SerializedName("EndOfMonth")
        ENDOFMONTH("EndOfMonth"),
        @SerializedName("FixedDate")
        FIXEDDATE("FixedDate"),
        @SerializedName("Proximo")
        PROXIMO("Proximo"),
        @SerializedName("PaymentDueUponReceiptOfInvoice")
        PAYMENTDUEUPONRECEIPTOFINVOICE("PaymentDueUponReceiptOfInvoice"),
        @SerializedName("LetterofCredit")
        LETTEROFCREDIT("LetterofCredit");

        private String value;

        TypeEnum(String value) {
            this.value = value;
        }

        public String getValue() {
            return value;
        }

        @Override
        public String toString() {
            return String.valueOf(value);
        }

        public static TypeEnum fromValue(String input) {
            for (TypeEnum b : TypeEnum.values()) {
                if (b.value.equals(input)) {
                    return b;
                }
            }
            return null;
        }

        public static class Adapter extends TypeAdapter<TypeEnum> {
            @Override
            public void write(final JsonWriter jsonWriter, final TypeEnum enumeration) throws IOException {
                jsonWriter.value(String.valueOf(enumeration.getValue()));
            }

            @Override
            public TypeEnum read(final JsonReader jsonReader) throws IOException {
                Object value = jsonReader.nextString();
                return TypeEnum.fromValue((String) (value));
            }
        }
    }

    @SerializedName("type")
    private TypeEnum type = null;

    @SerializedName("discountPercent")
    private String discountPercent = null;

    @SerializedName("discountDueDays")
    private BigDecimal discountDueDays = null;

    @SerializedName("netDueDays")
    private BigDecimal netDueDays = null;

    public PaymentTerms type(TypeEnum type) {
        this.type = type;
        return this;
    }

    /**
     * The payment term type for the invoice.
     *
     * @return type
     */
    @Schema(description = "The payment term type for the invoice.")
    public TypeEnum getType() {
        return type;
    }

    public void setType(TypeEnum type) {
        this.type = type;
    }

    public PaymentTerms discountPercent(String discountPercent) {
        this.discountPercent = discountPercent;
        return this;
    }

    /**
     * Get discountPercent
     *
     * @return discountPercent
     */
    @Schema(description = "")
    public String getDiscountPercent() {
        return discountPercent;
    }

    public void setDiscountPercent(String discountPercent) {
        this.discountPercent = discountPercent;
    }

    public PaymentTerms discountDueDays(BigDecimal discountDueDays) {
        this.discountDueDays = discountDueDays;
        return this;
    }

    /**
     * The number of calendar days from the Base date (Invoice date) until the discount is no longer valid.
     *
     * @return discountDueDays
     */
    @Schema(
            description =
                    "The number of calendar days from the Base date (Invoice date) until the discount is no longer valid.")
    public BigDecimal getDiscountDueDays() {
        return discountDueDays;
    }

    public void setDiscountDueDays(BigDecimal discountDueDays) {
        this.discountDueDays = discountDueDays;
    }

    public PaymentTerms netDueDays(BigDecimal netDueDays) {
        this.netDueDays = netDueDays;
        return this;
    }

    /**
     * The number of calendar days from the base date (invoice date) until the total amount on the invoice is due.
     *
     * @return netDueDays
     */
    @Schema(
            description =
                    "The number of calendar days from the base date (invoice date) until the total amount on the invoice is due.")
    public BigDecimal getNetDueDays() {
        return netDueDays;
    }

    public void setNetDueDays(BigDecimal netDueDays) {
        this.netDueDays = netDueDays;
    }

    @Override
    public boolean equals(java.lang.Object o) {
        if (this == o) {
            return true;
        }
        if (o == null || getClass() != o.getClass()) {
            return false;
        }
        PaymentTerms paymentTerms = (PaymentTerms) o;
        return Objects.equals(this.type, paymentTerms.type)
                && Objects.equals(this.discountPercent, paymentTerms.discountPercent)
                && Objects.equals(this.discountDueDays, paymentTerms.discountDueDays)
                && Objects.equals(this.netDueDays, paymentTerms.netDueDays);
    }

    @Override
    public int hashCode() {
        return Objects.hash(type, discountPercent, discountDueDays, netDueDays);
    }

    @Override
    public String toString() {
        StringBuilder sb = new StringBuilder();
        sb.append("class PaymentTerms {\n");

        sb.append("    type: ").append(toIndentedString(type)).append("\n");
        sb.append("    discountPercent: ")
                .append(toIndentedString(discountPercent))
                .append("\n");
        sb.append("    discountDueDays: ")
                .append(toIndentedString(discountDueDays))
                .append("\n");
        sb.append("    netDueDays: ").append(toIndentedString(netDueDays)).append("\n");
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
