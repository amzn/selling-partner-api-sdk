/*
 * Catalog Items v2022-04-01
 * The Selling Partner API for Catalog Items provides programmatic access to information about items in the Amazon catalog.  For more information, refer to the [Catalog Items API Use Case Guide](doc:catalog-items-api-v2022-04-01-use-case-guide).
 *
 * OpenAPI spec version: 2022-04-01
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */

package com.amazon.SellingPartnerAPI.models.catalogitems.v2022_04_01;

import java.util.Objects;
import java.util.Arrays;
import com.amazon.SellingPartnerAPI.models.catalogitems.v2022_04_01.ItemRelationship;
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
 * Relationship details for the Amazon catalog item for the indicated Amazon marketplace.
 */
@Schema(description = "Relationship details for the Amazon catalog item for the indicated Amazon marketplace.")


public class ItemRelationshipsByMarketplace {
  @SerializedName("marketplaceId")
  private String marketplaceId = null;

  @SerializedName("relationships")
  private List<ItemRelationship> relationships = new ArrayList<ItemRelationship>();

  public ItemRelationshipsByMarketplace marketplaceId(String marketplaceId) {
    this.marketplaceId = marketplaceId;
    return this;
  }

   /**
   * Amazon marketplace identifier.
   * @return marketplaceId
  **/
  @Schema(required = true, description = "Amazon marketplace identifier.")
  public String getMarketplaceId() {
    return marketplaceId;
  }

  public void setMarketplaceId(String marketplaceId) {
    this.marketplaceId = marketplaceId;
  }

  public ItemRelationshipsByMarketplace relationships(List<ItemRelationship> relationships) {
    this.relationships = relationships;
    return this;
  }

  public ItemRelationshipsByMarketplace addRelationshipsItem(ItemRelationship relationshipsItem) {
    this.relationships.add(relationshipsItem);
    return this;
  }

   /**
   * Relationships for the item.
   * @return relationships
  **/
  @Schema(required = true, description = "Relationships for the item.")
  public List<ItemRelationship> getRelationships() {
    return relationships;
  }

  public void setRelationships(List<ItemRelationship> relationships) {
    this.relationships = relationships;
  }


  @Override
  public boolean equals(java.lang.Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    ItemRelationshipsByMarketplace itemRelationshipsByMarketplace = (ItemRelationshipsByMarketplace) o;
    return Objects.equals(this.marketplaceId, itemRelationshipsByMarketplace.marketplaceId) &&
        Objects.equals(this.relationships, itemRelationshipsByMarketplace.relationships);
  }

  @Override
  public int hashCode() {
    return Objects.hash(marketplaceId, relationships);
  }


  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class ItemRelationshipsByMarketplace {\n");
    
    sb.append("    marketplaceId: ").append(toIndentedString(marketplaceId)).append("\n");
    sb.append("    relationships: ").append(toIndentedString(relationships)).append("\n");
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
