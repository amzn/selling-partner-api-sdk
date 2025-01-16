/*
 * The Selling Partner API for Amazon Warehousing and Distribution
 * The Selling Partner API for Amazon Warehousing and Distribution (AWD) provides programmatic access to information about AWD shipments and inventory. 
 *
 * OpenAPI spec version: 2024-05-09
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */

package com.amazon.SellingPartnerAPI.models.awd.v2024_05_09;

import java.util.Objects;
import java.util.Arrays;
import com.amazon.SellingPartnerAPI.models.awd.v2024_05_09.InboundShipmentSummary;
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
 * A list of inbound shipment summaries filtered by the attributes specified in the request.
 */
@Schema(description = "A list of inbound shipment summaries filtered by the attributes specified in the request.")


public class ShipmentListing {
  @SerializedName("nextToken")
  private String nextToken = null;

  @SerializedName("shipments")
  private List<InboundShipmentSummary> shipments = null;

  public ShipmentListing nextToken(String nextToken) {
    this.nextToken = nextToken;
    return this;
  }

   /**
   * A token that is used to retrieve the next page of results. The response includes &#x60;nextToken&#x60; when the number of results exceeds the specified &#x60;maxResults&#x60; value. To get the next page of results, call the operation with this token and include the same arguments as the call that produced the token. To get a complete list, call this operation until &#x60;nextToken&#x60; is null. Note that this operation can return empty pages.
   * @return nextToken
  **/
  @Schema(example = "SampleToken", description = "A token that is used to retrieve the next page of results. The response includes `nextToken` when the number of results exceeds the specified `maxResults` value. To get the next page of results, call the operation with this token and include the same arguments as the call that produced the token. To get a complete list, call this operation until `nextToken` is null. Note that this operation can return empty pages.")
  public String getNextToken() {
    return nextToken;
  }

  public void setNextToken(String nextToken) {
    this.nextToken = nextToken;
  }

  public ShipmentListing shipments(List<InboundShipmentSummary> shipments) {
    this.shipments = shipments;
    return this;
  }

  public ShipmentListing addShipmentsItem(InboundShipmentSummary shipmentsItem) {
    if (this.shipments == null) {
      this.shipments = new ArrayList<InboundShipmentSummary>();
    }
    this.shipments.add(shipmentsItem);
    return this;
  }

   /**
   * List of inbound shipment summaries.
   * @return shipments
  **/
  @Schema(description = "List of inbound shipment summaries.")
  public List<InboundShipmentSummary> getShipments() {
    return shipments;
  }

  public void setShipments(List<InboundShipmentSummary> shipments) {
    this.shipments = shipments;
  }


  @Override
  public boolean equals(java.lang.Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    ShipmentListing shipmentListing = (ShipmentListing) o;
    return Objects.equals(this.nextToken, shipmentListing.nextToken) &&
        Objects.equals(this.shipments, shipmentListing.shipments);
  }

  @Override
  public int hashCode() {
    return Objects.hash(nextToken, shipments);
  }


  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class ShipmentListing {\n");
    
    sb.append("    nextToken: ").append(toIndentedString(nextToken)).append("\n");
    sb.append("    shipments: ").append(toIndentedString(shipments)).append("\n");
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
