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

package com.amazon.SellingPartnerAPI.models.supplysources.v2020_07_01;

import java.util.Objects;
import java.util.Arrays;
import com.amazon.SellingPartnerAPI.models.supplysources.v2020_07_01.AddressWithContact;
import com.google.gson.TypeAdapter;
import com.google.gson.annotations.JsonAdapter;
import com.google.gson.annotations.SerializedName;
import com.google.gson.stream.JsonReader;
import com.google.gson.stream.JsonWriter;
import io.swagger.v3.oas.annotations.media.Schema;
import java.io.IOException;
/**
 * The address or reference to another &#x60;supplySourceId&#x60; to act as a return location.
 */
@Schema(description = "The address or reference to another `supplySourceId` to act as a return location.")


public class ReturnLocation {
  @SerializedName("supplySourceId")
  private String supplySourceId = null;

  @SerializedName("addressWithContact")
  private AddressWithContact addressWithContact = null;

  public ReturnLocation supplySourceId(String supplySourceId) {
    this.supplySourceId = supplySourceId;
    return this;
  }

   /**
   * The Amazon provided &#x60;supplySourceId&#x60; where orders can be returned to.
   * @return supplySourceId
  **/
  @Schema(description = "The Amazon provided `supplySourceId` where orders can be returned to.")
  public String getSupplySourceId() {
    return supplySourceId;
  }

  public void setSupplySourceId(String supplySourceId) {
    this.supplySourceId = supplySourceId;
  }

  public ReturnLocation addressWithContact(AddressWithContact addressWithContact) {
    this.addressWithContact = addressWithContact;
    return this;
  }

   /**
   * Get addressWithContact
   * @return addressWithContact
  **/
  @Schema(description = "")
  public AddressWithContact getAddressWithContact() {
    return addressWithContact;
  }

  public void setAddressWithContact(AddressWithContact addressWithContact) {
    this.addressWithContact = addressWithContact;
  }


  @Override
  public boolean equals(java.lang.Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    ReturnLocation returnLocation = (ReturnLocation) o;
    return Objects.equals(this.supplySourceId, returnLocation.supplySourceId) &&
        Objects.equals(this.addressWithContact, returnLocation.addressWithContact);
  }

  @Override
  public int hashCode() {
    return Objects.hash(supplySourceId, addressWithContact);
  }


  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class ReturnLocation {\n");
    
    sb.append("    supplySourceId: ").append(toIndentedString(supplySourceId)).append("\n");
    sb.append("    addressWithContact: ").append(toIndentedString(addressWithContact)).append("\n");
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
