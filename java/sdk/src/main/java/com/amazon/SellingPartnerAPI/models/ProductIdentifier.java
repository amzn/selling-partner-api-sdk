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

package com.amazon.SellingPartnerAPI.models;

import java.util.Objects;
import java.util.Arrays;
import com.google.gson.TypeAdapter;
import com.google.gson.annotations.JsonAdapter;
import com.google.gson.annotations.SerializedName;
import com.google.gson.stream.JsonReader;
import com.google.gson.stream.JsonWriter;
import io.swagger.v3.oas.annotations.media.Schema;
import java.io.IOException;
/**
 * Product identifier input that locates a product for MCF.
 */
@Schema(description = "Product identifier input that locates a product for MCF.")


public class ProductIdentifier {
  @SerializedName("merchantSku")
  private String merchantSku = null;

  public ProductIdentifier merchantSku(String merchantSku) {
    this.merchantSku = merchantSku;
    return this;
  }

   /**
   * The merchant SKU for the product.
   * @return merchantSku
  **/
  @Schema(required = true, description = "The merchant SKU for the product.")
  public String getMerchantSku() {
    return merchantSku;
  }

  public void setMerchantSku(String merchantSku) {
    this.merchantSku = merchantSku;
  }


  @Override
  public boolean equals(java.lang.Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    ProductIdentifier productIdentifier = (ProductIdentifier) o;
    return Objects.equals(this.merchantSku, productIdentifier.merchantSku);
  }

  @Override
  public int hashCode() {
    return Objects.hash(merchantSku);
  }


  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class ProductIdentifier {\n");
    
    sb.append("    merchantSku: ").append(toIndentedString(merchantSku)).append("\n");
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
