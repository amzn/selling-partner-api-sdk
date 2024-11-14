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
import com.amazon.SellingPartnerAPI.ClientReferenceDetails;
import com.google.gson.TypeAdapter;
import com.google.gson.annotations.JsonAdapter;
import com.google.gson.annotations.SerializedName;
import com.google.gson.stream.JsonReader;
import com.google.gson.stream.JsonWriter;
import io.swagger.v3.oas.annotations.media.Schema;
import java.io.IOException;
/**
 * The request schema for the GetUnmanifestedShipmentsRequest operation.
 */
@Schema(description = "The request schema for the GetUnmanifestedShipmentsRequest operation.")
@javax.annotation.Generated(value = "io.swagger.codegen.v3.generators.java.JavaClientCodegen", date = "2024-11-14T09:09:56.733862Z[Etc/UTC]")

public class GetUnmanifestedShipmentsRequest {
  @SerializedName("clientReferenceDetails")
  private ClientReferenceDetails clientReferenceDetails = null;

  public GetUnmanifestedShipmentsRequest clientReferenceDetails(ClientReferenceDetails clientReferenceDetails) {
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


  @Override
  public boolean equals(java.lang.Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    GetUnmanifestedShipmentsRequest getUnmanifestedShipmentsRequest = (GetUnmanifestedShipmentsRequest) o;
    return Objects.equals(this.clientReferenceDetails, getUnmanifestedShipmentsRequest.clientReferenceDetails);
  }

  @Override
  public int hashCode() {
    return Objects.hash(clientReferenceDetails);
  }


  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class GetUnmanifestedShipmentsRequest {\n");
    
    sb.append("    clientReferenceDetails: ").append(toIndentedString(clientReferenceDetails)).append("\n");
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
