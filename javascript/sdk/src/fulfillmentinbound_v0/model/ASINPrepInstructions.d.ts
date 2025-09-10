/**
 * The ASINPrepInstructions model module.
 * @module fulfillmentinbound_v0/model/ASINPrepInstructions
 * @version v0
 */
export class ASINPrepInstructions {
    /**
     * Constructs a <code>ASINPrepInstructions</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {ASINPrepInstructions} obj Optional instance to populate.
     * @return {ASINPrepInstructions} The populated <code>ASINPrepInstructions</code> instance.
     */
    static constructFromObject(data: any, obj: ASINPrepInstructions): ASINPrepInstructions;
    /**
     * The Amazon Standard Identification Number (ASIN) of the item.
     * @member {String} ASIN
     * @type {String}
     */
    ASIN: string;
    /**
     * @member {BarcodeInstruction} barcodeInstruction
     * @type {BarcodeInstruction}
     */
    barcodeInstruction: BarcodeInstruction;
    /**
     * @member {PrepGuidance} prepGuidance
     * @type {PrepGuidance}
     */
    prepGuidance: PrepGuidance;
    /**
     * A list of preparation instructions to help with item sourcing decisions.
     * @member {[PrepInstruction]} prepInstructionList
     * @type {[PrepInstruction]}
     */
    prepInstructionList: [PrepInstruction];
}
import { BarcodeInstruction } from './BarcodeInstruction.js';
import { PrepGuidance } from './PrepGuidance.js';
import { PrepInstruction } from './PrepInstruction.js';
//# sourceMappingURL=ASINPrepInstructions.d.ts.map