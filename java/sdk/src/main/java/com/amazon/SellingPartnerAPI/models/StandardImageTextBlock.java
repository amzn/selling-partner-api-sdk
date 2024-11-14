/*
 * Selling Partner API for A+ Content Management
 * With the A+ Content API, you can build applications that help selling partners add rich marketing content to their Amazon product detail pages. A+ content helps selling partners share their brand and product story, which helps buyers make informed purchasing decisions. Selling partners assemble content by choosing from content modules and adding images and text.
 *
 * OpenAPI spec version: 2020-11-01
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */

package com.amazon.SellingPartnerAPI.models;

import java.util.Objects;
import java.util.Arrays;
import com.amazon.SellingPartnerAPI.models.ImageComponent;
import com.amazon.SellingPartnerAPI.models.ParagraphComponent;
import com.amazon.SellingPartnerAPI.models.TextComponent;
import com.google.gson.TypeAdapter;
import com.google.gson.annotations.JsonAdapter;
import com.google.gson.annotations.SerializedName;
import com.google.gson.stream.JsonReader;
import com.google.gson.stream.JsonWriter;
import io.swagger.v3.oas.annotations.media.Schema;
import java.io.IOException;
/**
 * The A+ Content standard image and text box block.
 */
@Schema(description = "The A+ Content standard image and text box block.")


public class StandardImageTextBlock {
  @SerializedName("image")
  private ImageComponent image = null;

  @SerializedName("headline")
  private TextComponent headline = null;

  @SerializedName("body")
  private ParagraphComponent body = null;

  public StandardImageTextBlock image(ImageComponent image) {
    this.image = image;
    return this;
  }

   /**
   * Get image
   * @return image
  **/
  @Schema(description = "")
  public ImageComponent getImage() {
    return image;
  }

  public void setImage(ImageComponent image) {
    this.image = image;
  }

  public StandardImageTextBlock headline(TextComponent headline) {
    this.headline = headline;
    return this;
  }

   /**
   * Get headline
   * @return headline
  **/
  @Schema(description = "")
  public TextComponent getHeadline() {
    return headline;
  }

  public void setHeadline(TextComponent headline) {
    this.headline = headline;
  }

  public StandardImageTextBlock body(ParagraphComponent body) {
    this.body = body;
    return this;
  }

   /**
   * Get body
   * @return body
  **/
  @Schema(description = "")
  public ParagraphComponent getBody() {
    return body;
  }

  public void setBody(ParagraphComponent body) {
    this.body = body;
  }


  @Override
  public boolean equals(java.lang.Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    StandardImageTextBlock standardImageTextBlock = (StandardImageTextBlock) o;
    return Objects.equals(this.image, standardImageTextBlock.image) &&
        Objects.equals(this.headline, standardImageTextBlock.headline) &&
        Objects.equals(this.body, standardImageTextBlock.body);
  }

  @Override
  public int hashCode() {
    return Objects.hash(image, headline, body);
  }


  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class StandardImageTextBlock {\n");
    
    sb.append("    image: ").append(toIndentedString(image)).append("\n");
    sb.append("    headline: ").append(toIndentedString(headline)).append("\n");
    sb.append("    body: ").append(toIndentedString(body)).append("\n");
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
