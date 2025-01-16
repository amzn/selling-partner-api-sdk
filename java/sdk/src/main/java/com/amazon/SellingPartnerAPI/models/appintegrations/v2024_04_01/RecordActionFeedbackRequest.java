/*
 * The Selling Partner API for third party application integrations.
 * With the AppIntegrations API v2024-04-01, you can send notifications to Amazon Selling Partners and display the notifications in Seller Central.
 *
 * OpenAPI spec version: 2024-04-01
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */

package com.amazon.SellingPartnerAPI.models.appintegrations.v2024_04_01;

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
 * The request for the &#x60;recordActionFeedback&#x60; operation.
 */
@Schema(description = "The request for the `recordActionFeedback` operation.")


public class RecordActionFeedbackRequest {
  /**
   * The unique identifier for each notification status.
   */
  @JsonAdapter(FeedbackActionCodeEnum.Adapter.class)
  public enum FeedbackActionCodeEnum {
    @SerializedName("SELLER_ACTION_COMPLETED")
    SELLER_ACTION_COMPLETED("SELLER_ACTION_COMPLETED");

    private String value;

    FeedbackActionCodeEnum(String value) {
      this.value = value;
    }
    public String getValue() {
      return value;
    }

    @Override
    public String toString() {
      return String.valueOf(value);
    }
    public static FeedbackActionCodeEnum fromValue(String input) {
      for (FeedbackActionCodeEnum b : FeedbackActionCodeEnum.values()) {
        if (b.value.equals(input)) {
          return b;
        }
      }
      return null;
    }
    public static class Adapter extends TypeAdapter<FeedbackActionCodeEnum> {
      @Override
      public void write(final JsonWriter jsonWriter, final FeedbackActionCodeEnum enumeration) throws IOException {
        jsonWriter.value(String.valueOf(enumeration.getValue()));
      }

      @Override
      public FeedbackActionCodeEnum read(final JsonReader jsonReader) throws IOException {
        Object value = jsonReader.nextString();
        return FeedbackActionCodeEnum.fromValue((String)(value));
      }
    }
  }  @SerializedName("feedbackActionCode")
  private FeedbackActionCodeEnum feedbackActionCode = null;

  public RecordActionFeedbackRequest feedbackActionCode(FeedbackActionCodeEnum feedbackActionCode) {
    this.feedbackActionCode = feedbackActionCode;
    return this;
  }

   /**
   * The unique identifier for each notification status.
   * @return feedbackActionCode
  **/
  @Schema(required = true, description = "The unique identifier for each notification status.")
  public FeedbackActionCodeEnum getFeedbackActionCode() {
    return feedbackActionCode;
  }

  public void setFeedbackActionCode(FeedbackActionCodeEnum feedbackActionCode) {
    this.feedbackActionCode = feedbackActionCode;
  }


  @Override
  public boolean equals(java.lang.Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    RecordActionFeedbackRequest recordActionFeedbackRequest = (RecordActionFeedbackRequest) o;
    return Objects.equals(this.feedbackActionCode, recordActionFeedbackRequest.feedbackActionCode);
  }

  @Override
  public int hashCode() {
    return Objects.hash(feedbackActionCode);
  }


  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class RecordActionFeedbackRequest {\n");
    
    sb.append("    feedbackActionCode: ").append(toIndentedString(feedbackActionCode)).append("\n");
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
