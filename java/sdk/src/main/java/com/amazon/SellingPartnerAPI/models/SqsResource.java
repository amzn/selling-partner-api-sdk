/*
 * Selling Partner API for Notifications
 * The Selling Partner API for Notifications lets you subscribe to notifications that are relevant to a selling partner's business. Using this API you can create a destination to receive notifications, subscribe to notifications, delete notification subscriptions, and more.  For more information, refer to the [Notifications Use Case Guide](https://developer-docs.amazon.com/sp-api/docs/notifications-api-v1-use-case-guide).
 *
 * OpenAPI spec version: v1
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */

package com.amazon.SellingPartnerAPI.models;

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
 * The information required to create an Amazon Simple Queue Service (Amazon SQS) queue destination.
 */
@Schema(description = "The information required to create an Amazon Simple Queue Service (Amazon SQS) queue destination.")


public class SqsResource {
  @SerializedName("arn")
  private String arn = null;

  public SqsResource arn(String arn) {
    this.arn = arn;
    return this;
  }

   /**
   * The Amazon Resource Name (ARN) associated with the SQS queue.
   * @return arn
  **/
  @Schema(required = true, description = "The Amazon Resource Name (ARN) associated with the SQS queue.")
  public String getArn() {
    return arn;
  }

  public void setArn(String arn) {
    this.arn = arn;
  }


  @Override
  public boolean equals(java.lang.Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    SqsResource sqsResource = (SqsResource) o;
    return Objects.equals(this.arn, sqsResource.arn);
  }

  @Override
  public int hashCode() {
    return Objects.hash(arn);
  }


  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class SqsResource {\n");
    
    sb.append("    arn: ").append(toIndentedString(arn)).append("\n");
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
