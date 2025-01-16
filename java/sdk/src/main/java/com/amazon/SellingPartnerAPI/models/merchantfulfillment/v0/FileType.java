/*
 * Selling Partner API for Merchant Fulfillment
 * With the Selling Partner API for Merchant Fulfillment, you can build applications that sellers can use to purchase shipping for non-Prime and Prime orders using Amazon's Buy Shipping Services.
 *
 * OpenAPI spec version: v0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */

package com.amazon.SellingPartnerAPI.models.merchantfulfillment.v0;

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
 * The file type for a label.
 */
@JsonAdapter(FileType.Adapter.class)
public enum FileType {
  @SerializedName("application/pdf")
  APPLICATION_PDF("application/pdf"),
  @SerializedName("application/zpl")
  APPLICATION_ZPL("application/zpl"),
  @SerializedName("image/png")
  IMAGE_PNG("image/png");

  private String value;

  FileType(String value) {
    this.value = value;
  }

  public String getValue() {
    return value;
  }

  @Override
  public String toString() {
    return String.valueOf(value);
  }

  public static FileType fromValue(String input) {
    for (FileType b : FileType.values()) {
      if (b.value.equals(input)) {
        return b;
      }
    }
    return null;
  }

  public static class Adapter extends TypeAdapter<FileType> {
    @Override
    public void write(final JsonWriter jsonWriter, final FileType enumeration) throws IOException {
      jsonWriter.value(String.valueOf(enumeration.getValue()));
    }

    @Override
    public FileType read(final JsonReader jsonReader) throws IOException {
      Object value = jsonReader.nextString();
      return FileType.fromValue((String)(value));
    }
  }
}
