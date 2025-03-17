/*
 * Selling Partner API for Easy Ship
 * Use the Selling Partner API for Easy Ship to build applications for sellers to manage and ship Amazon Easy Ship orders. With this API, you can get available time slots, schedule and reschedule Easy Ship orders, and print shipping labels, invoices, and warranties. To review the differences in Easy Ship operations by marketplace, refer to [Marketplace support](https://developer-docs.amazon.com/sp-api/docs/easyship-api-v2022-03-23-use-case-guide#marketplace-support).
 *
 * OpenAPI spec version: 2022-03-23
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */

package software.amazon.spapi.models.easyship.v2022_03_23;

import java.util.Objects;
import java.util.Arrays;
import com.google.gson.TypeAdapter;
import com.google.gson.annotations.JsonAdapter;
import com.google.gson.annotations.SerializedName;
import com.google.gson.stream.JsonReader;
import com.google.gson.stream.JsonWriter;
import io.swagger.v3.oas.annotations.media.Schema;
import java.io.IOException;
import software.amazon.spapi.models.easyship.v2022_03_23.TimeSlots;
/**
 * The response schema for the &#x60;listHandoverSlots&#x60; operation.
 */
@Schema(description = "The response schema for the `listHandoverSlots` operation.")


public class ListHandoverSlotsResponse {
  @SerializedName("amazonOrderId")
  private String amazonOrderId = null;

  @SerializedName("timeSlots")
  private TimeSlots timeSlots = null;

  public ListHandoverSlotsResponse amazonOrderId(String amazonOrderId) {
    this.amazonOrderId = amazonOrderId;
    return this;
  }

   /**
   * Get amazonOrderId
   * @return amazonOrderId
  **/
  @Schema(required = true, description = "")
  public String getAmazonOrderId() {
    return amazonOrderId;
  }

  public void setAmazonOrderId(String amazonOrderId) {
    this.amazonOrderId = amazonOrderId;
  }

  public ListHandoverSlotsResponse timeSlots(TimeSlots timeSlots) {
    this.timeSlots = timeSlots;
    return this;
  }

   /**
   * Get timeSlots
   * @return timeSlots
  **/
  @Schema(required = true, description = "")
  public TimeSlots getTimeSlots() {
    return timeSlots;
  }

  public void setTimeSlots(TimeSlots timeSlots) {
    this.timeSlots = timeSlots;
  }


  @Override
  public boolean equals(java.lang.Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    ListHandoverSlotsResponse listHandoverSlotsResponse = (ListHandoverSlotsResponse) o;
    return Objects.equals(this.amazonOrderId, listHandoverSlotsResponse.amazonOrderId) &&
        Objects.equals(this.timeSlots, listHandoverSlotsResponse.timeSlots);
  }

  @Override
  public int hashCode() {
    return Objects.hash(amazonOrderId, timeSlots);
  }


  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class ListHandoverSlotsResponse {\n");
    
    sb.append("    amazonOrderId: ").append(toIndentedString(amazonOrderId)).append("\n");
    sb.append("    timeSlots: ").append(toIndentedString(timeSlots)).append("\n");
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
