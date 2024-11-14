/*
 * Amazon Shipping API
 * The Amazon Shipping API is designed to support outbound shipping use cases both for orders originating on Amazon-owned marketplaces as well as external channels/marketplaces. With these APIs, you can request shipping rates, create shipments, cancel shipments, and track shipments.
 *
 * OpenAPI spec version: v2
 * Contact: swa-api-core@amazon.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */

package com.amazon.SellingPartnerAPI;

import java.util.Objects;
import java.util.Arrays;
import com.amazon.SellingPartnerAPI.Address;
import com.amazon.SellingPartnerAPI.ClientReferenceDetails;
import com.google.gson.TypeAdapter;
import com.google.gson.annotations.JsonAdapter;
import com.google.gson.annotations.SerializedName;
import com.google.gson.stream.JsonReader;
import com.google.gson.stream.JsonWriter;
import io.swagger.v3.oas.annotations.media.Schema;
import java.io.IOException;
/**
 * The request schema Call to generate the collection form.
 */
@Schema(description = "The request schema Call to generate the collection form.")
@javax.annotation.Generated(value = "io.swagger.codegen.v3.generators.java.JavaClientCodegen", date = "2024-11-14T09:09:56.733862Z[Etc/UTC]")

public class GenerateCollectionFormRequest {
  @SerializedName("clientReferenceDetails")
  private ClientReferenceDetails clientReferenceDetails = null;

  @SerializedName("carrierId")
  private String carrierId = null;

  @SerializedName("shipFromAddress")
  private Address shipFromAddress = null;

  public GenerateCollectionFormRequest clientReferenceDetails(ClientReferenceDetails clientReferenceDetails) {
    this.clientReferenceDetails = clientReferenceDetails;
    return this;
  }

   /**
   * Get clientReferenceDetails
   * @return clientReferenceDetails
  **/
  @Schema(description = "")
  public ClientReferenceDetails getClientReferenceDetails() {
    return clientReferenceDetails;
  }

  public void setClientReferenceDetails(ClientReferenceDetails clientReferenceDetails) {
    this.clientReferenceDetails = clientReferenceDetails;
  }

  public GenerateCollectionFormRequest carrierId(String carrierId) {
    this.carrierId = carrierId;
    return this;
  }

   /**
   * Get carrierId
   * @return carrierId
  **/
  @Schema(required = true, description = "")
  public String getCarrierId() {
    return carrierId;
  }

  public void setCarrierId(String carrierId) {
    this.carrierId = carrierId;
  }

  public GenerateCollectionFormRequest shipFromAddress(Address shipFromAddress) {
    this.shipFromAddress = shipFromAddress;
    return this;
  }

   /**
   * Get shipFromAddress
   * @return shipFromAddress
  **/
  @Schema(description = "")
  public Address getShipFromAddress() {
    return shipFromAddress;
  }

  public void setShipFromAddress(Address shipFromAddress) {
    this.shipFromAddress = shipFromAddress;
  }


  @Override
  public boolean equals(java.lang.Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    GenerateCollectionFormRequest generateCollectionFormRequest = (GenerateCollectionFormRequest) o;
    return Objects.equals(this.clientReferenceDetails, generateCollectionFormRequest.clientReferenceDetails) &&
        Objects.equals(this.carrierId, generateCollectionFormRequest.carrierId) &&
        Objects.equals(this.shipFromAddress, generateCollectionFormRequest.shipFromAddress);
  }

  @Override
  public int hashCode() {
    return Objects.hash(clientReferenceDetails, carrierId, shipFromAddress);
  }


  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class GenerateCollectionFormRequest {\n");
    
    sb.append("    clientReferenceDetails: ").append(toIndentedString(clientReferenceDetails)).append("\n");
    sb.append("    carrierId: ").append(toIndentedString(carrierId)).append("\n");
    sb.append("    shipFromAddress: ").append(toIndentedString(shipFromAddress)).append("\n");
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
