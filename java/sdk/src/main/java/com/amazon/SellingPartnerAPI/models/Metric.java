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
import io.swagger.v3.oas.annotations.media.Schema;
import com.google.gson.annotations.SerializedName;
import java.io.IOException;
import com.google.gson.TypeAdapter;
import com.google.gson.annotations.JsonAdapter;
import com.google.gson.stream.JsonReader;
import com.google.gson.stream.JsonWriter;

/**
 * The metric name and description.
 */
@JsonAdapter(Metric.Adapter.class)
public enum Metric {
  @SerializedName("SHIPPED_SUBSCRIPTION_UNITS")
  SHIPPED_SUBSCRIPTION_UNITS("SHIPPED_SUBSCRIPTION_UNITS"),
  @SerializedName("TOTAL_SUBSCRIPTIONS_REVENUE")
  TOTAL_SUBSCRIPTIONS_REVENUE("TOTAL_SUBSCRIPTIONS_REVENUE"),
  @SerializedName("ACTIVE_SUBSCRIPTIONS")
  ACTIVE_SUBSCRIPTIONS("ACTIVE_SUBSCRIPTIONS"),
  @SerializedName("NOT_DELIVERED_DUE_TO_OOS")
  NOT_DELIVERED_DUE_TO_OOS("NOT_DELIVERED_DUE_TO_OOS"),
  @SerializedName("SUBSCRIBER_NON_SUBSCRIBER_AVERAGE_REVENUE")
  SUBSCRIBER_NON_SUBSCRIBER_AVERAGE_REVENUE("SUBSCRIBER_NON_SUBSCRIBER_AVERAGE_REVENUE"),
  @SerializedName("LOST_REVENUE_DUE_TO_OOS")
  LOST_REVENUE_DUE_TO_OOS("LOST_REVENUE_DUE_TO_OOS"),
  @SerializedName("SUBSCRIBER_NON_SUBSCRIBER_AVERAGE_REORDERS")
  SUBSCRIBER_NON_SUBSCRIBER_AVERAGE_REORDERS("SUBSCRIBER_NON_SUBSCRIBER_AVERAGE_REORDERS"),
  @SerializedName("COUPONS_REVENUE_PENETRATION")
  COUPONS_REVENUE_PENETRATION("COUPONS_REVENUE_PENETRATION");

  private String value;

  Metric(String value) {
    this.value = value;
  }

  public String getValue() {
    return value;
  }

  @Override
  public String toString() {
    return String.valueOf(value);
  }

  public static Metric fromValue(String input) {
    for (Metric b : Metric.values()) {
      if (b.value.equals(input)) {
        return b;
      }
    }
    return null;
  }

  public static class Adapter extends TypeAdapter<Metric> {
    @Override
    public void write(final JsonWriter jsonWriter, final Metric enumeration) throws IOException {
      jsonWriter.value(String.valueOf(enumeration.getValue()));
    }

    @Override
    public Metric read(final JsonReader jsonReader) throws IOException {
      Object value = jsonReader.nextString();
      return Metric.fromValue((String)(value));
    }
  }
}
