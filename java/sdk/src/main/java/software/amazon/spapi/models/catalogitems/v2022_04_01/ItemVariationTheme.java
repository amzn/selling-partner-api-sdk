/*
 * Selling Partner API for Catalog Items
 * Use the Selling Partner API for Catalog Items to retrieve information about items in the Amazon catalog.  For more information, refer to the [Catalog Items API Use Case Guide](https://developer-docs.amazon.com/sp-api/docs/:catalog-items-api-v2022-04-01-use-case-guide).
 *
 * OpenAPI spec version: 2022-04-01
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */

package software.amazon.spapi.models.catalogitems.v2022_04_01;

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
 * The variation theme is a list of Amazon catalog item attributes that define the variation family.
 */
@Schema(description = "The variation theme is a list of Amazon catalog item attributes that define the variation family.")


public class ItemVariationTheme {
  @SerializedName("attributes")
  private List<String> attributes = null;

  @SerializedName("theme")
  private String theme = null;

  public ItemVariationTheme attributes(List<String> attributes) {
    this.attributes = attributes;
    return this;
  }

  public ItemVariationTheme addAttributesItem(String attributesItem) {
    if (this.attributes == null) {
      this.attributes = new ArrayList<String>();
    }
    this.attributes.add(attributesItem);
    return this;
  }

   /**
   * Names of the Amazon catalog item attributes that are associated with the variation theme.
   * @return attributes
  **/
  @Schema(description = "Names of the Amazon catalog item attributes that are associated with the variation theme.")
  public List<String> getAttributes() {
    return attributes;
  }

  public void setAttributes(List<String> attributes) {
    this.attributes = attributes;
  }

  public ItemVariationTheme theme(String theme) {
    this.theme = theme;
    return this;
  }

   /**
   * Variation theme that indicates the combination of Amazon catalog item attributes that define the variation family.
   * @return theme
  **/
  @Schema(example = "COLOR_NAME/STYLE_NAME", description = "Variation theme that indicates the combination of Amazon catalog item attributes that define the variation family.")
  public String getTheme() {
    return theme;
  }

  public void setTheme(String theme) {
    this.theme = theme;
  }


  @Override
  public boolean equals(java.lang.Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    ItemVariationTheme itemVariationTheme = (ItemVariationTheme) o;
    return Objects.equals(this.attributes, itemVariationTheme.attributes) &&
        Objects.equals(this.theme, itemVariationTheme.theme);
  }

  @Override
  public int hashCode() {
    return Objects.hash(attributes, theme);
  }


  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class ItemVariationTheme {\n");
    
    sb.append("    attributes: ").append(toIndentedString(attributes)).append("\n");
    sb.append("    theme: ").append(toIndentedString(theme)).append("\n");
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
