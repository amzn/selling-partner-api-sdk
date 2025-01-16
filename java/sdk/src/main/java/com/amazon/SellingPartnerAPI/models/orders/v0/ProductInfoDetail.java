/*
 * Orders v0
 * Use the Orders Selling Partner API to programmatically retrieve order information. With this API, you can develop fast, flexible, and custom applications to manage order synchronization, perform order research, and create demand-based decision support tools.   _Note:_ For the JP, AU, and SG marketplaces, the Orders API supports orders from 2016 onward. For all other marketplaces, the Orders API supports orders for the last two years (orders older than this don't show up in the response).
 *
 * OpenAPI spec version: v0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */

package com.amazon.SellingPartnerAPI.models.orders.v0;

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
 * Product information on the number of items.
 */
@Schema(description = "Product information on the number of items.")


public class ProductInfoDetail {
  @SerializedName("NumberOfItems")
  private String numberOfItems = null;

  public ProductInfoDetail numberOfItems(String numberOfItems) {
    this.numberOfItems = numberOfItems;
    return this;
  }

   /**
   * The total number of items that are included in the ASIN.
   * @return numberOfItems
  **/
  @Schema(description = "The total number of items that are included in the ASIN.")
  public String getNumberOfItems() {
    return numberOfItems;
  }

  public void setNumberOfItems(String numberOfItems) {
    this.numberOfItems = numberOfItems;
  }


  @Override
  public boolean equals(java.lang.Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    ProductInfoDetail productInfoDetail = (ProductInfoDetail) o;
    return Objects.equals(this.numberOfItems, productInfoDetail.numberOfItems);
  }

  @Override
  public int hashCode() {
    return Objects.hash(numberOfItems);
  }


  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class ProductInfoDetail {\n");
    
    sb.append("    numberOfItems: ").append(toIndentedString(numberOfItems)).append("\n");
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
