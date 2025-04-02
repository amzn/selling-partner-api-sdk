/*
 * The Selling Partner API for Sellers
 * The [Selling Partner API for Sellers](https://developer-docs.amazon.com/sp-api/docs/sellers-api-v1-reference) (Sellers API) provides essential information about seller accounts, such as:  - The marketplaces a seller can list in - The default language and currency of a marketplace - Whether the seller has suspended listings  Refer to the [Sellers API reference](https://developer-docs.amazon.com/sp-api/docs/sellers-api-v1-reference) for details about this API's operations, data types, and schemas.
 *
 * OpenAPI spec version: v1
 *
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */

package software.amazon.spapi.models.sellers.v1;

import com.google.gson.TypeAdapter;
import com.google.gson.annotations.JsonAdapter;
import com.google.gson.annotations.SerializedName;
import com.google.gson.stream.JsonReader;
import com.google.gson.stream.JsonWriter;
import io.swagger.v3.oas.annotations.media.Schema;
import java.io.IOException;
import java.util.Objects;

/** The response schema for the &#x60;getAccount&#x60; operation. */
@Schema(description = "The response schema for the `getAccount` operation.")
public class Account {
    @SerializedName("marketplaceParticipationList")
    private MarketplaceParticipationList marketplaceParticipationList = null;

    /** The type of business registered for the seller account. */
    @JsonAdapter(BusinessTypeEnum.Adapter.class)
    public enum BusinessTypeEnum {
        @SerializedName("CHARITY")
        CHARITY("CHARITY"),
        @SerializedName("CRAFTSMAN")
        CRAFTSMAN("CRAFTSMAN"),
        @SerializedName("NATURAL_PERSON_COMPANY")
        NATURAL_PERSON_COMPANY("NATURAL_PERSON_COMPANY"),
        @SerializedName("PUBLIC_LISTED")
        PUBLIC_LISTED("PUBLIC_LISTED"),
        @SerializedName("PRIVATE_LIMITED")
        PRIVATE_LIMITED("PRIVATE_LIMITED"),
        @SerializedName("SOLE_PROPRIETORSHIP")
        SOLE_PROPRIETORSHIP("SOLE_PROPRIETORSHIP"),
        @SerializedName("STATE_OWNED")
        STATE_OWNED("STATE_OWNED"),
        @SerializedName("INDIVIDUAL")
        INDIVIDUAL("INDIVIDUAL");

        private String value;

        BusinessTypeEnum(String value) {
            this.value = value;
        }

        public String getValue() {
            return value;
        }

        @Override
        public String toString() {
            return String.valueOf(value);
        }

        public static BusinessTypeEnum fromValue(String input) {
            for (BusinessTypeEnum b : BusinessTypeEnum.values()) {
                if (b.value.equals(input)) {
                    return b;
                }
            }
            return null;
        }

        public static class Adapter extends TypeAdapter<BusinessTypeEnum> {
            @Override
            public void write(final JsonWriter jsonWriter, final BusinessTypeEnum enumeration) throws IOException {
                jsonWriter.value(String.valueOf(enumeration.getValue()));
            }

            @Override
            public BusinessTypeEnum read(final JsonReader jsonReader) throws IOException {
                Object value = jsonReader.nextString();
                return BusinessTypeEnum.fromValue((String) (value));
            }
        }
    }

    @SerializedName("businessType")
    private BusinessTypeEnum businessType = null;

    /** The selling plan details. */
    @JsonAdapter(SellingPlanEnum.Adapter.class)
    public enum SellingPlanEnum {
        @SerializedName("PROFESSIONAL")
        PROFESSIONAL("PROFESSIONAL"),
        @SerializedName("INDIVIDUAL")
        INDIVIDUAL("INDIVIDUAL");

        private String value;

        SellingPlanEnum(String value) {
            this.value = value;
        }

        public String getValue() {
            return value;
        }

        @Override
        public String toString() {
            return String.valueOf(value);
        }

        public static SellingPlanEnum fromValue(String input) {
            for (SellingPlanEnum b : SellingPlanEnum.values()) {
                if (b.value.equals(input)) {
                    return b;
                }
            }
            return null;
        }

        public static class Adapter extends TypeAdapter<SellingPlanEnum> {
            @Override
            public void write(final JsonWriter jsonWriter, final SellingPlanEnum enumeration) throws IOException {
                jsonWriter.value(String.valueOf(enumeration.getValue()));
            }

            @Override
            public SellingPlanEnum read(final JsonReader jsonReader) throws IOException {
                Object value = jsonReader.nextString();
                return SellingPlanEnum.fromValue((String) (value));
            }
        }
    }

    @SerializedName("sellingPlan")
    private SellingPlanEnum sellingPlan = null;

    @SerializedName("business")
    private Business business = null;

    @SerializedName("primaryContact")
    private PrimaryContact primaryContact = null;

    public Account marketplaceParticipationList(MarketplaceParticipationList marketplaceParticipationList) {
        this.marketplaceParticipationList = marketplaceParticipationList;
        return this;
    }

    /**
     * Get marketplaceParticipationList
     *
     * @return marketplaceParticipationList
     */
    @Schema(required = true, description = "")
    public MarketplaceParticipationList getMarketplaceParticipationList() {
        return marketplaceParticipationList;
    }

    public void setMarketplaceParticipationList(MarketplaceParticipationList marketplaceParticipationList) {
        this.marketplaceParticipationList = marketplaceParticipationList;
    }

    public Account businessType(BusinessTypeEnum businessType) {
        this.businessType = businessType;
        return this;
    }

    /**
     * The type of business registered for the seller account.
     *
     * @return businessType
     */
    @Schema(required = true, description = "The type of business registered for the seller account.")
    public BusinessTypeEnum getBusinessType() {
        return businessType;
    }

    public void setBusinessType(BusinessTypeEnum businessType) {
        this.businessType = businessType;
    }

    public Account sellingPlan(SellingPlanEnum sellingPlan) {
        this.sellingPlan = sellingPlan;
        return this;
    }

    /**
     * The selling plan details.
     *
     * @return sellingPlan
     */
    @Schema(required = true, description = "The selling plan details.")
    public SellingPlanEnum getSellingPlan() {
        return sellingPlan;
    }

    public void setSellingPlan(SellingPlanEnum sellingPlan) {
        this.sellingPlan = sellingPlan;
    }

    public Account business(Business business) {
        this.business = business;
        return this;
    }

    /**
     * Get business
     *
     * @return business
     */
    @Schema(description = "")
    public Business getBusiness() {
        return business;
    }

    public void setBusiness(Business business) {
        this.business = business;
    }

    public Account primaryContact(PrimaryContact primaryContact) {
        this.primaryContact = primaryContact;
        return this;
    }

    /**
     * Get primaryContact
     *
     * @return primaryContact
     */
    @Schema(description = "")
    public PrimaryContact getPrimaryContact() {
        return primaryContact;
    }

    public void setPrimaryContact(PrimaryContact primaryContact) {
        this.primaryContact = primaryContact;
    }

    @Override
    public boolean equals(java.lang.Object o) {
        if (this == o) {
            return true;
        }
        if (o == null || getClass() != o.getClass()) {
            return false;
        }
        Account account = (Account) o;
        return Objects.equals(this.marketplaceParticipationList, account.marketplaceParticipationList)
                && Objects.equals(this.businessType, account.businessType)
                && Objects.equals(this.sellingPlan, account.sellingPlan)
                && Objects.equals(this.business, account.business)
                && Objects.equals(this.primaryContact, account.primaryContact);
    }

    @Override
    public int hashCode() {
        return Objects.hash(marketplaceParticipationList, businessType, sellingPlan, business, primaryContact);
    }

    @Override
    public String toString() {
        StringBuilder sb = new StringBuilder();
        sb.append("class Account {\n");

        sb.append("    marketplaceParticipationList: ")
                .append(toIndentedString(marketplaceParticipationList))
                .append("\n");
        sb.append("    businessType: ").append(toIndentedString(businessType)).append("\n");
        sb.append("    sellingPlan: ").append(toIndentedString(sellingPlan)).append("\n");
        sb.append("    business: ").append(toIndentedString(business)).append("\n");
        sb.append("    primaryContact: ")
                .append(toIndentedString(primaryContact))
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
