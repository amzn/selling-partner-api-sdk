/*
 * Fulfillment Inbound v2024-03-20
 * The Selling Partner API for Fulfillment By Amazon (FBA) Inbound. The FBA Inbound API enables building inbound workflows to create, manage, and send shipments into Amazon's fulfillment network. The API has interoperability with the Send-to-Amazon user interface.
 *
 * OpenAPI spec version: 2024-03-20
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */

package com.amazon.SellingPartnerAPI.models.fulfillment.inbound.v2024_03_20;

import java.util.Objects;
import java.util.Arrays;
import com.amazon.SellingPartnerAPI.models.fulfillment.inbound.v2024_03_20.AllOwnersConstraint;
import com.amazon.SellingPartnerAPI.models.fulfillment.inbound.v2024_03_20.OwnerConstraint;
import com.amazon.SellingPartnerAPI.models.fulfillment.inbound.v2024_03_20.PrepCategory;
import com.amazon.SellingPartnerAPI.models.fulfillment.inbound.v2024_03_20.PrepType;
import com.google.gson.TypeAdapter;
import com.google.gson.annotations.JsonAdapter;
import com.google.gson.annotations.SerializedName;
import com.google.gson.stream.JsonReader;
import com.google.gson.stream.JsonWriter;
import io.swagger.v3.oas.annotations.media.Schema;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
/**
 * An MSKU and its related prep details.
 */
@Schema(description = "An MSKU and its related prep details.")


public class MskuPrepDetail {
  @SerializedName("allOwnersConstraint")
  private AllOwnersConstraint allOwnersConstraint = null;

  @SerializedName("labelOwnerConstraint")
  private OwnerConstraint labelOwnerConstraint = null;

  @SerializedName("msku")
  private String msku = null;

  @SerializedName("prepCategory")
  private PrepCategory prepCategory = null;

  @SerializedName("prepOwnerConstraint")
  private OwnerConstraint prepOwnerConstraint = null;

  @SerializedName("prepTypes")
  private List<PrepType> prepTypes = new ArrayList<PrepType>();

  public MskuPrepDetail allOwnersConstraint(AllOwnersConstraint allOwnersConstraint) {
    this.allOwnersConstraint = allOwnersConstraint;
    return this;
  }

   /**
   * Get allOwnersConstraint
   * @return allOwnersConstraint
  **/
  @Schema(description = "")
  public AllOwnersConstraint getAllOwnersConstraint() {
    return allOwnersConstraint;
  }

  public void setAllOwnersConstraint(AllOwnersConstraint allOwnersConstraint) {
    this.allOwnersConstraint = allOwnersConstraint;
  }

  public MskuPrepDetail labelOwnerConstraint(OwnerConstraint labelOwnerConstraint) {
    this.labelOwnerConstraint = labelOwnerConstraint;
    return this;
  }

   /**
   * Get labelOwnerConstraint
   * @return labelOwnerConstraint
  **/
  @Schema(description = "")
  public OwnerConstraint getLabelOwnerConstraint() {
    return labelOwnerConstraint;
  }

  public void setLabelOwnerConstraint(OwnerConstraint labelOwnerConstraint) {
    this.labelOwnerConstraint = labelOwnerConstraint;
  }

  public MskuPrepDetail msku(String msku) {
    this.msku = msku;
    return this;
  }

   /**
   * The merchant SKU, a merchant-supplied identifier for a specific SKU.
   * @return msku
  **/
  @Schema(required = true, description = "The merchant SKU, a merchant-supplied identifier for a specific SKU.")
  public String getMsku() {
    return msku;
  }

  public void setMsku(String msku) {
    this.msku = msku;
  }

  public MskuPrepDetail prepCategory(PrepCategory prepCategory) {
    this.prepCategory = prepCategory;
    return this;
  }

   /**
   * Get prepCategory
   * @return prepCategory
  **/
  @Schema(required = true, description = "")
  public PrepCategory getPrepCategory() {
    return prepCategory;
  }

  public void setPrepCategory(PrepCategory prepCategory) {
    this.prepCategory = prepCategory;
  }

  public MskuPrepDetail prepOwnerConstraint(OwnerConstraint prepOwnerConstraint) {
    this.prepOwnerConstraint = prepOwnerConstraint;
    return this;
  }

   /**
   * Get prepOwnerConstraint
   * @return prepOwnerConstraint
  **/
  @Schema(description = "")
  public OwnerConstraint getPrepOwnerConstraint() {
    return prepOwnerConstraint;
  }

  public void setPrepOwnerConstraint(OwnerConstraint prepOwnerConstraint) {
    this.prepOwnerConstraint = prepOwnerConstraint;
  }

  public MskuPrepDetail prepTypes(List<PrepType> prepTypes) {
    this.prepTypes = prepTypes;
    return this;
  }

  public MskuPrepDetail addPrepTypesItem(PrepType prepTypesItem) {
    this.prepTypes.add(prepTypesItem);
    return this;
  }

   /**
   * A list of preparation types associated with a preparation category.
   * @return prepTypes
  **/
  @Schema(required = true, description = "A list of preparation types associated with a preparation category.")
  public List<PrepType> getPrepTypes() {
    return prepTypes;
  }

  public void setPrepTypes(List<PrepType> prepTypes) {
    this.prepTypes = prepTypes;
  }


  @Override
  public boolean equals(java.lang.Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    MskuPrepDetail mskuPrepDetail = (MskuPrepDetail) o;
    return Objects.equals(this.allOwnersConstraint, mskuPrepDetail.allOwnersConstraint) &&
        Objects.equals(this.labelOwnerConstraint, mskuPrepDetail.labelOwnerConstraint) &&
        Objects.equals(this.msku, mskuPrepDetail.msku) &&
        Objects.equals(this.prepCategory, mskuPrepDetail.prepCategory) &&
        Objects.equals(this.prepOwnerConstraint, mskuPrepDetail.prepOwnerConstraint) &&
        Objects.equals(this.prepTypes, mskuPrepDetail.prepTypes);
  }

  @Override
  public int hashCode() {
    return Objects.hash(allOwnersConstraint, labelOwnerConstraint, msku, prepCategory, prepOwnerConstraint, prepTypes);
  }


  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class MskuPrepDetail {\n");
    
    sb.append("    allOwnersConstraint: ").append(toIndentedString(allOwnersConstraint)).append("\n");
    sb.append("    labelOwnerConstraint: ").append(toIndentedString(labelOwnerConstraint)).append("\n");
    sb.append("    msku: ").append(toIndentedString(msku)).append("\n");
    sb.append("    prepCategory: ").append(toIndentedString(prepCategory)).append("\n");
    sb.append("    prepOwnerConstraint: ").append(toIndentedString(prepOwnerConstraint)).append("\n");
    sb.append("    prepTypes: ").append(toIndentedString(prepTypes)).append("\n");
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
