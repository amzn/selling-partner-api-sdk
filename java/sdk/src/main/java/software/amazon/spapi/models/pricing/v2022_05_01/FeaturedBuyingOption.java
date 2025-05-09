/*
 * Selling Partner API for Pricing
 * The Selling Partner API for Pricing helps you programmatically retrieve product pricing and offer pricing information for Amazon Marketplace products.  For more information, refer to the [Product Pricing v2022-05-01 Use Case Guide](https://developer-docs.amazon.com/sp-api/docs/product-pricing-api-v2022-05-01-use-case-guide).
 *
 * OpenAPI spec version: 2022-05-01
 *
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */

package software.amazon.spapi.models.pricing.v2022_05_01;

import com.google.gson.TypeAdapter;
import com.google.gson.annotations.JsonAdapter;
import com.google.gson.annotations.SerializedName;
import com.google.gson.stream.JsonReader;
import com.google.gson.stream.JsonWriter;
import io.swagger.v3.oas.annotations.media.Schema;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.Objects;

/**
 * Describes a featured buying option, which includes a list of segmented featured offers for a particular item
 * condition.
 */
@Schema(
        description =
                "Describes a featured buying option, which includes a list of segmented featured offers for a particular item condition.")
public class FeaturedBuyingOption {
    /**
     * The buying option type for the featured offer. &#x60;buyingOptionType&#x60; represents the buying options that a
     * customer receives on the detail page, such as &#x60;B2B&#x60;, &#x60;Fresh&#x60;, and &#x60;Subscribe n
     * Save&#x60;. &#x60;buyingOptionType&#x60; currently supports &#x60;NEW&#x60; as a value.
     */
    @JsonAdapter(BuyingOptionTypeEnum.Adapter.class)
    public enum BuyingOptionTypeEnum {
        @SerializedName("New")
        NEW("New");

        private String value;

        BuyingOptionTypeEnum(String value) {
            this.value = value;
        }

        public String getValue() {
            return value;
        }

        @Override
        public String toString() {
            return String.valueOf(value);
        }

        public static BuyingOptionTypeEnum fromValue(String input) {
            for (BuyingOptionTypeEnum b : BuyingOptionTypeEnum.values()) {
                if (b.value.equals(input)) {
                    return b;
                }
            }
            return null;
        }

        public static class Adapter extends TypeAdapter<BuyingOptionTypeEnum> {
            @Override
            public void write(final JsonWriter jsonWriter, final BuyingOptionTypeEnum enumeration) throws IOException {
                jsonWriter.value(String.valueOf(enumeration.getValue()));
            }

            @Override
            public BuyingOptionTypeEnum read(final JsonReader jsonReader) throws IOException {
                Object value = jsonReader.nextString();
                return BuyingOptionTypeEnum.fromValue((String) (value));
            }
        }
    }

    @SerializedName("buyingOptionType")
    private BuyingOptionTypeEnum buyingOptionType = null;

    @SerializedName("segmentedFeaturedOffers")
    private List<SegmentedFeaturedOffer> segmentedFeaturedOffers = new ArrayList<SegmentedFeaturedOffer>();

    public FeaturedBuyingOption buyingOptionType(BuyingOptionTypeEnum buyingOptionType) {
        this.buyingOptionType = buyingOptionType;
        return this;
    }

    /**
     * The buying option type for the featured offer. &#x60;buyingOptionType&#x60; represents the buying options that a
     * customer receives on the detail page, such as &#x60;B2B&#x60;, &#x60;Fresh&#x60;, and &#x60;Subscribe n
     * Save&#x60;. &#x60;buyingOptionType&#x60; currently supports &#x60;NEW&#x60; as a value.
     *
     * @return buyingOptionType
     */
    @Schema(
            required = true,
            description =
                    "The buying option type for the featured offer. `buyingOptionType` represents the buying options that a customer receives on the detail page, such as `B2B`, `Fresh`, and `Subscribe n Save`. `buyingOptionType` currently supports `NEW` as a value.")
    public BuyingOptionTypeEnum getBuyingOptionType() {
        return buyingOptionType;
    }

    public void setBuyingOptionType(BuyingOptionTypeEnum buyingOptionType) {
        this.buyingOptionType = buyingOptionType;
    }

    public FeaturedBuyingOption segmentedFeaturedOffers(List<SegmentedFeaturedOffer> segmentedFeaturedOffers) {
        this.segmentedFeaturedOffers = segmentedFeaturedOffers;
        return this;
    }

    public FeaturedBuyingOption addSegmentedFeaturedOffersItem(SegmentedFeaturedOffer segmentedFeaturedOffersItem) {
        this.segmentedFeaturedOffers.add(segmentedFeaturedOffersItem);
        return this;
    }

    /**
     * A list of segmented featured offers for the current buying option type. A segment can be considered as a group of
     * regional contexts that all have the same featured offer. A regional context is a combination of factors such as
     * customer type, region, or postal code and buying option.
     *
     * @return segmentedFeaturedOffers
     */
    @Schema(
            required = true,
            description =
                    "A list of segmented featured offers for the current buying option type. A segment can be considered as a group of regional contexts that all have the same featured offer. A regional context is a combination of factors such as customer type, region, or postal code and buying option.")
    public List<SegmentedFeaturedOffer> getSegmentedFeaturedOffers() {
        return segmentedFeaturedOffers;
    }

    public void setSegmentedFeaturedOffers(List<SegmentedFeaturedOffer> segmentedFeaturedOffers) {
        this.segmentedFeaturedOffers = segmentedFeaturedOffers;
    }

    @Override
    public boolean equals(java.lang.Object o) {
        if (this == o) {
            return true;
        }
        if (o == null || getClass() != o.getClass()) {
            return false;
        }
        FeaturedBuyingOption featuredBuyingOption = (FeaturedBuyingOption) o;
        return Objects.equals(this.buyingOptionType, featuredBuyingOption.buyingOptionType)
                && Objects.equals(this.segmentedFeaturedOffers, featuredBuyingOption.segmentedFeaturedOffers);
    }

    @Override
    public int hashCode() {
        return Objects.hash(buyingOptionType, segmentedFeaturedOffers);
    }

    @Override
    public String toString() {
        StringBuilder sb = new StringBuilder();
        sb.append("class FeaturedBuyingOption {\n");

        sb.append("    buyingOptionType: ")
                .append(toIndentedString(buyingOptionType))
                .append("\n");
        sb.append("    segmentedFeaturedOffers: ")
                .append(toIndentedString(segmentedFeaturedOffers))
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
