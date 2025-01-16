/*
 * Selling Partner APIs for Fulfillment Outbound
 * The Selling Partner API for Fulfillment Outbound lets you create applications that help a seller fulfill Multi-Channel Fulfillment orders using their inventory in Amazon's fulfillment network. You can get information on both potential and existing fulfillment orders.
 *
 * OpenAPI spec version: 2020-07-01
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */

package com.amazon.SellingPartnerAPI.models.fulfillment.outbound;

import java.util.Objects;
import java.util.Arrays;
import com.amazon.SellingPartnerAPI.models.fulfillment.outbound.GetDeliveryOffersProduct;
import com.amazon.SellingPartnerAPI.models.fulfillment.outbound.GetDeliveryOffersTerms;
import com.google.gson.TypeAdapter;
import com.google.gson.annotations.JsonAdapter;
import com.google.gson.annotations.SerializedName;
import com.google.gson.stream.JsonReader;
import com.google.gson.stream.JsonWriter;
import io.swagger.v3.oas.annotations.media.Schema;
import java.io.IOException;
/**
 * The request body schema for the getDeliveryOffers operation.
 */
@Schema(description = "The request body schema for the getDeliveryOffers operation.")


public class GetDeliveryOffersRequest {
  @SerializedName("product")
  private GetDeliveryOffersProduct product = null;

  @SerializedName("terms")
  private GetDeliveryOffersTerms terms = null;

  public GetDeliveryOffersRequest product(GetDeliveryOffersProduct product) {
    this.product = product;
    return this;
  }

   /**
   * Get product
   * @return product
  **/
  @Schema(required = true, description = "")
  public GetDeliveryOffersProduct getProduct() {
    return product;
  }

  public void setProduct(GetDeliveryOffersProduct product) {
    this.product = product;
  }

  public GetDeliveryOffersRequest terms(GetDeliveryOffersTerms terms) {
    this.terms = terms;
    return this;
  }

   /**
   * Get terms
   * @return terms
  **/
  @Schema(required = true, description = "")
  public GetDeliveryOffersTerms getTerms() {
    return terms;
  }

  public void setTerms(GetDeliveryOffersTerms terms) {
    this.terms = terms;
  }


  @Override
  public boolean equals(java.lang.Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    GetDeliveryOffersRequest getDeliveryOffersRequest = (GetDeliveryOffersRequest) o;
    return Objects.equals(this.product, getDeliveryOffersRequest.product) &&
        Objects.equals(this.terms, getDeliveryOffersRequest.terms);
  }

  @Override
  public int hashCode() {
    return Objects.hash(product, terms);
  }


  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class GetDeliveryOffersRequest {\n");
    
    sb.append("    product: ").append(toIndentedString(product)).append("\n");
    sb.append("    terms: ").append(toIndentedString(terms)).append("\n");
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
