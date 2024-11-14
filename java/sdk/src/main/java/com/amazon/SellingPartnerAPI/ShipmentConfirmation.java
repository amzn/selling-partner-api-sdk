/*
 * Vendor Shipments v1
 * The Selling Partner API for Retail Procurement Shipments provides programmatic access to retail shipping data for vendors.
 *
 * OpenAPI spec version: v1
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */

package com.amazon.SellingPartnerAPI;

import java.util.Objects;
import java.util.Arrays;
import com.amazon.SellingPartnerAPI.Carton;
import com.amazon.SellingPartnerAPI.ImportDetails;
import com.amazon.SellingPartnerAPI.Item;
import com.amazon.SellingPartnerAPI.Pallet;
import com.amazon.SellingPartnerAPI.PartyIdentification;
import com.amazon.SellingPartnerAPI.ShipmentMeasurements;
import com.amazon.SellingPartnerAPI.TransportationDetailsForShipmentConfirmation;
import com.google.gson.TypeAdapter;
import com.google.gson.annotations.JsonAdapter;
import com.google.gson.annotations.SerializedName;
import com.google.gson.stream.JsonReader;
import com.google.gson.stream.JsonWriter;
import io.swagger.v3.oas.annotations.media.Schema;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import org.threeten.bp.OffsetDateTime;
/**
 * A list of one or more shipment confirmations.
 */
@Schema(description = "A list of one or more shipment confirmations.")
@javax.annotation.Generated(value = "io.swagger.codegen.v3.generators.java.JavaClientCodegen", date = "2024-11-14T09:10:38.210293Z[Etc/UTC]")

public class ShipmentConfirmation {
  @SerializedName("shipmentIdentifier")
  private String shipmentIdentifier = null;

  /**
   * Indicates if this shipment confirmation is the initial confirmation, or intended to replace an already posted shipment confirmation. If replacing an existing shipment confirmation, be sure to provide the identical shipmentIdentifier and sellingParty information as in the previous confirmation.
   */
  @JsonAdapter(ShipmentConfirmationTypeEnum.Adapter.class)
  public enum ShipmentConfirmationTypeEnum {
    @SerializedName("Original")
    ORIGINAL("Original"),
    @SerializedName("Replace")
    REPLACE("Replace");

    private String value;

    ShipmentConfirmationTypeEnum(String value) {
      this.value = value;
    }
    public String getValue() {
      return value;
    }

    @Override
    public String toString() {
      return String.valueOf(value);
    }
    public static ShipmentConfirmationTypeEnum fromValue(String input) {
      for (ShipmentConfirmationTypeEnum b : ShipmentConfirmationTypeEnum.values()) {
        if (b.value.equals(input)) {
          return b;
        }
      }
      return null;
    }
    public static class Adapter extends TypeAdapter<ShipmentConfirmationTypeEnum> {
      @Override
      public void write(final JsonWriter jsonWriter, final ShipmentConfirmationTypeEnum enumeration) throws IOException {
        jsonWriter.value(String.valueOf(enumeration.getValue()));
      }

      @Override
      public ShipmentConfirmationTypeEnum read(final JsonReader jsonReader) throws IOException {
        Object value = jsonReader.nextString();
        return ShipmentConfirmationTypeEnum.fromValue((String)(value));
      }
    }
  }  @SerializedName("shipmentConfirmationType")
  private ShipmentConfirmationTypeEnum shipmentConfirmationType = null;

  /**
   * The type of shipment.
   */
  @JsonAdapter(ShipmentTypeEnum.Adapter.class)
  public enum ShipmentTypeEnum {
    @SerializedName("TruckLoad")
    TRUCKLOAD("TruckLoad"),
    @SerializedName("LessThanTruckLoad")
    LESSTHANTRUCKLOAD("LessThanTruckLoad"),
    @SerializedName("SmallParcel")
    SMALLPARCEL("SmallParcel");

    private String value;

    ShipmentTypeEnum(String value) {
      this.value = value;
    }
    public String getValue() {
      return value;
    }

    @Override
    public String toString() {
      return String.valueOf(value);
    }
    public static ShipmentTypeEnum fromValue(String input) {
      for (ShipmentTypeEnum b : ShipmentTypeEnum.values()) {
        if (b.value.equals(input)) {
          return b;
        }
      }
      return null;
    }
    public static class Adapter extends TypeAdapter<ShipmentTypeEnum> {
      @Override
      public void write(final JsonWriter jsonWriter, final ShipmentTypeEnum enumeration) throws IOException {
        jsonWriter.value(String.valueOf(enumeration.getValue()));
      }

      @Override
      public ShipmentTypeEnum read(final JsonReader jsonReader) throws IOException {
        Object value = jsonReader.nextString();
        return ShipmentTypeEnum.fromValue((String)(value));
      }
    }
  }  @SerializedName("shipmentType")
  private ShipmentTypeEnum shipmentType = null;

  /**
   * Shipment hierarchical structure.
   */
  @JsonAdapter(ShipmentStructureEnum.Adapter.class)
  public enum ShipmentStructureEnum {
    @SerializedName("PalletizedAssortmentCase")
    PALLETIZEDASSORTMENTCASE("PalletizedAssortmentCase"),
    @SerializedName("LooseAssortmentCase")
    LOOSEASSORTMENTCASE("LooseAssortmentCase"),
    @SerializedName("PalletOfItems")
    PALLETOFITEMS("PalletOfItems"),
    @SerializedName("PalletizedStandardCase")
    PALLETIZEDSTANDARDCASE("PalletizedStandardCase"),
    @SerializedName("LooseStandardCase")
    LOOSESTANDARDCASE("LooseStandardCase"),
    @SerializedName("MasterPallet")
    MASTERPALLET("MasterPallet"),
    @SerializedName("MasterCase")
    MASTERCASE("MasterCase");

    private String value;

    ShipmentStructureEnum(String value) {
      this.value = value;
    }
    public String getValue() {
      return value;
    }

    @Override
    public String toString() {
      return String.valueOf(value);
    }
    public static ShipmentStructureEnum fromValue(String input) {
      for (ShipmentStructureEnum b : ShipmentStructureEnum.values()) {
        if (b.value.equals(input)) {
          return b;
        }
      }
      return null;
    }
    public static class Adapter extends TypeAdapter<ShipmentStructureEnum> {
      @Override
      public void write(final JsonWriter jsonWriter, final ShipmentStructureEnum enumeration) throws IOException {
        jsonWriter.value(String.valueOf(enumeration.getValue()));
      }

      @Override
      public ShipmentStructureEnum read(final JsonReader jsonReader) throws IOException {
        Object value = jsonReader.nextString();
        return ShipmentStructureEnum.fromValue((String)(value));
      }
    }
  }  @SerializedName("shipmentStructure")
  private ShipmentStructureEnum shipmentStructure = null;

  @SerializedName("transportationDetails")
  private TransportationDetailsForShipmentConfirmation transportationDetails = null;

  @SerializedName("amazonReferenceNumber")
  private String amazonReferenceNumber = null;

  @SerializedName("shipmentConfirmationDate")
  private OffsetDateTime shipmentConfirmationDate = null;

  @SerializedName("shippedDate")
  private OffsetDateTime shippedDate = null;

  @SerializedName("estimatedDeliveryDate")
  private OffsetDateTime estimatedDeliveryDate = null;

  @SerializedName("sellingParty")
  private PartyIdentification sellingParty = null;

  @SerializedName("shipFromParty")
  private PartyIdentification shipFromParty = null;

  @SerializedName("shipToParty")
  private PartyIdentification shipToParty = null;

  @SerializedName("shipmentMeasurements")
  private ShipmentMeasurements shipmentMeasurements = null;

  @SerializedName("importDetails")
  private ImportDetails importDetails = null;

  @SerializedName("shippedItems")
  private List<Item> shippedItems = new ArrayList<Item>();

  @SerializedName("cartons")
  private List<Carton> cartons = null;

  @SerializedName("pallets")
  private List<Pallet> pallets = null;

  public ShipmentConfirmation shipmentIdentifier(String shipmentIdentifier) {
    this.shipmentIdentifier = shipmentIdentifier;
    return this;
  }

   /**
   * Unique shipment ID (not used over the last 365 days).
   * @return shipmentIdentifier
  **/
  @Schema(required = true, description = "Unique shipment ID (not used over the last 365 days).")
  public String getShipmentIdentifier() {
    return shipmentIdentifier;
  }

  public void setShipmentIdentifier(String shipmentIdentifier) {
    this.shipmentIdentifier = shipmentIdentifier;
  }

  public ShipmentConfirmation shipmentConfirmationType(ShipmentConfirmationTypeEnum shipmentConfirmationType) {
    this.shipmentConfirmationType = shipmentConfirmationType;
    return this;
  }

   /**
   * Indicates if this shipment confirmation is the initial confirmation, or intended to replace an already posted shipment confirmation. If replacing an existing shipment confirmation, be sure to provide the identical shipmentIdentifier and sellingParty information as in the previous confirmation.
   * @return shipmentConfirmationType
  **/
  @Schema(required = true, description = "Indicates if this shipment confirmation is the initial confirmation, or intended to replace an already posted shipment confirmation. If replacing an existing shipment confirmation, be sure to provide the identical shipmentIdentifier and sellingParty information as in the previous confirmation.")
  public ShipmentConfirmationTypeEnum getShipmentConfirmationType() {
    return shipmentConfirmationType;
  }

  public void setShipmentConfirmationType(ShipmentConfirmationTypeEnum shipmentConfirmationType) {
    this.shipmentConfirmationType = shipmentConfirmationType;
  }

  public ShipmentConfirmation shipmentType(ShipmentTypeEnum shipmentType) {
    this.shipmentType = shipmentType;
    return this;
  }

   /**
   * The type of shipment.
   * @return shipmentType
  **/
  @Schema(description = "The type of shipment.")
  public ShipmentTypeEnum getShipmentType() {
    return shipmentType;
  }

  public void setShipmentType(ShipmentTypeEnum shipmentType) {
    this.shipmentType = shipmentType;
  }

  public ShipmentConfirmation shipmentStructure(ShipmentStructureEnum shipmentStructure) {
    this.shipmentStructure = shipmentStructure;
    return this;
  }

   /**
   * Shipment hierarchical structure.
   * @return shipmentStructure
  **/
  @Schema(description = "Shipment hierarchical structure.")
  public ShipmentStructureEnum getShipmentStructure() {
    return shipmentStructure;
  }

  public void setShipmentStructure(ShipmentStructureEnum shipmentStructure) {
    this.shipmentStructure = shipmentStructure;
  }

  public ShipmentConfirmation transportationDetails(TransportationDetailsForShipmentConfirmation transportationDetails) {
    this.transportationDetails = transportationDetails;
    return this;
  }

   /**
   * Get transportationDetails
   * @return transportationDetails
  **/
  @Schema(description = "")
  public TransportationDetailsForShipmentConfirmation getTransportationDetails() {
    return transportationDetails;
  }

  public void setTransportationDetails(TransportationDetailsForShipmentConfirmation transportationDetails) {
    this.transportationDetails = transportationDetails;
  }

  public ShipmentConfirmation amazonReferenceNumber(String amazonReferenceNumber) {
    this.amazonReferenceNumber = amazonReferenceNumber;
    return this;
  }

   /**
   * The Amazon Reference Number is a unique identifier generated by Amazon for all Collect/WePay shipments when you submit  a routing request. This field is mandatory for Collect/WePay shipments.
   * @return amazonReferenceNumber
  **/
  @Schema(description = "The Amazon Reference Number is a unique identifier generated by Amazon for all Collect/WePay shipments when you submit  a routing request. This field is mandatory for Collect/WePay shipments.")
  public String getAmazonReferenceNumber() {
    return amazonReferenceNumber;
  }

  public void setAmazonReferenceNumber(String amazonReferenceNumber) {
    this.amazonReferenceNumber = amazonReferenceNumber;
  }

  public ShipmentConfirmation shipmentConfirmationDate(OffsetDateTime shipmentConfirmationDate) {
    this.shipmentConfirmationDate = shipmentConfirmationDate;
    return this;
  }

   /**
   * Date on which the shipment confirmation was submitted.
   * @return shipmentConfirmationDate
  **/
  @Schema(required = true, description = "Date on which the shipment confirmation was submitted.")
  public OffsetDateTime getShipmentConfirmationDate() {
    return shipmentConfirmationDate;
  }

  public void setShipmentConfirmationDate(OffsetDateTime shipmentConfirmationDate) {
    this.shipmentConfirmationDate = shipmentConfirmationDate;
  }

  public ShipmentConfirmation shippedDate(OffsetDateTime shippedDate) {
    this.shippedDate = shippedDate;
    return this;
  }

   /**
   * The date and time of the departure of the shipment from the vendor&#x27;s location. Vendors are requested to send ASNs within 30 minutes of departure from their warehouse/distribution center or at least 6 hours prior to the appointment time at the buyer destination warehouse, whichever is sooner. Shipped date mentioned in the shipment confirmation should not be in the future.
   * @return shippedDate
  **/
  @Schema(description = "The date and time of the departure of the shipment from the vendor's location. Vendors are requested to send ASNs within 30 minutes of departure from their warehouse/distribution center or at least 6 hours prior to the appointment time at the buyer destination warehouse, whichever is sooner. Shipped date mentioned in the shipment confirmation should not be in the future.")
  public OffsetDateTime getShippedDate() {
    return shippedDate;
  }

  public void setShippedDate(OffsetDateTime shippedDate) {
    this.shippedDate = shippedDate;
  }

  public ShipmentConfirmation estimatedDeliveryDate(OffsetDateTime estimatedDeliveryDate) {
    this.estimatedDeliveryDate = estimatedDeliveryDate;
    return this;
  }

   /**
   * The date and time on which the shipment is estimated to reach buyer&#x27;s warehouse. It needs to be an estimate based on the average transit time between ship from location and the destination. The exact appointment time will be provided by the buyer and is potentially not known when creating the shipment confirmation.
   * @return estimatedDeliveryDate
  **/
  @Schema(description = "The date and time on which the shipment is estimated to reach buyer's warehouse. It needs to be an estimate based on the average transit time between ship from location and the destination. The exact appointment time will be provided by the buyer and is potentially not known when creating the shipment confirmation.")
  public OffsetDateTime getEstimatedDeliveryDate() {
    return estimatedDeliveryDate;
  }

  public void setEstimatedDeliveryDate(OffsetDateTime estimatedDeliveryDate) {
    this.estimatedDeliveryDate = estimatedDeliveryDate;
  }

  public ShipmentConfirmation sellingParty(PartyIdentification sellingParty) {
    this.sellingParty = sellingParty;
    return this;
  }

   /**
   * Get sellingParty
   * @return sellingParty
  **/
  @Schema(required = true, description = "")
  public PartyIdentification getSellingParty() {
    return sellingParty;
  }

  public void setSellingParty(PartyIdentification sellingParty) {
    this.sellingParty = sellingParty;
  }

  public ShipmentConfirmation shipFromParty(PartyIdentification shipFromParty) {
    this.shipFromParty = shipFromParty;
    return this;
  }

   /**
   * Get shipFromParty
   * @return shipFromParty
  **/
  @Schema(required = true, description = "")
  public PartyIdentification getShipFromParty() {
    return shipFromParty;
  }

  public void setShipFromParty(PartyIdentification shipFromParty) {
    this.shipFromParty = shipFromParty;
  }

  public ShipmentConfirmation shipToParty(PartyIdentification shipToParty) {
    this.shipToParty = shipToParty;
    return this;
  }

   /**
   * Get shipToParty
   * @return shipToParty
  **/
  @Schema(required = true, description = "")
  public PartyIdentification getShipToParty() {
    return shipToParty;
  }

  public void setShipToParty(PartyIdentification shipToParty) {
    this.shipToParty = shipToParty;
  }

  public ShipmentConfirmation shipmentMeasurements(ShipmentMeasurements shipmentMeasurements) {
    this.shipmentMeasurements = shipmentMeasurements;
    return this;
  }

   /**
   * Get shipmentMeasurements
   * @return shipmentMeasurements
  **/
  @Schema(description = "")
  public ShipmentMeasurements getShipmentMeasurements() {
    return shipmentMeasurements;
  }

  public void setShipmentMeasurements(ShipmentMeasurements shipmentMeasurements) {
    this.shipmentMeasurements = shipmentMeasurements;
  }

  public ShipmentConfirmation importDetails(ImportDetails importDetails) {
    this.importDetails = importDetails;
    return this;
  }

   /**
   * Get importDetails
   * @return importDetails
  **/
  @Schema(description = "")
  public ImportDetails getImportDetails() {
    return importDetails;
  }

  public void setImportDetails(ImportDetails importDetails) {
    this.importDetails = importDetails;
  }

  public ShipmentConfirmation shippedItems(List<Item> shippedItems) {
    this.shippedItems = shippedItems;
    return this;
  }

  public ShipmentConfirmation addShippedItemsItem(Item shippedItemsItem) {
    this.shippedItems.add(shippedItemsItem);
    return this;
  }

   /**
   * A list of the items in this shipment and their associated details. If any of the item detail fields are common at a carton or a pallet level, provide them at the corresponding carton or pallet level.
   * @return shippedItems
  **/
  @Schema(required = true, description = "A list of the items in this shipment and their associated details. If any of the item detail fields are common at a carton or a pallet level, provide them at the corresponding carton or pallet level.")
  public List<Item> getShippedItems() {
    return shippedItems;
  }

  public void setShippedItems(List<Item> shippedItems) {
    this.shippedItems = shippedItems;
  }

  public ShipmentConfirmation cartons(List<Carton> cartons) {
    this.cartons = cartons;
    return this;
  }

  public ShipmentConfirmation addCartonsItem(Carton cartonsItem) {
    if (this.cartons == null) {
      this.cartons = new ArrayList<Carton>();
    }
    this.cartons.add(cartonsItem);
    return this;
  }

   /**
   * A list of the cartons in this shipment.
   * @return cartons
  **/
  @Schema(description = "A list of the cartons in this shipment.")
  public List<Carton> getCartons() {
    return cartons;
  }

  public void setCartons(List<Carton> cartons) {
    this.cartons = cartons;
  }

  public ShipmentConfirmation pallets(List<Pallet> pallets) {
    this.pallets = pallets;
    return this;
  }

  public ShipmentConfirmation addPalletsItem(Pallet palletsItem) {
    if (this.pallets == null) {
      this.pallets = new ArrayList<Pallet>();
    }
    this.pallets.add(palletsItem);
    return this;
  }

   /**
   * A list of the pallets in this shipment.
   * @return pallets
  **/
  @Schema(description = "A list of the pallets in this shipment.")
  public List<Pallet> getPallets() {
    return pallets;
  }

  public void setPallets(List<Pallet> pallets) {
    this.pallets = pallets;
  }


  @Override
  public boolean equals(java.lang.Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    ShipmentConfirmation shipmentConfirmation = (ShipmentConfirmation) o;
    return Objects.equals(this.shipmentIdentifier, shipmentConfirmation.shipmentIdentifier) &&
        Objects.equals(this.shipmentConfirmationType, shipmentConfirmation.shipmentConfirmationType) &&
        Objects.equals(this.shipmentType, shipmentConfirmation.shipmentType) &&
        Objects.equals(this.shipmentStructure, shipmentConfirmation.shipmentStructure) &&
        Objects.equals(this.transportationDetails, shipmentConfirmation.transportationDetails) &&
        Objects.equals(this.amazonReferenceNumber, shipmentConfirmation.amazonReferenceNumber) &&
        Objects.equals(this.shipmentConfirmationDate, shipmentConfirmation.shipmentConfirmationDate) &&
        Objects.equals(this.shippedDate, shipmentConfirmation.shippedDate) &&
        Objects.equals(this.estimatedDeliveryDate, shipmentConfirmation.estimatedDeliveryDate) &&
        Objects.equals(this.sellingParty, shipmentConfirmation.sellingParty) &&
        Objects.equals(this.shipFromParty, shipmentConfirmation.shipFromParty) &&
        Objects.equals(this.shipToParty, shipmentConfirmation.shipToParty) &&
        Objects.equals(this.shipmentMeasurements, shipmentConfirmation.shipmentMeasurements) &&
        Objects.equals(this.importDetails, shipmentConfirmation.importDetails) &&
        Objects.equals(this.shippedItems, shipmentConfirmation.shippedItems) &&
        Objects.equals(this.cartons, shipmentConfirmation.cartons) &&
        Objects.equals(this.pallets, shipmentConfirmation.pallets);
  }

  @Override
  public int hashCode() {
    return Objects.hash(shipmentIdentifier, shipmentConfirmationType, shipmentType, shipmentStructure, transportationDetails, amazonReferenceNumber, shipmentConfirmationDate, shippedDate, estimatedDeliveryDate, sellingParty, shipFromParty, shipToParty, shipmentMeasurements, importDetails, shippedItems, cartons, pallets);
  }


  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class ShipmentConfirmation {\n");
    
    sb.append("    shipmentIdentifier: ").append(toIndentedString(shipmentIdentifier)).append("\n");
    sb.append("    shipmentConfirmationType: ").append(toIndentedString(shipmentConfirmationType)).append("\n");
    sb.append("    shipmentType: ").append(toIndentedString(shipmentType)).append("\n");
    sb.append("    shipmentStructure: ").append(toIndentedString(shipmentStructure)).append("\n");
    sb.append("    transportationDetails: ").append(toIndentedString(transportationDetails)).append("\n");
    sb.append("    amazonReferenceNumber: ").append(toIndentedString(amazonReferenceNumber)).append("\n");
    sb.append("    shipmentConfirmationDate: ").append(toIndentedString(shipmentConfirmationDate)).append("\n");
    sb.append("    shippedDate: ").append(toIndentedString(shippedDate)).append("\n");
    sb.append("    estimatedDeliveryDate: ").append(toIndentedString(estimatedDeliveryDate)).append("\n");
    sb.append("    sellingParty: ").append(toIndentedString(sellingParty)).append("\n");
    sb.append("    shipFromParty: ").append(toIndentedString(shipFromParty)).append("\n");
    sb.append("    shipToParty: ").append(toIndentedString(shipToParty)).append("\n");
    sb.append("    shipmentMeasurements: ").append(toIndentedString(shipmentMeasurements)).append("\n");
    sb.append("    importDetails: ").append(toIndentedString(importDetails)).append("\n");
    sb.append("    shippedItems: ").append(toIndentedString(shippedItems)).append("\n");
    sb.append("    cartons: ").append(toIndentedString(cartons)).append("\n");
    sb.append("    pallets: ").append(toIndentedString(pallets)).append("\n");
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
