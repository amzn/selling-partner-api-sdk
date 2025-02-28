/*
 * Selling Partner API for A+ Content Management
 * Use the A+ Content API to build applications that help selling partners add rich marketing content to their Amazon product detail pages. Selling partners can use A+ content to share their brand and product story, which helps buyers make informed purchasing decisions. Selling partners use content modules to add images and text.
 *
 * OpenAPI spec version: 2020-11-01
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */

package software.amazon.spapi.models.apluscontent.v2020_11_01;

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
 * A flag that provides additional information about an ASIN. This is contextual and can change depending on the request that generated it.
 */
@JsonAdapter(AsinBadge.Adapter.class)
public enum AsinBadge {
  @SerializedName("BRAND_NOT_ELIGIBLE")
  BRAND_NOT_ELIGIBLE("BRAND_NOT_ELIGIBLE"),
  @SerializedName("CATALOG_NOT_FOUND")
  CATALOG_NOT_FOUND("CATALOG_NOT_FOUND"),
  @SerializedName("CONTENT_NOT_PUBLISHED")
  CONTENT_NOT_PUBLISHED("CONTENT_NOT_PUBLISHED"),
  @SerializedName("CONTENT_PUBLISHED")
  CONTENT_PUBLISHED("CONTENT_PUBLISHED");

  private String value;

  AsinBadge(String value) {
    this.value = value;
  }

  public String getValue() {
    return value;
  }

  @Override
  public String toString() {
    return String.valueOf(value);
  }

  public static AsinBadge fromValue(String input) {
    for (AsinBadge b : AsinBadge.values()) {
      if (b.value.equals(input)) {
        return b;
      }
    }
    return null;
  }

  public static class Adapter extends TypeAdapter<AsinBadge> {
    @Override
    public void write(final JsonWriter jsonWriter, final AsinBadge enumeration) throws IOException {
      jsonWriter.value(String.valueOf(enumeration.getValue()));
    }

    @Override
    public AsinBadge read(final JsonReader jsonReader) throws IOException {
      Object value = jsonReader.nextString();
      return AsinBadge.fromValue((String)(value));
    }
  }
}
