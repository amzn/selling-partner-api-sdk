/*
 * Selling Partner API for Pricing
 * The Selling Partner API for Pricing helps you programmatically retrieve product pricing and offer pricing information for Amazon Marketplace products.  For more information, refer to the [Product Pricing v2022-05-01 Use Case Guide](https://developer-docs.amazon.com/sp-api/docs/product-pricing-api-v2022-05-01-use-case-guide).
 *
 * OpenAPI spec version: 2022-05-01
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */

package com.amazon.SellingPartnerAPI.models.pricing.v2022_05_01;

import java.util.Objects;
import java.util.Arrays;
import com.amazon.SellingPartnerAPI.models.pricing.v2022_05_01.FulfillmentType;
import com.google.gson.TypeAdapter;
import com.google.gson.annotations.JsonAdapter;
import com.google.gson.annotations.SerializedName;
import com.google.gson.stream.JsonReader;
import com.google.gson.stream.JsonWriter;
import io.swagger.v3.oas.annotations.media.Schema;
import java.io.IOException;
/**
 * Identifies an offer from a particular seller for a specified ASIN.
 */
@Schema(description = "Identifies an offer from a particular seller for a specified ASIN.")


public class OfferIdentifier {
  @SerializedName("marketplaceId")
  private String marketplaceId = null;

  @SerializedName("sellerId")
  private String sellerId = null;

  @SerializedName("sku")
  private String sku = null;

  @SerializedName("asin")
  private String asin = null;

  @SerializedName("fulfillmentType")
  private FulfillmentType fulfillmentType = null;

  public OfferIdentifier marketplaceId(String marketplaceId) {
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

  public OfferIdentifier sellerId(String sellerId) {
    this.sellerId = sellerId;
    return this;
  }

   /**
   * The seller identifier for the offer.
   * @return sellerId
  **/
  @Schema(description = "The seller identifier for the offer.")
  public String getSellerId() {
    return sellerId;
  }

  public void setSellerId(String sellerId) {
    this.sellerId = sellerId;
  }

  public OfferIdentifier sku(String sku) {
    this.sku = sku;
    return this;
  }

   /**
   * The seller SKU of the item. This will only be present for the target offer, which belongs to the requesting seller.
   * @return sku
  **/
  @Schema(description = "The seller SKU of the item. This will only be present for the target offer, which belongs to the requesting seller.")
  public String getSku() {
    return sku;
  }

  public void setSku(String sku) {
    this.sku = sku;
  }

  public OfferIdentifier asin(String asin) {
    this.asin = asin;
    return this;
  }

   /**
   * Get asin
   * @return asin
  **/
  @Schema(required = true, description = "")
  public String getAsin() {
    return asin;
  }

  public void setAsin(String asin) {
    this.asin = asin;
  }

  public OfferIdentifier fulfillmentType(FulfillmentType fulfillmentType) {
    this.fulfillmentType = fulfillmentType;
    return this;
  }

   /**
   * Get fulfillmentType
   * @return fulfillmentType
  **/
  @Schema(description = "")
  public FulfillmentType getFulfillmentType() {
    return fulfillmentType;
  }

  public void setFulfillmentType(FulfillmentType fulfillmentType) {
    this.fulfillmentType = fulfillmentType;
  }


  @Override
  public boolean equals(java.lang.Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    OfferIdentifier offerIdentifier = (OfferIdentifier) o;
    return Objects.equals(this.marketplaceId, offerIdentifier.marketplaceId) &&
        Objects.equals(this.sellerId, offerIdentifier.sellerId) &&
        Objects.equals(this.sku, offerIdentifier.sku) &&
        Objects.equals(this.asin, offerIdentifier.asin) &&
        Objects.equals(this.fulfillmentType, offerIdentifier.fulfillmentType);
  }

  @Override
  public int hashCode() {
    return Objects.hash(marketplaceId, sellerId, sku, asin, fulfillmentType);
  }


  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class OfferIdentifier {\n");
    
    sb.append("    marketplaceId: ").append(toIndentedString(marketplaceId)).append("\n");
    sb.append("    sellerId: ").append(toIndentedString(sellerId)).append("\n");
    sb.append("    sku: ").append(toIndentedString(sku)).append("\n");
    sb.append("    asin: ").append(toIndentedString(asin)).append("\n");
    sb.append("    fulfillmentType: ").append(toIndentedString(fulfillmentType)).append("\n");
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
