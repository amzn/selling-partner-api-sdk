/*
 * Selling Partner API for Direct Fulfillment Shipping
 * Use the Selling Partner API for Direct Fulfillment Shipping to access a direct fulfillment vendor's shipping data.
 *
 * OpenAPI spec version: 2021-12-28
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */

package software.amazon.spapi.models.vendor.df.shipping.v2021_12_28;

import java.util.Objects;
import java.util.Arrays;
import com.google.gson.TypeAdapter;
import com.google.gson.annotations.JsonAdapter;
import com.google.gson.annotations.SerializedName;
import com.google.gson.stream.JsonReader;
import com.google.gson.stream.JsonWriter;
import io.swagger.v3.oas.annotations.media.Schema;
import java.io.IOException;
/**
 * Details of the shipment label.
 */
@Schema(description = "Details of the shipment label.")


public class LabelData {
  @SerializedName("packageIdentifier")
  private String packageIdentifier = null;

  @SerializedName("trackingNumber")
  private String trackingNumber = null;

  @SerializedName("shipMethod")
  private String shipMethod = null;

  @SerializedName("shipMethodName")
  private String shipMethodName = null;

  @SerializedName("content")
  private String content = null;

  public LabelData packageIdentifier(String packageIdentifier) {
    this.packageIdentifier = packageIdentifier;
    return this;
  }

   /**
   * Identifier for the package. The first package will be 001, the second 002, and so on. This number is used as a reference to refer to this package from the pallet level.
   * @return packageIdentifier
  **/
  @Schema(description = "Identifier for the package. The first package will be 001, the second 002, and so on. This number is used as a reference to refer to this package from the pallet level.")
  public String getPackageIdentifier() {
    return packageIdentifier;
  }

  public void setPackageIdentifier(String packageIdentifier) {
    this.packageIdentifier = packageIdentifier;
  }

  public LabelData trackingNumber(String trackingNumber) {
    this.trackingNumber = trackingNumber;
    return this;
  }

   /**
   * Package tracking identifier from the shipping carrier.
   * @return trackingNumber
  **/
  @Schema(description = "Package tracking identifier from the shipping carrier.")
  public String getTrackingNumber() {
    return trackingNumber;
  }

  public void setTrackingNumber(String trackingNumber) {
    this.trackingNumber = trackingNumber;
  }

  public LabelData shipMethod(String shipMethod) {
    this.shipMethod = shipMethod;
    return this;
  }

   /**
   * Ship method to be used for shipping the order. Amazon defines Ship Method Codes indicating shipping carrier and shipment service level. Ship Method Codes are case and format sensitive. The same ship method code should returned on the shipment confirmation. Note that the Ship Method Codes are vendor specific and will be provided to each vendor during the implementation.
   * @return shipMethod
  **/
  @Schema(description = "Ship method to be used for shipping the order. Amazon defines Ship Method Codes indicating shipping carrier and shipment service level. Ship Method Codes are case and format sensitive. The same ship method code should returned on the shipment confirmation. Note that the Ship Method Codes are vendor specific and will be provided to each vendor during the implementation.")
  public String getShipMethod() {
    return shipMethod;
  }

  public void setShipMethod(String shipMethod) {
    this.shipMethod = shipMethod;
  }

  public LabelData shipMethodName(String shipMethodName) {
    this.shipMethodName = shipMethodName;
    return this;
  }

   /**
   * Shipping method name for internal reference.
   * @return shipMethodName
  **/
  @Schema(description = "Shipping method name for internal reference.")
  public String getShipMethodName() {
    return shipMethodName;
  }

  public void setShipMethodName(String shipMethodName) {
    this.shipMethodName = shipMethodName;
  }

  public LabelData content(String content) {
    this.content = content;
    return this;
  }

   /**
   * This field will contain the Base64 string of the shipment label content.
   * @return content
  **/
  @Schema(required = true, description = "This field will contain the Base64 string of the shipment label content.")
  public String getContent() {
    return content;
  }

  public void setContent(String content) {
    this.content = content;
  }


  @Override
  public boolean equals(java.lang.Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    LabelData labelData = (LabelData) o;
    return Objects.equals(this.packageIdentifier, labelData.packageIdentifier) &&
        Objects.equals(this.trackingNumber, labelData.trackingNumber) &&
        Objects.equals(this.shipMethod, labelData.shipMethod) &&
        Objects.equals(this.shipMethodName, labelData.shipMethodName) &&
        Objects.equals(this.content, labelData.content);
  }

  @Override
  public int hashCode() {
    return Objects.hash(packageIdentifier, trackingNumber, shipMethod, shipMethodName, content);
  }


  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class LabelData {\n");
    
    sb.append("    packageIdentifier: ").append(toIndentedString(packageIdentifier)).append("\n");
    sb.append("    trackingNumber: ").append(toIndentedString(trackingNumber)).append("\n");
    sb.append("    shipMethod: ").append(toIndentedString(shipMethod)).append("\n");
    sb.append("    shipMethodName: ").append(toIndentedString(shipMethodName)).append("\n");
    sb.append("    content: ").append(toIndentedString(content)).append("\n");
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
