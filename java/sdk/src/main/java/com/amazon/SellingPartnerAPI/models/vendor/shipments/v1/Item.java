/*
 * Selling Partner API for Retail Procurement Shipments
 * The Selling Partner API for Retail Procurement Shipments provides programmatic access to retail shipping data for vendors.
 *
 * OpenAPI spec version: v1
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */

package com.amazon.SellingPartnerAPI.models.vendor.shipments.v1;

import java.util.Objects;
import java.util.Arrays;
import com.amazon.SellingPartnerAPI.models.vendor.shipments.v1.ItemDetails;
import com.amazon.SellingPartnerAPI.models.vendor.shipments.v1.ItemQuantity;
import com.google.gson.TypeAdapter;
import com.google.gson.annotations.JsonAdapter;
import com.google.gson.annotations.SerializedName;
import com.google.gson.stream.JsonReader;
import com.google.gson.stream.JsonWriter;
import io.swagger.v3.oas.annotations.media.Schema;
import java.io.IOException;
/**
 * Details of the item being shipped.
 */
@Schema(description = "Details of the item being shipped.")


public class Item {
  @SerializedName("itemSequenceNumber")
  private String itemSequenceNumber = null;

  @SerializedName("amazonProductIdentifier")
  private String amazonProductIdentifier = null;

  @SerializedName("vendorProductIdentifier")
  private String vendorProductIdentifier = null;

  @SerializedName("shippedQuantity")
  private ItemQuantity shippedQuantity = null;

  @SerializedName("itemDetails")
  private ItemDetails itemDetails = null;

  public Item itemSequenceNumber(String itemSequenceNumber) {
    this.itemSequenceNumber = itemSequenceNumber;
    return this;
  }

   /**
   * Item sequence number for the item. The first item will be 001, the second 002, and so on. This number is used as a reference to refer to this item from the carton or pallet level.
   * @return itemSequenceNumber
  **/
  @Schema(required = true, description = "Item sequence number for the item. The first item will be 001, the second 002, and so on. This number is used as a reference to refer to this item from the carton or pallet level.")
  public String getItemSequenceNumber() {
    return itemSequenceNumber;
  }

  public void setItemSequenceNumber(String itemSequenceNumber) {
    this.itemSequenceNumber = itemSequenceNumber;
  }

  public Item amazonProductIdentifier(String amazonProductIdentifier) {
    this.amazonProductIdentifier = amazonProductIdentifier;
    return this;
  }

   /**
   * Buyer Standard Identification Number (ASIN) of an item.
   * @return amazonProductIdentifier
  **/
  @Schema(description = "Buyer Standard Identification Number (ASIN) of an item.")
  public String getAmazonProductIdentifier() {
    return amazonProductIdentifier;
  }

  public void setAmazonProductIdentifier(String amazonProductIdentifier) {
    this.amazonProductIdentifier = amazonProductIdentifier;
  }

  public Item vendorProductIdentifier(String vendorProductIdentifier) {
    this.vendorProductIdentifier = vendorProductIdentifier;
    return this;
  }

   /**
   * The vendor selected product identification of the item. Should be the same as was sent in the purchase order.
   * @return vendorProductIdentifier
  **/
  @Schema(description = "The vendor selected product identification of the item. Should be the same as was sent in the purchase order.")
  public String getVendorProductIdentifier() {
    return vendorProductIdentifier;
  }

  public void setVendorProductIdentifier(String vendorProductIdentifier) {
    this.vendorProductIdentifier = vendorProductIdentifier;
  }

  public Item shippedQuantity(ItemQuantity shippedQuantity) {
    this.shippedQuantity = shippedQuantity;
    return this;
  }

   /**
   * Get shippedQuantity
   * @return shippedQuantity
  **/
  @Schema(required = true, description = "")
  public ItemQuantity getShippedQuantity() {
    return shippedQuantity;
  }

  public void setShippedQuantity(ItemQuantity shippedQuantity) {
    this.shippedQuantity = shippedQuantity;
  }

  public Item itemDetails(ItemDetails itemDetails) {
    this.itemDetails = itemDetails;
    return this;
  }

   /**
   * Get itemDetails
   * @return itemDetails
  **/
  @Schema(description = "")
  public ItemDetails getItemDetails() {
    return itemDetails;
  }

  public void setItemDetails(ItemDetails itemDetails) {
    this.itemDetails = itemDetails;
  }


  @Override
  public boolean equals(java.lang.Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    Item item = (Item) o;
    return Objects.equals(this.itemSequenceNumber, item.itemSequenceNumber) &&
        Objects.equals(this.amazonProductIdentifier, item.amazonProductIdentifier) &&
        Objects.equals(this.vendorProductIdentifier, item.vendorProductIdentifier) &&
        Objects.equals(this.shippedQuantity, item.shippedQuantity) &&
        Objects.equals(this.itemDetails, item.itemDetails);
  }

  @Override
  public int hashCode() {
    return Objects.hash(itemSequenceNumber, amazonProductIdentifier, vendorProductIdentifier, shippedQuantity, itemDetails);
  }


  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class Item {\n");
    
    sb.append("    itemSequenceNumber: ").append(toIndentedString(itemSequenceNumber)).append("\n");
    sb.append("    amazonProductIdentifier: ").append(toIndentedString(amazonProductIdentifier)).append("\n");
    sb.append("    vendorProductIdentifier: ").append(toIndentedString(vendorProductIdentifier)).append("\n");
    sb.append("    shippedQuantity: ").append(toIndentedString(shippedQuantity)).append("\n");
    sb.append("    itemDetails: ").append(toIndentedString(itemDetails)).append("\n");
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
