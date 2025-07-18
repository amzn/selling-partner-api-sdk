/*
 * Selling Partner API for Retail Procurement Shipments
 * The Selling Partner API for Retail Procurement Shipments provides programmatic access to retail shipping data for vendors.
 *
 * OpenAPI spec version: v1
 *
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */

package software.amazon.spapi.models.vendor.shipments.v1;

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
import org.threeten.bp.OffsetDateTime;

/** A list of one or more shipments with respective details. */
@Schema(description = "A list of one or more shipments with respective details.")
public class Shipment {
    @SerializedName("vendorShipmentIdentifier")
    private String vendorShipmentIdentifier = null;

    /**
     * Indicates the type of transportation request (for example, &#x60;New&#x60; or &#x60;Cancel&#x60;). Each
     * &#x60;transactionType&#x60; has a unique set of operations and there are corresponding details to be populated
     * for each operation.
     */
    @JsonAdapter(TransactionTypeEnum.Adapter.class)
    public enum TransactionTypeEnum {
        @SerializedName("New")
        NEW("New"),
        @SerializedName("Cancel")
        CANCEL("Cancel");

        private String value;

        TransactionTypeEnum(String value) {
            this.value = value;
        }

        public String getValue() {
            return value;
        }

        @Override
        public String toString() {
            return String.valueOf(value);
        }

        public static TransactionTypeEnum fromValue(String input) {
            for (TransactionTypeEnum b : TransactionTypeEnum.values()) {
                if (b.value.equals(input)) {
                    return b;
                }
            }
            return null;
        }

        public static class Adapter extends TypeAdapter<TransactionTypeEnum> {
            @Override
            public void write(final JsonWriter jsonWriter, final TransactionTypeEnum enumeration) throws IOException {
                jsonWriter.value(String.valueOf(enumeration.getValue()));
            }

            @Override
            public TransactionTypeEnum read(final JsonReader jsonReader) throws IOException {
                Object value = jsonReader.nextString();
                return TransactionTypeEnum.fromValue((String) (value));
            }
        }
    }

    @SerializedName("transactionType")
    private TransactionTypeEnum transactionType = null;

    @SerializedName("buyerReferenceNumber")
    private String buyerReferenceNumber = null;

    @SerializedName("transactionDate")
    private OffsetDateTime transactionDate = null;

    /** Indicates the current shipment status. */
    @JsonAdapter(CurrentShipmentStatusEnum.Adapter.class)
    public enum CurrentShipmentStatusEnum {
        @SerializedName("Created")
        CREATED("Created"),
        @SerializedName("TransportationRequested")
        TRANSPORTATIONREQUESTED("TransportationRequested"),
        @SerializedName("CarrierAssigned")
        CARRIERASSIGNED("CarrierAssigned"),
        @SerializedName("Shipped")
        SHIPPED("Shipped");

        private String value;

        CurrentShipmentStatusEnum(String value) {
            this.value = value;
        }

        public String getValue() {
            return value;
        }

        @Override
        public String toString() {
            return String.valueOf(value);
        }

        public static CurrentShipmentStatusEnum fromValue(String input) {
            for (CurrentShipmentStatusEnum b : CurrentShipmentStatusEnum.values()) {
                if (b.value.equals(input)) {
                    return b;
                }
            }
            return null;
        }

        public static class Adapter extends TypeAdapter<CurrentShipmentStatusEnum> {
            @Override
            public void write(final JsonWriter jsonWriter, final CurrentShipmentStatusEnum enumeration)
                    throws IOException {
                jsonWriter.value(String.valueOf(enumeration.getValue()));
            }

            @Override
            public CurrentShipmentStatusEnum read(final JsonReader jsonReader) throws IOException {
                Object value = jsonReader.nextString();
                return CurrentShipmentStatusEnum.fromValue((String) (value));
            }
        }
    }

    @SerializedName("currentShipmentStatus")
    private CurrentShipmentStatusEnum currentShipmentStatus = null;

    @SerializedName("currentshipmentStatusDate")
    private OffsetDateTime currentshipmentStatusDate = null;

    @SerializedName("shipmentStatusDetails")
    private List<ShipmentStatusDetails> shipmentStatusDetails = null;

    @SerializedName("shipmentCreateDate")
    private OffsetDateTime shipmentCreateDate = null;

    @SerializedName("shipmentConfirmDate")
    private OffsetDateTime shipmentConfirmDate = null;

    @SerializedName("packageLabelCreateDate")
    private OffsetDateTime packageLabelCreateDate = null;

    /** Specifies if payment is Collect (WePay) or Prepaid (TheyPay). Required. */
    @JsonAdapter(ShipmentFreightTermEnum.Adapter.class)
    public enum ShipmentFreightTermEnum {
        @SerializedName("Collect")
        COLLECT("Collect"),
        @SerializedName("Prepaid")
        PREPAID("Prepaid");

        private String value;

        ShipmentFreightTermEnum(String value) {
            this.value = value;
        }

        public String getValue() {
            return value;
        }

        @Override
        public String toString() {
            return String.valueOf(value);
        }

        public static ShipmentFreightTermEnum fromValue(String input) {
            for (ShipmentFreightTermEnum b : ShipmentFreightTermEnum.values()) {
                if (b.value.equals(input)) {
                    return b;
                }
            }
            return null;
        }

        public static class Adapter extends TypeAdapter<ShipmentFreightTermEnum> {
            @Override
            public void write(final JsonWriter jsonWriter, final ShipmentFreightTermEnum enumeration)
                    throws IOException {
                jsonWriter.value(String.valueOf(enumeration.getValue()));
            }

            @Override
            public ShipmentFreightTermEnum read(final JsonReader jsonReader) throws IOException {
                Object value = jsonReader.nextString();
                return ShipmentFreightTermEnum.fromValue((String) (value));
            }
        }
    }

    @SerializedName("shipmentFreightTerm")
    private ShipmentFreightTermEnum shipmentFreightTerm = null;

    @SerializedName("sellingParty")
    private PartyIdentification sellingParty = null;

    @SerializedName("shipFromParty")
    private PartyIdentification shipFromParty = null;

    @SerializedName("shipToParty")
    private PartyIdentification shipToParty = null;

    @SerializedName("shipmentMeasurements")
    private TransportShipmentMeasurements shipmentMeasurements = null;

    @SerializedName("collectFreightPickupDetails")
    private CollectFreightPickupDetails collectFreightPickupDetails = null;

    @SerializedName("purchaseOrders")
    private List<PurchaseOrders> purchaseOrders = null;

    @SerializedName("importDetails")
    private ImportDetails importDetails = null;

    @SerializedName("containers")
    private List<Containers> containers = null;

    @SerializedName("transportationDetails")
    private TransportationDetails transportationDetails = null;

    public Shipment vendorShipmentIdentifier(String vendorShipmentIdentifier) {
        this.vendorShipmentIdentifier = vendorShipmentIdentifier;
        return this;
    }

    /**
     * Unique Transportation ID created by Vendor (Should not be used over the last 365 days).
     *
     * @return vendorShipmentIdentifier
     */
    @Schema(
            required = true,
            description = "Unique Transportation ID created by Vendor (Should not be used over the last 365 days).")
    public String getVendorShipmentIdentifier() {
        return vendorShipmentIdentifier;
    }

    public void setVendorShipmentIdentifier(String vendorShipmentIdentifier) {
        this.vendorShipmentIdentifier = vendorShipmentIdentifier;
    }

    public Shipment transactionType(TransactionTypeEnum transactionType) {
        this.transactionType = transactionType;
        return this;
    }

    /**
     * Indicates the type of transportation request (for example, &#x60;New&#x60; or &#x60;Cancel&#x60;). Each
     * &#x60;transactionType&#x60; has a unique set of operations and there are corresponding details to be populated
     * for each operation.
     *
     * @return transactionType
     */
    @Schema(
            required = true,
            description =
                    "Indicates the type of transportation request (for example, `New` or `Cancel`). Each `transactionType` has a unique set of operations and there are corresponding details to be populated for each operation.")
    public TransactionTypeEnum getTransactionType() {
        return transactionType;
    }

    public void setTransactionType(TransactionTypeEnum transactionType) {
        this.transactionType = transactionType;
    }

    public Shipment buyerReferenceNumber(String buyerReferenceNumber) {
        this.buyerReferenceNumber = buyerReferenceNumber;
        return this;
    }

    /**
     * The buyer Reference Number is a unique identifier generated by buyer for all Collect/WePay shipments when you
     * submit a transportation request. This field is mandatory for Collect/WePay shipments.
     *
     * @return buyerReferenceNumber
     */
    @Schema(
            description =
                    "The buyer Reference Number is a unique identifier generated by buyer for all Collect/WePay shipments when you submit a transportation request. This field is mandatory for Collect/WePay shipments.")
    public String getBuyerReferenceNumber() {
        return buyerReferenceNumber;
    }

    public void setBuyerReferenceNumber(String buyerReferenceNumber) {
        this.buyerReferenceNumber = buyerReferenceNumber;
    }

    public Shipment transactionDate(OffsetDateTime transactionDate) {
        this.transactionDate = transactionDate;
        return this;
    }

    /**
     * Date on which the transportation request was submitted.
     *
     * @return transactionDate
     */
    @Schema(required = true, description = "Date on which the transportation request was submitted.")
    public OffsetDateTime getTransactionDate() {
        return transactionDate;
    }

    public void setTransactionDate(OffsetDateTime transactionDate) {
        this.transactionDate = transactionDate;
    }

    public Shipment currentShipmentStatus(CurrentShipmentStatusEnum currentShipmentStatus) {
        this.currentShipmentStatus = currentShipmentStatus;
        return this;
    }

    /**
     * Indicates the current shipment status.
     *
     * @return currentShipmentStatus
     */
    @Schema(description = "Indicates the current shipment status.")
    public CurrentShipmentStatusEnum getCurrentShipmentStatus() {
        return currentShipmentStatus;
    }

    public void setCurrentShipmentStatus(CurrentShipmentStatusEnum currentShipmentStatus) {
        this.currentShipmentStatus = currentShipmentStatus;
    }

    public Shipment currentshipmentStatusDate(OffsetDateTime currentshipmentStatusDate) {
        this.currentshipmentStatusDate = currentshipmentStatusDate;
        return this;
    }

    /**
     * Date and time when the last status was updated.
     *
     * @return currentshipmentStatusDate
     */
    @Schema(description = "Date and time when the last status was updated.")
    public OffsetDateTime getCurrentshipmentStatusDate() {
        return currentshipmentStatusDate;
    }

    public void setCurrentshipmentStatusDate(OffsetDateTime currentshipmentStatusDate) {
        this.currentshipmentStatusDate = currentshipmentStatusDate;
    }

    public Shipment shipmentStatusDetails(List<ShipmentStatusDetails> shipmentStatusDetails) {
        this.shipmentStatusDetails = shipmentStatusDetails;
        return this;
    }

    public Shipment addShipmentStatusDetailsItem(ShipmentStatusDetails shipmentStatusDetailsItem) {
        if (this.shipmentStatusDetails == null) {
            this.shipmentStatusDetails = new ArrayList<ShipmentStatusDetails>();
        }
        this.shipmentStatusDetails.add(shipmentStatusDetailsItem);
        return this;
    }

    /**
     * Indicates the list of current shipment status details and when the last update was received from carrier this is
     * available on shipment Details response.
     *
     * @return shipmentStatusDetails
     */
    @Schema(
            description =
                    "Indicates the list of current shipment status details and when the last update was received from carrier this is available on shipment Details response.")
    public List<ShipmentStatusDetails> getShipmentStatusDetails() {
        return shipmentStatusDetails;
    }

    public void setShipmentStatusDetails(List<ShipmentStatusDetails> shipmentStatusDetails) {
        this.shipmentStatusDetails = shipmentStatusDetails;
    }

    public Shipment shipmentCreateDate(OffsetDateTime shipmentCreateDate) {
        this.shipmentCreateDate = shipmentCreateDate;
        return this;
    }

    /**
     * The date and time of the shipment request created by vendor.
     *
     * @return shipmentCreateDate
     */
    @Schema(description = "The date and time of the shipment request created by vendor.")
    public OffsetDateTime getShipmentCreateDate() {
        return shipmentCreateDate;
    }

    public void setShipmentCreateDate(OffsetDateTime shipmentCreateDate) {
        this.shipmentCreateDate = shipmentCreateDate;
    }

    public Shipment shipmentConfirmDate(OffsetDateTime shipmentConfirmDate) {
        this.shipmentConfirmDate = shipmentConfirmDate;
        return this;
    }

    /**
     * The date and time of the departure of the shipment from the vendor&#x27;s location. Vendors are requested to send
     * ASNs within 30 minutes of departure from their warehouse/distribution center or at least 6 hours prior to the
     * appointment time at the Buyer destination warehouse, whichever is sooner. Shipped date mentioned in the shipment
     * confirmation should not be in the future.
     *
     * @return shipmentConfirmDate
     */
    @Schema(
            description =
                    "The date and time of the departure of the shipment from the vendor's location. Vendors are requested to send ASNs within 30 minutes of departure from their warehouse/distribution center or at least 6 hours prior to the appointment time at the Buyer destination warehouse, whichever is sooner. Shipped date mentioned in the shipment confirmation should not be in the future.")
    public OffsetDateTime getShipmentConfirmDate() {
        return shipmentConfirmDate;
    }

    public void setShipmentConfirmDate(OffsetDateTime shipmentConfirmDate) {
        this.shipmentConfirmDate = shipmentConfirmDate;
    }

    public Shipment packageLabelCreateDate(OffsetDateTime packageLabelCreateDate) {
        this.packageLabelCreateDate = packageLabelCreateDate;
        return this;
    }

    /**
     * The date and time of the package label created for the shipment by buyer.
     *
     * @return packageLabelCreateDate
     */
    @Schema(description = "The date and time of the package label created for the shipment by buyer.")
    public OffsetDateTime getPackageLabelCreateDate() {
        return packageLabelCreateDate;
    }

    public void setPackageLabelCreateDate(OffsetDateTime packageLabelCreateDate) {
        this.packageLabelCreateDate = packageLabelCreateDate;
    }

    public Shipment shipmentFreightTerm(ShipmentFreightTermEnum shipmentFreightTerm) {
        this.shipmentFreightTerm = shipmentFreightTerm;
        return this;
    }

    /**
     * Specifies if payment is Collect (WePay) or Prepaid (TheyPay). Required.
     *
     * @return shipmentFreightTerm
     */
    @Schema(description = "Specifies if payment is Collect (WePay) or Prepaid (TheyPay). Required.")
    public ShipmentFreightTermEnum getShipmentFreightTerm() {
        return shipmentFreightTerm;
    }

    public void setShipmentFreightTerm(ShipmentFreightTermEnum shipmentFreightTerm) {
        this.shipmentFreightTerm = shipmentFreightTerm;
    }

    public Shipment sellingParty(PartyIdentification sellingParty) {
        this.sellingParty = sellingParty;
        return this;
    }

    /**
     * Get sellingParty
     *
     * @return sellingParty
     */
    @Schema(required = true, description = "")
    public PartyIdentification getSellingParty() {
        return sellingParty;
    }

    public void setSellingParty(PartyIdentification sellingParty) {
        this.sellingParty = sellingParty;
    }

    public Shipment shipFromParty(PartyIdentification shipFromParty) {
        this.shipFromParty = shipFromParty;
        return this;
    }

    /**
     * Get shipFromParty
     *
     * @return shipFromParty
     */
    @Schema(required = true, description = "")
    public PartyIdentification getShipFromParty() {
        return shipFromParty;
    }

    public void setShipFromParty(PartyIdentification shipFromParty) {
        this.shipFromParty = shipFromParty;
    }

    public Shipment shipToParty(PartyIdentification shipToParty) {
        this.shipToParty = shipToParty;
        return this;
    }

    /**
     * Get shipToParty
     *
     * @return shipToParty
     */
    @Schema(required = true, description = "")
    public PartyIdentification getShipToParty() {
        return shipToParty;
    }

    public void setShipToParty(PartyIdentification shipToParty) {
        this.shipToParty = shipToParty;
    }

    public Shipment shipmentMeasurements(TransportShipmentMeasurements shipmentMeasurements) {
        this.shipmentMeasurements = shipmentMeasurements;
        return this;
    }

    /**
     * Get shipmentMeasurements
     *
     * @return shipmentMeasurements
     */
    @Schema(description = "")
    public TransportShipmentMeasurements getShipmentMeasurements() {
        return shipmentMeasurements;
    }

    public void setShipmentMeasurements(TransportShipmentMeasurements shipmentMeasurements) {
        this.shipmentMeasurements = shipmentMeasurements;
    }

    public Shipment collectFreightPickupDetails(CollectFreightPickupDetails collectFreightPickupDetails) {
        this.collectFreightPickupDetails = collectFreightPickupDetails;
        return this;
    }

    /**
     * Get collectFreightPickupDetails
     *
     * @return collectFreightPickupDetails
     */
    @Schema(description = "")
    public CollectFreightPickupDetails getCollectFreightPickupDetails() {
        return collectFreightPickupDetails;
    }

    public void setCollectFreightPickupDetails(CollectFreightPickupDetails collectFreightPickupDetails) {
        this.collectFreightPickupDetails = collectFreightPickupDetails;
    }

    public Shipment purchaseOrders(List<PurchaseOrders> purchaseOrders) {
        this.purchaseOrders = purchaseOrders;
        return this;
    }

    public Shipment addPurchaseOrdersItem(PurchaseOrders purchaseOrdersItem) {
        if (this.purchaseOrders == null) {
            this.purchaseOrders = new ArrayList<PurchaseOrders>();
        }
        this.purchaseOrders.add(purchaseOrdersItem);
        return this;
    }

    /**
     * Indicates the purchase orders involved for the transportation request. This group is an array create 1 for each
     * PO and list their corresponding items. This information is used for deciding the route,truck allocation and
     * storage efficiently. This is a mandatory information for Buyer performing transportation from vendor warehouse
     * (WePay/Collect)
     *
     * @return purchaseOrders
     */
    @Schema(
            description =
                    "Indicates the purchase orders involved for the transportation request. This group is an array create 1 for each PO and list their corresponding items. This information is used for deciding the route,truck allocation and storage efficiently. This is a mandatory information for Buyer performing transportation from vendor warehouse (WePay/Collect)")
    public List<PurchaseOrders> getPurchaseOrders() {
        return purchaseOrders;
    }

    public void setPurchaseOrders(List<PurchaseOrders> purchaseOrders) {
        this.purchaseOrders = purchaseOrders;
    }

    public Shipment importDetails(ImportDetails importDetails) {
        this.importDetails = importDetails;
        return this;
    }

    /**
     * Get importDetails
     *
     * @return importDetails
     */
    @Schema(description = "")
    public ImportDetails getImportDetails() {
        return importDetails;
    }

    public void setImportDetails(ImportDetails importDetails) {
        this.importDetails = importDetails;
    }

    public Shipment containers(List<Containers> containers) {
        this.containers = containers;
        return this;
    }

    public Shipment addContainersItem(Containers containersItem) {
        if (this.containers == null) {
            this.containers = new ArrayList<Containers>();
        }
        this.containers.add(containersItem);
        return this;
    }

    /**
     * A list of the items in this transportation and their associated inner container details. If any of the item
     * detail fields are common at a carton or a pallet level, provide them at the corresponding carton or pallet level.
     *
     * @return containers
     */
    @Schema(
            description =
                    "A list of the items in this transportation and their associated inner container details. If any of the item detail fields are common at a carton or a pallet level, provide them at the corresponding carton or pallet level.")
    public List<Containers> getContainers() {
        return containers;
    }

    public void setContainers(List<Containers> containers) {
        this.containers = containers;
    }

    public Shipment transportationDetails(TransportationDetails transportationDetails) {
        this.transportationDetails = transportationDetails;
        return this;
    }

    /**
     * Get transportationDetails
     *
     * @return transportationDetails
     */
    @Schema(description = "")
    public TransportationDetails getTransportationDetails() {
        return transportationDetails;
    }

    public void setTransportationDetails(TransportationDetails transportationDetails) {
        this.transportationDetails = transportationDetails;
    }

    @Override
    public boolean equals(java.lang.Object o) {
        if (this == o) {
            return true;
        }
        if (o == null || getClass() != o.getClass()) {
            return false;
        }
        Shipment shipment = (Shipment) o;
        return Objects.equals(this.vendorShipmentIdentifier, shipment.vendorShipmentIdentifier)
                && Objects.equals(this.transactionType, shipment.transactionType)
                && Objects.equals(this.buyerReferenceNumber, shipment.buyerReferenceNumber)
                && Objects.equals(this.transactionDate, shipment.transactionDate)
                && Objects.equals(this.currentShipmentStatus, shipment.currentShipmentStatus)
                && Objects.equals(this.currentshipmentStatusDate, shipment.currentshipmentStatusDate)
                && Objects.equals(this.shipmentStatusDetails, shipment.shipmentStatusDetails)
                && Objects.equals(this.shipmentCreateDate, shipment.shipmentCreateDate)
                && Objects.equals(this.shipmentConfirmDate, shipment.shipmentConfirmDate)
                && Objects.equals(this.packageLabelCreateDate, shipment.packageLabelCreateDate)
                && Objects.equals(this.shipmentFreightTerm, shipment.shipmentFreightTerm)
                && Objects.equals(this.sellingParty, shipment.sellingParty)
                && Objects.equals(this.shipFromParty, shipment.shipFromParty)
                && Objects.equals(this.shipToParty, shipment.shipToParty)
                && Objects.equals(this.shipmentMeasurements, shipment.shipmentMeasurements)
                && Objects.equals(this.collectFreightPickupDetails, shipment.collectFreightPickupDetails)
                && Objects.equals(this.purchaseOrders, shipment.purchaseOrders)
                && Objects.equals(this.importDetails, shipment.importDetails)
                && Objects.equals(this.containers, shipment.containers)
                && Objects.equals(this.transportationDetails, shipment.transportationDetails);
    }

    @Override
    public int hashCode() {
        return Objects.hash(
                vendorShipmentIdentifier,
                transactionType,
                buyerReferenceNumber,
                transactionDate,
                currentShipmentStatus,
                currentshipmentStatusDate,
                shipmentStatusDetails,
                shipmentCreateDate,
                shipmentConfirmDate,
                packageLabelCreateDate,
                shipmentFreightTerm,
                sellingParty,
                shipFromParty,
                shipToParty,
                shipmentMeasurements,
                collectFreightPickupDetails,
                purchaseOrders,
                importDetails,
                containers,
                transportationDetails);
    }

    @Override
    public String toString() {
        StringBuilder sb = new StringBuilder();
        sb.append("class Shipment {\n");

        sb.append("    vendorShipmentIdentifier: ")
                .append(toIndentedString(vendorShipmentIdentifier))
                .append("\n");
        sb.append("    transactionType: ")
                .append(toIndentedString(transactionType))
                .append("\n");
        sb.append("    buyerReferenceNumber: ")
                .append(toIndentedString(buyerReferenceNumber))
                .append("\n");
        sb.append("    transactionDate: ")
                .append(toIndentedString(transactionDate))
                .append("\n");
        sb.append("    currentShipmentStatus: ")
                .append(toIndentedString(currentShipmentStatus))
                .append("\n");
        sb.append("    currentshipmentStatusDate: ")
                .append(toIndentedString(currentshipmentStatusDate))
                .append("\n");
        sb.append("    shipmentStatusDetails: ")
                .append(toIndentedString(shipmentStatusDetails))
                .append("\n");
        sb.append("    shipmentCreateDate: ")
                .append(toIndentedString(shipmentCreateDate))
                .append("\n");
        sb.append("    shipmentConfirmDate: ")
                .append(toIndentedString(shipmentConfirmDate))
                .append("\n");
        sb.append("    packageLabelCreateDate: ")
                .append(toIndentedString(packageLabelCreateDate))
                .append("\n");
        sb.append("    shipmentFreightTerm: ")
                .append(toIndentedString(shipmentFreightTerm))
                .append("\n");
        sb.append("    sellingParty: ").append(toIndentedString(sellingParty)).append("\n");
        sb.append("    shipFromParty: ").append(toIndentedString(shipFromParty)).append("\n");
        sb.append("    shipToParty: ").append(toIndentedString(shipToParty)).append("\n");
        sb.append("    shipmentMeasurements: ")
                .append(toIndentedString(shipmentMeasurements))
                .append("\n");
        sb.append("    collectFreightPickupDetails: ")
                .append(toIndentedString(collectFreightPickupDetails))
                .append("\n");
        sb.append("    purchaseOrders: ")
                .append(toIndentedString(purchaseOrders))
                .append("\n");
        sb.append("    importDetails: ").append(toIndentedString(importDetails)).append("\n");
        sb.append("    containers: ").append(toIndentedString(containers)).append("\n");
        sb.append("    transportationDetails: ")
                .append(toIndentedString(transportationDetails))
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
