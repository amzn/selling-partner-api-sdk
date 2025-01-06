<?php
/**
 * ItemInputTest
 *
 * PHP version 7.4
 *
 * @category Class
 * @package  OpenAPI\Client
 * @author   OpenAPI Generator team
 * @link     https://openapi-generator.tech
 */

namespace OpenAPI\Client\Test\Model;

use PHPUnit\Framework\TestCase;
use OpenAPI\Client\Model\fulfillmentInbound\ItemInput;

/**
 * ItemInputTest Class Doc Comment
 *
 * @category    Class
 * @description Defines an item&#39;s input parameters.
 * @package     OpenAPI\Client
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
        $enumInstance = new \OpenAPI\Client\Model\fulfillmentInbound\LabelOwner();
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
        $enumInstance = new \OpenAPI\Client\Model\fulfillmentInbound\PrepOwner();
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
