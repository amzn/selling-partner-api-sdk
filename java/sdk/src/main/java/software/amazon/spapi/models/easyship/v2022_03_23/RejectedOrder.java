/*
 * Selling Partner API for Easy Ship
 * Use the Selling Partner API for Easy Ship to build applications for sellers to manage and ship Amazon Easy Ship orders. With this API, you can get available time slots, schedule and reschedule Easy Ship orders, and print shipping labels, invoices, and warranties. To review the differences in Easy Ship operations by marketplace, refer to [Marketplace support](https://developer-docs.amazon.com/sp-api/docs/easyship-api-v2022-03-23-use-case-guide#marketplace-support).
 *
 * OpenAPI spec version: 2022-03-23
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */

package software.amazon.spapi.models.easyship.v2022_03_23;

import java.util.Objects;
import java.util.Arrays;
import com.google.gson.TypeAdapter;
import com.google.gson.annotations.JsonAdapter;
import com.google.gson.annotations.SerializedName;
import com.google.gson.stream.JsonReader;
import com.google.gson.stream.JsonWriter;
import io.swagger.v3.oas.annotations.media.Schema;
import java.io.IOException;
import software.amazon.spapi.models.easyship.v2022_03_23.Error;
/**
 * A order which we couldn&#x27;t schedule on your behalf. It contains its id, and information on the error.
 */
@Schema(description = "A order which we couldn't schedule on your behalf. It contains its id, and information on the error.")


public class RejectedOrder {
  @SerializedName("amazonOrderId")
  private String amazonOrderId = null;

  @SerializedName("error")
  private Error error = null;

  public RejectedOrder amazonOrderId(String amazonOrderId) {
    this.amazonOrderId = amazonOrderId;
    return this;
  }

   /**
   * Get amazonOrderId
   * @return amazonOrderId
  **/
  @Schema(required = true, description = "")
  public String getAmazonOrderId() {
    return amazonOrderId;
  }

  public void setAmazonOrderId(String amazonOrderId) {
    this.amazonOrderId = amazonOrderId;
  }

  public RejectedOrder error(Error error) {
    this.error = error;
    return this;
  }

   /**
   * Get error
   * @return error
  **/
  @Schema(description = "")
  public Error getError() {
    return error;
  }

  public void setError(Error error) {
    this.error = error;
  }


  @Override
  public boolean equals(java.lang.Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    RejectedOrder rejectedOrder = (RejectedOrder) o;
    return Objects.equals(this.amazonOrderId, rejectedOrder.amazonOrderId) &&
        Objects.equals(this.error, rejectedOrder.error);
  }

  @Override
  public int hashCode() {
    return Objects.hash(amazonOrderId, error);
  }


  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class RejectedOrder {\n");
    
    sb.append("    amazonOrderId: ").append(toIndentedString(amazonOrderId)).append("\n");
    sb.append("    error: ").append(toIndentedString(error)).append("\n");
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
