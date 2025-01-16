/*
 * Selling Partner API for Finances
 * The Selling Partner API for Finances helps you obtain financial information relevant to a seller's business. You can obtain financial events for a given order, financial event group, or date range without having to wait until a statement period closes. You can also obtain financial event groups for a given date range.
 *
 * OpenAPI spec version: v0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */

package com.amazon.SellingPartnerAPI.models.finances.v0;

import java.util.Objects;
import java.util.Arrays;
import com.amazon.SellingPartnerAPI.models.finances.v0.Currency;
import com.google.gson.TypeAdapter;
import com.google.gson.annotations.JsonAdapter;
import com.google.gson.annotations.SerializedName;
import com.google.gson.stream.JsonReader;
import com.google.gson.stream.JsonWriter;
import io.swagger.v3.oas.annotations.media.Schema;
import java.io.IOException;
/**
 * A payment instrument.
 */
@Schema(description = "A payment instrument.")


public class ChargeInstrument {
  @SerializedName("Description")
  private String description = null;

  @SerializedName("Tail")
  private String tail = null;

  @SerializedName("Amount")
  private Currency amount = null;

  public ChargeInstrument description(String description) {
    this.description = description;
    return this;
  }

   /**
   * A short description of the charge instrument.
   * @return description
  **/
  @Schema(description = "A short description of the charge instrument.")
  public String getDescription() {
    return description;
  }

  public void setDescription(String description) {
    this.description = description;
  }

  public ChargeInstrument tail(String tail) {
    this.tail = tail;
    return this;
  }

   /**
   * The account tail (trailing digits) of the charge instrument.
   * @return tail
  **/
  @Schema(description = "The account tail (trailing digits) of the charge instrument.")
  public String getTail() {
    return tail;
  }

  public void setTail(String tail) {
    this.tail = tail;
  }

  public ChargeInstrument amount(Currency amount) {
    this.amount = amount;
    return this;
  }

   /**
   * Get amount
   * @return amount
  **/
  @Schema(description = "")
  public Currency getAmount() {
    return amount;
  }

  public void setAmount(Currency amount) {
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
    ChargeInstrument chargeInstrument = (ChargeInstrument) o;
    return Objects.equals(this.description, chargeInstrument.description) &&
        Objects.equals(this.tail, chargeInstrument.tail) &&
        Objects.equals(this.amount, chargeInstrument.amount);
  }

  @Override
  public int hashCode() {
    return Objects.hash(description, tail, amount);
  }


  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class ChargeInstrument {\n");
    
    sb.append("    description: ").append(toIndentedString(description)).append("\n");
    sb.append("    tail: ").append(toIndentedString(tail)).append("\n");
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
