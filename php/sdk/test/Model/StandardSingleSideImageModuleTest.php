<?php
/**
 * StandardSingleSideImageModuleTest
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
use SpApi\Model\aplusContent\v2020_11_01\StandardSingleSideImageModule;

/**
 * StandardSingleSideImageModuleTest Class Doc Comment
 *
 * @category    Class
 * @description A standard headline and body text with an image on the side.
 * @package     SpApi
 */
class StandardSingleSideImageModuleTest extends TestCase
{

    private StandardSingleSideImageModule $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new StandardSingleSideImageModule();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "StandardSingleSideImageModule"
     */
    public function testStandardSingleSideImageModule()
    {
        $this->assertInstanceOf(StandardSingleSideImageModule::class, $this->model);
    }

    /**
     * Test attribute "image_position_type"
     */
    public function testPropertyImagePositionType()
    {
        $enumInstance = new \SpApi\Model\aplusContent\v2020_11_01\PositionType();
        $allowedValues = $enumInstance->getAllowableEnumValues();
        $testValue = reset($allowedValues);
        
        $this->model->setImagePositionType($testValue);
        $this->assertEquals($testValue, $this->model->getImagePositionType());
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
