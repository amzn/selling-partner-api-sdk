/*
 * Selling Partner API for Direct Fulfillment Shipping
 * Use the Selling Partner API for Direct Fulfillment Shipping to access a direct fulfillment vendor's shipping data.
 *
 * OpenAPI spec version: 2021-12-28
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */

package com.amazon.SellingPartnerAPI.models.vendor.df.shipping;

import java.util.Objects;
import java.util.Arrays;
import com.amazon.SellingPartnerAPI.models.vendor.df.shipping.ItemQuantity;
import com.google.gson.TypeAdapter;
import com.google.gson.annotations.JsonAdapter;
import com.google.gson.annotations.SerializedName;
import com.google.gson.stream.JsonReader;
import com.google.gson.stream.JsonWriter;
import io.swagger.v3.oas.annotations.media.Schema;
import java.io.IOException;
/**
 * An item that has been packed into a container for shipping.
 */
@Schema(description = "An item that has been packed into a container for shipping.")


public class PackedItem {
  @SerializedName("itemSequenceNumber")
  private Integer itemSequenceNumber = null;

  @SerializedName("buyerProductIdentifier")
  private String buyerProductIdentifier = null;

  @SerializedName("pieceNumber")
  private Integer pieceNumber = null;

  @SerializedName("vendorProductIdentifier")
  private String vendorProductIdentifier = null;

  @SerializedName("packedQuantity")
  private ItemQuantity packedQuantity = null;

  public PackedItem itemSequenceNumber(Integer itemSequenceNumber) {
    this.itemSequenceNumber = itemSequenceNumber;
    return this;
  }

   /**
   * The sequence number of the item. The number must be the same as the order number of the item.
   * @return itemSequenceNumber
  **/
  @Schema(required = true, description = "The sequence number of the item. The number must be the same as the order number of the item.")
  public Integer getItemSequenceNumber() {
    return itemSequenceNumber;
  }

  public void setItemSequenceNumber(Integer itemSequenceNumber) {
    this.itemSequenceNumber = itemSequenceNumber;
  }

  public PackedItem buyerProductIdentifier(String buyerProductIdentifier) {
    this.buyerProductIdentifier = buyerProductIdentifier;
    return this;
  }

   /**
   * The buyer&#x27;s Amazon Standard Identification Number (ASIN) of an item. Either &#x60;buyerProductIdentifier&#x60; or &#x60;vendorProductIdentifier&#x60; is required.
   * @return buyerProductIdentifier
  **/
  @Schema(description = "The buyer's Amazon Standard Identification Number (ASIN) of an item. Either `buyerProductIdentifier` or `vendorProductIdentifier` is required.")
  public String getBuyerProductIdentifier() {
    return buyerProductIdentifier;
  }

  public void setBuyerProductIdentifier(String buyerProductIdentifier) {
    this.buyerProductIdentifier = buyerProductIdentifier;
  }

  public PackedItem pieceNumber(Integer pieceNumber) {
    this.pieceNumber = pieceNumber;
    return this;
  }

   /**
   * The piece number of the item in this container. This is required when the item is split across different containers.
   * @return pieceNumber
  **/
  @Schema(description = "The piece number of the item in this container. This is required when the item is split across different containers.")
  public Integer getPieceNumber() {
    return pieceNumber;
  }

  public void setPieceNumber(Integer pieceNumber) {
    this.pieceNumber = pieceNumber;
  }

  public PackedItem vendorProductIdentifier(String vendorProductIdentifier) {
    this.vendorProductIdentifier = vendorProductIdentifier;
    return this;
  }

   /**
   * An item&#x27;s product identifier, which the vendor selects. This identifier should be the same as the identifier, such as a SKU, in the purchase order.
   * @return vendorProductIdentifier
  **/
  @Schema(description = "An item's product identifier, which the vendor selects. This identifier should be the same as the identifier, such as a SKU, in the purchase order.")
  public String getVendorProductIdentifier() {
    return vendorProductIdentifier;
  }

  public void setVendorProductIdentifier(String vendorProductIdentifier) {
    this.vendorProductIdentifier = vendorProductIdentifier;
  }

  public PackedItem packedQuantity(ItemQuantity packedQuantity) {
    this.packedQuantity = packedQuantity;
    return this;
  }

   /**
   * Get packedQuantity
   * @return packedQuantity
  **/
  @Schema(required = true, description = "")
  public ItemQuantity getPackedQuantity() {
    return packedQuantity;
  }

  public void setPackedQuantity(ItemQuantity packedQuantity) {
    this.packedQuantity = packedQuantity;
  }


  @Override
  public boolean equals(java.lang.Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    PackedItem packedItem = (PackedItem) o;
    return Objects.equals(this.itemSequenceNumber, packedItem.itemSequenceNumber) &&
        Objects.equals(this.buyerProductIdentifier, packedItem.buyerProductIdentifier) &&
        Objects.equals(this.pieceNumber, packedItem.pieceNumber) &&
        Objects.equals(this.vendorProductIdentifier, packedItem.vendorProductIdentifier) &&
        Objects.equals(this.packedQuantity, packedItem.packedQuantity);
  }

  @Override
  public int hashCode() {
    return Objects.hash(itemSequenceNumber, buyerProductIdentifier, pieceNumber, vendorProductIdentifier, packedQuantity);
  }


  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class PackedItem {\n");
    
    sb.append("    itemSequenceNumber: ").append(toIndentedString(itemSequenceNumber)).append("\n");
    sb.append("    buyerProductIdentifier: ").append(toIndentedString(buyerProductIdentifier)).append("\n");
    sb.append("    pieceNumber: ").append(toIndentedString(pieceNumber)).append("\n");
    sb.append("    vendorProductIdentifier: ").append(toIndentedString(vendorProductIdentifier)).append("\n");
    sb.append("    packedQuantity: ").append(toIndentedString(packedQuantity)).append("\n");
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
