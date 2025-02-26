/*
 * Selling Partner API for Catalog Items
 * The Selling Partner API for Catalog Items provides programmatic access to information about items in the Amazon catalog.  For more information, refer to the [Catalog Items API Use Case Guide](doc:catalog-items-api-v2022-04-01-use-case-guide).
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
/**
 * Identifier associated with the item in the Amazon catalog, such as a UPC or EAN identifier.
 */
@Schema(description = "Identifier associated with the item in the Amazon catalog, such as a UPC or EAN identifier.")


public class ItemIdentifier {
  @SerializedName("identifierType")
  private String identifierType = null;

  @SerializedName("identifier")
  private String identifier = null;

  public ItemIdentifier identifierType(String identifierType) {
    this.identifierType = identifierType;
    return this;
  }

   /**
   * Type of identifier, such as UPC, EAN, or ISBN.
   * @return identifierType
  **/
  @Schema(required = true, description = "Type of identifier, such as UPC, EAN, or ISBN.")
  public String getIdentifierType() {
    return identifierType;
  }

  public void setIdentifierType(String identifierType) {
    this.identifierType = identifierType;
  }

  public ItemIdentifier identifier(String identifier) {
    this.identifier = identifier;
    return this;
  }

   /**
   * Identifier.
   * @return identifier
  **/
  @Schema(required = true, description = "Identifier.")
  public String getIdentifier() {
    return identifier;
  }

  public void setIdentifier(String identifier) {
    this.identifier = identifier;
  }


  @Override
  public boolean equals(java.lang.Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    ItemIdentifier itemIdentifier = (ItemIdentifier) o;
    return Objects.equals(this.identifierType, itemIdentifier.identifierType) &&
        Objects.equals(this.identifier, itemIdentifier.identifier);
  }

  @Override
  public int hashCode() {
    return Objects.hash(identifierType, identifier);
  }


  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class ItemIdentifier {\n");
    
    sb.append("    identifierType: ").append(toIndentedString(identifierType)).append("\n");
    sb.append("    identifier: ").append(toIndentedString(identifier)).append("\n");
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
