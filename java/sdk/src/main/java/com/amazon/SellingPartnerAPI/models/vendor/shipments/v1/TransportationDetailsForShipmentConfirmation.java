/*
 * Selling Partner API for Retail Procurement Shipments
 * The Selling Partner API for Retail Procurement Shipments provides programmatic access to retail shipping data for vendors.
 *
 * OpenAPI spec version: v1
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */

package com.amazon.SellingPartnerAPI.models.vendor.shipments.v1;

import java.util.Objects;
import java.util.Arrays;
import com.google.gson.TypeAdapter;
import com.google.gson.annotations.JsonAdapter;
import com.google.gson.annotations.SerializedName;
import com.google.gson.stream.JsonReader;
import com.google.gson.stream.JsonWriter;
import io.swagger.v3.oas.annotations.media.Schema;
import java.io.IOException;
/**
 * Transportation details for this shipment.
 */
@Schema(description = "Transportation details for this shipment.")


public class TransportationDetailsForShipmentConfirmation {
  @SerializedName("carrierScac")
  private String carrierScac = null;

  @SerializedName("carrierShipmentReferenceNumber")
  private String carrierShipmentReferenceNumber = null;

  /**
   * The mode of transportation for this shipment.
   */
  @JsonAdapter(TransportationModeEnum.Adapter.class)
  public enum TransportationModeEnum {
    @SerializedName("Road")
    ROAD("Road"),
    @SerializedName("Air")
    AIR("Air"),
    @SerializedName("Ocean")
    OCEAN("Ocean");

    private String value;

    TransportationModeEnum(String value) {
      this.value = value;
    }
    public String getValue() {
      return value;
    }

    @Override
    public String toString() {
      return String.valueOf(value);
    }
    public static TransportationModeEnum fromValue(String input) {
      for (TransportationModeEnum b : TransportationModeEnum.values()) {
        if (b.value.equals(input)) {
          return b;
        }
      }
      return null;
    }
    public static class Adapter extends TypeAdapter<TransportationModeEnum> {
      @Override
      public void write(final JsonWriter jsonWriter, final TransportationModeEnum enumeration) throws IOException {
        jsonWriter.value(String.valueOf(enumeration.getValue()));
      }

      @Override
      public TransportationModeEnum read(final JsonReader jsonReader) throws IOException {
        Object value = jsonReader.nextString();
        return TransportationModeEnum.fromValue((String)(value));
      }
    }
  }  @SerializedName("transportationMode")
  private TransportationModeEnum transportationMode = null;

  @SerializedName("billOfLadingNumber")
  private String billOfLadingNumber = null;

  public TransportationDetailsForShipmentConfirmation carrierScac(String carrierScac) {
    this.carrierScac = carrierScac;
    return this;
  }

   /**
   * Code that identifies the carrier for the shipment. The Standard Carrier Alpha Code (SCAC) is a unique two to four letter code used to identify a carrier. Carrier SCAC codes are assigned and maintained by the NMFTA (National Motor Freight Association). This field is mandatory for US, CA, MX shipment confirmations.
   * @return carrierScac
  **/
  @Schema(description = "Code that identifies the carrier for the shipment. The Standard Carrier Alpha Code (SCAC) is a unique two to four letter code used to identify a carrier. Carrier SCAC codes are assigned and maintained by the NMFTA (National Motor Freight Association). This field is mandatory for US, CA, MX shipment confirmations.")
  public String getCarrierScac() {
    return carrierScac;
  }

  public void setCarrierScac(String carrierScac) {
    this.carrierScac = carrierScac;
  }

  public TransportationDetailsForShipmentConfirmation carrierShipmentReferenceNumber(String carrierShipmentReferenceNumber) {
    this.carrierShipmentReferenceNumber = carrierShipmentReferenceNumber;
    return this;
  }

   /**
   * The field also known as PRO number is a unique number assigned by the carrier. It is used to identify and track the shipment that goes out for delivery. This field is mandatory for UA, CA, MX shipment confirmations.
   * @return carrierShipmentReferenceNumber
  **/
  @Schema(description = "The field also known as PRO number is a unique number assigned by the carrier. It is used to identify and track the shipment that goes out for delivery. This field is mandatory for UA, CA, MX shipment confirmations.")
  public String getCarrierShipmentReferenceNumber() {
    return carrierShipmentReferenceNumber;
  }

  public void setCarrierShipmentReferenceNumber(String carrierShipmentReferenceNumber) {
    this.carrierShipmentReferenceNumber = carrierShipmentReferenceNumber;
  }

  public TransportationDetailsForShipmentConfirmation transportationMode(TransportationModeEnum transportationMode) {
    this.transportationMode = transportationMode;
    return this;
  }

   /**
   * The mode of transportation for this shipment.
   * @return transportationMode
  **/
  @Schema(description = "The mode of transportation for this shipment.")
  public TransportationModeEnum getTransportationMode() {
    return transportationMode;
  }

  public void setTransportationMode(TransportationModeEnum transportationMode) {
    this.transportationMode = transportationMode;
  }

  public TransportationDetailsForShipmentConfirmation billOfLadingNumber(String billOfLadingNumber) {
    this.billOfLadingNumber = billOfLadingNumber;
    return this;
  }

   /**
   * The Bill of Lading (BOL) number is a unique number assigned to each shipment of goods by the vendor or shipper during the creation of the Bill of Lading. This number must be unique for every shipment and cannot be a date/time or single character. The BOL numer is mandatory in Shipment Confirmation message for FTL and LTL shipments, and must match the paper BOL provided with the shipment. Instead of BOL, an alternative reference number (like Delivery Note Number) for the shipment can also be sent in this field.
   * @return billOfLadingNumber
  **/
  @Schema(description = "The Bill of Lading (BOL) number is a unique number assigned to each shipment of goods by the vendor or shipper during the creation of the Bill of Lading. This number must be unique for every shipment and cannot be a date/time or single character. The BOL numer is mandatory in Shipment Confirmation message for FTL and LTL shipments, and must match the paper BOL provided with the shipment. Instead of BOL, an alternative reference number (like Delivery Note Number) for the shipment can also be sent in this field.")
  public String getBillOfLadingNumber() {
    return billOfLadingNumber;
  }

  public void setBillOfLadingNumber(String billOfLadingNumber) {
    this.billOfLadingNumber = billOfLadingNumber;
  }


  @Override
  public boolean equals(java.lang.Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    TransportationDetailsForShipmentConfirmation transportationDetailsForShipmentConfirmation = (TransportationDetailsForShipmentConfirmation) o;
    return Objects.equals(this.carrierScac, transportationDetailsForShipmentConfirmation.carrierScac) &&
        Objects.equals(this.carrierShipmentReferenceNumber, transportationDetailsForShipmentConfirmation.carrierShipmentReferenceNumber) &&
        Objects.equals(this.transportationMode, transportationDetailsForShipmentConfirmation.transportationMode) &&
        Objects.equals(this.billOfLadingNumber, transportationDetailsForShipmentConfirmation.billOfLadingNumber);
  }

  @Override
  public int hashCode() {
    return Objects.hash(carrierScac, carrierShipmentReferenceNumber, transportationMode, billOfLadingNumber);
  }


  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class TransportationDetailsForShipmentConfirmation {\n");
    
    sb.append("    carrierScac: ").append(toIndentedString(carrierScac)).append("\n");
    sb.append("    carrierShipmentReferenceNumber: ").append(toIndentedString(carrierShipmentReferenceNumber)).append("\n");
    sb.append("    transportationMode: ").append(toIndentedString(transportationMode)).append("\n");
    sb.append("    billOfLadingNumber: ").append(toIndentedString(billOfLadingNumber)).append("\n");
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
