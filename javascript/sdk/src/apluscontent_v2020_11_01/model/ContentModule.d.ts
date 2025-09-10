/**
 * The ContentModule model module.
 * @module apluscontent_v2020_11_01/model/ContentModule
 * @version 2020-11-01
 */
export class ContentModule {
    /**
     * Constructs a <code>ContentModule</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {ContentModule} obj Optional instance to populate.
     * @return {ContentModule} The populated <code>ContentModule</code> instance.
     */
    static constructFromObject(data: any, obj: ContentModule): ContentModule;
    /**
     * Constructs a new <code>ContentModule</code>.
     * An A+ Content module. An A+ Content document is composed of content modules. The &#x60;contentModuleType&#x60; property selects which content module types to use.
     * @alias module:apluscontent_v2020_11_01/model/ContentModule
     * @class
     * @param contentModuleType {ContentModuleType}
     */
    constructor(contentModuleType: ContentModuleType);
    contentModuleType: ContentModuleType;
    /**
     * @member {StandardCompanyLogoModule} standardCompanyLogo
     * @type {StandardCompanyLogoModule}
     */
    standardCompanyLogo: StandardCompanyLogoModule;
    /**
     * @member {StandardComparisonTableModule} standardComparisonTable
     * @type {StandardComparisonTableModule}
     */
    standardComparisonTable: StandardComparisonTableModule;
    /**
     * @member {StandardFourImageTextModule} standardFourImageText
     * @type {StandardFourImageTextModule}
     */
    standardFourImageText: StandardFourImageTextModule;
    /**
     * @member {StandardFourImageTextQuadrantModule} standardFourImageTextQuadrant
     * @type {StandardFourImageTextQuadrantModule}
     */
    standardFourImageTextQuadrant: StandardFourImageTextQuadrantModule;
    /**
     * @member {StandardHeaderImageTextModule} standardHeaderImageText
     * @type {StandardHeaderImageTextModule}
     */
    standardHeaderImageText: StandardHeaderImageTextModule;
    /**
     * @member {StandardImageSidebarModule} standardImageSidebar
     * @type {StandardImageSidebarModule}
     */
    standardImageSidebar: StandardImageSidebarModule;
    /**
     * @member {StandardImageTextOverlayModule} standardImageTextOverlay
     * @type {StandardImageTextOverlayModule}
     */
    standardImageTextOverlay: StandardImageTextOverlayModule;
    /**
     * @member {StandardMultipleImageTextModule} standardMultipleImageText
     * @type {StandardMultipleImageTextModule}
     */
    standardMultipleImageText: StandardMultipleImageTextModule;
    /**
     * @member {StandardProductDescriptionModule} standardProductDescription
     * @type {StandardProductDescriptionModule}
     */
    standardProductDescription: StandardProductDescriptionModule;
    /**
     * @member {StandardSingleImageHighlightsModule} standardSingleImageHighlights
     * @type {StandardSingleImageHighlightsModule}
     */
    standardSingleImageHighlights: StandardSingleImageHighlightsModule;
    /**
     * @member {StandardSingleImageSpecsDetailModule} standardSingleImageSpecsDetail
     * @type {StandardSingleImageSpecsDetailModule}
     */
    standardSingleImageSpecsDetail: StandardSingleImageSpecsDetailModule;
    /**
     * @member {StandardSingleSideImageModule} standardSingleSideImage
     * @type {StandardSingleSideImageModule}
     */
    standardSingleSideImage: StandardSingleSideImageModule;
    /**
     * @member {StandardTechSpecsModule} standardTechSpecs
     * @type {StandardTechSpecsModule}
     */
    standardTechSpecs: StandardTechSpecsModule;
    /**
     * @member {StandardTextModule} standardText
     * @type {StandardTextModule}
     */
    standardText: StandardTextModule;
    /**
     * @member {StandardThreeImageTextModule} standardThreeImageText
     * @type {StandardThreeImageTextModule}
     */
    standardThreeImageText: StandardThreeImageTextModule;
}
import { ContentModuleType } from './ContentModuleType.js';
import { StandardCompanyLogoModule } from './StandardCompanyLogoModule.js';
import { StandardComparisonTableModule } from './StandardComparisonTableModule.js';
import { StandardFourImageTextModule } from './StandardFourImageTextModule.js';
import { StandardFourImageTextQuadrantModule } from './StandardFourImageTextQuadrantModule.js';
import { StandardHeaderImageTextModule } from './StandardHeaderImageTextModule.js';
import { StandardImageSidebarModule } from './StandardImageSidebarModule.js';
import { StandardImageTextOverlayModule } from './StandardImageTextOverlayModule.js';
import { StandardMultipleImageTextModule } from './StandardMultipleImageTextModule.js';
import { StandardProductDescriptionModule } from './StandardProductDescriptionModule.js';
import { StandardSingleImageHighlightsModule } from './StandardSingleImageHighlightsModule.js';
import { StandardSingleImageSpecsDetailModule } from './StandardSingleImageSpecsDetailModule.js';
import { StandardSingleSideImageModule } from './StandardSingleSideImageModule.js';
import { StandardTechSpecsModule } from './StandardTechSpecsModule.js';
import { StandardTextModule } from './StandardTextModule.js';
import { StandardThreeImageTextModule } from './StandardThreeImageTextModule.js';
//# sourceMappingURL=ContentModule.d.ts.map