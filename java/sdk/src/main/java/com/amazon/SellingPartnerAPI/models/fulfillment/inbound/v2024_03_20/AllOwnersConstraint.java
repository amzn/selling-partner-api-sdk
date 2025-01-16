/*
 * Fulfillment Inbound v2024-03-20
 * The Selling Partner API for Fulfillment By Amazon (FBA) Inbound. The FBA Inbound API enables building inbound workflows to create, manage, and send shipments into Amazon's fulfillment network. The API has interoperability with the Send-to-Amazon user interface.
 *
 * OpenAPI spec version: 2024-03-20
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */

package com.amazon.SellingPartnerAPI.models.fulfillment.inbound.v2024_03_20;

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
 * A constraint that applies to all owners. If no constraint is specified, defer to any individual owner constraints.
 */
@JsonAdapter(AllOwnersConstraint.Adapter.class)
public enum AllOwnersConstraint {
  @SerializedName("MUST_MATCH")
  MUST_MATCH("MUST_MATCH");

  private String value;

  AllOwnersConstraint(String value) {
    this.value = value;
  }

  public String getValue() {
    return value;
  }

  @Override
  public String toString() {
    return String.valueOf(value);
  }

  public static AllOwnersConstraint fromValue(String input) {
    for (AllOwnersConstraint b : AllOwnersConstraint.values()) {
      if (b.value.equals(input)) {
        return b;
      }
    }
    return null;
  }

  public static class Adapter extends TypeAdapter<AllOwnersConstraint> {
    @Override
    public void write(final JsonWriter jsonWriter, final AllOwnersConstraint enumeration) throws IOException {
      jsonWriter.value(String.valueOf(enumeration.getValue()));
    }

    @Override
    public AllOwnersConstraint read(final JsonReader jsonReader) throws IOException {
      Object value = jsonReader.nextString();
      return AllOwnersConstraint.fromValue((String)(value));
    }
  }
}
