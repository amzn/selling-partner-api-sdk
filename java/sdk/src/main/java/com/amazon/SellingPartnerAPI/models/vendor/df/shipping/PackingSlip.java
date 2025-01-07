/*
 * Selling Partner API for Direct Fulfillment Shipping
 * Use the Selling Partner API for Direct Fulfillment Shipping to access a direct fulfillment vendor's shipping data.
 *
 * OpenAPI spec version: 2021-12-28
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */

package com.amazon.SellingPartnerAPI.models.vendor.df.shipping;

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
 * Packing slip information.
 */
@Schema(description = "Packing slip information.")


public class PackingSlip {
  @SerializedName("purchaseOrderNumber")
  private String purchaseOrderNumber = null;

  @SerializedName("content")
  private String content = null;

  /**
   * The format of the file such as PDF, JPEG etc.
   */
  @JsonAdapter(ContentTypeEnum.Adapter.class)
  public enum ContentTypeEnum {
    @SerializedName("application/pdf")
    APPLICATION_PDF("application/pdf");

    private String value;

    ContentTypeEnum(String value) {
      this.value = value;
    }
    public String getValue() {
      return value;
    }

    @Override
    public String toString() {
      return String.valueOf(value);
    }
    public static ContentTypeEnum fromValue(String input) {
      for (ContentTypeEnum b : ContentTypeEnum.values()) {
        if (b.value.equals(input)) {
          return b;
        }
      }
      return null;
    }
    public static class Adapter extends TypeAdapter<ContentTypeEnum> {
      @Override
      public void write(final JsonWriter jsonWriter, final ContentTypeEnum enumeration) throws IOException {
        jsonWriter.value(String.valueOf(enumeration.getValue()));
      }

      @Override
      public ContentTypeEnum read(final JsonReader jsonReader) throws IOException {
        Object value = jsonReader.nextString();
        return ContentTypeEnum.fromValue((String)(value));
      }
    }
  }  @SerializedName("contentType")
  private ContentTypeEnum contentType = null;

  public PackingSlip purchaseOrderNumber(String purchaseOrderNumber) {
    this.purchaseOrderNumber = purchaseOrderNumber;
    return this;
  }

   /**
   * Purchase order number of the shipment that the packing slip is for.
   * @return purchaseOrderNumber
  **/
  @Schema(required = true, description = "Purchase order number of the shipment that the packing slip is for.")
  public String getPurchaseOrderNumber() {
    return purchaseOrderNumber;
  }

  public void setPurchaseOrderNumber(String purchaseOrderNumber) {
    this.purchaseOrderNumber = purchaseOrderNumber;
  }

  public PackingSlip content(String content) {
    this.content = content;
    return this;
  }

   /**
   * A Base64encoded string of the packing slip PDF.
   * @return content
  **/
  @Schema(required = true, description = "A Base64encoded string of the packing slip PDF.")
  public String getContent() {
    return content;
  }

  public void setContent(String content) {
    this.content = content;
  }

  public PackingSlip contentType(ContentTypeEnum contentType) {
    this.contentType = contentType;
    return this;
  }

   /**
   * The format of the file such as PDF, JPEG etc.
   * @return contentType
  **/
  @Schema(description = "The format of the file such as PDF, JPEG etc.")
  public ContentTypeEnum getContentType() {
    return contentType;
  }

  public void setContentType(ContentTypeEnum contentType) {
    this.contentType = contentType;
  }


  @Override
  public boolean equals(java.lang.Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    PackingSlip packingSlip = (PackingSlip) o;
    return Objects.equals(this.purchaseOrderNumber, packingSlip.purchaseOrderNumber) &&
        Objects.equals(this.content, packingSlip.content) &&
        Objects.equals(this.contentType, packingSlip.contentType);
  }

  @Override
  public int hashCode() {
    return Objects.hash(purchaseOrderNumber, content, contentType);
  }


  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class PackingSlip {\n");
    
    sb.append("    purchaseOrderNumber: ").append(toIndentedString(purchaseOrderNumber)).append("\n");
    sb.append("    content: ").append(toIndentedString(content)).append("\n");
    sb.append("    contentType: ").append(toIndentedString(contentType)).append("\n");
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
