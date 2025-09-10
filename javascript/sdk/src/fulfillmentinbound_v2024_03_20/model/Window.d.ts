/**
 * The Window model module.
 * @module fulfillmentinbound_v2024_03_20/model/Window
 * @version 2024-03-20
 */
export class Window {
    /**
     * Constructs a <code>Window</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {Window} obj Optional instance to populate.
     * @return {Window} The populated <code>Window</code> instance.
     */
    static constructFromObject(data: any, obj: Window): Window;
    /**
     * Constructs a new <code>Window</code>.
     * Contains a start and end DateTime representing a time range.
     * @alias module:fulfillmentinbound_v2024_03_20/model/Window
     * @class
     * @param end {Date} The end timestamp of the window.
     * @param start {Date} The start timestamp of the window.
     */
    constructor(end: Date, start: Date);
    end: Date;
    start: Date;
    /**
     * The timestamp at which this Window can no longer be edited.
     * @member {Date} editableUntil
     * @type {Date}
     */
    editableUntil: Date;
}
//# sourceMappingURL=Window.d.ts.map