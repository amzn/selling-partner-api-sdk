/**
 * The Constraint model module.
 * @module merchantfulfillment_v0/model/Constraint
 * @version v0
 */
export class Constraint {
    /**
     * Constructs a <code>Constraint</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {Constraint} obj Optional instance to populate.
     * @return {Constraint} The populated <code>Constraint</code> instance.
     */
    static constructFromObject(data: any, obj: Constraint): Constraint;
    /**
     * Constructs a new <code>Constraint</code>.
     * A validation constraint.
     * @alias module:merchantfulfillment_v0/model/Constraint
     * @class
     * @param validationString {String} A validation string.
     */
    constructor(validationString: string);
    validationString: string;
    /**
     * A regular expression.
     * @member {String} validationRegEx
     * @type {String}
     */
    validationRegEx: string;
}
//# sourceMappingURL=Constraint.d.ts.map