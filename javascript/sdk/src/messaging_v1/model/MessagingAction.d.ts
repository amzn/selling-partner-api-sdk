/**
 * The MessagingAction model module.
 * @module messaging_v1/model/MessagingAction
 * @version v1
 */
export class MessagingAction {
    /**
     * Constructs a <code>MessagingAction</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {MessagingAction} obj Optional instance to populate.
     * @return {MessagingAction} The populated <code>MessagingAction</code> instance.
     */
    static constructFromObject(data: any, obj: MessagingAction): MessagingAction;
    /**
     * Constructs a new <code>MessagingAction</code>.
     * A simple object containing the name of the template.
     * @alias module:messaging_v1/model/MessagingAction
     * @class
     * @param name {String} The name of the template.
     */
    constructor(name: string);
    name: string;
}
//# sourceMappingURL=MessagingAction.d.ts.map