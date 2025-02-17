<?php
/**
 * ItemLevelFieldsTest
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
use SpApi\Model\merchantFulfillment\v0\ItemLevelFields;

/**
 * ItemLevelFieldsTest Class Doc Comment
 *
 * @category    Class
 * @description A list of item level fields.
 * @package     SpApi
 */
class ItemLevelFieldsTest extends TestCase
{

    private ItemLevelFields $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new ItemLevelFields();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "ItemLevelFields"
     */
    public function testItemLevelFields()
    {
        $this->assertInstanceOf(ItemLevelFields::class, $this->model);
    }

    /**
     * Test attribute "asin"
     */
    public function testPropertyAsin()
    {
        $testValue = 'test';
        
        $this->model->setAsin($testValue);
        $this->assertEquals($testValue, $this->model->getAsin());
    }

    /**
     * Test attribute "additional_inputs"
     */
    public function testPropertyAdditionalInputs()
    {
        $testValue = [];
        
        $this->model->setAdditionalInputs($testValue);
        $this->assertEquals($testValue, $this->model->getAdditionalInputs());
    }
}
