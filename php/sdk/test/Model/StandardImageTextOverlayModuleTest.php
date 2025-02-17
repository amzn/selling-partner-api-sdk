<?php
/**
 * StandardImageTextOverlayModuleTest
 *
 * PHP version 8.3
 *
 * @category Class
 * @package  SpApi
 * @author   OpenAPI Generator team
 * @link     https://openapi-generator.tech
 */

namespace SpApi\Test\Model;

use PHPUnit\Framework\TestCase;
use SpApi\Model\aplusContent\v2020_11_01\StandardImageTextOverlayModule;

/**
 * StandardImageTextOverlayModuleTest Class Doc Comment
 *
 * @category    Class
 * @description A standard background image with a floating text box.
 * @package     SpApi
 */
class StandardImageTextOverlayModuleTest extends TestCase
{

    private StandardImageTextOverlayModule $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new StandardImageTextOverlayModule();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "StandardImageTextOverlayModule"
     */
    public function testStandardImageTextOverlayModule()
    {
        $this->assertInstanceOf(StandardImageTextOverlayModule::class, $this->model);
    }

    /**
     * Test attribute "overlay_color_type"
     */
    public function testPropertyOverlayColorType()
    {
        $enumInstance = new \SpApi\Model\aplusContent\v2020_11_01\ColorType();
        $allowedValues = $enumInstance->getAllowableEnumValues();
        $testValue = reset($allowedValues);
        
        $this->model->setOverlayColorType($testValue);
        $this->assertEquals($testValue, $this->model->getOverlayColorType());
    }

    /**
     * Test attribute "block"
     */
    public function testPropertyBlock()
    {
        
        $testValue = new \SpApi\Model\aplusContent\v2020_11_01\StandardImageTextBlock();
        
        $this->model->setBlock($testValue);
        $this->assertEquals($testValue, $this->model->getBlock());
    }
}
