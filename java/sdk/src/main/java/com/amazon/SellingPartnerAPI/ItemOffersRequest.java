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
import com.amazon.SellingPartnerAPI.BatchRequest;
import com.amazon.SellingPartnerAPI.CustomerType;
import com.amazon.SellingPartnerAPI.HttpMethod;
import com.amazon.SellingPartnerAPI.HttpRequestHeaders;
import com.amazon.SellingPartnerAPI.ItemCondition;
import com.google.gson.TypeAdapter;
import com.google.gson.annotations.JsonAdapter;
import com.google.gson.annotations.SerializedName;
import com.google.gson.stream.JsonReader;
import com.google.gson.stream.JsonWriter;
import io.swagger.v3.oas.annotations.media.Schema;
import java.io.IOException;
/**
 * ItemOffersRequest
 */

@javax.annotation.Generated(value = "io.swagger.codegen.v3.generators.java.JavaClientCodegen", date = "2024-11-14T09:09:23.033658Z[Etc/UTC]")

public class ItemOffersRequest extends BatchRequest {
  @SerializedName("MarketplaceId")
  private String marketplaceId = null;

  @SerializedName("ItemCondition")
  private ItemCondition itemCondition = null;

  @SerializedName("CustomerType")
  private CustomerType customerType = null;

  public ItemOffersRequest marketplaceId(String marketplaceId) {
    this.marketplaceId = marketplaceId;
    return this;
  }

   /**
   * Get marketplaceId
   * @return marketplaceId
  **/
  @Schema(required = true, description = "")
  public String getMarketplaceId() {
    return marketplaceId;
  }

  public void setMarketplaceId(String marketplaceId) {
    this.marketplaceId = marketplaceId;
  }

  public ItemOffersRequest itemCondition(ItemCondition itemCondition) {
    this.itemCondition = itemCondition;
    return this;
  }

   /**
   * Get itemCondition
   * @return itemCondition
  **/
  @Schema(required = true, description = "")
  public ItemCondition getItemCondition() {
    return itemCondition;
  }

  public void setItemCondition(ItemCondition itemCondition) {
    this.itemCondition = itemCondition;
  }

  public ItemOffersRequest customerType(CustomerType customerType) {
    this.customerType = customerType;
    return this;
  }

   /**
   * Get customerType
   * @return customerType
  **/
  @Schema(description = "")
  public CustomerType getCustomerType() {
    return customerType;
  }

  public void setCustomerType(CustomerType customerType) {
    this.customerType = customerType;
  }


  @Override
  public boolean equals(java.lang.Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    ItemOffersRequest itemOffersRequest = (ItemOffersRequest) o;
    return Objects.equals(this.marketplaceId, itemOffersRequest.marketplaceId) &&
        Objects.equals(this.itemCondition, itemOffersRequest.itemCondition) &&
        Objects.equals(this.customerType, itemOffersRequest.customerType) &&
        super.equals(o);
  }

  @Override
  public int hashCode() {
    return Objects.hash(marketplaceId, itemCondition, customerType, super.hashCode());
  }


  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class ItemOffersRequest {\n");
    sb.append("    ").append(toIndentedString(super.toString())).append("\n");
    sb.append("    marketplaceId: ").append(toIndentedString(marketplaceId)).append("\n");
    sb.append("    itemCondition: ").append(toIndentedString(itemCondition)).append("\n");
    sb.append("    customerType: ").append(toIndentedString(customerType)).append("\n");
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
