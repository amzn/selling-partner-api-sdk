/*
 * Selling Partner API for Listings Items
 * The Selling Partner API for Listings Items (Listings Items API) provides programmatic access to selling partner listings on Amazon. Use this API in collaboration with the Selling Partner API for Product Type Definitions, which you use to retrieve the information about Amazon product types needed to use the Listings Items API.  For more information, see the [Listings Items API Use Case Guide](https://developer-docs.amazon.com/sp-api/docs/listings-items-api-v2021-08-01-use-case-guide).
 *
 * OpenAPI spec version: 2021-08-01
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */

package com.amazon.SellingPartnerAPI.models.listings.items.v2021_08_01;

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
 * The number of Amazon Points offered with the purchase of an item, and their monetary value. Note that the &#x60;Points&#x60; element is only returned in Japan (JP).
 */
@Schema(description = "The number of Amazon Points offered with the purchase of an item, and their monetary value. Note that the `Points` element is only returned in Japan (JP).")


public class Points {
  @SerializedName("pointsNumber")
  private Integer pointsNumber = null;

  public Points pointsNumber(Integer pointsNumber) {
    this.pointsNumber = pointsNumber;
    return this;
  }

   /**
   * Get pointsNumber
   * @return pointsNumber
  **/
  @Schema(required = true, description = "")
  public Integer getPointsNumber() {
    return pointsNumber;
  }

  public void setPointsNumber(Integer pointsNumber) {
    this.pointsNumber = pointsNumber;
  }


  @Override
  public boolean equals(java.lang.Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    Points points = (Points) o;
    return Objects.equals(this.pointsNumber, points.pointsNumber);
  }

  @Override
  public int hashCode() {
    return Objects.hash(pointsNumber);
  }


  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class Points {\n");
    
    sb.append("    pointsNumber: ").append(toIndentedString(pointsNumber)).append("\n");
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
