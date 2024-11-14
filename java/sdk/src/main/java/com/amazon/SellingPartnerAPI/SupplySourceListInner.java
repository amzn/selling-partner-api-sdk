/*
 * Selling Partner API for Supply Sources
 * Manage configurations and capabilities of seller supply sources.
 *
 * OpenAPI spec version: 2020-07-01
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */

package com.amazon.SellingPartnerAPI;

import java.util.Objects;
import java.util.Arrays;
import com.amazon.SellingPartnerAPI.Address;
import com.google.gson.TypeAdapter;
import com.google.gson.annotations.JsonAdapter;
import com.google.gson.annotations.SerializedName;
import com.google.gson.stream.JsonReader;
import com.google.gson.stream.JsonWriter;
import io.swagger.v3.oas.annotations.media.Schema;
import java.io.IOException;
/**
 * SupplySourceListInner
 */

@javax.annotation.Generated(value = "io.swagger.codegen.v3.generators.java.JavaClientCodegen", date = "2024-11-14T09:10:05.808636Z[Etc/UTC]")

public class SupplySourceListInner {
  @SerializedName("alias")
  private String alias = null;

  @SerializedName("supplySourceId")
  private String supplySourceId = null;

  @SerializedName("supplySourceCode")
  private String supplySourceCode = null;

  @SerializedName("address")
  private Address address = null;

  public SupplySourceListInner alias(String alias) {
    this.alias = alias;
    return this;
  }

   /**
   * Get alias
   * @return alias
  **/
  @Schema(description = "")
  public String getAlias() {
    return alias;
  }

  public void setAlias(String alias) {
    this.alias = alias;
  }

  public SupplySourceListInner supplySourceId(String supplySourceId) {
    this.supplySourceId = supplySourceId;
    return this;
  }

   /**
   * Get supplySourceId
   * @return supplySourceId
  **/
  @Schema(description = "")
  public String getSupplySourceId() {
    return supplySourceId;
  }

  public void setSupplySourceId(String supplySourceId) {
    this.supplySourceId = supplySourceId;
  }

  public SupplySourceListInner supplySourceCode(String supplySourceCode) {
    this.supplySourceCode = supplySourceCode;
    return this;
  }

   /**
   * Get supplySourceCode
   * @return supplySourceCode
  **/
  @Schema(description = "")
  public String getSupplySourceCode() {
    return supplySourceCode;
  }

  public void setSupplySourceCode(String supplySourceCode) {
    this.supplySourceCode = supplySourceCode;
  }

  public SupplySourceListInner address(Address address) {
    this.address = address;
    return this;
  }

   /**
   * Get address
   * @return address
  **/
  @Schema(description = "")
  public Address getAddress() {
    return address;
  }

  public void setAddress(Address address) {
    this.address = address;
  }


  @Override
  public boolean equals(java.lang.Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    SupplySourceListInner supplySourceListInner = (SupplySourceListInner) o;
    return Objects.equals(this.alias, supplySourceListInner.alias) &&
        Objects.equals(this.supplySourceId, supplySourceListInner.supplySourceId) &&
        Objects.equals(this.supplySourceCode, supplySourceListInner.supplySourceCode) &&
        Objects.equals(this.address, supplySourceListInner.address);
  }

  @Override
  public int hashCode() {
    return Objects.hash(alias, supplySourceId, supplySourceCode, address);
  }


  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class SupplySourceListInner {\n");
    
    sb.append("    alias: ").append(toIndentedString(alias)).append("\n");
    sb.append("    supplySourceId: ").append(toIndentedString(supplySourceId)).append("\n");
    sb.append("    supplySourceCode: ").append(toIndentedString(supplySourceCode)).append("\n");
    sb.append("    address: ").append(toIndentedString(address)).append("\n");
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
