<?php

/**
 * ContentModule.
 *
 * PHP version 8.3
 *
 * @category Class
 *
 * @author   OpenAPI Generator team
 *
 * @see     https://openapi-generator.tech
 */

/**
 * Selling Partner API for A+ Content Management.
 *
 * Use the A+ Content API to build applications that help selling partners add rich marketing content to their Amazon product detail pages. Selling partners can use A+ content to share their brand and product story, which helps buyers make informed purchasing decisions. Selling partners use content modules to add images and text.
 *
 * The version of the OpenAPI document: 2020-11-01
 * Generated by: https://openapi-generator.tech
 * Generator version: 7.9.0
 */

/**
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

namespace SpApi\Model\aplusContent\v2020_11_01;

use SpApi\Model\ModelInterface;
use SpApi\ObjectSerializer;

/**
 * ContentModule Class Doc Comment.
 *
 * @category Class
 *
 * @description An A+ Content module. An A+ Content document is composed of content modules. The &#x60;contentModuleType&#x60; property selects which content module types to use.
 *
 * @author   OpenAPI Generator team
 *
 * @see     https://openapi-generator.tech
 *
 * @implements \ArrayAccess<string, mixed>
 */
class ContentModule implements ModelInterface, \ArrayAccess, \JsonSerializable
{
    public const DISCRIMINATOR = null;

    /**
     * The original name of the model.
     */
    protected static string $openAPIModelName = 'ContentModule';

    /**
     * Array of property to type mappings. Used for (de)serialization.
     *
     * @var string[]
     */
    protected static array $openAPITypes = [
        'content_module_type' => '\SpApi\Model\aplusContent\v2020_11_01\ContentModuleType',
        'standard_company_logo' => '\SpApi\Model\aplusContent\v2020_11_01\StandardCompanyLogoModule',
        'standard_comparison_table' => '\SpApi\Model\aplusContent\v2020_11_01\StandardComparisonTableModule',
        'standard_four_image_text' => '\SpApi\Model\aplusContent\v2020_11_01\StandardFourImageTextModule',
        'standard_four_image_text_quadrant' => '\SpApi\Model\aplusContent\v2020_11_01\StandardFourImageTextQuadrantModule',
        'standard_header_image_text' => '\SpApi\Model\aplusContent\v2020_11_01\StandardHeaderImageTextModule',
        'standard_image_sidebar' => '\SpApi\Model\aplusContent\v2020_11_01\StandardImageSidebarModule',
        'standard_image_text_overlay' => '\SpApi\Model\aplusContent\v2020_11_01\StandardImageTextOverlayModule',
        'standard_multiple_image_text' => '\SpApi\Model\aplusContent\v2020_11_01\StandardMultipleImageTextModule',
        'standard_product_description' => '\SpApi\Model\aplusContent\v2020_11_01\StandardProductDescriptionModule',
        'standard_single_image_highlights' => '\SpApi\Model\aplusContent\v2020_11_01\StandardSingleImageHighlightsModule',
        'standard_single_image_specs_detail' => '\SpApi\Model\aplusContent\v2020_11_01\StandardSingleImageSpecsDetailModule',
        'standard_single_side_image' => '\SpApi\Model\aplusContent\v2020_11_01\StandardSingleSideImageModule',
        'standard_tech_specs' => '\SpApi\Model\aplusContent\v2020_11_01\StandardTechSpecsModule',
        'standard_text' => '\SpApi\Model\aplusContent\v2020_11_01\StandardTextModule',
        'standard_three_image_text' => '\SpApi\Model\aplusContent\v2020_11_01\StandardThreeImageTextModule'];

    /**
     * Array of property to format mappings. Used for (de)serialization.
     *
     * @var string[]
     *
     * @phpstan-var array<string, string|null>
     *
     * @psalm-var array<string, string|null>
     */
    protected static array $openAPIFormats = [
        'content_module_type' => null,
        'standard_company_logo' => null,
        'standard_comparison_table' => null,
        'standard_four_image_text' => null,
        'standard_four_image_text_quadrant' => null,
        'standard_header_image_text' => null,
        'standard_image_sidebar' => null,
        'standard_image_text_overlay' => null,
        'standard_multiple_image_text' => null,
        'standard_product_description' => null,
        'standard_single_image_highlights' => null,
        'standard_single_image_specs_detail' => null,
        'standard_single_side_image' => null,
        'standard_tech_specs' => null,
        'standard_text' => null,
        'standard_three_image_text' => null];

    /**
     * Array of nullable properties. Used for (de)serialization.
     *
     * @var bool[]
     */
    protected static array $openAPINullables = [
        'content_module_type' => false,
        'standard_company_logo' => true,
        'standard_comparison_table' => true,
        'standard_four_image_text' => true,
        'standard_four_image_text_quadrant' => true,
        'standard_header_image_text' => true,
        'standard_image_sidebar' => true,
        'standard_image_text_overlay' => true,
        'standard_multiple_image_text' => true,
        'standard_product_description' => true,
        'standard_single_image_highlights' => true,
        'standard_single_image_specs_detail' => true,
        'standard_single_side_image' => true,
        'standard_tech_specs' => true,
        'standard_text' => true,
        'standard_three_image_text' => true,
    ];

    /**
     * If a nullable field gets set to null, insert it here.
     *
     * @var bool[]
     */
    protected array $openAPINullablesSetToNull = [];

    /**
     * Array of attributes where the key is the local name,
     * and the value is the original name.
     *
     * @var string[]
     */
    protected static array $attributeMap = [
        'content_module_type' => 'contentModuleType',
        'standard_company_logo' => 'standardCompanyLogo',
        'standard_comparison_table' => 'standardComparisonTable',
        'standard_four_image_text' => 'standardFourImageText',
        'standard_four_image_text_quadrant' => 'standardFourImageTextQuadrant',
        'standard_header_image_text' => 'standardHeaderImageText',
        'standard_image_sidebar' => 'standardImageSidebar',
        'standard_image_text_overlay' => 'standardImageTextOverlay',
        'standard_multiple_image_text' => 'standardMultipleImageText',
        'standard_product_description' => 'standardProductDescription',
        'standard_single_image_highlights' => 'standardSingleImageHighlights',
        'standard_single_image_specs_detail' => 'standardSingleImageSpecsDetail',
        'standard_single_side_image' => 'standardSingleSideImage',
        'standard_tech_specs' => 'standardTechSpecs',
        'standard_text' => 'standardText',
        'standard_three_image_text' => 'standardThreeImageText',
    ];

    /**
     * Array of attributes to setter functions (for deserialization of responses).
     *
     * @var string[]
     */
    protected static array $setters = [
        'content_module_type' => 'setContentModuleType',
        'standard_company_logo' => 'setStandardCompanyLogo',
        'standard_comparison_table' => 'setStandardComparisonTable',
        'standard_four_image_text' => 'setStandardFourImageText',
        'standard_four_image_text_quadrant' => 'setStandardFourImageTextQuadrant',
        'standard_header_image_text' => 'setStandardHeaderImageText',
        'standard_image_sidebar' => 'setStandardImageSidebar',
        'standard_image_text_overlay' => 'setStandardImageTextOverlay',
        'standard_multiple_image_text' => 'setStandardMultipleImageText',
        'standard_product_description' => 'setStandardProductDescription',
        'standard_single_image_highlights' => 'setStandardSingleImageHighlights',
        'standard_single_image_specs_detail' => 'setStandardSingleImageSpecsDetail',
        'standard_single_side_image' => 'setStandardSingleSideImage',
        'standard_tech_specs' => 'setStandardTechSpecs',
        'standard_text' => 'setStandardText',
        'standard_three_image_text' => 'setStandardThreeImageText',
    ];

    /**
     * Array of attributes to getter functions (for serialization of requests).
     *
     * @var string[]
     */
    protected static array $getters = [
        'content_module_type' => 'getContentModuleType',
        'standard_company_logo' => 'getStandardCompanyLogo',
        'standard_comparison_table' => 'getStandardComparisonTable',
        'standard_four_image_text' => 'getStandardFourImageText',
        'standard_four_image_text_quadrant' => 'getStandardFourImageTextQuadrant',
        'standard_header_image_text' => 'getStandardHeaderImageText',
        'standard_image_sidebar' => 'getStandardImageSidebar',
        'standard_image_text_overlay' => 'getStandardImageTextOverlay',
        'standard_multiple_image_text' => 'getStandardMultipleImageText',
        'standard_product_description' => 'getStandardProductDescription',
        'standard_single_image_highlights' => 'getStandardSingleImageHighlights',
        'standard_single_image_specs_detail' => 'getStandardSingleImageSpecsDetail',
        'standard_single_side_image' => 'getStandardSingleSideImage',
        'standard_tech_specs' => 'getStandardTechSpecs',
        'standard_text' => 'getStandardText',
        'standard_three_image_text' => 'getStandardThreeImageText',
    ];

    /**
     * Associative array for storing property values.
     */
    protected array $container = [];

    /**
     * Constructor.
     *
     * @param null|array $data Associated array of property values
     *                         initializing the model
     */
    public function __construct(?array $data = null)
    {
        $this->setIfExists('content_module_type', $data ?? [], null);
        $this->setIfExists('standard_company_logo', $data ?? [], null);
        $this->setIfExists('standard_comparison_table', $data ?? [], null);
        $this->setIfExists('standard_four_image_text', $data ?? [], null);
        $this->setIfExists('standard_four_image_text_quadrant', $data ?? [], null);
        $this->setIfExists('standard_header_image_text', $data ?? [], null);
        $this->setIfExists('standard_image_sidebar', $data ?? [], null);
        $this->setIfExists('standard_image_text_overlay', $data ?? [], null);
        $this->setIfExists('standard_multiple_image_text', $data ?? [], null);
        $this->setIfExists('standard_product_description', $data ?? [], null);
        $this->setIfExists('standard_single_image_highlights', $data ?? [], null);
        $this->setIfExists('standard_single_image_specs_detail', $data ?? [], null);
        $this->setIfExists('standard_single_side_image', $data ?? [], null);
        $this->setIfExists('standard_tech_specs', $data ?? [], null);
        $this->setIfExists('standard_text', $data ?? [], null);
        $this->setIfExists('standard_three_image_text', $data ?? [], null);
    }

    /**
     * Gets the string presentation of the object.
     *
     * @return string
     */
    public function __toString()
    {
        return json_encode(
            ObjectSerializer::sanitizeForSerialization($this),
            JSON_PRETTY_PRINT
        );
    }

    /**
     * Array of property to type mappings. Used for (de)serialization.
     */
    public static function openAPITypes(): array
    {
        return self::$openAPITypes;
    }

    /**
     * Array of property to format mappings. Used for (de)serialization.
     */
    public static function openAPIFormats(): array
    {
        return self::$openAPIFormats;
    }

    /**
     * Checks if a property is nullable.
     */
    public static function isNullable(string $property): bool
    {
        return self::openAPINullables()[$property] ?? false;
    }

    /**
     * Checks if a nullable property is set to null.
     */
    public function isNullableSetToNull(string $property): bool
    {
        return in_array($property, $this->getOpenAPINullablesSetToNull(), true);
    }

    /**
     * Array of attributes where the key is the local name,
     * and the value is the original name.
     */
    public static function attributeMap(): array
    {
        return self::$attributeMap;
    }

    /**
     * Array of attributes to setter functions (for deserialization of responses).
     */
    public static function setters(): array
    {
        return self::$setters;
    }

    /**
     * Array of attributes to getter functions (for serialization of requests).
     */
    public static function getters(): array
    {
        return self::$getters;
    }

    /**
     * The original name of the model.
     */
    public function getModelName(): string
    {
        return self::$openAPIModelName;
    }

    /**
     * Show all the invalid properties with reasons.
     *
     * @return array invalid properties with reasons
     */
    public function listInvalidProperties(): array
    {
        $invalidProperties = [];

        if (null === $this->container['content_module_type']) {
            $invalidProperties[] = "'content_module_type' can't be null";
        }

        return $invalidProperties;
    }

    /**
     * Validate all the properties in the model
     * return true if all passed.
     *
     * @return bool True if all properties are valid
     */
    public function valid(): bool
    {
        return 0 === count($this->listInvalidProperties());
    }

    /**
     * Gets content_module_type.
     */
    public function getContentModuleType(): string
    {
        return $this->container['content_module_type'];
    }

    /**
     * Sets content_module_type.
     *
     * @param string $content_module_type content_module_type
     */
    public function setContentModuleType(string $content_module_type): self
    {
        if (is_null($content_module_type)) {
            throw new \InvalidArgumentException('non-nullable content_module_type cannot be null');
        }
        $this->container['content_module_type'] = $content_module_type;

        return $this;
    }

    /**
     * Gets standard_company_logo.
     */
    public function getStandardCompanyLogo(): ?StandardCompanyLogoModule
    {
        return $this->container['standard_company_logo'];
    }

    /**
     * Sets standard_company_logo.
     *
     * @param null|StandardCompanyLogoModule $standard_company_logo standard_company_logo
     */
    public function setStandardCompanyLogo(?StandardCompanyLogoModule $standard_company_logo): self
    {
        if (is_null($standard_company_logo)) {
            array_push($this->openAPINullablesSetToNull, 'standard_company_logo');
        } else {
            $nullablesSetToNull = $this->getOpenAPINullablesSetToNull();
            $index = array_search('standard_company_logo', $nullablesSetToNull);
            if (false !== $index) {
                unset($nullablesSetToNull[$index]);
                $this->setOpenAPINullablesSetToNull($nullablesSetToNull);
            }
        }
        $this->container['standard_company_logo'] = $standard_company_logo;

        return $this;
    }

    /**
     * Gets standard_comparison_table.
     */
    public function getStandardComparisonTable(): ?StandardComparisonTableModule
    {
        return $this->container['standard_comparison_table'];
    }

    /**
     * Sets standard_comparison_table.
     *
     * @param null|StandardComparisonTableModule $standard_comparison_table standard_comparison_table
     */
    public function setStandardComparisonTable(?StandardComparisonTableModule $standard_comparison_table): self
    {
        if (is_null($standard_comparison_table)) {
            array_push($this->openAPINullablesSetToNull, 'standard_comparison_table');
        } else {
            $nullablesSetToNull = $this->getOpenAPINullablesSetToNull();
            $index = array_search('standard_comparison_table', $nullablesSetToNull);
            if (false !== $index) {
                unset($nullablesSetToNull[$index]);
                $this->setOpenAPINullablesSetToNull($nullablesSetToNull);
            }
        }
        $this->container['standard_comparison_table'] = $standard_comparison_table;

        return $this;
    }

    /**
     * Gets standard_four_image_text.
     */
    public function getStandardFourImageText(): ?StandardFourImageTextModule
    {
        return $this->container['standard_four_image_text'];
    }

    /**
     * Sets standard_four_image_text.
     *
     * @param null|StandardFourImageTextModule $standard_four_image_text standard_four_image_text
     */
    public function setStandardFourImageText(?StandardFourImageTextModule $standard_four_image_text): self
    {
        if (is_null($standard_four_image_text)) {
            array_push($this->openAPINullablesSetToNull, 'standard_four_image_text');
        } else {
            $nullablesSetToNull = $this->getOpenAPINullablesSetToNull();
            $index = array_search('standard_four_image_text', $nullablesSetToNull);
            if (false !== $index) {
                unset($nullablesSetToNull[$index]);
                $this->setOpenAPINullablesSetToNull($nullablesSetToNull);
            }
        }
        $this->container['standard_four_image_text'] = $standard_four_image_text;

        return $this;
    }

    /**
     * Gets standard_four_image_text_quadrant.
     */
    public function getStandardFourImageTextQuadrant(): ?StandardFourImageTextQuadrantModule
    {
        return $this->container['standard_four_image_text_quadrant'];
    }

    /**
     * Sets standard_four_image_text_quadrant.
     *
     * @param null|StandardFourImageTextQuadrantModule $standard_four_image_text_quadrant standard_four_image_text_quadrant
     */
    public function setStandardFourImageTextQuadrant(?StandardFourImageTextQuadrantModule $standard_four_image_text_quadrant): self
    {
        if (is_null($standard_four_image_text_quadrant)) {
            array_push($this->openAPINullablesSetToNull, 'standard_four_image_text_quadrant');
        } else {
            $nullablesSetToNull = $this->getOpenAPINullablesSetToNull();
            $index = array_search('standard_four_image_text_quadrant', $nullablesSetToNull);
            if (false !== $index) {
                unset($nullablesSetToNull[$index]);
                $this->setOpenAPINullablesSetToNull($nullablesSetToNull);
            }
        }
        $this->container['standard_four_image_text_quadrant'] = $standard_four_image_text_quadrant;

        return $this;
    }

    /**
     * Gets standard_header_image_text.
     */
    public function getStandardHeaderImageText(): ?StandardHeaderImageTextModule
    {
        return $this->container['standard_header_image_text'];
    }

    /**
     * Sets standard_header_image_text.
     *
     * @param null|StandardHeaderImageTextModule $standard_header_image_text standard_header_image_text
     */
    public function setStandardHeaderImageText(?StandardHeaderImageTextModule $standard_header_image_text): self
    {
        if (is_null($standard_header_image_text)) {
            array_push($this->openAPINullablesSetToNull, 'standard_header_image_text');
        } else {
            $nullablesSetToNull = $this->getOpenAPINullablesSetToNull();
            $index = array_search('standard_header_image_text', $nullablesSetToNull);
            if (false !== $index) {
                unset($nullablesSetToNull[$index]);
                $this->setOpenAPINullablesSetToNull($nullablesSetToNull);
            }
        }
        $this->container['standard_header_image_text'] = $standard_header_image_text;

        return $this;
    }

    /**
     * Gets standard_image_sidebar.
     */
    public function getStandardImageSidebar(): ?StandardImageSidebarModule
    {
        return $this->container['standard_image_sidebar'];
    }

    /**
     * Sets standard_image_sidebar.
     *
     * @param null|StandardImageSidebarModule $standard_image_sidebar standard_image_sidebar
     */
    public function setStandardImageSidebar(?StandardImageSidebarModule $standard_image_sidebar): self
    {
        if (is_null($standard_image_sidebar)) {
            array_push($this->openAPINullablesSetToNull, 'standard_image_sidebar');
        } else {
            $nullablesSetToNull = $this->getOpenAPINullablesSetToNull();
            $index = array_search('standard_image_sidebar', $nullablesSetToNull);
            if (false !== $index) {
                unset($nullablesSetToNull[$index]);
                $this->setOpenAPINullablesSetToNull($nullablesSetToNull);
            }
        }
        $this->container['standard_image_sidebar'] = $standard_image_sidebar;

        return $this;
    }

    /**
     * Gets standard_image_text_overlay.
     */
    public function getStandardImageTextOverlay(): ?StandardImageTextOverlayModule
    {
        return $this->container['standard_image_text_overlay'];
    }

    /**
     * Sets standard_image_text_overlay.
     *
     * @param null|StandardImageTextOverlayModule $standard_image_text_overlay standard_image_text_overlay
     */
    public function setStandardImageTextOverlay(?StandardImageTextOverlayModule $standard_image_text_overlay): self
    {
        if (is_null($standard_image_text_overlay)) {
            array_push($this->openAPINullablesSetToNull, 'standard_image_text_overlay');
        } else {
            $nullablesSetToNull = $this->getOpenAPINullablesSetToNull();
            $index = array_search('standard_image_text_overlay', $nullablesSetToNull);
            if (false !== $index) {
                unset($nullablesSetToNull[$index]);
                $this->setOpenAPINullablesSetToNull($nullablesSetToNull);
            }
        }
        $this->container['standard_image_text_overlay'] = $standard_image_text_overlay;

        return $this;
    }

    /**
     * Gets standard_multiple_image_text.
     */
    public function getStandardMultipleImageText(): ?StandardMultipleImageTextModule
    {
        return $this->container['standard_multiple_image_text'];
    }

    /**
     * Sets standard_multiple_image_text.
     *
     * @param null|StandardMultipleImageTextModule $standard_multiple_image_text standard_multiple_image_text
     */
    public function setStandardMultipleImageText(?StandardMultipleImageTextModule $standard_multiple_image_text): self
    {
        if (is_null($standard_multiple_image_text)) {
            array_push($this->openAPINullablesSetToNull, 'standard_multiple_image_text');
        } else {
            $nullablesSetToNull = $this->getOpenAPINullablesSetToNull();
            $index = array_search('standard_multiple_image_text', $nullablesSetToNull);
            if (false !== $index) {
                unset($nullablesSetToNull[$index]);
                $this->setOpenAPINullablesSetToNull($nullablesSetToNull);
            }
        }
        $this->container['standard_multiple_image_text'] = $standard_multiple_image_text;

        return $this;
    }

    /**
     * Gets standard_product_description.
     */
    public function getStandardProductDescription(): ?StandardProductDescriptionModule
    {
        return $this->container['standard_product_description'];
    }

    /**
     * Sets standard_product_description.
     *
     * @param null|StandardProductDescriptionModule $standard_product_description standard_product_description
     */
    public function setStandardProductDescription(?StandardProductDescriptionModule $standard_product_description): self
    {
        if (is_null($standard_product_description)) {
            array_push($this->openAPINullablesSetToNull, 'standard_product_description');
        } else {
            $nullablesSetToNull = $this->getOpenAPINullablesSetToNull();
            $index = array_search('standard_product_description', $nullablesSetToNull);
            if (false !== $index) {
                unset($nullablesSetToNull[$index]);
                $this->setOpenAPINullablesSetToNull($nullablesSetToNull);
            }
        }
        $this->container['standard_product_description'] = $standard_product_description;

        return $this;
    }

    /**
     * Gets standard_single_image_highlights.
     */
    public function getStandardSingleImageHighlights(): ?StandardSingleImageHighlightsModule
    {
        return $this->container['standard_single_image_highlights'];
    }

    /**
     * Sets standard_single_image_highlights.
     *
     * @param null|StandardSingleImageHighlightsModule $standard_single_image_highlights standard_single_image_highlights
     */
    public function setStandardSingleImageHighlights(?StandardSingleImageHighlightsModule $standard_single_image_highlights): self
    {
        if (is_null($standard_single_image_highlights)) {
            array_push($this->openAPINullablesSetToNull, 'standard_single_image_highlights');
        } else {
            $nullablesSetToNull = $this->getOpenAPINullablesSetToNull();
            $index = array_search('standard_single_image_highlights', $nullablesSetToNull);
            if (false !== $index) {
                unset($nullablesSetToNull[$index]);
                $this->setOpenAPINullablesSetToNull($nullablesSetToNull);
            }
        }
        $this->container['standard_single_image_highlights'] = $standard_single_image_highlights;

        return $this;
    }

    /**
     * Gets standard_single_image_specs_detail.
     */
    public function getStandardSingleImageSpecsDetail(): ?StandardSingleImageSpecsDetailModule
    {
        return $this->container['standard_single_image_specs_detail'];
    }

    /**
     * Sets standard_single_image_specs_detail.
     *
     * @param null|StandardSingleImageSpecsDetailModule $standard_single_image_specs_detail standard_single_image_specs_detail
     */
    public function setStandardSingleImageSpecsDetail(?StandardSingleImageSpecsDetailModule $standard_single_image_specs_detail): self
    {
        if (is_null($standard_single_image_specs_detail)) {
            array_push($this->openAPINullablesSetToNull, 'standard_single_image_specs_detail');
        } else {
            $nullablesSetToNull = $this->getOpenAPINullablesSetToNull();
            $index = array_search('standard_single_image_specs_detail', $nullablesSetToNull);
            if (false !== $index) {
                unset($nullablesSetToNull[$index]);
                $this->setOpenAPINullablesSetToNull($nullablesSetToNull);
            }
        }
        $this->container['standard_single_image_specs_detail'] = $standard_single_image_specs_detail;

        return $this;
    }

    /**
     * Gets standard_single_side_image.
     */
    public function getStandardSingleSideImage(): ?StandardSingleSideImageModule
    {
        return $this->container['standard_single_side_image'];
    }

    /**
     * Sets standard_single_side_image.
     *
     * @param null|StandardSingleSideImageModule $standard_single_side_image standard_single_side_image
     */
    public function setStandardSingleSideImage(?StandardSingleSideImageModule $standard_single_side_image): self
    {
        if (is_null($standard_single_side_image)) {
            array_push($this->openAPINullablesSetToNull, 'standard_single_side_image');
        } else {
            $nullablesSetToNull = $this->getOpenAPINullablesSetToNull();
            $index = array_search('standard_single_side_image', $nullablesSetToNull);
            if (false !== $index) {
                unset($nullablesSetToNull[$index]);
                $this->setOpenAPINullablesSetToNull($nullablesSetToNull);
            }
        }
        $this->container['standard_single_side_image'] = $standard_single_side_image;

        return $this;
    }

    /**
     * Gets standard_tech_specs.
     */
    public function getStandardTechSpecs(): ?StandardTechSpecsModule
    {
        return $this->container['standard_tech_specs'];
    }

    /**
     * Sets standard_tech_specs.
     *
     * @param null|StandardTechSpecsModule $standard_tech_specs standard_tech_specs
     */
    public function setStandardTechSpecs(?StandardTechSpecsModule $standard_tech_specs): self
    {
        if (is_null($standard_tech_specs)) {
            array_push($this->openAPINullablesSetToNull, 'standard_tech_specs');
        } else {
            $nullablesSetToNull = $this->getOpenAPINullablesSetToNull();
            $index = array_search('standard_tech_specs', $nullablesSetToNull);
            if (false !== $index) {
                unset($nullablesSetToNull[$index]);
                $this->setOpenAPINullablesSetToNull($nullablesSetToNull);
            }
        }
        $this->container['standard_tech_specs'] = $standard_tech_specs;

        return $this;
    }

    /**
     * Gets standard_text.
     */
    public function getStandardText(): ?StandardTextModule
    {
        return $this->container['standard_text'];
    }

    /**
     * Sets standard_text.
     *
     * @param null|StandardTextModule $standard_text standard_text
     */
    public function setStandardText(?StandardTextModule $standard_text): self
    {
        if (is_null($standard_text)) {
            array_push($this->openAPINullablesSetToNull, 'standard_text');
        } else {
            $nullablesSetToNull = $this->getOpenAPINullablesSetToNull();
            $index = array_search('standard_text', $nullablesSetToNull);
            if (false !== $index) {
                unset($nullablesSetToNull[$index]);
                $this->setOpenAPINullablesSetToNull($nullablesSetToNull);
            }
        }
        $this->container['standard_text'] = $standard_text;

        return $this;
    }

    /**
     * Gets standard_three_image_text.
     */
    public function getStandardThreeImageText(): ?StandardThreeImageTextModule
    {
        return $this->container['standard_three_image_text'];
    }

    /**
     * Sets standard_three_image_text.
     *
     * @param null|StandardThreeImageTextModule $standard_three_image_text standard_three_image_text
     */
    public function setStandardThreeImageText(?StandardThreeImageTextModule $standard_three_image_text): self
    {
        if (is_null($standard_three_image_text)) {
            array_push($this->openAPINullablesSetToNull, 'standard_three_image_text');
        } else {
            $nullablesSetToNull = $this->getOpenAPINullablesSetToNull();
            $index = array_search('standard_three_image_text', $nullablesSetToNull);
            if (false !== $index) {
                unset($nullablesSetToNull[$index]);
                $this->setOpenAPINullablesSetToNull($nullablesSetToNull);
            }
        }
        $this->container['standard_three_image_text'] = $standard_three_image_text;

        return $this;
    }

    /**
     * Returns true if offset exists. False otherwise.
     *
     * @param int $offset Offset
     */
    public function offsetExists($offset): bool
    {
        return isset($this->container[$offset]);
    }

    /**
     * Gets offset.
     *
     * @param int $offset Offset
     *
     * @return null|mixed
     */
    #[\ReturnTypeWillChange]
    public function offsetGet($offset): mixed
    {
        return $this->container[$offset] ?? null;
    }

    /**
     * Sets value based on offset.
     *
     * @param null|int $offset Offset
     * @param mixed    $value  Value to be set
     */
    public function offsetSet($offset, mixed $value): void
    {
        if (is_null($offset)) {
            $this->container[] = $value;
        } else {
            $this->container[$offset] = $value;
        }
    }

    /**
     * Unsets offset.
     *
     * @param int $offset Offset
     */
    public function offsetUnset($offset): void
    {
        unset($this->container[$offset]);
    }

    /**
     * Serializes the object to a value that can be serialized natively by json_encode().
     *
     * @see https://www.php.net/manual/en/jsonserializable.jsonserialize.php
     *
     * @return mixed returns data which can be serialized by json_encode(), which is a value
     *               of any type other than a resource
     */
    #[\ReturnTypeWillChange]
    public function jsonSerialize(): mixed
    {
        return ObjectSerializer::sanitizeForSerialization($this);
    }

    /**
     * Gets a header-safe presentation of the object.
     */
    public function toHeaderValue(): string
    {
        return json_encode(ObjectSerializer::sanitizeForSerialization($this));
    }

    /**
     * Array of nullable properties.
     */
    protected static function openAPINullables(): array
    {
        return self::$openAPINullables;
    }

    /**
     * Array of nullable field names deliberately set to null.
     *
     * @return bool[]
     */
    private function getOpenAPINullablesSetToNull(): array
    {
        return $this->openAPINullablesSetToNull;
    }

    /**
     * Setter - Array of nullable field names deliberately set to null.
     *
     * @param bool[] $openAPINullablesSetToNull
     */
    private function setOpenAPINullablesSetToNull(array $openAPINullablesSetToNull): void
    {
        $this->openAPINullablesSetToNull = $openAPINullablesSetToNull;
    }

    /**
     * Sets $this->container[$variableName] to the given data or to the given default Value; if $variableName
     * is nullable and its value is set to null in the $fields array, then mark it as "set to null" in the
     * $this->openAPINullablesSetToNull array.
     *
     * @param mixed $defaultValue
     */
    private function setIfExists(string $variableName, array $fields, $defaultValue): void
    {
        if (self::isNullable($variableName) && array_key_exists($variableName, $fields) && is_null($fields[$variableName])) {
            $this->openAPINullablesSetToNull[] = $variableName;
        }

        $this->container[$variableName] = $fields[$variableName] ?? $defaultValue;
    }
}
