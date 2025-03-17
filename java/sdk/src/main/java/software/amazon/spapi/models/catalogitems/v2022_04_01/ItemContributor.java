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
import software.amazon.spapi.models.catalogitems.v2022_04_01.ItemContributorRole;
/**
 * Individual contributor to the creation of an item, such as an author or actor.
 */
@Schema(description = "Individual contributor to the creation of an item, such as an author or actor.")


public class ItemContributor {
  @SerializedName("role")
  private ItemContributorRole role = null;

  @SerializedName("value")
  private String value = null;

  public ItemContributor role(ItemContributorRole role) {
    this.role = role;
    return this;
  }

   /**
   * Get role
   * @return role
  **/
  @Schema(required = true, description = "")
  public ItemContributorRole getRole() {
    return role;
  }

  public void setRole(ItemContributorRole role) {
    this.role = role;
  }

  public ItemContributor value(String value) {
    this.value = value;
    return this;
  }

   /**
   * Name of the contributor, such as &#x60;Jane Austen&#x60;.
   * @return value
  **/
  @Schema(required = true, description = "Name of the contributor, such as `Jane Austen`.")
  public String getValue() {
    return value;
  }

  public void setValue(String value) {
    this.value = value;
  }


  @Override
  public boolean equals(java.lang.Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    ItemContributor itemContributor = (ItemContributor) o;
    return Objects.equals(this.role, itemContributor.role) &&
        Objects.equals(this.value, itemContributor.value);
  }

  @Override
  public int hashCode() {
    return Objects.hash(role, value);
  }


  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class ItemContributor {\n");
    
    sb.append("    role: ").append(toIndentedString(role)).append("\n");
    sb.append("    value: ").append(toIndentedString(value)).append("\n");
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
