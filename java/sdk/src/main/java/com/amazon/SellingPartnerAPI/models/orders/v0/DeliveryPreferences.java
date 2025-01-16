/*
 * Orders v0
 * Use the Orders Selling Partner API to programmatically retrieve order information. With this API, you can develop fast, flexible, and custom applications to manage order synchronization, perform order research, and create demand-based decision support tools.   _Note:_ For the JP, AU, and SG marketplaces, the Orders API supports orders from 2016 onward. For all other marketplaces, the Orders API supports orders for the last two years (orders older than this don't show up in the response).
 *
 * OpenAPI spec version: v0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */

package com.amazon.SellingPartnerAPI.models.orders.v0;

import java.util.Objects;
import java.util.Arrays;
import com.amazon.SellingPartnerAPI.models.orders.v0.OtherDeliveryAttributes;
import com.amazon.SellingPartnerAPI.models.orders.v0.PreferredDeliveryTime;
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
 * Contains all of the delivery instructions provided by the customer for the shipping address.
 */
@Schema(description = "Contains all of the delivery instructions provided by the customer for the shipping address.")


public class DeliveryPreferences {
  @SerializedName("DropOffLocation")
  private String dropOffLocation = null;

  @SerializedName("PreferredDeliveryTime")
  private PreferredDeliveryTime preferredDeliveryTime = null;

  @SerializedName("OtherAttributes")
  private List<OtherDeliveryAttributes> otherAttributes = null;

  @SerializedName("AddressInstructions")
  private String addressInstructions = null;

  public DeliveryPreferences dropOffLocation(String dropOffLocation) {
    this.dropOffLocation = dropOffLocation;
    return this;
  }

   /**
   * Drop-off location selected by the customer.
   * @return dropOffLocation
  **/
  @Schema(description = "Drop-off location selected by the customer.")
  public String getDropOffLocation() {
    return dropOffLocation;
  }

  public void setDropOffLocation(String dropOffLocation) {
    this.dropOffLocation = dropOffLocation;
  }

  public DeliveryPreferences preferredDeliveryTime(PreferredDeliveryTime preferredDeliveryTime) {
    this.preferredDeliveryTime = preferredDeliveryTime;
    return this;
  }

   /**
   * Get preferredDeliveryTime
   * @return preferredDeliveryTime
  **/
  @Schema(description = "")
  public PreferredDeliveryTime getPreferredDeliveryTime() {
    return preferredDeliveryTime;
  }

  public void setPreferredDeliveryTime(PreferredDeliveryTime preferredDeliveryTime) {
    this.preferredDeliveryTime = preferredDeliveryTime;
  }

  public DeliveryPreferences otherAttributes(List<OtherDeliveryAttributes> otherAttributes) {
    this.otherAttributes = otherAttributes;
    return this;
  }

  public DeliveryPreferences addOtherAttributesItem(OtherDeliveryAttributes otherAttributesItem) {
    if (this.otherAttributes == null) {
      this.otherAttributes = new ArrayList<OtherDeliveryAttributes>();
    }
    this.otherAttributes.add(otherAttributesItem);
    return this;
  }

   /**
   * Enumerated list of miscellaneous delivery attributes associated with the shipping address.
   * @return otherAttributes
  **/
  @Schema(description = "Enumerated list of miscellaneous delivery attributes associated with the shipping address.")
  public List<OtherDeliveryAttributes> getOtherAttributes() {
    return otherAttributes;
  }

  public void setOtherAttributes(List<OtherDeliveryAttributes> otherAttributes) {
    this.otherAttributes = otherAttributes;
  }

  public DeliveryPreferences addressInstructions(String addressInstructions) {
    this.addressInstructions = addressInstructions;
    return this;
  }

   /**
   * Building instructions, nearby landmark or navigation instructions.
   * @return addressInstructions
  **/
  @Schema(description = "Building instructions, nearby landmark or navigation instructions.")
  public String getAddressInstructions() {
    return addressInstructions;
  }

  public void setAddressInstructions(String addressInstructions) {
    this.addressInstructions = addressInstructions;
  }


  @Override
  public boolean equals(java.lang.Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    DeliveryPreferences deliveryPreferences = (DeliveryPreferences) o;
    return Objects.equals(this.dropOffLocation, deliveryPreferences.dropOffLocation) &&
        Objects.equals(this.preferredDeliveryTime, deliveryPreferences.preferredDeliveryTime) &&
        Objects.equals(this.otherAttributes, deliveryPreferences.otherAttributes) &&
        Objects.equals(this.addressInstructions, deliveryPreferences.addressInstructions);
  }

  @Override
  public int hashCode() {
    return Objects.hash(dropOffLocation, preferredDeliveryTime, otherAttributes, addressInstructions);
  }


  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class DeliveryPreferences {\n");
    
    sb.append("    dropOffLocation: ").append(toIndentedString(dropOffLocation)).append("\n");
    sb.append("    preferredDeliveryTime: ").append(toIndentedString(preferredDeliveryTime)).append("\n");
    sb.append("    otherAttributes: ").append(toIndentedString(otherAttributes)).append("\n");
    sb.append("    addressInstructions: ").append(toIndentedString(addressInstructions)).append("\n");
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
