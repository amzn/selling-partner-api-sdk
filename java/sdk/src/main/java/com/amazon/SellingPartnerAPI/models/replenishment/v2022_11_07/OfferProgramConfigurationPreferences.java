/*
 * Selling Partner API for Replenishment
 * The Selling Partner API for Replenishment (Replenishment API) provides programmatic access to replenishment program metrics and offers. These programs provide recurring delivery of any replenishable item at a frequency chosen by the customer.  The Replenishment API is available worldwide wherever Amazon Subscribe & Save is available or is supported. The API is available to vendors and FBA selling partners.
 *
 * OpenAPI spec version: 2022-11-07
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */

package com.amazon.SellingPartnerAPI.models.replenishment.v2022_11_07;

import java.util.Objects;
import java.util.Arrays;
import com.amazon.SellingPartnerAPI.models.replenishment.v2022_11_07.AutoEnrollmentPreference;
import com.google.gson.TypeAdapter;
import com.google.gson.annotations.JsonAdapter;
import com.google.gson.annotations.SerializedName;
import com.google.gson.stream.JsonReader;
import com.google.gson.stream.JsonWriter;
import io.swagger.v3.oas.annotations.media.Schema;
import java.io.IOException;
/**
 * An object which contains the preferences applied to the offer.
 */
@Schema(description = "An object which contains the preferences applied to the offer.")


public class OfferProgramConfigurationPreferences {
  @SerializedName("autoEnrollment")
  private AutoEnrollmentPreference autoEnrollment = null;

  public OfferProgramConfigurationPreferences autoEnrollment(AutoEnrollmentPreference autoEnrollment) {
    this.autoEnrollment = autoEnrollment;
    return this;
  }

   /**
   * Get autoEnrollment
   * @return autoEnrollment
  **/
  @Schema(description = "")
  public AutoEnrollmentPreference getAutoEnrollment() {
    return autoEnrollment;
  }

  public void setAutoEnrollment(AutoEnrollmentPreference autoEnrollment) {
    this.autoEnrollment = autoEnrollment;
  }


  @Override
  public boolean equals(java.lang.Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    OfferProgramConfigurationPreferences offerProgramConfigurationPreferences = (OfferProgramConfigurationPreferences) o;
    return Objects.equals(this.autoEnrollment, offerProgramConfigurationPreferences.autoEnrollment);
  }

  @Override
  public int hashCode() {
    return Objects.hash(autoEnrollment);
  }


  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class OfferProgramConfigurationPreferences {\n");
    
    sb.append("    autoEnrollment: ").append(toIndentedString(autoEnrollment)).append("\n");
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
