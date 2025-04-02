/*
 * The Selling Partner API for FBA inbound operations.
 * The Selling Partner API for Fulfillment By Amazon (FBA) Inbound. The FBA Inbound API enables building inbound workflows to create, manage, and send shipments into Amazon's fulfillment network. The API has interoperability with the Send-to-Amazon user interface.
 *
 * OpenAPI spec version: 2024-03-20
 *
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */

package software.amazon.spapi.models.fulfillment.inbound.v2024_03_20;

import com.google.gson.annotations.SerializedName;
import io.swagger.v3.oas.annotations.media.Schema;
import java.math.BigDecimal;
import java.util.Objects;

/** The type and amount of currency. */
@Schema(description = "The type and amount of currency.")
public class Currency {
    @SerializedName("amount")
    private BigDecimal amount = null;

    @SerializedName("code")
    private String code = null;

    public Currency amount(BigDecimal amount) {
        this.amount = amount;
        return this;
    }

    /**
     * Decimal value of the currency.
     *
     * @return amount
     */
    @Schema(required = true, description = "Decimal value of the currency.")
    public BigDecimal getAmount() {
        return amount;
    }

    public void setAmount(BigDecimal amount) {
        this.amount = amount;
    }

    public Currency code(String code) {
        this.code = code;
        return this;
    }

    /**
     * ISO 4217 standard of a currency code.
     *
     * @return code
     */
    @Schema(required = true, description = "ISO 4217 standard of a currency code.")
    public String getCode() {
        return code;
    }

    public void setCode(String code) {
        this.code = code;
    }

    @Override
    public boolean equals(java.lang.Object o) {
        if (this == o) {
            return true;
        }
        if (o == null || getClass() != o.getClass()) {
            return false;
        }
        Currency currency = (Currency) o;
        return Objects.equals(this.amount, currency.amount) && Objects.equals(this.code, currency.code);
    }

    @Override
    public int hashCode() {
        return Objects.hash(amount, code);
    }

    @Override
    public String toString() {
        StringBuilder sb = new StringBuilder();
        sb.append("class Currency {\n");

        sb.append("    amount: ").append(toIndentedString(amount)).append("\n");
        sb.append("    code: ").append(toIndentedString(code)).append("\n");
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
