/*
 * Selling Partner API for Solicitations
 * With the Solicitations API you can build applications that send non-critical solicitations to buyers. You can get a list of solicitation types that are available for an order that you specify, then call an operation that sends a solicitation to the buyer for that order. Buyers cannot respond to solicitations sent by this API, and these solicitations do not appear in the Messaging section of Seller Central or in the recipient's Message Center. The Solicitations API returns responses that are formed according to the <a href=https://tools.ietf.org/html/draft-kelly-json-hal-08>JSON Hypertext Application Language</a> (HAL) standard.
 *
 * OpenAPI spec version: v1
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */

package com.amazon.SellingPartnerAPI.models.solicitations.v1;

import java.util.Objects;
import java.util.Arrays;
import com.amazon.SellingPartnerAPI.models.solicitations.v1.ErrorList;
import com.amazon.SellingPartnerAPI.models.solicitations.v1.GetSchemaResponseLinks;
import com.google.gson.TypeAdapter;
import com.google.gson.annotations.JsonAdapter;
import com.google.gson.annotations.SerializedName;
import com.google.gson.stream.JsonReader;
import com.google.gson.stream.JsonWriter;
import io.swagger.v3.oas.annotations.media.Schema;
import java.io.IOException;
/**
 * GetSchemaResponse
 */



public class GetSchemaResponse {
  @SerializedName("_links")
  private GetSchemaResponseLinks _links = null;

  @SerializedName("payload")
  private io.swagger.v3.oas.annotations.media.Schema payload = null;

  @SerializedName("errors")
  private ErrorList errors = null;

  public GetSchemaResponse _links(GetSchemaResponseLinks _links) {
    this._links = _links;
    return this;
  }

   /**
   * Get _links
   * @return _links
  **/
  @Schema(description = "")
  public GetSchemaResponseLinks getLinks() {
    return _links;
  }

  public void setLinks(GetSchemaResponseLinks _links) {
    this._links = _links;
  }

  public GetSchemaResponse payload(io.swagger.v3.oas.annotations.media.Schema payload) {
    this.payload = payload;
    return this;
  }

   /**
   * Get payload
   * @return payload
  **/
  @Schema(description = "")
  public io.swagger.v3.oas.annotations.media.Schema getPayload() {
    return payload;
  }

  public void setPayload(io.swagger.v3.oas.annotations.media.Schema payload) {
    this.payload = payload;
  }

  public GetSchemaResponse errors(ErrorList errors) {
    this.errors = errors;
    return this;
  }

   /**
   * Get errors
   * @return errors
  **/
  @Schema(description = "")
  public ErrorList getErrors() {
    return errors;
  }

  public void setErrors(ErrorList errors) {
    this.errors = errors;
  }


  @Override
  public boolean equals(java.lang.Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    GetSchemaResponse getSchemaResponse = (GetSchemaResponse) o;
    return Objects.equals(this._links, getSchemaResponse._links) &&
        Objects.equals(this.payload, getSchemaResponse.payload) &&
        Objects.equals(this.errors, getSchemaResponse.errors);
  }

  @Override
  public int hashCode() {
    return Objects.hash(_links, payload, errors);
  }


  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class GetSchemaResponse {\n");
    
    sb.append("    _links: ").append(toIndentedString(_links)).append("\n");
    sb.append("    payload: ").append(toIndentedString(payload)).append("\n");
    sb.append("    errors: ").append(toIndentedString(errors)).append("\n");
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
