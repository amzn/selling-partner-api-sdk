/*
 * Selling Partner API for Direct Fulfillment Orders
 * The Selling Partner API for Direct Fulfillment Orders provides programmatic access to a direct fulfillment vendor's order data.
 *
 * OpenAPI spec version: 2021-12-28
 *
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */

package software.amazon.spapi.models.vendor.df.orders.v2021_12_28;

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

/** Details of an order. */
@Schema(description = "Details of an order.")
public class OrderDetails {
    @SerializedName("customerOrderNumber")
    private String customerOrderNumber = null;

    @SerializedName("orderDate")
    private OffsetDateTime orderDate = null;

    /** Current status of the order. */
    @JsonAdapter(OrderStatusEnum.Adapter.class)
    public enum OrderStatusEnum {
        @SerializedName("NEW")
        NEW("NEW"),
        @SerializedName("SHIPPED")
        SHIPPED("SHIPPED"),
        @SerializedName("ACCEPTED")
        ACCEPTED("ACCEPTED"),
        @SerializedName("CANCELLED")
        CANCELLED("CANCELLED");

        private String value;

        OrderStatusEnum(String value) {
            this.value = value;
        }

        public String getValue() {
            return value;
        }

        @Override
        public String toString() {
            return String.valueOf(value);
        }

        public static OrderStatusEnum fromValue(String input) {
            for (OrderStatusEnum b : OrderStatusEnum.values()) {
                if (b.value.equals(input)) {
                    return b;
                }
            }
            return null;
        }

        public static class Adapter extends TypeAdapter<OrderStatusEnum> {
            @Override
            public void write(final JsonWriter jsonWriter, final OrderStatusEnum enumeration) throws IOException {
                jsonWriter.value(String.valueOf(enumeration.getValue()));
            }

            @Override
            public OrderStatusEnum read(final JsonReader jsonReader) throws IOException {
                Object value = jsonReader.nextString();
                return OrderStatusEnum.fromValue((String) (value));
            }
        }
    }

    @SerializedName("orderStatus")
    private OrderStatusEnum orderStatus = null;

    @SerializedName("shipmentDetails")
    private ShipmentDetails shipmentDetails = null;

    @SerializedName("taxTotal")
    private TaxItemDetails taxTotal = null;

    @SerializedName("sellingParty")
    private PartyIdentification sellingParty = null;

    @SerializedName("shipFromParty")
    private PartyIdentification shipFromParty = null;

    @SerializedName("shipToParty")
    private Address shipToParty = null;

    @SerializedName("billToParty")
    private PartyIdentification billToParty = null;

    @SerializedName("items")
    private List<OrderItem> items = new ArrayList<OrderItem>();

    public OrderDetails customerOrderNumber(String customerOrderNumber) {
        this.customerOrderNumber = customerOrderNumber;
        return this;
    }

    /**
     * The customer order number.
     *
     * @return customerOrderNumber
     */
    @Schema(required = true, description = "The customer order number.")
    public String getCustomerOrderNumber() {
        return customerOrderNumber;
    }

    public void setCustomerOrderNumber(String customerOrderNumber) {
        this.customerOrderNumber = customerOrderNumber;
    }

    public OrderDetails orderDate(OffsetDateTime orderDate) {
        this.orderDate = orderDate;
        return this;
    }

    /**
     * The date the order was placed. This field is expected to be in ISO-8601 date/time format, for
     * example:2018-07-16T23:00:00Z/ 2018-07-16T23:00:00-05:00 /2018-07-16T23:00:00-08:00. If no time zone is specified,
     * UTC should be assumed.
     *
     * @return orderDate
     */
    @Schema(
            required = true,
            description =
                    "The date the order was placed. This  field is expected to be in ISO-8601 date/time format, for example:2018-07-16T23:00:00Z/ 2018-07-16T23:00:00-05:00 /2018-07-16T23:00:00-08:00. If no time zone is specified, UTC should be assumed.")
    public OffsetDateTime getOrderDate() {
        return orderDate;
    }

    public void setOrderDate(OffsetDateTime orderDate) {
        this.orderDate = orderDate;
    }

    public OrderDetails orderStatus(OrderStatusEnum orderStatus) {
        this.orderStatus = orderStatus;
        return this;
    }

    /**
     * Current status of the order.
     *
     * @return orderStatus
     */
    @Schema(description = "Current status of the order.")
    public OrderStatusEnum getOrderStatus() {
        return orderStatus;
    }

    public void setOrderStatus(OrderStatusEnum orderStatus) {
        this.orderStatus = orderStatus;
    }

    public OrderDetails shipmentDetails(ShipmentDetails shipmentDetails) {
        this.shipmentDetails = shipmentDetails;
        return this;
    }

    /**
     * Get shipmentDetails
     *
     * @return shipmentDetails
     */
    @Schema(required = true, description = "")
    public ShipmentDetails getShipmentDetails() {
        return shipmentDetails;
    }

    public void setShipmentDetails(ShipmentDetails shipmentDetails) {
        this.shipmentDetails = shipmentDetails;
    }

    public OrderDetails taxTotal(TaxItemDetails taxTotal) {
        this.taxTotal = taxTotal;
        return this;
    }

    /**
     * Get taxTotal
     *
     * @return taxTotal
     */
    @Schema(description = "")
    public TaxItemDetails getTaxTotal() {
        return taxTotal;
    }

    public void setTaxTotal(TaxItemDetails taxTotal) {
        this.taxTotal = taxTotal;
    }

    public OrderDetails sellingParty(PartyIdentification sellingParty) {
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

    public OrderDetails shipFromParty(PartyIdentification shipFromParty) {
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

    public OrderDetails shipToParty(Address shipToParty) {
        this.shipToParty = shipToParty;
        return this;
    }

    /**
     * Get shipToParty
     *
     * @return shipToParty
     */
    @Schema(required = true, description = "")
    public Address getShipToParty() {
        return shipToParty;
    }

    public void setShipToParty(Address shipToParty) {
        this.shipToParty = shipToParty;
    }

    public OrderDetails billToParty(PartyIdentification billToParty) {
        this.billToParty = billToParty;
        return this;
    }

    /**
     * Get billToParty
     *
     * @return billToParty
     */
    @Schema(required = true, description = "")
    public PartyIdentification getBillToParty() {
        return billToParty;
    }

    public void setBillToParty(PartyIdentification billToParty) {
        this.billToParty = billToParty;
    }

    public OrderDetails items(List<OrderItem> items) {
        this.items = items;
        return this;
    }

    public OrderDetails addItemsItem(OrderItem itemsItem) {
        this.items.add(itemsItem);
        return this;
    }

    /**
     * A list of items in this purchase order.
     *
     * @return items
     */
    @Schema(required = true, description = "A list of items in this purchase order.")
    public List<OrderItem> getItems() {
        return items;
    }

    public void setItems(List<OrderItem> items) {
        this.items = items;
    }

    @Override
    public boolean equals(java.lang.Object o) {
        if (this == o) {
            return true;
        }
        if (o == null || getClass() != o.getClass()) {
            return false;
        }
        OrderDetails orderDetails = (OrderDetails) o;
        return Objects.equals(this.customerOrderNumber, orderDetails.customerOrderNumber)
                && Objects.equals(this.orderDate, orderDetails.orderDate)
                && Objects.equals(this.orderStatus, orderDetails.orderStatus)
                && Objects.equals(this.shipmentDetails, orderDetails.shipmentDetails)
                && Objects.equals(this.taxTotal, orderDetails.taxTotal)
                && Objects.equals(this.sellingParty, orderDetails.sellingParty)
                && Objects.equals(this.shipFromParty, orderDetails.shipFromParty)
                && Objects.equals(this.shipToParty, orderDetails.shipToParty)
                && Objects.equals(this.billToParty, orderDetails.billToParty)
                && Objects.equals(this.items, orderDetails.items);
    }

    @Override
    public int hashCode() {
        return Objects.hash(
                customerOrderNumber,
                orderDate,
                orderStatus,
                shipmentDetails,
                taxTotal,
                sellingParty,
                shipFromParty,
                shipToParty,
                billToParty,
                items);
    }

    @Override
    public String toString() {
        StringBuilder sb = new StringBuilder();
        sb.append("class OrderDetails {\n");

        sb.append("    customerOrderNumber: ")
                .append(toIndentedString(customerOrderNumber))
                .append("\n");
        sb.append("    orderDate: ").append(toIndentedString(orderDate)).append("\n");
        sb.append("    orderStatus: ").append(toIndentedString(orderStatus)).append("\n");
        sb.append("    shipmentDetails: ")
                .append(toIndentedString(shipmentDetails))
                .append("\n");
        sb.append("    taxTotal: ").append(toIndentedString(taxTotal)).append("\n");
        sb.append("    sellingParty: ").append(toIndentedString(sellingParty)).append("\n");
        sb.append("    shipFromParty: ").append(toIndentedString(shipFromParty)).append("\n");
        sb.append("    shipToParty: ").append(toIndentedString(shipToParty)).append("\n");
        sb.append("    billToParty: ").append(toIndentedString(billToParty)).append("\n");
        sb.append("    items: ").append(toIndentedString(items)).append("\n");
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
