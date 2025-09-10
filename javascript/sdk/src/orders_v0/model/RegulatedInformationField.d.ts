/**
 * The RegulatedInformationField model module.
 * @module orders_v0/model/RegulatedInformationField
 * @version v0
 */
export class RegulatedInformationField {
    /**
     * Constructs a <code>RegulatedInformationField</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {RegulatedInformationField} obj Optional instance to populate.
     * @return {RegulatedInformationField} The populated <code>RegulatedInformationField</code> instance.
     */
    static constructFromObject(data: any, obj: RegulatedInformationField): RegulatedInformationField;
    /**
     * Constructs a new <code>RegulatedInformationField</code>.
     * A field collected from the regulatory form.
     * @alias module:orders_v0/model/RegulatedInformationField
     * @class
     * @param fieldId {String} The unique identifier of the field.
     * @param fieldLabel {String} The name of the field.
     * @param fieldType {String} The type of field.
     * @param fieldValue {String} The content of the field as collected in regulatory form. Note that `FileAttachment` type fields contain a URL where you can download the attachment.
     */
    constructor(fieldId: string, fieldLabel: string, fieldType: string, fieldValue: string);
    fieldId: string;
    fieldLabel: string;
    fieldType: string;
    fieldValue: string;
}
export namespace RegulatedInformationField {
    namespace FieldTypeEnum {
        let Text: string;
        let FileAttachment: string;
    }
    /**
     * *
     */
    type FieldTypeEnum = string;
}
//# sourceMappingURL=RegulatedInformationField.d.ts.map