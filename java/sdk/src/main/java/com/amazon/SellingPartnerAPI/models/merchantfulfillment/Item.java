/*
 * Selling Partner API for Merchant Fulfillment
 * With the Selling Partner API for Merchant Fulfillment, you can build applications that sellers can use to purchase shipping for non-Prime and Prime orders using Amazon's Buy Shipping Services.
 *
 * OpenAPI spec version: v0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */

package com.amazon.SellingPartnerAPI.models.merchantfulfillment;

import java.util.Objects;
import java.util.Arrays;
import com.amazon.SellingPartnerAPI.models.merchantfulfillment.AdditionalSellerInputsList;
import com.amazon.SellingPartnerAPI.models.merchantfulfillment.DangerousGoodsDetails;
import com.amazon.SellingPartnerAPI.models.merchantfulfillment.LiquidVolume;
import com.amazon.SellingPartnerAPI.models.merchantfulfillment.TransparencyCodeList;
import com.amazon.SellingPartnerAPI.models.merchantfulfillment.Weight;
import com.google.gson.TypeAdapter;
import com.google.gson.annotations.JsonAdapter;
import com.google.gson.annotations.SerializedName;
import com.google.gson.stream.JsonReader;
import com.google.gson.stream.JsonWriter;
import io.swagger.v3.oas.annotations.media.Schema;
import java.io.IOException;
/**
 * An Amazon order item identifier and a quantity.
 */
@Schema(description = "An Amazon order item identifier and a quantity.")


public class Item {
  @SerializedName("OrderItemId")
  private String orderItemId = null;

  @SerializedName("Quantity")
  private Integer quantity = null;

  @SerializedName("ItemWeight")
  private Weight itemWeight = null;

  @SerializedName("ItemDescription")
  private String itemDescription = null;

  @SerializedName("TransparencyCodeList")
  private TransparencyCodeList transparencyCodeList = null;

  @SerializedName("ItemLevelSellerInputsList")
  private AdditionalSellerInputsList itemLevelSellerInputsList = null;

  @SerializedName("LiquidVolume")
  private LiquidVolume liquidVolume = null;

  @SerializedName("IsHazmat")
  private Boolean isHazmat = null;

  @SerializedName("DangerousGoodsDetails")
  private DangerousGoodsDetails dangerousGoodsDetails = null;

  public Item orderItemId(String orderItemId) {
    this.orderItemId = orderItemId;
    return this;
  }

   /**
   * Get orderItemId
   * @return orderItemId
  **/
  @Schema(required = true, description = "")
  public String getOrderItemId() {
    return orderItemId;
  }

  public void setOrderItemId(String orderItemId) {
    this.orderItemId = orderItemId;
  }

  public Item quantity(Integer quantity) {
    this.quantity = quantity;
    return this;
  }

   /**
   * Get quantity
   * @return quantity
  **/
  @Schema(required = true, description = "")
  public Integer getQuantity() {
    return quantity;
  }

  public void setQuantity(Integer quantity) {
    this.quantity = quantity;
  }

  public Item itemWeight(Weight itemWeight) {
    this.itemWeight = itemWeight;
    return this;
  }

   /**
   * Get itemWeight
   * @return itemWeight
  **/
  @Schema(description = "")
  public Weight getItemWeight() {
    return itemWeight;
  }

  public void setItemWeight(Weight itemWeight) {
    this.itemWeight = itemWeight;
  }

  public Item itemDescription(String itemDescription) {
    this.itemDescription = itemDescription;
    return this;
  }

   /**
   * Get itemDescription
   * @return itemDescription
  **/
  @Schema(description = "")
  public String getItemDescription() {
    return itemDescription;
  }

  public void setItemDescription(String itemDescription) {
    this.itemDescription = itemDescription;
  }

  public Item transparencyCodeList(TransparencyCodeList transparencyCodeList) {
    this.transparencyCodeList = transparencyCodeList;
    return this;
  }

   /**
   * Get transparencyCodeList
   * @return transparencyCodeList
  **/
  @Schema(description = "")
  public TransparencyCodeList getTransparencyCodeList() {
    return transparencyCodeList;
  }

  public void setTransparencyCodeList(TransparencyCodeList transparencyCodeList) {
    this.transparencyCodeList = transparencyCodeList;
  }

  public Item itemLevelSellerInputsList(AdditionalSellerInputsList itemLevelSellerInputsList) {
    this.itemLevelSellerInputsList = itemLevelSellerInputsList;
    return this;
  }

   /**
   * Get itemLevelSellerInputsList
   * @return itemLevelSellerInputsList
  **/
  @Schema(description = "")
  public AdditionalSellerInputsList getItemLevelSellerInputsList() {
    return itemLevelSellerInputsList;
  }

  public void setItemLevelSellerInputsList(AdditionalSellerInputsList itemLevelSellerInputsList) {
    this.itemLevelSellerInputsList = itemLevelSellerInputsList;
  }

  public Item liquidVolume(LiquidVolume liquidVolume) {
    this.liquidVolume = liquidVolume;
    return this;
  }

   /**
   * Get liquidVolume
   * @return liquidVolume
  **/
  @Schema(description = "")
  public LiquidVolume getLiquidVolume() {
    return liquidVolume;
  }

  public void setLiquidVolume(LiquidVolume liquidVolume) {
    this.liquidVolume = liquidVolume;
  }

  public Item isHazmat(Boolean isHazmat) {
    this.isHazmat = isHazmat;
    return this;
  }

   /**
   * When true, the item qualifies as hazardous materials (hazmat). Defaults to false.
   * @return isHazmat
  **/
  @Schema(description = "When true, the item qualifies as hazardous materials (hazmat). Defaults to false.")
  public Boolean isIsHazmat() {
    return isHazmat;
  }

  public void setIsHazmat(Boolean isHazmat) {
    this.isHazmat = isHazmat;
  }

  public Item dangerousGoodsDetails(DangerousGoodsDetails dangerousGoodsDetails) {
    this.dangerousGoodsDetails = dangerousGoodsDetails;
    return this;
  }

   /**
   * Get dangerousGoodsDetails
   * @return dangerousGoodsDetails
  **/
  @Schema(description = "")
  public DangerousGoodsDetails getDangerousGoodsDetails() {
    return dangerousGoodsDetails;
  }

  public void setDangerousGoodsDetails(DangerousGoodsDetails dangerousGoodsDetails) {
    this.dangerousGoodsDetails = dangerousGoodsDetails;
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
    return Objects.equals(this.orderItemId, item.orderItemId) &&
        Objects.equals(this.quantity, item.quantity) &&
        Objects.equals(this.itemWeight, item.itemWeight) &&
        Objects.equals(this.itemDescription, item.itemDescription) &&
        Objects.equals(this.transparencyCodeList, item.transparencyCodeList) &&
        Objects.equals(this.itemLevelSellerInputsList, item.itemLevelSellerInputsList) &&
        Objects.equals(this.liquidVolume, item.liquidVolume) &&
        Objects.equals(this.isHazmat, item.isHazmat) &&
        Objects.equals(this.dangerousGoodsDetails, item.dangerousGoodsDetails);
  }

  @Override
  public int hashCode() {
    return Objects.hash(orderItemId, quantity, itemWeight, itemDescription, transparencyCodeList, itemLevelSellerInputsList, liquidVolume, isHazmat, dangerousGoodsDetails);
  }


  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class Item {\n");
    
    sb.append("    orderItemId: ").append(toIndentedString(orderItemId)).append("\n");
    sb.append("    quantity: ").append(toIndentedString(quantity)).append("\n");
    sb.append("    itemWeight: ").append(toIndentedString(itemWeight)).append("\n");
    sb.append("    itemDescription: ").append(toIndentedString(itemDescription)).append("\n");
    sb.append("    transparencyCodeList: ").append(toIndentedString(transparencyCodeList)).append("\n");
    sb.append("    itemLevelSellerInputsList: ").append(toIndentedString(itemLevelSellerInputsList)).append("\n");
    sb.append("    liquidVolume: ").append(toIndentedString(liquidVolume)).append("\n");
    sb.append("    isHazmat: ").append(toIndentedString(isHazmat)).append("\n");
    sb.append("    dangerousGoodsDetails: ").append(toIndentedString(dangerousGoodsDetails)).append("\n");
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
