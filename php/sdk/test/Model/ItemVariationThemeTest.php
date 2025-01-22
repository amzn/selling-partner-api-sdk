<?php
/**
 * ItemVariationThemeTest
 *
 * PHP version 8.3
 *
 * @category Class
 * @package  OpenAPI\Client
 * @author   OpenAPI Generator team
 * @link     https://openapi-generator.tech
 */

namespace OpenAPI\Client\Test\Model;

use PHPUnit\Framework\TestCase;
use OpenAPI\Client\Model\catalogItems\ItemVariationTheme;

/**
 * ItemVariationThemeTest Class Doc Comment
 *
 * @category    Class
 * @description Variation theme indicating the combination of Amazon item catalog attributes that define the variation family.
 * @package     OpenAPI\Client
 */
class ItemVariationThemeTest extends TestCase
{

    private ItemVariationTheme $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new ItemVariationTheme();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "ItemVariationTheme"
     */
    public function testItemVariationTheme()
    {
        $this->assertInstanceOf(ItemVariationTheme::class, $this->model);
    }

    /**
     * Test attribute "attributes"
     */
    public function testPropertyAttributes()
    {
        $testValue = [];
        
        $this->model->setAttributes($testValue);
        $this->assertEquals($testValue, $this->model->getAttributes());
    }

    /**
     * Test attribute "theme"
     */
    public function testPropertyTheme()
    {
        $testValue = 'test';
        
        $this->model->setTheme($testValue);
        $this->assertEquals($testValue, $this->model->getTheme());
    }
}
