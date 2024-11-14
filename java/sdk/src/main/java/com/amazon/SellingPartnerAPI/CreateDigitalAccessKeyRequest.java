/*
 * Selling Partner API for Messaging
 * With the Messaging API you can build applications that send messages to buyers. You can get a list of message types that are available for an order that you specify, then call an operation that sends a message to the buyer for that order. The Messaging API returns responses that are formed according to the <a href=https://tools.ietf.org/html/draft-kelly-json-hal-08>JSON Hypertext Application Language</a> (HAL) standard.
 *
 * OpenAPI spec version: v1
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */

package com.amazon.SellingPartnerAPI;

import java.util.Objects;
import java.util.Arrays;
import com.amazon.SellingPartnerAPI.Attachment;
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
 * The request schema for the createDigitalAccessKey operation.
 */
@Schema(description = "The request schema for the createDigitalAccessKey operation.")
@javax.annotation.Generated(value = "io.swagger.codegen.v3.generators.java.JavaClientCodegen", date = "2024-11-14T09:09:05.843732Z[Etc/UTC]")

public class CreateDigitalAccessKeyRequest {
  @SerializedName("text")
  private String text = null;

  @SerializedName("attachments")
  private List<Attachment> attachments = null;

  public CreateDigitalAccessKeyRequest text(String text) {
    this.text = text;
    return this;
  }

   /**
   * The text to be sent to the buyer. Only links related to the digital access key are allowed. Do not include HTML or email addresses. The text must be written in the buyer&#x27;s language of preference, which can be retrieved from the GetAttributes operation.
   * @return text
  **/
  @Schema(description = "The text to be sent to the buyer. Only links related to the digital access key are allowed. Do not include HTML or email addresses. The text must be written in the buyer's language of preference, which can be retrieved from the GetAttributes operation.")
  public String getText() {
    return text;
  }

  public void setText(String text) {
    this.text = text;
  }

  public CreateDigitalAccessKeyRequest attachments(List<Attachment> attachments) {
    this.attachments = attachments;
    return this;
  }

  public CreateDigitalAccessKeyRequest addAttachmentsItem(Attachment attachmentsItem) {
    if (this.attachments == null) {
      this.attachments = new ArrayList<Attachment>();
    }
    this.attachments.add(attachmentsItem);
    return this;
  }

   /**
   * Attachments to include in the message to the buyer.
   * @return attachments
  **/
  @Schema(description = "Attachments to include in the message to the buyer.")
  public List<Attachment> getAttachments() {
    return attachments;
  }

  public void setAttachments(List<Attachment> attachments) {
    this.attachments = attachments;
  }


  @Override
  public boolean equals(java.lang.Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    CreateDigitalAccessKeyRequest createDigitalAccessKeyRequest = (CreateDigitalAccessKeyRequest) o;
    return Objects.equals(this.text, createDigitalAccessKeyRequest.text) &&
        Objects.equals(this.attachments, createDigitalAccessKeyRequest.attachments);
  }

  @Override
  public int hashCode() {
    return Objects.hash(text, attachments);
  }


  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class CreateDigitalAccessKeyRequest {\n");
    
    sb.append("    text: ").append(toIndentedString(text)).append("\n");
    sb.append("    attachments: ").append(toIndentedString(attachments)).append("\n");
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
