/*
 * Amazon Shipping API
 * The Amazon Shipping API is designed to support outbound shipping use cases both for orders originating on Amazon-owned marketplaces as well as external channels/marketplaces. With these APIs, you can request shipping rates, create shipments, cancel shipments, and track shipments.
 *
 * OpenAPI spec version: v2
 * Contact: swa-api-core@amazon.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */

package com.amazon.SellingPartnerAPI.models.shipping.v2;

import java.util.Objects;
import java.util.Arrays;
import com.amazon.SellingPartnerAPI.models.shipping.v2.ChargeList;
import com.amazon.SellingPartnerAPI.models.shipping.v2.Currency;
import com.amazon.SellingPartnerAPI.models.shipping.v2.Dimensions;
import com.amazon.SellingPartnerAPI.models.shipping.v2.ItemList;
import com.amazon.SellingPartnerAPI.models.shipping.v2.Weight;
import com.google.gson.TypeAdapter;
import com.google.gson.annotations.JsonAdapter;
import com.google.gson.annotations.SerializedName;
import com.google.gson.stream.JsonReader;
import com.google.gson.stream.JsonWriter;
import io.swagger.v3.oas.annotations.media.Schema;
import java.io.IOException;
/**
 * A package to be shipped through a shipping service offering.
 */
@Schema(description = "A package to be shipped through a shipping service offering.")


public class ModelPackage {
  @SerializedName("dimensions")
  private Dimensions dimensions = null;

  @SerializedName("weight")
  private Weight weight = null;

  @SerializedName("insuredValue")
  private Currency insuredValue = null;

  @SerializedName("isHazmat")
  private Boolean isHazmat = null;

  @SerializedName("sellerDisplayName")
  private String sellerDisplayName = null;

  @SerializedName("charges")
  private ChargeList charges = null;

  @SerializedName("packageClientReferenceId")
  private String packageClientReferenceId = null;

  @SerializedName("items")
  private ItemList items = null;

  public ModelPackage dimensions(Dimensions dimensions) {
    this.dimensions = dimensions;
    return this;
  }

   /**
   * Get dimensions
   * @return dimensions
  **/
  @Schema(required = true, description = "")
  public Dimensions getDimensions() {
    return dimensions;
  }

  public void setDimensions(Dimensions dimensions) {
    this.dimensions = dimensions;
  }

  public ModelPackage weight(Weight weight) {
    this.weight = weight;
    return this;
  }

   /**
   * Get weight
   * @return weight
  **/
  @Schema(required = true, description = "")
  public Weight getWeight() {
    return weight;
  }

  public void setWeight(Weight weight) {
    this.weight = weight;
  }

  public ModelPackage insuredValue(Currency insuredValue) {
    this.insuredValue = insuredValue;
    return this;
  }

   /**
   * Get insuredValue
   * @return insuredValue
  **/
  @Schema(required = true, description = "")
  public Currency getInsuredValue() {
    return insuredValue;
  }

  public void setInsuredValue(Currency insuredValue) {
    this.insuredValue = insuredValue;
  }

  public ModelPackage isHazmat(Boolean isHazmat) {
    this.isHazmat = isHazmat;
    return this;
  }

   /**
   * When true, the package contains hazardous materials. Defaults to false.
   * @return isHazmat
  **/
  @Schema(description = "When true, the package contains hazardous materials. Defaults to false.")
  public Boolean isIsHazmat() {
    return isHazmat;
  }

  public void setIsHazmat(Boolean isHazmat) {
    this.isHazmat = isHazmat;
  }

  public ModelPackage sellerDisplayName(String sellerDisplayName) {
    this.sellerDisplayName = sellerDisplayName;
    return this;
  }

   /**
   * The seller name displayed on the label.
   * @return sellerDisplayName
  **/
  @Schema(description = "The seller name displayed on the label.")
  public String getSellerDisplayName() {
    return sellerDisplayName;
  }

  public void setSellerDisplayName(String sellerDisplayName) {
    this.sellerDisplayName = sellerDisplayName;
  }

  public ModelPackage charges(ChargeList charges) {
    this.charges = charges;
    return this;
  }

   /**
   * Get charges
   * @return charges
  **/
  @Schema(description = "")
  public ChargeList getCharges() {
    return charges;
  }

  public void setCharges(ChargeList charges) {
    this.charges = charges;
  }

  public ModelPackage packageClientReferenceId(String packageClientReferenceId) {
    this.packageClientReferenceId = packageClientReferenceId;
    return this;
  }

   /**
   * Get packageClientReferenceId
   * @return packageClientReferenceId
  **/
  @Schema(required = true, description = "")
  public String getPackageClientReferenceId() {
    return packageClientReferenceId;
  }

  public void setPackageClientReferenceId(String packageClientReferenceId) {
    this.packageClientReferenceId = packageClientReferenceId;
  }

  public ModelPackage items(ItemList items) {
    this.items = items;
    return this;
  }

   /**
   * Get items
   * @return items
  **/
  @Schema(required = true, description = "")
  public ItemList getItems() {
    return items;
  }

  public void setItems(ItemList items) {
    this.items = items;
  }


  @Override
  public boolean equals(java.lang.Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    ModelPackage _package = (ModelPackage) o;
    return Objects.equals(this.dimensions, _package.dimensions) &&
        Objects.equals(this.weight, _package.weight) &&
        Objects.equals(this.insuredValue, _package.insuredValue) &&
        Objects.equals(this.isHazmat, _package.isHazmat) &&
        Objects.equals(this.sellerDisplayName, _package.sellerDisplayName) &&
        Objects.equals(this.charges, _package.charges) &&
        Objects.equals(this.packageClientReferenceId, _package.packageClientReferenceId) &&
        Objects.equals(this.items, _package.items);
  }

  @Override
  public int hashCode() {
    return Objects.hash(dimensions, weight, insuredValue, isHazmat, sellerDisplayName, charges, packageClientReferenceId, items);
  }


  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class ModelPackage {\n");
    
    sb.append("    dimensions: ").append(toIndentedString(dimensions)).append("\n");
    sb.append("    weight: ").append(toIndentedString(weight)).append("\n");
    sb.append("    insuredValue: ").append(toIndentedString(insuredValue)).append("\n");
    sb.append("    isHazmat: ").append(toIndentedString(isHazmat)).append("\n");
    sb.append("    sellerDisplayName: ").append(toIndentedString(sellerDisplayName)).append("\n");
    sb.append("    charges: ").append(toIndentedString(charges)).append("\n");
    sb.append("    packageClientReferenceId: ").append(toIndentedString(packageClientReferenceId)).append("\n");
    sb.append("    items: ").append(toIndentedString(items)).append("\n");
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
