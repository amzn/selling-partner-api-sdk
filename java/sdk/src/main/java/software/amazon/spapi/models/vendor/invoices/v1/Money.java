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

import java.util.Objects;
import java.util.Arrays;
import com.google.gson.TypeAdapter;
import com.google.gson.annotations.JsonAdapter;
import com.google.gson.annotations.SerializedName;
import com.google.gson.stream.JsonReader;
import com.google.gson.stream.JsonWriter;
import io.swagger.v3.oas.annotations.media.Schema;
import java.io.IOException;
/**
 * An amount of money, including units in the form of currency.
 */
@Schema(description = "An amount of money, including units in the form of currency.")


public class Money {
  @SerializedName("currencyCode")
  private String currencyCode = null;

  @SerializedName("amount")
  private String amount = null;

  public Money currencyCode(String currencyCode) {
    this.currencyCode = currencyCode;
    return this;
  }

   /**
   * Three-digit currency code in ISO 4217 format.
   * @return currencyCode
  **/
  @Schema(description = "Three-digit currency code in ISO 4217 format.")
  public String getCurrencyCode() {
    return currencyCode;
  }

  public void setCurrencyCode(String currencyCode) {
    this.currencyCode = currencyCode;
  }

  public Money amount(String amount) {
    this.amount = amount;
    return this;
  }

   /**
   * Get amount
   * @return amount
  **/
  @Schema(description = "")
  public String getAmount() {
    return amount;
  }

  public void setAmount(String amount) {
    this.amount = amount;
  }


  @Override
  public boolean equals(java.lang.Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    Money money = (Money) o;
    return Objects.equals(this.currencyCode, money.currencyCode) &&
        Objects.equals(this.amount, money.amount);
  }

  @Override
  public int hashCode() {
    return Objects.hash(currencyCode, amount);
  }


  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class Money {\n");
    
    sb.append("    currencyCode: ").append(toIndentedString(currencyCode)).append("\n");
    sb.append("    amount: ").append(toIndentedString(amount)).append("\n");
    sb.append("}");
    return sb.toString();
  }

  /**
   * Convert the given object to string with each line indented by 4 spaces
   * (except the first line).
   */
  private String toIndentedString(java.lang.Object o) {
    if (o == null) {
      return "null";
    }
    return o.toString().replace("\n", "\n    ");
  }

}
