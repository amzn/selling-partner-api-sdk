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

package com.amazon.SellingPartnerAPI.models.shipping.v2;

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
 * Client Reference Details
 */
@Schema(description = "Client Reference Details")


public class ClientReferenceDetail {
  /**
   * Client Reference type.
   */
  @JsonAdapter(ClientReferenceTypeEnum.Adapter.class)
  public enum ClientReferenceTypeEnum {
    @SerializedName("IntegratorShipperId")
    INTEGRATORSHIPPERID("IntegratorShipperId"),
    @SerializedName("IntegratorMerchantId")
    INTEGRATORMERCHANTID("IntegratorMerchantId");

    private String value;

    ClientReferenceTypeEnum(String value) {
      this.value = value;
    }
    public String getValue() {
      return value;
    }

    @Override
    public String toString() {
      return String.valueOf(value);
    }
    public static ClientReferenceTypeEnum fromValue(String input) {
      for (ClientReferenceTypeEnum b : ClientReferenceTypeEnum.values()) {
        if (b.value.equals(input)) {
          return b;
        }
      }
      return null;
    }
    public static class Adapter extends TypeAdapter<ClientReferenceTypeEnum> {
      @Override
      public void write(final JsonWriter jsonWriter, final ClientReferenceTypeEnum enumeration) throws IOException {
        jsonWriter.value(String.valueOf(enumeration.getValue()));
      }

      @Override
      public ClientReferenceTypeEnum read(final JsonReader jsonReader) throws IOException {
        Object value = jsonReader.nextString();
        return ClientReferenceTypeEnum.fromValue((String)(value));
      }
    }
  }  @SerializedName("clientReferenceType")
  private ClientReferenceTypeEnum clientReferenceType = null;

  @SerializedName("clientReferenceId")
  private String clientReferenceId = null;

  public ClientReferenceDetail clientReferenceType(ClientReferenceTypeEnum clientReferenceType) {
    this.clientReferenceType = clientReferenceType;
    return this;
  }

   /**
   * Client Reference type.
   * @return clientReferenceType
  **/
  @Schema(required = true, description = "Client Reference type.")
  public ClientReferenceTypeEnum getClientReferenceType() {
    return clientReferenceType;
  }

  public void setClientReferenceType(ClientReferenceTypeEnum clientReferenceType) {
    this.clientReferenceType = clientReferenceType;
  }

  public ClientReferenceDetail clientReferenceId(String clientReferenceId) {
    this.clientReferenceId = clientReferenceId;
    return this;
  }

   /**
   * The Client Reference Id.
   * @return clientReferenceId
  **/
  @Schema(required = true, description = "The Client Reference Id.")
  public String getClientReferenceId() {
    return clientReferenceId;
  }

  public void setClientReferenceId(String clientReferenceId) {
    this.clientReferenceId = clientReferenceId;
  }


  @Override
  public boolean equals(java.lang.Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    ClientReferenceDetail clientReferenceDetail = (ClientReferenceDetail) o;
    return Objects.equals(this.clientReferenceType, clientReferenceDetail.clientReferenceType) &&
        Objects.equals(this.clientReferenceId, clientReferenceDetail.clientReferenceId);
  }

  @Override
  public int hashCode() {
    return Objects.hash(clientReferenceType, clientReferenceId);
  }


  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class ClientReferenceDetail {\n");
    
    sb.append("    clientReferenceType: ").append(toIndentedString(clientReferenceType)).append("\n");
    sb.append("    clientReferenceId: ").append(toIndentedString(clientReferenceId)).append("\n");
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
