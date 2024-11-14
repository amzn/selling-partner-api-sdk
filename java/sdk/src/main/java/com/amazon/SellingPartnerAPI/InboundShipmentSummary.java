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

package com.amazon.SellingPartnerAPI;

import java.util.Objects;
import java.util.Arrays;
import com.amazon.SellingPartnerAPI.InboundShipmentStatus;
import com.google.gson.TypeAdapter;
import com.google.gson.annotations.JsonAdapter;
import com.google.gson.annotations.SerializedName;
import com.google.gson.stream.JsonReader;
import com.google.gson.stream.JsonWriter;
import io.swagger.v3.oas.annotations.media.Schema;
import java.io.IOException;
import org.threeten.bp.OffsetDateTime;
/**
 * Summary for an AWD inbound shipment containing the shipment ID, which can be used to retrieve the actual shipment.
 */
@Schema(description = "Summary for an AWD inbound shipment containing the shipment ID, which can be used to retrieve the actual shipment.")
@javax.annotation.Generated(value = "io.swagger.codegen.v3.generators.java.JavaClientCodegen", date = "2024-11-14T09:07:49.862857Z[Etc/UTC]")

public class InboundShipmentSummary {
  @SerializedName("createdAt")
  private OffsetDateTime createdAt = null;

  @SerializedName("externalReferenceId")
  private String externalReferenceId = null;

  @SerializedName("orderId")
  private String orderId = null;

  @SerializedName("shipmentId")
  private String shipmentId = null;

  @SerializedName("shipmentStatus")
  private InboundShipmentStatus shipmentStatus = null;

  @SerializedName("updatedAt")
  private OffsetDateTime updatedAt = null;

  public InboundShipmentSummary createdAt(OffsetDateTime createdAt) {
    this.createdAt = createdAt;
    return this;
  }

   /**
   * Timestamp when the shipment was created.
   * @return createdAt
  **/
  @Schema(description = "Timestamp when the shipment was created.")
  public OffsetDateTime getCreatedAt() {
    return createdAt;
  }

  public void setCreatedAt(OffsetDateTime createdAt) {
    this.createdAt = createdAt;
  }

  public InboundShipmentSummary externalReferenceId(String externalReferenceId) {
    this.externalReferenceId = externalReferenceId;
    return this;
  }

   /**
   * Optional client-provided reference ID that can be used to correlate this shipment with client resources. For example, to map this shipment to an internal bookkeeping order record.
   * @return externalReferenceId
  **/
  @Schema(example = "TestReferenceId", description = "Optional client-provided reference ID that can be used to correlate this shipment with client resources. For example, to map this shipment to an internal bookkeeping order record.")
  public String getExternalReferenceId() {
    return externalReferenceId;
  }

  public void setExternalReferenceId(String externalReferenceId) {
    this.externalReferenceId = externalReferenceId;
  }

  public InboundShipmentSummary orderId(String orderId) {
    this.orderId = orderId;
    return this;
  }

   /**
   * The AWD inbound order ID that this inbound shipment belongs to.
   * @return orderId
  **/
  @Schema(required = true, description = "The AWD inbound order ID that this inbound shipment belongs to.")
  public String getOrderId() {
    return orderId;
  }

  public void setOrderId(String orderId) {
    this.orderId = orderId;
  }

  public InboundShipmentSummary shipmentId(String shipmentId) {
    this.shipmentId = shipmentId;
    return this;
  }

   /**
   * A unique shipment ID.
   * @return shipmentId
  **/
  @Schema(required = true, description = "A unique shipment ID.")
  public String getShipmentId() {
    return shipmentId;
  }

  public void setShipmentId(String shipmentId) {
    this.shipmentId = shipmentId;
  }

  public InboundShipmentSummary shipmentStatus(InboundShipmentStatus shipmentStatus) {
    this.shipmentStatus = shipmentStatus;
    return this;
  }

   /**
   * Get shipmentStatus
   * @return shipmentStatus
  **/
  @Schema(required = true, description = "")
  public InboundShipmentStatus getShipmentStatus() {
    return shipmentStatus;
  }

  public void setShipmentStatus(InboundShipmentStatus shipmentStatus) {
    this.shipmentStatus = shipmentStatus;
  }

  public InboundShipmentSummary updatedAt(OffsetDateTime updatedAt) {
    this.updatedAt = updatedAt;
    return this;
  }

   /**
   * Timestamp when the shipment was updated.
   * @return updatedAt
  **/
  @Schema(description = "Timestamp when the shipment was updated.")
  public OffsetDateTime getUpdatedAt() {
    return updatedAt;
  }

  public void setUpdatedAt(OffsetDateTime updatedAt) {
    this.updatedAt = updatedAt;
  }


  @Override
  public boolean equals(java.lang.Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    InboundShipmentSummary inboundShipmentSummary = (InboundShipmentSummary) o;
    return Objects.equals(this.createdAt, inboundShipmentSummary.createdAt) &&
        Objects.equals(this.externalReferenceId, inboundShipmentSummary.externalReferenceId) &&
        Objects.equals(this.orderId, inboundShipmentSummary.orderId) &&
        Objects.equals(this.shipmentId, inboundShipmentSummary.shipmentId) &&
        Objects.equals(this.shipmentStatus, inboundShipmentSummary.shipmentStatus) &&
        Objects.equals(this.updatedAt, inboundShipmentSummary.updatedAt);
  }

  @Override
  public int hashCode() {
    return Objects.hash(createdAt, externalReferenceId, orderId, shipmentId, shipmentStatus, updatedAt);
  }


  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class InboundShipmentSummary {\n");
    
    sb.append("    createdAt: ").append(toIndentedString(createdAt)).append("\n");
    sb.append("    externalReferenceId: ").append(toIndentedString(externalReferenceId)).append("\n");
    sb.append("    orderId: ").append(toIndentedString(orderId)).append("\n");
    sb.append("    shipmentId: ").append(toIndentedString(shipmentId)).append("\n");
    sb.append("    shipmentStatus: ").append(toIndentedString(shipmentStatus)).append("\n");
    sb.append("    updatedAt: ").append(toIndentedString(updatedAt)).append("\n");
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
