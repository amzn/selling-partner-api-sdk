<?php
/**
 * StandardImageSidebarModule
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
 * StandardImageSidebarModule Class Doc Comment
 *
 * @category Class
 * @description Two images, two paragraphs, and two bulleted lists. One image is smaller and displayed in the sidebar.
 * @package  OpenAPI\Client
 * @author   OpenAPI Generator team
 * @link     https://openapi-generator.tech
 * @implements \ArrayAccess<string, mixed>
 */
class StandardImageSidebarModule implements ModelInterface, ArrayAccess, \JsonSerializable
{
    public const DISCRIMINATOR = null;

    /**
      * The original name of the model.
      *
      * @var string
      */
    protected static string $openAPIModelName = 'StandardImageSidebarModule';

    /**
      * Array of property to type mappings. Used for (de)serialization
      *
      * @var string[]
      */
    protected static array $openAPITypes = [
             'headline' => '\OpenAPI\Client\Model\aplusContent\TextComponent',
             'image_caption_block' => '\OpenAPI\Client\Model\aplusContent\StandardImageCaptionBlock',
             'description_text_block' => '\OpenAPI\Client\Model\aplusContent\StandardTextBlock',
             'description_list_block' => '\OpenAPI\Client\Model\aplusContent\StandardTextListBlock',
             'sidebar_image_text_block' => '\OpenAPI\Client\Model\aplusContent\StandardImageTextBlock',
             'sidebar_list_block' => '\OpenAPI\Client\Model\aplusContent\StandardTextListBlock'    ];

    /**
      * Array of property to format mappings. Used for (de)serialization
      *
      * @var string[]
      * @phpstan-var array<string, string|null>
      * @psalm-var array<string, string|null>
      */
    protected static array $openAPIFormats = [
            'headline' => null,
            'image_caption_block' => null,
            'description_text_block' => null,
            'description_list_block' => null,
            'sidebar_image_text_block' => null,
            'sidebar_list_block' => null    ];

    /**
      * Array of nullable properties. Used for (de)serialization
      *
      * @var boolean[]
      */
    protected static array $openAPINullables = [
        'headline' => true,
        'image_caption_block' => true,
        'description_text_block' => true,
        'description_list_block' => true,
        'sidebar_image_text_block' => true,
        'sidebar_list_block' => true
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
        'headline' => 'headline',
                'image_caption_block' => 'imageCaptionBlock',
                'description_text_block' => 'descriptionTextBlock',
                'description_list_block' => 'descriptionListBlock',
                'sidebar_image_text_block' => 'sidebarImageTextBlock',
                'sidebar_list_block' => 'sidebarListBlock'
        
    ];

    /**
     * Array of attributes to setter functions (for deserialization of responses)
     *
     * @var string[]
     */
    protected static array $setters = [
        'headline' => 'setHeadline',
        'image_caption_block' => 'setImageCaptionBlock',
        'description_text_block' => 'setDescriptionTextBlock',
        'description_list_block' => 'setDescriptionListBlock',
        'sidebar_image_text_block' => 'setSidebarImageTextBlock',
        'sidebar_list_block' => 'setSidebarListBlock'
    ];

    /**
     * Array of attributes to getter functions (for serialization of requests)
     *
     * @var string[]
     */
    protected static array $getters = [
        'headline' => 'getHeadline',
        'image_caption_block' => 'getImageCaptionBlock',
        'description_text_block' => 'getDescriptionTextBlock',
        'description_list_block' => 'getDescriptionListBlock',
        'sidebar_image_text_block' => 'getSidebarImageTextBlock',
        'sidebar_list_block' => 'getSidebarListBlock'
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
        $this->setIfExists('headline', $data ?? [], null);
        $this->setIfExists('image_caption_block', $data ?? [], null);
        $this->setIfExists('description_text_block', $data ?? [], null);
        $this->setIfExists('description_list_block', $data ?? [], null);
        $this->setIfExists('sidebar_image_text_block', $data ?? [], null);
        $this->setIfExists('sidebar_list_block', $data ?? [], null);
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
     * Gets headline
     *
     * @return \OpenAPI\Client\Model\aplusContent\TextComponent|null
     */
    public function getHeadline(): ?\OpenAPI\Client\Model\aplusContent\TextComponent
    {
        return $this->container['headline'];
    }

    /**
     * Sets headline
     *
     * @param \OpenAPI\Client\Model\aplusContent\TextComponent|null $headline headline
     *
     * @return self
     */
    public function setHeadline(?\OpenAPI\Client\Model\aplusContent\TextComponent $headline): self
    {
        if (is_null($headline)) {
            array_push($this->openAPINullablesSetToNull, 'headline');
        } else {
            $nullablesSetToNull = $this->getOpenAPINullablesSetToNull();
            $index = array_search('headline', $nullablesSetToNull);
            if ($index !== false) {
                unset($nullablesSetToNull[$index]);
                $this->setOpenAPINullablesSetToNull($nullablesSetToNull);
            }
        }
        $this->container['headline'] = $headline;

        return $this;
    }

    /**
     * Gets image_caption_block
     *
     * @return \OpenAPI\Client\Model\aplusContent\StandardImageCaptionBlock|null
     */
    public function getImageCaptionBlock(): ?\OpenAPI\Client\Model\aplusContent\StandardImageCaptionBlock
    {
        return $this->container['image_caption_block'];
    }

    /**
     * Sets image_caption_block
     *
     * @param \OpenAPI\Client\Model\aplusContent\StandardImageCaptionBlock|null $image_caption_block image_caption_block
     *
     * @return self
     */
    public function setImageCaptionBlock(?\OpenAPI\Client\Model\aplusContent\StandardImageCaptionBlock $image_caption_block): self
    {
        if (is_null($image_caption_block)) {
            array_push($this->openAPINullablesSetToNull, 'image_caption_block');
        } else {
            $nullablesSetToNull = $this->getOpenAPINullablesSetToNull();
            $index = array_search('image_caption_block', $nullablesSetToNull);
            if ($index !== false) {
                unset($nullablesSetToNull[$index]);
                $this->setOpenAPINullablesSetToNull($nullablesSetToNull);
            }
        }
        $this->container['image_caption_block'] = $image_caption_block;

        return $this;
    }

    /**
     * Gets description_text_block
     *
     * @return \OpenAPI\Client\Model\aplusContent\StandardTextBlock|null
     */
    public function getDescriptionTextBlock(): ?\OpenAPI\Client\Model\aplusContent\StandardTextBlock
    {
        return $this->container['description_text_block'];
    }

    /**
     * Sets description_text_block
     *
     * @param \OpenAPI\Client\Model\aplusContent\StandardTextBlock|null $description_text_block description_text_block
     *
     * @return self
     */
    public function setDescriptionTextBlock(?\OpenAPI\Client\Model\aplusContent\StandardTextBlock $description_text_block): self
    {
        if (is_null($description_text_block)) {
            array_push($this->openAPINullablesSetToNull, 'description_text_block');
        } else {
            $nullablesSetToNull = $this->getOpenAPINullablesSetToNull();
            $index = array_search('description_text_block', $nullablesSetToNull);
            if ($index !== false) {
                unset($nullablesSetToNull[$index]);
                $this->setOpenAPINullablesSetToNull($nullablesSetToNull);
            }
        }
        $this->container['description_text_block'] = $description_text_block;

        return $this;
    }

    /**
     * Gets description_list_block
     *
     * @return \OpenAPI\Client\Model\aplusContent\StandardTextListBlock|null
     */
    public function getDescriptionListBlock(): ?\OpenAPI\Client\Model\aplusContent\StandardTextListBlock
    {
        return $this->container['description_list_block'];
    }

    /**
     * Sets description_list_block
     *
     * @param \OpenAPI\Client\Model\aplusContent\StandardTextListBlock|null $description_list_block description_list_block
     *
     * @return self
     */
    public function setDescriptionListBlock(?\OpenAPI\Client\Model\aplusContent\StandardTextListBlock $description_list_block): self
    {
        if (is_null($description_list_block)) {
            array_push($this->openAPINullablesSetToNull, 'description_list_block');
        } else {
            $nullablesSetToNull = $this->getOpenAPINullablesSetToNull();
            $index = array_search('description_list_block', $nullablesSetToNull);
            if ($index !== false) {
                unset($nullablesSetToNull[$index]);
                $this->setOpenAPINullablesSetToNull($nullablesSetToNull);
            }
        }
        $this->container['description_list_block'] = $description_list_block;

        return $this;
    }

    /**
     * Gets sidebar_image_text_block
     *
     * @return \OpenAPI\Client\Model\aplusContent\StandardImageTextBlock|null
     */
    public function getSidebarImageTextBlock(): ?\OpenAPI\Client\Model\aplusContent\StandardImageTextBlock
    {
        return $this->container['sidebar_image_text_block'];
    }

    /**
     * Sets sidebar_image_text_block
     *
     * @param \OpenAPI\Client\Model\aplusContent\StandardImageTextBlock|null $sidebar_image_text_block sidebar_image_text_block
     *
     * @return self
     */
    public function setSidebarImageTextBlock(?\OpenAPI\Client\Model\aplusContent\StandardImageTextBlock $sidebar_image_text_block): self
    {
        if (is_null($sidebar_image_text_block)) {
            array_push($this->openAPINullablesSetToNull, 'sidebar_image_text_block');
        } else {
            $nullablesSetToNull = $this->getOpenAPINullablesSetToNull();
            $index = array_search('sidebar_image_text_block', $nullablesSetToNull);
            if ($index !== false) {
                unset($nullablesSetToNull[$index]);
                $this->setOpenAPINullablesSetToNull($nullablesSetToNull);
            }
        }
        $this->container['sidebar_image_text_block'] = $sidebar_image_text_block;

        return $this;
    }

    /**
     * Gets sidebar_list_block
     *
     * @return \OpenAPI\Client\Model\aplusContent\StandardTextListBlock|null
     */
    public function getSidebarListBlock(): ?\OpenAPI\Client\Model\aplusContent\StandardTextListBlock
    {
        return $this->container['sidebar_list_block'];
    }

    /**
     * Sets sidebar_list_block
     *
     * @param \OpenAPI\Client\Model\aplusContent\StandardTextListBlock|null $sidebar_list_block sidebar_list_block
     *
     * @return self
     */
    public function setSidebarListBlock(?\OpenAPI\Client\Model\aplusContent\StandardTextListBlock $sidebar_list_block): self
    {
        if (is_null($sidebar_list_block)) {
            array_push($this->openAPINullablesSetToNull, 'sidebar_list_block');
        } else {
            $nullablesSetToNull = $this->getOpenAPINullablesSetToNull();
            $index = array_search('sidebar_list_block', $nullablesSetToNull);
            if ($index !== false) {
                unset($nullablesSetToNull[$index]);
                $this->setOpenAPINullablesSetToNull($nullablesSetToNull);
            }
        }
        $this->container['sidebar_list_block'] = $sidebar_list_block;

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


