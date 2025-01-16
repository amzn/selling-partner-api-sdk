/*
 * Fulfillment Inbound v2024-03-20
 * The Selling Partner API for Fulfillment By Amazon (FBA) Inbound. The FBA Inbound API enables building inbound workflows to create, manage, and send shipments into Amazon's fulfillment network. The API has interoperability with the Send-to-Amazon user interface.
 *
 * OpenAPI spec version: 2024-03-20
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */

package com.amazon.SellingPartnerAPI.models.fulfillment.inbound.v2024_03_20;

import java.util.Objects;
import java.util.Arrays;
import com.amazon.SellingPartnerAPI.models.fulfillment.inbound.v2024_03_20.Pagination;
import com.amazon.SellingPartnerAPI.models.fulfillment.inbound.v2024_03_20.TransportationOption;
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
 * The &#x60;listTransportationOptions&#x60; response.
 */
@Schema(description = "The `listTransportationOptions` response.")


public class ListTransportationOptionsResponse {
  @SerializedName("pagination")
  private Pagination pagination = null;

  @SerializedName("transportationOptions")
  private List<TransportationOption> transportationOptions = new ArrayList<TransportationOption>();

  public ListTransportationOptionsResponse pagination(Pagination pagination) {
    this.pagination = pagination;
    return this;
  }

   /**
   * Get pagination
   * @return pagination
  **/
  @Schema(description = "")
  public Pagination getPagination() {
    return pagination;
  }

  public void setPagination(Pagination pagination) {
    this.pagination = pagination;
  }

  public ListTransportationOptionsResponse transportationOptions(List<TransportationOption> transportationOptions) {
    this.transportationOptions = transportationOptions;
    return this;
  }

  public ListTransportationOptionsResponse addTransportationOptionsItem(TransportationOption transportationOptionsItem) {
    this.transportationOptions.add(transportationOptionsItem);
    return this;
  }

   /**
   * Transportation options generated for the placement option.
   * @return transportationOptions
  **/
  @Schema(required = true, description = "Transportation options generated for the placement option.")
  public List<TransportationOption> getTransportationOptions() {
    return transportationOptions;
  }

  public void setTransportationOptions(List<TransportationOption> transportationOptions) {
    this.transportationOptions = transportationOptions;
  }


  @Override
  public boolean equals(java.lang.Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    ListTransportationOptionsResponse listTransportationOptionsResponse = (ListTransportationOptionsResponse) o;
    return Objects.equals(this.pagination, listTransportationOptionsResponse.pagination) &&
        Objects.equals(this.transportationOptions, listTransportationOptionsResponse.transportationOptions);
  }

  @Override
  public int hashCode() {
    return Objects.hash(pagination, transportationOptions);
  }


  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class ListTransportationOptionsResponse {\n");
    
    sb.append("    pagination: ").append(toIndentedString(pagination)).append("\n");
    sb.append("    transportationOptions: ").append(toIndentedString(transportationOptions)).append("\n");
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
