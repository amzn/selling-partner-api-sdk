/*
 * Selling Partner API for Services
 * With the Services API, you can build applications that help service providers get and modify their service orders and manage their resources.
 *
 * OpenAPI spec version: v1
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */

package com.amazon.SellingPartnerAPI.models.services.v1;

import java.util.Objects;
import java.util.Arrays;
import com.amazon.SellingPartnerAPI.models.services.v1.Recurrence;
import com.google.gson.TypeAdapter;
import com.google.gson.annotations.JsonAdapter;
import com.google.gson.annotations.SerializedName;
import com.google.gson.stream.JsonReader;
import com.google.gson.stream.JsonWriter;
import io.swagger.v3.oas.annotations.media.Schema;
import java.io.IOException;
import org.threeten.bp.OffsetDateTime;
/**
 * &#x60;AvailabilityRecord&#x60; to represent the capacity of a resource over a time range.
 */
@Schema(description = "`AvailabilityRecord` to represent the capacity of a resource over a time range.")


public class AvailabilityRecord {
  @SerializedName("startTime")
  private OffsetDateTime startTime = null;

  @SerializedName("endTime")
  private OffsetDateTime endTime = null;

  @SerializedName("recurrence")
  private Recurrence recurrence = null;

  @SerializedName("capacity")
  private Integer capacity = null;

  public AvailabilityRecord startTime(OffsetDateTime startTime) {
    this.startTime = startTime;
    return this;
  }

   /**
   * Denotes the time from when the resource is available in a day in ISO-8601 format.
   * @return startTime
  **/
  @Schema(required = true, description = "Denotes the time from when the resource is available in a day in ISO-8601 format.")
  public OffsetDateTime getStartTime() {
    return startTime;
  }

  public void setStartTime(OffsetDateTime startTime) {
    this.startTime = startTime;
  }

  public AvailabilityRecord endTime(OffsetDateTime endTime) {
    this.endTime = endTime;
    return this;
  }

   /**
   * Denotes the time till when the resource is available in a day in ISO-8601 format.
   * @return endTime
  **/
  @Schema(required = true, description = "Denotes the time till when the resource is available in a day in ISO-8601 format.")
  public OffsetDateTime getEndTime() {
    return endTime;
  }

  public void setEndTime(OffsetDateTime endTime) {
    this.endTime = endTime;
  }

  public AvailabilityRecord recurrence(Recurrence recurrence) {
    this.recurrence = recurrence;
    return this;
  }

   /**
   * Get recurrence
   * @return recurrence
  **/
  @Schema(description = "")
  public Recurrence getRecurrence() {
    return recurrence;
  }

  public void setRecurrence(Recurrence recurrence) {
    this.recurrence = recurrence;
  }

  public AvailabilityRecord capacity(Integer capacity) {
    this.capacity = capacity;
    return this;
  }

   /**
   * Signifies the capacity of a resource which is available.
   * minimum: 1
   * @return capacity
  **/
  @Schema(description = "Signifies the capacity of a resource which is available.")
  public Integer getCapacity() {
    return capacity;
  }

  public void setCapacity(Integer capacity) {
    this.capacity = capacity;
  }


  @Override
  public boolean equals(java.lang.Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    AvailabilityRecord availabilityRecord = (AvailabilityRecord) o;
    return Objects.equals(this.startTime, availabilityRecord.startTime) &&
        Objects.equals(this.endTime, availabilityRecord.endTime) &&
        Objects.equals(this.recurrence, availabilityRecord.recurrence) &&
        Objects.equals(this.capacity, availabilityRecord.capacity);
  }

  @Override
  public int hashCode() {
    return Objects.hash(startTime, endTime, recurrence, capacity);
  }


  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class AvailabilityRecord {\n");
    
    sb.append("    startTime: ").append(toIndentedString(startTime)).append("\n");
    sb.append("    endTime: ").append(toIndentedString(endTime)).append("\n");
    sb.append("    recurrence: ").append(toIndentedString(recurrence)).append("\n");
    sb.append("    capacity: ").append(toIndentedString(capacity)).append("\n");
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
