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

package com.amazon.SellingPartnerAPI.models.apluscontent.v2020_11_01;

import java.util.Objects;
import java.util.Arrays;
import com.amazon.SellingPartnerAPI.models.apluscontent.v2020_11_01.ContentModuleList;
import com.amazon.SellingPartnerAPI.models.apluscontent.v2020_11_01.ContentType;
import com.google.gson.TypeAdapter;
import com.google.gson.annotations.JsonAdapter;
import com.google.gson.annotations.SerializedName;
import com.google.gson.stream.JsonReader;
import com.google.gson.stream.JsonWriter;
import io.swagger.v3.oas.annotations.media.Schema;
import java.io.IOException;
/**
 * The A+ Content document. This is the enhanced content that is published to product detail pages.
 */
@Schema(description = "The A+ Content document. This is the enhanced content that is published to product detail pages.")


public class ContentDocument {
  @SerializedName("name")
  private String name = null;

  @SerializedName("contentType")
  private ContentType contentType = null;

  @SerializedName("contentSubType")
  private String contentSubType = null;

  @SerializedName("locale")
  private String locale = null;

  @SerializedName("contentModuleList")
  private ContentModuleList contentModuleList = null;

  public ContentDocument name(String name) {
    this.name = name;
    return this;
  }

   /**
   * The A+ Content document name.
   * @return name
  **/
  @Schema(required = true, description = "The A+ Content document name.")
  public String getName() {
    return name;
  }

  public void setName(String name) {
    this.name = name;
  }

  public ContentDocument contentType(ContentType contentType) {
    this.contentType = contentType;
    return this;
  }

   /**
   * Get contentType
   * @return contentType
  **/
  @Schema(required = true, description = "")
  public ContentType getContentType() {
    return contentType;
  }

  public void setContentType(ContentType contentType) {
    this.contentType = contentType;
  }

  public ContentDocument contentSubType(String contentSubType) {
    this.contentSubType = contentSubType;
    return this;
  }

   /**
   * Get contentSubType
   * @return contentSubType
  **/
  @Schema(description = "")
  public String getContentSubType() {
    return contentSubType;
  }

  public void setContentSubType(String contentSubType) {
    this.contentSubType = contentSubType;
  }

  public ContentDocument locale(String locale) {
    this.locale = locale;
    return this;
  }

   /**
   * Get locale
   * @return locale
  **/
  @Schema(required = true, description = "")
  public String getLocale() {
    return locale;
  }

  public void setLocale(String locale) {
    this.locale = locale;
  }

  public ContentDocument contentModuleList(ContentModuleList contentModuleList) {
    this.contentModuleList = contentModuleList;
    return this;
  }

   /**
   * Get contentModuleList
   * @return contentModuleList
  **/
  @Schema(required = true, description = "")
  public ContentModuleList getContentModuleList() {
    return contentModuleList;
  }

  public void setContentModuleList(ContentModuleList contentModuleList) {
    this.contentModuleList = contentModuleList;
  }


  @Override
  public boolean equals(java.lang.Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    ContentDocument contentDocument = (ContentDocument) o;
    return Objects.equals(this.name, contentDocument.name) &&
        Objects.equals(this.contentType, contentDocument.contentType) &&
        Objects.equals(this.contentSubType, contentDocument.contentSubType) &&
        Objects.equals(this.locale, contentDocument.locale) &&
        Objects.equals(this.contentModuleList, contentDocument.contentModuleList);
  }

  @Override
  public int hashCode() {
    return Objects.hash(name, contentType, contentSubType, locale, contentModuleList);
  }


  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class ContentDocument {\n");
    
    sb.append("    name: ").append(toIndentedString(name)).append("\n");
    sb.append("    contentType: ").append(toIndentedString(contentType)).append("\n");
    sb.append("    contentSubType: ").append(toIndentedString(contentSubType)).append("\n");
    sb.append("    locale: ").append(toIndentedString(locale)).append("\n");
    sb.append("    contentModuleList: ").append(toIndentedString(contentModuleList)).append("\n");
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
