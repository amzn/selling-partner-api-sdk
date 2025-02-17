<?php
/**
 * ItemInputTest
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
use SpApi\Model\fulfillment\inbound\v2024_03_20\ItemInput;

/**
 * ItemInputTest Class Doc Comment
 *
 * @category    Class
 * @description Defines an item&#39;s input parameters.
 * @package     SpApi
 */
class ItemInputTest extends TestCase
{

    private ItemInput $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new ItemInput();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "ItemInput"
     */
    public function testItemInput()
    {
        $this->assertInstanceOf(ItemInput::class, $this->model);
    }

    /**
     * Test attribute "expiration"
     */
    public function testPropertyExpiration()
    {
        $testValue = 'test';
        
        $this->model->setExpiration($testValue);
        $this->assertEquals($testValue, $this->model->getExpiration());
    }

    /**
     * Test attribute "label_owner"
     */
    public function testPropertyLabelOwner()
    {
        $enumInstance = new \SpApi\Model\fulfillment\inbound\v2024_03_20\LabelOwner();
        $allowedValues = $enumInstance->getAllowableEnumValues();
        $testValue = reset($allowedValues);
        
        $this->model->setLabelOwner($testValue);
        $this->assertEquals($testValue, $this->model->getLabelOwner());
    }

    /**
     * Test attribute "manufacturing_lot_code"
     */
    public function testPropertyManufacturingLotCode()
    {
        $testValue = 'test';
        
        $this->model->setManufacturingLotCode($testValue);
        $this->assertEquals($testValue, $this->model->getManufacturingLotCode());
    }

    /**
     * Test attribute "msku"
     */
    public function testPropertyMsku()
    {
        $testValue = 'test';
        
        $this->model->setMsku($testValue);
        $this->assertEquals($testValue, $this->model->getMsku());
    }

    /**
     * Test attribute "prep_owner"
     */
    public function testPropertyPrepOwner()
    {
        $enumInstance = new \SpApi\Model\fulfillment\inbound\v2024_03_20\PrepOwner();
        $allowedValues = $enumInstance->getAllowableEnumValues();
        $testValue = reset($allowedValues);
        
        $this->model->setPrepOwner($testValue);
        $this->assertEquals($testValue, $this->model->getPrepOwner());
    }

    /**
     * Test attribute "quantity"
     */
    public function testPropertyQuantity()
    {
        $testValue = 123;
        
        $this->model->setQuantity($testValue);
        $this->assertEquals($testValue, $this->model->getQuantity());
    }
}
