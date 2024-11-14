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

package com.amazon.SellingPartnerAPI.models;

import java.util.Objects;
import java.util.Arrays;
import com.amazon.SellingPartnerAPI.models.Currency;
import com.google.gson.TypeAdapter;
import com.google.gson.annotations.JsonAdapter;
import com.google.gson.annotations.SerializedName;
import com.google.gson.stream.JsonReader;
import com.google.gson.stream.JsonWriter;
import io.swagger.v3.oas.annotations.media.Schema;
import java.io.IOException;
/**
 * A loan advance, loan payment, or loan refund.
 */
@Schema(description = "A loan advance, loan payment, or loan refund.")


public class LoanServicingEvent {
  @SerializedName("LoanAmount")
  private Currency loanAmount = null;

  @SerializedName("SourceBusinessEventType")
  private String sourceBusinessEventType = null;

  public LoanServicingEvent loanAmount(Currency loanAmount) {
    this.loanAmount = loanAmount;
    return this;
  }

   /**
   * Get loanAmount
   * @return loanAmount
  **/
  @Schema(description = "")
  public Currency getLoanAmount() {
    return loanAmount;
  }

  public void setLoanAmount(Currency loanAmount) {
    this.loanAmount = loanAmount;
  }

  public LoanServicingEvent sourceBusinessEventType(String sourceBusinessEventType) {
    this.sourceBusinessEventType = sourceBusinessEventType;
    return this;
  }

   /**
   * The type of event.  Possible values:  * LoanAdvance  * LoanPayment  * LoanRefund
   * @return sourceBusinessEventType
  **/
  @Schema(description = "The type of event.  Possible values:  * LoanAdvance  * LoanPayment  * LoanRefund")
  public String getSourceBusinessEventType() {
    return sourceBusinessEventType;
  }

  public void setSourceBusinessEventType(String sourceBusinessEventType) {
    this.sourceBusinessEventType = sourceBusinessEventType;
  }


  @Override
  public boolean equals(java.lang.Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    LoanServicingEvent loanServicingEvent = (LoanServicingEvent) o;
    return Objects.equals(this.loanAmount, loanServicingEvent.loanAmount) &&
        Objects.equals(this.sourceBusinessEventType, loanServicingEvent.sourceBusinessEventType);
  }

  @Override
  public int hashCode() {
    return Objects.hash(loanAmount, sourceBusinessEventType);
  }


  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class LoanServicingEvent {\n");
    
    sb.append("    loanAmount: ").append(toIndentedString(loanAmount)).append("\n");
    sb.append("    sourceBusinessEventType: ").append(toIndentedString(sourceBusinessEventType)).append("\n");
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
