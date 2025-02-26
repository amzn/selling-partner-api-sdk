/*
 * The Selling Partner API for Amazon Warehousing and Distribution
 * The Selling Partner API for Amazon Warehousing and Distribution (AWD) provides programmatic access to information about AWD shipments and inventory.
 *
 * OpenAPI spec version: 2024-05-09
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */

package software.amazon.spapi.models.awd.v2024_05_09;

import java.util.Objects;
import java.util.Arrays;
import com.google.gson.TypeAdapter;
import com.google.gson.annotations.JsonAdapter;
import com.google.gson.annotations.SerializedName;
import com.google.gson.stream.JsonReader;
import com.google.gson.stream.JsonWriter;
import io.swagger.v3.oas.annotations.media.Schema;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import software.amazon.spapi.models.awd.v2024_05_09.LabelOwner;
import software.amazon.spapi.models.awd.v2024_05_09.PrepCategory;
import software.amazon.spapi.models.awd.v2024_05_09.PrepInstruction;
import software.amazon.spapi.models.awd.v2024_05_09.PrepOwner;
/**
 * The preparation details for a product. This contains the prep category, prep owner, and label owner. Prep instructions are generated based on the specified category.
 */
@Schema(description = "The preparation details for a product. This contains the prep category, prep owner, and label owner. Prep instructions are generated based on the specified category.")


public class PrepDetails {
  @SerializedName("labelOwner")
  private LabelOwner labelOwner = null;

  @SerializedName("prepCategory")
  private PrepCategory prepCategory = null;

  @SerializedName("prepInstructions")
  private List<PrepInstruction> prepInstructions = null;

  @SerializedName("prepOwner")
  private PrepOwner prepOwner = null;

  public PrepDetails labelOwner(LabelOwner labelOwner) {
    this.labelOwner = labelOwner;
    return this;
  }

   /**
   * Get labelOwner
   * @return labelOwner
  **/
  @Schema(description = "")
  public LabelOwner getLabelOwner() {
    return labelOwner;
  }

  public void setLabelOwner(LabelOwner labelOwner) {
    this.labelOwner = labelOwner;
  }

  public PrepDetails prepCategory(PrepCategory prepCategory) {
    this.prepCategory = prepCategory;
    return this;
  }

   /**
   * Get prepCategory
   * @return prepCategory
  **/
  @Schema(description = "")
  public PrepCategory getPrepCategory() {
    return prepCategory;
  }

  public void setPrepCategory(PrepCategory prepCategory) {
    this.prepCategory = prepCategory;
  }

  public PrepDetails prepInstructions(List<PrepInstruction> prepInstructions) {
    this.prepInstructions = prepInstructions;
    return this;
  }

  public PrepDetails addPrepInstructionsItem(PrepInstruction prepInstructionsItem) {
    if (this.prepInstructions == null) {
      this.prepInstructions = new ArrayList<PrepInstruction>();
    }
    this.prepInstructions.add(prepInstructionsItem);
    return this;
  }

   /**
   * Contains information about the preparation of the inbound products. The system auto-generates this field with the use of the &#x60;prepCategory&#x60;, and if you attempt to pass a value for this field, the system will ignore it.
   * @return prepInstructions
  **/
  @Schema(description = "Contains information about the preparation of the inbound products. The system auto-generates this field with the use of the `prepCategory`, and if you attempt to pass a value for this field, the system will ignore it.")
  public List<PrepInstruction> getPrepInstructions() {
    return prepInstructions;
  }

  public void setPrepInstructions(List<PrepInstruction> prepInstructions) {
    this.prepInstructions = prepInstructions;
  }

  public PrepDetails prepOwner(PrepOwner prepOwner) {
    this.prepOwner = prepOwner;
    return this;
  }

   /**
   * Get prepOwner
   * @return prepOwner
  **/
  @Schema(description = "")
  public PrepOwner getPrepOwner() {
    return prepOwner;
  }

  public void setPrepOwner(PrepOwner prepOwner) {
    this.prepOwner = prepOwner;
  }


  @Override
  public boolean equals(java.lang.Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    PrepDetails prepDetails = (PrepDetails) o;
    return Objects.equals(this.labelOwner, prepDetails.labelOwner) &&
        Objects.equals(this.prepCategory, prepDetails.prepCategory) &&
        Objects.equals(this.prepInstructions, prepDetails.prepInstructions) &&
        Objects.equals(this.prepOwner, prepDetails.prepOwner);
  }

  @Override
  public int hashCode() {
    return Objects.hash(labelOwner, prepCategory, prepInstructions, prepOwner);
  }


  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class PrepDetails {\n");
    
    sb.append("    labelOwner: ").append(toIndentedString(labelOwner)).append("\n");
    sb.append("    prepCategory: ").append(toIndentedString(prepCategory)).append("\n");
    sb.append("    prepInstructions: ").append(toIndentedString(prepInstructions)).append("\n");
    sb.append("    prepOwner: ").append(toIndentedString(prepOwner)).append("\n");
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
