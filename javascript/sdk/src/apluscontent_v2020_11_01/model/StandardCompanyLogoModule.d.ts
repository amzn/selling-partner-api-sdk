/**
 * The StandardCompanyLogoModule model module.
 * @module apluscontent_v2020_11_01/model/StandardCompanyLogoModule
 * @version 2020-11-01
 */
export class StandardCompanyLogoModule {
    /**
     * Constructs a <code>StandardCompanyLogoModule</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {StandardCompanyLogoModule} obj Optional instance to populate.
     * @return {StandardCompanyLogoModule} The populated <code>StandardCompanyLogoModule</code> instance.
     */
    static constructFromObject(data: any, obj: StandardCompanyLogoModule): StandardCompanyLogoModule;
    /**
     * Constructs a new <code>StandardCompanyLogoModule</code>.
     * The standard company logo image.
     * @alias module:apluscontent_v2020_11_01/model/StandardCompanyLogoModule
     * @class
     * @param companyLogo {ImageComponent}
     */
    constructor(companyLogo: ImageComponent);
    companyLogo: ImageComponent;
}
import { ImageComponent } from './ImageComponent.js';
//# sourceMappingURL=StandardCompanyLogoModule.d.ts.map