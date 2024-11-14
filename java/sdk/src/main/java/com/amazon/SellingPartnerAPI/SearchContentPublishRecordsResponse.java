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

package com.amazon.SellingPartnerAPI;

import java.util.Objects;
import java.util.Arrays;
import com.amazon.SellingPartnerAPI.AplusPaginatedResponse;
import com.amazon.SellingPartnerAPI.PublishRecordList;
import com.google.gson.TypeAdapter;
import com.google.gson.annotations.JsonAdapter;
import com.google.gson.annotations.SerializedName;
import com.google.gson.stream.JsonReader;
import com.google.gson.stream.JsonWriter;
import io.swagger.v3.oas.annotations.media.Schema;
import java.io.IOException;
/**
 * SearchContentPublishRecordsResponse
 */

@javax.annotation.Generated(value = "io.swagger.codegen.v3.generators.java.JavaClientCodegen", date = "2024-11-14T09:07:54.361366Z[Etc/UTC]")

public class SearchContentPublishRecordsResponse extends AplusPaginatedResponse {
  @SerializedName("publishRecordList")
  private PublishRecordList publishRecordList = null;

  public SearchContentPublishRecordsResponse publishRecordList(PublishRecordList publishRecordList) {
    this.publishRecordList = publishRecordList;
    return this;
  }

   /**
   * Get publishRecordList
   * @return publishRecordList
  **/
  @Schema(required = true, description = "")
  public PublishRecordList getPublishRecordList() {
    return publishRecordList;
  }

  public void setPublishRecordList(PublishRecordList publishRecordList) {
    this.publishRecordList = publishRecordList;
  }


  @Override
  public boolean equals(java.lang.Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    SearchContentPublishRecordsResponse searchContentPublishRecordsResponse = (SearchContentPublishRecordsResponse) o;
    return Objects.equals(this.publishRecordList, searchContentPublishRecordsResponse.publishRecordList) &&
        super.equals(o);
  }

  @Override
  public int hashCode() {
    return Objects.hash(publishRecordList, super.hashCode());
  }


  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class SearchContentPublishRecordsResponse {\n");
    sb.append("    ").append(toIndentedString(super.toString())).append("\n");
    sb.append("    publishRecordList: ").append(toIndentedString(publishRecordList)).append("\n");
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
