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

package software.amazon.spapi.models.awd.v2024_05_09;

import java.util.Objects;
import java.util.Arrays;
import com.google.gson.TypeAdapter;
import com.google.gson.annotations.JsonAdapter;
import com.google.gson.annotations.SerializedName;
import com.google.gson.stream.JsonReader;
import com.google.gson.stream.JsonWriter;
import io.swagger.v3.oas.annotations.media.Schema;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import org.threeten.bp.OffsetDateTime;
import software.amazon.spapi.models.awd.v2024_05_09.Address;
import software.amazon.spapi.models.awd.v2024_05_09.CarrierCode;
import software.amazon.spapi.models.awd.v2024_05_09.DistributionPackageQuantity;
import software.amazon.spapi.models.awd.v2024_05_09.InboundShipmentStatus;
import software.amazon.spapi.models.awd.v2024_05_09.InventoryQuantity;
import software.amazon.spapi.models.awd.v2024_05_09.SkuQuantity;
/**
 * Represents an AWD inbound shipment.
 */
@Schema(description = "Represents an AWD inbound shipment.")


public class InboundShipment {
  @SerializedName("carrierCode")
  private CarrierCode carrierCode = null;

  @SerializedName("createdAt")
  private OffsetDateTime createdAt = null;

  @SerializedName("destinationAddress")
  private Address destinationAddress = null;

  @SerializedName("externalReferenceId")
  private String externalReferenceId = null;

  @SerializedName("orderId")
  private String orderId = null;

  @SerializedName("originAddress")
  private Address originAddress = null;

  @SerializedName("receivedQuantity")
  private List<InventoryQuantity> receivedQuantity = null;

  @SerializedName("shipBy")
  private OffsetDateTime shipBy = null;

  @SerializedName("shipmentContainerQuantities")
  private List<DistributionPackageQuantity> shipmentContainerQuantities = new ArrayList<DistributionPackageQuantity>();

  @SerializedName("shipmentId")
  private String shipmentId = null;

  @SerializedName("shipmentSkuQuantities")
  private List<SkuQuantity> shipmentSkuQuantities = null;

  @SerializedName("destinationRegion")
  private String destinationRegion = null;

  @SerializedName("shipmentStatus")
  private InboundShipmentStatus shipmentStatus = null;

  @SerializedName("trackingId")
  private String trackingId = null;

  @SerializedName("updatedAt")
  private OffsetDateTime updatedAt = null;

  @SerializedName("warehouseReferenceId")
  private String warehouseReferenceId = null;

  public InboundShipment carrierCode(CarrierCode carrierCode) {
    this.carrierCode = carrierCode;
    return this;
  }

   /**
   * Get carrierCode
   * @return carrierCode
  **/
  @Schema(description = "")
  public CarrierCode getCarrierCode() {
    return carrierCode;
  }

  public void setCarrierCode(CarrierCode carrierCode) {
    this.carrierCode = carrierCode;
  }

  public InboundShipment createdAt(OffsetDateTime createdAt) {
    this.createdAt = createdAt;
    return this;
  }

   /**
   * Timestamp when the shipment was created. The date is returned in &lt;a href&#x3D;&#x27;https://developer-docs.amazon.com/sp-api/docs/iso-8601&#x27;&gt;ISO 8601&lt;/a&gt; format.
   * @return createdAt
  **/
  @Schema(description = "Timestamp when the shipment was created. The date is returned in <a href='https://developer-docs.amazon.com/sp-api/docs/iso-8601'>ISO 8601</a> format.")
  public OffsetDateTime getCreatedAt() {
    return createdAt;
  }

  public void setCreatedAt(OffsetDateTime createdAt) {
    this.createdAt = createdAt;
  }

  public InboundShipment destinationAddress(Address destinationAddress) {
    this.destinationAddress = destinationAddress;
    return this;
  }

   /**
   * Get destinationAddress
   * @return destinationAddress
  **/
  @Schema(required = true, description = "")
  public Address getDestinationAddress() {
    return destinationAddress;
  }

  public void setDestinationAddress(Address destinationAddress) {
    this.destinationAddress = destinationAddress;
  }

  public InboundShipment externalReferenceId(String externalReferenceId) {
    this.externalReferenceId = externalReferenceId;
    return this;
  }

   /**
   * Client-provided reference ID that can correlate this shipment to client resources. For example, to map this shipment to an internal bookkeeping order record.
   * @return externalReferenceId
  **/
  @Schema(example = "TestReferenceId", description = "Client-provided reference ID that can correlate this shipment to client resources. For example, to map this shipment to an internal bookkeeping order record.")
  public String getExternalReferenceId() {
    return externalReferenceId;
  }

  public void setExternalReferenceId(String externalReferenceId) {
    this.externalReferenceId = externalReferenceId;
  }

  public InboundShipment orderId(String orderId) {
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

  public InboundShipment originAddress(Address originAddress) {
    this.originAddress = originAddress;
    return this;
  }

   /**
   * Get originAddress
   * @return originAddress
  **/
  @Schema(required = true, description = "")
  public Address getOriginAddress() {
    return originAddress;
  }

  public void setOriginAddress(Address originAddress) {
    this.originAddress = originAddress;
  }

  public InboundShipment receivedQuantity(List<InventoryQuantity> receivedQuantity) {
    this.receivedQuantity = receivedQuantity;
    return this;
  }

  public InboundShipment addReceivedQuantityItem(InventoryQuantity receivedQuantityItem) {
    if (this.receivedQuantity == null) {
      this.receivedQuantity = new ArrayList<InventoryQuantity>();
    }
    this.receivedQuantity.add(receivedQuantityItem);
    return this;
  }

   /**
   * Quantity received (at the receiving end) as part of this shipment.
   * @return receivedQuantity
  **/
  @Schema(description = "Quantity received (at the receiving end) as part of this shipment.")
  public List<InventoryQuantity> getReceivedQuantity() {
    return receivedQuantity;
  }

  public void setReceivedQuantity(List<InventoryQuantity> receivedQuantity) {
    this.receivedQuantity = receivedQuantity;
  }

  public InboundShipment shipBy(OffsetDateTime shipBy) {
    this.shipBy = shipBy;
    return this;
  }

   /**
   * Timestamp when the shipment will be shipped.
   * @return shipBy
  **/
  @Schema(description = "Timestamp when the shipment will be shipped.")
  public OffsetDateTime getShipBy() {
    return shipBy;
  }

  public void setShipBy(OffsetDateTime shipBy) {
    this.shipBy = shipBy;
  }

  public InboundShipment shipmentContainerQuantities(List<DistributionPackageQuantity> shipmentContainerQuantities) {
    this.shipmentContainerQuantities = shipmentContainerQuantities;
    return this;
  }

  public InboundShipment addShipmentContainerQuantitiesItem(DistributionPackageQuantity shipmentContainerQuantitiesItem) {
    this.shipmentContainerQuantities.add(shipmentContainerQuantitiesItem);
    return this;
  }

   /**
   * Packages that are part of this shipment.
   * @return shipmentContainerQuantities
  **/
  @Schema(required = true, description = "Packages that are part of this shipment.")
  public List<DistributionPackageQuantity> getShipmentContainerQuantities() {
    return shipmentContainerQuantities;
  }

  public void setShipmentContainerQuantities(List<DistributionPackageQuantity> shipmentContainerQuantities) {
    this.shipmentContainerQuantities = shipmentContainerQuantities;
  }

  public InboundShipment shipmentId(String shipmentId) {
    this.shipmentId = shipmentId;
    return this;
  }

   /**
   * Unique shipment ID.
   * @return shipmentId
  **/
  @Schema(required = true, description = "Unique shipment ID.")
  public String getShipmentId() {
    return shipmentId;
  }

  public void setShipmentId(String shipmentId) {
    this.shipmentId = shipmentId;
  }

  public InboundShipment shipmentSkuQuantities(List<SkuQuantity> shipmentSkuQuantities) {
    this.shipmentSkuQuantities = shipmentSkuQuantities;
    return this;
  }

  public InboundShipment addShipmentSkuQuantitiesItem(SkuQuantity shipmentSkuQuantitiesItem) {
    if (this.shipmentSkuQuantities == null) {
      this.shipmentSkuQuantities = new ArrayList<SkuQuantity>();
    }
    this.shipmentSkuQuantities.add(shipmentSkuQuantitiesItem);
    return this;
  }

   /**
   * Quantity details at SKU level for the shipment. This attribute will only appear if the skuQuantities parameter in the request is set to SHOW.
   * @return shipmentSkuQuantities
  **/
  @Schema(description = "Quantity details at SKU level for the shipment. This attribute will only appear if the skuQuantities parameter in the request is set to SHOW.")
  public List<SkuQuantity> getShipmentSkuQuantities() {
    return shipmentSkuQuantities;
  }

  public void setShipmentSkuQuantities(List<SkuQuantity> shipmentSkuQuantities) {
    this.shipmentSkuQuantities = shipmentSkuQuantities;
  }

  public InboundShipment destinationRegion(String destinationRegion) {
    this.destinationRegion = destinationRegion;
    return this;
  }

   /**
   * Assigned region where the order will be shipped. This can differ from what was passed as preference. AWD currently supports following region IDs: [us-west, us-east, us-southcentral, us-southeast]
   * @return destinationRegion
  **/
  @Schema(example = "us-west", description = "Assigned region where the order will be shipped. This can differ from what was passed as preference. AWD currently supports following region IDs: [us-west, us-east, us-southcentral, us-southeast]")
  public String getDestinationRegion() {
    return destinationRegion;
  }

  public void setDestinationRegion(String destinationRegion) {
    this.destinationRegion = destinationRegion;
  }

  public InboundShipment shipmentStatus(InboundShipmentStatus shipmentStatus) {
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

  public InboundShipment trackingId(String trackingId) {
    this.trackingId = trackingId;
    return this;
  }

   /**
   * Carrier-unique tracking ID for this shipment.
   * @return trackingId
  **/
  @Schema(description = "Carrier-unique tracking ID for this shipment.")
  public String getTrackingId() {
    return trackingId;
  }

  public void setTrackingId(String trackingId) {
    this.trackingId = trackingId;
  }

  public InboundShipment updatedAt(OffsetDateTime updatedAt) {
    this.updatedAt = updatedAt;
    return this;
  }

   /**
   * Timestamp when the shipment was updated. The date is returned in &lt;a href&#x3D;&#x27;https://developer-docs.amazon.com/sp-api/docs/iso-8601&#x27;&gt;ISO 8601&lt;/a&gt; format.
   * @return updatedAt
  **/
  @Schema(description = "Timestamp when the shipment was updated. The date is returned in <a href='https://developer-docs.amazon.com/sp-api/docs/iso-8601'>ISO 8601</a> format.")
  public OffsetDateTime getUpdatedAt() {
    return updatedAt;
  }

  public void setUpdatedAt(OffsetDateTime updatedAt) {
    this.updatedAt = updatedAt;
  }

  public InboundShipment warehouseReferenceId(String warehouseReferenceId) {
    this.warehouseReferenceId = warehouseReferenceId;
    return this;
  }

   /**
   * An AWD-provided reference ID that you can use to interact with the warehouse. For example, a carrier appointment booking.
   * @return warehouseReferenceId
  **/
  @Schema(example = "TestWarehouseReferenceId", description = "An AWD-provided reference ID that you can use to interact with the warehouse. For example, a carrier appointment booking.")
  public String getWarehouseReferenceId() {
    return warehouseReferenceId;
  }

  public void setWarehouseReferenceId(String warehouseReferenceId) {
    this.warehouseReferenceId = warehouseReferenceId;
  }


  @Override
  public boolean equals(java.lang.Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    InboundShipment inboundShipment = (InboundShipment) o;
    return Objects.equals(this.carrierCode, inboundShipment.carrierCode) &&
        Objects.equals(this.createdAt, inboundShipment.createdAt) &&
        Objects.equals(this.destinationAddress, inboundShipment.destinationAddress) &&
        Objects.equals(this.externalReferenceId, inboundShipment.externalReferenceId) &&
        Objects.equals(this.orderId, inboundShipment.orderId) &&
        Objects.equals(this.originAddress, inboundShipment.originAddress) &&
        Objects.equals(this.receivedQuantity, inboundShipment.receivedQuantity) &&
        Objects.equals(this.shipBy, inboundShipment.shipBy) &&
        Objects.equals(this.shipmentContainerQuantities, inboundShipment.shipmentContainerQuantities) &&
        Objects.equals(this.shipmentId, inboundShipment.shipmentId) &&
        Objects.equals(this.shipmentSkuQuantities, inboundShipment.shipmentSkuQuantities) &&
        Objects.equals(this.destinationRegion, inboundShipment.destinationRegion) &&
        Objects.equals(this.shipmentStatus, inboundShipment.shipmentStatus) &&
        Objects.equals(this.trackingId, inboundShipment.trackingId) &&
        Objects.equals(this.updatedAt, inboundShipment.updatedAt) &&
        Objects.equals(this.warehouseReferenceId, inboundShipment.warehouseReferenceId);
  }

  @Override
  public int hashCode() {
    return Objects.hash(carrierCode, createdAt, destinationAddress, externalReferenceId, orderId, originAddress, receivedQuantity, shipBy, shipmentContainerQuantities, shipmentId, shipmentSkuQuantities, destinationRegion, shipmentStatus, trackingId, updatedAt, warehouseReferenceId);
  }


  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class InboundShipment {\n");
    
    sb.append("    carrierCode: ").append(toIndentedString(carrierCode)).append("\n");
    sb.append("    createdAt: ").append(toIndentedString(createdAt)).append("\n");
    sb.append("    destinationAddress: ").append(toIndentedString(destinationAddress)).append("\n");
    sb.append("    externalReferenceId: ").append(toIndentedString(externalReferenceId)).append("\n");
    sb.append("    orderId: ").append(toIndentedString(orderId)).append("\n");
    sb.append("    originAddress: ").append(toIndentedString(originAddress)).append("\n");
    sb.append("    receivedQuantity: ").append(toIndentedString(receivedQuantity)).append("\n");
    sb.append("    shipBy: ").append(toIndentedString(shipBy)).append("\n");
    sb.append("    shipmentContainerQuantities: ").append(toIndentedString(shipmentContainerQuantities)).append("\n");
    sb.append("    shipmentId: ").append(toIndentedString(shipmentId)).append("\n");
    sb.append("    shipmentSkuQuantities: ").append(toIndentedString(shipmentSkuQuantities)).append("\n");
    sb.append("    destinationRegion: ").append(toIndentedString(destinationRegion)).append("\n");
    sb.append("    shipmentStatus: ").append(toIndentedString(shipmentStatus)).append("\n");
    sb.append("    trackingId: ").append(toIndentedString(trackingId)).append("\n");
    sb.append("    updatedAt: ").append(toIndentedString(updatedAt)).append("\n");
    sb.append("    warehouseReferenceId: ").append(toIndentedString(warehouseReferenceId)).append("\n");
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
