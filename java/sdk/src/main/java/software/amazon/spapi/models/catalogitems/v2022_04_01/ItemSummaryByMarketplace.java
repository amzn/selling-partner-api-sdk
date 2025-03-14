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
import java.util.ArrayList;
import java.util.List;
import org.threeten.bp.LocalDate;
import software.amazon.spapi.models.catalogitems.v2022_04_01.ItemBrowseClassification;
import software.amazon.spapi.models.catalogitems.v2022_04_01.ItemContributor;
/**
 * Summary details of an Amazon catalog item for the indicated Amazon marketplace.
 */
@Schema(description = "Summary details of an Amazon catalog item for the indicated Amazon marketplace.")


public class ItemSummaryByMarketplace {
  @SerializedName("marketplaceId")
  private String marketplaceId = null;

  @SerializedName("adultProduct")
  private Boolean adultProduct = null;

  @SerializedName("autographed")
  private Boolean autographed = null;

  @SerializedName("brand")
  private String brand = null;

  @SerializedName("browseClassification")
  private ItemBrowseClassification browseClassification = null;

  @SerializedName("color")
  private String color = null;

  @SerializedName("contributors")
  private List<ItemContributor> contributors = null;

  /**
   * Classification type associated with the Amazon catalog item.
   */
  @JsonAdapter(ItemClassificationEnum.Adapter.class)
  public enum ItemClassificationEnum {
    @SerializedName("BASE_PRODUCT")
    BASE_PRODUCT("BASE_PRODUCT"),
    @SerializedName("OTHER")
    OTHER("OTHER"),
    @SerializedName("PRODUCT_BUNDLE")
    PRODUCT_BUNDLE("PRODUCT_BUNDLE"),
    @SerializedName("VARIATION_PARENT")
    VARIATION_PARENT("VARIATION_PARENT");

    private String value;

    ItemClassificationEnum(String value) {
      this.value = value;
    }
    public String getValue() {
      return value;
    }

    @Override
    public String toString() {
      return String.valueOf(value);
    }
    public static ItemClassificationEnum fromValue(String input) {
      for (ItemClassificationEnum b : ItemClassificationEnum.values()) {
        if (b.value.equals(input)) {
          return b;
        }
      }
      return null;
    }
    public static class Adapter extends TypeAdapter<ItemClassificationEnum> {
      @Override
      public void write(final JsonWriter jsonWriter, final ItemClassificationEnum enumeration) throws IOException {
        jsonWriter.value(String.valueOf(enumeration.getValue()));
      }

      @Override
      public ItemClassificationEnum read(final JsonReader jsonReader) throws IOException {
        Object value = jsonReader.nextString();
        return ItemClassificationEnum.fromValue((String)(value));
      }
    }
  }  @SerializedName("itemClassification")
  private ItemClassificationEnum itemClassification = null;

  @SerializedName("itemName")
  private String itemName = null;

  @SerializedName("manufacturer")
  private String manufacturer = null;

  @SerializedName("memorabilia")
  private Boolean memorabilia = null;

  @SerializedName("modelNumber")
  private String modelNumber = null;

  @SerializedName("packageQuantity")
  private Integer packageQuantity = null;

  @SerializedName("partNumber")
  private String partNumber = null;

  @SerializedName("releaseDate")
  private LocalDate releaseDate = null;

  @SerializedName("size")
  private String size = null;

  @SerializedName("style")
  private String style = null;

  @SerializedName("tradeInEligible")
  private Boolean tradeInEligible = null;

  @SerializedName("websiteDisplayGroup")
  private String websiteDisplayGroup = null;

  @SerializedName("websiteDisplayGroupName")
  private String websiteDisplayGroupName = null;

  public ItemSummaryByMarketplace marketplaceId(String marketplaceId) {
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

  public ItemSummaryByMarketplace adultProduct(Boolean adultProduct) {
    this.adultProduct = adultProduct;
    return this;
  }

   /**
   * Identifies an Amazon catalog item is intended for an adult audience or is sexual in nature.
   * @return adultProduct
  **/
  @Schema(description = "Identifies an Amazon catalog item is intended for an adult audience or is sexual in nature.")
  public Boolean isAdultProduct() {
    return adultProduct;
  }

  public void setAdultProduct(Boolean adultProduct) {
    this.adultProduct = adultProduct;
  }

  public ItemSummaryByMarketplace autographed(Boolean autographed) {
    this.autographed = autographed;
    return this;
  }

   /**
   * Identifies an Amazon catalog item is autographed by a player or celebrity.
   * @return autographed
  **/
  @Schema(description = "Identifies an Amazon catalog item is autographed by a player or celebrity.")
  public Boolean isAutographed() {
    return autographed;
  }

  public void setAutographed(Boolean autographed) {
    this.autographed = autographed;
  }

  public ItemSummaryByMarketplace brand(String brand) {
    this.brand = brand;
    return this;
  }

   /**
   * Name of the brand associated with an Amazon catalog item.
   * @return brand
  **/
  @Schema(description = "Name of the brand associated with an Amazon catalog item.")
  public String getBrand() {
    return brand;
  }

  public void setBrand(String brand) {
    this.brand = brand;
  }

  public ItemSummaryByMarketplace browseClassification(ItemBrowseClassification browseClassification) {
    this.browseClassification = browseClassification;
    return this;
  }

   /**
   * Get browseClassification
   * @return browseClassification
  **/
  @Schema(description = "")
  public ItemBrowseClassification getBrowseClassification() {
    return browseClassification;
  }

  public void setBrowseClassification(ItemBrowseClassification browseClassification) {
    this.browseClassification = browseClassification;
  }

  public ItemSummaryByMarketplace color(String color) {
    this.color = color;
    return this;
  }

   /**
   * Name of the color associated with an Amazon catalog item.
   * @return color
  **/
  @Schema(description = "Name of the color associated with an Amazon catalog item.")
  public String getColor() {
    return color;
  }

  public void setColor(String color) {
    this.color = color;
  }

  public ItemSummaryByMarketplace contributors(List<ItemContributor> contributors) {
    this.contributors = contributors;
    return this;
  }

  public ItemSummaryByMarketplace addContributorsItem(ItemContributor contributorsItem) {
    if (this.contributors == null) {
      this.contributors = new ArrayList<ItemContributor>();
    }
    this.contributors.add(contributorsItem);
    return this;
  }

   /**
   * Individual contributors to the creation of an item, such as the authors or actors.
   * @return contributors
  **/
  @Schema(description = "Individual contributors to the creation of an item, such as the authors or actors.")
  public List<ItemContributor> getContributors() {
    return contributors;
  }

  public void setContributors(List<ItemContributor> contributors) {
    this.contributors = contributors;
  }

  public ItemSummaryByMarketplace itemClassification(ItemClassificationEnum itemClassification) {
    this.itemClassification = itemClassification;
    return this;
  }

   /**
   * Classification type associated with the Amazon catalog item.
   * @return itemClassification
  **/
  @Schema(description = "Classification type associated with the Amazon catalog item.")
  public ItemClassificationEnum getItemClassification() {
    return itemClassification;
  }

  public void setItemClassification(ItemClassificationEnum itemClassification) {
    this.itemClassification = itemClassification;
  }

  public ItemSummaryByMarketplace itemName(String itemName) {
    this.itemName = itemName;
    return this;
  }

   /**
   * Name, or title, associated with an Amazon catalog item.
   * @return itemName
  **/
  @Schema(description = "Name, or title, associated with an Amazon catalog item.")
  public String getItemName() {
    return itemName;
  }

  public void setItemName(String itemName) {
    this.itemName = itemName;
  }

  public ItemSummaryByMarketplace manufacturer(String manufacturer) {
    this.manufacturer = manufacturer;
    return this;
  }

   /**
   * Name of the manufacturer associated with an Amazon catalog item.
   * @return manufacturer
  **/
  @Schema(description = "Name of the manufacturer associated with an Amazon catalog item.")
  public String getManufacturer() {
    return manufacturer;
  }

  public void setManufacturer(String manufacturer) {
    this.manufacturer = manufacturer;
  }

  public ItemSummaryByMarketplace memorabilia(Boolean memorabilia) {
    this.memorabilia = memorabilia;
    return this;
  }

   /**
   * Identifies an Amazon catalog item is memorabilia valued for its connection with historical events, culture, or entertainment.
   * @return memorabilia
  **/
  @Schema(description = "Identifies an Amazon catalog item is memorabilia valued for its connection with historical events, culture, or entertainment.")
  public Boolean isMemorabilia() {
    return memorabilia;
  }

  public void setMemorabilia(Boolean memorabilia) {
    this.memorabilia = memorabilia;
  }

  public ItemSummaryByMarketplace modelNumber(String modelNumber) {
    this.modelNumber = modelNumber;
    return this;
  }

   /**
   * Model number associated with an Amazon catalog item.
   * @return modelNumber
  **/
  @Schema(description = "Model number associated with an Amazon catalog item.")
  public String getModelNumber() {
    return modelNumber;
  }

  public void setModelNumber(String modelNumber) {
    this.modelNumber = modelNumber;
  }

  public ItemSummaryByMarketplace packageQuantity(Integer packageQuantity) {
    this.packageQuantity = packageQuantity;
    return this;
  }

   /**
   * Quantity of an Amazon catalog item in one package.
   * @return packageQuantity
  **/
  @Schema(description = "Quantity of an Amazon catalog item in one package.")
  public Integer getPackageQuantity() {
    return packageQuantity;
  }

  public void setPackageQuantity(Integer packageQuantity) {
    this.packageQuantity = packageQuantity;
  }

  public ItemSummaryByMarketplace partNumber(String partNumber) {
    this.partNumber = partNumber;
    return this;
  }

   /**
   * Part number associated with an Amazon catalog item.
   * @return partNumber
  **/
  @Schema(description = "Part number associated with an Amazon catalog item.")
  public String getPartNumber() {
    return partNumber;
  }

  public void setPartNumber(String partNumber) {
    this.partNumber = partNumber;
  }

  public ItemSummaryByMarketplace releaseDate(LocalDate releaseDate) {
    this.releaseDate = releaseDate;
    return this;
  }

   /**
   * First date on which an Amazon catalog item is shippable to customers.
   * @return releaseDate
  **/
  @Schema(description = "First date on which an Amazon catalog item is shippable to customers.")
  public LocalDate getReleaseDate() {
    return releaseDate;
  }

  public void setReleaseDate(LocalDate releaseDate) {
    this.releaseDate = releaseDate;
  }

  public ItemSummaryByMarketplace size(String size) {
    this.size = size;
    return this;
  }

   /**
   * Name of the size associated with an Amazon catalog item.
   * @return size
  **/
  @Schema(description = "Name of the size associated with an Amazon catalog item.")
  public String getSize() {
    return size;
  }

  public void setSize(String size) {
    this.size = size;
  }

  public ItemSummaryByMarketplace style(String style) {
    this.style = style;
    return this;
  }

   /**
   * Name of the style associated with an Amazon catalog item.
   * @return style
  **/
  @Schema(description = "Name of the style associated with an Amazon catalog item.")
  public String getStyle() {
    return style;
  }

  public void setStyle(String style) {
    this.style = style;
  }

  public ItemSummaryByMarketplace tradeInEligible(Boolean tradeInEligible) {
    this.tradeInEligible = tradeInEligible;
    return this;
  }

   /**
   * Identifies an Amazon catalog item is eligible for trade-in.
   * @return tradeInEligible
  **/
  @Schema(description = "Identifies an Amazon catalog item is eligible for trade-in.")
  public Boolean isTradeInEligible() {
    return tradeInEligible;
  }

  public void setTradeInEligible(Boolean tradeInEligible) {
    this.tradeInEligible = tradeInEligible;
  }

  public ItemSummaryByMarketplace websiteDisplayGroup(String websiteDisplayGroup) {
    this.websiteDisplayGroup = websiteDisplayGroup;
    return this;
  }

   /**
   * Identifier of the website display group associated with an Amazon catalog item.
   * @return websiteDisplayGroup
  **/
  @Schema(description = "Identifier of the website display group associated with an Amazon catalog item.")
  public String getWebsiteDisplayGroup() {
    return websiteDisplayGroup;
  }

  public void setWebsiteDisplayGroup(String websiteDisplayGroup) {
    this.websiteDisplayGroup = websiteDisplayGroup;
  }

  public ItemSummaryByMarketplace websiteDisplayGroupName(String websiteDisplayGroupName) {
    this.websiteDisplayGroupName = websiteDisplayGroupName;
    return this;
  }

   /**
   * Display name of the website display group associated with an Amazon catalog item.
   * @return websiteDisplayGroupName
  **/
  @Schema(description = "Display name of the website display group associated with an Amazon catalog item.")
  public String getWebsiteDisplayGroupName() {
    return websiteDisplayGroupName;
  }

  public void setWebsiteDisplayGroupName(String websiteDisplayGroupName) {
    this.websiteDisplayGroupName = websiteDisplayGroupName;
  }


  @Override
  public boolean equals(java.lang.Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    ItemSummaryByMarketplace itemSummaryByMarketplace = (ItemSummaryByMarketplace) o;
    return Objects.equals(this.marketplaceId, itemSummaryByMarketplace.marketplaceId) &&
        Objects.equals(this.adultProduct, itemSummaryByMarketplace.adultProduct) &&
        Objects.equals(this.autographed, itemSummaryByMarketplace.autographed) &&
        Objects.equals(this.brand, itemSummaryByMarketplace.brand) &&
        Objects.equals(this.browseClassification, itemSummaryByMarketplace.browseClassification) &&
        Objects.equals(this.color, itemSummaryByMarketplace.color) &&
        Objects.equals(this.contributors, itemSummaryByMarketplace.contributors) &&
        Objects.equals(this.itemClassification, itemSummaryByMarketplace.itemClassification) &&
        Objects.equals(this.itemName, itemSummaryByMarketplace.itemName) &&
        Objects.equals(this.manufacturer, itemSummaryByMarketplace.manufacturer) &&
        Objects.equals(this.memorabilia, itemSummaryByMarketplace.memorabilia) &&
        Objects.equals(this.modelNumber, itemSummaryByMarketplace.modelNumber) &&
        Objects.equals(this.packageQuantity, itemSummaryByMarketplace.packageQuantity) &&
        Objects.equals(this.partNumber, itemSummaryByMarketplace.partNumber) &&
        Objects.equals(this.releaseDate, itemSummaryByMarketplace.releaseDate) &&
        Objects.equals(this.size, itemSummaryByMarketplace.size) &&
        Objects.equals(this.style, itemSummaryByMarketplace.style) &&
        Objects.equals(this.tradeInEligible, itemSummaryByMarketplace.tradeInEligible) &&
        Objects.equals(this.websiteDisplayGroup, itemSummaryByMarketplace.websiteDisplayGroup) &&
        Objects.equals(this.websiteDisplayGroupName, itemSummaryByMarketplace.websiteDisplayGroupName);
  }

  @Override
  public int hashCode() {
    return Objects.hash(marketplaceId, adultProduct, autographed, brand, browseClassification, color, contributors, itemClassification, itemName, manufacturer, memorabilia, modelNumber, packageQuantity, partNumber, releaseDate, size, style, tradeInEligible, websiteDisplayGroup, websiteDisplayGroupName);
  }


  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class ItemSummaryByMarketplace {\n");
    
    sb.append("    marketplaceId: ").append(toIndentedString(marketplaceId)).append("\n");
    sb.append("    adultProduct: ").append(toIndentedString(adultProduct)).append("\n");
    sb.append("    autographed: ").append(toIndentedString(autographed)).append("\n");
    sb.append("    brand: ").append(toIndentedString(brand)).append("\n");
    sb.append("    browseClassification: ").append(toIndentedString(browseClassification)).append("\n");
    sb.append("    color: ").append(toIndentedString(color)).append("\n");
    sb.append("    contributors: ").append(toIndentedString(contributors)).append("\n");
    sb.append("    itemClassification: ").append(toIndentedString(itemClassification)).append("\n");
    sb.append("    itemName: ").append(toIndentedString(itemName)).append("\n");
    sb.append("    manufacturer: ").append(toIndentedString(manufacturer)).append("\n");
    sb.append("    memorabilia: ").append(toIndentedString(memorabilia)).append("\n");
    sb.append("    modelNumber: ").append(toIndentedString(modelNumber)).append("\n");
    sb.append("    packageQuantity: ").append(toIndentedString(packageQuantity)).append("\n");
    sb.append("    partNumber: ").append(toIndentedString(partNumber)).append("\n");
    sb.append("    releaseDate: ").append(toIndentedString(releaseDate)).append("\n");
    sb.append("    size: ").append(toIndentedString(size)).append("\n");
    sb.append("    style: ").append(toIndentedString(style)).append("\n");
    sb.append("    tradeInEligible: ").append(toIndentedString(tradeInEligible)).append("\n");
    sb.append("    websiteDisplayGroup: ").append(toIndentedString(websiteDisplayGroup)).append("\n");
    sb.append("    websiteDisplayGroupName: ").append(toIndentedString(websiteDisplayGroupName)).append("\n");
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
