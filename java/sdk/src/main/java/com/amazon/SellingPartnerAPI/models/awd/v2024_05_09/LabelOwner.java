/*
 * The Selling Partner API for Amazon Warehousing and Distribution
 * The Selling Partner API for Amazon Warehousing and Distribution (AWD) provides programmatic access to information about AWD shipments and inventory. 
 *
 * OpenAPI spec version: 2024-05-09
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */

package com.amazon.SellingPartnerAPI.models.awd.v2024_05_09;

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
 * The entity that labels the products.
 */
@JsonAdapter(LabelOwner.Adapter.class)
public enum LabelOwner {
  @SerializedName("AMAZON")
  AMAZON("AMAZON"),
  @SerializedName("SELF")
  SELF("SELF");

  private String value;

  LabelOwner(String value) {
    this.value = value;
  }

  public String getValue() {
    return value;
  }

  @Override
  public String toString() {
    return String.valueOf(value);
  }

  public static LabelOwner fromValue(String input) {
    for (LabelOwner b : LabelOwner.values()) {
      if (b.value.equals(input)) {
        return b;
      }
    }
    return null;
  }

  public static class Adapter extends TypeAdapter<LabelOwner> {
    @Override
    public void write(final JsonWriter jsonWriter, final LabelOwner enumeration) throws IOException {
      jsonWriter.value(String.valueOf(enumeration.getValue()));
    }

    @Override
    public LabelOwner read(final JsonReader jsonReader) throws IOException {
      Object value = jsonReader.nextString();
      return LabelOwner.fromValue((String)(value));
    }
  }
}
