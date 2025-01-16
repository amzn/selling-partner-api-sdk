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
import com.google.gson.TypeAdapter;
import com.google.gson.annotations.JsonAdapter;
import com.google.gson.annotations.SerializedName;
import com.google.gson.stream.JsonReader;
import com.google.gson.stream.JsonWriter;
import io.swagger.v3.oas.annotations.media.Schema;
import java.io.IOException;
import org.threeten.bp.OffsetDateTime;
/**
 * Contains only a starting DateTime.
 */
@Schema(description = "Contains only a starting DateTime.")


public class WindowInput {
  @SerializedName("start")
  private OffsetDateTime start = null;

  public WindowInput start(OffsetDateTime start) {
    this.start = start;
    return this;
  }

   /**
   * The start date of the window. In [ISO 8601](https://developer-docs.amazon.com/sp-api/docs/iso-8601) datetime format with minute precision. Supports patterns &#x60;yyyy-MM-ddTHH:mmZ&#x60;, &#x60;yyyy-MM-ddTHH:mm:ssZ&#x60;, or &#x60;yyyy-MM-ddTHH:mm:ss.sssZ&#x60;. Note that non-zero second and millisecond components are removed.
   * @return start
  **/
  @Schema(required = true, description = "The start date of the window. In [ISO 8601](https://developer-docs.amazon.com/sp-api/docs/iso-8601) datetime format with minute precision. Supports patterns `yyyy-MM-ddTHH:mmZ`, `yyyy-MM-ddTHH:mm:ssZ`, or `yyyy-MM-ddTHH:mm:ss.sssZ`. Note that non-zero second and millisecond components are removed.")
  public OffsetDateTime getStart() {
    return start;
  }

  public void setStart(OffsetDateTime start) {
    this.start = start;
  }


  @Override
  public boolean equals(java.lang.Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    WindowInput windowInput = (WindowInput) o;
    return Objects.equals(this.start, windowInput.start);
  }

  @Override
  public int hashCode() {
    return Objects.hash(start);
  }


  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class WindowInput {\n");
    
    sb.append("    start: ").append(toIndentedString(start)).append("\n");
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
