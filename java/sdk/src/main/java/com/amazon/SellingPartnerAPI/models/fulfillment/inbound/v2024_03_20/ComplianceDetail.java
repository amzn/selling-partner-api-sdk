/*
 * The Selling Partner API for FBA inbound operations.
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
import com.amazon.SellingPartnerAPI.models.fulfillment.inbound.v2024_03_20.TaxDetails;
import com.google.gson.TypeAdapter;
import com.google.gson.annotations.JsonAdapter;
import com.google.gson.annotations.SerializedName;
import com.google.gson.stream.JsonReader;
import com.google.gson.stream.JsonWriter;
import io.swagger.v3.oas.annotations.media.Schema;
import java.io.IOException;
/**
 * Contains item identifiers and related tax information.
 */
@Schema(description = "Contains item identifiers and related tax information.")


public class ComplianceDetail {
  @SerializedName("asin")
  private String asin = null;

  @SerializedName("fnsku")
  private String fnsku = null;

  @SerializedName("msku")
  private String msku = null;

  @SerializedName("taxDetails")
  private TaxDetails taxDetails = null;

  public ComplianceDetail asin(String asin) {
    this.asin = asin;
    return this;
  }

   /**
   * The Amazon Standard Identification Number, which identifies the detail page identifier.
   * @return asin
  **/
  @Schema(description = "The Amazon Standard Identification Number, which identifies the detail page identifier.")
  public String getAsin() {
    return asin;
  }

  public void setAsin(String asin) {
    this.asin = asin;
  }

  public ComplianceDetail fnsku(String fnsku) {
    this.fnsku = fnsku;
    return this;
  }

   /**
   * The Fulfillment Network SKU, which identifies a real fulfillable item with catalog data and condition.
   * @return fnsku
  **/
  @Schema(description = "The Fulfillment Network SKU, which identifies a real fulfillable item with catalog data and condition.")
  public String getFnsku() {
    return fnsku;
  }

  public void setFnsku(String fnsku) {
    this.fnsku = fnsku;
  }

  public ComplianceDetail msku(String msku) {
    this.msku = msku;
    return this;
  }

   /**
   * The merchant SKU, a merchant-supplied identifier for a specific SKU.
   * @return msku
  **/
  @Schema(description = "The merchant SKU, a merchant-supplied identifier for a specific SKU.")
  public String getMsku() {
    return msku;
  }

  public void setMsku(String msku) {
    this.msku = msku;
  }

  public ComplianceDetail taxDetails(TaxDetails taxDetails) {
    this.taxDetails = taxDetails;
    return this;
  }

   /**
   * Get taxDetails
   * @return taxDetails
  **/
  @Schema(description = "")
  public TaxDetails getTaxDetails() {
    return taxDetails;
  }

  public void setTaxDetails(TaxDetails taxDetails) {
    this.taxDetails = taxDetails;
  }


  @Override
  public boolean equals(java.lang.Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    ComplianceDetail complianceDetail = (ComplianceDetail) o;
    return Objects.equals(this.asin, complianceDetail.asin) &&
        Objects.equals(this.fnsku, complianceDetail.fnsku) &&
        Objects.equals(this.msku, complianceDetail.msku) &&
        Objects.equals(this.taxDetails, complianceDetail.taxDetails);
  }

  @Override
  public int hashCode() {
    return Objects.hash(asin, fnsku, msku, taxDetails);
  }


  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class ComplianceDetail {\n");
    
    sb.append("    asin: ").append(toIndentedString(asin)).append("\n");
    sb.append("    fnsku: ").append(toIndentedString(fnsku)).append("\n");
    sb.append("    msku: ").append(toIndentedString(msku)).append("\n");
    sb.append("    taxDetails: ").append(toIndentedString(taxDetails)).append("\n");
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
