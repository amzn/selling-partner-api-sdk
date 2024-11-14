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

package com.amazon.SellingPartnerAPI;

import java.util.Objects;
import java.util.Arrays;
import io.swagger.v3.oas.annotations.media.Schema;
import com.google.gson.annotations.SerializedName;
import java.io.IOException;
import com.google.gson.TypeAdapter;
import com.google.gson.annotations.JsonAdapter;
import com.google.gson.stream.JsonReader;
import com.google.gson.stream.JsonWriter;

/**
 * The attribute to use to sort the results.
 */
@JsonAdapter(ListOffersSortKey.Adapter.class)
public enum ListOffersSortKey {
  @SerializedName("ASIN")
  ASIN("ASIN"),
  @SerializedName("SELLING_PARTNER_FUNDED_BASE_DISCOUNT_PERCENTAGE")
  SELLING_PARTNER_FUNDED_BASE_DISCOUNT_PERCENTAGE("SELLING_PARTNER_FUNDED_BASE_DISCOUNT_PERCENTAGE"),
  @SerializedName("SELLING_PARTNER_FUNDED_TIERED_DISCOUNT_PERCENTAGE")
  SELLING_PARTNER_FUNDED_TIERED_DISCOUNT_PERCENTAGE("SELLING_PARTNER_FUNDED_TIERED_DISCOUNT_PERCENTAGE"),
  @SerializedName("AMAZON_FUNDED_BASE_DISCOUNT_PERCENTAGE")
  AMAZON_FUNDED_BASE_DISCOUNT_PERCENTAGE("AMAZON_FUNDED_BASE_DISCOUNT_PERCENTAGE"),
  @SerializedName("AMAZON_FUNDED_TIERED_DISCOUNT_PERCENTAGE")
  AMAZON_FUNDED_TIERED_DISCOUNT_PERCENTAGE("AMAZON_FUNDED_TIERED_DISCOUNT_PERCENTAGE");

  private String value;

  ListOffersSortKey(String value) {
    this.value = value;
  }

  public String getValue() {
    return value;
  }

  @Override
  public String toString() {
    return String.valueOf(value);
  }

  public static ListOffersSortKey fromValue(String input) {
    for (ListOffersSortKey b : ListOffersSortKey.values()) {
      if (b.value.equals(input)) {
        return b;
      }
    }
    return null;
  }

  public static class Adapter extends TypeAdapter<ListOffersSortKey> {
    @Override
    public void write(final JsonWriter jsonWriter, final ListOffersSortKey enumeration) throws IOException {
      jsonWriter.value(String.valueOf(enumeration.getValue()));
    }

    @Override
    public ListOffersSortKey read(final JsonReader jsonReader) throws IOException {
      Object value = jsonReader.nextString();
      return ListOffersSortKey.fromValue((String)(value));
    }
  }
}
