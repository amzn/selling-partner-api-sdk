/*
 * Selling Partner API for Shipment Invoicing
 * The Selling Partner API for Shipment Invoicing helps you programmatically retrieve shipment invoice information in the Brazil marketplace for a selling partner’s Fulfillment by Amazon (FBA) orders.
 *
 * OpenAPI spec version: v0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */

package com.amazon.SellingPartnerAPI.models.invoicing.v0;

import java.util.Objects;
import java.util.Arrays;
import com.amazon.SellingPartnerAPI.models.invoicing.v0.TaxClassificationList;
import com.google.gson.TypeAdapter;
import com.google.gson.annotations.JsonAdapter;
import com.google.gson.annotations.SerializedName;
import com.google.gson.stream.JsonReader;
import com.google.gson.stream.JsonWriter;
import io.swagger.v3.oas.annotations.media.Schema;
import java.io.IOException;
/**
 * Tax information about the marketplace.
 */
@Schema(description = "Tax information about the marketplace.")


public class MarketplaceTaxInfo {
  @SerializedName("CompanyLegalName")
  private String companyLegalName = null;

  @SerializedName("TaxingRegion")
  private String taxingRegion = null;

  @SerializedName("TaxClassifications")
  private TaxClassificationList taxClassifications = null;

  public MarketplaceTaxInfo companyLegalName(String companyLegalName) {
    this.companyLegalName = companyLegalName;
    return this;
  }

   /**
   * The legal name of the company.
   * @return companyLegalName
  **/
  @Schema(description = "The legal name of the company.")
  public String getCompanyLegalName() {
    return companyLegalName;
  }

  public void setCompanyLegalName(String companyLegalName) {
    this.companyLegalName = companyLegalName;
  }

  public MarketplaceTaxInfo taxingRegion(String taxingRegion) {
    this.taxingRegion = taxingRegion;
    return this;
  }

   /**
   * The country or region imposing the tax.
   * @return taxingRegion
  **/
  @Schema(description = "The country or region imposing the tax.")
  public String getTaxingRegion() {
    return taxingRegion;
  }

  public void setTaxingRegion(String taxingRegion) {
    this.taxingRegion = taxingRegion;
  }

  public MarketplaceTaxInfo taxClassifications(TaxClassificationList taxClassifications) {
    this.taxClassifications = taxClassifications;
    return this;
  }

   /**
   * Get taxClassifications
   * @return taxClassifications
  **/
  @Schema(description = "")
  public TaxClassificationList getTaxClassifications() {
    return taxClassifications;
  }

  public void setTaxClassifications(TaxClassificationList taxClassifications) {
    this.taxClassifications = taxClassifications;
  }


  @Override
  public boolean equals(java.lang.Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    MarketplaceTaxInfo marketplaceTaxInfo = (MarketplaceTaxInfo) o;
    return Objects.equals(this.companyLegalName, marketplaceTaxInfo.companyLegalName) &&
        Objects.equals(this.taxingRegion, marketplaceTaxInfo.taxingRegion) &&
        Objects.equals(this.taxClassifications, marketplaceTaxInfo.taxClassifications);
  }

  @Override
  public int hashCode() {
    return Objects.hash(companyLegalName, taxingRegion, taxClassifications);
  }


  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class MarketplaceTaxInfo {\n");
    
    sb.append("    companyLegalName: ").append(toIndentedString(companyLegalName)).append("\n");
    sb.append("    taxingRegion: ").append(toIndentedString(taxingRegion)).append("\n");
    sb.append("    taxClassifications: ").append(toIndentedString(taxClassifications)).append("\n");
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
