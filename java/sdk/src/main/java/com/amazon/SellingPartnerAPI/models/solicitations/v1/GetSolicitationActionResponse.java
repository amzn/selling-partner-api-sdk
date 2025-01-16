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
import com.amazon.SellingPartnerAPI.models.solicitations.v1.GetSolicitationActionResponseEmbedded;
import com.amazon.SellingPartnerAPI.models.solicitations.v1.GetSolicitationActionResponseLinks;
import com.amazon.SellingPartnerAPI.models.solicitations.v1.SolicitationsAction;
import com.google.gson.TypeAdapter;
import com.google.gson.annotations.JsonAdapter;
import com.google.gson.annotations.SerializedName;
import com.google.gson.stream.JsonReader;
import com.google.gson.stream.JsonWriter;
import io.swagger.v3.oas.annotations.media.Schema;
import java.io.IOException;
/**
 * Describes a solicitation action that can be taken for an order. Provides a JSON Hypertext Application Language (HAL) link to the JSON schema document that describes the expected input.
 */
@Schema(description = "Describes a solicitation action that can be taken for an order. Provides a JSON Hypertext Application Language (HAL) link to the JSON schema document that describes the expected input.")


public class GetSolicitationActionResponse {
  @SerializedName("_links")
  private GetSolicitationActionResponseLinks _links = null;

  @SerializedName("_embedded")
  private GetSolicitationActionResponseEmbedded _embedded = null;

  @SerializedName("payload")
  private SolicitationsAction payload = null;

  @SerializedName("errors")
  private ErrorList errors = null;

  public GetSolicitationActionResponse _links(GetSolicitationActionResponseLinks _links) {
    this._links = _links;
    return this;
  }

   /**
   * Get _links
   * @return _links
  **/
  @Schema(description = "")
  public GetSolicitationActionResponseLinks getLinks() {
    return _links;
  }

  public void setLinks(GetSolicitationActionResponseLinks _links) {
    this._links = _links;
  }

  public GetSolicitationActionResponse _embedded(GetSolicitationActionResponseEmbedded _embedded) {
    this._embedded = _embedded;
    return this;
  }

   /**
   * Get _embedded
   * @return _embedded
  **/
  @Schema(description = "")
  public GetSolicitationActionResponseEmbedded getEmbedded() {
    return _embedded;
  }

  public void setEmbedded(GetSolicitationActionResponseEmbedded _embedded) {
    this._embedded = _embedded;
  }

  public GetSolicitationActionResponse payload(SolicitationsAction payload) {
    this.payload = payload;
    return this;
  }

   /**
   * Get payload
   * @return payload
  **/
  @Schema(description = "")
  public SolicitationsAction getPayload() {
    return payload;
  }

  public void setPayload(SolicitationsAction payload) {
    this.payload = payload;
  }

  public GetSolicitationActionResponse errors(ErrorList errors) {
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
    GetSolicitationActionResponse getSolicitationActionResponse = (GetSolicitationActionResponse) o;
    return Objects.equals(this._links, getSolicitationActionResponse._links) &&
        Objects.equals(this._embedded, getSolicitationActionResponse._embedded) &&
        Objects.equals(this.payload, getSolicitationActionResponse.payload) &&
        Objects.equals(this.errors, getSolicitationActionResponse.errors);
  }

  @Override
  public int hashCode() {
    return Objects.hash(_links, _embedded, payload, errors);
  }


  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class GetSolicitationActionResponse {\n");
    
    sb.append("    _links: ").append(toIndentedString(_links)).append("\n");
    sb.append("    _embedded: ").append(toIndentedString(_embedded)).append("\n");
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
