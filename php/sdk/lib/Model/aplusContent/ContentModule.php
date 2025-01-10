<?php
/**
 * ContentModule
 *
 * PHP version 7.4
 *
 * @category Class
 * @package  OpenAPI\Client
 * @author   OpenAPI Generator team
 * @link     https://openapi-generator.tech
 */

/**
 * Selling Partner API for A+ Content Management
 *
 * With the A+ Content API, you can build applications that help selling partners add rich marketing content to their Amazon product detail pages. A+ content helps selling partners share their brand and product story, which helps buyers make informed purchasing decisions. Selling partners assemble content by choosing from content modules and adding images and text.
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

namespace OpenAPI\Client\Model\aplusContent;

use
ArrayAccess;
use OpenAPI\Client\ObjectSerializer;
use OpenAPI\Client\Model\ModelInterface;

/**
 * ContentModule Class Doc Comment
 *
 * @category Class
 * @description An A+ Content module. An A+ Content document is composed of content modules. The contentModuleType property selects which content module types to use.
 * @package  OpenAPI\Client
 * @author   OpenAPI Generator team
 * @link     https://openapi-generator.tech
 * @implements \ArrayAccess<string, mixed>
 */
class ContentModule implements ModelInterface, ArrayAccess, \JsonSerializable
{
    public const DISCRIMINATOR = null;

    /**
      * The original name of the model.
      *
      * @var string
      */
    protected static string $openAPIModelName = 'ContentModule';

    /**
      * Array of property to type mappings. Used for (de)serialization
      *
      * @var string[]
      */
    protected static array $openAPITypes = [
             'content_module_type' => '\OpenAPI\Client\Model\aplusContent\ContentModuleType',
             'standard_company_logo' => '\OpenAPI\Client\Model\aplusContent\StandardCompanyLogoModule',
             'standard_comparison_table' => '\OpenAPI\Client\Model\aplusContent\StandardComparisonTableModule',
             'standard_four_image_text' => '\OpenAPI\Client\Model\aplusContent\StandardFourImageTextModule',
             'standard_four_image_text_quadrant' => '\OpenAPI\Client\Model\aplusContent\StandardFourImageTextQuadrantModule',
             'standard_header_image_text' => '\OpenAPI\Client\Model\aplusContent\StandardHeaderImageTextModule',
             'standard_image_sidebar' => '\OpenAPI\Client\Model\aplusContent\StandardImageSidebarModule',
             'standard_image_text_overlay' => '\OpenAPI\Client\Model\aplusContent\StandardImageTextOverlayModule',
             'standard_multiple_image_text' => '\OpenAPI\Client\Model\aplusContent\StandardMultipleImageTextModule',
             'standard_product_description' => '\OpenAPI\Client\Model\aplusContent\StandardProductDescriptionModule',
             'standard_single_image_highlights' => '\OpenAPI\Client\Model\aplusContent\StandardSingleImageHighlightsModule',
             'standard_single_image_specs_detail' => '\OpenAPI\Client\Model\aplusContent\StandardSingleImageSpecsDetailModule',
             'standard_single_side_image' => '\OpenAPI\Client\Model\aplusContent\StandardSingleSideImageModule',
             'standard_tech_specs' => '\OpenAPI\Client\Model\aplusContent\StandardTechSpecsModule',
             'standard_text' => '\OpenAPI\Client\Model\aplusContent\StandardTextModule',
             'standard_three_image_text' => '\OpenAPI\Client\Model\aplusContent\StandardThreeImageTextModule'    ];

    /**
      * Array of property to format mappings. Used for (de)serialization
      *
      * @var string[]
      * @phpstan-var array<string, string|null>
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
            'standard_three_image_text' => null    ];

    /**
      * Array of nullable properties. Used for (de)serialization
      *
      * @var boolean[]
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
        'standard_three_image_text' => true
    ];

    /**
      * If a nullable field gets set to null, insert it here
      *
      * @var boolean[]
      */
    protected array $openAPINullablesSetToNull = [];

    /**
     * Array of property to type mappings. Used for (de)serialization
     *
     * @return array
     */
    public static function openAPITypes(): array
    {
        return self::$openAPITypes;
    }

    /**
     * Array of property to format mappings. Used for (de)serialization
     *
     * @return array
     */
    public static function openAPIFormats(): array
    {
        return self::$openAPIFormats;
    }

    /**
     * Array of nullable properties
     *
     * @return array
     */
    protected static function openAPINullables(): array
    {
        return self::$openAPINullables;
    }

    /**
     * Array of nullable field names deliberately set to null
     *
     * @return boolean[]
     */
    private function getOpenAPINullablesSetToNull(): array
    {
        return $this->openAPINullablesSetToNull;
    }

    /**
     * Setter - Array of nullable field names deliberately set to null
     *
     * @param boolean[] $openAPINullablesSetToNull
     */
    private function setOpenAPINullablesSetToNull(array $openAPINullablesSetToNull): void
    {
        $this->openAPINullablesSetToNull = $openAPINullablesSetToNull;
    }

    /**
     * Checks if a property is nullable
     *
     * @param string $property
     * @return bool
     */
    public static function isNullable(string $property): bool
    {
        return self::openAPINullables()[$property] ?? false;
    }

    /**
     * Checks if a nullable property is set to null.
     *
     * @param string $property
     * @return bool
     */
    public function isNullableSetToNull(string $property): bool
    {
        return in_array($property, $this->getOpenAPINullablesSetToNull(), true);
    }

    /**
     * Array of attributes where the key is the local name,
     * and the value is the original name
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
                'standard_three_image_text' => 'standardThreeImageText'
        
    ];

    /**
     * Array of attributes to setter functions (for deserialization of responses)
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
        'standard_three_image_text' => 'setStandardThreeImageText'
    ];

    /**
     * Array of attributes to getter functions (for serialization of requests)
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
        'standard_three_image_text' => 'getStandardThreeImageText'
    ];

    /**
     * Array of attributes where the key is the local name,
     * and the value is the original name
     *
     * @return array
     */
    public static function attributeMap(): array
    {
        return self::$attributeMap;
    }

    /**
     * Array of attributes to setter functions (for deserialization of responses)
     *
     * @return array
     */
    public static function setters(): array
    {
        return self::$setters;
    }

    /**
     * Array of attributes to getter functions (for serialization of requests)
     *
     * @return array
     */
    public static function getters(): array
    {
        return self::$getters;
    }

    /**
     * The original name of the model.
     *
     * @return string
     */
    public function getModelName(): string
    {
        return self::$openAPIModelName;
    }


    /**
     * Associative array for storing property values
     *
     * @var array
     */
    protected array $container = [];

    /**
     * Constructor
     *
     * @param array|null $data Associated array of property values
     *                      initializing the model
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
    * Sets $this->container[$variableName] to the given data or to the given default Value; if $variableName
    * is nullable and its value is set to null in the $fields array, then mark it as "set to null" in the
    * $this->openAPINullablesSetToNull array
    *
    * @param string $variableName
    * @param array  $fields
    * @param mixed  $defaultValue
    */
    private function setIfExists(string $variableName, array $fields, $defaultValue): void
    {
        if (self::isNullable($variableName) && array_key_exists($variableName, $fields) && is_null($fields[$variableName])) {
            $this->openAPINullablesSetToNull[] = $variableName;
        }

        $this->container[$variableName] = $fields[$variableName] ?? $defaultValue;
    }

    /**
     * Show all the invalid properties with reasons.
     *
     * @return array invalid properties with reasons
     */
    public function listInvalidProperties(): array
    {
        $invalidProperties = [];

        if ($this->container['content_module_type'] === null) {
            $invalidProperties[] = "'content_module_type' can't be null";
        }
        return $invalidProperties;
    }

    /**
     * Validate all the properties in the model
     * return true if all passed
     *
     * @return bool True if all properties are valid
     */
    public function valid(): bool
    {
        return count($this->listInvalidProperties()) === 0;
    }


    /**
     * Gets content_module_type
     *
     * @return string
     */
    public function getContentModuleType(): string
    {
        return $this->container['content_module_type'];
    }

    /**
     * Sets content_module_type
     *
     * @param string $content_module_type content_module_type
     *
     * @return self
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
     * Gets standard_company_logo
     *
     * @return \OpenAPI\Client\Model\aplusContent\StandardCompanyLogoModule|null
     */
    public function getStandardCompanyLogo(): ?\OpenAPI\Client\Model\aplusContent\StandardCompanyLogoModule
    {
        return $this->container['standard_company_logo'];
    }

    /**
     * Sets standard_company_logo
     *
     * @param \OpenAPI\Client\Model\aplusContent\StandardCompanyLogoModule|null $standard_company_logo standard_company_logo
     *
     * @return self
     */
    public function setStandardCompanyLogo(?\OpenAPI\Client\Model\aplusContent\StandardCompanyLogoModule $standard_company_logo): self
    {
        if (is_null($standard_company_logo)) {
            array_push($this->openAPINullablesSetToNull, 'standard_company_logo');
        } else {
            $nullablesSetToNull = $this->getOpenAPINullablesSetToNull();
            $index = array_search('standard_company_logo', $nullablesSetToNull);
            if ($index !== false) {
                unset($nullablesSetToNull[$index]);
                $this->setOpenAPINullablesSetToNull($nullablesSetToNull);
            }
        }
        $this->container['standard_company_logo'] = $standard_company_logo;

        return $this;
    }

    /**
     * Gets standard_comparison_table
     *
     * @return \OpenAPI\Client\Model\aplusContent\StandardComparisonTableModule|null
     */
    public function getStandardComparisonTable(): ?\OpenAPI\Client\Model\aplusContent\StandardComparisonTableModule
    {
        return $this->container['standard_comparison_table'];
    }

    /**
     * Sets standard_comparison_table
     *
     * @param \OpenAPI\Client\Model\aplusContent\StandardComparisonTableModule|null $standard_comparison_table standard_comparison_table
     *
     * @return self
     */
    public function setStandardComparisonTable(?\OpenAPI\Client\Model\aplusContent\StandardComparisonTableModule $standard_comparison_table): self
    {
        if (is_null($standard_comparison_table)) {
            array_push($this->openAPINullablesSetToNull, 'standard_comparison_table');
        } else {
            $nullablesSetToNull = $this->getOpenAPINullablesSetToNull();
            $index = array_search('standard_comparison_table', $nullablesSetToNull);
            if ($index !== false) {
                unset($nullablesSetToNull[$index]);
                $this->setOpenAPINullablesSetToNull($nullablesSetToNull);
            }
        }
        $this->container['standard_comparison_table'] = $standard_comparison_table;

        return $this;
    }

    /**
     * Gets standard_four_image_text
     *
     * @return \OpenAPI\Client\Model\aplusContent\StandardFourImageTextModule|null
     */
    public function getStandardFourImageText(): ?\OpenAPI\Client\Model\aplusContent\StandardFourImageTextModule
    {
        return $this->container['standard_four_image_text'];
    }

    /**
     * Sets standard_four_image_text
     *
     * @param \OpenAPI\Client\Model\aplusContent\StandardFourImageTextModule|null $standard_four_image_text standard_four_image_text
     *
     * @return self
     */
    public function setStandardFourImageText(?\OpenAPI\Client\Model\aplusContent\StandardFourImageTextModule $standard_four_image_text): self
    {
        if (is_null($standard_four_image_text)) {
            array_push($this->openAPINullablesSetToNull, 'standard_four_image_text');
        } else {
            $nullablesSetToNull = $this->getOpenAPINullablesSetToNull();
            $index = array_search('standard_four_image_text', $nullablesSetToNull);
            if ($index !== false) {
                unset($nullablesSetToNull[$index]);
                $this->setOpenAPINullablesSetToNull($nullablesSetToNull);
            }
        }
        $this->container['standard_four_image_text'] = $standard_four_image_text;

        return $this;
    }

    /**
     * Gets standard_four_image_text_quadrant
     *
     * @return \OpenAPI\Client\Model\aplusContent\StandardFourImageTextQuadrantModule|null
     */
    public function getStandardFourImageTextQuadrant(): ?\OpenAPI\Client\Model\aplusContent\StandardFourImageTextQuadrantModule
    {
        return $this->container['standard_four_image_text_quadrant'];
    }

    /**
     * Sets standard_four_image_text_quadrant
     *
     * @param \OpenAPI\Client\Model\aplusContent\StandardFourImageTextQuadrantModule|null $standard_four_image_text_quadrant standard_four_image_text_quadrant
     *
     * @return self
     */
    public function setStandardFourImageTextQuadrant(?\OpenAPI\Client\Model\aplusContent\StandardFourImageTextQuadrantModule $standard_four_image_text_quadrant): self
    {
        if (is_null($standard_four_image_text_quadrant)) {
            array_push($this->openAPINullablesSetToNull, 'standard_four_image_text_quadrant');
        } else {
            $nullablesSetToNull = $this->getOpenAPINullablesSetToNull();
            $index = array_search('standard_four_image_text_quadrant', $nullablesSetToNull);
            if ($index !== false) {
                unset($nullablesSetToNull[$index]);
                $this->setOpenAPINullablesSetToNull($nullablesSetToNull);
            }
        }
        $this->container['standard_four_image_text_quadrant'] = $standard_four_image_text_quadrant;

        return $this;
    }

    /**
     * Gets standard_header_image_text
     *
     * @return \OpenAPI\Client\Model\aplusContent\StandardHeaderImageTextModule|null
     */
    public function getStandardHeaderImageText(): ?\OpenAPI\Client\Model\aplusContent\StandardHeaderImageTextModule
    {
        return $this->container['standard_header_image_text'];
    }

    /**
     * Sets standard_header_image_text
     *
     * @param \OpenAPI\Client\Model\aplusContent\StandardHeaderImageTextModule|null $standard_header_image_text standard_header_image_text
     *
     * @return self
     */
    public function setStandardHeaderImageText(?\OpenAPI\Client\Model\aplusContent\StandardHeaderImageTextModule $standard_header_image_text): self
    {
        if (is_null($standard_header_image_text)) {
            array_push($this->openAPINullablesSetToNull, 'standard_header_image_text');
        } else {
            $nullablesSetToNull = $this->getOpenAPINullablesSetToNull();
            $index = array_search('standard_header_image_text', $nullablesSetToNull);
            if ($index !== false) {
                unset($nullablesSetToNull[$index]);
                $this->setOpenAPINullablesSetToNull($nullablesSetToNull);
            }
        }
        $this->container['standard_header_image_text'] = $standard_header_image_text;

        return $this;
    }

    /**
     * Gets standard_image_sidebar
     *
     * @return \OpenAPI\Client\Model\aplusContent\StandardImageSidebarModule|null
     */
    public function getStandardImageSidebar(): ?\OpenAPI\Client\Model\aplusContent\StandardImageSidebarModule
    {
        return $this->container['standard_image_sidebar'];
    }

    /**
     * Sets standard_image_sidebar
     *
     * @param \OpenAPI\Client\Model\aplusContent\StandardImageSidebarModule|null $standard_image_sidebar standard_image_sidebar
     *
     * @return self
     */
    public function setStandardImageSidebar(?\OpenAPI\Client\Model\aplusContent\StandardImageSidebarModule $standard_image_sidebar): self
    {
        if (is_null($standard_image_sidebar)) {
            array_push($this->openAPINullablesSetToNull, 'standard_image_sidebar');
        } else {
            $nullablesSetToNull = $this->getOpenAPINullablesSetToNull();
            $index = array_search('standard_image_sidebar', $nullablesSetToNull);
            if ($index !== false) {
                unset($nullablesSetToNull[$index]);
                $this->setOpenAPINullablesSetToNull($nullablesSetToNull);
            }
        }
        $this->container['standard_image_sidebar'] = $standard_image_sidebar;

        return $this;
    }

    /**
     * Gets standard_image_text_overlay
     *
     * @return \OpenAPI\Client\Model\aplusContent\StandardImageTextOverlayModule|null
     */
    public function getStandardImageTextOverlay(): ?\OpenAPI\Client\Model\aplusContent\StandardImageTextOverlayModule
    {
        return $this->container['standard_image_text_overlay'];
    }

    /**
     * Sets standard_image_text_overlay
     *
     * @param \OpenAPI\Client\Model\aplusContent\StandardImageTextOverlayModule|null $standard_image_text_overlay standard_image_text_overlay
     *
     * @return self
     */
    public function setStandardImageTextOverlay(?\OpenAPI\Client\Model\aplusContent\StandardImageTextOverlayModule $standard_image_text_overlay): self
    {
        if (is_null($standard_image_text_overlay)) {
            array_push($this->openAPINullablesSetToNull, 'standard_image_text_overlay');
        } else {
            $nullablesSetToNull = $this->getOpenAPINullablesSetToNull();
            $index = array_search('standard_image_text_overlay', $nullablesSetToNull);
            if ($index !== false) {
                unset($nullablesSetToNull[$index]);
                $this->setOpenAPINullablesSetToNull($nullablesSetToNull);
            }
        }
        $this->container['standard_image_text_overlay'] = $standard_image_text_overlay;

        return $this;
    }

    /**
     * Gets standard_multiple_image_text
     *
     * @return \OpenAPI\Client\Model\aplusContent\StandardMultipleImageTextModule|null
     */
    public function getStandardMultipleImageText(): ?\OpenAPI\Client\Model\aplusContent\StandardMultipleImageTextModule
    {
        return $this->container['standard_multiple_image_text'];
    }

    /**
     * Sets standard_multiple_image_text
     *
     * @param \OpenAPI\Client\Model\aplusContent\StandardMultipleImageTextModule|null $standard_multiple_image_text standard_multiple_image_text
     *
     * @return self
     */
    public function setStandardMultipleImageText(?\OpenAPI\Client\Model\aplusContent\StandardMultipleImageTextModule $standard_multiple_image_text): self
    {
        if (is_null($standard_multiple_image_text)) {
            array_push($this->openAPINullablesSetToNull, 'standard_multiple_image_text');
        } else {
            $nullablesSetToNull = $this->getOpenAPINullablesSetToNull();
            $index = array_search('standard_multiple_image_text', $nullablesSetToNull);
            if ($index !== false) {
                unset($nullablesSetToNull[$index]);
                $this->setOpenAPINullablesSetToNull($nullablesSetToNull);
            }
        }
        $this->container['standard_multiple_image_text'] = $standard_multiple_image_text;

        return $this;
    }

    /**
     * Gets standard_product_description
     *
     * @return \OpenAPI\Client\Model\aplusContent\StandardProductDescriptionModule|null
     */
    public function getStandardProductDescription(): ?\OpenAPI\Client\Model\aplusContent\StandardProductDescriptionModule
    {
        return $this->container['standard_product_description'];
    }

    /**
     * Sets standard_product_description
     *
     * @param \OpenAPI\Client\Model\aplusContent\StandardProductDescriptionModule|null $standard_product_description standard_product_description
     *
     * @return self
     */
    public function setStandardProductDescription(?\OpenAPI\Client\Model\aplusContent\StandardProductDescriptionModule $standard_product_description): self
    {
        if (is_null($standard_product_description)) {
            array_push($this->openAPINullablesSetToNull, 'standard_product_description');
        } else {
            $nullablesSetToNull = $this->getOpenAPINullablesSetToNull();
            $index = array_search('standard_product_description', $nullablesSetToNull);
            if ($index !== false) {
                unset($nullablesSetToNull[$index]);
                $this->setOpenAPINullablesSetToNull($nullablesSetToNull);
            }
        }
        $this->container['standard_product_description'] = $standard_product_description;

        return $this;
    }

    /**
     * Gets standard_single_image_highlights
     *
     * @return \OpenAPI\Client\Model\aplusContent\StandardSingleImageHighlightsModule|null
     */
    public function getStandardSingleImageHighlights(): ?\OpenAPI\Client\Model\aplusContent\StandardSingleImageHighlightsModule
    {
        return $this->container['standard_single_image_highlights'];
    }

    /**
     * Sets standard_single_image_highlights
     *
     * @param \OpenAPI\Client\Model\aplusContent\StandardSingleImageHighlightsModule|null $standard_single_image_highlights standard_single_image_highlights
     *
     * @return self
     */
    public function setStandardSingleImageHighlights(?\OpenAPI\Client\Model\aplusContent\StandardSingleImageHighlightsModule $standard_single_image_highlights): self
    {
        if (is_null($standard_single_image_highlights)) {
            array_push($this->openAPINullablesSetToNull, 'standard_single_image_highlights');
        } else {
            $nullablesSetToNull = $this->getOpenAPINullablesSetToNull();
            $index = array_search('standard_single_image_highlights', $nullablesSetToNull);
            if ($index !== false) {
                unset($nullablesSetToNull[$index]);
                $this->setOpenAPINullablesSetToNull($nullablesSetToNull);
            }
        }
        $this->container['standard_single_image_highlights'] = $standard_single_image_highlights;

        return $this;
    }

    /**
     * Gets standard_single_image_specs_detail
     *
     * @return \OpenAPI\Client\Model\aplusContent\StandardSingleImageSpecsDetailModule|null
     */
    public function getStandardSingleImageSpecsDetail(): ?\OpenAPI\Client\Model\aplusContent\StandardSingleImageSpecsDetailModule
    {
        return $this->container['standard_single_image_specs_detail'];
    }

    /**
     * Sets standard_single_image_specs_detail
     *
     * @param \OpenAPI\Client\Model\aplusContent\StandardSingleImageSpecsDetailModule|null $standard_single_image_specs_detail standard_single_image_specs_detail
     *
     * @return self
     */
    public function setStandardSingleImageSpecsDetail(?\OpenAPI\Client\Model\aplusContent\StandardSingleImageSpecsDetailModule $standard_single_image_specs_detail): self
    {
        if (is_null($standard_single_image_specs_detail)) {
            array_push($this->openAPINullablesSetToNull, 'standard_single_image_specs_detail');
        } else {
            $nullablesSetToNull = $this->getOpenAPINullablesSetToNull();
            $index = array_search('standard_single_image_specs_detail', $nullablesSetToNull);
            if ($index !== false) {
                unset($nullablesSetToNull[$index]);
                $this->setOpenAPINullablesSetToNull($nullablesSetToNull);
            }
        }
        $this->container['standard_single_image_specs_detail'] = $standard_single_image_specs_detail;

        return $this;
    }

    /**
     * Gets standard_single_side_image
     *
     * @return \OpenAPI\Client\Model\aplusContent\StandardSingleSideImageModule|null
     */
    public function getStandardSingleSideImage(): ?\OpenAPI\Client\Model\aplusContent\StandardSingleSideImageModule
    {
        return $this->container['standard_single_side_image'];
    }

    /**
     * Sets standard_single_side_image
     *
     * @param \OpenAPI\Client\Model\aplusContent\StandardSingleSideImageModule|null $standard_single_side_image standard_single_side_image
     *
     * @return self
     */
    public function setStandardSingleSideImage(?\OpenAPI\Client\Model\aplusContent\StandardSingleSideImageModule $standard_single_side_image): self
    {
        if (is_null($standard_single_side_image)) {
            array_push($this->openAPINullablesSetToNull, 'standard_single_side_image');
        } else {
            $nullablesSetToNull = $this->getOpenAPINullablesSetToNull();
            $index = array_search('standard_single_side_image', $nullablesSetToNull);
            if ($index !== false) {
                unset($nullablesSetToNull[$index]);
                $this->setOpenAPINullablesSetToNull($nullablesSetToNull);
            }
        }
        $this->container['standard_single_side_image'] = $standard_single_side_image;

        return $this;
    }

    /**
     * Gets standard_tech_specs
     *
     * @return \OpenAPI\Client\Model\aplusContent\StandardTechSpecsModule|null
     */
    public function getStandardTechSpecs(): ?\OpenAPI\Client\Model\aplusContent\StandardTechSpecsModule
    {
        return $this->container['standard_tech_specs'];
    }

    /**
     * Sets standard_tech_specs
     *
     * @param \OpenAPI\Client\Model\aplusContent\StandardTechSpecsModule|null $standard_tech_specs standard_tech_specs
     *
     * @return self
     */
    public function setStandardTechSpecs(?\OpenAPI\Client\Model\aplusContent\StandardTechSpecsModule $standard_tech_specs): self
    {
        if (is_null($standard_tech_specs)) {
            array_push($this->openAPINullablesSetToNull, 'standard_tech_specs');
        } else {
            $nullablesSetToNull = $this->getOpenAPINullablesSetToNull();
            $index = array_search('standard_tech_specs', $nullablesSetToNull);
            if ($index !== false) {
                unset($nullablesSetToNull[$index]);
                $this->setOpenAPINullablesSetToNull($nullablesSetToNull);
            }
        }
        $this->container['standard_tech_specs'] = $standard_tech_specs;

        return $this;
    }

    /**
     * Gets standard_text
     *
     * @return \OpenAPI\Client\Model\aplusContent\StandardTextModule|null
     */
    public function getStandardText(): ?\OpenAPI\Client\Model\aplusContent\StandardTextModule
    {
        return $this->container['standard_text'];
    }

    /**
     * Sets standard_text
     *
     * @param \OpenAPI\Client\Model\aplusContent\StandardTextModule|null $standard_text standard_text
     *
     * @return self
     */
    public function setStandardText(?\OpenAPI\Client\Model\aplusContent\StandardTextModule $standard_text): self
    {
        if (is_null($standard_text)) {
            array_push($this->openAPINullablesSetToNull, 'standard_text');
        } else {
            $nullablesSetToNull = $this->getOpenAPINullablesSetToNull();
            $index = array_search('standard_text', $nullablesSetToNull);
            if ($index !== false) {
                unset($nullablesSetToNull[$index]);
                $this->setOpenAPINullablesSetToNull($nullablesSetToNull);
            }
        }
        $this->container['standard_text'] = $standard_text;

        return $this;
    }

    /**
     * Gets standard_three_image_text
     *
     * @return \OpenAPI\Client\Model\aplusContent\StandardThreeImageTextModule|null
     */
    public function getStandardThreeImageText(): ?\OpenAPI\Client\Model\aplusContent\StandardThreeImageTextModule
    {
        return $this->container['standard_three_image_text'];
    }

    /**
     * Sets standard_three_image_text
     *
     * @param \OpenAPI\Client\Model\aplusContent\StandardThreeImageTextModule|null $standard_three_image_text standard_three_image_text
     *
     * @return self
     */
    public function setStandardThreeImageText(?\OpenAPI\Client\Model\aplusContent\StandardThreeImageTextModule $standard_three_image_text): self
    {
        if (is_null($standard_three_image_text)) {
            array_push($this->openAPINullablesSetToNull, 'standard_three_image_text');
        } else {
            $nullablesSetToNull = $this->getOpenAPINullablesSetToNull();
            $index = array_search('standard_three_image_text', $nullablesSetToNull);
            if ($index !== false) {
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
     * @param integer $offset Offset
     *
     * @return boolean
     */
    public function offsetExists($offset): bool
    {
        return isset($this->container[$offset]);
    }

    /**
     * Gets offset.
     *
     * @param integer $offset Offset
     *
     * @return mixed|null
     */
    #[\ReturnTypeWillChange]
    public function offsetGet($offset): mixed
    {
        return $this->container[$offset] ?? null;
    }

    /**
     * Sets value based on offset.
     *
     * @param int|null $offset Offset
     * @param mixed    $value  Value to be set
     *
     * @return void
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
     * @param integer $offset Offset
     *
     * @return void
     */
    public function offsetUnset($offset): void
    {
        unset($this->container[$offset]);
    }

    /**
     * Serializes the object to a value that can be serialized natively by json_encode().
     * @link https://www.php.net/manual/en/jsonserializable.jsonserialize.php
     *
     * @return mixed Returns data which can be serialized by json_encode(), which is a value
     * of any type other than a resource.
     */
    #[\ReturnTypeWillChange]
    public function jsonSerialize(): mixed
    {
       return ObjectSerializer::sanitizeForSerialization($this);
    }

    /**
     * Gets the string presentation of the object
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
     * Gets a header-safe presentation of the object
     *
     * @return string
     */
    public function toHeaderValue(): string
    {
        return json_encode(ObjectSerializer::sanitizeForSerialization($this));
    }
}


