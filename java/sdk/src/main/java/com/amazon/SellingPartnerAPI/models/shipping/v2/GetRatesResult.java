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

package com.amazon.SellingPartnerAPI.models.shipping.v2;

import java.util.Objects;
import java.util.Arrays;
import com.amazon.SellingPartnerAPI.models.shipping.v2.IneligibleRateList;
import com.amazon.SellingPartnerAPI.models.shipping.v2.RateList;
import com.google.gson.TypeAdapter;
import com.google.gson.annotations.JsonAdapter;
import com.google.gson.annotations.SerializedName;
import com.google.gson.stream.JsonReader;
import com.google.gson.stream.JsonWriter;
import io.swagger.v3.oas.annotations.media.Schema;
import java.io.IOException;
/**
 * The payload for the getRates operation.
 */
@Schema(description = "The payload for the getRates operation.")


public class GetRatesResult {
  @SerializedName("requestToken")
  private String requestToken = null;

  @SerializedName("rates")
  private RateList rates = null;

  @SerializedName("ineligibleRates")
  private IneligibleRateList ineligibleRates = null;

  public GetRatesResult requestToken(String requestToken) {
    this.requestToken = requestToken;
    return this;
  }

   /**
   * Get requestToken
   * @return requestToken
  **/
  @Schema(required = true, description = "")
  public String getRequestToken() {
    return requestToken;
  }

  public void setRequestToken(String requestToken) {
    this.requestToken = requestToken;
  }

  public GetRatesResult rates(RateList rates) {
    this.rates = rates;
    return this;
  }

   /**
   * Get rates
   * @return rates
  **/
  @Schema(required = true, description = "")
  public RateList getRates() {
    return rates;
  }

  public void setRates(RateList rates) {
    this.rates = rates;
  }

  public GetRatesResult ineligibleRates(IneligibleRateList ineligibleRates) {
    this.ineligibleRates = ineligibleRates;
    return this;
  }

   /**
   * Get ineligibleRates
   * @return ineligibleRates
  **/
  @Schema(description = "")
  public IneligibleRateList getIneligibleRates() {
    return ineligibleRates;
  }

  public void setIneligibleRates(IneligibleRateList ineligibleRates) {
    this.ineligibleRates = ineligibleRates;
  }


  @Override
  public boolean equals(java.lang.Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    GetRatesResult getRatesResult = (GetRatesResult) o;
    return Objects.equals(this.requestToken, getRatesResult.requestToken) &&
        Objects.equals(this.rates, getRatesResult.rates) &&
        Objects.equals(this.ineligibleRates, getRatesResult.ineligibleRates);
  }

  @Override
  public int hashCode() {
    return Objects.hash(requestToken, rates, ineligibleRates);
  }


  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class GetRatesResult {\n");
    
    sb.append("    requestToken: ").append(toIndentedString(requestToken)).append("\n");
    sb.append("    rates: ").append(toIndentedString(rates)).append("\n");
    sb.append("    ineligibleRates: ").append(toIndentedString(ineligibleRates)).append("\n");
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
