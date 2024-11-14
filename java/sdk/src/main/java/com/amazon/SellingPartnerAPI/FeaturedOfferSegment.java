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

package com.amazon.SellingPartnerAPI;

import java.util.Objects;
import java.util.Arrays;
import com.amazon.SellingPartnerAPI.SegmentDetails;
import com.google.gson.TypeAdapter;
import com.google.gson.annotations.JsonAdapter;
import com.google.gson.annotations.SerializedName;
import com.google.gson.stream.JsonReader;
import com.google.gson.stream.JsonWriter;
import io.swagger.v3.oas.annotations.media.Schema;
import java.io.IOException;
/**
 * Describes the segment in which the offer is featured.
 */
@Schema(description = "Describes the segment in which the offer is featured.")
@javax.annotation.Generated(value = "io.swagger.codegen.v3.generators.java.JavaClientCodegen", date = "2024-11-14T09:09:27.636892Z[Etc/UTC]")

public class FeaturedOfferSegment {
  /**
   * The customer membership type that makes up this segment
   */
  @JsonAdapter(CustomerMembershipEnum.Adapter.class)
  public enum CustomerMembershipEnum {
    @SerializedName("PRIME")
    PRIME("PRIME"),
    @SerializedName("NON_PRIME")
    NON_PRIME("NON_PRIME");

    private String value;

    CustomerMembershipEnum(String value) {
      this.value = value;
    }
    public String getValue() {
      return value;
    }

    @Override
    public String toString() {
      return String.valueOf(value);
    }
    public static CustomerMembershipEnum fromValue(String input) {
      for (CustomerMembershipEnum b : CustomerMembershipEnum.values()) {
        if (b.value.equals(input)) {
          return b;
        }
      }
      return null;
    }
    public static class Adapter extends TypeAdapter<CustomerMembershipEnum> {
      @Override
      public void write(final JsonWriter jsonWriter, final CustomerMembershipEnum enumeration) throws IOException {
        jsonWriter.value(String.valueOf(enumeration.getValue()));
      }

      @Override
      public CustomerMembershipEnum read(final JsonReader jsonReader) throws IOException {
        Object value = jsonReader.nextString();
        return CustomerMembershipEnum.fromValue((String)(value));
      }
    }
  }  @SerializedName("customerMembership")
  private CustomerMembershipEnum customerMembership = null;

  @SerializedName("segmentDetails")
  private SegmentDetails segmentDetails = null;

  public FeaturedOfferSegment customerMembership(CustomerMembershipEnum customerMembership) {
    this.customerMembership = customerMembership;
    return this;
  }

   /**
   * The customer membership type that makes up this segment
   * @return customerMembership
  **/
  @Schema(required = true, description = "The customer membership type that makes up this segment")
  public CustomerMembershipEnum getCustomerMembership() {
    return customerMembership;
  }

  public void setCustomerMembership(CustomerMembershipEnum customerMembership) {
    this.customerMembership = customerMembership;
  }

  public FeaturedOfferSegment segmentDetails(SegmentDetails segmentDetails) {
    this.segmentDetails = segmentDetails;
    return this;
  }

   /**
   * Get segmentDetails
   * @return segmentDetails
  **/
  @Schema(required = true, description = "")
  public SegmentDetails getSegmentDetails() {
    return segmentDetails;
  }

  public void setSegmentDetails(SegmentDetails segmentDetails) {
    this.segmentDetails = segmentDetails;
  }


  @Override
  public boolean equals(java.lang.Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    FeaturedOfferSegment featuredOfferSegment = (FeaturedOfferSegment) o;
    return Objects.equals(this.customerMembership, featuredOfferSegment.customerMembership) &&
        Objects.equals(this.segmentDetails, featuredOfferSegment.segmentDetails);
  }

  @Override
  public int hashCode() {
    return Objects.hash(customerMembership, segmentDetails);
  }


  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class FeaturedOfferSegment {\n");
    
    sb.append("    customerMembership: ").append(toIndentedString(customerMembership)).append("\n");
    sb.append("    segmentDetails: ").append(toIndentedString(segmentDetails)).append("\n");
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
