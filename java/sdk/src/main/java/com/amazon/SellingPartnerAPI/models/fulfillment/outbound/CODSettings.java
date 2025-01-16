/*
 * Selling Partner APIs for Fulfillment Outbound
 * The Selling Partner API for Fulfillment Outbound lets you create applications that help a seller fulfill Multi-Channel Fulfillment orders using their inventory in Amazon's fulfillment network. You can get information on both potential and existing fulfillment orders.
 *
 * OpenAPI spec version: 2020-07-01
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */

package com.amazon.SellingPartnerAPI.models.fulfillment.outbound;

import java.util.Objects;
import java.util.Arrays;
import com.amazon.SellingPartnerAPI.models.fulfillment.outbound.Money;
import com.google.gson.TypeAdapter;
import com.google.gson.annotations.JsonAdapter;
import com.google.gson.annotations.SerializedName;
import com.google.gson.stream.JsonReader;
import com.google.gson.stream.JsonWriter;
import io.swagger.v3.oas.annotations.media.Schema;
import java.io.IOException;
/**
 * The COD (Cash On Delivery) charges that you associate with a COD fulfillment order.
 */
@Schema(description = "The COD (Cash On Delivery) charges that you associate with a COD fulfillment order.")


public class CODSettings {
  @SerializedName("isCodRequired")
  private Boolean isCodRequired = null;

  @SerializedName("codCharge")
  private Money codCharge = null;

  @SerializedName("codChargeTax")
  private Money codChargeTax = null;

  @SerializedName("shippingCharge")
  private Money shippingCharge = null;

  @SerializedName("shippingChargeTax")
  private Money shippingChargeTax = null;

  public CODSettings isCodRequired(Boolean isCodRequired) {
    this.isCodRequired = isCodRequired;
    return this;
  }

   /**
   * When true, this fulfillment order requires a COD (Cash On Delivery) payment.
   * @return isCodRequired
  **/
  @Schema(required = true, description = "When true, this fulfillment order requires a COD (Cash On Delivery) payment.")
  public Boolean isIsCodRequired() {
    return isCodRequired;
  }

  public void setIsCodRequired(Boolean isCodRequired) {
    this.isCodRequired = isCodRequired;
  }

  public CODSettings codCharge(Money codCharge) {
    this.codCharge = codCharge;
    return this;
  }

   /**
   * Get codCharge
   * @return codCharge
  **/
  @Schema(description = "")
  public Money getCodCharge() {
    return codCharge;
  }

  public void setCodCharge(Money codCharge) {
    this.codCharge = codCharge;
  }

  public CODSettings codChargeTax(Money codChargeTax) {
    this.codChargeTax = codChargeTax;
    return this;
  }

   /**
   * Get codChargeTax
   * @return codChargeTax
  **/
  @Schema(description = "")
  public Money getCodChargeTax() {
    return codChargeTax;
  }

  public void setCodChargeTax(Money codChargeTax) {
    this.codChargeTax = codChargeTax;
  }

  public CODSettings shippingCharge(Money shippingCharge) {
    this.shippingCharge = shippingCharge;
    return this;
  }

   /**
   * Get shippingCharge
   * @return shippingCharge
  **/
  @Schema(description = "")
  public Money getShippingCharge() {
    return shippingCharge;
  }

  public void setShippingCharge(Money shippingCharge) {
    this.shippingCharge = shippingCharge;
  }

  public CODSettings shippingChargeTax(Money shippingChargeTax) {
    this.shippingChargeTax = shippingChargeTax;
    return this;
  }

   /**
   * Get shippingChargeTax
   * @return shippingChargeTax
  **/
  @Schema(description = "")
  public Money getShippingChargeTax() {
    return shippingChargeTax;
  }

  public void setShippingChargeTax(Money shippingChargeTax) {
    this.shippingChargeTax = shippingChargeTax;
  }


  @Override
  public boolean equals(java.lang.Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    CODSettings coDSettings = (CODSettings) o;
    return Objects.equals(this.isCodRequired, coDSettings.isCodRequired) &&
        Objects.equals(this.codCharge, coDSettings.codCharge) &&
        Objects.equals(this.codChargeTax, coDSettings.codChargeTax) &&
        Objects.equals(this.shippingCharge, coDSettings.shippingCharge) &&
        Objects.equals(this.shippingChargeTax, coDSettings.shippingChargeTax);
  }

  @Override
  public int hashCode() {
    return Objects.hash(isCodRequired, codCharge, codChargeTax, shippingCharge, shippingChargeTax);
  }


  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class CODSettings {\n");
    
    sb.append("    isCodRequired: ").append(toIndentedString(isCodRequired)).append("\n");
    sb.append("    codCharge: ").append(toIndentedString(codCharge)).append("\n");
    sb.append("    codChargeTax: ").append(toIndentedString(codChargeTax)).append("\n");
    sb.append("    shippingCharge: ").append(toIndentedString(shippingCharge)).append("\n");
    sb.append("    shippingChargeTax: ").append(toIndentedString(shippingChargeTax)).append("\n");
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
