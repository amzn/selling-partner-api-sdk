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

package com.amazon.SellingPartnerAPI;

import java.util.Objects;
import java.util.Arrays;
import com.amazon.SellingPartnerAPI.PrepCategory;
import com.amazon.SellingPartnerAPI.PrepType;
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
@javax.annotation.Generated(value = "io.swagger.codegen.v3.generators.java.JavaClientCodegen", date = "2024-11-14T09:08:39.223252Z[Etc/UTC]")

public class MskuPrepDetailInput {
  @SerializedName("msku")
  private String msku = null;

  @SerializedName("prepCategory")
  private PrepCategory prepCategory = null;

  @SerializedName("prepTypes")
  private List<PrepType> prepTypes = new ArrayList<PrepType>();

  public MskuPrepDetailInput msku(String msku) {
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

  public MskuPrepDetailInput prepCategory(PrepCategory prepCategory) {
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

  public MskuPrepDetailInput prepTypes(List<PrepType> prepTypes) {
    this.prepTypes = prepTypes;
    return this;
  }

  public MskuPrepDetailInput addPrepTypesItem(PrepType prepTypesItem) {
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
    MskuPrepDetailInput mskuPrepDetailInput = (MskuPrepDetailInput) o;
    return Objects.equals(this.msku, mskuPrepDetailInput.msku) &&
        Objects.equals(this.prepCategory, mskuPrepDetailInput.prepCategory) &&
        Objects.equals(this.prepTypes, mskuPrepDetailInput.prepTypes);
  }

  @Override
  public int hashCode() {
    return Objects.hash(msku, prepCategory, prepTypes);
  }


  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class MskuPrepDetailInput {\n");
    
    sb.append("    msku: ").append(toIndentedString(msku)).append("\n");
    sb.append("    prepCategory: ").append(toIndentedString(prepCategory)).append("\n");
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
