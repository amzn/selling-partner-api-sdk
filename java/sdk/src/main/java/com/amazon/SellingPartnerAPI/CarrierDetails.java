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
import com.google.gson.TypeAdapter;
import com.google.gson.annotations.JsonAdapter;
import com.google.gson.annotations.SerializedName;
import com.google.gson.stream.JsonReader;
import com.google.gson.stream.JsonWriter;
import io.swagger.v3.oas.annotations.media.Schema;
import java.io.IOException;
/**
 * Indicates the carrier details and their contact informations
 */
@Schema(description = "Indicates the carrier details and their contact informations")
@javax.annotation.Generated(value = "io.swagger.codegen.v3.generators.java.JavaClientCodegen", date = "2024-11-14T09:10:38.210293Z[Etc/UTC]")

public class CarrierDetails {
  @SerializedName("name")
  private String name = null;

  @SerializedName("code")
  private String code = null;

  @SerializedName("phone")
  private String phone = null;

  @SerializedName("email")
  private String email = null;

  @SerializedName("shipmentReferenceNumber")
  private String shipmentReferenceNumber = null;

  public CarrierDetails name(String name) {
    this.name = name;
    return this;
  }

   /**
   * The field is used to represent the carrier used for performing the shipment.
   * @return name
  **/
  @Schema(description = "The field is used to represent the carrier used for performing the shipment.")
  public String getName() {
    return name;
  }

  public void setName(String name) {
    this.name = name;
  }

  public CarrierDetails code(String code) {
    this.code = code;
    return this;
  }

   /**
   * Code that identifies the carrier for the shipment. The Standard Carrier Alpha Code (SCAC) is a unique two to four letter code used to identify a carrier. Carrier SCAC codes are assigned and maintained by the NMFTA (National Motor Freight Association).
   * @return code
  **/
  @Schema(description = "Code that identifies the carrier for the shipment. The Standard Carrier Alpha Code (SCAC) is a unique two to four letter code used to identify a carrier. Carrier SCAC codes are assigned and maintained by the NMFTA (National Motor Freight Association).")
  public String getCode() {
    return code;
  }

  public void setCode(String code) {
    this.code = code;
  }

  public CarrierDetails phone(String phone) {
    this.phone = phone;
    return this;
  }

   /**
   * The field is used to represent the Carrier contact number.
   * @return phone
  **/
  @Schema(description = "The field is used to represent the Carrier contact number.")
  public String getPhone() {
    return phone;
  }

  public void setPhone(String phone) {
    this.phone = phone;
  }

  public CarrierDetails email(String email) {
    this.email = email;
    return this;
  }

   /**
   * The field is used to represent the carrier Email id.
   * @return email
  **/
  @Schema(description = "The field is used to represent the carrier Email id.")
  public String getEmail() {
    return email;
  }

  public void setEmail(String email) {
    this.email = email;
  }

  public CarrierDetails shipmentReferenceNumber(String shipmentReferenceNumber) {
    this.shipmentReferenceNumber = shipmentReferenceNumber;
    return this;
  }

   /**
   * The field is also known as PRO number is a unique number assigned by the carrier. It is used to identify and track the shipment that goes out for delivery. This field is mandatory for US, CA, MX shipment confirmations.
   * @return shipmentReferenceNumber
  **/
  @Schema(description = "The field is also known as PRO number is a unique number assigned by the carrier. It is used to identify and track the shipment that goes out for delivery. This field is mandatory for US, CA, MX shipment confirmations.")
  public String getShipmentReferenceNumber() {
    return shipmentReferenceNumber;
  }

  public void setShipmentReferenceNumber(String shipmentReferenceNumber) {
    this.shipmentReferenceNumber = shipmentReferenceNumber;
  }


  @Override
  public boolean equals(java.lang.Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    CarrierDetails carrierDetails = (CarrierDetails) o;
    return Objects.equals(this.name, carrierDetails.name) &&
        Objects.equals(this.code, carrierDetails.code) &&
        Objects.equals(this.phone, carrierDetails.phone) &&
        Objects.equals(this.email, carrierDetails.email) &&
        Objects.equals(this.shipmentReferenceNumber, carrierDetails.shipmentReferenceNumber);
  }

  @Override
  public int hashCode() {
    return Objects.hash(name, code, phone, email, shipmentReferenceNumber);
  }


  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class CarrierDetails {\n");
    
    sb.append("    name: ").append(toIndentedString(name)).append("\n");
    sb.append("    code: ").append(toIndentedString(code)).append("\n");
    sb.append("    phone: ").append(toIndentedString(phone)).append("\n");
    sb.append("    email: ").append(toIndentedString(email)).append("\n");
    sb.append("    shipmentReferenceNumber: ").append(toIndentedString(shipmentReferenceNumber)).append("\n");
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
