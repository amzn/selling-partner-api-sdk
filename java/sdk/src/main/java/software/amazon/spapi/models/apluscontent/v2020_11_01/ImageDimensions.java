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
import com.google.gson.TypeAdapter;
import com.google.gson.annotations.JsonAdapter;
import com.google.gson.annotations.SerializedName;
import com.google.gson.stream.JsonReader;
import com.google.gson.stream.JsonWriter;
import io.swagger.v3.oas.annotations.media.Schema;
import java.io.IOException;
import software.amazon.spapi.models.apluscontent.v2020_11_01.IntegerWithUnits;
/**
 * The dimensions that extend from the top left corner of the image (this applies to cropped and uncropped images). &#x60;ImageDimensions&#x60; units must be in pixels.
 */
@Schema(description = "The dimensions that extend from the top left corner of the image (this applies to cropped and uncropped images). `ImageDimensions` units must be in pixels.")


public class ImageDimensions {
  @SerializedName("width")
  private IntegerWithUnits width = null;

  @SerializedName("height")
  private IntegerWithUnits height = null;

  public ImageDimensions width(IntegerWithUnits width) {
    this.width = width;
    return this;
  }

   /**
   * Get width
   * @return width
  **/
  @Schema(required = true, description = "")
  public IntegerWithUnits getWidth() {
    return width;
  }

  public void setWidth(IntegerWithUnits width) {
    this.width = width;
  }

  public ImageDimensions height(IntegerWithUnits height) {
    this.height = height;
    return this;
  }

   /**
   * Get height
   * @return height
  **/
  @Schema(required = true, description = "")
  public IntegerWithUnits getHeight() {
    return height;
  }

  public void setHeight(IntegerWithUnits height) {
    this.height = height;
  }


  @Override
  public boolean equals(java.lang.Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    ImageDimensions imageDimensions = (ImageDimensions) o;
    return Objects.equals(this.width, imageDimensions.width) &&
        Objects.equals(this.height, imageDimensions.height);
  }

  @Override
  public int hashCode() {
    return Objects.hash(width, height);
  }


  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class ImageDimensions {\n");
    
    sb.append("    width: ").append(toIndentedString(width)).append("\n");
    sb.append("    height: ").append(toIndentedString(height)).append("\n");
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
