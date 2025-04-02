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
import java.util.Objects;

/** The request schema for the CreateClaim operation */
@Schema(description = "The request schema for the CreateClaim operation")
public class CreateClaimRequest {
    @SerializedName("trackingId")
    private String trackingId = null;

    @SerializedName("declaredValue")
    private Currency declaredValue = null;

    @SerializedName("claimReason")
    private ClaimReason claimReason = null;

    @SerializedName("isReplacementPackageSent")
    private Boolean isReplacementPackageSent = null;

    @SerializedName("proofs")
    private ClaimProofURLs proofs = null;

    @SerializedName("settlementType")
    private SettlementType settlementType = null;

    public CreateClaimRequest trackingId(String trackingId) {
        this.trackingId = trackingId;
        return this;
    }

    /**
     * Get trackingId
     *
     * @return trackingId
     */
    @Schema(required = true, description = "")
    public String getTrackingId() {
        return trackingId;
    }

    public void setTrackingId(String trackingId) {
        this.trackingId = trackingId;
    }

    public CreateClaimRequest declaredValue(Currency declaredValue) {
        this.declaredValue = declaredValue;
        return this;
    }

    /**
     * Get declaredValue
     *
     * @return declaredValue
     */
    @Schema(description = "")
    public Currency getDeclaredValue() {
        return declaredValue;
    }

    public void setDeclaredValue(Currency declaredValue) {
        this.declaredValue = declaredValue;
    }

    public CreateClaimRequest claimReason(ClaimReason claimReason) {
        this.claimReason = claimReason;
        return this;
    }

    /**
     * Get claimReason
     *
     * @return claimReason
     */
    @Schema(required = true, description = "")
    public ClaimReason getClaimReason() {
        return claimReason;
    }

    public void setClaimReason(ClaimReason claimReason) {
        this.claimReason = claimReason;
    }

    public CreateClaimRequest isReplacementPackageSent(Boolean isReplacementPackageSent) {
        this.isReplacementPackageSent = isReplacementPackageSent;
        return this;
    }

    /**
     * Applicable for only On Amazon shipments to identify if replacement was sent
     *
     * @return isReplacementPackageSent
     */
    @Schema(description = "Applicable for only On Amazon shipments to identify if replacement was sent")
    public Boolean isIsReplacementPackageSent() {
        return isReplacementPackageSent;
    }

    public void setIsReplacementPackageSent(Boolean isReplacementPackageSent) {
        this.isReplacementPackageSent = isReplacementPackageSent;
    }

    public CreateClaimRequest proofs(ClaimProofURLs proofs) {
        this.proofs = proofs;
        return this;
    }

    /**
     * Get proofs
     *
     * @return proofs
     */
    @Schema(description = "")
    public ClaimProofURLs getProofs() {
        return proofs;
    }

    public void setProofs(ClaimProofURLs proofs) {
        this.proofs = proofs;
    }

    public CreateClaimRequest settlementType(SettlementType settlementType) {
        this.settlementType = settlementType;
        return this;
    }

    /**
     * Get settlementType
     *
     * @return settlementType
     */
    @Schema(required = true, description = "")
    public SettlementType getSettlementType() {
        return settlementType;
    }

    public void setSettlementType(SettlementType settlementType) {
        this.settlementType = settlementType;
    }

    @Override
    public boolean equals(java.lang.Object o) {
        if (this == o) {
            return true;
        }
        if (o == null || getClass() != o.getClass()) {
            return false;
        }
        CreateClaimRequest createClaimRequest = (CreateClaimRequest) o;
        return Objects.equals(this.trackingId, createClaimRequest.trackingId)
                && Objects.equals(this.declaredValue, createClaimRequest.declaredValue)
                && Objects.equals(this.claimReason, createClaimRequest.claimReason)
                && Objects.equals(this.isReplacementPackageSent, createClaimRequest.isReplacementPackageSent)
                && Objects.equals(this.proofs, createClaimRequest.proofs)
                && Objects.equals(this.settlementType, createClaimRequest.settlementType);
    }

    @Override
    public int hashCode() {
        return Objects.hash(trackingId, declaredValue, claimReason, isReplacementPackageSent, proofs, settlementType);
    }

    @Override
    public String toString() {
        StringBuilder sb = new StringBuilder();
        sb.append("class CreateClaimRequest {\n");

        sb.append("    trackingId: ").append(toIndentedString(trackingId)).append("\n");
        sb.append("    declaredValue: ").append(toIndentedString(declaredValue)).append("\n");
        sb.append("    claimReason: ").append(toIndentedString(claimReason)).append("\n");
        sb.append("    isReplacementPackageSent: ")
                .append(toIndentedString(isReplacementPackageSent))
                .append("\n");
        sb.append("    proofs: ").append(toIndentedString(proofs)).append("\n");
        sb.append("    settlementType: ")
                .append(toIndentedString(settlementType))
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
