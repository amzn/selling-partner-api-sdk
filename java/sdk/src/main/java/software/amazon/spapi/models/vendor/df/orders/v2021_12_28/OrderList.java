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

import com.google.gson.annotations.SerializedName;
import io.swagger.v3.oas.annotations.media.Schema;
import java.util.ArrayList;
import java.util.List;
import java.util.Objects;

/** A list of purchase orders. */
@Schema(description = "A list of purchase orders.")
public class OrderList {
    @SerializedName("pagination")
    private Pagination pagination = null;

    @SerializedName("orders")
    private List<Order> orders = null;

    public OrderList pagination(Pagination pagination) {
        this.pagination = pagination;
        return this;
    }

    /**
     * Get pagination
     *
     * @return pagination
     */
    @Schema(description = "")
    public Pagination getPagination() {
        return pagination;
    }

    public void setPagination(Pagination pagination) {
        this.pagination = pagination;
    }

    public OrderList orders(List<Order> orders) {
        this.orders = orders;
        return this;
    }

    public OrderList addOrdersItem(Order ordersItem) {
        if (this.orders == null) {
            this.orders = new ArrayList<Order>();
        }
        this.orders.add(ordersItem);
        return this;
    }

    /**
     * Represents a purchase order within the OrderList.
     *
     * @return orders
     */
    @Schema(description = "Represents a purchase order within the OrderList.")
    public List<Order> getOrders() {
        return orders;
    }

    public void setOrders(List<Order> orders) {
        this.orders = orders;
    }

    @Override
    public boolean equals(java.lang.Object o) {
        if (this == o) {
            return true;
        }
        if (o == null || getClass() != o.getClass()) {
            return false;
        }
        OrderList orderList = (OrderList) o;
        return Objects.equals(this.pagination, orderList.pagination) && Objects.equals(this.orders, orderList.orders);
    }

    @Override
    public int hashCode() {
        return Objects.hash(pagination, orders);
    }

    @Override
    public String toString() {
        StringBuilder sb = new StringBuilder();
        sb.append("class OrderList {\n");

        sb.append("    pagination: ").append(toIndentedString(pagination)).append("\n");
        sb.append("    orders: ").append(toIndentedString(orders)).append("\n");
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
