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

package com.amazon.SellingPartnerAPI.models.shipping.v2;

import java.util.Objects;
import java.util.Arrays;
import com.amazon.SellingPartnerAPI.models.shipping.v2.PackageDocumentDetailList;
import com.amazon.SellingPartnerAPI.models.shipping.v2.Promise;
import com.google.gson.TypeAdapter;
import com.google.gson.annotations.JsonAdapter;
import com.google.gson.annotations.SerializedName;
import com.google.gson.stream.JsonReader;
import com.google.gson.stream.JsonWriter;
import io.swagger.v3.oas.annotations.media.Schema;
import java.io.IOException;
/**
 * The payload for the purchaseShipment operation.
 */
@Schema(description = "The payload for the purchaseShipment operation.")


public class PurchaseShipmentResult {
  @SerializedName("shipmentId")
  private String shipmentId = null;

  @SerializedName("packageDocumentDetails")
  private PackageDocumentDetailList packageDocumentDetails = null;

  @SerializedName("promise")
  private Promise promise = null;

  public PurchaseShipmentResult shipmentId(String shipmentId) {
    this.shipmentId = shipmentId;
    return this;
  }

   /**
   * Get shipmentId
   * @return shipmentId
  **/
  @Schema(required = true, description = "")
  public String getShipmentId() {
    return shipmentId;
  }

  public void setShipmentId(String shipmentId) {
    this.shipmentId = shipmentId;
  }

  public PurchaseShipmentResult packageDocumentDetails(PackageDocumentDetailList packageDocumentDetails) {
    this.packageDocumentDetails = packageDocumentDetails;
    return this;
  }

   /**
   * Get packageDocumentDetails
   * @return packageDocumentDetails
  **/
  @Schema(required = true, description = "")
  public PackageDocumentDetailList getPackageDocumentDetails() {
    return packageDocumentDetails;
  }

  public void setPackageDocumentDetails(PackageDocumentDetailList packageDocumentDetails) {
    this.packageDocumentDetails = packageDocumentDetails;
  }

  public PurchaseShipmentResult promise(Promise promise) {
    this.promise = promise;
    return this;
  }

   /**
   * Get promise
   * @return promise
  **/
  @Schema(required = true, description = "")
  public Promise getPromise() {
    return promise;
  }

  public void setPromise(Promise promise) {
    this.promise = promise;
  }


  @Override
  public boolean equals(java.lang.Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    PurchaseShipmentResult purchaseShipmentResult = (PurchaseShipmentResult) o;
    return Objects.equals(this.shipmentId, purchaseShipmentResult.shipmentId) &&
        Objects.equals(this.packageDocumentDetails, purchaseShipmentResult.packageDocumentDetails) &&
        Objects.equals(this.promise, purchaseShipmentResult.promise);
  }

  @Override
  public int hashCode() {
    return Objects.hash(shipmentId, packageDocumentDetails, promise);
  }


  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class PurchaseShipmentResult {\n");
    
    sb.append("    shipmentId: ").append(toIndentedString(shipmentId)).append("\n");
    sb.append("    packageDocumentDetails: ").append(toIndentedString(packageDocumentDetails)).append("\n");
    sb.append("    promise: ").append(toIndentedString(promise)).append("\n");
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
