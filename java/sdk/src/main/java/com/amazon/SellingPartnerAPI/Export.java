/*
 * The Selling Partner API for Invoices.
 * Use the Selling Partner API for Invoices to retrieve and manage invoice-related operations, which can help selling partners manage their bookkeeping processes.
 *
 * OpenAPI spec version: 2024-06-19
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */

package com.amazon.SellingPartnerAPI;

import java.util.Objects;
import java.util.Arrays;
import com.amazon.SellingPartnerAPI.ExportStatus;
import com.google.gson.TypeAdapter;
import com.google.gson.annotations.JsonAdapter;
import com.google.gson.annotations.SerializedName;
import com.google.gson.stream.JsonReader;
import com.google.gson.stream.JsonWriter;
import io.swagger.v3.oas.annotations.media.Schema;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import org.threeten.bp.OffsetDateTime;
/**
 * Detailed information about the export.
 */
@Schema(description = "Detailed information about the export.")
@javax.annotation.Generated(value = "io.swagger.codegen.v3.generators.java.JavaClientCodegen", date = "2024-11-14T09:08:50.842451Z[Etc/UTC]")

public class Export {
  @SerializedName("errorMessage")
  private String errorMessage = null;

  @SerializedName("exportId")
  private String exportId = null;

  @SerializedName("generateExportFinishedAt")
  private OffsetDateTime generateExportFinishedAt = null;

  @SerializedName("generateExportStartedAt")
  private OffsetDateTime generateExportStartedAt = null;

  @SerializedName("invoicesDocumentIds")
  private List<String> invoicesDocumentIds = null;

  @SerializedName("status")
  private ExportStatus status = null;

  public Export errorMessage(String errorMessage) {
    this.errorMessage = errorMessage;
    return this;
  }

   /**
   * When the export generation fails, this attribute contains a description of the error.
   * @return errorMessage
  **/
  @Schema(description = "When the export generation fails, this attribute contains a description of the error.")
  public String getErrorMessage() {
    return errorMessage;
  }

  public void setErrorMessage(String errorMessage) {
    this.errorMessage = errorMessage;
  }

  public Export exportId(String exportId) {
    this.exportId = exportId;
    return this;
  }

   /**
   * The export identifier.
   * @return exportId
  **/
  @Schema(description = "The export identifier.")
  public String getExportId() {
    return exportId;
  }

  public void setExportId(String exportId) {
    this.exportId = exportId;
  }

  public Export generateExportFinishedAt(OffsetDateTime generateExportFinishedAt) {
    this.generateExportFinishedAt = generateExportFinishedAt;
    return this;
  }

   /**
   * The date and time when the export generation finished. Vales are in [ISO 8601](https://developer-docs.amazon.com/sp-api/docs/iso-8601) date-time format.
   * @return generateExportFinishedAt
  **/
  @Schema(description = "The date and time when the export generation finished. Vales are in [ISO 8601](https://developer-docs.amazon.com/sp-api/docs/iso-8601) date-time format.")
  public OffsetDateTime getGenerateExportFinishedAt() {
    return generateExportFinishedAt;
  }

  public void setGenerateExportFinishedAt(OffsetDateTime generateExportFinishedAt) {
    this.generateExportFinishedAt = generateExportFinishedAt;
  }

  public Export generateExportStartedAt(OffsetDateTime generateExportStartedAt) {
    this.generateExportStartedAt = generateExportStartedAt;
    return this;
  }

   /**
   * The date and time when the export generation started. Values are in [ISO 8601](https://developer-docs.amazon.com/sp-api/docs/iso-8601) date-time format.
   * @return generateExportStartedAt
  **/
  @Schema(description = "The date and time when the export generation started. Values are in [ISO 8601](https://developer-docs.amazon.com/sp-api/docs/iso-8601) date-time format.")
  public OffsetDateTime getGenerateExportStartedAt() {
    return generateExportStartedAt;
  }

  public void setGenerateExportStartedAt(OffsetDateTime generateExportStartedAt) {
    this.generateExportStartedAt = generateExportStartedAt;
  }

  public Export invoicesDocumentIds(List<String> invoicesDocumentIds) {
    this.invoicesDocumentIds = invoicesDocumentIds;
    return this;
  }

  public Export addInvoicesDocumentIdsItem(String invoicesDocumentIdsItem) {
    if (this.invoicesDocumentIds == null) {
      this.invoicesDocumentIds = new ArrayList<String>();
    }
    this.invoicesDocumentIds.add(invoicesDocumentIdsItem);
    return this;
  }

   /**
   * The identifier for the export documents. To get the information required to retrieve the export document&#x27;s contents, pass each ID in the &#x60;getInvoicesDocument&#x60; operation.  This list is empty until the status is &#x60;DONE&#x60;.
   * @return invoicesDocumentIds
  **/
  @Schema(description = "The identifier for the export documents. To get the information required to retrieve the export document's contents, pass each ID in the `getInvoicesDocument` operation.  This list is empty until the status is `DONE`.")
  public List<String> getInvoicesDocumentIds() {
    return invoicesDocumentIds;
  }

  public void setInvoicesDocumentIds(List<String> invoicesDocumentIds) {
    this.invoicesDocumentIds = invoicesDocumentIds;
  }

  public Export status(ExportStatus status) {
    this.status = status;
    return this;
  }

   /**
   * Get status
   * @return status
  **/
  @Schema(description = "")
  public ExportStatus getStatus() {
    return status;
  }

  public void setStatus(ExportStatus status) {
    this.status = status;
  }


  @Override
  public boolean equals(java.lang.Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    Export export = (Export) o;
    return Objects.equals(this.errorMessage, export.errorMessage) &&
        Objects.equals(this.exportId, export.exportId) &&
        Objects.equals(this.generateExportFinishedAt, export.generateExportFinishedAt) &&
        Objects.equals(this.generateExportStartedAt, export.generateExportStartedAt) &&
        Objects.equals(this.invoicesDocumentIds, export.invoicesDocumentIds) &&
        Objects.equals(this.status, export.status);
  }

  @Override
  public int hashCode() {
    return Objects.hash(errorMessage, exportId, generateExportFinishedAt, generateExportStartedAt, invoicesDocumentIds, status);
  }


  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class Export {\n");
    
    sb.append("    errorMessage: ").append(toIndentedString(errorMessage)).append("\n");
    sb.append("    exportId: ").append(toIndentedString(exportId)).append("\n");
    sb.append("    generateExportFinishedAt: ").append(toIndentedString(generateExportFinishedAt)).append("\n");
    sb.append("    generateExportStartedAt: ").append(toIndentedString(generateExportStartedAt)).append("\n");
    sb.append("    invoicesDocumentIds: ").append(toIndentedString(invoicesDocumentIds)).append("\n");
    sb.append("    status: ").append(toIndentedString(status)).append("\n");
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
