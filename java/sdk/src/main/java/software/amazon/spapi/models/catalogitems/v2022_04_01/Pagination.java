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
/**
 * Pagination occurs when a request produces a response that exceeds the &#x60;pageSize&#x60;. This means that the response is divided into individual pages. To retrieve the next page or the previous page of results, you must pass the &#x60;nextToken&#x60; value or the &#x60;previousToken&#x60; value as the &#x60;pageToken&#x60; parameter in the next request. There is no &#x60;nextToken&#x60; in the pagination object on the last page.
 */
@Schema(description = "Pagination occurs when a request produces a response that exceeds the `pageSize`. This means that the response is divided into individual pages. To retrieve the next page or the previous page of results, you must pass the `nextToken` value or the `previousToken` value as the `pageToken` parameter in the next request. There is no `nextToken` in the pagination object on the last page.")


public class Pagination {
  @SerializedName("nextToken")
  private String nextToken = null;

  @SerializedName("previousToken")
  private String previousToken = null;

  public Pagination nextToken(String nextToken) {
    this.nextToken = nextToken;
    return this;
  }

   /**
   * A token that you can use to retrieve the next page.
   * @return nextToken
  **/
  @Schema(description = "A token that you can use to retrieve the next page.")
  public String getNextToken() {
    return nextToken;
  }

  public void setNextToken(String nextToken) {
    this.nextToken = nextToken;
  }

  public Pagination previousToken(String previousToken) {
    this.previousToken = previousToken;
    return this;
  }

   /**
   * A token that you can use to retrieve the previous page.
   * @return previousToken
  **/
  @Schema(description = "A token that you can use to retrieve the previous page.")
  public String getPreviousToken() {
    return previousToken;
  }

  public void setPreviousToken(String previousToken) {
    this.previousToken = previousToken;
  }


  @Override
  public boolean equals(java.lang.Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    Pagination pagination = (Pagination) o;
    return Objects.equals(this.nextToken, pagination.nextToken) &&
        Objects.equals(this.previousToken, pagination.previousToken);
  }

  @Override
  public int hashCode() {
    return Objects.hash(nextToken, previousToken);
  }


  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class Pagination {\n");
    
    sb.append("    nextToken: ").append(toIndentedString(nextToken)).append("\n");
    sb.append("    previousToken: ").append(toIndentedString(previousToken)).append("\n");
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
