/*
 * Amazon Shipping API
 * The Amazon Shipping API is designed to support outbound shipping use cases both for orders originating on Amazon-owned marketplaces as well as external channels/marketplaces. With these APIs, you can request shipping rates, create shipments, cancel shipments, and track shipments.
 *
 * OpenAPI spec version: v2
 * Contact: swa-api-core@amazon.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */

package com.amazon.SellingPartnerAPI.models.shipping.v2;

import java.util.Objects;
import java.util.Arrays;
import com.amazon.SellingPartnerAPI.models.shipping.v2.InputType;
import com.amazon.SellingPartnerAPI.models.shipping.v2.ValidationMetadataList;
import com.google.gson.TypeAdapter;
import com.google.gson.annotations.JsonAdapter;
import com.google.gson.annotations.SerializedName;
import com.google.gson.stream.JsonReader;
import com.google.gson.stream.JsonWriter;
import io.swagger.v3.oas.annotations.media.Schema;
import java.io.IOException;
/**
 * Info About CarrierAccountInput
 */
@Schema(description = "Info About CarrierAccountInput")


public class CarrierAccountInput {
  @SerializedName("descriptionLocalizationKey")
  private String descriptionLocalizationKey = null;

  @SerializedName("name")
  private String name = null;

  @SerializedName("groupName")
  private String groupName = null;

  @SerializedName("inputType")
  private InputType inputType = null;

  @SerializedName("isMandatory")
  private Boolean isMandatory = null;

  @SerializedName("isConfidential")
  private Boolean isConfidential = null;

  @SerializedName("isHidden")
  private Boolean isHidden = null;

  @SerializedName("validationMetadata")
  private ValidationMetadataList validationMetadata = null;

  public CarrierAccountInput descriptionLocalizationKey(String descriptionLocalizationKey) {
    this.descriptionLocalizationKey = descriptionLocalizationKey;
    return this;
  }

   /**
   * descriptionLocalizationKey value .
   * @return descriptionLocalizationKey
  **/
  @Schema(description = "descriptionLocalizationKey value .")
  public String getDescriptionLocalizationKey() {
    return descriptionLocalizationKey;
  }

  public void setDescriptionLocalizationKey(String descriptionLocalizationKey) {
    this.descriptionLocalizationKey = descriptionLocalizationKey;
  }

  public CarrierAccountInput name(String name) {
    this.name = name;
    return this;
  }

   /**
   * name value .
   * @return name
  **/
  @Schema(description = "name value .")
  public String getName() {
    return name;
  }

  public void setName(String name) {
    this.name = name;
  }

  public CarrierAccountInput groupName(String groupName) {
    this.groupName = groupName;
    return this;
  }

   /**
   * groupName value .
   * @return groupName
  **/
  @Schema(description = "groupName value .")
  public String getGroupName() {
    return groupName;
  }

  public void setGroupName(String groupName) {
    this.groupName = groupName;
  }

  public CarrierAccountInput inputType(InputType inputType) {
    this.inputType = inputType;
    return this;
  }

   /**
   * Get inputType
   * @return inputType
  **/
  @Schema(description = "")
  public InputType getInputType() {
    return inputType;
  }

  public void setInputType(InputType inputType) {
    this.inputType = inputType;
  }

  public CarrierAccountInput isMandatory(Boolean isMandatory) {
    this.isMandatory = isMandatory;
    return this;
  }

   /**
   * mandatory or not  value .
   * @return isMandatory
  **/
  @Schema(description = "mandatory or not  value .")
  public Boolean isIsMandatory() {
    return isMandatory;
  }

  public void setIsMandatory(Boolean isMandatory) {
    this.isMandatory = isMandatory;
  }

  public CarrierAccountInput isConfidential(Boolean isConfidential) {
    this.isConfidential = isConfidential;
    return this;
  }

   /**
   * is value is Confidential .
   * @return isConfidential
  **/
  @Schema(description = "is value is Confidential .")
  public Boolean isIsConfidential() {
    return isConfidential;
  }

  public void setIsConfidential(Boolean isConfidential) {
    this.isConfidential = isConfidential;
  }

  public CarrierAccountInput isHidden(Boolean isHidden) {
    this.isHidden = isHidden;
    return this;
  }

   /**
   * is value is hidden .
   * @return isHidden
  **/
  @Schema(description = "is value is hidden .")
  public Boolean isIsHidden() {
    return isHidden;
  }

  public void setIsHidden(Boolean isHidden) {
    this.isHidden = isHidden;
  }

  public CarrierAccountInput validationMetadata(ValidationMetadataList validationMetadata) {
    this.validationMetadata = validationMetadata;
    return this;
  }

   /**
   * Get validationMetadata
   * @return validationMetadata
  **/
  @Schema(description = "")
  public ValidationMetadataList getValidationMetadata() {
    return validationMetadata;
  }

  public void setValidationMetadata(ValidationMetadataList validationMetadata) {
    this.validationMetadata = validationMetadata;
  }


  @Override
  public boolean equals(java.lang.Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    CarrierAccountInput carrierAccountInput = (CarrierAccountInput) o;
    return Objects.equals(this.descriptionLocalizationKey, carrierAccountInput.descriptionLocalizationKey) &&
        Objects.equals(this.name, carrierAccountInput.name) &&
        Objects.equals(this.groupName, carrierAccountInput.groupName) &&
        Objects.equals(this.inputType, carrierAccountInput.inputType) &&
        Objects.equals(this.isMandatory, carrierAccountInput.isMandatory) &&
        Objects.equals(this.isConfidential, carrierAccountInput.isConfidential) &&
        Objects.equals(this.isHidden, carrierAccountInput.isHidden) &&
        Objects.equals(this.validationMetadata, carrierAccountInput.validationMetadata);
  }

  @Override
  public int hashCode() {
    return Objects.hash(descriptionLocalizationKey, name, groupName, inputType, isMandatory, isConfidential, isHidden, validationMetadata);
  }


  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class CarrierAccountInput {\n");
    
    sb.append("    descriptionLocalizationKey: ").append(toIndentedString(descriptionLocalizationKey)).append("\n");
    sb.append("    name: ").append(toIndentedString(name)).append("\n");
    sb.append("    groupName: ").append(toIndentedString(groupName)).append("\n");
    sb.append("    inputType: ").append(toIndentedString(inputType)).append("\n");
    sb.append("    isMandatory: ").append(toIndentedString(isMandatory)).append("\n");
    sb.append("    isConfidential: ").append(toIndentedString(isConfidential)).append("\n");
    sb.append("    isHidden: ").append(toIndentedString(isHidden)).append("\n");
    sb.append("    validationMetadata: ").append(toIndentedString(validationMetadata)).append("\n");
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
