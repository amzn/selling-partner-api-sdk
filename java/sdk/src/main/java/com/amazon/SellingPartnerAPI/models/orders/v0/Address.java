/*
 * Orders v0
 * Use the Orders Selling Partner API to programmatically retrieve order information. With this API, you can develop fast, flexible, and custom applications to manage order synchronization, perform order research, and create demand-based decision support tools.   _Note:_ For the JP, AU, and SG marketplaces, the Orders API supports orders from 2016 onward. For all other marketplaces, the Orders API supports orders for the last two years (orders older than this don't show up in the response).
 *
 * OpenAPI spec version: v0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */

package com.amazon.SellingPartnerAPI.models.orders.v0;

import java.util.Objects;
import java.util.Arrays;
import com.amazon.SellingPartnerAPI.models.orders.v0.AddressExtendedFields;
import com.google.gson.TypeAdapter;
import com.google.gson.annotations.JsonAdapter;
import com.google.gson.annotations.SerializedName;
import com.google.gson.stream.JsonReader;
import com.google.gson.stream.JsonWriter;
import io.swagger.v3.oas.annotations.media.Schema;
import java.io.IOException;
/**
 * The shipping address for the order.
 */
@Schema(description = "The shipping address for the order.")


public class Address {
  @SerializedName("Name")
  private String name = null;

  @SerializedName("CompanyName")
  private String companyName = null;

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

  @SerializedName("Municipality")
  private String municipality = null;

  @SerializedName("PostalCode")
  private String postalCode = null;

  @SerializedName("CountryCode")
  private String countryCode = null;

  @SerializedName("Phone")
  private String phone = null;

  @SerializedName("ExtendedFields")
  private AddressExtendedFields extendedFields = null;

  /**
   * The address type of the shipping address.
   */
  @JsonAdapter(AddressTypeEnum.Adapter.class)
  public enum AddressTypeEnum {
    @SerializedName("Residential")
    RESIDENTIAL("Residential"),
    @SerializedName("Commercial")
    COMMERCIAL("Commercial");

    private String value;

    AddressTypeEnum(String value) {
      this.value = value;
    }
    public String getValue() {
      return value;
    }

    @Override
    public String toString() {
      return String.valueOf(value);
    }
    public static AddressTypeEnum fromValue(String input) {
      for (AddressTypeEnum b : AddressTypeEnum.values()) {
        if (b.value.equals(input)) {
          return b;
        }
      }
      return null;
    }
    public static class Adapter extends TypeAdapter<AddressTypeEnum> {
      @Override
      public void write(final JsonWriter jsonWriter, final AddressTypeEnum enumeration) throws IOException {
        jsonWriter.value(String.valueOf(enumeration.getValue()));
      }

      @Override
      public AddressTypeEnum read(final JsonReader jsonReader) throws IOException {
        Object value = jsonReader.nextString();
        return AddressTypeEnum.fromValue((String)(value));
      }
    }
  }  @SerializedName("AddressType")
  private AddressTypeEnum addressType = null;

  public Address name(String name) {
    this.name = name;
    return this;
  }

   /**
   * The name.
   * @return name
  **/
  @Schema(required = true, description = "The name.")
  public String getName() {
    return name;
  }

  public void setName(String name) {
    this.name = name;
  }

  public Address companyName(String companyName) {
    this.companyName = companyName;
    return this;
  }

   /**
   * The company name of the recipient.  **Note**: This attribute is only available for shipping address.
   * @return companyName
  **/
  @Schema(description = "The company name of the recipient.  **Note**: This attribute is only available for shipping address.")
  public String getCompanyName() {
    return companyName;
  }

  public void setCompanyName(String companyName) {
    this.companyName = companyName;
  }

  public Address addressLine1(String addressLine1) {
    this.addressLine1 = addressLine1;
    return this;
  }

   /**
   * The street address.
   * @return addressLine1
  **/
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
   * @return addressLine2
  **/
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
   * @return addressLine3
  **/
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
   * @return city
  **/
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
   * @return county
  **/
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
   * @return district
  **/
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
   * @return stateOrRegion
  **/
  @Schema(description = "The state or region.")
  public String getStateOrRegion() {
    return stateOrRegion;
  }

  public void setStateOrRegion(String stateOrRegion) {
    this.stateOrRegion = stateOrRegion;
  }

  public Address municipality(String municipality) {
    this.municipality = municipality;
    return this;
  }

   /**
   * The municipality.
   * @return municipality
  **/
  @Schema(description = "The municipality.")
  public String getMunicipality() {
    return municipality;
  }

  public void setMunicipality(String municipality) {
    this.municipality = municipality;
  }

  public Address postalCode(String postalCode) {
    this.postalCode = postalCode;
    return this;
  }

   /**
   * The postal code.
   * @return postalCode
  **/
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
   * The country code. A two-character country code, in ISO 3166-1 alpha-2 format.
   * @return countryCode
  **/
  @Schema(description = "The country code. A two-character country code, in ISO 3166-1 alpha-2 format.")
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
   * The phone number of the buyer.  **Note**:  1. This attribute is only available for shipping address. 2. In some cases, the buyer phone number is suppressed:  a. Phone is suppressed for all &#x60;AFN&#x60; (fulfilled by Amazon) orders. b. Phone is suppressed for the shipped &#x60;MFN&#x60; (fulfilled by seller) order when the current date is past the Latest Delivery Date.
   * @return phone
  **/
  @Schema(description = "The phone number of the buyer.  **Note**:  1. This attribute is only available for shipping address. 2. In some cases, the buyer phone number is suppressed:  a. Phone is suppressed for all `AFN` (fulfilled by Amazon) orders. b. Phone is suppressed for the shipped `MFN` (fulfilled by seller) order when the current date is past the Latest Delivery Date.")
  public String getPhone() {
    return phone;
  }

  public void setPhone(String phone) {
    this.phone = phone;
  }

  public Address extendedFields(AddressExtendedFields extendedFields) {
    this.extendedFields = extendedFields;
    return this;
  }

   /**
   * Get extendedFields
   * @return extendedFields
  **/
  @Schema(description = "")
  public AddressExtendedFields getExtendedFields() {
    return extendedFields;
  }

  public void setExtendedFields(AddressExtendedFields extendedFields) {
    this.extendedFields = extendedFields;
  }

  public Address addressType(AddressTypeEnum addressType) {
    this.addressType = addressType;
    return this;
  }

   /**
   * The address type of the shipping address.
   * @return addressType
  **/
  @Schema(description = "The address type of the shipping address.")
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
    return Objects.equals(this.name, address.name) &&
        Objects.equals(this.companyName, address.companyName) &&
        Objects.equals(this.addressLine1, address.addressLine1) &&
        Objects.equals(this.addressLine2, address.addressLine2) &&
        Objects.equals(this.addressLine3, address.addressLine3) &&
        Objects.equals(this.city, address.city) &&
        Objects.equals(this.county, address.county) &&
        Objects.equals(this.district, address.district) &&
        Objects.equals(this.stateOrRegion, address.stateOrRegion) &&
        Objects.equals(this.municipality, address.municipality) &&
        Objects.equals(this.postalCode, address.postalCode) &&
        Objects.equals(this.countryCode, address.countryCode) &&
        Objects.equals(this.phone, address.phone) &&
        Objects.equals(this.extendedFields, address.extendedFields) &&
        Objects.equals(this.addressType, address.addressType);
  }

  @Override
  public int hashCode() {
    return Objects.hash(name, companyName, addressLine1, addressLine2, addressLine3, city, county, district, stateOrRegion, municipality, postalCode, countryCode, phone, extendedFields, addressType);
  }


  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class Address {\n");
    
    sb.append("    name: ").append(toIndentedString(name)).append("\n");
    sb.append("    companyName: ").append(toIndentedString(companyName)).append("\n");
    sb.append("    addressLine1: ").append(toIndentedString(addressLine1)).append("\n");
    sb.append("    addressLine2: ").append(toIndentedString(addressLine2)).append("\n");
    sb.append("    addressLine3: ").append(toIndentedString(addressLine3)).append("\n");
    sb.append("    city: ").append(toIndentedString(city)).append("\n");
    sb.append("    county: ").append(toIndentedString(county)).append("\n");
    sb.append("    district: ").append(toIndentedString(district)).append("\n");
    sb.append("    stateOrRegion: ").append(toIndentedString(stateOrRegion)).append("\n");
    sb.append("    municipality: ").append(toIndentedString(municipality)).append("\n");
    sb.append("    postalCode: ").append(toIndentedString(postalCode)).append("\n");
    sb.append("    countryCode: ").append(toIndentedString(countryCode)).append("\n");
    sb.append("    phone: ").append(toIndentedString(phone)).append("\n");
    sb.append("    extendedFields: ").append(toIndentedString(extendedFields)).append("\n");
    sb.append("    addressType: ").append(toIndentedString(addressType)).append("\n");
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
