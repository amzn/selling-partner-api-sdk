/*
 * Selling Partner APIs for Fulfillment Outbound
 * The Selling Partner API for Fulfillment Outbound lets you create applications that help a seller fulfill Multi-Channel Fulfillment orders using their inventory in Amazon's fulfillment network. You can get information on both potential and existing fulfillment orders.
 *
 * OpenAPI spec version: 2020-07-01
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */

package com.amazon.SellingPartnerAPI.models;

import java.util.Objects;
import java.util.Arrays;
import com.amazon.SellingPartnerAPI.models.Weight;
import com.google.gson.TypeAdapter;
import com.google.gson.annotations.JsonAdapter;
import com.google.gson.annotations.SerializedName;
import com.google.gson.stream.JsonReader;
import com.google.gson.stream.JsonWriter;
import io.swagger.v3.oas.annotations.media.Schema;
import java.io.IOException;
/**
 * Item information for a shipment in a fulfillment order preview.
 */
@Schema(description = "Item information for a shipment in a fulfillment order preview.")


public class FulfillmentPreviewItem {
  @SerializedName("sellerSku")
  private String sellerSku = null;

  @SerializedName("quantity")
  private Integer quantity = null;

  @SerializedName("sellerFulfillmentOrderItemId")
  private String sellerFulfillmentOrderItemId = null;

  @SerializedName("estimatedShippingWeight")
  private Weight estimatedShippingWeight = null;

  /**
   * The method used to calculate the estimated shipping weight.
   */
  @JsonAdapter(ShippingWeightCalculationMethodEnum.Adapter.class)
  public enum ShippingWeightCalculationMethodEnum {
    @SerializedName("Package")
    PACKAGE("Package"),
    @SerializedName("Dimensional")
    DIMENSIONAL("Dimensional");

    private String value;

    ShippingWeightCalculationMethodEnum(String value) {
      this.value = value;
    }
    public String getValue() {
      return value;
    }

    @Override
    public String toString() {
      return String.valueOf(value);
    }
    public static ShippingWeightCalculationMethodEnum fromValue(String input) {
      for (ShippingWeightCalculationMethodEnum b : ShippingWeightCalculationMethodEnum.values()) {
        if (b.value.equals(input)) {
          return b;
        }
      }
      return null;
    }
    public static class Adapter extends TypeAdapter<ShippingWeightCalculationMethodEnum> {
      @Override
      public void write(final JsonWriter jsonWriter, final ShippingWeightCalculationMethodEnum enumeration) throws IOException {
        jsonWriter.value(String.valueOf(enumeration.getValue()));
      }

      @Override
      public ShippingWeightCalculationMethodEnum read(final JsonReader jsonReader) throws IOException {
        Object value = jsonReader.nextString();
        return ShippingWeightCalculationMethodEnum.fromValue((String)(value));
      }
    }
  }  @SerializedName("shippingWeightCalculationMethod")
  private ShippingWeightCalculationMethodEnum shippingWeightCalculationMethod = null;

  public FulfillmentPreviewItem sellerSku(String sellerSku) {
    this.sellerSku = sellerSku;
    return this;
  }

   /**
   * The seller SKU of the item.
   * @return sellerSku
  **/
  @Schema(required = true, description = "The seller SKU of the item.")
  public String getSellerSku() {
    return sellerSku;
  }

  public void setSellerSku(String sellerSku) {
    this.sellerSku = sellerSku;
  }

  public FulfillmentPreviewItem quantity(Integer quantity) {
    this.quantity = quantity;
    return this;
  }

   /**
   * Get quantity
   * @return quantity
  **/
  @Schema(required = true, description = "")
  public Integer getQuantity() {
    return quantity;
  }

  public void setQuantity(Integer quantity) {
    this.quantity = quantity;
  }

  public FulfillmentPreviewItem sellerFulfillmentOrderItemId(String sellerFulfillmentOrderItemId) {
    this.sellerFulfillmentOrderItemId = sellerFulfillmentOrderItemId;
    return this;
  }

   /**
   * A fulfillment order item identifier that the seller created with a call to the &#x60;createFulfillmentOrder&#x60; operation.
   * @return sellerFulfillmentOrderItemId
  **/
  @Schema(required = true, description = "A fulfillment order item identifier that the seller created with a call to the `createFulfillmentOrder` operation.")
  public String getSellerFulfillmentOrderItemId() {
    return sellerFulfillmentOrderItemId;
  }

  public void setSellerFulfillmentOrderItemId(String sellerFulfillmentOrderItemId) {
    this.sellerFulfillmentOrderItemId = sellerFulfillmentOrderItemId;
  }

  public FulfillmentPreviewItem estimatedShippingWeight(Weight estimatedShippingWeight) {
    this.estimatedShippingWeight = estimatedShippingWeight;
    return this;
  }

   /**
   * Get estimatedShippingWeight
   * @return estimatedShippingWeight
  **/
  @Schema(description = "")
  public Weight getEstimatedShippingWeight() {
    return estimatedShippingWeight;
  }

  public void setEstimatedShippingWeight(Weight estimatedShippingWeight) {
    this.estimatedShippingWeight = estimatedShippingWeight;
  }

  public FulfillmentPreviewItem shippingWeightCalculationMethod(ShippingWeightCalculationMethodEnum shippingWeightCalculationMethod) {
    this.shippingWeightCalculationMethod = shippingWeightCalculationMethod;
    return this;
  }

   /**
   * The method used to calculate the estimated shipping weight.
   * @return shippingWeightCalculationMethod
  **/
  @Schema(description = "The method used to calculate the estimated shipping weight.")
  public ShippingWeightCalculationMethodEnum getShippingWeightCalculationMethod() {
    return shippingWeightCalculationMethod;
  }

  public void setShippingWeightCalculationMethod(ShippingWeightCalculationMethodEnum shippingWeightCalculationMethod) {
    this.shippingWeightCalculationMethod = shippingWeightCalculationMethod;
  }


  @Override
  public boolean equals(java.lang.Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    FulfillmentPreviewItem fulfillmentPreviewItem = (FulfillmentPreviewItem) o;
    return Objects.equals(this.sellerSku, fulfillmentPreviewItem.sellerSku) &&
        Objects.equals(this.quantity, fulfillmentPreviewItem.quantity) &&
        Objects.equals(this.sellerFulfillmentOrderItemId, fulfillmentPreviewItem.sellerFulfillmentOrderItemId) &&
        Objects.equals(this.estimatedShippingWeight, fulfillmentPreviewItem.estimatedShippingWeight) &&
        Objects.equals(this.shippingWeightCalculationMethod, fulfillmentPreviewItem.shippingWeightCalculationMethod);
  }

  @Override
  public int hashCode() {
    return Objects.hash(sellerSku, quantity, sellerFulfillmentOrderItemId, estimatedShippingWeight, shippingWeightCalculationMethod);
  }


  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class FulfillmentPreviewItem {\n");
    
    sb.append("    sellerSku: ").append(toIndentedString(sellerSku)).append("\n");
    sb.append("    quantity: ").append(toIndentedString(quantity)).append("\n");
    sb.append("    sellerFulfillmentOrderItemId: ").append(toIndentedString(sellerFulfillmentOrderItemId)).append("\n");
    sb.append("    estimatedShippingWeight: ").append(toIndentedString(estimatedShippingWeight)).append("\n");
    sb.append("    shippingWeightCalculationMethod: ").append(toIndentedString(shippingWeightCalculationMethod)).append("\n");
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
