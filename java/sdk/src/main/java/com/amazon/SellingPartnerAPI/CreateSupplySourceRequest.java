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
 * A request to create a supply source.
 */
@Schema(description = "A request to create a supply source.")
@javax.annotation.Generated(value = "io.swagger.codegen.v3.generators.java.JavaClientCodegen", date = "2024-11-14T09:10:05.808636Z[Etc/UTC]")

public class CreateSupplySourceRequest {
  @SerializedName("supplySourceCode")
  private String supplySourceCode = null;

  @SerializedName("alias")
  private String alias = null;

  @SerializedName("address")
  private Address address = null;

  public CreateSupplySourceRequest supplySourceCode(String supplySourceCode) {
    this.supplySourceCode = supplySourceCode;
    return this;
  }

   /**
   * Get supplySourceCode
   * @return supplySourceCode
  **/
  @Schema(required = true, description = "")
  public String getSupplySourceCode() {
    return supplySourceCode;
  }

  public void setSupplySourceCode(String supplySourceCode) {
    this.supplySourceCode = supplySourceCode;
  }

  public CreateSupplySourceRequest alias(String alias) {
    this.alias = alias;
    return this;
  }

   /**
   * Get alias
   * @return alias
  **/
  @Schema(required = true, description = "")
  public String getAlias() {
    return alias;
  }

  public void setAlias(String alias) {
    this.alias = alias;
  }

  public CreateSupplySourceRequest address(Address address) {
    this.address = address;
    return this;
  }

   /**
   * Get address
   * @return address
  **/
  @Schema(required = true, description = "")
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
    CreateSupplySourceRequest createSupplySourceRequest = (CreateSupplySourceRequest) o;
    return Objects.equals(this.supplySourceCode, createSupplySourceRequest.supplySourceCode) &&
        Objects.equals(this.alias, createSupplySourceRequest.alias) &&
        Objects.equals(this.address, createSupplySourceRequest.address);
  }

  @Override
  public int hashCode() {
    return Objects.hash(supplySourceCode, alias, address);
  }


  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class CreateSupplySourceRequest {\n");
    
    sb.append("    supplySourceCode: ").append(toIndentedString(supplySourceCode)).append("\n");
    sb.append("    alias: ").append(toIndentedString(alias)).append("\n");
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
