<?php
/**
 * ItemImageTest
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
use SpApi\Model\catalogItems\v2022_04_01\ItemImage;

/**
 * ItemImageTest Class Doc Comment
 *
 * @category    Class
 * @description Image for an item in the Amazon catalog.
 * @package     SpApi
 */
class ItemImageTest extends TestCase
{

    private ItemImage $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new ItemImage();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "ItemImage"
     */
    public function testItemImage()
    {
        $this->assertInstanceOf(ItemImage::class, $this->model);
    }

    /**
     * Test attribute "variant"
     */
    public function testPropertyVariant()
    {
        $enumInstance = new ItemImage();
        $allowedValues = $enumInstance->getVariantAllowableValues();
        $testValue = reset($allowedValues);
        $this->model->setVariant($testValue);
        $this->assertEquals($testValue, $this->model->getVariant());
    }

    /**
     * Test attribute "link"
     */
    public function testPropertyLink()
    {
        $testValue = 'test';
        
        $this->model->setLink($testValue);
        $this->assertEquals($testValue, $this->model->getLink());
    }

    /**
     * Test attribute "height"
     */
    public function testPropertyHeight()
    {
        $testValue = 123;
        
        $this->model->setHeight($testValue);
        $this->assertEquals($testValue, $this->model->getHeight());
    }

    /**
     * Test attribute "width"
     */
    public function testPropertyWidth()
    {
        $testValue = 123;
        
        $this->model->setWidth($testValue);
        $this->assertEquals($testValue, $this->model->getWidth());
    }
}
