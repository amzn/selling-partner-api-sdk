/**
 * The ForecastDeliveries model module.
 * @module replenishment_v2022_11_07/model/ForecastDeliveries
 * @version 2022-11-07
 */
export class ForecastDeliveries {
    /**
     * Constructs a <code>ForecastDeliveries</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {ForecastDeliveries} obj Optional instance to populate.
     * @return {ForecastDeliveries} The populated <code>ForecastDeliveries</code> instance.
     */
    static constructFromObject(data: Object, obj: ForecastDeliveries): ForecastDeliveries;
    /**
     * The projected number of subscriber deliveries in the next 15 days.
     * @member {Number} next15DaysDeliveries
     * @type {Number}
     */
    next15DaysDeliveries: number;
    /**
     * The projected number of subscriber deliveries in the next 30 days.
     * @member {Number} next30DaysDeliveries
     * @type {Number}
     */
    next30DaysDeliveries: number;
    /**
     * The projected number of subscriber deliveries in the next 60 days.
     * @member {Number} next60DaysDeliveries
     * @type {Number}
     */
    next60DaysDeliveries: number;
    /**
     * The projected number of subscriber deliveries in the next 90 days.
     * @member {Number} next90DaysDeliveries
     * @type {Number}
     */
    next90DaysDeliveries: number;
}
//# sourceMappingURL=ForecastDeliveries.d.ts.map