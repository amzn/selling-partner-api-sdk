/*
 * Vendor Shipments v1
 * The Selling Partner API for Retail Procurement Shipments provides programmatic access to retail shipping data for vendors.
 *
 * OpenAPI spec version: v1
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */

package com.amazon.SellingPartnerAPI;

import java.util.Objects;
import java.util.Arrays;
import com.amazon.SellingPartnerAPI.Duration;
import com.google.gson.TypeAdapter;
import com.google.gson.annotations.JsonAdapter;
import com.google.gson.annotations.SerializedName;
import com.google.gson.stream.JsonReader;
import com.google.gson.stream.JsonWriter;
import io.swagger.v3.oas.annotations.media.Schema;
import java.io.IOException;
import org.threeten.bp.OffsetDateTime;
/**
 * Expiry refers to the collection of dates required  for certain items. These could be either expiryDate or mfgDate and expiryAfterDuration. These are mandatory for perishable items.
 */
@Schema(description = "Expiry refers to the collection of dates required  for certain items. These could be either expiryDate or mfgDate and expiryAfterDuration. These are mandatory for perishable items.")
@javax.annotation.Generated(value = "io.swagger.codegen.v3.generators.java.JavaClientCodegen", date = "2024-11-14T09:10:38.210293Z[Etc/UTC]")

public class Expiry {
  @SerializedName("manufacturerDate")
  private OffsetDateTime manufacturerDate = null;

  @SerializedName("expiryDate")
  private OffsetDateTime expiryDate = null;

  @SerializedName("expiryAfterDuration")
  private Duration expiryAfterDuration = null;

  public Expiry manufacturerDate(OffsetDateTime manufacturerDate) {
    this.manufacturerDate = manufacturerDate;
    return this;
  }

   /**
   * Production, packaging or assembly date determined by the manufacturer. Its meaning is determined based on the trade item context.
   * @return manufacturerDate
  **/
  @Schema(description = "Production, packaging or assembly date determined by the manufacturer. Its meaning is determined based on the trade item context.")
  public OffsetDateTime getManufacturerDate() {
    return manufacturerDate;
  }

  public void setManufacturerDate(OffsetDateTime manufacturerDate) {
    this.manufacturerDate = manufacturerDate;
  }

  public Expiry expiryDate(OffsetDateTime expiryDate) {
    this.expiryDate = expiryDate;
    return this;
  }

   /**
   * The date that determines the limit of consumption or use of a product. Its meaning is determined based on the trade item context.
   * @return expiryDate
  **/
  @Schema(description = "The date that determines the limit of consumption or use of a product. Its meaning is determined based on the trade item context.")
  public OffsetDateTime getExpiryDate() {
    return expiryDate;
  }

  public void setExpiryDate(OffsetDateTime expiryDate) {
    this.expiryDate = expiryDate;
  }

  public Expiry expiryAfterDuration(Duration expiryAfterDuration) {
    this.expiryAfterDuration = expiryAfterDuration;
    return this;
  }

   /**
   * Get expiryAfterDuration
   * @return expiryAfterDuration
  **/
  @Schema(description = "")
  public Duration getExpiryAfterDuration() {
    return expiryAfterDuration;
  }

  public void setExpiryAfterDuration(Duration expiryAfterDuration) {
    this.expiryAfterDuration = expiryAfterDuration;
  }


  @Override
  public boolean equals(java.lang.Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    Expiry expiry = (Expiry) o;
    return Objects.equals(this.manufacturerDate, expiry.manufacturerDate) &&
        Objects.equals(this.expiryDate, expiry.expiryDate) &&
        Objects.equals(this.expiryAfterDuration, expiry.expiryAfterDuration);
  }

  @Override
  public int hashCode() {
    return Objects.hash(manufacturerDate, expiryDate, expiryAfterDuration);
  }


  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class Expiry {\n");
    
    sb.append("    manufacturerDate: ").append(toIndentedString(manufacturerDate)).append("\n");
    sb.append("    expiryDate: ").append(toIndentedString(expiryDate)).append("\n");
    sb.append("    expiryAfterDuration: ").append(toIndentedString(expiryAfterDuration)).append("\n");
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
