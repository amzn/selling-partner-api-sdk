/**
 * The EncryptionDetails model module.
 * @module services_v1/model/EncryptionDetails
 * @version v1
 */
export class EncryptionDetails {
    /**
     * Constructs a <code>EncryptionDetails</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {EncryptionDetails} obj Optional instance to populate.
     * @return {EncryptionDetails} The populated <code>EncryptionDetails</code> instance.
     */
    static constructFromObject(data: any, obj: EncryptionDetails): EncryptionDetails;
    /**
     * Constructs a new <code>EncryptionDetails</code>.
     * Encryption details for required client-side encryption and decryption of document contents.
     * @alias module:services_v1/model/EncryptionDetails
     * @class
     * @param standard {String} The encryption standard required to encrypt or decrypt the document contents.
     * @param initializationVector {String} The vector to encrypt or decrypt the document contents using Cipher Block Chaining (CBC).
     * @param key {String} The encryption key used to encrypt or decrypt the document contents.
     */
    constructor(standard: string, initializationVector: string, key: string);
    standard: string;
    initializationVector: string;
    key: string;
}
export namespace EncryptionDetails {
    namespace StandardEnum {
        let AES: string;
    }
    /**
     * *
     */
    type StandardEnum = string;
}
//# sourceMappingURL=EncryptionDetails.d.ts.map