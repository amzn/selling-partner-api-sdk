/**
 * The PropertyGroup model module.
 * @module producttypedefinitions_v2020_09_01/model/PropertyGroup
 * @version 2020-09-01
 */
export class PropertyGroup {
    /**
     * Constructs a <code>PropertyGroup</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {PropertyGroup} obj Optional instance to populate.
     * @return {PropertyGroup} The populated <code>PropertyGroup</code> instance.
     */
    static constructFromObject(data: any, obj: PropertyGroup): PropertyGroup;
    /**
     * The display label of the property group.
     * @member {String} title
     * @type {String}
     */
    title: string;
    /**
     * The description of the property group.
     * @member {String} description
     * @type {String}
     */
    description: string;
    /**
     * The names of the schema properties for the property group.
     * @member {[String]} propertyNames
     * @type {[String]}
     */
    propertyNames: [string];
}
//# sourceMappingURL=PropertyGroup.d.ts.map