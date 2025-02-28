/*
 * The Selling Partner API for Finances
 * The Selling Partner API for Finances helps you obtain financial information relevant to a seller's business. You can obtain financial events for a given order or date range without having to wait until a statement period closes.
 *
 * OpenAPI spec version: 2024-06-19
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */

package software.amazon.spapi.models.finances.v2024_06_19;

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
 * Additional information related to the product.
 */
@Schema(description = "Additional information related to the product.")


public class ProductContext {
  @SerializedName("asin")
  private String asin = null;

  @SerializedName("sku")
  private String sku = null;

  @SerializedName("quantityShipped")
  private Integer quantityShipped = null;

  @SerializedName("fulfillmentNetwork")
  private String fulfillmentNetwork = null;

  public ProductContext asin(String asin) {
    this.asin = asin;
    return this;
  }

   /**
   * Amazon Standard Identification Number (ASIN) of the item.
   * @return asin
  **/
  @Schema(description = "Amazon Standard Identification Number (ASIN) of the item.")
  public String getAsin() {
    return asin;
  }

  public void setAsin(String asin) {
    this.asin = asin;
  }

  public ProductContext sku(String sku) {
    this.sku = sku;
    return this;
  }

   /**
   * Stock keeping unit (SKU) of the item.
   * @return sku
  **/
  @Schema(description = "Stock keeping unit (SKU) of the item.")
  public String getSku() {
    return sku;
  }

  public void setSku(String sku) {
    this.sku = sku;
  }

  public ProductContext quantityShipped(Integer quantityShipped) {
    this.quantityShipped = quantityShipped;
    return this;
  }

   /**
   * Quantity of the item shipped.
   * @return quantityShipped
  **/
  @Schema(description = "Quantity of the item shipped.")
  public Integer getQuantityShipped() {
    return quantityShipped;
  }

  public void setQuantityShipped(Integer quantityShipped) {
    this.quantityShipped = quantityShipped;
  }

  public ProductContext fulfillmentNetwork(String fulfillmentNetwork) {
    this.fulfillmentNetwork = fulfillmentNetwork;
    return this;
  }

   /**
   * Fulfillment network of the item.
   * @return fulfillmentNetwork
  **/
  @Schema(description = "Fulfillment network of the item.")
  public String getFulfillmentNetwork() {
    return fulfillmentNetwork;
  }

  public void setFulfillmentNetwork(String fulfillmentNetwork) {
    this.fulfillmentNetwork = fulfillmentNetwork;
  }


  @Override
  public boolean equals(java.lang.Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    ProductContext productContext = (ProductContext) o;
    return Objects.equals(this.asin, productContext.asin) &&
        Objects.equals(this.sku, productContext.sku) &&
        Objects.equals(this.quantityShipped, productContext.quantityShipped) &&
        Objects.equals(this.fulfillmentNetwork, productContext.fulfillmentNetwork);
  }

  @Override
  public int hashCode() {
    return Objects.hash(asin, sku, quantityShipped, fulfillmentNetwork);
  }


  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class ProductContext {\n");
    
    sb.append("    asin: ").append(toIndentedString(asin)).append("\n");
    sb.append("    sku: ").append(toIndentedString(sku)).append("\n");
    sb.append("    quantityShipped: ").append(toIndentedString(quantityShipped)).append("\n");
    sb.append("    fulfillmentNetwork: ").append(toIndentedString(fulfillmentNetwork)).append("\n");
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
