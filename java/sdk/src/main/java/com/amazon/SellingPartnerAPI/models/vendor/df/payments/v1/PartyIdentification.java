/*
 * Selling Partner API for Direct Fulfillment Payments
 * The Selling Partner API for Direct Fulfillment Payments provides programmatic access to a direct fulfillment vendor's invoice data.
 *
 * OpenAPI spec version: v1
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */

package com.amazon.SellingPartnerAPI.models.vendor.df.payments.v1;

import java.util.Objects;
import java.util.Arrays;
import com.amazon.SellingPartnerAPI.models.vendor.df.payments.v1.Address;
import com.amazon.SellingPartnerAPI.models.vendor.df.payments.v1.TaxRegistrationDetail;
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
 * Name, address and tax details of a party.
 */
@Schema(description = "Name, address and tax details of a party.")


public class PartyIdentification {
  @SerializedName("partyId")
  private String partyId = null;

  @SerializedName("address")
  private Address address = null;

  @SerializedName("taxRegistrationDetails")
  private List<TaxRegistrationDetail> taxRegistrationDetails = null;

  public PartyIdentification partyId(String partyId) {
    this.partyId = partyId;
    return this;
  }

   /**
   * Assigned Identification for the party.
   * @return partyId
  **/
  @Schema(required = true, description = "Assigned Identification for the party.")
  public String getPartyId() {
    return partyId;
  }

  public void setPartyId(String partyId) {
    this.partyId = partyId;
  }

  public PartyIdentification address(Address address) {
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

  public PartyIdentification taxRegistrationDetails(List<TaxRegistrationDetail> taxRegistrationDetails) {
    this.taxRegistrationDetails = taxRegistrationDetails;
    return this;
  }

  public PartyIdentification addTaxRegistrationDetailsItem(TaxRegistrationDetail taxRegistrationDetailsItem) {
    if (this.taxRegistrationDetails == null) {
      this.taxRegistrationDetails = new ArrayList<TaxRegistrationDetail>();
    }
    this.taxRegistrationDetails.add(taxRegistrationDetailsItem);
    return this;
  }

   /**
   * Tax registration details of the entity.
   * @return taxRegistrationDetails
  **/
  @Schema(description = "Tax registration details of the entity.")
  public List<TaxRegistrationDetail> getTaxRegistrationDetails() {
    return taxRegistrationDetails;
  }

  public void setTaxRegistrationDetails(List<TaxRegistrationDetail> taxRegistrationDetails) {
    this.taxRegistrationDetails = taxRegistrationDetails;
  }


  @Override
  public boolean equals(java.lang.Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    PartyIdentification partyIdentification = (PartyIdentification) o;
    return Objects.equals(this.partyId, partyIdentification.partyId) &&
        Objects.equals(this.address, partyIdentification.address) &&
        Objects.equals(this.taxRegistrationDetails, partyIdentification.taxRegistrationDetails);
  }

  @Override
  public int hashCode() {
    return Objects.hash(partyId, address, taxRegistrationDetails);
  }


  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class PartyIdentification {\n");
    
    sb.append("    partyId: ").append(toIndentedString(partyId)).append("\n");
    sb.append("    address: ").append(toIndentedString(address)).append("\n");
    sb.append("    taxRegistrationDetails: ").append(toIndentedString(taxRegistrationDetails)).append("\n");
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
