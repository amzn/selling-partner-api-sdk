/*
 * Amazon Shipping API
 * The Amazon Shipping API is designed to support outbound shipping use cases both for orders originating on Amazon-owned marketplaces as well as external channels/marketplaces. With these APIs, you can request shipping rates, create shipments, cancel shipments, and track shipments.
 *
 * OpenAPI spec version: v2
 * Contact: swa-api-core@amazon.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */

package com.amazon.SellingPartnerAPI;

import java.util.Objects;
import java.util.Arrays;
import com.amazon.SellingPartnerAPI.DocumentFormat;
import com.amazon.SellingPartnerAPI.DocumentSize;
import com.amazon.SellingPartnerAPI.PrintOptionList;
import com.google.gson.TypeAdapter;
import com.google.gson.annotations.JsonAdapter;
import com.google.gson.annotations.SerializedName;
import com.google.gson.stream.JsonReader;
import com.google.gson.stream.JsonWriter;
import io.swagger.v3.oas.annotations.media.Schema;
import java.io.IOException;
/**
 * Document specification that is supported for a service offering.
 */
@Schema(description = "Document specification that is supported for a service offering.")
@javax.annotation.Generated(value = "io.swagger.codegen.v3.generators.java.JavaClientCodegen", date = "2024-11-14T09:09:56.733862Z[Etc/UTC]")

public class SupportedDocumentSpecification {
  @SerializedName("format")
  private DocumentFormat format = null;

  @SerializedName("size")
  private DocumentSize size = null;

  @SerializedName("printOptions")
  private PrintOptionList printOptions = null;

  public SupportedDocumentSpecification format(DocumentFormat format) {
    this.format = format;
    return this;
  }

   /**
   * Get format
   * @return format
  **/
  @Schema(required = true, description = "")
  public DocumentFormat getFormat() {
    return format;
  }

  public void setFormat(DocumentFormat format) {
    this.format = format;
  }

  public SupportedDocumentSpecification size(DocumentSize size) {
    this.size = size;
    return this;
  }

   /**
   * Get size
   * @return size
  **/
  @Schema(required = true, description = "")
  public DocumentSize getSize() {
    return size;
  }

  public void setSize(DocumentSize size) {
    this.size = size;
  }

  public SupportedDocumentSpecification printOptions(PrintOptionList printOptions) {
    this.printOptions = printOptions;
    return this;
  }

   /**
   * Get printOptions
   * @return printOptions
  **/
  @Schema(required = true, description = "")
  public PrintOptionList getPrintOptions() {
    return printOptions;
  }

  public void setPrintOptions(PrintOptionList printOptions) {
    this.printOptions = printOptions;
  }


  @Override
  public boolean equals(java.lang.Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    SupportedDocumentSpecification supportedDocumentSpecification = (SupportedDocumentSpecification) o;
    return Objects.equals(this.format, supportedDocumentSpecification.format) &&
        Objects.equals(this.size, supportedDocumentSpecification.size) &&
        Objects.equals(this.printOptions, supportedDocumentSpecification.printOptions);
  }

  @Override
  public int hashCode() {
    return Objects.hash(format, size, printOptions);
  }


  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class SupportedDocumentSpecification {\n");
    
    sb.append("    format: ").append(toIndentedString(format)).append("\n");
    sb.append("    size: ").append(toIndentedString(size)).append("\n");
    sb.append("    printOptions: ").append(toIndentedString(printOptions)).append("\n");
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
