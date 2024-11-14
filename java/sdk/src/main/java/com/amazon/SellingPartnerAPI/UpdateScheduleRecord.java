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

package com.amazon.SellingPartnerAPI;

import java.util.Objects;
import java.util.Arrays;
import com.amazon.SellingPartnerAPI.AvailabilityRecord;
import com.amazon.SellingPartnerAPI.ErrorList;
import com.amazon.SellingPartnerAPI.WarningList;
import com.google.gson.TypeAdapter;
import com.google.gson.annotations.JsonAdapter;
import com.google.gson.annotations.SerializedName;
import com.google.gson.stream.JsonReader;
import com.google.gson.stream.JsonWriter;
import io.swagger.v3.oas.annotations.media.Schema;
import java.io.IOException;
/**
 * &#x60;UpdateScheduleRecord&#x60; entity contains the &#x60;AvailabilityRecord&#x60; if there is an error/warning while performing the requested operation on it.
 */
@Schema(description = "`UpdateScheduleRecord` entity contains the `AvailabilityRecord` if there is an error/warning while performing the requested operation on it.")
@javax.annotation.Generated(value = "io.swagger.codegen.v3.generators.java.JavaClientCodegen", date = "2024-11-14T09:09:48.057785Z[Etc/UTC]")

public class UpdateScheduleRecord {
  @SerializedName("availability")
  private AvailabilityRecord availability = null;

  @SerializedName("warnings")
  private WarningList warnings = null;

  @SerializedName("errors")
  private ErrorList errors = null;

  public UpdateScheduleRecord availability(AvailabilityRecord availability) {
    this.availability = availability;
    return this;
  }

   /**
   * Get availability
   * @return availability
  **/
  @Schema(description = "")
  public AvailabilityRecord getAvailability() {
    return availability;
  }

  public void setAvailability(AvailabilityRecord availability) {
    this.availability = availability;
  }

  public UpdateScheduleRecord warnings(WarningList warnings) {
    this.warnings = warnings;
    return this;
  }

   /**
   * Get warnings
   * @return warnings
  **/
  @Schema(description = "")
  public WarningList getWarnings() {
    return warnings;
  }

  public void setWarnings(WarningList warnings) {
    this.warnings = warnings;
  }

  public UpdateScheduleRecord errors(ErrorList errors) {
    this.errors = errors;
    return this;
  }

   /**
   * Get errors
   * @return errors
  **/
  @Schema(description = "")
  public ErrorList getErrors() {
    return errors;
  }

  public void setErrors(ErrorList errors) {
    this.errors = errors;
  }


  @Override
  public boolean equals(java.lang.Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    UpdateScheduleRecord updateScheduleRecord = (UpdateScheduleRecord) o;
    return Objects.equals(this.availability, updateScheduleRecord.availability) &&
        Objects.equals(this.warnings, updateScheduleRecord.warnings) &&
        Objects.equals(this.errors, updateScheduleRecord.errors);
  }

  @Override
  public int hashCode() {
    return Objects.hash(availability, warnings, errors);
  }


  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class UpdateScheduleRecord {\n");
    
    sb.append("    availability: ").append(toIndentedString(availability)).append("\n");
    sb.append("    warnings: ").append(toIndentedString(warnings)).append("\n");
    sb.append("    errors: ").append(toIndentedString(errors)).append("\n");
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
