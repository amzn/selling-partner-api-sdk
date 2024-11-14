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

package com.amazon.SellingPartnerAPI.models;

import java.util.Objects;
import java.util.Arrays;
import com.amazon.SellingPartnerAPI.models.Incentive;
import com.amazon.SellingPartnerAPI.models.ShippingConfiguration;
import com.google.gson.TypeAdapter;
import com.google.gson.annotations.JsonAdapter;
import com.google.gson.annotations.SerializedName;
import com.google.gson.stream.JsonReader;
import com.google.gson.stream.JsonWriter;
import io.swagger.v3.oas.annotations.media.Schema;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import org.threeten.bp.OffsetDateTime;
/**
 * A packing option contains a set of pack groups plus additional information about the packing option, such as any discounts or fees if it&#x27;s selected.
 */
@Schema(description = "A packing option contains a set of pack groups plus additional information about the packing option, such as any discounts or fees if it's selected.")


public class PackingOption {
  @SerializedName("discounts")
  private List<Incentive> discounts = new ArrayList<Incentive>();

  @SerializedName("expiration")
  private OffsetDateTime expiration = null;

  @SerializedName("fees")
  private List<Incentive> fees = new ArrayList<Incentive>();

  @SerializedName("packingGroups")
  private List<String> packingGroups = new ArrayList<String>();

  @SerializedName("packingOptionId")
  private String packingOptionId = null;

  @SerializedName("status")
  private String status = null;

  @SerializedName("supportedShippingConfigurations")
  private List<ShippingConfiguration> supportedShippingConfigurations = new ArrayList<ShippingConfiguration>();

  public PackingOption discounts(List<Incentive> discounts) {
    this.discounts = discounts;
    return this;
  }

  public PackingOption addDiscountsItem(Incentive discountsItem) {
    this.discounts.add(discountsItem);
    return this;
  }

   /**
   * Discount for the offered option.
   * @return discounts
  **/
  @Schema(required = true, description = "Discount for the offered option.")
  public List<Incentive> getDiscounts() {
    return discounts;
  }

  public void setDiscounts(List<Incentive> discounts) {
    this.discounts = discounts;
  }

  public PackingOption expiration(OffsetDateTime expiration) {
    this.expiration = expiration;
    return this;
  }

   /**
   * The time at which this packing option is no longer valid. In [ISO 8601](https://developer-docs.amazon.com/sp-api/docs/iso-8601) datetime format with pattern &#x60;yyyy-MM-ddTHH:mm:ss.sssZ&#x60;.
   * @return expiration
  **/
  @Schema(description = "The time at which this packing option is no longer valid. In [ISO 8601](https://developer-docs.amazon.com/sp-api/docs/iso-8601) datetime format with pattern `yyyy-MM-ddTHH:mm:ss.sssZ`.")
  public OffsetDateTime getExpiration() {
    return expiration;
  }

  public void setExpiration(OffsetDateTime expiration) {
    this.expiration = expiration;
  }

  public PackingOption fees(List<Incentive> fees) {
    this.fees = fees;
    return this;
  }

  public PackingOption addFeesItem(Incentive feesItem) {
    this.fees.add(feesItem);
    return this;
  }

   /**
   * Fee for the offered option.
   * @return fees
  **/
  @Schema(required = true, description = "Fee for the offered option.")
  public List<Incentive> getFees() {
    return fees;
  }

  public void setFees(List<Incentive> fees) {
    this.fees = fees;
  }

  public PackingOption packingGroups(List<String> packingGroups) {
    this.packingGroups = packingGroups;
    return this;
  }

  public PackingOption addPackingGroupsItem(String packingGroupsItem) {
    this.packingGroups.add(packingGroupsItem);
    return this;
  }

   /**
   * Packing group IDs.
   * @return packingGroups
  **/
  @Schema(required = true, description = "Packing group IDs.")
  public List<String> getPackingGroups() {
    return packingGroups;
  }

  public void setPackingGroups(List<String> packingGroups) {
    this.packingGroups = packingGroups;
  }

  public PackingOption packingOptionId(String packingOptionId) {
    this.packingOptionId = packingOptionId;
    return this;
  }

   /**
   * Identifier of a packing option.
   * @return packingOptionId
  **/
  @Schema(required = true, description = "Identifier of a packing option.")
  public String getPackingOptionId() {
    return packingOptionId;
  }

  public void setPackingOptionId(String packingOptionId) {
    this.packingOptionId = packingOptionId;
  }

  public PackingOption status(String status) {
    this.status = status;
    return this;
  }

   /**
   * The status of the packing option. Possible values: &#x60;OFFERED&#x60;, &#x60;ACCEPTED&#x60;, &#x60;EXPIRED&#x60;.
   * @return status
  **/
  @Schema(required = true, description = "The status of the packing option. Possible values: `OFFERED`, `ACCEPTED`, `EXPIRED`.")
  public String getStatus() {
    return status;
  }

  public void setStatus(String status) {
    this.status = status;
  }

  public PackingOption supportedShippingConfigurations(List<ShippingConfiguration> supportedShippingConfigurations) {
    this.supportedShippingConfigurations = supportedShippingConfigurations;
    return this;
  }

  public PackingOption addSupportedShippingConfigurationsItem(ShippingConfiguration supportedShippingConfigurationsItem) {
    this.supportedShippingConfigurations.add(supportedShippingConfigurationsItem);
    return this;
  }

   /**
   * List of supported shipping modes.
   * @return supportedShippingConfigurations
  **/
  @Schema(required = true, description = "List of supported shipping modes.")
  public List<ShippingConfiguration> getSupportedShippingConfigurations() {
    return supportedShippingConfigurations;
  }

  public void setSupportedShippingConfigurations(List<ShippingConfiguration> supportedShippingConfigurations) {
    this.supportedShippingConfigurations = supportedShippingConfigurations;
  }


  @Override
  public boolean equals(java.lang.Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    PackingOption packingOption = (PackingOption) o;
    return Objects.equals(this.discounts, packingOption.discounts) &&
        Objects.equals(this.expiration, packingOption.expiration) &&
        Objects.equals(this.fees, packingOption.fees) &&
        Objects.equals(this.packingGroups, packingOption.packingGroups) &&
        Objects.equals(this.packingOptionId, packingOption.packingOptionId) &&
        Objects.equals(this.status, packingOption.status) &&
        Objects.equals(this.supportedShippingConfigurations, packingOption.supportedShippingConfigurations);
  }

  @Override
  public int hashCode() {
    return Objects.hash(discounts, expiration, fees, packingGroups, packingOptionId, status, supportedShippingConfigurations);
  }


  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class PackingOption {\n");
    
    sb.append("    discounts: ").append(toIndentedString(discounts)).append("\n");
    sb.append("    expiration: ").append(toIndentedString(expiration)).append("\n");
    sb.append("    fees: ").append(toIndentedString(fees)).append("\n");
    sb.append("    packingGroups: ").append(toIndentedString(packingGroups)).append("\n");
    sb.append("    packingOptionId: ").append(toIndentedString(packingOptionId)).append("\n");
    sb.append("    status: ").append(toIndentedString(status)).append("\n");
    sb.append("    supportedShippingConfigurations: ").append(toIndentedString(supportedShippingConfigurations)).append("\n");
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
