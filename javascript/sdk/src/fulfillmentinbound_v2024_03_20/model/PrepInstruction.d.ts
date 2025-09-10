/**
 * The PrepInstruction model module.
 * @module fulfillmentinbound_v2024_03_20/model/PrepInstruction
 * @version 2024-03-20
 */
export class PrepInstruction {
    /**
     * Constructs a <code>PrepInstruction</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {PrepInstruction} obj Optional instance to populate.
     * @return {PrepInstruction} The populated <code>PrepInstruction</code> instance.
     */
    static constructFromObject(data: any, obj: PrepInstruction): PrepInstruction;
    /**
     * @member {Currency} fee
     * @type {Currency}
     */
    fee: Currency;
    /**
     * In some situations, special preparations are required for items and this field reflects the owner of the preparations. Options include `AMAZON`, `SELLER` or `NONE`.
     * @member {String} prepOwner
     * @type {String}
     */
    prepOwner: string;
    /**
     * Type of preparation that should be done.  Possible values: `ITEM_LABELING`, `ITEM_BUBBLEWRAP`, `ITEM_POLYBAGGING`, `ITEM_TAPING`, `ITEM_BLACK_SHRINKWRAP`, `ITEM_HANG_GARMENT`, `ITEM_BOXING`, `ITEM_SETCREAT`, `ITEM_RMOVHANG`, `ITEM_SUFFOSTK`, `ITEM_CAP_SEALING`, `ITEM_DEBUNDLE`, `ITEM_SETSTK`, `ITEM_SIOC`, `ITEM_NO_PREP`, `ADULT`, `BABY`, `TEXTILE`, `HANGER`, `FRAGILE`, `LIQUID`, `SHARP`, `SMALL`, `PERFORATED`, `GRANULAR`, `SET`, `FC_PROVIDED`, `UNKNOWN`, `NONE`.
     * @member {String} prepType
     * @type {String}
     */
    prepType: string;
}
import { Currency } from './Currency.js';
//# sourceMappingURL=PrepInstruction.d.ts.map