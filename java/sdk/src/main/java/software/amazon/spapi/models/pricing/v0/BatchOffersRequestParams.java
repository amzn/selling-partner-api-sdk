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

package software.amazon.spapi.models.pricing.v0;

import java.util.Objects;
import java.util.Arrays;
import com.google.gson.TypeAdapter;
import com.google.gson.annotations.JsonAdapter;
import com.google.gson.annotations.SerializedName;
import com.google.gson.stream.JsonReader;
import com.google.gson.stream.JsonWriter;
import io.swagger.v3.oas.annotations.media.Schema;
import java.io.IOException;
import software.amazon.spapi.models.pricing.v0.CustomerType;
import software.amazon.spapi.models.pricing.v0.ItemCondition;
/**
 * Common request parameters that can be accepted by &#x60;ItemOffersRequest&#x60; and &#x60;ListingOffersRequest&#x60;
 */
@Schema(description = "Common request parameters that can be accepted by `ItemOffersRequest` and `ListingOffersRequest`")


public class BatchOffersRequestParams {
  @SerializedName("MarketplaceId")
  private String marketplaceId = null;

  @SerializedName("ItemCondition")
  private ItemCondition itemCondition = null;

  @SerializedName("CustomerType")
  private CustomerType customerType = null;

  public BatchOffersRequestParams marketplaceId(String marketplaceId) {
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

  public BatchOffersRequestParams itemCondition(ItemCondition itemCondition) {
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

  public BatchOffersRequestParams customerType(CustomerType customerType) {
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
    BatchOffersRequestParams batchOffersRequestParams = (BatchOffersRequestParams) o;
    return Objects.equals(this.marketplaceId, batchOffersRequestParams.marketplaceId) &&
        Objects.equals(this.itemCondition, batchOffersRequestParams.itemCondition) &&
        Objects.equals(this.customerType, batchOffersRequestParams.customerType);
  }

  @Override
  public int hashCode() {
    return Objects.hash(marketplaceId, itemCondition, customerType);
  }


  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class BatchOffersRequestParams {\n");
    
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
