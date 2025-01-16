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
import com.amazon.SellingPartnerAPI.models.vendor.df.payments.v1.ChargeDetails;
import com.amazon.SellingPartnerAPI.models.vendor.df.payments.v1.ItemQuantity;
import com.amazon.SellingPartnerAPI.models.vendor.df.payments.v1.Money;
import com.amazon.SellingPartnerAPI.models.vendor.df.payments.v1.TaxDetail;
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
 * Provides the details of the items in this invoice.
 */
@Schema(description = "Provides the details of the items in this invoice.")


public class InvoiceItem {
  @SerializedName("itemSequenceNumber")
  private String itemSequenceNumber = null;

  @SerializedName("buyerProductIdentifier")
  private String buyerProductIdentifier = null;

  @SerializedName("vendorProductIdentifier")
  private String vendorProductIdentifier = null;

  @SerializedName("invoicedQuantity")
  private ItemQuantity invoicedQuantity = null;

  @SerializedName("netCost")
  private Money netCost = null;

  @SerializedName("purchaseOrderNumber")
  private String purchaseOrderNumber = null;

  @SerializedName("vendorOrderNumber")
  private String vendorOrderNumber = null;

  @SerializedName("hsnCode")
  private String hsnCode = null;

  @SerializedName("taxDetails")
  private List<TaxDetail> taxDetails = null;

  @SerializedName("chargeDetails")
  private List<ChargeDetails> chargeDetails = null;

  public InvoiceItem itemSequenceNumber(String itemSequenceNumber) {
    this.itemSequenceNumber = itemSequenceNumber;
    return this;
  }

   /**
   * Numbering of the item on the purchase order. The first item will be 1, the second 2, and so on.
   * @return itemSequenceNumber
  **/
  @Schema(required = true, description = "Numbering of the item on the purchase order. The first item will be 1, the second 2, and so on.")
  public String getItemSequenceNumber() {
    return itemSequenceNumber;
  }

  public void setItemSequenceNumber(String itemSequenceNumber) {
    this.itemSequenceNumber = itemSequenceNumber;
  }

  public InvoiceItem buyerProductIdentifier(String buyerProductIdentifier) {
    this.buyerProductIdentifier = buyerProductIdentifier;
    return this;
  }

   /**
   * Buyer&#x27;s standard identification number (ASIN) of an item.
   * @return buyerProductIdentifier
  **/
  @Schema(description = "Buyer's standard identification number (ASIN) of an item.")
  public String getBuyerProductIdentifier() {
    return buyerProductIdentifier;
  }

  public void setBuyerProductIdentifier(String buyerProductIdentifier) {
    this.buyerProductIdentifier = buyerProductIdentifier;
  }

  public InvoiceItem vendorProductIdentifier(String vendorProductIdentifier) {
    this.vendorProductIdentifier = vendorProductIdentifier;
    return this;
  }

   /**
   * The vendor selected product identification of the item.
   * @return vendorProductIdentifier
  **/
  @Schema(description = "The vendor selected product identification of the item.")
  public String getVendorProductIdentifier() {
    return vendorProductIdentifier;
  }

  public void setVendorProductIdentifier(String vendorProductIdentifier) {
    this.vendorProductIdentifier = vendorProductIdentifier;
  }

  public InvoiceItem invoicedQuantity(ItemQuantity invoicedQuantity) {
    this.invoicedQuantity = invoicedQuantity;
    return this;
  }

   /**
   * Get invoicedQuantity
   * @return invoicedQuantity
  **/
  @Schema(required = true, description = "")
  public ItemQuantity getInvoicedQuantity() {
    return invoicedQuantity;
  }

  public void setInvoicedQuantity(ItemQuantity invoicedQuantity) {
    this.invoicedQuantity = invoicedQuantity;
  }

  public InvoiceItem netCost(Money netCost) {
    this.netCost = netCost;
    return this;
  }

   /**
   * Get netCost
   * @return netCost
  **/
  @Schema(required = true, description = "")
  public Money getNetCost() {
    return netCost;
  }

  public void setNetCost(Money netCost) {
    this.netCost = netCost;
  }

  public InvoiceItem purchaseOrderNumber(String purchaseOrderNumber) {
    this.purchaseOrderNumber = purchaseOrderNumber;
    return this;
  }

   /**
   * The purchase order number for this order. Formatting Notes: 8-character alpha-numeric code.
   * @return purchaseOrderNumber
  **/
  @Schema(required = true, description = "The purchase order number for this order. Formatting Notes: 8-character alpha-numeric code.")
  public String getPurchaseOrderNumber() {
    return purchaseOrderNumber;
  }

  public void setPurchaseOrderNumber(String purchaseOrderNumber) {
    this.purchaseOrderNumber = purchaseOrderNumber;
  }

  public InvoiceItem vendorOrderNumber(String vendorOrderNumber) {
    this.vendorOrderNumber = vendorOrderNumber;
    return this;
  }

   /**
   * The vendor&#x27;s order number for this order.
   * @return vendorOrderNumber
  **/
  @Schema(description = "The vendor's order number for this order.")
  public String getVendorOrderNumber() {
    return vendorOrderNumber;
  }

  public void setVendorOrderNumber(String vendorOrderNumber) {
    this.vendorOrderNumber = vendorOrderNumber;
  }

  public InvoiceItem hsnCode(String hsnCode) {
    this.hsnCode = hsnCode;
    return this;
  }

   /**
   * Harmonized System of Nomenclature (HSN) tax code. The HSN number cannot contain alphabets.
   * @return hsnCode
  **/
  @Schema(description = "Harmonized System of Nomenclature (HSN) tax code. The HSN number cannot contain alphabets.")
  public String getHsnCode() {
    return hsnCode;
  }

  public void setHsnCode(String hsnCode) {
    this.hsnCode = hsnCode;
  }

  public InvoiceItem taxDetails(List<TaxDetail> taxDetails) {
    this.taxDetails = taxDetails;
    return this;
  }

  public InvoiceItem addTaxDetailsItem(TaxDetail taxDetailsItem) {
    if (this.taxDetails == null) {
      this.taxDetails = new ArrayList<TaxDetail>();
    }
    this.taxDetails.add(taxDetailsItem);
    return this;
  }

   /**
   * Individual tax details per line item.
   * @return taxDetails
  **/
  @Schema(description = "Individual tax details per line item.")
  public List<TaxDetail> getTaxDetails() {
    return taxDetails;
  }

  public void setTaxDetails(List<TaxDetail> taxDetails) {
    this.taxDetails = taxDetails;
  }

  public InvoiceItem chargeDetails(List<ChargeDetails> chargeDetails) {
    this.chargeDetails = chargeDetails;
    return this;
  }

  public InvoiceItem addChargeDetailsItem(ChargeDetails chargeDetailsItem) {
    if (this.chargeDetails == null) {
      this.chargeDetails = new ArrayList<ChargeDetails>();
    }
    this.chargeDetails.add(chargeDetailsItem);
    return this;
  }

   /**
   * Individual charge details per line item.
   * @return chargeDetails
  **/
  @Schema(description = "Individual charge details per line item.")
  public List<ChargeDetails> getChargeDetails() {
    return chargeDetails;
  }

  public void setChargeDetails(List<ChargeDetails> chargeDetails) {
    this.chargeDetails = chargeDetails;
  }


  @Override
  public boolean equals(java.lang.Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    InvoiceItem invoiceItem = (InvoiceItem) o;
    return Objects.equals(this.itemSequenceNumber, invoiceItem.itemSequenceNumber) &&
        Objects.equals(this.buyerProductIdentifier, invoiceItem.buyerProductIdentifier) &&
        Objects.equals(this.vendorProductIdentifier, invoiceItem.vendorProductIdentifier) &&
        Objects.equals(this.invoicedQuantity, invoiceItem.invoicedQuantity) &&
        Objects.equals(this.netCost, invoiceItem.netCost) &&
        Objects.equals(this.purchaseOrderNumber, invoiceItem.purchaseOrderNumber) &&
        Objects.equals(this.vendorOrderNumber, invoiceItem.vendorOrderNumber) &&
        Objects.equals(this.hsnCode, invoiceItem.hsnCode) &&
        Objects.equals(this.taxDetails, invoiceItem.taxDetails) &&
        Objects.equals(this.chargeDetails, invoiceItem.chargeDetails);
  }

  @Override
  public int hashCode() {
    return Objects.hash(itemSequenceNumber, buyerProductIdentifier, vendorProductIdentifier, invoicedQuantity, netCost, purchaseOrderNumber, vendorOrderNumber, hsnCode, taxDetails, chargeDetails);
  }


  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class InvoiceItem {\n");
    
    sb.append("    itemSequenceNumber: ").append(toIndentedString(itemSequenceNumber)).append("\n");
    sb.append("    buyerProductIdentifier: ").append(toIndentedString(buyerProductIdentifier)).append("\n");
    sb.append("    vendorProductIdentifier: ").append(toIndentedString(vendorProductIdentifier)).append("\n");
    sb.append("    invoicedQuantity: ").append(toIndentedString(invoicedQuantity)).append("\n");
    sb.append("    netCost: ").append(toIndentedString(netCost)).append("\n");
    sb.append("    purchaseOrderNumber: ").append(toIndentedString(purchaseOrderNumber)).append("\n");
    sb.append("    vendorOrderNumber: ").append(toIndentedString(vendorOrderNumber)).append("\n");
    sb.append("    hsnCode: ").append(toIndentedString(hsnCode)).append("\n");
    sb.append("    taxDetails: ").append(toIndentedString(taxDetails)).append("\n");
    sb.append("    chargeDetails: ").append(toIndentedString(chargeDetails)).append("\n");
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
