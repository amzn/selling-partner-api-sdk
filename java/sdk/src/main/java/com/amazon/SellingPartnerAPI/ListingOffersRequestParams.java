/*
 * Selling Partner API for Pricing
 * The Selling Partner API for Pricing helps you programmatically retrieve product pricing and offer information for Amazon Marketplace products.
 *
 * OpenAPI spec version: v0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */

package com.amazon.SellingPartnerAPI;

import java.util.Objects;
import java.util.Arrays;
import com.amazon.SellingPartnerAPI.BatchOffersRequestParams;
import com.amazon.SellingPartnerAPI.CustomerType;
import com.amazon.SellingPartnerAPI.ItemCondition;
import com.google.gson.TypeAdapter;
import com.google.gson.annotations.JsonAdapter;
import com.google.gson.annotations.SerializedName;
import com.google.gson.stream.JsonReader;
import com.google.gson.stream.JsonWriter;
import io.swagger.v3.oas.annotations.media.Schema;
import java.io.IOException;
/**
 * ListingOffersRequestParams
 */

@javax.annotation.Generated(value = "io.swagger.codegen.v3.generators.java.JavaClientCodegen", date = "2024-11-14T09:09:23.033658Z[Etc/UTC]")

public class ListingOffersRequestParams extends BatchOffersRequestParams {
  @SerializedName("SellerSKU")
  private String sellerSKU = null;

  public ListingOffersRequestParams sellerSKU(String sellerSKU) {
    this.sellerSKU = sellerSKU;
    return this;
  }

   /**
   * The seller stock keeping unit (SKU) of the item. This is the same SKU passed as a path parameter.
   * @return sellerSKU
  **/
  @Schema(required = true, description = "The seller stock keeping unit (SKU) of the item. This is the same SKU passed as a path parameter.")
  public String getSellerSKU() {
    return sellerSKU;
  }

  public void setSellerSKU(String sellerSKU) {
    this.sellerSKU = sellerSKU;
  }


  @Override
  public boolean equals(java.lang.Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    ListingOffersRequestParams listingOffersRequestParams = (ListingOffersRequestParams) o;
    return Objects.equals(this.sellerSKU, listingOffersRequestParams.sellerSKU) &&
        super.equals(o);
  }

  @Override
  public int hashCode() {
    return Objects.hash(sellerSKU, super.hashCode());
  }


  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class ListingOffersRequestParams {\n");
    sb.append("    ").append(toIndentedString(super.toString())).append("\n");
    sb.append("    sellerSKU: ").append(toIndentedString(sellerSKU)).append("\n");
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
