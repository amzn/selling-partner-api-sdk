/*
 * Selling Partner API for Shipment Invoicing
 * The Selling Partner API for Shipment Invoicing helps you programmatically retrieve shipment invoice information in the Brazil marketplace for a selling partner’s Fulfillment by Amazon (FBA) orders.
 *
 * OpenAPI spec version: v0
 *
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */

package software.amazon.spapi.models.invoicing.v0;

import com.google.gson.annotations.SerializedName;
import io.swagger.v3.oas.annotations.media.Schema;
import java.util.Objects;

/** The shipping address details of the shipment. */
@Schema(description = "The shipping address details of the shipment.")
public class Address {
    @SerializedName("Name")
    private String name = null;

    @SerializedName("AddressLine1")
    private String addressLine1 = null;

    @SerializedName("AddressLine2")
    private String addressLine2 = null;

    @SerializedName("AddressLine3")
    private String addressLine3 = null;

    @SerializedName("City")
    private String city = null;

    @SerializedName("County")
    private String county = null;

    @SerializedName("District")
    private String district = null;

    @SerializedName("StateOrRegion")
    private String stateOrRegion = null;

    @SerializedName("PostalCode")
    private String postalCode = null;

    @SerializedName("CountryCode")
    private String countryCode = null;

    @SerializedName("Phone")
    private String phone = null;

    @SerializedName("AddressType")
    private AddressTypeEnum addressType = null;

    public Address name(String name) {
        this.name = name;
        return this;
    }

    /**
     * The name.
     *
     * @return name
     */
    @Schema(description = "The name.")
    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Address addressLine1(String addressLine1) {
        this.addressLine1 = addressLine1;
        return this;
    }

    /**
     * The street address.
     *
     * @return addressLine1
     */
    @Schema(description = "The street address.")
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
     * Additional street address information, if required.
     *
     * @return addressLine2
     */
    @Schema(description = "Additional street address information, if required.")
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
     * Additional street address information, if required.
     *
     * @return addressLine3
     */
    @Schema(description = "Additional street address information, if required.")
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
     * The city.
     *
     * @return city
     */
    @Schema(description = "The city.")
    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public Address county(String county) {
        this.county = county;
        return this;
    }

    /**
     * The county.
     *
     * @return county
     */
    @Schema(description = "The county.")
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
     * The district.
     *
     * @return district
     */
    @Schema(description = "The district.")
    public String getDistrict() {
        return district;
    }

    public void setDistrict(String district) {
        this.district = district;
    }

    public Address stateOrRegion(String stateOrRegion) {
        this.stateOrRegion = stateOrRegion;
        return this;
    }

    /**
     * The state or region.
     *
     * @return stateOrRegion
     */
    @Schema(description = "The state or region.")
    public String getStateOrRegion() {
        return stateOrRegion;
    }

    public void setStateOrRegion(String stateOrRegion) {
        this.stateOrRegion = stateOrRegion;
    }

    public Address postalCode(String postalCode) {
        this.postalCode = postalCode;
        return this;
    }

    /**
     * The postal code.
     *
     * @return postalCode
     */
    @Schema(description = "The postal code.")
    public String getPostalCode() {
        return postalCode;
    }

    public void setPostalCode(String postalCode) {
        this.postalCode = postalCode;
    }

    public Address countryCode(String countryCode) {
        this.countryCode = countryCode;
        return this;
    }

    /**
     * The country code.
     *
     * @return countryCode
     */
    @Schema(description = "The country code.")
    public String getCountryCode() {
        return countryCode;
    }

    public void setCountryCode(String countryCode) {
        this.countryCode = countryCode;
    }

    public Address phone(String phone) {
        this.phone = phone;
        return this;
    }

    /**
     * The phone number.
     *
     * @return phone
     */
    @Schema(description = "The phone number.")
    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public Address addressType(AddressTypeEnum addressType) {
        this.addressType = addressType;
        return this;
    }

    /**
     * Get addressType
     *
     * @return addressType
     */
    @Schema(description = "")
    public AddressTypeEnum getAddressType() {
        return addressType;
    }

    public void setAddressType(AddressTypeEnum addressType) {
        this.addressType = addressType;
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
        return Objects.equals(this.name, address.name)
                && Objects.equals(this.addressLine1, address.addressLine1)
                && Objects.equals(this.addressLine2, address.addressLine2)
                && Objects.equals(this.addressLine3, address.addressLine3)
                && Objects.equals(this.city, address.city)
                && Objects.equals(this.county, address.county)
                && Objects.equals(this.district, address.district)
                && Objects.equals(this.stateOrRegion, address.stateOrRegion)
                && Objects.equals(this.postalCode, address.postalCode)
                && Objects.equals(this.countryCode, address.countryCode)
                && Objects.equals(this.phone, address.phone)
                && Objects.equals(this.addressType, address.addressType);
    }

    @Override
    public int hashCode() {
        return Objects.hash(
                name,
                addressLine1,
                addressLine2,
                addressLine3,
                city,
                county,
                district,
                stateOrRegion,
                postalCode,
                countryCode,
                phone,
                addressType);
    }

    @Override
    public String toString() {
        StringBuilder sb = new StringBuilder();
        sb.append("class Address {\n");

        sb.append("    name: ").append(toIndentedString(name)).append("\n");
        sb.append("    addressLine1: ").append(toIndentedString(addressLine1)).append("\n");
        sb.append("    addressLine2: ").append(toIndentedString(addressLine2)).append("\n");
        sb.append("    addressLine3: ").append(toIndentedString(addressLine3)).append("\n");
        sb.append("    city: ").append(toIndentedString(city)).append("\n");
        sb.append("    county: ").append(toIndentedString(county)).append("\n");
        sb.append("    district: ").append(toIndentedString(district)).append("\n");
        sb.append("    stateOrRegion: ").append(toIndentedString(stateOrRegion)).append("\n");
        sb.append("    postalCode: ").append(toIndentedString(postalCode)).append("\n");
        sb.append("    countryCode: ").append(toIndentedString(countryCode)).append("\n");
        sb.append("    phone: ").append(toIndentedString(phone)).append("\n");
        sb.append("    addressType: ").append(toIndentedString(addressType)).append("\n");
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
