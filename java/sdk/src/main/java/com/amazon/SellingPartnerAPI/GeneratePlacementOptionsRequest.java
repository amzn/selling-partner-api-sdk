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

package com.amazon.SellingPartnerAPI;

import java.util.Objects;
import java.util.Arrays;
import com.amazon.SellingPartnerAPI.CustomPlacementInput;
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
 * The &#x60;generatePlacementOptions&#x60; request.
 */
@Schema(description = "The `generatePlacementOptions` request.")
@javax.annotation.Generated(value = "io.swagger.codegen.v3.generators.java.JavaClientCodegen", date = "2024-11-14T09:08:39.223252Z[Etc/UTC]")

public class GeneratePlacementOptionsRequest {
  @SerializedName("customPlacement")
  private List<CustomPlacementInput> customPlacement = null;

  public GeneratePlacementOptionsRequest customPlacement(List<CustomPlacementInput> customPlacement) {
    this.customPlacement = customPlacement;
    return this;
  }

  public GeneratePlacementOptionsRequest addCustomPlacementItem(CustomPlacementInput customPlacementItem) {
    if (this.customPlacement == null) {
      this.customPlacement = new ArrayList<CustomPlacementInput>();
    }
    this.customPlacement.add(customPlacementItem);
    return this;
  }

   /**
   * Custom placement options you want to add to the plan. This is only used for the India (IN - A21TJRUUN4KGV) marketplace.
   * @return customPlacement
  **/
  @Schema(description = "Custom placement options you want to add to the plan. This is only used for the India (IN - A21TJRUUN4KGV) marketplace.")
  public List<CustomPlacementInput> getCustomPlacement() {
    return customPlacement;
  }

  public void setCustomPlacement(List<CustomPlacementInput> customPlacement) {
    this.customPlacement = customPlacement;
  }


  @Override
  public boolean equals(java.lang.Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    GeneratePlacementOptionsRequest generatePlacementOptionsRequest = (GeneratePlacementOptionsRequest) o;
    return Objects.equals(this.customPlacement, generatePlacementOptionsRequest.customPlacement);
  }

  @Override
  public int hashCode() {
    return Objects.hash(customPlacement);
  }


  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class GeneratePlacementOptionsRequest {\n");
    
    sb.append("    customPlacement: ").append(toIndentedString(customPlacement)).append("\n");
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
