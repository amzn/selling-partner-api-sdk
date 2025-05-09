/*
 * The Selling Partner API for Amazon Warehousing and Distribution
 * The Selling Partner API for Amazon Warehousing and Distribution (AWD) provides programmatic access to information about AWD shipments and inventory.
 *
 * OpenAPI spec version: 2024-05-09
 *
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */

package software.amazon.spapi.models.awd.v2024_05_09;

import com.google.gson.annotations.SerializedName;
import io.swagger.v3.oas.annotations.media.Schema;
import java.util.Objects;

/** Shipping address that represents the origin or destination location. */
@Schema(description = "Shipping address that represents the origin or destination location.")
public class Address {
    @SerializedName("addressLine1")
    private String addressLine1 = null;

    @SerializedName("addressLine2")
    private String addressLine2 = null;

    @SerializedName("addressLine3")
    private String addressLine3 = null;

    @SerializedName("city")
    private String city = null;

    @SerializedName("countryCode")
    private String countryCode = null;

    @SerializedName("county")
    private String county = null;

    @SerializedName("district")
    private String district = null;

    @SerializedName("name")
    private String name = null;

    @SerializedName("phoneNumber")
    private String phoneNumber = null;

    @SerializedName("postalCode")
    private String postalCode = null;

    @SerializedName("stateOrRegion")
    private String stateOrRegion = null;

    public Address addressLine1(String addressLine1) {
        this.addressLine1 = addressLine1;
        return this;
    }

    /**
     * First line of the address text.
     *
     * @return addressLine1
     */
    @Schema(required = true, description = "First line of the address text.")
    public String getAddressLine1() {
        return addressLine1;
    }

    public void setAddressLine1(String addressLine1) {
        this.addressLine1 = addressLine1;
    }

    public Address addressLine2(String addressLine2) {
        this.addressLine2 = addressLine2;
        return this;
    }

    /**
     * Optional second line of the address text.
     *
     * @return addressLine2
     */
    @Schema(description = "Optional second line of the address text.")
    public String getAddressLine2() {
        return addressLine2;
    }

    public void setAddressLine2(String addressLine2) {
        this.addressLine2 = addressLine2;
    }

    public Address addressLine3(String addressLine3) {
        this.addressLine3 = addressLine3;
        return this;
    }

    /**
     * Optional third line of the address text.
     *
     * @return addressLine3
     */
    @Schema(description = "Optional third line of the address text.")
    public String getAddressLine3() {
        return addressLine3;
    }

    public void setAddressLine3(String addressLine3) {
        this.addressLine3 = addressLine3;
    }

    public Address city(String city) {
        this.city = city;
        return this;
    }

    /**
     * Optional city where this address is located.
     *
     * @return city
     */
    @Schema(description = "Optional city where this address is located.")
    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public Address countryCode(String countryCode) {
        this.countryCode = countryCode;
        return this;
    }

    /**
     * Two-digit, ISO 3166-1 alpha-2 formatted country code where this address is located.
     *
     * @return countryCode
     */
    @Schema(
            required = true,
            description = "Two-digit, ISO 3166-1 alpha-2 formatted country code where this address is located.")
    public String getCountryCode() {
        return countryCode;
    }

    public void setCountryCode(String countryCode) {
        this.countryCode = countryCode;
    }

    public Address county(String county) {
        this.county = county;
        return this;
    }

    /**
     * Optional county where this address is located.
     *
     * @return county
     */
    @Schema(example = "Washington", description = "Optional county where this address is located.")
    public String getCounty() {
        return county;
    }

    public void setCounty(String county) {
        this.county = county;
    }

    public Address district(String district) {
        this.district = district;
        return this;
    }

    /**
     * Optional district where this address is located.
     *
     * @return district
     */
    @Schema(description = "Optional district where this address is located.")
    public String getDistrict() {
        return district;
    }

    public void setDistrict(String district) {
        this.district = district;
    }

    public Address name(String name) {
        this.name = name;
        return this;
    }

    /**
     * Name of the person, business, or institution at this address.
     *
     * @return name
     */
    @Schema(required = true, description = "Name of the person, business, or institution at this address.")
    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Address phoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
        return this;
    }

    /**
     * Optional E.164-formatted phone number for an available contact at this address.
     *
     * @return phoneNumber
     */
    @Schema(
            example = "+14155552671",
            description = "Optional E.164-formatted phone number for an available contact at this address.")
    public String getPhoneNumber() {
        return phoneNumber;
    }

    public void setPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
    }

    public Address postalCode(String postalCode) {
        this.postalCode = postalCode;
        return this;
    }

    /**
     * Optional postal code where this address is located.
     *
     * @return postalCode
     */
    @Schema(description = "Optional postal code where this address is located.")
    public String getPostalCode() {
        return postalCode;
    }

    public void setPostalCode(String postalCode) {
        this.postalCode = postalCode;
    }

    public Address stateOrRegion(String stateOrRegion) {
        this.stateOrRegion = stateOrRegion;
        return this;
    }

    /**
     * State or region where this address is located. Note that this is contextual to the specified country code.
     *
     * @return stateOrRegion
     */
    @Schema(
            required = true,
            description =
                    "State or region where this address is located. Note that this is contextual to the specified country code.")
    public String getStateOrRegion() {
        return stateOrRegion;
    }

    public void setStateOrRegion(String stateOrRegion) {
        this.stateOrRegion = stateOrRegion;
    }

    @Override
    public boolean equals(java.lang.Object o) {
        if (this == o) {
            return true;
        }
        if (o == null || getClass() != o.getClass()) {
            return false;
        }
        Address address = (Address) o;
        return Objects.equals(this.addressLine1, address.addressLine1)
                && Objects.equals(this.addressLine2, address.addressLine2)
                && Objects.equals(this.addressLine3, address.addressLine3)
                && Objects.equals(this.city, address.city)
                && Objects.equals(this.countryCode, address.countryCode)
                && Objects.equals(this.county, address.county)
                && Objects.equals(this.district, address.district)
                && Objects.equals(this.name, address.name)
                && Objects.equals(this.phoneNumber, address.phoneNumber)
                && Objects.equals(this.postalCode, address.postalCode)
                && Objects.equals(this.stateOrRegion, address.stateOrRegion);
    }

    @Override
    public int hashCode() {
        return Objects.hash(
                addressLine1,
                addressLine2,
                addressLine3,
                city,
                countryCode,
                county,
                district,
                name,
                phoneNumber,
                postalCode,
                stateOrRegion);
    }

    @Override
    public String toString() {
        StringBuilder sb = new StringBuilder();
        sb.append("class Address {\n");

        sb.append("    addressLine1: ").append(toIndentedString(addressLine1)).append("\n");
        sb.append("    addressLine2: ").append(toIndentedString(addressLine2)).append("\n");
        sb.append("    addressLine3: ").append(toIndentedString(addressLine3)).append("\n");
        sb.append("    city: ").append(toIndentedString(city)).append("\n");
        sb.append("    countryCode: ").append(toIndentedString(countryCode)).append("\n");
        sb.append("    county: ").append(toIndentedString(county)).append("\n");
        sb.append("    district: ").append(toIndentedString(district)).append("\n");
        sb.append("    name: ").append(toIndentedString(name)).append("\n");
        sb.append("    phoneNumber: ").append(toIndentedString(phoneNumber)).append("\n");
        sb.append("    postalCode: ").append(toIndentedString(postalCode)).append("\n");
        sb.append("    stateOrRegion: ").append(toIndentedString(stateOrRegion)).append("\n");
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
