/*
 * Selling Partner API for Direct Fulfillment Orders
 * The Selling Partner API for Direct Fulfillment Orders provides programmatic access to a direct fulfillment vendor's order data.
 *
 * OpenAPI spec version: 2021-12-28
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */

package com.amazon.SellingPartnerAPI.models.vendor.df.orders.v2021_12_28;

import java.util.Objects;
import java.util.Arrays;
import com.amazon.SellingPartnerAPI.models.vendor.df.orders.v2021_12_28.ShipmentDates;
import com.google.gson.TypeAdapter;
import com.google.gson.annotations.JsonAdapter;
import com.google.gson.annotations.SerializedName;
import com.google.gson.stream.JsonReader;
import com.google.gson.stream.JsonWriter;
import io.swagger.v3.oas.annotations.media.Schema;
import java.io.IOException;
/**
 * Shipment details required for the shipment.
 */
@Schema(description = "Shipment details required for the shipment.")


public class ShipmentDetails {
  @SerializedName("isPriorityShipment")
  private Boolean isPriorityShipment = null;

  @SerializedName("isScheduledDeliveryShipment")
  private Boolean isScheduledDeliveryShipment = null;

  @SerializedName("isPslipRequired")
  private Boolean isPslipRequired = null;

  @SerializedName("isGift")
  private Boolean isGift = null;

  @SerializedName("shipMethod")
  private String shipMethod = null;

  @SerializedName("shipmentDates")
  private ShipmentDates shipmentDates = null;

  @SerializedName("messageToCustomer")
  private String messageToCustomer = null;

  public ShipmentDetails isPriorityShipment(Boolean isPriorityShipment) {
    this.isPriorityShipment = isPriorityShipment;
    return this;
  }

   /**
   * When true, this is a priority shipment.
   * @return isPriorityShipment
  **/
  @Schema(required = true, description = "When true, this is a priority shipment.")
  public Boolean isIsPriorityShipment() {
    return isPriorityShipment;
  }

  public void setIsPriorityShipment(Boolean isPriorityShipment) {
    this.isPriorityShipment = isPriorityShipment;
  }

  public ShipmentDetails isScheduledDeliveryShipment(Boolean isScheduledDeliveryShipment) {
    this.isScheduledDeliveryShipment = isScheduledDeliveryShipment;
    return this;
  }

   /**
   * When true, this order is part of a scheduled delivery program.
   * @return isScheduledDeliveryShipment
  **/
  @Schema(description = "When true, this order is part of a scheduled delivery program.")
  public Boolean isIsScheduledDeliveryShipment() {
    return isScheduledDeliveryShipment;
  }

  public void setIsScheduledDeliveryShipment(Boolean isScheduledDeliveryShipment) {
    this.isScheduledDeliveryShipment = isScheduledDeliveryShipment;
  }

  public ShipmentDetails isPslipRequired(Boolean isPslipRequired) {
    this.isPslipRequired = isPslipRequired;
    return this;
  }

   /**
   * When true, a packing slip is required to be sent to the customer.
   * @return isPslipRequired
  **/
  @Schema(required = true, description = "When true, a packing slip is required to be sent to the customer.")
  public Boolean isIsPslipRequired() {
    return isPslipRequired;
  }

  public void setIsPslipRequired(Boolean isPslipRequired) {
    this.isPslipRequired = isPslipRequired;
  }

  public ShipmentDetails isGift(Boolean isGift) {
    this.isGift = isGift;
    return this;
  }

   /**
   * When true, the order contain a gift. Include the gift message and gift wrap information.
   * @return isGift
  **/
  @Schema(description = "When true, the order contain a gift. Include the gift message and gift wrap information.")
  public Boolean isIsGift() {
    return isGift;
  }

  public void setIsGift(Boolean isGift) {
    this.isGift = isGift;
  }

  public ShipmentDetails shipMethod(String shipMethod) {
    this.shipMethod = shipMethod;
    return this;
  }

   /**
   * Ship method to be used for shipping the order. Amazon defines ship method codes indicating the shipping carrier and shipment service level. To see the full list of ship methods in use, including both the code and the friendly name, search the &#x27;Help&#x27; section on Vendor Central for &#x27;ship methods&#x27;.
   * @return shipMethod
  **/
  @Schema(required = true, description = "Ship method to be used for shipping the order. Amazon defines ship method codes indicating the shipping carrier and shipment service level. To see the full list of ship methods in use, including both the code and the friendly name, search the 'Help' section on Vendor Central for 'ship methods'.")
  public String getShipMethod() {
    return shipMethod;
  }

  public void setShipMethod(String shipMethod) {
    this.shipMethod = shipMethod;
  }

  public ShipmentDetails shipmentDates(ShipmentDates shipmentDates) {
    this.shipmentDates = shipmentDates;
    return this;
  }

   /**
   * Get shipmentDates
   * @return shipmentDates
  **/
  @Schema(required = true, description = "")
  public ShipmentDates getShipmentDates() {
    return shipmentDates;
  }

  public void setShipmentDates(ShipmentDates shipmentDates) {
    this.shipmentDates = shipmentDates;
  }

  public ShipmentDetails messageToCustomer(String messageToCustomer) {
    this.messageToCustomer = messageToCustomer;
    return this;
  }

   /**
   * Message to customer for order status.
   * @return messageToCustomer
  **/
  @Schema(required = true, description = "Message to customer for order status.")
  public String getMessageToCustomer() {
    return messageToCustomer;
  }

  public void setMessageToCustomer(String messageToCustomer) {
    this.messageToCustomer = messageToCustomer;
  }


  @Override
  public boolean equals(java.lang.Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    ShipmentDetails shipmentDetails = (ShipmentDetails) o;
    return Objects.equals(this.isPriorityShipment, shipmentDetails.isPriorityShipment) &&
        Objects.equals(this.isScheduledDeliveryShipment, shipmentDetails.isScheduledDeliveryShipment) &&
        Objects.equals(this.isPslipRequired, shipmentDetails.isPslipRequired) &&
        Objects.equals(this.isGift, shipmentDetails.isGift) &&
        Objects.equals(this.shipMethod, shipmentDetails.shipMethod) &&
        Objects.equals(this.shipmentDates, shipmentDetails.shipmentDates) &&
        Objects.equals(this.messageToCustomer, shipmentDetails.messageToCustomer);
  }

  @Override
  public int hashCode() {
    return Objects.hash(isPriorityShipment, isScheduledDeliveryShipment, isPslipRequired, isGift, shipMethod, shipmentDates, messageToCustomer);
  }


  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class ShipmentDetails {\n");
    
    sb.append("    isPriorityShipment: ").append(toIndentedString(isPriorityShipment)).append("\n");
    sb.append("    isScheduledDeliveryShipment: ").append(toIndentedString(isScheduledDeliveryShipment)).append("\n");
    sb.append("    isPslipRequired: ").append(toIndentedString(isPslipRequired)).append("\n");
    sb.append("    isGift: ").append(toIndentedString(isGift)).append("\n");
    sb.append("    shipMethod: ").append(toIndentedString(shipMethod)).append("\n");
    sb.append("    shipmentDates: ").append(toIndentedString(shipmentDates)).append("\n");
    sb.append("    messageToCustomer: ").append(toIndentedString(messageToCustomer)).append("\n");
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
