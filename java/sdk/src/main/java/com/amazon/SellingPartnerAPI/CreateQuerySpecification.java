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
 * Information required to create the query.
 */
@Schema(description = "Information required to create the query.")
@javax.annotation.Generated(value = "io.swagger.codegen.v3.generators.java.JavaClientCodegen", date = "2024-11-14T09:08:08.039570Z[Etc/UTC]")

public class CreateQuerySpecification {
  @SerializedName("query")
  private String query = null;

  @SerializedName("paginationToken")
  private String paginationToken = null;

  public CreateQuerySpecification query(String query) {
    this.query = query;
    return this;
  }

   /**
   * The GraphQL query to submit. A query must be at most 8000 characters after unnecessary whitespace is removed.
   * @return query
  **/
  @Schema(required = true, description = "The GraphQL query to submit. A query must be at most 8000 characters after unnecessary whitespace is removed.")
  public String getQuery() {
    return query;
  }

  public void setQuery(String query) {
    this.query = query;
  }

  public CreateQuerySpecification paginationToken(String paginationToken) {
    this.paginationToken = paginationToken;
    return this;
  }

   /**
   * A token to fetch a certain page of query results when there are multiple pages of query results available. The value of this token must be fetched from the &#x60;pagination.nextToken&#x60; field of the &#x60;Query&#x60; object, and the &#x60;query&#x60; field for this object must also be set to the &#x60;query&#x60; field of the same &#x60;Query&#x60; object. A &#x60;Query&#x60; object can be retrieved from either the &#x60;getQueries&#x60; or &#x60;getQuery&#x60; operation. In the absence of this token value, the first page of query results will be requested.
   * @return paginationToken
  **/
  @Schema(description = "A token to fetch a certain page of query results when there are multiple pages of query results available. The value of this token must be fetched from the `pagination.nextToken` field of the `Query` object, and the `query` field for this object must also be set to the `query` field of the same `Query` object. A `Query` object can be retrieved from either the `getQueries` or `getQuery` operation. In the absence of this token value, the first page of query results will be requested.")
  public String getPaginationToken() {
    return paginationToken;
  }

  public void setPaginationToken(String paginationToken) {
    this.paginationToken = paginationToken;
  }


  @Override
  public boolean equals(java.lang.Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    CreateQuerySpecification createQuerySpecification = (CreateQuerySpecification) o;
    return Objects.equals(this.query, createQuerySpecification.query) &&
        Objects.equals(this.paginationToken, createQuerySpecification.paginationToken);
  }

  @Override
  public int hashCode() {
    return Objects.hash(query, paginationToken);
  }


  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class CreateQuerySpecification {\n");
    
    sb.append("    query: ").append(toIndentedString(query)).append("\n");
    sb.append("    paginationToken: ").append(toIndentedString(paginationToken)).append("\n");
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
