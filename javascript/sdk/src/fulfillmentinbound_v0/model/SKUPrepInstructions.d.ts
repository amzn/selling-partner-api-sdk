/**
 * The SKUPrepInstructions model module.
 * @module fulfillmentinbound_v0/model/SKUPrepInstructions
 * @version v0
 */
export class SKUPrepInstructions {
    /**
     * Constructs a <code>SKUPrepInstructions</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {SKUPrepInstructions} obj Optional instance to populate.
     * @return {SKUPrepInstructions} The populated <code>SKUPrepInstructions</code> instance.
     */
    static constructFromObject(data: any, obj: SKUPrepInstructions): SKUPrepInstructions;
    /**
     * The seller SKU of the item.
     * @member {String} sellerSKU
     * @type {String}
     */
    sellerSKU: string;
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
     * @member {PrepInstruction[]} prepInstructionList
     * @type {PrepInstruction[]}
     */
    prepInstructionList: PrepInstruction[];
    /**
     * A list of preparation instructions and fees for Amazon to prep goods for shipment.
     * @member {AmazonPrepFeesDetails[]} amazonPrepFeesDetailsList
     * @type {AmazonPrepFeesDetails[]}
     */
    amazonPrepFeesDetailsList: AmazonPrepFeesDetails[];
}
import { BarcodeInstruction } from './BarcodeInstruction.js';
import { PrepGuidance } from './PrepGuidance.js';
import { PrepInstruction } from './PrepInstruction.js';
import { AmazonPrepFeesDetails } from './AmazonPrepFeesDetails.js';
//# sourceMappingURL=SKUPrepInstructions.d.ts.map