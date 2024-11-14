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

package com.amazon.SellingPartnerAPI;

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
/**
 * Contains the list of programs that are associated with an item.  Possible programs are:  - **Subscribe and Save**: Offers recurring, scheduled deliveries to Amazon customers and Amazon Business customers for their frequently ordered products.
 */
@Schema(description = "Contains the list of programs that are associated with an item.  Possible programs are:  - **Subscribe and Save**: Offers recurring, scheduled deliveries to Amazon customers and Amazon Business customers for their frequently ordered products.")
@javax.annotation.Generated(value = "io.swagger.codegen.v3.generators.java.JavaClientCodegen", date = "2024-11-14T09:09:13.380177Z[Etc/UTC]")

public class AmazonPrograms {
  @SerializedName("Programs")
  private List<String> programs = new ArrayList<String>();

  public AmazonPrograms programs(List<String> programs) {
    this.programs = programs;
    return this;
  }

  public AmazonPrograms addProgramsItem(String programsItem) {
    this.programs.add(programsItem);
    return this;
  }

   /**
   * A list of the programs that are associated with the specified order item.  **Possible values**: &#x60;SUBSCRIBE_AND_SAVE&#x60;
   * @return programs
  **/
  @Schema(required = true, description = "A list of the programs that are associated with the specified order item.  **Possible values**: `SUBSCRIBE_AND_SAVE`")
  public List<String> getPrograms() {
    return programs;
  }

  public void setPrograms(List<String> programs) {
    this.programs = programs;
  }


  @Override
  public boolean equals(java.lang.Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    AmazonPrograms amazonPrograms = (AmazonPrograms) o;
    return Objects.equals(this.programs, amazonPrograms.programs);
  }

  @Override
  public int hashCode() {
    return Objects.hash(programs);
  }


  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class AmazonPrograms {\n");
    
    sb.append("    programs: ").append(toIndentedString(programs)).append("\n");
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
