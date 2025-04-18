/*
 * Selling Partner APIs for Fulfillment Outbound
 * The Selling Partner API for Fulfillment Outbound lets you create applications that help a seller fulfill Multi-Channel Fulfillment orders using their inventory in Amazon's fulfillment network. You can get information on both potential and existing fulfillment orders.
 *
 * OpenAPI spec version: 2020-07-01
 *
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */

package software.amazon.spapi.models.fulfillment.outbound.v2020_07_01;

import com.google.gson.annotations.SerializedName;
import io.swagger.v3.oas.annotations.media.Schema;
import java.util.Objects;

/**
 * A physical address with varying degrees of precision. A more precise address can provide more accurate results than
 * country code and postal code alone.
 */
@Schema(
        description =
                "A physical address with varying degrees of precision. A more precise address can provide more accurate results than country code and postal code alone.")
public class VariablePrecisionAddress {
    @SerializedName("addressLine1")
    private String addressLine1 = null;

    @SerializedName("addressLine2")
    private String addressLine2 = null;

    @SerializedName("addressLine3")
    private String addressLine3 = null;

    @SerializedName("city")
    private String city = null;

    @SerializedName("districtOrCounty")
    private String districtOrCounty = null;

    @SerializedName("stateOrRegion")
    private String stateOrRegion = null;

    @SerializedName("postalCode")
    private String postalCode = null;

    @SerializedName("countryCode")
    private String countryCode = null;

    public VariablePrecisionAddress addressLine1(String addressLine1) {
        this.addressLine1 = addressLine1;
        return this;
    }

    /**
     * The first line of the address.
     *
     * @return addressLine1
     */
    @Schema(description = "The first line of the address.")
    public String getAddressLine1() {
        return addressLine1;
    }

    public void setAddressLine1(String addressLine1) {
        this.addressLine1 = addressLine1;
    }

    public VariablePrecisionAddress addressLine2(String addressLine2) {
        this.addressLine2 = addressLine2;
        return this;
    }

    /**
     * Additional address information, if required.
     *
     * @return addressLine2
     */
    @Schema(description = "Additional address information, if required.")
    public String getAddressLine2() {
        return addressLine2;
    }

    public void setAddressLine2(String addressLine2) {
        this.addressLine2 = addressLine2;
    }

    public VariablePrecisionAddress addressLine3(String addressLine3) {
        this.addressLine3 = addressLine3;
        return this;
    }

    /**
     * Additional address information, if required.
     *
     * @return addressLine3
     */
    @Schema(description = "Additional address information, if required.")
    public String getAddressLine3() {
        return addressLine3;
    }

    public void setAddressLine3(String addressLine3) {
        this.addressLine3 = addressLine3;
    }

    public VariablePrecisionAddress city(String city) {
        this.city = city;
        return this;
    }

    /**
     * The city where the person, business, or institution is located. This property should not be used in Japan.
     *
     * @return city
     */
    @Schema(
            description =
                    "The city where the person, business, or institution is located. This property should not be used in Japan.")
    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public VariablePrecisionAddress districtOrCounty(String districtOrCounty) {
        this.districtOrCounty = districtOrCounty;
        return this;
    }

    /**
     * The district or county where the person, business, or institution is located.
     *
     * @return districtOrCounty
     */
    @Schema(description = "The district or county where the person, business, or institution is located.")
    public String getDistrictOrCounty() {
        return districtOrCounty;
    }

    public void setDistrictOrCounty(String districtOrCounty) {
        this.districtOrCounty = districtOrCounty;
    }

    public VariablePrecisionAddress stateOrRegion(String stateOrRegion) {
        this.stateOrRegion = stateOrRegion;
        return this;
    }

    /**
     * The state or region where the person, business or institution is located.
     *
     * @return stateOrRegion
     */
    @Schema(description = "The state or region where the person, business or institution is located.")
    public String getStateOrRegion() {
        return stateOrRegion;
    }

    public void setStateOrRegion(String stateOrRegion) {
        this.stateOrRegion = stateOrRegion;
    }

    public VariablePrecisionAddress postalCode(String postalCode) {
        this.postalCode = postalCode;
        return this;
    }

    /**
     * The postal code of the address.
     *
     * @return postalCode
     */
    @Schema(required = true, description = "The postal code of the address.")
    public String getPostalCode() {
        return postalCode;
    }

    public void setPostalCode(String postalCode) {
        this.postalCode = postalCode;
    }

    public VariablePrecisionAddress countryCode(String countryCode) {
        this.countryCode = countryCode;
        return this;
    }

    /**
     * The two digit country code. In ISO 3166-1 alpha-2 format.
     *
     * @return countryCode
     */
    @Schema(required = true, description = "The two digit country code. In ISO 3166-1 alpha-2 format.")
    public String getCountryCode() {
        return countryCode;
    }

    public void setCountryCode(String countryCode) {
        this.countryCode = countryCode;
    }

    @Override
    public boolean equals(java.lang.Object o) {
        if (this == o) {
            return true;
        }
        if (o == null || getClass() != o.getClass()) {
            return false;
        }
        VariablePrecisionAddress variablePrecisionAddress = (VariablePrecisionAddress) o;
        return Objects.equals(this.addressLine1, variablePrecisionAddress.addressLine1)
                && Objects.equals(this.addressLine2, variablePrecisionAddress.addressLine2)
                && Objects.equals(this.addressLine3, variablePrecisionAddress.addressLine3)
                && Objects.equals(this.city, variablePrecisionAddress.city)
                && Objects.equals(this.districtOrCounty, variablePrecisionAddress.districtOrCounty)
                && Objects.equals(this.stateOrRegion, variablePrecisionAddress.stateOrRegion)
                && Objects.equals(this.postalCode, variablePrecisionAddress.postalCode)
                && Objects.equals(this.countryCode, variablePrecisionAddress.countryCode);
    }

    @Override
    public int hashCode() {
        return Objects.hash(
                addressLine1,
                addressLine2,
                addressLine3,
                city,
                districtOrCounty,
                stateOrRegion,
                postalCode,
                countryCode);
    }

    @Override
    public String toString() {
        StringBuilder sb = new StringBuilder();
        sb.append("class VariablePrecisionAddress {\n");

        sb.append("    addressLine1: ").append(toIndentedString(addressLine1)).append("\n");
        sb.append("    addressLine2: ").append(toIndentedString(addressLine2)).append("\n");
        sb.append("    addressLine3: ").append(toIndentedString(addressLine3)).append("\n");
        sb.append("    city: ").append(toIndentedString(city)).append("\n");
        sb.append("    districtOrCounty: ")
                .append(toIndentedString(districtOrCounty))
                .append("\n");
        sb.append("    stateOrRegion: ").append(toIndentedString(stateOrRegion)).append("\n");
        sb.append("    postalCode: ").append(toIndentedString(postalCode)).append("\n");
        sb.append("    countryCode: ").append(toIndentedString(countryCode)).append("\n");
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
