/*
 * Selling Partner API for Data Kiosk
 * The Selling Partner API for Data Kiosk lets you submit GraphQL queries from a variety of schemas to help selling partners manage their businesses.
 *
 * OpenAPI spec version: 2023-11-15
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
/**
 * When a query produces results that are not included in the data document, pagination occurs. This means the results are divided into pages. To retrieve the next page, you must pass a &#x60;CreateQuerySpecification&#x60; object with &#x60;paginationToken&#x60; set to this object&#x27;s &#x60;nextToken&#x60; and with &#x60;query&#x60; set to this object&#x27;s &#x60;query&#x60; in the subsequent &#x60;createQuery&#x60; request. When there are no more pages to fetch, the &#x60;nextToken&#x60; field will be absent.
 */
@Schema(description = "When a query produces results that are not included in the data document, pagination occurs. This means the results are divided into pages. To retrieve the next page, you must pass a `CreateQuerySpecification` object with `paginationToken` set to this object's `nextToken` and with `query` set to this object's `query` in the subsequent `createQuery` request. When there are no more pages to fetch, the `nextToken` field will be absent.")
@javax.annotation.Generated(value = "io.swagger.codegen.v3.generators.java.JavaClientCodegen", date = "2024-11-14T09:08:08.039570Z[Etc/UTC]")

public class QueryPagination {
  @SerializedName("nextToken")
  private String nextToken = null;

  public QueryPagination nextToken(String nextToken) {
    this.nextToken = nextToken;
    return this;
  }

   /**
   * A token that can be used to fetch the next page of results.
   * @return nextToken
  **/
  @Schema(description = "A token that can be used to fetch the next page of results.")
  public String getNextToken() {
    return nextToken;
  }

  public void setNextToken(String nextToken) {
    this.nextToken = nextToken;
  }


  @Override
  public boolean equals(java.lang.Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    QueryPagination queryPagination = (QueryPagination) o;
    return Objects.equals(this.nextToken, queryPagination.nextToken);
  }

  @Override
  public int hashCode() {
    return Objects.hash(nextToken);
  }


  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class QueryPagination {\n");
    
    sb.append("    nextToken: ").append(toIndentedString(nextToken)).append("\n");
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
