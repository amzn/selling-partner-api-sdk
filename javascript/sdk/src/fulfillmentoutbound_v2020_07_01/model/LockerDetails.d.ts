/**
 * The LockerDetails model module.
 * @module fulfillmentoutbound_v2020_07_01/model/LockerDetails
 * @version 2020-07-01
 */
export class LockerDetails {
    /**
     * Constructs a <code>LockerDetails</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {LockerDetails} obj Optional instance to populate.
     * @return {LockerDetails} The populated <code>LockerDetails</code> instance.
     */
    static constructFromObject(data: any, obj: LockerDetails): LockerDetails;
    /**
     * Indicates the locker number
     * @member {String} lockerNumber
     * @type {String}
     */
    lockerNumber: string;
    /**
     * Indicates the locker access code
     * @member {String} lockerAccessCode
     * @type {String}
     */
    lockerAccessCode: string;
}
//# sourceMappingURL=LockerDetails.d.ts.map