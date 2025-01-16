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
import com.amazon.SellingPartnerAPI.models.orders.v0.BusinessHours;
import com.amazon.SellingPartnerAPI.models.orders.v0.ExceptionDates;
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
 * The time window when the delivery is preferred.
 */
@Schema(description = "The time window when the delivery is preferred.")


public class PreferredDeliveryTime {
  @SerializedName("BusinessHours")
  private List<BusinessHours> businessHours = null;

  @SerializedName("ExceptionDates")
  private List<ExceptionDates> exceptionDates = null;

  public PreferredDeliveryTime businessHours(List<BusinessHours> businessHours) {
    this.businessHours = businessHours;
    return this;
  }

  public PreferredDeliveryTime addBusinessHoursItem(BusinessHours businessHoursItem) {
    if (this.businessHours == null) {
      this.businessHours = new ArrayList<BusinessHours>();
    }
    this.businessHours.add(businessHoursItem);
    return this;
  }

   /**
   * Business hours when the business is open for deliveries.
   * @return businessHours
  **/
  @Schema(description = "Business hours when the business is open for deliveries.")
  public List<BusinessHours> getBusinessHours() {
    return businessHours;
  }

  public void setBusinessHours(List<BusinessHours> businessHours) {
    this.businessHours = businessHours;
  }

  public PreferredDeliveryTime exceptionDates(List<ExceptionDates> exceptionDates) {
    this.exceptionDates = exceptionDates;
    return this;
  }

  public PreferredDeliveryTime addExceptionDatesItem(ExceptionDates exceptionDatesItem) {
    if (this.exceptionDates == null) {
      this.exceptionDates = new ArrayList<ExceptionDates>();
    }
    this.exceptionDates.add(exceptionDatesItem);
    return this;
  }

   /**
   * Dates when the business is closed during the next 30 days.
   * @return exceptionDates
  **/
  @Schema(description = "Dates when the business is closed during the next 30 days.")
  public List<ExceptionDates> getExceptionDates() {
    return exceptionDates;
  }

  public void setExceptionDates(List<ExceptionDates> exceptionDates) {
    this.exceptionDates = exceptionDates;
  }


  @Override
  public boolean equals(java.lang.Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    PreferredDeliveryTime preferredDeliveryTime = (PreferredDeliveryTime) o;
    return Objects.equals(this.businessHours, preferredDeliveryTime.businessHours) &&
        Objects.equals(this.exceptionDates, preferredDeliveryTime.exceptionDates);
  }

  @Override
  public int hashCode() {
    return Objects.hash(businessHours, exceptionDates);
  }


  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class PreferredDeliveryTime {\n");
    
    sb.append("    businessHours: ").append(toIndentedString(businessHours)).append("\n");
    sb.append("    exceptionDates: ").append(toIndentedString(exceptionDates)).append("\n");
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
