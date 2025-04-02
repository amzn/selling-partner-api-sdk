/*
 * Selling Partner API for Replenishment
 * The Selling Partner API for Replenishment (Replenishment API) provides programmatic access to replenishment program metrics and offers. These programs provide recurring delivery of any replenishable item at a frequency chosen by the customer.  The Replenishment API is available worldwide wherever Amazon Subscribe & Save is available or is supported. The API is available to vendors and FBA selling partners.
 *
 * OpenAPI spec version: 2022-11-07
 *
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */

package software.amazon.spapi.models.replenishment.v2022_11_07;

import com.google.gson.annotations.SerializedName;
import io.swagger.v3.oas.annotations.media.Schema;
import java.util.Objects;

/** An object which represents all promotions applied to an offer. */
@Schema(description = "An object which represents all promotions applied to an offer.")
public class OfferProgramConfigurationPromotions {
    @SerializedName("sellingPartnerFundedBaseDiscount")
    private OfferProgramConfigurationPromotionsDiscountFunding sellingPartnerFundedBaseDiscount = null;

    @SerializedName("sellingPartnerFundedTieredDiscount")
    private OfferProgramConfigurationPromotionsDiscountFunding sellingPartnerFundedTieredDiscount = null;

    @SerializedName("amazonFundedBaseDiscount")
    private OfferProgramConfigurationPromotionsDiscountFunding amazonFundedBaseDiscount = null;

    @SerializedName("amazonFundedTieredDiscount")
    private OfferProgramConfigurationPromotionsDiscountFunding amazonFundedTieredDiscount = null;

    public OfferProgramConfigurationPromotions sellingPartnerFundedBaseDiscount(
            OfferProgramConfigurationPromotionsDiscountFunding sellingPartnerFundedBaseDiscount) {
        this.sellingPartnerFundedBaseDiscount = sellingPartnerFundedBaseDiscount;
        return this;
    }

    /**
     * Get sellingPartnerFundedBaseDiscount
     *
     * @return sellingPartnerFundedBaseDiscount
     */
    @Schema(description = "")
    public OfferProgramConfigurationPromotionsDiscountFunding getSellingPartnerFundedBaseDiscount() {
        return sellingPartnerFundedBaseDiscount;
    }

    public void setSellingPartnerFundedBaseDiscount(
            OfferProgramConfigurationPromotionsDiscountFunding sellingPartnerFundedBaseDiscount) {
        this.sellingPartnerFundedBaseDiscount = sellingPartnerFundedBaseDiscount;
    }

    public OfferProgramConfigurationPromotions sellingPartnerFundedTieredDiscount(
            OfferProgramConfigurationPromotionsDiscountFunding sellingPartnerFundedTieredDiscount) {
        this.sellingPartnerFundedTieredDiscount = sellingPartnerFundedTieredDiscount;
        return this;
    }

    /**
     * Get sellingPartnerFundedTieredDiscount
     *
     * @return sellingPartnerFundedTieredDiscount
     */
    @Schema(description = "")
    public OfferProgramConfigurationPromotionsDiscountFunding getSellingPartnerFundedTieredDiscount() {
        return sellingPartnerFundedTieredDiscount;
    }

    public void setSellingPartnerFundedTieredDiscount(
            OfferProgramConfigurationPromotionsDiscountFunding sellingPartnerFundedTieredDiscount) {
        this.sellingPartnerFundedTieredDiscount = sellingPartnerFundedTieredDiscount;
    }

    public OfferProgramConfigurationPromotions amazonFundedBaseDiscount(
            OfferProgramConfigurationPromotionsDiscountFunding amazonFundedBaseDiscount) {
        this.amazonFundedBaseDiscount = amazonFundedBaseDiscount;
        return this;
    }

    /**
     * Get amazonFundedBaseDiscount
     *
     * @return amazonFundedBaseDiscount
     */
    @Schema(description = "")
    public OfferProgramConfigurationPromotionsDiscountFunding getAmazonFundedBaseDiscount() {
        return amazonFundedBaseDiscount;
    }

    public void setAmazonFundedBaseDiscount(
            OfferProgramConfigurationPromotionsDiscountFunding amazonFundedBaseDiscount) {
        this.amazonFundedBaseDiscount = amazonFundedBaseDiscount;
    }

    public OfferProgramConfigurationPromotions amazonFundedTieredDiscount(
            OfferProgramConfigurationPromotionsDiscountFunding amazonFundedTieredDiscount) {
        this.amazonFundedTieredDiscount = amazonFundedTieredDiscount;
        return this;
    }

    /**
     * Get amazonFundedTieredDiscount
     *
     * @return amazonFundedTieredDiscount
     */
    @Schema(description = "")
    public OfferProgramConfigurationPromotionsDiscountFunding getAmazonFundedTieredDiscount() {
        return amazonFundedTieredDiscount;
    }

    public void setAmazonFundedTieredDiscount(
            OfferProgramConfigurationPromotionsDiscountFunding amazonFundedTieredDiscount) {
        this.amazonFundedTieredDiscount = amazonFundedTieredDiscount;
    }

    @Override
    public boolean equals(java.lang.Object o) {
        if (this == o) {
            return true;
        }
        if (o == null || getClass() != o.getClass()) {
            return false;
        }
        OfferProgramConfigurationPromotions offerProgramConfigurationPromotions =
                (OfferProgramConfigurationPromotions) o;
        return Objects.equals(
                        this.sellingPartnerFundedBaseDiscount,
                        offerProgramConfigurationPromotions.sellingPartnerFundedBaseDiscount)
                && Objects.equals(
                        this.sellingPartnerFundedTieredDiscount,
                        offerProgramConfigurationPromotions.sellingPartnerFundedTieredDiscount)
                && Objects.equals(
                        this.amazonFundedBaseDiscount, offerProgramConfigurationPromotions.amazonFundedBaseDiscount)
                && Objects.equals(
                        this.amazonFundedTieredDiscount,
                        offerProgramConfigurationPromotions.amazonFundedTieredDiscount);
    }

    @Override
    public int hashCode() {
        return Objects.hash(
                sellingPartnerFundedBaseDiscount,
                sellingPartnerFundedTieredDiscount,
                amazonFundedBaseDiscount,
                amazonFundedTieredDiscount);
    }

    @Override
    public String toString() {
        StringBuilder sb = new StringBuilder();
        sb.append("class OfferProgramConfigurationPromotions {\n");

        sb.append("    sellingPartnerFundedBaseDiscount: ")
                .append(toIndentedString(sellingPartnerFundedBaseDiscount))
                .append("\n");
        sb.append("    sellingPartnerFundedTieredDiscount: ")
                .append(toIndentedString(sellingPartnerFundedTieredDiscount))
                .append("\n");
        sb.append("    amazonFundedBaseDiscount: ")
                .append(toIndentedString(amazonFundedBaseDiscount))
                .append("\n");
        sb.append("    amazonFundedTieredDiscount: ")
                .append(toIndentedString(amazonFundedTieredDiscount))
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
