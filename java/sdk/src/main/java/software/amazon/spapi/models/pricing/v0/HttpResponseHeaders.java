/*
 * Selling Partner API for Pricing
 * The Selling Partner API for Pricing helps you programmatically retrieve product pricing and offer information for Amazon Marketplace products.
 *
 * OpenAPI spec version: v0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */

package software.amazon.spapi.models.pricing.v0;

import java.util.Objects;
import java.util.Arrays;
import com.google.gson.TypeAdapter;
import com.google.gson.annotations.JsonAdapter;
import com.google.gson.annotations.SerializedName;
import com.google.gson.stream.JsonReader;
import com.google.gson.stream.JsonWriter;
import io.swagger.v3.oas.annotations.media.Schema;
import java.io.IOException;
import java.util.HashMap;
import java.util.Map;
/**
 * A mapping of additional HTTP headers to send/receive for the individual batch request.
 */
@Schema(description = "A mapping of additional HTTP headers to send/receive for the individual batch request.")


public class HttpResponseHeaders extends HashMap<String, String> {
  @SerializedName("Date")
  private String date = null;

  @SerializedName("x-amzn-RequestId")
  private String xAmznRequestId = null;

  public HttpResponseHeaders date(String date) {
    this.date = date;
    return this;
  }

   /**
   * The timestamp that the API request was received.  For more information, consult [RFC 2616 Section 14](https://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html).
   * @return date
  **/
  @Schema(description = "The timestamp that the API request was received.  For more information, consult [RFC 2616 Section 14](https://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html).")
  public String getDate() {
    return date;
  }

  public void setDate(String date) {
    this.date = date;
  }

  public HttpResponseHeaders xAmznRequestId(String xAmznRequestId) {
    this.xAmznRequestId = xAmznRequestId;
    return this;
  }

   /**
   * Unique request reference identifier.
   * @return xAmznRequestId
  **/
  @Schema(description = "Unique request reference identifier.")
  public String getXAmznRequestId() {
    return xAmznRequestId;
  }

  public void setXAmznRequestId(String xAmznRequestId) {
    this.xAmznRequestId = xAmznRequestId;
  }


  @Override
  public boolean equals(java.lang.Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    HttpResponseHeaders httpResponseHeaders = (HttpResponseHeaders) o;
    return Objects.equals(this.date, httpResponseHeaders.date) &&
        Objects.equals(this.xAmznRequestId, httpResponseHeaders.xAmznRequestId) &&
        super.equals(o);
  }

  @Override
  public int hashCode() {
    return Objects.hash(date, xAmznRequestId, super.hashCode());
  }


  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class HttpResponseHeaders {\n");
    sb.append("    ").append(toIndentedString(super.toString())).append("\n");
    sb.append("    date: ").append(toIndentedString(date)).append("\n");
    sb.append("    xAmznRequestId: ").append(toIndentedString(xAmznRequestId)).append("\n");
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
