/*
 * Selling Partner API for Listings Restrictions
 * The Selling Partner API for Listings Restrictions provides programmatic access to restrictions on Amazon catalog listings.  For more information, see the [Listings Restrictions API Use Case Guide](doc:listings-restrictions-api-v2021-08-01-use-case-guide).
 *
 * OpenAPI spec version: 2021-08-01
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */

package com.amazon.SellingPartnerAPI.models.listings.restrictions.v2021_08_01;

import java.util.Objects;
import java.util.Arrays;
import com.amazon.SellingPartnerAPI.models.listings.restrictions.v2021_08_01.Link;
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
 * A reason for the restriction, including path forward links that may allow Selling Partners to remove the restriction, if available.
 */
@Schema(description = "A reason for the restriction, including path forward links that may allow Selling Partners to remove the restriction, if available.")


public class Reason {
  @SerializedName("message")
  private String message = null;

  /**
   * A code indicating why the listing is restricted.
   */
  @JsonAdapter(ReasonCodeEnum.Adapter.class)
  public enum ReasonCodeEnum {
    @SerializedName("APPROVAL_REQUIRED")
    APPROVAL_REQUIRED("APPROVAL_REQUIRED"),
    @SerializedName("ASIN_NOT_FOUND")
    ASIN_NOT_FOUND("ASIN_NOT_FOUND"),
    @SerializedName("NOT_ELIGIBLE")
    NOT_ELIGIBLE("NOT_ELIGIBLE");

    private String value;

    ReasonCodeEnum(String value) {
      this.value = value;
    }
    public String getValue() {
      return value;
    }

    @Override
    public String toString() {
      return String.valueOf(value);
    }
    public static ReasonCodeEnum fromValue(String input) {
      for (ReasonCodeEnum b : ReasonCodeEnum.values()) {
        if (b.value.equals(input)) {
          return b;
        }
      }
      return null;
    }
    public static class Adapter extends TypeAdapter<ReasonCodeEnum> {
      @Override
      public void write(final JsonWriter jsonWriter, final ReasonCodeEnum enumeration) throws IOException {
        jsonWriter.value(String.valueOf(enumeration.getValue()));
      }

      @Override
      public ReasonCodeEnum read(final JsonReader jsonReader) throws IOException {
        Object value = jsonReader.nextString();
        return ReasonCodeEnum.fromValue((String)(value));
      }
    }
  }  @SerializedName("reasonCode")
  private ReasonCodeEnum reasonCode = null;

  @SerializedName("links")
  private List<Link> links = null;

  public Reason message(String message) {
    this.message = message;
    return this;
  }

   /**
   * A message describing the reason for the restriction.
   * @return message
  **/
  @Schema(required = true, description = "A message describing the reason for the restriction.")
  public String getMessage() {
    return message;
  }

  public void setMessage(String message) {
    this.message = message;
  }

  public Reason reasonCode(ReasonCodeEnum reasonCode) {
    this.reasonCode = reasonCode;
    return this;
  }

   /**
   * A code indicating why the listing is restricted.
   * @return reasonCode
  **/
  @Schema(description = "A code indicating why the listing is restricted.")
  public ReasonCodeEnum getReasonCode() {
    return reasonCode;
  }

  public void setReasonCode(ReasonCodeEnum reasonCode) {
    this.reasonCode = reasonCode;
  }

  public Reason links(List<Link> links) {
    this.links = links;
    return this;
  }

  public Reason addLinksItem(Link linksItem) {
    if (this.links == null) {
      this.links = new ArrayList<Link>();
    }
    this.links.add(linksItem);
    return this;
  }

   /**
   * A list of path forward links that may allow Selling Partners to remove the restriction.
   * @return links
  **/
  @Schema(description = "A list of path forward links that may allow Selling Partners to remove the restriction.")
  public List<Link> getLinks() {
    return links;
  }

  public void setLinks(List<Link> links) {
    this.links = links;
  }


  @Override
  public boolean equals(java.lang.Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    Reason reason = (Reason) o;
    return Objects.equals(this.message, reason.message) &&
        Objects.equals(this.reasonCode, reason.reasonCode) &&
        Objects.equals(this.links, reason.links);
  }

  @Override
  public int hashCode() {
    return Objects.hash(message, reasonCode, links);
  }


  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class Reason {\n");
    
    sb.append("    message: ").append(toIndentedString(message)).append("\n");
    sb.append("    reasonCode: ").append(toIndentedString(reasonCode)).append("\n");
    sb.append("    links: ").append(toIndentedString(links)).append("\n");
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
