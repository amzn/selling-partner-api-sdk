/*
 * Selling Partner API for Direct Fulfillment Inventory Updates
 * The Selling Partner API for Direct Fulfillment Inventory Updates provides programmatic access to a direct fulfillment vendor's inventory updates.
 *
 * OpenAPI spec version: v1
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */

package com.amazon.SellingPartnerAPI.models.vendor.df.inventory;

import java.util.Objects;
import java.util.Arrays;
import com.amazon.SellingPartnerAPI.models.vendor.df.inventory.ItemQuantity;
import com.google.gson.TypeAdapter;
import com.google.gson.annotations.JsonAdapter;
import com.google.gson.annotations.SerializedName;
import com.google.gson.stream.JsonReader;
import com.google.gson.stream.JsonWriter;
import io.swagger.v3.oas.annotations.media.Schema;
import java.io.IOException;
/**
 * Updated inventory details for an item.
 */
@Schema(description = "Updated inventory details for an item.")


public class ItemDetails {
  @SerializedName("buyerProductIdentifier")
  private String buyerProductIdentifier = null;

  @SerializedName("vendorProductIdentifier")
  private String vendorProductIdentifier = null;

  @SerializedName("availableQuantity")
  private ItemQuantity availableQuantity = null;

  @SerializedName("isObsolete")
  private Boolean isObsolete = null;

  public ItemDetails buyerProductIdentifier(String buyerProductIdentifier) {
    this.buyerProductIdentifier = buyerProductIdentifier;
    return this;
  }

   /**
   * The buyer selected product identification of the item. Either buyerProductIdentifier or vendorProductIdentifier should be submitted.
   * @return buyerProductIdentifier
  **/
  @Schema(description = "The buyer selected product identification of the item. Either buyerProductIdentifier or vendorProductIdentifier should be submitted.")
  public String getBuyerProductIdentifier() {
    return buyerProductIdentifier;
  }

  public void setBuyerProductIdentifier(String buyerProductIdentifier) {
    this.buyerProductIdentifier = buyerProductIdentifier;
  }

  public ItemDetails vendorProductIdentifier(String vendorProductIdentifier) {
    this.vendorProductIdentifier = vendorProductIdentifier;
    return this;
  }

   /**
   * The vendor selected product identification of the item. Either buyerProductIdentifier or vendorProductIdentifier should be submitted.
   * @return vendorProductIdentifier
  **/
  @Schema(description = "The vendor selected product identification of the item. Either buyerProductIdentifier or vendorProductIdentifier should be submitted.")
  public String getVendorProductIdentifier() {
    return vendorProductIdentifier;
  }

  public void setVendorProductIdentifier(String vendorProductIdentifier) {
    this.vendorProductIdentifier = vendorProductIdentifier;
  }

  public ItemDetails availableQuantity(ItemQuantity availableQuantity) {
    this.availableQuantity = availableQuantity;
    return this;
  }

   /**
   * Get availableQuantity
   * @return availableQuantity
  **/
  @Schema(required = true, description = "")
  public ItemQuantity getAvailableQuantity() {
    return availableQuantity;
  }

  public void setAvailableQuantity(ItemQuantity availableQuantity) {
    this.availableQuantity = availableQuantity;
  }

  public ItemDetails isObsolete(Boolean isObsolete) {
    this.isObsolete = isObsolete;
    return this;
  }

   /**
   * When true, the item is permanently unavailable.
   * @return isObsolete
  **/
  @Schema(description = "When true, the item is permanently unavailable.")
  public Boolean isIsObsolete() {
    return isObsolete;
  }

  public void setIsObsolete(Boolean isObsolete) {
    this.isObsolete = isObsolete;
  }


  @Override
  public boolean equals(java.lang.Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    ItemDetails itemDetails = (ItemDetails) o;
    return Objects.equals(this.buyerProductIdentifier, itemDetails.buyerProductIdentifier) &&
        Objects.equals(this.vendorProductIdentifier, itemDetails.vendorProductIdentifier) &&
        Objects.equals(this.availableQuantity, itemDetails.availableQuantity) &&
        Objects.equals(this.isObsolete, itemDetails.isObsolete);
  }

  @Override
  public int hashCode() {
    return Objects.hash(buyerProductIdentifier, vendorProductIdentifier, availableQuantity, isObsolete);
  }


  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class ItemDetails {\n");
    
    sb.append("    buyerProductIdentifier: ").append(toIndentedString(buyerProductIdentifier)).append("\n");
    sb.append("    vendorProductIdentifier: ").append(toIndentedString(vendorProductIdentifier)).append("\n");
    sb.append("    availableQuantity: ").append(toIndentedString(availableQuantity)).append("\n");
    sb.append("    isObsolete: ").append(toIndentedString(isObsolete)).append("\n");
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
