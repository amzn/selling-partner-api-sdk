/*
 * The Selling Partner API for FBA inbound operations.
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
import com.amazon.SellingPartnerAPI.models.fulfillment.inbound.v2024_03_20.MskuPrepDetailInput;
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
 * The &#x60;setPrepDetails&#x60; request.
 */
@Schema(description = "The `setPrepDetails` request.")


public class SetPrepDetailsRequest {
  @SerializedName("marketplaceId")
  private String marketplaceId = null;

  @SerializedName("mskuPrepDetails")
  private List<MskuPrepDetailInput> mskuPrepDetails = new ArrayList<MskuPrepDetailInput>();

  public SetPrepDetailsRequest marketplaceId(String marketplaceId) {
    this.marketplaceId = marketplaceId;
    return this;
  }

   /**
   * The marketplace ID. For a list of possible values, refer to [Marketplace IDs](https://developer-docs.amazon.com/sp-api/docs/marketplace-ids).
   * @return marketplaceId
  **/
  @Schema(required = true, description = "The marketplace ID. For a list of possible values, refer to [Marketplace IDs](https://developer-docs.amazon.com/sp-api/docs/marketplace-ids).")
  public String getMarketplaceId() {
    return marketplaceId;
  }

  public void setMarketplaceId(String marketplaceId) {
    this.marketplaceId = marketplaceId;
  }

  public SetPrepDetailsRequest mskuPrepDetails(List<MskuPrepDetailInput> mskuPrepDetails) {
    this.mskuPrepDetails = mskuPrepDetails;
    return this;
  }

  public SetPrepDetailsRequest addMskuPrepDetailsItem(MskuPrepDetailInput mskuPrepDetailsItem) {
    this.mskuPrepDetails.add(mskuPrepDetailsItem);
    return this;
  }

   /**
   * A list of MSKUs and related prep details.
   * @return mskuPrepDetails
  **/
  @Schema(required = true, description = "A list of MSKUs and related prep details.")
  public List<MskuPrepDetailInput> getMskuPrepDetails() {
    return mskuPrepDetails;
  }

  public void setMskuPrepDetails(List<MskuPrepDetailInput> mskuPrepDetails) {
    this.mskuPrepDetails = mskuPrepDetails;
  }


  @Override
  public boolean equals(java.lang.Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    SetPrepDetailsRequest setPrepDetailsRequest = (SetPrepDetailsRequest) o;
    return Objects.equals(this.marketplaceId, setPrepDetailsRequest.marketplaceId) &&
        Objects.equals(this.mskuPrepDetails, setPrepDetailsRequest.mskuPrepDetails);
  }

  @Override
  public int hashCode() {
    return Objects.hash(marketplaceId, mskuPrepDetails);
  }


  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class SetPrepDetailsRequest {\n");
    
    sb.append("    marketplaceId: ").append(toIndentedString(marketplaceId)).append("\n");
    sb.append("    mskuPrepDetails: ").append(toIndentedString(mskuPrepDetails)).append("\n");
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
