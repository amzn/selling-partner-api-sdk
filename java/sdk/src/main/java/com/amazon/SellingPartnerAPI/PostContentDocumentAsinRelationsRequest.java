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
import com.amazon.SellingPartnerAPI.AsinSet;
import com.google.gson.TypeAdapter;
import com.google.gson.annotations.JsonAdapter;
import com.google.gson.annotations.SerializedName;
import com.google.gson.stream.JsonReader;
import com.google.gson.stream.JsonWriter;
import io.swagger.v3.oas.annotations.media.Schema;
import java.io.IOException;
/**
 * PostContentDocumentAsinRelationsRequest
 */

@javax.annotation.Generated(value = "io.swagger.codegen.v3.generators.java.JavaClientCodegen", date = "2024-11-14T09:07:54.361366Z[Etc/UTC]")

public class PostContentDocumentAsinRelationsRequest {
  @SerializedName("asinSet")
  private AsinSet asinSet = null;

  public PostContentDocumentAsinRelationsRequest asinSet(AsinSet asinSet) {
    this.asinSet = asinSet;
    return this;
  }

   /**
   * Get asinSet
   * @return asinSet
  **/
  @Schema(required = true, description = "")
  public AsinSet getAsinSet() {
    return asinSet;
  }

  public void setAsinSet(AsinSet asinSet) {
    this.asinSet = asinSet;
  }


  @Override
  public boolean equals(java.lang.Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    PostContentDocumentAsinRelationsRequest postContentDocumentAsinRelationsRequest = (PostContentDocumentAsinRelationsRequest) o;
    return Objects.equals(this.asinSet, postContentDocumentAsinRelationsRequest.asinSet);
  }

  @Override
  public int hashCode() {
    return Objects.hash(asinSet);
  }


  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class PostContentDocumentAsinRelationsRequest {\n");
    
    sb.append("    asinSet: ").append(toIndentedString(asinSet)).append("\n");
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
