/**
 * The GetPrepInstructionsResult model module.
 * @module fulfillmentinbound_v0/model/GetPrepInstructionsResult
 * @version v0
 */
export class GetPrepInstructionsResult {
    /**
     * Constructs a <code>GetPrepInstructionsResult</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {GetPrepInstructionsResult} obj Optional instance to populate.
     * @return {GetPrepInstructionsResult} The populated <code>GetPrepInstructionsResult</code> instance.
     */
    static constructFromObject(data: any, obj: GetPrepInstructionsResult): GetPrepInstructionsResult;
    /**
     * A list of SKU labeling requirements and item preparation instructions.
     * @member {SKUPrepInstructions[]} sKUPrepInstructionsList
     * @type {SKUPrepInstructions[]}
     */
    sKUPrepInstructionsList: SKUPrepInstructions[];
    /**
     * A list of invalid SKU values and the reason they are invalid.
     * @member {InvalidSKU[]} invalidSKUList
     * @type {InvalidSKU[]}
     */
    invalidSKUList: InvalidSKU[];
    /**
     * A list of item preparation instructions.
     * @member {ASINPrepInstructions[]} aSINPrepInstructionsList
     * @type {ASINPrepInstructions[]}
     */
    aSINPrepInstructionsList: ASINPrepInstructions[];
    /**
     * A list of invalid ASIN values and the reasons they are invalid.
     * @member {InvalidASIN[]} invalidASINList
     * @type {InvalidASIN[]}
     */
    invalidASINList: InvalidASIN[];
}
import { SKUPrepInstructions } from './SKUPrepInstructions.js';
import { InvalidSKU } from './InvalidSKU.js';
import { ASINPrepInstructions } from './ASINPrepInstructions.js';
import { InvalidASIN } from './InvalidASIN.js';
//# sourceMappingURL=GetPrepInstructionsResult.d.ts.map