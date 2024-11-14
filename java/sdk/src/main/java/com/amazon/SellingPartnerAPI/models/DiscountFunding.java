/*
 * Selling Partner API for Replenishment
 * The Selling Partner API for Replenishment (Replenishment API) provides programmatic access to replenishment program metrics and offers. These programs provide recurring delivery of any replenishable item at a frequency chosen by the customer.  The Replenishment API is available worldwide wherever Amazon Subscribe & Save is available or is supported. The API is available to vendors and FBA selling partners.
 *
 * OpenAPI spec version: 2022-11-07
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */

package com.amazon.SellingPartnerAPI.models;

import java.util.Objects;
import java.util.Arrays;
import com.google.gson.TypeAdapter;
import com.google.gson.annotations.JsonAdapter;
import com.google.gson.annotations.SerializedName;
import com.google.gson.stream.JsonReader;
import com.google.gson.stream.JsonWriter;
import io.swagger.v3.oas.annotations.media.Schema;
import java.io.IOException;
import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.List;
/**
 * The discount funding on the offer.
 */
@Schema(description = "The discount funding on the offer.")


public class DiscountFunding {
  @SerializedName("percentage")
  private List<BigDecimal> percentage = null;

  public DiscountFunding percentage(List<BigDecimal> percentage) {
    this.percentage = percentage;
    return this;
  }

  public DiscountFunding addPercentageItem(BigDecimal percentageItem) {
    if (this.percentage == null) {
      this.percentage = new ArrayList<BigDecimal>();
    }
    this.percentage.add(percentageItem);
    return this;
  }

   /**
   * Filters the results to only include offers with the percentage specified.
   * @return percentage
  **/
  @Schema(description = "Filters the results to only include offers with the percentage specified.")
  public List<BigDecimal> getPercentage() {
    return percentage;
  }

  public void setPercentage(List<BigDecimal> percentage) {
    this.percentage = percentage;
  }


  @Override
  public boolean equals(java.lang.Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    DiscountFunding discountFunding = (DiscountFunding) o;
    return Objects.equals(this.percentage, discountFunding.percentage);
  }

  @Override
  public int hashCode() {
    return Objects.hash(percentage);
  }


  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class DiscountFunding {\n");
    
    sb.append("    percentage: ").append(toIndentedString(percentage)).append("\n");
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
