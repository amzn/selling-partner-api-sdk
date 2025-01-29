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
import com.amazon.SellingPartnerAPI.models.fulfillment.inbound.v2024_03_20.Carrier;
import com.amazon.SellingPartnerAPI.models.fulfillment.inbound.v2024_03_20.CarrierAppointment;
import com.amazon.SellingPartnerAPI.models.fulfillment.inbound.v2024_03_20.Quote;
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
 * Contains information pertaining to a transportation option and the related carrier.
 */
@Schema(description = "Contains information pertaining to a transportation option and the related carrier.")


public class TransportationOption {
  @SerializedName("carrier")
  private Carrier carrier = null;

  @SerializedName("carrierAppointment")
  private CarrierAppointment carrierAppointment = null;

  @SerializedName("preconditions")
  private List<String> preconditions = new ArrayList<String>();

  @SerializedName("quote")
  private Quote quote = null;

  @SerializedName("shipmentId")
  private String shipmentId = null;

  @SerializedName("shippingMode")
  private String shippingMode = null;

  @SerializedName("shippingSolution")
  private String shippingSolution = null;

  @SerializedName("transportationOptionId")
  private String transportationOptionId = null;

  public TransportationOption carrier(Carrier carrier) {
    this.carrier = carrier;
    return this;
  }

   /**
   * Get carrier
   * @return carrier
  **/
  @Schema(required = true, description = "")
  public Carrier getCarrier() {
    return carrier;
  }

  public void setCarrier(Carrier carrier) {
    this.carrier = carrier;
  }

  public TransportationOption carrierAppointment(CarrierAppointment carrierAppointment) {
    this.carrierAppointment = carrierAppointment;
    return this;
  }

   /**
   * Get carrierAppointment
   * @return carrierAppointment
  **/
  @Schema(description = "")
  public CarrierAppointment getCarrierAppointment() {
    return carrierAppointment;
  }

  public void setCarrierAppointment(CarrierAppointment carrierAppointment) {
    this.carrierAppointment = carrierAppointment;
  }

  public TransportationOption preconditions(List<String> preconditions) {
    this.preconditions = preconditions;
    return this;
  }

  public TransportationOption addPreconditionsItem(String preconditionsItem) {
    this.preconditions.add(preconditionsItem);
    return this;
  }

   /**
   * Identifies a list of preconditions for confirming the transportation option.
   * @return preconditions
  **/
  @Schema(required = true, description = "Identifies a list of preconditions for confirming the transportation option.")
  public List<String> getPreconditions() {
    return preconditions;
  }

  public void setPreconditions(List<String> preconditions) {
    this.preconditions = preconditions;
  }

  public TransportationOption quote(Quote quote) {
    this.quote = quote;
    return this;
  }

   /**
   * Get quote
   * @return quote
  **/
  @Schema(description = "")
  public Quote getQuote() {
    return quote;
  }

  public void setQuote(Quote quote) {
    this.quote = quote;
  }

  public TransportationOption shipmentId(String shipmentId) {
    this.shipmentId = shipmentId;
    return this;
  }

   /**
   * Identifier of a shipment. A shipment contains the boxes and units being inbounded.
   * @return shipmentId
  **/
  @Schema(required = true, description = "Identifier of a shipment. A shipment contains the boxes and units being inbounded.")
  public String getShipmentId() {
    return shipmentId;
  }

  public void setShipmentId(String shipmentId) {
    this.shipmentId = shipmentId;
  }

  public TransportationOption shippingMode(String shippingMode) {
    this.shippingMode = shippingMode;
    return this;
  }

   /**
   * Mode of shipment transportation that this option will provide.  Possible values: &#x60;GROUND_SMALL_PARCEL&#x60;, &#x60;FREIGHT_LTL&#x60;, &#x60;FREIGHT_FTL_PALLET&#x60;, &#x60;FREIGHT_FTL_NONPALLET&#x60;, &#x60;OCEAN_LCL&#x60;, &#x60;OCEAN_FCL&#x60;, &#x60;AIR_SMALL_PARCEL&#x60;, &#x60;AIR_SMALL_PARCEL_EXPRESS&#x60;.
   * @return shippingMode
  **/
  @Schema(required = true, description = "Mode of shipment transportation that this option will provide.  Possible values: `GROUND_SMALL_PARCEL`, `FREIGHT_LTL`, `FREIGHT_FTL_PALLET`, `FREIGHT_FTL_NONPALLET`, `OCEAN_LCL`, `OCEAN_FCL`, `AIR_SMALL_PARCEL`, `AIR_SMALL_PARCEL_EXPRESS`.")
  public String getShippingMode() {
    return shippingMode;
  }

  public void setShippingMode(String shippingMode) {
    this.shippingMode = shippingMode;
  }

  public TransportationOption shippingSolution(String shippingSolution) {
    this.shippingSolution = shippingSolution;
    return this;
  }

   /**
   * Shipping program for the option. Possible values: &#x60;AMAZON_PARTNERED_CARRIER&#x60;, &#x60;USE_YOUR_OWN_CARRIER&#x60;.
   * @return shippingSolution
  **/
  @Schema(required = true, description = "Shipping program for the option. Possible values: `AMAZON_PARTNERED_CARRIER`, `USE_YOUR_OWN_CARRIER`.")
  public String getShippingSolution() {
    return shippingSolution;
  }

  public void setShippingSolution(String shippingSolution) {
    this.shippingSolution = shippingSolution;
  }

  public TransportationOption transportationOptionId(String transportationOptionId) {
    this.transportationOptionId = transportationOptionId;
    return this;
  }

   /**
   * Identifier of a transportation option. A transportation option represent one option for how to send a shipment.
   * @return transportationOptionId
  **/
  @Schema(required = true, description = "Identifier of a transportation option. A transportation option represent one option for how to send a shipment.")
  public String getTransportationOptionId() {
    return transportationOptionId;
  }

  public void setTransportationOptionId(String transportationOptionId) {
    this.transportationOptionId = transportationOptionId;
  }


  @Override
  public boolean equals(java.lang.Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    TransportationOption transportationOption = (TransportationOption) o;
    return Objects.equals(this.carrier, transportationOption.carrier) &&
        Objects.equals(this.carrierAppointment, transportationOption.carrierAppointment) &&
        Objects.equals(this.preconditions, transportationOption.preconditions) &&
        Objects.equals(this.quote, transportationOption.quote) &&
        Objects.equals(this.shipmentId, transportationOption.shipmentId) &&
        Objects.equals(this.shippingMode, transportationOption.shippingMode) &&
        Objects.equals(this.shippingSolution, transportationOption.shippingSolution) &&
        Objects.equals(this.transportationOptionId, transportationOption.transportationOptionId);
  }

  @Override
  public int hashCode() {
    return Objects.hash(carrier, carrierAppointment, preconditions, quote, shipmentId, shippingMode, shippingSolution, transportationOptionId);
  }


  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class TransportationOption {\n");
    
    sb.append("    carrier: ").append(toIndentedString(carrier)).append("\n");
    sb.append("    carrierAppointment: ").append(toIndentedString(carrierAppointment)).append("\n");
    sb.append("    preconditions: ").append(toIndentedString(preconditions)).append("\n");
    sb.append("    quote: ").append(toIndentedString(quote)).append("\n");
    sb.append("    shipmentId: ").append(toIndentedString(shipmentId)).append("\n");
    sb.append("    shippingMode: ").append(toIndentedString(shippingMode)).append("\n");
    sb.append("    shippingSolution: ").append(toIndentedString(shippingSolution)).append("\n");
    sb.append("    transportationOptionId: ").append(toIndentedString(transportationOptionId)).append("\n");
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
