/*
 * Selling Partner API for Solicitations
 * With the Solicitations API you can build applications that send non-critical solicitations to buyers. You can get a list of solicitation types that are available for an order that you specify, then call an operation that sends a solicitation to the buyer for that order. Buyers cannot respond to solicitations sent by this API, and these solicitations do not appear in the Messaging section of Seller Central or in the recipient's Message Center. The Solicitations API returns responses that are formed according to the <a href=https://tools.ietf.org/html/draft-kelly-json-hal-08>JSON Hypertext Application Language</a> (HAL) standard.
 *
 * OpenAPI spec version: v1
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */

package com.amazon.SellingPartnerAPI.models.solicitations.v1;

import java.util.Objects;
import java.util.Arrays;
import com.amazon.SellingPartnerAPI.models.solicitations.v1.GetSolicitationActionResponse;
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
 * GetSolicitationActionsForOrderResponseEmbedded
 */



public class GetSolicitationActionsForOrderResponseEmbedded {
  @SerializedName("actions")
  private List<GetSolicitationActionResponse> actions = new ArrayList<GetSolicitationActionResponse>();

  public GetSolicitationActionsForOrderResponseEmbedded actions(List<GetSolicitationActionResponse> actions) {
    this.actions = actions;
    return this;
  }

  public GetSolicitationActionsForOrderResponseEmbedded addActionsItem(GetSolicitationActionResponse actionsItem) {
    this.actions.add(actionsItem);
    return this;
  }

   /**
   * Get actions
   * @return actions
  **/
  @Schema(required = true, description = "")
  public List<GetSolicitationActionResponse> getActions() {
    return actions;
  }

  public void setActions(List<GetSolicitationActionResponse> actions) {
    this.actions = actions;
  }


  @Override
  public boolean equals(java.lang.Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    GetSolicitationActionsForOrderResponseEmbedded getSolicitationActionsForOrderResponseEmbedded = (GetSolicitationActionsForOrderResponseEmbedded) o;
    return Objects.equals(this.actions, getSolicitationActionsForOrderResponseEmbedded.actions);
  }

  @Override
  public int hashCode() {
    return Objects.hash(actions);
  }


  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class GetSolicitationActionsForOrderResponseEmbedded {\n");
    
    sb.append("    actions: ").append(toIndentedString(actions)).append("\n");
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
