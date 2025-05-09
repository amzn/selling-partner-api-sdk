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

package software.amazon.spapi.models.shipping.v2;

import com.google.gson.annotations.SerializedName;
import io.swagger.v3.oas.annotations.media.Schema;
import java.util.ArrayList;
import java.util.List;
import java.util.Objects;

/** The format options available for a label. */
@Schema(description = "The format options available for a label.")
public class PrintOption {
    @SerializedName("supportedDPIs")
    private List<Integer> supportedDPIs = null;

    @SerializedName("supportedPageLayouts")
    private List<String> supportedPageLayouts = new ArrayList<String>();

    @SerializedName("supportedFileJoiningOptions")
    private List<Boolean> supportedFileJoiningOptions = new ArrayList<Boolean>();

    @SerializedName("supportedDocumentDetails")
    private List<SupportedDocumentDetail> supportedDocumentDetails = new ArrayList<SupportedDocumentDetail>();

    public PrintOption supportedDPIs(List<Integer> supportedDPIs) {
        this.supportedDPIs = supportedDPIs;
        return this;
    }

    public PrintOption addSupportedDPIsItem(Integer supportedDPIsItem) {
        if (this.supportedDPIs == null) {
            this.supportedDPIs = new ArrayList<Integer>();
        }
        this.supportedDPIs.add(supportedDPIsItem);
        return this;
    }

    /**
     * A list of the supported DPI options for a document.
     *
     * @return supportedDPIs
     */
    @Schema(description = "A list of the supported DPI options for a document.")
    public List<Integer> getSupportedDPIs() {
        return supportedDPIs;
    }

    public void setSupportedDPIs(List<Integer> supportedDPIs) {
        this.supportedDPIs = supportedDPIs;
    }

    public PrintOption supportedPageLayouts(List<String> supportedPageLayouts) {
        this.supportedPageLayouts = supportedPageLayouts;
        return this;
    }

    public PrintOption addSupportedPageLayoutsItem(String supportedPageLayoutsItem) {
        this.supportedPageLayouts.add(supportedPageLayoutsItem);
        return this;
    }

    /**
     * A list of the supported page layout options for a document.
     *
     * @return supportedPageLayouts
     */
    @Schema(required = true, description = "A list of the supported page layout options for a document.")
    public List<String> getSupportedPageLayouts() {
        return supportedPageLayouts;
    }

    public void setSupportedPageLayouts(List<String> supportedPageLayouts) {
        this.supportedPageLayouts = supportedPageLayouts;
    }

    public PrintOption supportedFileJoiningOptions(List<Boolean> supportedFileJoiningOptions) {
        this.supportedFileJoiningOptions = supportedFileJoiningOptions;
        return this;
    }

    public PrintOption addSupportedFileJoiningOptionsItem(Boolean supportedFileJoiningOptionsItem) {
        this.supportedFileJoiningOptions.add(supportedFileJoiningOptionsItem);
        return this;
    }

    /**
     * A list of the supported needFileJoining boolean values for a document.
     *
     * @return supportedFileJoiningOptions
     */
    @Schema(required = true, description = "A list of the supported needFileJoining boolean values for a document.")
    public List<Boolean> getSupportedFileJoiningOptions() {
        return supportedFileJoiningOptions;
    }

    public void setSupportedFileJoiningOptions(List<Boolean> supportedFileJoiningOptions) {
        this.supportedFileJoiningOptions = supportedFileJoiningOptions;
    }

    public PrintOption supportedDocumentDetails(List<SupportedDocumentDetail> supportedDocumentDetails) {
        this.supportedDocumentDetails = supportedDocumentDetails;
        return this;
    }

    public PrintOption addSupportedDocumentDetailsItem(SupportedDocumentDetail supportedDocumentDetailsItem) {
        this.supportedDocumentDetails.add(supportedDocumentDetailsItem);
        return this;
    }

    /**
     * A list of the supported documented details.
     *
     * @return supportedDocumentDetails
     */
    @Schema(required = true, description = "A list of the supported documented details.")
    public List<SupportedDocumentDetail> getSupportedDocumentDetails() {
        return supportedDocumentDetails;
    }

    public void setSupportedDocumentDetails(List<SupportedDocumentDetail> supportedDocumentDetails) {
        this.supportedDocumentDetails = supportedDocumentDetails;
    }

    @Override
    public boolean equals(java.lang.Object o) {
        if (this == o) {
            return true;
        }
        if (o == null || getClass() != o.getClass()) {
            return false;
        }
        PrintOption printOption = (PrintOption) o;
        return Objects.equals(this.supportedDPIs, printOption.supportedDPIs)
                && Objects.equals(this.supportedPageLayouts, printOption.supportedPageLayouts)
                && Objects.equals(this.supportedFileJoiningOptions, printOption.supportedFileJoiningOptions)
                && Objects.equals(this.supportedDocumentDetails, printOption.supportedDocumentDetails);
    }

    @Override
    public int hashCode() {
        return Objects.hash(supportedDPIs, supportedPageLayouts, supportedFileJoiningOptions, supportedDocumentDetails);
    }

    @Override
    public String toString() {
        StringBuilder sb = new StringBuilder();
        sb.append("class PrintOption {\n");

        sb.append("    supportedDPIs: ").append(toIndentedString(supportedDPIs)).append("\n");
        sb.append("    supportedPageLayouts: ")
                .append(toIndentedString(supportedPageLayouts))
                .append("\n");
        sb.append("    supportedFileJoiningOptions: ")
                .append(toIndentedString(supportedFileJoiningOptions))
                .append("\n");
        sb.append("    supportedDocumentDetails: ")
                .append(toIndentedString(supportedDocumentDetails))
                .append("\n");
        sb.append("}");
        return sb.toString();
    }

    /** Convert the given object to string with each line indented by 4 spaces (except the first line). */
    private String toIndentedString(java.lang.Object o) {
        if (o == null) {
            return "null";
        }
        return o.toString().replace("\n", "\n    ");
    }
}
